var SEMILLA = {"tareas": [{"id": "t01", "texto": "Poner a lavar la ropa", "minutos": 10, "creado": 1}, {"id": "t02", "texto": "Cambiar las sábanas de las dos camas y ponerlas a lavar", "minutos": 20, "creado": 2}, {"id": "t03", "texto": "Preparar pallares", "minutos": 15, "creado": 3}, {"id": "t04", "texto": "Podar las palmeras", "minutos": 60, "creado": 4}, {"id": "t05", "texto": "Palear abono", "minutos": 45, "creado": 5}, {"id": "t06", "texto": "Correr las macetas para poder lavar", "minutos": 15, "creado": 6}, {"id": "t07", "texto": "Correr las suculentas de su pisito", "minutos": 10, "creado": 7}, {"id": "t08", "texto": "Lavar el garaje (el grande)", "minutos": 90, "creado": 8}, {"id": "t09", "texto": "Lavar el piso del frente (el chico)", "minutos": 35, "creado": 9}, {"id": "t10", "texto": "Lavar el pisito de las suculentas", "minutos": 15, "creado": 10}, {"id": "t11", "texto": "Volver a poner las macetas en su lugar", "minutos": 15, "creado": 11}, {"id": "t12", "texto": "Reubicar las suculentas según el sol de la temporada", "minutos": 25, "creado": 12}, {"id": "t13", "texto": "Plantas: las 2 del frente", "minutos": 20, "creado": 13}, {"id": "t14", "texto": "Plantas: el jengibre", "minutos": 15, "creado": 14}, {"id": "t15", "texto": "Regar todas las plantas", "minutos": 20, "creado": 15}, {"id": "t16", "texto": "Baba: poner a lavar sus sábanas", "minutos": 10, "creado": 16}, {"id": "t17", "texto": "Baba: pasar el trapo a la galería", "minutos": 30, "creado": 17}, {"id": "t18", "texto": "Baba: ordenar la cama", "minutos": 10, "creado": 18}, {"id": "t19", "texto": "Baba: sacar verduras", "minutos": 20, "creado": 19}, {"id": "t20", "texto": "Ir a la verdulería", "minutos": 30, "creado": 20}, {"id": "t21", "texto": "Limpiar el polvo del modular de la sala", "minutos": 30, "creado": 21}, {"id": "t22", "texto": "Lavar los platos y ordenar la cocina", "minutos": 30, "creado": 22}, {"id": "t23", "texto": "Limpiar la mesa", "minutos": 10, "creado": 23}, {"id": "t24", "texto": "Barrer la cocina", "minutos": 10, "creado": 24}, {"id": "t25", "texto": "Trabajar 4 a 6 hs en la compu", "minutos": 300, "creado": 25}, {"id": "t26", "texto": "Ayudar a Mau con su cel", "minutos": 20, "creado": 26}], "plan": {"nota": "Son unas 10 horas de tareas más tu bloque de compu: no entra en un día. Te lo partí en dos jornadas — la primera es la de agua y patio, la segunda la de adentro y pantalla. Los horarios se acomodan solos según a qué hora te levantes.", "bloques": [{"titulo": "Anoche, antes de dormir", "motivo": "Lo dejás girando y al amanecer ya está para colgar, como hacés siempre.", "jornada": 1, "ancla": "noche", "trabajo": false, "ids": ["t01"]}, {"titulo": "Arrancá lo que tarda solo", "motivo": "Segunda carga y los pallares en remojo: trabajan sin vos mientras salís al patio.", "jornada": 1, "ancla": null, "trabajo": false, "ids": ["t02", "t03"]}, {"titulo": "Ensuciá antes de lavar", "motivo": "La poda y el abono tiran hojas y tierra al piso; si lavás primero, lavás dos veces.", "jornada": 1, "ancla": null, "trabajo": false, "ids": ["t04", "t05"]}, {"titulo": "Sacá todo del medio", "motivo": "Dejás las superficies libres de una vez y no frenás con la manguera en la mano.", "jornada": 1, "ancla": null, "trabajo": false, "ids": ["t06", "t07"]}, {"titulo": "Manguera: de grande a chico", "motivo": "Una sola conexión y una sola mojada, arrancando por el garaje que es el que más tarda.", "jornada": 1, "ancla": null, "trabajo": false, "ids": ["t08", "t09", "t10"]}, {"titulo": "Devolvé todo a su lugar", "motivo": "Recién ahora, con el piso seco, volvés a acomodar sin marcar nada.", "jornada": 1, "ancla": null, "trabajo": false, "ids": ["t11", "t12"]}, {"titulo": "Al atardecer, las plantas", "motivo": "Sin sol fuerte no se queman: las trabajás una por una y al final regás todo junto.", "jornada": 1, "ancla": "18:30", "trabajo": false, "ids": ["t13", "t14", "t15"]}, {"titulo": "Salí una sola vez", "motivo": "En lo de Baba arrancás por el lavarropas y hacés el resto mientras corre; la verdulería queda de paso a la vuelta.", "jornada": 2, "ancla": "09:30", "trabajo": false, "ids": ["t16", "t17", "t18", "t19", "t20"]}, {"titulo": "El modular, de una", "motivo": "Es la que venís pateando: sacala apenas volvés, con el envión de la salida y antes de sentarte.", "jornada": 2, "ancla": null, "trabajo": false, "ids": ["t21"]}, {"titulo": "Cerrá la cocina de arriba abajo", "motivo": "Primero la pileta, después la mesa y recién al final el piso, para barrer lo que cayó de todo lo anterior.", "jornada": 2, "ancla": null, "trabajo": false, "ids": ["t22", "t23", "t24"]}, {"titulo": "Bloque de compu intocable", "motivo": "Con la casa ya cerrada nadie te interrumpe: esas horas necesitan la cabeza entera, no los huecos del día.", "jornada": 2, "ancla": null, "trabajo": true, "ids": ["t25"]}, {"titulo": "Cuando Mau esté disponible", "motivo": "Depende de otra persona, así que no lo pongas en el camino crítico: metelo en cualquier hueco.", "jornada": 2, "ancla": null, "trabajo": false, "ids": ["t26"]}]}};

(function(){
  "use strict";

  /* ═══════════ almacenamiento ═══════════ */
  var KM='vl_mov_v1', KC='vl_cat_v1', KT='vl_tareas_v1', KP='vl_plan_v1', KD='vl_dias_v1', KG='vl_pagos_v1', KS='vl_compras_v1';

  function load(k, def){
    try{ var raw = localStorage.getItem(k); if(!raw) return def; var v = JSON.parse(raw); return (v === null || v === undefined) ? def : v; }
    catch(e){ return def; }
  }
  function save(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }

  var MESES=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  var MESES_C=['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
  var DIAS=['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];

  var CATS_DEF={
    gasto:[{id:'g1',nom:'Comida',emo:'🛒'},{id:'g2',nom:'Transporte',emo:'🚌'},{id:'g3',nom:'Vivienda',emo:'🏠'},
           {id:'g4',nom:'Servicios',emo:'💡'},{id:'g5',nom:'Salud',emo:'💊'},{id:'g6',nom:'Ocio',emo:'🎬'},{id:'g7',nom:'Otros',emo:'✨'}],
    ingreso:[{id:'i1',nom:'Sueldo',emo:'💼'},{id:'i2',nom:'Freelance',emo:'💻'},{id:'i3',nom:'Otros ingresos',emo:'✨'}]
  };

  var movs = load(KM, []);
  var cats = load(KC, null);
  if(!cats || !cats.gasto || !cats.ingreso){ cats = JSON.parse(JSON.stringify(CATS_DEF)); save(KC, cats); }
  var tareas = load(KT, null);
  var plan = load(KP, null);
  var dias = load(KD, {});
  var pagos = load(KG, []);
  var compras = load(KS, []);
  if(!Array.isArray(tareas)){ tareas = (window.SEMILLA ? SEMILLA.tareas : []); plan = (window.SEMILLA ? SEMILLA.plan : null); }
  if(!Array.isArray(pagos)) pagos = [];
  if(!Array.isArray(compras)) compras = [];
  if(!dias || typeof dias !== 'object') dias = {};

  /* ═══════════ utilidades ═══════════ */
  var fmt = new Intl.NumberFormat('es-AR',{maximumFractionDigits:0});
  function plata(n){ return '$' + fmt.format(Math.round(n)); }
  function corto(n){
    var a=Math.abs(n);
    if(a>=1000000) return '$'+(Math.round(n/100000)/10).toString().replace('.',',')+'M';
    if(a>=1000) return '$'+Math.round(n/1000)+'k';
    return '$'+Math.round(n);
  }
  function uid(){ return Date.now().toString(36)+Math.random().toString(36).slice(2,7); }
  function esc(s){ return String(s).replace(/[&<>"']/g,function(c){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]; }); }
  function iso(d){ return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
  function deIso(s){ var p=String(s).split('-'); return new Date(+p[0], +p[1]-1, +p[2]); }
  function hhmm(min){
    if(min===null||min===undefined||isNaN(min)) return '';
    min=((Math.round(min)%1440)+1440)%1440;
    return String(Math.floor(min/60)).padStart(2,'0')+':'+String(min%60).padStart(2,'0');
  }
  function aMin(s){ if(!s) return null; var p=String(s).split(':'); var m=(+p[0])*60+(+p[1]); return isNaN(m)?null:m; }
  function minutosTxt(m){
    if(!m||m<=0) return '';
    if(m<60) return m+' min';
    var h=Math.floor(m/60), r=m%60;
    return h+' h'+(r?' '+r:'');
  }
  function ahoraHHMM(){ var d=new Date(); return String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0'); }

  var hoy = new Date();
  var diaVisto = iso(hoy);
  var vista = { y:hoy.getFullYear(), m:hoy.getMonth() };

  function reg(fecha){
    if(!dias[fecha]) dias[fecha] = { acostada:'', levantada:'', deLargo:false, trabajo:{desde:'',hasta:''}, hechas:{} };
    var r = dias[fecha];
    if(!r.trabajo) r.trabajo = {desde:'',hasta:''};
    if(!r.hechas) r.hechas = {};
    return r;
  }
  function guardarDias(){ save(KD, dias); empujarDB(); }

  /* ═══════════ pestañas ═══════════ */
  var panelQ=document.getElementById('panelQ'), panelF=document.getElementById('panelF');
  var desbloqueado=false;
  Array.prototype.forEach.call(document.querySelectorAll('.tab'), function(t){
    t.addEventListener('click', function(){
      Array.prototype.forEach.call(document.querySelectorAll('.tab'),function(x){ x.classList.remove('activo'); });
      t.classList.add('activo');
      var q = t.getAttribute('data-tab')==='q';
      panelQ.hidden = !q; panelF.hidden = q;
      if(!q && !desbloqueado) setTimeout(function(){ document.getElementById('clave').focus(); },80);
    });
  });

  document.getElementById('formClave').addEventListener('submit', function(e){
    e.preventDefault();
    var v = document.getElementById('clave').value.trim();
    if(v === '1969'){
      desbloqueado = true;
      document.getElementById('candado').hidden = true;
      document.getElementById('finanzas').hidden = false;
      document.getElementById('claveMal').textContent = '';
      render();
    }else{
      document.getElementById('claveMal').textContent = 'Esa no es. Probá de nuevo.';
      document.getElementById('clave').value = '';
    }
  });

  /* ═══════════ horarios del plan ═══════════ */
  function duracionBloque(b){
    return (b.ids||[]).reduce(function(a,id){
      var t = tareaDe(id);
      return a + (t ? (t.minutos||0) : 0);
    },0);
  }

  function horarios(){
    /* devuelve {idxBloque: {desde, hasta}} en minutos, según cómo arrancó el día */
    var r = reg(diaVisto);
    var out = {};
    if(!plan || !plan.bloques) return out;

    var levantada = aMin(r.levantada);
    var acostada  = aMin(r.acostada);
    var base = (levantada === null) ? (r.deLargo ? aMin('06:00') : aMin('08:00')) : levantada + 40;
    var t = base;
    var trabD = aMin(r.trabajo.desde), trabH = aMin(r.trabajo.hasta);

    var jornadaActual = null;
    plan.bloques.forEach(function(b, i){
      var dur = duracionBloque(b);
      if(dur <= 0) return;

      var j = b.jornada || 1;
      if(jornadaActual !== null && j !== jornadaActual) t = base;  /* la jornada 2 arranca de mañana otra vez */
      jornadaActual = j;

      if(b.ancla === 'noche'){
        var fin = (acostada === null) ? aMin('23:30') : acostada;
        out[i] = { desde: fin - dur, hasta: fin, nocturno:true };
        return;
      }
      if(b.trabajo){
        if(trabD !== null && trabH !== null){ out[i] = { desde:trabD, hasta:trabH, real:true }; return; }
        if(trabD !== null){ out[i] = { desde:trabD, hasta:trabD+dur }; t = Math.max(t, trabD+dur+15); return; }
      }
      if(b.ancla && b.ancla !== 'noche'){
        var a = aMin(b.ancla);
        if(a !== null && a > t) t = a;
      }
      out[i] = { desde:t, hasta:t+dur };
      t = t + dur + 15;
    });
    return out;
  }

  /* ═══════════ quehaceres ═══════════ */
  var elTareas=document.getElementById('tareas');
  var elMeta=document.getElementById('tareasMeta');
  var elNota=document.getElementById('iaNota');
  var elEstado=document.getElementById('iaEstado');
  var btnOrganizar=document.getElementById('organizar');

  function tareaDe(id){
    for(var i=0;i<tareas.length;i++){ if(tareas[i].id===id) return tareas[i]; }
    return null;
  }
  function hechaEn(id){ return reg(diaVisto).hechas[id] || null; }

  function filaTarea(t){
    var h = hechaEn(t.id);
    return '<div class="task'+(h?' ok':'')+'" data-fila="'+t.id+'">'+
      '<button type="button" class="tick" data-tick="'+t.id+'" role="checkbox" aria-checked="'+(h?'true':'false')+'" aria-label="'+esc(t.texto)+'">✓</button>'+
      '<span class="txt">'+esc(t.texto)+'</span>'+
      (h ? '<button type="button" class="hecha" data-hora="'+t.id+'" aria-label="Cambiar la hora">'+esc(h)+'</button>'
         : (t.minutos ? '<span class="min">'+minutosTxt(t.minutos)+'</span>' : ''))+
      '<button type="button" class="del" data-quitar="'+t.id+'" aria-label="Borrar '+esc(t.texto)+'">✕</button></div>';
  }

  function renderDia(){
    var d = deIso(diaVisto);
    var r = reg(diaVisto);
    var esHoy = (diaVisto === iso(new Date()));
    document.getElementById('diaSub').textContent =
      (esHoy?'Hoy · ':'') + DIAS[d.getDay()] + ' ' + d.getDate() + ' de ' + MESES[d.getMonth()];
    document.getElementById('stripHoy').textContent = DIAS[d.getDay()];
    document.getElementById('stripYear').textContent = d.getFullYear();
    document.getElementById('diaNext').disabled = (diaVisto >= iso(new Date()));

    document.getElementById('jAcostada').value = r.acostada || '';
    document.getElementById('jLevantada').value = r.levantada || '';
    document.getElementById('jLargo').checked = !!r.deLargo;
    document.getElementById('jLevantada').disabled = !!r.deLargo;
    document.getElementById('jTrabDesde').value = r.trabajo.desde || '';
    document.getElementById('jTrabHasta').value = r.trabajo.hasta || '';

    var partes = [];
    if(r.deLargo) partes.push('Seguiste de largo, así que el plan arranca temprano y liviano.');
    else if(r.levantada) partes.push('Te levantaste ' + r.levantada + ', y el plan se corrió desde ahí.');
    else partes.push('Cargá a qué hora te levantaste y acomodo los horarios del plan a tu día real.');
    if(r.acostada && r.levantada && !r.deLargo){
      var dur = aMin(r.levantada) - aMin(r.acostada);
      if(dur < 0) dur += 1440;
      partes.push('Dormiste ' + minutosTxt(dur) + '.');
    }
    if(r.trabajo.desde && r.trabajo.hasta){
      var td = aMin(r.trabajo.hasta) - aMin(r.trabajo.desde);
      if(td < 0) td += 1440;
      partes.push('Trabajaste ' + minutosTxt(td) + '.');
    }
    document.getElementById('jNota').textContent = partes.join(' ');
  }

  function renderTareas(){
    renderDia();
    var r = reg(diaVisto);
    var hechas = tareas.filter(function(t){ return !!r.hechas[t.id]; }).length;
    elMeta.hidden = tareas.length === 0;
    if(tareas.length){
      document.getElementById('tareasCuenta').textContent = hechas+' de '+tareas.length+' listas';
      document.getElementById('tareasBarra').style.width = Math.round(hechas/tareas.length*100)+'%';
    }

    elNota.hidden = !(plan && plan.nota);
    if(plan && plan.nota) elNota.textContent = plan.nota;

    if(!tareas.length){
      elTareas.innerHTML = '<div class="empty">Escribí lo que tenés que hacer. Después, si querés, pedile a la IA que te lo ordene por horarios.</div>';
      return;
    }

    var hs = horarios();
    var usados = {}, html = '', jornadaActual = null;

    if(plan && plan.bloques){
      plan.bloques.forEach(function(b, i){
        var filas = (b.ids||[]).map(function(id){
          var t = tareaDe(id);
          if(!t || usados[id]) return '';
          usados[id] = 1;
          return filaTarea(t);
        }).join('');
        if(!filas) return;

        var j = b.jornada || 1;
        if(j !== jornadaActual){
          jornadaActual = j;
          html += '<div class="jornada-t">' + (j === 1 ? 'Primera jornada · agua y patio' : 'Segunda jornada · adentro y pantalla') + '</div>';
        }

        var h = hs[i];
        var mins = duracionBloque(b);
        html += '<div class="bloque"><div class="bloque-t"><span>'+esc(b.titulo||'Bloque')+'</span>'+
          (h ? '<span class="hora">'+hhmm(h.desde)+' – '+hhmm(h.hasta)+'</span>' : '')+
          (mins ? '<span class="mins">'+minutosTxt(mins)+'</span>' : '')+'</div>'+
          (b.motivo ? '<div class="bloque-m">'+esc(b.motivo)+'</div>' : '')+filas+'</div>';
      });
    }

    var sueltas = tareas.filter(function(t){ return !usados[t.id]; });
    if(sueltas.length){
      html += '<div class="bloque">'+
        (plan && plan.bloques && plan.bloques.length ? '<div class="bloque-t"><span>Sin ordenar todavía</span></div>' : '')+
        sueltas.map(filaTarea).join('')+'</div>';
    }
    elTareas.innerHTML = html;

    /* En iPhone el toque no siempre llega al contenedor: escuchamos fila por fila. */
    var filas = elTareas.querySelectorAll('[data-fila]');
    for(var i=0;i<filas.length;i++){
      (function(fila){
        var id = fila.getAttribute('data-fila');
        fila.addEventListener('click', function(ev){
          if(ev.target.closest('[data-quitar]')) return;
          if(ev.target.closest('[data-hora]')){ editarHora(id); return; }
          alternar(id);
        });
      })(filas[i]);
    }
  }

  function alternar(id){
    var r = reg(diaVisto);
    if(r.hechas[id]) delete r.hechas[id];
    else r.hechas[id] = (diaVisto === iso(new Date())) ? ahoraHHMM() : '12:00';
    guardarDias();
    renderTareas();
  }

  function editarHora(id){
    var r = reg(diaVisto);
    var actual = r.hechas[id] || ahoraHHMM();
    var v = prompt('¿A qué hora la hiciste? (HH:MM)', actual);
    if(v === null) return;
    v = v.trim();
    if(!/^\d{1,2}:\d{2}$/.test(v)){ alert('Escribila así: 14:30'); return; }
    var m = aMin(v);
    if(m === null || m < 0 || m > 1439){ alert('Esa hora no existe.'); return; }
    r.hechas[id] = hhmm(m);
    guardarDias();
    renderTareas();
  }

  function guardarTareas(){ save(KT,tareas); save(KP,plan); empujarDB(); }

  function agregarTarea(){
    var i=document.getElementById('tareaNueva');
    var v=i.value.trim();
    if(!v) return;
    tareas.push({ id:uid(), texto:v, hecho:false, minutos:0, creado:Date.now() });
    i.value='';
    guardarTareas();
    renderTareas();
    i.focus();
  }
  document.getElementById('addTarea').addEventListener('click', agregarTarea);
  document.getElementById('tareaNueva').addEventListener('keydown', function(e){
    if(e.key==='Enter'){ e.preventDefault(); agregarTarea(); }
  });

  elTareas.addEventListener('click', function(e){
    var q=e.target.closest('[data-quitar]');
    if(!q) return;
    var id=q.getAttribute('data-quitar');
    tareas = tareas.filter(function(x){ return x.id!==id; });
    Object.keys(dias).forEach(function(f){ if(dias[f].hechas) delete dias[f].hechas[id]; });
    guardarTareas(); guardarDias();
    renderTareas();
  });

  /* ── la jornada: inputs ── */
  function bindJornada(idEl, aplicar){
    document.getElementById(idEl).addEventListener('change', function(){
      aplicar(reg(diaVisto), this);
      guardarDias();
      renderTareas();
    });
  }
  bindJornada('jAcostada', function(r,el){ r.acostada = el.value; });
  bindJornada('jLevantada', function(r,el){ r.levantada = el.value; });
  bindJornada('jTrabDesde', function(r,el){ r.trabajo.desde = el.value; });
  bindJornada('jTrabHasta', function(r,el){ r.trabajo.hasta = el.value; });
  bindJornada('jLargo', function(r,el){ r.deLargo = el.checked; if(el.checked) r.levantada=''; });

  document.getElementById('diaPrev').addEventListener('click', function(){
    var d=deIso(diaVisto); d.setDate(d.getDate()-1); diaVisto=iso(d); renderTareas();
  });
  document.getElementById('diaNext').addEventListener('click', function(){
    var d=deIso(diaVisto); d.setDate(d.getDate()+1);
    if(iso(d) > iso(new Date())) return;
    diaVisto=iso(d); renderTareas();
  });
  document.getElementById('diaHoy').addEventListener('click', function(){ diaVisto=iso(new Date()); renderTareas(); });

  /* ── puente manual con Claude ── */
  function resumenParaClaude(){
    var out = { generado: iso(new Date()), tareas: tareas.map(function(t){ return {id:t.id, texto:t.texto, minutos:t.minutos}; }), dias:{} };
    Object.keys(dias).sort().slice(-21).forEach(function(f){
      var r=dias[f];
      var algo = r.acostada||r.levantada||r.deLargo||r.trabajo.desde||Object.keys(r.hechas||{}).length;
      if(algo) out.dias[f]=r;
    });
    return JSON.stringify(out);
  }
  document.getElementById('btnCopiar').addEventListener('click', function(){
    var txt = resumenParaClaude();
    var b = this;
    function ok(){ b.textContent='Copiado ✓'; setTimeout(function(){ b.textContent='Copiar para Claude'; },1800); }
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(txt).then(ok, function(){ prompt('Copiá esto y pegáselo a Claude:', txt); });
    }else{ prompt('Copiá esto y pegáselo a Claude:', txt); }
  });
  document.getElementById('btnPegar').addEventListener('click', function(){
    var v = prompt('Pegá acá lo que te dio Claude:');
    if(!v) return;
    try{
      var d = JSON.parse(v);
      if(Array.isArray(d.tareas)) tareas = d.tareas;
      if(d.plan) plan = d.plan;
      guardarTareas();
      renderTareas();
      alert('Listo, la lista quedó actualizada.');
    }catch(e){ alert('Eso no parece lo que te dio Claude. Copialo entero y probá de nuevo.'); }
  });

  /* ═══════════ por pagar ═══════════ */
  var elPagos=document.getElementById('pagos');

  function guardarPagos(){ save(KG,pagos); empujarDB(); }

  function renderPagos(){
    var sel = document.getElementById('pgCat');
    if(sel && !sel.options.length){
      sel.innerHTML = cats.gasto.map(function(c){ return '<option value="'+c.id+'">'+esc(c.emo+' '+c.nom)+'</option>'; }).join('');
    }
    var pend = pagos.filter(function(p){ return !p.pagado; });
    var total = pend.reduce(function(a,p){ return a+p.monto; },0);
    document.getElementById('totalPagar').hidden = !pend.length;
    document.getElementById('totalPagarVal').textContent = plata(total);

    if(!pagos.length){
      elPagos.innerHTML = '<div class="empty">Anotá lo que tenés que pagar. Cuando lo marques como pagado, se descuenta solo del balance.</div>';
      return;
    }
    var hoyIso = iso(new Date());
    var orden = pagos.slice().sort(function(a,b){
      if(a.pagado !== b.pagado) return a.pagado ? 1 : -1;
      return (a.vence||'9999') < (b.vence||'9999') ? -1 : 1;
    });
    elPagos.innerHTML = orden.map(function(p){
      var v='';
      if(p.pagado) v='Pagado el '+(p.pagadoEl||'—');
      else if(p.vence){
        var d=deIso(p.vence);
        v='Vence '+d.getDate()+' '+MESES_C[d.getMonth()];
        if(p.vence < hoyIso) v='Venció el '+d.getDate()+' '+MESES_C[d.getMonth()];
      }
      var urge = (!p.pagado && p.vence && p.vence <= hoyIso);
      return '<div class="pago'+(p.pagado?' ok':'')+'" data-pago="'+p.id+'">'+
        '<button type="button" class="tick" data-tickpago="'+p.id+'" role="checkbox" aria-checked="'+(p.pagado?'true':'false')+'" aria-label="'+esc(p.desc)+'">✓</button>'+
        '<span class="txt">'+esc(p.desc)+(v?'<div class="venc'+(urge?' urge':'')+'">'+esc(v)+'</div>':'')+'</span>'+
        '<span class="amt">'+plata(p.monto)+'</span>'+
        '<button type="button" class="del" data-quitapago="'+p.id+'" aria-label="Borrar '+esc(p.desc)+'">✕</button></div>';
    }).join('');

    var filas = elPagos.querySelectorAll('[data-pago]');
    for(var i=0;i<filas.length;i++){
      (function(fila){
        var id = fila.getAttribute('data-pago');
        fila.addEventListener('click', function(ev){
          if(ev.target.closest('[data-quitapago]')){
            if(!confirm('¿Borrar este pago de la lista?')) return;
            pagos = pagos.filter(function(x){ return x.id!==id; });
            guardarPagos(); renderPagos(); return;
          }
          alternarPago(id);
        });
      })(filas[i]);
    }
  }

  function alternarPago(id){
    var p = pagos.filter(function(x){ return x.id===id; })[0];
    if(!p) return;
    if(p.pagado){
      if(!confirm('¿Marcar "'+p.desc+'" como NO pagado? Se borra el gasto que había generado.')) return;
      movs = movs.filter(function(m){ return m.dePago !== p.id; });
      p.pagado=false; delete p.pagadoEl;
      save(KM,movs);
    }else{
      var f = iso(new Date());
      movs.push({ id:uid(), tipo:'gasto', desc:p.desc, monto:p.monto, cat:p.cat, fecha:f, creado:Date.now(), dePago:p.id });
      p.pagado=true; p.pagadoEl=f;
      save(KM,movs);
      vista = { y:+f.slice(0,4), m:(+f.slice(5,7))-1 };
    }
    guardarPagos();
    renderPagos();
    render();
  }

  document.getElementById('pgAdd').addEventListener('click', function(){
    var desc=document.getElementById('pgDesc').value.trim();
    var monto=parseFloat(document.getElementById('pgMonto').value);
    var vence=document.getElementById('pgVence').value;
    var cat=document.getElementById('pgCat').value;
    if(!desc || !(monto>0)){ alert('Poné qué es y cuánto.'); return; }
    pagos.push({ id:uid(), desc:desc, monto:monto, vence:vence||'', cat:cat, pagado:false, creado:Date.now() });
    document.getElementById('pgDesc').value='';
    document.getElementById('pgMonto').value='';
    document.getElementById('pgVence').value='';
    guardarPagos();
    renderPagos();
  });

  /* ═══════════ finanzas ═══════════ */
  var W=600,H=250,PL=52,PR=10,PT=22,PB=30;
  var tip=document.getElementById('tip');
  var chartWrap=document.getElementById('chartWrap');
  var datos6=[];

  function catDe(tipo,id){
    var l=cats[tipo]||[];
    for(var i=0;i<l.length;i++){ if(l[i].id===id) return l[i]; }
    return null;
  }
  function delMesDe(y,m){
    return movs.filter(function(mv){
      var d=mv.fecha.split('-');
      return +d[0]===y && (+d[1]-1)===m;
    });
  }
  function serie(){
    var out=[];
    for(var i=5;i>=0;i--){
      var d=new Date(vista.y, vista.m-i, 1);
      var l=delMesDe(d.getFullYear(), d.getMonth());
      var ing=0,gas=0;
      l.forEach(function(mv){ if(mv.tipo==='ingreso') ing+=mv.monto; else gas+=mv.monto; });
      out.push({ y:d.getFullYear(), m:d.getMonth(), ing:ing, gas:gas });
    }
    return out;
  }
  function escalaTope(max){
    if(max<=0) return 1;
    var mag=Math.pow(10,Math.floor(Math.log10(max)));
    var pasos=[1,1.1,1.2,1.4,1.5,1.6,1.8,2,2.5,3,3.5,4,5,6,8,10];
    for(var i=0;i<pasos.length;i++){ if(pasos[i]*mag>=max) return pasos[i]*mag; }
    return 10*mag;
  }
  function dibujarChart(){
    datos6=serie();
    var hayAlgo=datos6.some(function(d){ return d.ing>0||d.gas>0; });
    var cont=document.getElementById('chart');
    if(!hayAlgo){ cont.innerHTML='<div class="empty">Cuando cargues movimientos, acá vas a ver cómo viene la mano mes a mes.</div>'; return; }

    var max=0;
    datos6.forEach(function(d){ max=Math.max(max,d.ing,d.gas); });
    var tope=escalaTope(max);
    var plotH=H-PT-PB, plotW=W-PL-PR, banda=plotW/6;
    var bw=Math.min(26,(banda-14)/2);
    var yDe=function(v){ return PT+plotH-(v/tope)*plotH; };

    var s='<svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="Ingresos y gastos de los últimos seis meses">'+
      '<defs><linearGradient id="gIng" x1="0" y1="0" x2="0" y2="1">'+
      '<stop offset="0%" stop-color="#A0E5D9"/><stop offset="55%" stop-color="#09CDCD"/><stop offset="100%" stop-color="#145277"/></linearGradient>'+
      '<linearGradient id="gGas" x1="0" y1="0" x2="0" y2="1">'+
      '<stop offset="0%" stop-color="#D3A8FF"/><stop offset="55%" stop-color="#B57BEE"/><stop offset="100%" stop-color="#392D69"/></linearGradient></defs>';

    [0,.5,1].forEach(function(t){
      var y=PT+plotH-t*plotH;
      s+='<line x1="'+PL+'" y1="'+y+'" x2="'+(W-PR)+'" y2="'+y+'" stroke="rgba(255,255,255,.12)" stroke-width="1"/>'+
         '<text x="'+(PL-10)+'" y="'+(y+4)+'" text-anchor="end" fill="rgba(205,196,250,.5)" font-family="Hanken Grotesk, sans-serif" font-size="11" font-weight="500">'+corto(tope*t)+'</text>';
    });

    datos6.forEach(function(d,i){
      var x0=PL+i*banda, cx=x0+banda/2, gap=2;
      var xi=cx-bw-gap/2, xg=cx+gap/2;
      [[xi,d.ing,'url(#gIng)'],[xg,d.gas,'url(#gGas)']].forEach(function(b){
        if(b[1]<=0) return;
        var y=yDe(b[1]);
        s+='<path d="M'+b[0]+' '+(PT+plotH)+' L'+b[0]+' '+(y+4)+
           ' Q'+b[0]+' '+y+' '+(b[0]+4)+' '+y+
           ' L'+(b[0]+bw-4)+' '+y+
           ' Q'+(b[0]+bw)+' '+y+' '+(b[0]+bw)+' '+(y+4)+
           ' L'+(b[0]+bw)+' '+(PT+plotH)+' Z" fill="'+b[2]+'"/>';
      });
      s+='<text x="'+cx+'" y="'+(H-PB+19)+'" text-anchor="middle" fill="rgba(205,196,250,.5)" font-family="Hanken Grotesk, sans-serif" font-size="11" font-weight="600">'+MESES_C[d.m]+'</text>'+
         '<rect class="hit" data-i="'+i+'" x="'+x0+'" y="'+PT+'" width="'+banda+'" height="'+plotH+'" fill="transparent" tabindex="0" role="button" aria-label="'+MESES[d.m]+' '+d.y+': ingresos '+plata(d.ing)+', gastos '+plata(d.gas)+'"/>';
    });

    var ult=datos6[5], xu=PL+5*banda+banda/2;
    if(ult.ing>0||ult.gas>0){
      var vMax=Math.max(ult.ing,ult.gas);
      s+='<text x="'+xu+'" y="'+(yDe(vMax)-8)+'" text-anchor="middle" fill="rgba(237,234,251,.9)" font-family="Hanken Grotesk, sans-serif" font-size="11.5" font-weight="700">'+corto(vMax)+'</text>';
    }
    s+='<line x1="'+PL+'" y1="'+(PT+plotH)+'" x2="'+(W-PR)+'" y2="'+(PT+plotH)+'" stroke="rgba(255,255,255,.2)" stroke-width="1"/></svg>';
    cont.innerHTML=s;
  }

  function mostrarTip(i,ev){
    var d=datos6[i];
    if(!d) return;
    var bal=d.ing-d.gas;
    tip.innerHTML='<div class="tm">'+MESES[d.m]+' '+d.y+'</div>'+
      '<div class="tr"><span class="k"><i class="dot ing"></i>Ingresos</span><span>'+plata(d.ing)+'</span></div>'+
      '<div class="tr"><span class="k"><i class="dot gas"></i>Gastos</span><span>'+plata(d.gas)+'</span></div>'+
      '<div class="tr"><span class="k">Balance</span><span>'+(bal<0?'-':'')+plata(Math.abs(bal))+'</span></div>';
    var r=chartWrap.getBoundingClientRect(), t=ev.target.getBoundingClientRect();
    tip.style.left=Math.min(Math.max(t.left-r.left+t.width/2,74),Math.max(74,r.width-74))+'px';
    tip.style.top=(t.top-r.top+6)+'px';
    tip.style.opacity='1';
  }
  function ocultarTip(){ tip.style.opacity='0'; }
  chartWrap.addEventListener('mouseover',function(e){ var h=e.target.closest?e.target.closest('.hit'):null; if(h) mostrarTip(+h.getAttribute('data-i'),e); });
  chartWrap.addEventListener('focusin',function(e){ var h=e.target.closest?e.target.closest('.hit'):null; if(h) mostrarTip(+h.getAttribute('data-i'),e); });
  chartWrap.addEventListener('mouseleave',ocultarTip);
  chartWrap.addEventListener('focusout',ocultarTip);

  function dibujarTabla(){
    var tv=document.getElementById('tableView');
    if(tv.hidden) return;
    tv.innerHTML='<table class="tbl"><thead><tr><th>Mes</th><th>Ingresos</th><th>Gastos</th><th>Balance</th></tr></thead><tbody>'+
      datos6.map(function(d){
        var bal=d.ing-d.gas;
        return '<tr><td>'+MESES[d.m]+' '+d.y+'</td><td>'+plata(d.ing)+'</td><td>'+plata(d.gas)+'</td><td>'+(bal<0?'-':'')+plata(Math.abs(bal))+'</td></tr>';
      }).join('')+'</tbody></table>';
  }
  document.getElementById('toggleTable').addEventListener('click',function(){
    var tv=document.getElementById('tableView');
    tv.hidden=!tv.hidden;
    this.textContent=tv.hidden?'Ver tabla':'Ocultar tabla';
    this.setAttribute('aria-expanded',tv.hidden?'false':'true');
    dibujarTabla();
  });

  function render(){
    if(!desbloqueado) return;
    renderPagos();
    var lista=delMesDe(vista.y,vista.m).slice().sort(function(a,b){
      return a.fecha===b.fecha ? (b.creado-a.creado) : (a.fecha<b.fecha?1:-1);
    });
    var ing=0,gas=0;
    lista.forEach(function(m){ if(m.tipo==='ingreso') ing+=m.monto; else gas+=m.monto; });
    var bal=ing-gas;

    document.getElementById('headSub').textContent='@personal · '+MESES[vista.m]+' '+vista.y;
    document.getElementById('balance').textContent=(bal<0?'-':'')+plata(Math.abs(bal));
    document.getElementById('vIng').textContent=plata(ing);
    document.getElementById('vGas').textContent=plata(gas);
    var ahorro=ing>0?Math.round((ing-gas)/ing*100):null;
    document.getElementById('vAho').textContent=ahorro===null?'—':ahorro+'%';

    var nota;
    if(!lista.length) nota='Todavía no cargaste movimientos este mes.';
    else if(ing===0) nota='Este mes solo hay gastos cargados.';
    else if(bal>0) nota='Vas en positivo, ahorrando el '+ahorro+'% de lo que entró.';
    else if(bal===0) nota='Gastaste exactamente lo que entró.';
    else nota='Estás en rojo: gastaste '+plata(Math.abs(bal))+' más de lo que entró.';
    document.getElementById('balanceNote').textContent=nota;

    document.getElementById('nextM').disabled=(vista.y>hoy.getFullYear())||(vista.y===hoy.getFullYear()&&vista.m>=hoy.getMonth());

    dibujarChart(); dibujarTabla();

    var porCat={};
    lista.forEach(function(m){ if(m.tipo!=='gasto') return; porCat[m.cat]=(porCat[m.cat]||0)+m.monto; });
    var arr=Object.keys(porCat).map(function(id){
      var c=catDe('gasto',id);
      return { nom:c?c.nom:'Sin categoría', total:porCat[id] };
    }).sort(function(a,b){ return b.total-a.total; });

    var cEl=document.getElementById('cats');
    if(!arr.length){ cEl.innerHTML='<div class="empty">Sin gastos cargados en '+MESES[vista.m]+'.</div>'; }
    else{
      var max=arr[0].total;
      cEl.innerHTML=arr.map(function(c){
        var w=max>0?Math.max(3,Math.round(c.total/max*100)):0;
        var p=gas>0?Math.round(c.total/gas*100):0;
        return '<div class="row"><span>'+esc(c.nom)+'<span class="pct">'+p+'%</span></span><span class="amt">'+plata(c.total)+'</span></div>'+
               '<div class="track"><div class="fill" style="width:'+w+'%"></div></div>';
      }).join('');
    }

    var tEl=document.getElementById('txs');
    if(!lista.length){ tEl.innerHTML='<div class="empty">Nada por acá. Cargá tu primer movimiento del mes.</div>'; }
    else{
      tEl.innerHTML=lista.map(function(m){
        var c=catDe(m.tipo,m.cat), d=m.fecha.split('-');
        var sub=(c?c.nom:'Sin categoría')+' · '+(+d[2])+' '+MESES_C[+d[1]-1]+(m.dePago?' · de Por pagar':'');
        return '<div class="tx"><span class="tx-left"><span class="chip">'+esc(c?c.emo:'•')+'</span>'+
          '<span class="t"><div>'+esc(m.desc)+'</div><div class="date">'+esc(sub)+'</div></span></span>'+
          '<span class="tx-right"><span class="'+(m.tipo==='ingreso'?'in':'out')+'">'+(m.tipo==='ingreso'?'+':'-')+plata(m.monto)+'</span>'+
          '<button type="button" class="del" data-del="'+m.id+'" aria-label="Borrar '+esc(m.desc)+'">✕</button></span></div>';
      }).join('');
    }
  }

  var dlgMov=document.getElementById('dlgMov'), formMov=document.getElementById('formMov'), tipoActual='gasto';
  function abrirMov(tipo){
    tipoActual=tipo;
    document.getElementById('movTitle').textContent=tipo==='ingreso'?'Nuevo ingreso':'Nuevo gasto';
    document.getElementById('fCat').innerHTML=cats[tipo].map(function(c){ return '<option value="'+c.id+'">'+esc(c.emo+' '+c.nom)+'</option>'; }).join('');
    formMov.reset();
    var d=(vista.y===hoy.getFullYear()&&vista.m===hoy.getMonth())?new Date():new Date(vista.y,vista.m,1);
    document.getElementById('fFecha').value=iso(d);
    dlgMov.showModal();
    setTimeout(function(){ document.getElementById('fDesc').focus(); },60);
  }
  document.getElementById('addIng').addEventListener('click',function(){ abrirMov('ingreso'); });
  document.getElementById('addGas').addEventListener('click',function(){ abrirMov('gasto'); });
  document.getElementById('cancelMov').addEventListener('click',function(){ dlgMov.close(); });
  formMov.addEventListener('submit',function(){
    var desc=document.getElementById('fDesc').value.trim();
    var monto=parseFloat(document.getElementById('fMonto').value);
    var cat=document.getElementById('fCat').value;
    var fecha=document.getElementById('fFecha').value;
    if(!desc||!(monto>0)||!fecha) return;
    movs.push({ id:uid(), tipo:tipoActual, desc:desc, monto:monto, cat:cat, fecha:fecha, creado:Date.now() });
    save(KM,movs); empujarDB();
    vista={ y:+fecha.slice(0,4), m:(+fecha.slice(5,7))-1 };
    render();
  });
  document.getElementById('txs').addEventListener('click',function(e){
    var b=e.target.closest('[data-del]');
    if(!b) return;
    var id=b.getAttribute('data-del');
    var m=movs.filter(function(x){ return x.id===id; })[0];
    if(!m||!confirm('¿Borrar "'+m.desc+'"?')) return;
    if(m.dePago){
      var p=pagos.filter(function(x){ return x.id===m.dePago; })[0];
      if(p){ p.pagado=false; delete p.pagadoEl; guardarPagos(); }
    }
    movs=movs.filter(function(x){ return x.id!==id; });
    save(KM,movs); empujarDB();
    render();
  });
  document.getElementById('prevM').addEventListener('click',function(){ vista.m--; if(vista.m<0){vista.m=11;vista.y--;} render(); });
  document.getElementById('nextM').addEventListener('click',function(){ vista.m++; if(vista.m>11){vista.m=0;vista.y++;} render(); });

  var dlgCat=document.getElementById('dlgCat'), catManager=document.getElementById('catManager');
  function usos(id){ return movs.filter(function(m){ return m.cat===id; }).length; }
  function renderCats(){
    function bloque(tipo,titulo){
      var filas=cats[tipo].map(function(c){
        return '<div class="catrow"><span class="chip">'+esc(c.emo)+'</span><span class="nm">'+esc(c.nom)+'</span>'+
          '<button type="button" class="del" data-cat="'+c.id+'" data-tipo="'+tipo+'" aria-label="Borrar '+esc(c.nom)+'">✕</button></div>';
      }).join('');
      return '<div class="cattitle">'+titulo+'</div>'+filas+
        '<div class="addcat" data-add="'+tipo+'"><input class="emo" type="text" maxlength="2" placeholder="✨" aria-label="Emoji">'+
        '<input class="nm" type="text" maxlength="24" placeholder="Nueva categoría" aria-label="Nombre"><button type="button">+</button></div>';
    }
    catManager.innerHTML=bloque('gasto','Gastos')+bloque('ingreso','Ingresos');
  }
  document.getElementById('openCats').addEventListener('click',function(){ renderCats(); dlgCat.showModal(); });
  document.getElementById('closeCats').addEventListener('click',function(){
    dlgCat.close();
    document.getElementById('pgCat').innerHTML='';
    render();
  });
  catManager.addEventListener('click',function(e){
    var b=e.target.closest('[data-cat]');
    if(b){
      var id=b.getAttribute('data-cat'), tipo=b.getAttribute('data-tipo');
      var c=catDe(tipo,id), n=usos(id);
      if(cats[tipo].length<=1){ alert('Dejá al menos una categoría de '+tipo+'.'); return; }
      var msg=n>0?('Hay '+n+' movimiento(s) en "'+c.nom+'". Si la borrás, quedan como "Sin categoría". ¿Seguimos?'):('¿Borrar la categoría "'+c.nom+'"?');
      if(!confirm(msg)) return;
      cats[tipo]=cats[tipo].filter(function(x){ return x.id!==id; });
      save(KC,cats); empujarDB(); renderCats();
      return;
    }
    var add=e.target.closest('[data-add]');
    if(add&&e.target.tagName==='BUTTON'){
      var t=add.getAttribute('data-add');
      var nom=add.querySelector('.nm').value.trim();
      var emo=add.querySelector('.emo').value.trim()||'✨';
      if(!nom){ add.querySelector('.nm').focus(); return; }
      cats[t].push({ id:uid(), nom:nom, emo:emo });
      save(KC,cats); empujarDB(); renderCats();
    }
  });
  catManager.addEventListener('keydown',function(e){
    if(e.key!=='Enter') return;
    var add=e.target.closest('[data-add]');
    if(!add) return;
    e.preventDefault();
    add.querySelector('button').click();
  });

  /* ═══════════ sincronización con la cuenta ═══════════ */
  var docTodo=null, escribiendo=false, pendiente=false, sinConfirmar=0;
  function avisoSync(t){ var el=document.getElementById('syncNota'); if(el) el.textContent=t; }

  function empujarDB(){
    if(!docTodo) return;
    if(escribiendo){ pendiente=true; return; }
    escribiendo=true; sinConfirmar++;
    docTodo.set({ tareas:tareas, plan:plan, dias:dias, pagos:pagos, compras:compras, movs:movs, cats:cats, actualizado:Date.now() }).then(function(){
      escribiendo=false; sinConfirmar=Math.max(0,sinConfirmar-1);
      if(pendiente){ pendiente=false; empujarDB(); }
      else if(!sinConfirmar) avisoSync('Sincronizado en tu cuenta de Claude.');
    }, function(){
      escribiendo=false; sinConfirmar=0; pendiente=false; docTodo=null;
      avisoSync('No se pudo guardar en tu cuenta. Queda guardado en este dispositivo.');
    });
  }

  (window.claude && window.claude.use ? window.claude.use('db') : Promise.resolve(null)).then(function(db){
    if(!db) return;
    docTodo = db.doc('quehaceres/lista');
    var primera = true;
    docTodo.onSnapshot(function(snap){
      if(escribiendo||pendiente||sinConfirmar){ primera=false; return; }
      if(snap.exists){
        var d=snap.data()||{};
        if(Array.isArray(d.tareas)) tareas=d.tareas;
        if(d.plan) plan=d.plan;
        if(d.dias && typeof d.dias==='object') dias=d.dias;
        if(Array.isArray(d.pagos)) pagos=d.pagos;
        if(Array.isArray(d.compras)) compras=d.compras;
        if(Array.isArray(d.movs)) movs=d.movs;
        if(d.cats && d.cats.gasto) cats=d.cats;
        save(KT,tareas); save(KP,plan); save(KD,dias); save(KG,pagos); save(KS,compras); save(KM,movs); save(KC,cats);
        renderTareas(); renderCompras(); render();
      }else if(primera && tareas.length){ empujarDB(); }
      primera=false;
    }, function(){});
    avisoSync('Sincronizado en tu cuenta de Claude.');
  }).catch(function(){});

  /* ═══════════ la IA ═══════════ */
  var INSTRUCCION =
    'Sos quien organiza el día de una persona. Te paso sus tareas pendientes y cómo viene su día real.\\n\\n'+
    'Ordenalas en bloques con horarios, siguiendo estos criterios:\\n'+
    '1. Primero lo que trabaja solo mientras hacés otra cosa (lavarropas, lavavajillas, horno, remojo).\\n'+
    '2. Agrupá por ambiente o por salida: la cocina junta, todo lo de afuera en un viaje.\\n'+
    '3. Lo sucio antes que lo limpio: podar y abonar antes de lavar pisos.\\n'+
    '4. Dentro de un ambiente, de arriba hacia abajo y de seco a húmedo.\\n'+
    '5. Lo que tiene horario o vencimiento va temprano.\\n'+
    '6. Regar plantas y mover macetas, al atardecer.\\n'+
    '7. El bloque de trabajo en compu va entero, sin picar.\\n\\n'+
    'Cada bloque lleva "jornada" (1 o 2 si no entra todo en un día) y "ancla" ("HH:MM" si tiene que ir a una hora fija, "noche" si va antes de dormir, o null si fluye). Marcá "trabajo": true en el bloque de la compu.\\n'+
    'Título: orden corta en español rioplatense, máximo 5 palabras. Motivo: una frase.\\n'+
    'Usá TODOS los ids, cada uno una vez, sin inventar tareas.\\n\\n'+
    'Respondé SOLO este JSON:\\n'+
    '{"nota":"consejo de una o dos frases","bloques":[{"titulo":"Poné a andar lo que tarda","motivo":"Mientras corre solo, hacés el resto.","jornada":1,"ancla":null,"trabajo":false,"tareas":[{"id":"abc","minutos":10}]}]}\\n\\n';

  var sampleFn=null;
  (window.claude && window.claude.use ? window.claude.use('sample') : Promise.resolve(null)).then(function(fn){
    sampleFn=fn;
    if(fn) btnOrganizar.hidden=false;
  }).catch(function(){});

  var copiaError={
    not_granted:'No le diste permiso a esta página para usar Claude. Recargá y aceptá.',
    rate_limited:'Se usó mucho Claude en poco rato. Probá en un ratito.',
    session_expired:'Se cerró tu sesión de Claude. Entrá de nuevo.',
    invalid_json:'La respuesta vino rara. Tocá otra vez.',
    cancelled:'',
    refused:'Claude no quiso responder a esto. Probá reescribiendo alguna tarea.'
  };

  btnOrganizar.addEventListener('click', async function(){
    var r = reg(diaVisto);
    var pend = tareas.filter(function(t){ return !r.hechas[t.id]; });
    if(pend.length<2){ elEstado.hidden=false; elEstado.textContent='Cargá al menos dos tareas pendientes y te las ordeno.'; return; }
    if(!sampleFn) return;

    btnOrganizar.disabled=true; btnOrganizar.textContent='Pensando…';
    elEstado.hidden=false; elEstado.textContent='Claude está armando tu día…';

    var ctx='Día: '+DIAS[deIso(diaVisto).getDay()]+'.\\n';
    if(r.deLargo) ctx+='No durmió, siguió de largo.\\n';
    else if(r.levantada) ctx+='Se levantó '+r.levantada+(r.acostada?' y se había acostado '+r.acostada:'')+'.\\n';
    if(r.trabajo.desde) ctx+='Trabaja de '+r.trabajo.desde+' a '+(r.trabajo.hasta||'?')+'.\\n';
    var listado=pend.map(function(t){ return '- id '+t.id+': '+t.texto; }).join('\\n');

    try{
      var res=await sampleFn.json(INSTRUCCION+ctx+'Tareas pendientes:\\n'+listado,{cache:false});
      var nuevos=[];
      ((res&&res.bloques)||[]).forEach(function(b){
        var ids=[];
        (b.tareas||[]).forEach(function(x){
          var t=tareaDe(String(x&&x.id));
          if(!t) return;
          var m=Number(x.minutos);
          t.minutos=(m>0&&m<1000)?Math.round(m):(t.minutos||0);
          ids.push(t.id);
        });
        if(ids.length) nuevos.push({
          titulo:String(b.titulo||'Bloque'), motivo:String(b.motivo||''),
          jornada:(b.jornada===2?2:1), ancla:(b.ancla?String(b.ancla):null),
          trabajo:!!b.trabajo, ids:ids
        });
      });
      if(!nuevos.length) throw { code:'invalid_json' };
      plan={ nota:res.nota?String(res.nota):'', bloques:nuevos, cuando:Date.now() };
      guardarTareas(); renderTareas();
      elEstado.hidden=true;
    }catch(e){
      var c=(e&&e.code)||'upstream_error';
      var msg=copiaError[c];
      if(msg==='') elEstado.hidden=true;
      else elEstado.textContent=msg||'No se pudo ordenar la lista ahora. Probá en un rato.';
    }finally{
      btnOrganizar.disabled=false;
      btnOrganizar.textContent=(plan&&plan.bloques)?'Reordenar con IA':'Organizar con IA';
    }
  });

  /* ═══════════ lista de compras ═══════════ */
  /* Portada del panel de repuestos: sub-listas, prioridad con nombre al lado
     del color, precios por lugar y comparación de la compra entera. */
  var PRIOS = {
    urgente:    { et:'Urgente',       color:'#dc2626', claro:'#f87171', rango:3 },
    secundario: { et:'Secundario',    color:'#ea580c', claro:'#fb923c', rango:2 },
    espera:     { et:'Puede esperar', color:'#ca8a04', claro:'#facc15', rango:1 }
  };
  var PRIO_ORDEN = ['urgente','secundario','espera'];
  var prioNueva = 'secundario', grupoNuevo = '';

  var elCompras = document.getElementById('compras');
  var elCpOpts = document.getElementById('cpOpts');

  function guardarCompras(){ save(KS, compras); empujarDB(); }
  function compraDe(id){
    for(var i=0;i<compras.length;i++){ if(compras[i].id===id) return compras[i]; }
    return null;
  }
  function porPrioridad(a,b){
    var ra = PRIOS[a.prioridad||'secundario'].rango, rb = PRIOS[b.prioridad||'secundario'].rango;
    if(ra !== rb) return rb - ra;
    return (a.creado||0) < (b.creado||0) ? -1 : 1;
  }

  /* Cuánto sale comprar TODA la lista en cada lugar, con cuántos productos
     cubre: sin ese dato, el total más chico engaña. */
  function totalesPorLugar(){
    var pend = compras.filter(function(i){ return !i.hecho; });
    var acum = {};
    pend.forEach(function(item){
      var mejor = {};
      (item.precios||[]).forEach(function(q){
        if(mejor[q.lugar] === undefined || q.precio < mejor[q.lugar]) mejor[q.lugar] = q.precio;
      });
      Object.keys(mejor).forEach(function(lugar){
        if(!acum[lugar]) acum[lugar] = { total:0, cubre:0 };
        acum[lugar].total += mejor[lugar];
        acum[lugar].cubre += 1;
      });
    });
    return {
      aCotizar: pend.length,
      lugares: Object.keys(acum).map(function(l){ return { lugar:l, total:acum[l].total, cubre:acum[l].cubre }; })
        .sort(function(a,b){ return b.cubre !== a.cubre ? b.cubre - a.cubre : a.total - b.total; })
    };
  }

  function tagPrio(p){
    var i = PRIOS[p] || PRIOS.secundario;
    return '<span class="tagp" data-prio style="background:' + i.color + '1f;color:' + i.claro +
      ';border:1px solid ' + i.color + '55"><i style="background:' + i.color + '"></i>' + i.et + '</span>';
  }

  function filaCompra(it){
    var p = PRIOS[it.prioridad] || PRIOS.secundario;
    var precios = it.precios || [];
    var barato = precios.length > 1 ? Math.min.apply(null, precios.map(function(q){ return q.precio; })) : null;

    var chips = precios.map(function(q){
      var es = barato !== null && q.precio === barato;
      return '<span class="cotiz' + (es?' barato':'') + '"><span>' + esc(q.lugar) + '</span><b>' + plata(q.precio) + '</b>' +
        '<button type="button" class="x" data-borrarprecio="' + q.id + '" aria-label="Borrar el precio de ' + esc(q.lugar) + '">✕</button></span>';
    }).join('');

    var zona = it.hecho ? '' :
      '<div class="cp-precios">' + chips +
      '<button type="button" class="cp-masprecio" data-masprecio>🏷 ' + (precios.length ? 'Otro lugar' : 'Agregar precio') + '</button>' +
      (it.abriendo ?
        '<div class="cp-formprecio">' +
        '<input class="lugar" type="text" maxlength="24" placeholder="¿Dónde? (ej: Mercado A)" aria-label="Lugar">' +
        '<input class="precio" type="number" min="0" step="0.01" inputmode="decimal" placeholder="Precio" aria-label="Precio">' +
        '<button type="button" data-guardarprecio>Guardar</button></div>' : '') +
      '</div>';

    return '<div class="cp-item' + (it.hecho?' ok':'') + '" data-compra="' + it.id + '" style="border-color:' +
      (it.hecho ? 'rgba(255,255,255,.06)' : p.color + '44') + ';background-image:' +
      (it.hecho ? 'none' : 'linear-gradient(90deg,' + p.color + '14, transparent 45%)') + '">' +
      '<div class="cp-fila">' +
      '<button type="button" class="cp-tick" data-tickcompra role="checkbox" aria-checked="' + (it.hecho?'true':'false') +
      '" aria-label="' + esc(it.texto) + '" style="border:1px solid ' + (it.hecho?'rgba(255,255,255,.25)':p.color) +
      ';background:' + (it.hecho?'rgba(255,255,255,.12)':'transparent') + ';color:' + (it.hecho?'#fff':'transparent') + '">✓</button>' +
      '<span class="cp-txt">' + esc(it.texto) + '</span>' +
      (it.hecho ? '' : tagPrio(it.prioridad)) +
      '<button type="button" class="del" data-borrarcompra aria-label="Borrar ' + esc(it.texto) + '">✕</button>' +
      '</div>' + zona + '</div>';
  }

  function renderCompras(){
    /* botones de prioridad del formulario */
    document.getElementById('cpPrios').innerHTML = PRIO_ORDEN.map(function(p){
      var i = PRIOS[p], act = (prioNueva === p);
      return '<button type="button" data-setprio="' + p + '" style="' +
        (act ? 'background:' + i.color + '26;border-color:' + i.color + ';color:' + i.claro : '') + '">' + i.et + '</button>';
    }).join('');

    var grupos = [];
    compras.forEach(function(i){ if(i.grupo && grupos.indexOf(i.grupo) < 0) grupos.push(i.grupo); });
    document.getElementById('cp-grupos').innerHTML = grupos.sort().map(function(g){
      return '<option value="' + esc(g) + '"></option>';
    }).join('');

    var pend = compras.filter(function(i){ return !i.hecho; }).length;
    document.getElementById('comprasMeta').textContent = compras.length
      ? pend + ' sin comprar de ' + compras.length
      : '';

    if(!compras.length){
      elCompras.innerHTML = '<div class="empty">La lista está vacía. Escribí arriba lo que haya que comprar.</div>';
      return;
    }

    /* agrupado por sub-lista; "Sin agrupar" al final */
    var mapa = {}, orden = [];
    compras.forEach(function(it){
      var k = it.grupo || 'Sin agrupar';
      if(!mapa[k]){ mapa[k] = []; orden.push(k); }
      mapa[k].push(it);
    });
    orden.sort(function(a,b){
      if(a === 'Sin agrupar') return 1;
      if(b === 'Sin agrupar') return -1;
      return a.localeCompare(b);
    });

    var html = orden.map(function(k){
      var lista = mapa[k].slice().sort(function(a,b){
        return (a.hecho !== b.hecho) ? (a.hecho ? 1 : -1) : porPrioridad(a,b);
      });
      return '<div class="cp-grupo"><div class="cp-grupo-t">' + esc(k) + '</div>' +
        lista.map(filaCompra).join('') + '</div>';
    }).join('');

    /* comparación de la compra entera */
    var cmp = totalesPorLugar();
    if(cmp.lugares.length){
      var completos = cmp.lugares.filter(function(l){ return l.cubre === cmp.aCotizar; });
      var masBarato = completos.length > 1 ? Math.min.apply(null, completos.map(function(l){ return l.total; })) : null;
      html += '<div class="comparativa"><h5>Cuánto sale la lista en cada lugar</h5>' +
        cmp.lugares.map(function(l){
          var completo = l.cubre === cmp.aCotizar;
          var gana = masBarato !== null && completo && l.total === masBarato;
          return '<div class="cmp-fila"><span class="lug">' + esc(l.lugar) +
            '<span class="cubre"> · cubre ' + l.cubre + ' de ' + cmp.aCotizar + '</span></span>' +
            '<span class="tot' + (gana ? ' gana' : (completo ? '' : ' incompleto')) + '">' + plata(l.total) + '</span></div>';
        }).join('') +
        '<p class="cmp-nota">' + (completos.length > 1
          ? 'En turquesa, el más barato entre los que tienen precio de todo. Los que cubren menos cosas dan un total más chico porque les faltan productos, no porque sean más baratos.'
          : 'Para comparar de igual a igual hace falta el precio de todos los productos en cada lugar: al que le falta alguno da un total más chico por eso, no por ser más barato.') +
        '</p><p class="cmp-nota">Este cuadro no toca ningún otro número del panel.</p></div>';
    }

    elCompras.innerHTML = html;

    /* oyentes fila por fila (en iPhone el toque no siempre sube al contenedor) */
    var filas = elCompras.querySelectorAll('[data-compra]');
    for(var i=0;i<filas.length;i++){
      (function(fila){
        var id = fila.getAttribute('data-compra');
        fila.addEventListener('click', function(ev){
          var t = ev.target;
          if(t.closest('[data-borrarcompra]')){
            compras = compras.filter(function(x){ return x.id !== id; });
            guardarCompras(); renderCompras(); return;
          }
          if(t.closest('[data-prio]')){
            var it = compraDe(id);
            if(it){
              var k = PRIO_ORDEN.indexOf(it.prioridad);
              it.prioridad = PRIO_ORDEN[(k + 1) % PRIO_ORDEN.length];
              guardarCompras(); renderCompras();
            }
            return;
          }
          if(t.closest('[data-borrarprecio]')){
            var qid = t.closest('[data-borrarprecio]').getAttribute('data-borrarprecio');
            var it2 = compraDe(id);
            if(it2){
              it2.precios = (it2.precios||[]).filter(function(q){ return q.id !== qid; });
              guardarCompras(); renderCompras();
            }
            return;
          }
          if(t.closest('[data-masprecio]')){
            var it3 = compraDe(id);
            compras.forEach(function(x){ x.abriendo = false; });
            if(it3) it3.abriendo = true;
            renderCompras();
            var inp = elCompras.querySelector('[data-compra="' + id + '"] .lugar');
            if(inp) inp.focus();
            return;
          }
          if(t.closest('[data-guardarprecio]')){
            var cont = fila.querySelector('.cp-formprecio');
            var lugar = cont.querySelector('.lugar').value.trim();
            var precio = parseFloat(cont.querySelector('.precio').value);
            if(!lugar || !(precio > 0)){ alert('Poné dónde y cuánto.'); return; }
            var it4 = compraDe(id);
            if(it4){
              it4.precios = (it4.precios||[]).concat([{ id:uid(), lugar:lugar, precio:precio }]);
              it4.abriendo = false;
              guardarCompras(); renderCompras();
            }
            return;
          }
          if(t.closest('.cp-formprecio')) return;
          var it5 = compraDe(id);
          if(it5){ it5.hecho = !it5.hecho; it5.abriendo = false; guardarCompras(); renderCompras(); }
        });
      })(filas[i]);
    }
  }

  document.getElementById('cpPrios').addEventListener('click', function(e){
    var b = e.target.closest('[data-setprio]');
    if(!b) return;
    prioNueva = b.getAttribute('data-setprio');
    renderCompras();
  });
  document.getElementById('cpGrupo').addEventListener('change', function(){ grupoNuevo = this.value.trim(); });
  document.getElementById('cpTexto').addEventListener('focus', function(){ elCpOpts.hidden = false; });

  function agregarCompra(){
    var i = document.getElementById('cpTexto');
    var v = i.value.trim();
    if(!v) return;
    grupoNuevo = document.getElementById('cpGrupo').value.trim();
    compras.push({ id:uid(), texto:v, grupo:grupoNuevo, prioridad:prioNueva, hecho:false, precios:[], creado:Date.now() });
    i.value = '';
    guardarCompras();
    renderCompras();
    i.focus();   /* el grupo y la prioridad quedan puestos: normalmente van varios seguidos */
  }
  document.getElementById('cpAdd').addEventListener('click', agregarCompra);
  document.getElementById('cpTexto').addEventListener('keydown', function(e){
    if(e.key === 'Enter'){ e.preventDefault(); agregarCompra(); }
  });

  renderCompras();

  renderTareas();
  renderPagos();
})();
