
(function(){
  "use strict";

  var KM = 'vl_mov_v1', KC = 'vl_cat_v1';
  var MESES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  var MESES_C = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
  var C_ING = 'url(#gIng)', C_GAS = 'url(#gGas)';

  var CATS_DEF = {
    gasto: [
      {id:'g1', nom:'Comida', emo:'🛒'}, {id:'g2', nom:'Transporte', emo:'🚌'},
      {id:'g3', nom:'Vivienda', emo:'🏠'}, {id:'g4', nom:'Servicios', emo:'💡'},
      {id:'g5', nom:'Salud', emo:'💊'}, {id:'g6', nom:'Ocio', emo:'🎬'},
      {id:'g7', nom:'Otros', emo:'✨'}
    ],
    ingreso: [
      {id:'i1', nom:'Sueldo', emo:'💼'}, {id:'i2', nom:'Freelance', emo:'💻'},
      {id:'i3', nom:'Otros ingresos', emo:'✨'}
    ]
  };

  function load(k, def){
    try{ var raw = localStorage.getItem(k); if(!raw) return def; return JSON.parse(raw) || def; }
    catch(e){ return def; }
  }
  function save(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }

  var movs = load(KM, []);
  var cats = load(KC, null);
  if(!cats || !cats.gasto || !cats.ingreso){ cats = JSON.parse(JSON.stringify(CATS_DEF)); save(KC, cats); }

  var hoy = new Date();
  var vista = { y: hoy.getFullYear(), m: hoy.getMonth() };

  var fmt = new Intl.NumberFormat('es-AR', {maximumFractionDigits:0});
  function plata(n){ return '$' + fmt.format(Math.round(n)); }
  function corto(n){
    var a = Math.abs(n);
    if(a >= 1000000) return '$' + (Math.round(n / 100000) / 10).toString().replace('.', ',') + 'M';
    if(a >= 1000) return '$' + Math.round(n / 1000) + 'k';
    return '$' + Math.round(n);
  }
  function uid(){ return Date.now().toString(36) + Math.random().toString(36).slice(2,7); }
  function esc(s){
    return String(s).replace(/[&<>"']/g, function(c){
      return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c];
    });
  }
  function catDe(tipo, id){
    var l = cats[tipo] || [];
    for(var i=0;i<l.length;i++){ if(l[i].id === id) return l[i]; }
    return null;
  }
  function delMesDe(y, m){
    return movs.filter(function(mv){
      var d = mv.fecha.split('-');
      return +d[0] === y && (+d[1] - 1) === m;
    });
  }

  /* ── serie de 6 meses terminando en el mes visto ── */
  function serie(){
    var out = [];
    for(var i = 5; i >= 0; i--){
      var d = new Date(vista.y, vista.m - i, 1);
      var l = delMesDe(d.getFullYear(), d.getMonth());
      var ing = 0, gas = 0;
      l.forEach(function(mv){ if(mv.tipo === 'ingreso') ing += mv.monto; else gas += mv.monto; });
      out.push({ y: d.getFullYear(), m: d.getMonth(), ing: ing, gas: gas });
    }
    return out;
  }

  /* ── gráfico: barras agrupadas, un solo eje ── */
  var W = 600, H = 250, PL = 52, PR = 10, PT = 22, PB = 30;
  var tip = document.getElementById('tip');
  var chartWrap = document.getElementById('chartWrap');
  var datos6 = [];

  function escalaTope(max){
    if(max <= 0) return 1;
    var mag = Math.pow(10, Math.floor(Math.log10(max)));
    var pasos = [1, 1.1, 1.2, 1.4, 1.5, 1.6, 1.8, 2, 2.5, 3, 3.5, 4, 5, 6, 8, 10];
    for(var i=0;i<pasos.length;i++){ if(pasos[i] * mag >= max) return pasos[i] * mag; }
    return 10 * mag;
  }

  function dibujarChart(){
    datos6 = serie();
    var hayAlgo = datos6.some(function(d){ return d.ing > 0 || d.gas > 0; });
    var cont = document.getElementById('chart');

    if(!hayAlgo){
      cont.innerHTML = '<div class="empty">Cuando cargues movimientos, acá vas a ver cómo viene la mano mes a mes.</div>';
      return;
    }

    var max = 0;
    datos6.forEach(function(d){ max = Math.max(max, d.ing, d.gas); });
    var tope = escalaTope(max);
    var plotH = H - PT - PB, plotW = W - PL - PR;
    var banda = plotW / 6;
    var bw = Math.min(26, (banda - 14) / 2);
    var yDe = function(v){ return PT + plotH - (v / tope) * plotH; };

    var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Ingresos y gastos de los últimos seis meses">' +
      '<defs>' +
      '<linearGradient id="gIng" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0%" stop-color="#A0E5D9"/><stop offset="55%" stop-color="#09CDCD"/><stop offset="100%" stop-color="#145277"/></linearGradient>' +
      '<linearGradient id="gGas" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0%" stop-color="#D3A8FF"/><stop offset="55%" stop-color="#B57BEE"/><stop offset="100%" stop-color="#392D69"/></linearGradient>' +
      '</defs>';

    /* grilla hairline sólida, recesiva */
    [0, .5, 1].forEach(function(t){
      var y = PT + plotH - t * plotH;
      s += '<line x1="' + PL + '" y1="' + y + '" x2="' + (W - PR) + '" y2="' + y + '" stroke="rgba(255,255,255,.12)" stroke-width="1"/>';
      s += '<text x="' + (PL - 10) + '" y="' + (y + 4) + '" text-anchor="end" fill="rgba(205,196,250,.5)" ' +
           'font-family="Hanken Grotesk, sans-serif" font-size="11" font-weight="500">' + corto(tope * t) + '</text>';
    });

    datos6.forEach(function(d, i){
      var x0 = PL + i * banda;
      var cx = x0 + banda / 2;
      var gap = 2;
      var xi = cx - bw - gap / 2, xg = cx + gap / 2;

      [[xi, d.ing, C_ING], [xg, d.gas, C_GAS]].forEach(function(b){
        if(b[1] <= 0) return;
        var y = yDe(b[1]), h = Math.max(3, PT + plotH - y);
        s += '<path d="M' + b[0] + ' ' + (PT + plotH) + ' L' + b[0] + ' ' + (y + 4) +
             ' Q' + b[0] + ' ' + y + ' ' + (b[0] + 4) + ' ' + y +
             ' L' + (b[0] + bw - 4) + ' ' + y +
             ' Q' + (b[0] + bw) + ' ' + y + ' ' + (b[0] + bw) + ' ' + (y + 4) +
             ' L' + (b[0] + bw) + ' ' + (PT + plotH) + ' Z" fill="' + b[2] + '"/>';
      });

      s += '<text x="' + cx + '" y="' + (H - PB + 19) + '" text-anchor="middle" fill="rgba(205,196,250,.5)" ' +
           'font-family="Hanken Grotesk, sans-serif" font-size="11" font-weight="600">' + MESES_C[d.m] + '</text>';

      s += '<rect class="hit" data-i="' + i + '" x="' + x0 + '" y="' + PT + '" width="' + banda + '" height="' + plotH +
           '" fill="transparent" tabindex="0" role="button" aria-label="' + MESES[d.m] + ' ' + d.y +
           ': ingresos ' + plata(d.ing) + ', gastos ' + plata(d.gas) + '"/>';
    });

    /* etiqueta directa selectiva: solo el mes visto */
    var ult = datos6[5], xu = PL + 5 * banda + banda / 2;
    if(ult.ing > 0 || ult.gas > 0){
      var vMax = Math.max(ult.ing, ult.gas);
      s += '<text x="' + xu + '" y="' + (yDe(vMax) - 8) + '" text-anchor="middle" fill="rgba(237,234,251,.9)" ' +
           'font-family="Hanken Grotesk, sans-serif" font-size="11.5" font-weight="700">' + corto(vMax) + '</text>';
    }

    s += '<line x1="' + PL + '" y1="' + (PT + plotH) + '" x2="' + (W - PR) + '" y2="' + (PT + plotH) +
         '" stroke="rgba(255,255,255,.2)" stroke-width="1"/>';
    s += '</svg>';
    cont.innerHTML = s;
  }

  function mostrarTip(i, ev){
    var d = datos6[i];
    if(!d) return;
    var bal = d.ing - d.gas;
    tip.innerHTML = '<div class="tm">' + MESES[d.m] + ' ' + d.y + '</div>' +
      '<div class="tr"><span class="k"><i class="dot ing"></i>Ingresos</span><span>' + plata(d.ing) + '</span></div>' +
      '<div class="tr"><span class="k"><i class="dot gas"></i>Gastos</span><span>' + plata(d.gas) + '</span></div>' +
      '<div class="tr"><span class="k">Balance</span><span>' + (bal < 0 ? '-' : '') + plata(Math.abs(bal)) + '</span></div>';
    var r = chartWrap.getBoundingClientRect();
    var t = ev.target.getBoundingClientRect();
    tip.style.left = Math.min(Math.max(t.left - r.left + t.width / 2, 74), Math.max(74, r.width - 74)) + 'px';
    tip.style.top = (t.top - r.top + 6) + 'px';
    tip.style.opacity = '1';
  }
  function ocultarTip(){ tip.style.opacity = '0'; }

  chartWrap.addEventListener('mouseover', function(e){
    var h = e.target.closest ? e.target.closest('.hit') : null;
    if(h) mostrarTip(+h.getAttribute('data-i'), e);
  });
  chartWrap.addEventListener('focusin', function(e){
    var h = e.target.closest ? e.target.closest('.hit') : null;
    if(h) mostrarTip(+h.getAttribute('data-i'), e);
  });
  chartWrap.addEventListener('mouseleave', ocultarTip);
  chartWrap.addEventListener('focusout', ocultarTip);

  /* ── tabla equivalente ── */
  function dibujarTabla(){
    var tv = document.getElementById('tableView');
    if(tv.hidden) return;
    var f = datos6.map(function(d){
      var bal = d.ing - d.gas;
      return '<tr><td>' + MESES[d.m] + ' ' + d.y + '</td><td>' + plata(d.ing) + '</td><td>' + plata(d.gas) +
             '</td><td>' + (bal < 0 ? '-' : '') + plata(Math.abs(bal)) + '</td></tr>';
    }).join('');
    tv.innerHTML = '<table class="tbl"><caption class="sr-only"></caption><thead><tr><th>Mes</th><th>Ingresos</th><th>Gastos</th><th>Balance</th></tr></thead><tbody>' + f + '</tbody></table>';
  }
  document.getElementById('toggleTable').addEventListener('click', function(){
    var tv = document.getElementById('tableView');
    tv.hidden = !tv.hidden;
    this.textContent = tv.hidden ? 'Ver tabla' : 'Ocultar tabla';
    this.setAttribute('aria-expanded', tv.hidden ? 'false' : 'true');
    dibujarTabla();
  });

  /* ── render general ── */
  function render(){
    var lista = delMesDe(vista.y, vista.m).slice().sort(function(a,b){
      return a.fecha === b.fecha ? (b.creado - a.creado) : (a.fecha < b.fecha ? 1 : -1);
    });

    var ing = 0, gas = 0;
    lista.forEach(function(m){ if(m.tipo === 'ingreso') ing += m.monto; else gas += m.monto; });
    var bal = ing - gas;

    document.getElementById('stripMonth').textContent = MESES[vista.m];
    document.getElementById('stripYear').textContent = vista.y;
    document.getElementById('headSub').textContent = '@personal · ' + MESES[vista.m] + ' ' + vista.y;

    document.getElementById('balance').textContent = (bal < 0 ? '-' : '') + plata(Math.abs(bal));
    document.getElementById('vIng').textContent = plata(ing);
    document.getElementById('vGas').textContent = plata(gas);

    var ahorro = ing > 0 ? Math.round((ing - gas) / ing * 100) : null;
    document.getElementById('vAho').textContent = ahorro === null ? '—' : ahorro + '%';

    var nota;
    if(!lista.length) nota = 'Todavía no cargaste movimientos este mes.';
    else if(ing === 0) nota = 'Este mes solo hay gastos cargados.';
    else if(bal > 0) nota = 'Vas en positivo, ahorrando el ' + ahorro + '% de lo que entró.';
    else if(bal === 0) nota = 'Gastaste exactamente lo que entró.';
    else nota = 'Estás en rojo: gastaste ' + plata(Math.abs(bal)) + ' más de lo que entró.';
    document.getElementById('balanceNote').textContent = nota;

    document.getElementById('nextM').disabled =
      (vista.y > hoy.getFullYear()) || (vista.y === hoy.getFullYear() && vista.m >= hoy.getMonth());

    dibujarChart();
    dibujarTabla();

    var porCat = {};
    lista.forEach(function(m){
      if(m.tipo !== 'gasto') return;
      porCat[m.cat] = (porCat[m.cat] || 0) + m.monto;
    });
    var arr = Object.keys(porCat).map(function(id){
      var c = catDe('gasto', id);
      return { nom: c ? c.nom : 'Sin categoría', total: porCat[id] };
    }).sort(function(a,b){ return b.total - a.total; });

    var cEl = document.getElementById('cats');
    if(!arr.length){
      cEl.innerHTML = '<div class="empty">Sin gastos cargados en ' + MESES[vista.m].toLowerCase() + '.</div>';
    }else{
      var max = arr[0].total;
      cEl.innerHTML = arr.map(function(c){
        var w = max > 0 ? Math.max(3, Math.round(c.total / max * 100)) : 0;
        var p = gas > 0 ? Math.round(c.total / gas * 100) : 0;
        return '<div class="row"><span>' + esc(c.nom) + '<span class="pct">' + p + '%</span></span>' +
               '<span class="amt">' + plata(c.total) + '</span></div>' +
               '<div class="track"><div class="fill" style="width:' + w + '%"></div></div>';
      }).join('');
    }

    var tEl = document.getElementById('txs');
    if(!lista.length){
      tEl.innerHTML = '<div class="empty">Nada por acá. Cargá tu primer movimiento del mes.</div>';
    }else{
      tEl.innerHTML = lista.map(function(m){
        var c = catDe(m.tipo, m.cat);
        var d = m.fecha.split('-');
        var sub = (c ? c.nom : 'Sin categoría') + ' · ' + (+d[2]) + ' ' + MESES_C[+d[1] - 1];
        return '<div class="tx">' +
          '<span class="tx-left"><span class="chip">' + esc(c ? c.emo : '•') + '</span>' +
          '<span class="t"><div>' + esc(m.desc) + '</div><div class="date">' + esc(sub) + '</div></span></span>' +
          '<span class="tx-right"><span class="' + (m.tipo === 'ingreso' ? 'in' : 'out') + '">' +
          (m.tipo === 'ingreso' ? '+' : '-') + plata(m.monto) + '</span>' +
          '<button class="del" data-del="' + m.id + '" aria-label="Borrar ' + esc(m.desc) + '">✕</button></span></div>';
      }).join('');
    }
  }

  /* ── alta y baja de movimientos ── */
  var dlgMov = document.getElementById('dlgMov');
  var formMov = document.getElementById('formMov');
  var tipoActual = 'gasto';

  function abrirMov(tipo){
    tipoActual = tipo;
    document.getElementById('movTitle').textContent = tipo === 'ingreso' ? 'Nuevo ingreso' : 'Nuevo gasto';
    document.getElementById('fCat').innerHTML = cats[tipo].map(function(c){
      return '<option value="' + c.id + '">' + esc(c.emo + ' ' + c.nom) + '</option>';
    }).join('');
    formMov.reset();
    var d = (vista.y === hoy.getFullYear() && vista.m === hoy.getMonth()) ? hoy : new Date(vista.y, vista.m, 1);
    document.getElementById('fFecha').value =
      d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
    dlgMov.showModal();
    setTimeout(function(){ document.getElementById('fDesc').focus(); }, 60);
  }

  document.getElementById('addIng').addEventListener('click', function(){ abrirMov('ingreso'); });
  document.getElementById('addGas').addEventListener('click', function(){ abrirMov('gasto'); });
  document.getElementById('cancelMov').addEventListener('click', function(){ dlgMov.close(); });

  formMov.addEventListener('submit', function(){
    var desc = document.getElementById('fDesc').value.trim();
    var monto = parseFloat(document.getElementById('fMonto').value);
    var cat = document.getElementById('fCat').value;
    var fecha = document.getElementById('fFecha').value;
    if(!desc || !(monto > 0) || !fecha) return;
    movs.push({ id: uid(), tipo: tipoActual, desc: desc, monto: monto, cat: cat, fecha: fecha, creado: Date.now() });
    save(KM, movs);
    var p = fecha.split('-');
    vista = { y: +p[0], m: +p[1] - 1 };
    render();
  });

  document.getElementById('txs').addEventListener('click', function(e){
    var b = e.target.closest('[data-del]');
    if(!b) return;
    var id = b.getAttribute('data-del');
    var m = movs.filter(function(x){ return x.id === id; })[0];
    if(!m || !confirm('¿Borrar "' + m.desc + '"?')) return;
    movs = movs.filter(function(x){ return x.id !== id; });
    save(KM, movs);
    render();
  });

  document.getElementById('prevM').addEventListener('click', function(){
    vista.m--; if(vista.m < 0){ vista.m = 11; vista.y--; } render();
  });
  document.getElementById('nextM').addEventListener('click', function(){
    vista.m++; if(vista.m > 11){ vista.m = 0; vista.y++; } render();
  });

  /* ── categorías ── */
  var dlgCat = document.getElementById('dlgCat');
  var catManager = document.getElementById('catManager');
  function usos(id){ return movs.filter(function(m){ return m.cat === id; }).length; }

  function renderCats(){
    function bloque(tipo, titulo){
      var filas = cats[tipo].map(function(c){
        return '<div class="catrow"><span class="chip">' + esc(c.emo) + '</span>' +
          '<span class="nm">' + esc(c.nom) + '</span>' +
          '<button class="del" data-cat="' + c.id + '" data-tipo="' + tipo + '" aria-label="Borrar ' + esc(c.nom) + '">✕</button></div>';
      }).join('');
      return '<div class="cattitle">' + titulo + '</div>' + filas +
        '<div class="addcat" data-add="' + tipo + '">' +
          '<input class="emo" type="text" maxlength="2" placeholder="✨" aria-label="Emoji">' +
          '<input class="nm" type="text" maxlength="24" placeholder="Nueva categoría" aria-label="Nombre">' +
          '<button type="button">+</button></div>';
    }
    catManager.innerHTML = bloque('gasto', 'Gastos') + bloque('ingreso', 'Ingresos');
  }

  document.getElementById('openCats').addEventListener('click', function(){ renderCats(); dlgCat.showModal(); });
  document.getElementById('closeCats').addEventListener('click', function(){ dlgCat.close(); render(); });

  catManager.addEventListener('click', function(e){
    var b = e.target.closest('[data-cat]');
    if(b){
      var id = b.getAttribute('data-cat'), tipo = b.getAttribute('data-tipo');
      var c = catDe(tipo, id), n = usos(id);
      if(cats[tipo].length <= 1){ alert('Dejá al menos una categoría de ' + tipo + '.'); return; }
      var msg = n > 0
        ? 'Hay ' + n + ' movimiento(s) en "' + c.nom + '". Si la borrás, quedan como "Sin categoría". ¿Seguimos?'
        : '¿Borrar la categoría "' + c.nom + '"?';
      if(!confirm(msg)) return;
      cats[tipo] = cats[tipo].filter(function(x){ return x.id !== id; });
      save(KC, cats);
      renderCats();
      return;
    }
    var add = e.target.closest('[data-add]');
    if(add && e.target.tagName === 'BUTTON'){
      var t = add.getAttribute('data-add');
      var nom = add.querySelector('.nm').value.trim();
      var emo = add.querySelector('.emo').value.trim() || '✨';
      if(!nom){ add.querySelector('.nm').focus(); return; }
      cats[t].push({ id: uid(), nom: nom, emo: emo });
      save(KC, cats);
      renderCats();
    }
  });

  catManager.addEventListener('keydown', function(e){
    if(e.key !== 'Enter') return;
    var add = e.target.closest('[data-add]');
    if(!add) return;
    e.preventDefault();
    add.querySelector('button').click();
  });

  /* ══════════ QUEHACERES ══════════ */
  var KT = 'vl_tareas_v1', KP = 'vl_plan_v1';
  var SEMILLA = {"tareas": [{"id": "t01", "texto": "Poner a lavar la ropa", "hecho": false, "minutos": 10, "creado": 1}, {"id": "t02", "texto": "Cambiar las sábanas de las dos camas y ponerlas a lavar", "hecho": false, "minutos": 20, "creado": 2}, {"id": "t03", "texto": "Preparar pallares", "hecho": false, "minutos": 15, "creado": 3}, {"id": "t04", "texto": "Podar las palmeras", "hecho": false, "minutos": 60, "creado": 4}, {"id": "t05", "texto": "Palear abono", "hecho": false, "minutos": 45, "creado": 5}, {"id": "t06", "texto": "Correr las macetas para poder lavar", "hecho": false, "minutos": 15, "creado": 6}, {"id": "t07", "texto": "Correr las suculentas de su pisito", "hecho": false, "minutos": 10, "creado": 7}, {"id": "t08", "texto": "Lavar el garaje (el grande)", "hecho": false, "minutos": 90, "creado": 8}, {"id": "t09", "texto": "Lavar el piso del frente (el chico)", "hecho": false, "minutos": 35, "creado": 9}, {"id": "t10", "texto": "Lavar el pisito de las suculentas", "hecho": false, "minutos": 15, "creado": 10}, {"id": "t11", "texto": "Volver a poner las macetas en su lugar", "hecho": false, "minutos": 15, "creado": 11}, {"id": "t12", "texto": "Reubicar las suculentas según el sol de la temporada", "hecho": false, "minutos": 25, "creado": 12}, {"id": "t13", "texto": "Plantas: las 2 del frente", "hecho": false, "minutos": 20, "creado": 13}, {"id": "t14", "texto": "Plantas: el jengibre", "hecho": false, "minutos": 15, "creado": 14}, {"id": "t15", "texto": "Regar todas las plantas", "hecho": false, "minutos": 20, "creado": 15}, {"id": "t16", "texto": "Baba: poner a lavar sus sábanas", "hecho": false, "minutos": 10, "creado": 16}, {"id": "t17", "texto": "Baba: pasar el trapo a la galería", "hecho": false, "minutos": 30, "creado": 17}, {"id": "t18", "texto": "Baba: ordenar la cama", "hecho": false, "minutos": 10, "creado": 18}, {"id": "t19", "texto": "Baba: sacar verduras", "hecho": false, "minutos": 20, "creado": 19}, {"id": "t20", "texto": "Ir a la verdulería", "hecho": false, "minutos": 30, "creado": 20}, {"id": "t21", "texto": "Limpiar el polvo del modular de la sala", "hecho": false, "minutos": 30, "creado": 21}, {"id": "t22", "texto": "Lavar los platos y ordenar la cocina", "hecho": false, "minutos": 30, "creado": 22}, {"id": "t23", "texto": "Limpiar la mesa", "hecho": false, "minutos": 10, "creado": 23}, {"id": "t24", "texto": "Barrer la cocina", "hecho": false, "minutos": 10, "creado": 24}, {"id": "t25", "texto": "Trabajar 4 a 6 hs en la compu", "hecho": false, "minutos": 300, "creado": 25}, {"id": "t26", "texto": "Ayudar a Mau con su cel", "hecho": false, "minutos": 20, "creado": 26}], "plan": {"nota": "Son unas 10 horas de tareas más tu bloque de compu: no entra en un día. Te lo partí en dos jornadas — la primera es la de agua y patio, la segunda la de adentro y pantalla.", "bloques": [{"titulo": "Anoche, antes de dormir", "motivo": "Lo dejás girando y al amanecer ya está para colgar, como hacés siempre.", "ids": ["t01"]}, {"titulo": "Arrancá lo que tarda solo", "motivo": "Segunda carga y los pallares en remojo: trabajan sin vos mientras salís al patio.", "ids": ["t02", "t03"]}, {"titulo": "Ensuciá antes de lavar", "motivo": "La poda y el abono tiran hojas y tierra al piso; si lavás primero, lavás dos veces.", "ids": ["t04", "t05"]}, {"titulo": "Sacá todo del medio", "motivo": "Dejás las superficies libres de una vez y no frenás con la manguera en la mano.", "ids": ["t06", "t07"]}, {"titulo": "Manguera: de grande a chico", "motivo": "Una sola conexión y una sola mojada, arrancando por el garaje que es el que más tarda.", "ids": ["t08", "t09", "t10"]}, {"titulo": "Devolvé todo a su lugar", "motivo": "Recién ahora, con el piso seco, volvés a acomodar sin marcar nada.", "ids": ["t11", "t12"]}, {"titulo": "Al atardecer, las plantas", "motivo": "Sin sol fuerte no se queman: primero las trabajás una por una y al final regás todo junto.", "ids": ["t13", "t14", "t15"]}, {"titulo": "Segundo día: salí una sola vez", "motivo": "En lo de Baba arrancás por el lavarropas y hacés el resto mientras corre; la verdulería queda de paso a la vuelta.", "ids": ["t16", "t17", "t18", "t19", "t20"]}, {"titulo": "El modular, de una", "motivo": "Es la que venís pateando: sacala apenas volvés, con el envión de la salida y antes de sentarte.", "ids": ["t21"]}, {"titulo": "Cerrá la cocina de arriba abajo", "motivo": "Primero la pileta, después la mesa y recién al final el piso, para barrer lo que cayó de todo lo anterior.", "ids": ["t22", "t23", "t24"]}, {"titulo": "Bloque de compu intocable", "motivo": "Con la casa ya cerrada nadie te interrumpe: esas horas necesitan la cabeza entera, no los huecos del día.", "ids": ["t25"]}, {"titulo": "Cuando Mau esté disponible", "motivo": "Depende de otra persona, así que no lo pongas en el camino crítico: metelo en cualquier hueco.", "ids": ["t26"]}]}};
  var tareas = load(KT, null);
  var plan = load(KP, null);
  if(!Array.isArray(tareas)){ tareas = SEMILLA.tareas; plan = SEMILLA.plan; }

  var elTareas = document.getElementById('tareas');
  var elMeta = document.getElementById('tareasMeta');
  var elNota = document.getElementById('iaNota');
  var elEstado = document.getElementById('iaEstado');
  var btnOrganizar = document.getElementById('organizar');

  function tareaDe(id){
    for(var i=0;i<tareas.length;i++){ if(tareas[i].id === id) return tareas[i]; }
    return null;
  }
  function minutosTxt(m){
    if(!m || m <= 0) return '';
    if(m < 60) return m + ' min';
    var h = Math.floor(m / 60), r = m % 60;
    return h + ' h' + (r ? ' ' + r : '');
  }

  function filaTarea(t){
    return '<div class="task' + (t.hecho ? ' ok' : '') + '" data-fila="' + t.id + '">' +
      '<button type="button" class="tick" data-tick="' + t.id + '" role="checkbox" aria-checked="' + (t.hecho ? 'true' : 'false') +
      '" aria-label="' + esc(t.texto) + '">✓</button>' +
      '<span class="txt">' + esc(t.texto) + '</span>' +
      (t.minutos ? '<span class="min">' + minutosTxt(t.minutos) + '</span>' : '') +
      '<button class="del" data-quitar="' + t.id + '" aria-label="Borrar ' + esc(t.texto) + '">✕</button></div>';
  }

  function renderTareas(){
    var hechas = tareas.filter(function(t){ return t.hecho; }).length;
    elMeta.hidden = tareas.length === 0;
    if(tareas.length){
      document.getElementById('tareasCuenta').textContent = hechas + ' de ' + tareas.length + ' listas';
      document.getElementById('tareasBarra').style.width = Math.round(hechas / tareas.length * 100) + '%';
    }

    elNota.hidden = !(plan && plan.nota);
    if(plan && plan.nota) elNota.textContent = plan.nota;

    if(!tareas.length){
      elTareas.innerHTML = '<div class="empty">Escribí lo que tenés que hacer. Después, si querés, pedile a la IA que te lo ordene.</div>';
      return;
    }

    var usados = {}, html = '';

    if(plan && plan.bloques){
      plan.bloques.forEach(function(b){
        var filas = (b.ids || []).map(function(id){
          var t = tareaDe(id);
          if(!t || usados[id]) return '';
          usados[id] = 1;
          return filaTarea(t);
        }).join('');
        if(!filas) return;
        var mins = (b.ids || []).reduce(function(a, id){
          var t = tareaDe(id);
          return a + (t && !t.hecho ? (t.minutos || 0) : 0);
        }, 0);
        html += '<div class="bloque"><div class="bloque-t"><span>' + esc(b.titulo || 'Bloque') + '</span>' +
          (mins ? '<span class="mins">' + minutosTxt(mins) + '</span>' : '') + '</div>' +
          (b.motivo ? '<div class="bloque-m">' + esc(b.motivo) + '</div>' : '') + filas + '</div>';
      });
    }

    var sueltas = tareas.filter(function(t){ return !usados[t.id]; });
    if(sueltas.length){
      html += '<div class="bloque">' +
        (plan && plan.bloques && plan.bloques.length ? '<div class="bloque-t"><span>Sin ordenar todavía</span></div>' : '') +
        sueltas.map(filaTarea).join('') + '</div>';
    }
    elTareas.innerHTML = html;

    /* En iPhone el toque no siempre llega al contenedor: escuchamos fila por fila. */
    var filas = elTareas.querySelectorAll('[data-fila]');
    for(var i=0;i<filas.length;i++){
      (function(fila){
        var id = fila.getAttribute('data-fila');
        fila.addEventListener('click', function(ev){
          if(ev.target.closest('[data-quitar]')) return;
          alternar(id);
        });
      })(filas[i]);
    }
  }

  function alternar(id){
    var t = tareaDe(id);
    if(!t) return;
    t.hecho = !t.hecho;
    guardarTareas();
    renderTareas();
  }

  /* ── guardado: copia local siempre, y en tu cuenta si la página puede ── */
  var docTareas = null, escribiendo = false, pendiente = false, sinConfirmar = 0;

  function avisoSync(txt){
    var el = document.getElementById('syncNota');
    if(el) el.textContent = txt;
  }

  function empujarDB(){
    if(!docTareas) return;
    if(escribiendo){ pendiente = true; return; }
    escribiendo = true;
    sinConfirmar++;
    docTareas.set({ tareas: tareas, plan: plan, actualizado: Date.now() }).then(function(){
      escribiendo = false;
      sinConfirmar = Math.max(0, sinConfirmar - 1);
      if(pendiente){ pendiente = false; empujarDB(); }
      else if(!sinConfirmar) avisoSync('Sincronizado en tu cuenta de Claude: lo ves igual en el celu y en la compu.');
    }, function(){
      escribiendo = false;
      sinConfirmar = 0;
      pendiente = false;
      docTareas = null;   /* dejamos de escuchar al servidor: manda lo que tenés acá */
      avisoSync('No se pudo guardar en tu cuenta. Tus cambios quedan guardados en este dispositivo.');
    });
  }

  function guardarTareas(){
    save(KT, tareas);
    save(KP, plan);
    empujarDB();
  }

  (window.claude && window.claude.use ? window.claude.use('db') : Promise.resolve(null)).then(function(db){
    if(!db) return;
    docTareas = db.doc('quehaceres/lista');
    var primera = true;
    docTareas.onSnapshot(function(snap){
      if(escribiendo || pendiente || sinConfirmar){ primera = false; return; }
      if(snap.exists){
        var d = snap.data() || {};
        if(Array.isArray(d.tareas)) tareas = d.tareas;
        plan = d.plan || null;
        save(KT, tareas); save(KP, plan);
        renderTareas();
      }else if(primera && tareas.length){
        empujarDB();
      }
      primera = false;
    }, function(){});
    document.getElementById('syncNota').textContent =
      'Sincronizado en tu cuenta de Claude: lo ves igual en el celu y en la compu.';
  }).catch(function(){});

  function agregarTarea(){
    var i = document.getElementById('tareaNueva');
    var v = i.value.trim();
    if(!v) return;
    tareas.push({ id: uid(), texto: v, hecho: false, minutos: 0, creado: Date.now() });
    i.value = '';
    guardarTareas();
    renderTareas();
    i.focus();
  }
  document.getElementById('addTarea').addEventListener('click', agregarTarea);
  document.getElementById('tareaNueva').addEventListener('keydown', function(e){
    if(e.key === 'Enter'){ e.preventDefault(); agregarTarea(); }
  });

  elTareas.addEventListener('click', function(e){
    var q = e.target.closest('[data-quitar]');
    if(q){
      var id = q.getAttribute('data-quitar');
      tareas = tareas.filter(function(x){ return x.id !== id; });
      guardarTareas();
      renderTareas();
      return;
    }
  });

  /* ── la IA ordena la lista ── */
  var INSTRUCCION =
    'Sos quien organiza los quehaceres de una persona para que los haga en el menor tiempo y con el menor ' +
    'ida y vuelta posible. Te paso sus tareas pendientes.\n\n' +
    'Ordenalas en 2 a 5 bloques siguiendo estos criterios, en este orden de prioridad:\n' +
    '1. Primero lo que trabaja solo mientras hacés otra cosa (lavarropas, lavavajillas, horno, algo en remojo).\n' +
    '2. Después agrupá por ambiente o por salida: todo lo de la cocina junto, todo lo de afuera en un solo viaje.\n' +
    '3. Dentro de un ambiente, de arriba hacia abajo y de seco a húmedo (ordenar antes que limpiar, barrer antes que trapear).\n' +
    '4. Lo que tiene horario o vencimiento (pagos, trámites, llamados) va temprano en el día.\n' +
    '5. Lo pesado o aburrido, antes que lo liviano; dejá lo gratificante para el final.\n\n' +
    'Estimá los minutos de cada tarea con criterio realista de una casa común.\n' +
    'El título de cada bloque es una orden corta y concreta en español rioplatense (vos/tenés), máximo 5 palabras. ' +
    'El motivo explica en una frase por qué ese bloque va en ese momento.\n' +
    'Usá TODOS los ids que te paso, cada uno una sola vez, y no inventes tareas.\n\n' +
    'Respondé SOLO con un objeto JSON con esta forma exacta:\n' +
    '{"nota":"un consejo de una o dos frases sobre cómo encarar la tanda",' +
    '"bloques":[{"titulo":"Poné a andar lo que tarda","motivo":"Mientras eso corre solo, hacés el resto.",' +
    '"tareas":[{"id":"abc123","minutos":10}]}]}\n\nTareas pendientes:\n';

  var sampleFn = null;
  (window.claude && window.claude.use ? window.claude.use('sample') : Promise.resolve(null)).then(function(fn){
    sampleFn = fn;
    if(fn) btnOrganizar.hidden = false;
  }).catch(function(){});

  var copiaError = {
    not_granted: 'No le diste permiso a esta página para usar Claude. Recargá y aceptá si querés probarlo.',
    rate_limited: 'Se usó mucho Claude en poco rato. Probá de nuevo en un ratito.',
    session_expired: 'Se cerró tu sesión de Claude. Entrá de nuevo y reintentá.',
    invalid_json: 'La respuesta vino rara. Tocá otra vez el botón.',
    cancelled: '',
    refused: 'Claude no quiso responder a esto. Probá reescribiendo alguna tarea.'
  };

  btnOrganizar.addEventListener('click', async function(){
    var pendientes = tareas.filter(function(t){ return !t.hecho; });
    if(pendientes.length < 2){
      elEstado.hidden = false;
      elEstado.textContent = 'Cargá al menos dos tareas pendientes y te las ordeno.';
      return;
    }
    if(!sampleFn) return;

    btnOrganizar.disabled = true;
    btnOrganizar.textContent = 'Pensando…';
    elEstado.hidden = false;
    elEstado.textContent = 'Claude está ordenando tu lista…';

    var listado = pendientes.map(function(t){ return '- id ' + t.id + ': ' + t.texto; }).join('\n');

    try{
      var r = await sampleFn.json(INSTRUCCION + listado, { cache: false });
      var bloques = (r && r.bloques) || [];
      var nuevos = [];
      bloques.forEach(function(b){
        var ids = [];
        (b.tareas || []).forEach(function(x){
          var t = tareaDe(String(x && x.id));
          if(!t || t.hecho) return;
          var m = Number(x.minutos);
          t.minutos = (m > 0 && m < 1000) ? Math.round(m) : 0;
          ids.push(t.id);
        });
        if(ids.length) nuevos.push({ titulo: String(b.titulo || 'Bloque'), motivo: String(b.motivo || ''), ids: ids });
      });
      if(!nuevos.length) throw { code: 'invalid_json' };
      plan = { nota: r.nota ? String(r.nota) : '', bloques: nuevos, cuando: Date.now() };
      guardarTareas();
      renderTareas();
      elEstado.hidden = true;
    }catch(e){
      var c = (e && e.code) || 'upstream_error';
      var msg = copiaError[c];
      if(msg === '') { elEstado.hidden = true; }
      else { elEstado.textContent = msg || 'No se pudo ordenar la lista ahora. Probá de nuevo en un rato.'; }
    }finally{
      btnOrganizar.disabled = false;
      btnOrganizar.textContent = plan && plan.bloques ? 'Reordenar con IA' : 'Organizar con IA';
    }
  });

  renderTareas();
  render();
})();
