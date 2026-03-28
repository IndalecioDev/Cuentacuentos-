/* ============================================================
   EL LIBRO DE LAS SOMBRAS — app.js
   ============================================================ */

// ── Cuentos ────────────────────────────────────────────────────────────────

const stories = [
  {
    title:  'La Dama del Espejo',
    teaser: 'Nadie sabía quién era la mujer que miraba desde el espejo roto...',
    icon:   '🪞',
    accent: '#9b6b9b',
    pages: [
      `<p>El espejo llegó una tarde de noviembre, envuelto en tela de terciopelo negro y atado con cordeles que nadie supo deshacer con las manos desnudas. Lo encontraron apoyado contra la puerta de la casa de los Aldecoa como si alguien lo hubiera dejado ahí de madrugada, sin llamar, sin avisar.</p><p>Elena fue la primera en acercarse. Tenía dieciséis años y ese exceso de valentía que solo da la edad. Retiró la tela con cuidado y el espejo quedó al descubierto: marco de madera oscura, tallada con figuras que cambiaban de forma si las mirabas de reojo. La luna. Un cuervo. Manos entrelazadas.</p><p>En su superficie no se reflejaba el salón con sus sillas de madera y sus cortinas viejas. Se reflejaba una habitación que ninguno de ellos había visto nunca.</p>`,
      `<p>La habitación del espejo era pequeña y estaba iluminada por una luz que no tenía fuente visible. Había una silla, una mesita y sobre ella una taza de té que humeaba como si alguien acabara de servirla. Y había una mujer.</p><p>La mujer estaba de espaldas la primera vez. Alta, con el pelo recogido, vestida de negro hasta los pies. Cuando Elena se inclinó para verla mejor, la mujer giró la cabeza muy despacio. No para mirar hacia la habitación del espejo. Para mirar directamente a Elena.</p><p>Sonrió.</p><p>Elena apartó la vista. Su madre, que había entrado al escuchar el silencio —los silencios de Elena siempre significaban algo—, preguntó qué pasaba. Elena señaló el espejo.</p><p>Pero su madre solo vio el salón reflejado.</p>`,
      `<p>Durante tres semanas, Elena fue la única que podía verla. La dama del espejo no hacía nada amenazador. Se sentaba a su mesa, bebía su té, miraba hacia la nada. A veces sostenía un libro entre las manos, aunque las páginas siempre estaban en blanco cuando Elena lograba acercarse lo suficiente para leerlas.</p><p>La noche del solsticio, la dama se levantó por primera vez. Caminó hacia el espejo desde su lado. Elena no se movió, aunque su corazón latía con la fuerza de algo que quiere escapar. La dama apoyó una mano en la superficie, desde dentro, y la superficie tembló como agua.</p><p>Entonces habló. Su voz llegó amortiguada, como si cruzara mucho espacio o mucho tiempo. Dijo cuatro palabras.</p><p><em>Ya casi es la hora.</em></p><p>A la mañana siguiente, el espejo estaba vacío. La dama se había ido. Pero la taza de té, con su vapor imposible, había aparecido sobre la mesa del comedor de los Aldecoa.</p><p>Todavía caliente.</p>`
    ]
  },
  {
    title:  'El Puente del Olvido',
    teaser: 'Cruzarlo te costaba un recuerdo. Nadie sabía cuántos había dejado ya.',
    icon:   '🌉',
    accent: '#5b8fa8',
    pages: [
      `<p>El puente sobre el río Gris no aparecía en ningún mapa porque los cartógrafos que intentaban dibujarlo olvidaban haberlo visto antes de llegar a casa. Era un puente de piedra antigua, cubierto de musgo en las partes bajas, con antorchas que ardían sin aceite y sin mano que las encendiera.</p><p>Se contaba —y en los pueblos del valle se contaba mucho— que cruzarlo tenía un precio. No dinero. No sangre. Un recuerdo. Uno solo, elegido no por ti sino por el puente, que sabía mejor que nadie qué era lo que más querías conservar.</p><p>Mateo lo cruzó la primera vez por accidente. Venía de buscar a su perro en el bosque y la niebla lo desorientó. Llegó al otro lado sin saber muy bien cómo. Se sentó en una piedra y contó sus recuerdos como si fueran monedas. Todo parecía estar.</p><p>Tardó tres semanas en notar lo que faltaba.</p>`,
      `<p>Lo que faltaba era su madre. No su madre muerta —eso lo recordaba con toda la nitidez del dolor—. Lo que faltaba era su voz. Podía ver su cara, podía recordar su olor a romero y a jabón barato, podía describir la manera en que fruncía el ceño cuando algo le preocupaba. Pero no podía escucharla. Ni una sola palabra. Cuatro años de conversaciones, borradas.</p><p>Volvió al puente para recuperarlo.</p><p>Un hombre viejo estaba sentado a la entrada. Fumaba una pipa con tabaco que olía a hojas quemadas en otoño y miraba el río con la expresión de alguien que ha visto mucho pasar.</p><p>—¿Cuántas veces has cruzado? —preguntó el viejo, sin girarse.</p><p>—Una —respondió Mateo.</p><p>El viejo asintió despacio. —Eso crees tú.</p>`,
      `<p>Había señales, dijo el viejo, si sabías leerlas. Ciertas pausas en las conversaciones donde debería haber una referencia que nunca llegaba. Cierta sensación de que una habitación que conocías bien tenía menos muebles de los que debería. Ciertos nombres de personas que pronunciabas pero no podías unir a ninguna cara.</p><p>Mateo escuchó y fue contando. Las pausas. Los muebles. Los nombres. Había cruzado, según sus cuentas, dieciséis veces.</p><p>—¿Y qué perdí? —preguntó.</p><p>El viejo apagó la pipa. —Eso es lo que ya no puedes saber. Lo que el puente se lleva es exactamente eso: la conciencia de que existía.</p><p>—¿Y tú? —preguntó Mateo—. ¿Cuántas veces lo has cruzado tú?</p><p>El viejo sonrió. Era una sonrisa extraña, casi vacía, como un marco sin cuadro.</p><p>—Ya no lo sé —dijo.</p>`
    ]
  },
  {
    title:  'La Coleccionista de Últimas Palabras',
    teaser: 'Llegaba antes de que nadie supiera que hacía falta despedirse.',
    icon:   '📜',
    accent: '#8b6b45',
    pages: [
      `<p>Llegaba cuando el médico ya no tenía nada que decir. Nadie la llamaba. Aparecía sola, con su cuaderno de tapas grises y su pluma de punta fina, y se sentaba en la silla más discreta de la habitación como si siempre hubiera estado ahí.</p><p>Las familias, en los primeros momentos, solían protestar. Quién es usted. Cómo se ha atrevido. Fuera de aquí. Ella esperaba la tormenta con una paciencia que no parecía humana, y cuando pasaba decía, siempre en el mismo tono, que estaba ahí para escuchar.</p><p>No más que eso. Para escuchar.</p><p>Y entonces el moribundo —que había estado callado, o delirando, o durmiendo entre morfina y sombras— abría los ojos y pedía hablar con ella.</p>`,
      `<p>Nadie sabía su nombre. En el hospital la llamaban la Escribana. En el pueblo de al lado, la Última Visita. Los más supersticiosos la llamaban de otras formas que preferían no pronunciar en voz alta.</p><p>Rosalía la vio por primera vez cuando murió su padre. Tenía entonces nueve años. Pero recordaba la cara de su padre cuando la miró: una expresión que mezclaba alivio y urgencia, como el de alguien que lleva años cargando un peso y por fin divisa el lugar donde dejarlo.</p><p>Habló durante veinte minutos. La Escribana anotó sin parar. Al terminar, él cerró los ojos y ya no los abrió.</p><p>Lo que Rosalía nunca olvidó fue que la Escribana le dijo al oído, sin que nadie más pudiera oírlo: <em>Tu nombre lo dijo tres veces.</em></p>`,
      `<p>Treinta años después, Rosalía era médica en ese mismo hospital. Y una noche de enero, mientras hacía la última ronda, encontró a la Escribana sentada en la silla de la habitación 14.</p><p>La paciente de la habitación 14 era ella misma.</p><p>Lo entendió de golpe, con esa claridad que a veces regala el sueño o el miedo extremo: había entrado en la habitación equivocada. O la habitación correcta. Dependía de cómo se mirara.</p><p>La Escribana levantó los ojos del cuaderno. Eran los mismos ojos de treinta años atrás.</p><p>—¿Tienes algo que decir? —preguntó.</p><p>Rosalía pensó en todas las palabras que había guardado. Las que nunca le dijo a su madre. Las que escribió en cartas que no envió.</p><p>Se sentó. Y empezó a hablar.</p><p>El cuaderno de tapas grises tenía, esa noche, exactamente una página en blanco.</p>`
    ]
  },
  {
    title:  'El Relojero Sin Sombra',
    teaser: 'Arreglaba los relojes que el tiempo había olvidado dar cuerda.',
    icon:   '⏰',
    accent: '#7a9b6b',
    pages: [
      `<p>El taller estaba en un callejón que el mapa nombraba como Calle del Ámbar, aunque nadie llamaba así al callejón por costumbre. Los vecinos lo conocían como el lugar donde los relojes sonaban solos a medianoche. No todos los relojes de la ciudad. Solo los que habían dejado de funcionar.</p><p>El relojero se llamaba Teo. Era un hombre sin edad precisa, con dedos largos y calma de agua estancada. Lo que le hacían notar sus clientes era que no tenía sombra. No es que fuera pequeña o difusa. Es que no existía. Bajo cualquier luz, sus pies se apoyaban directamente en el suelo sin dejar oscuridad detrás.</p><p>Él nunca lo explicaba. Cuando alguien preguntaba, sonreía y decía que todos perdían algo para ganar otra cosa.</p>`,
      `<p>Los relojes que Teo arreglaba no volvían a funcionar de manera normal. El reloj de Claudia, que se había parado el día exacto en que murió su abuela, empezó a correr hacia atrás. Dos minutos por hora. Lo suficiente para que, al cabo de una semana, marcase la hora en que su abuela había tenido el primer síntoma, el que nadie reconoció como señal.</p><p>El reloj de Iván adelantaba cuarenta y ocho minutos. Lo que Iván tardó en entender es que esos cuarenta y ocho minutos eran exactamente el tiempo que necesitaba para tomar las decisiones correctas, si prestaba atención.</p><p>Los relojes de Teo no medían el tiempo. Lo interpretaban.</p>`,
      `<p>La noche en que un inspector fue a preguntarle por su licencia, Teo estaba desmontando un reloj de bolsillo que no había funcionado desde 1943.</p><p>—¿Sabe usted que hay algo raro en este lugar? —dijo el inspector, mirando los relojes de las paredes.</p><p>—Hay algo raro en todos los lugares —dijo Teo—. Aquí solo se nota más.</p><p>El inspector miró al suelo. Miró su propia sombra, larga y clara bajo la lámpara. Luego miró donde debería estar la sombra de Teo.</p><p>—¿Le duele? —preguntó, sin poder evitarlo.</p><p>Teo dejó el reloj sobre el paño de terciopelo. Lo pensó un momento.</p><p>—Ya no —respondió—. Hace mucho que ya no.</p><p>Esa noche, el reloj de 1943 empezó a sonar. Una sola vez. Como si se despidiera de algo que llevaba ochenta años esperando decir adiós.</p>`
    ]
  },
  {
    title:  'La Casa que Respira',
    teaser: 'Los vecinos decían que la casa vieja del final de la calle respiraba por las noches.',
    icon:   '🏚️',
    accent: '#a05555',
    pages: [
      `<p>Nadie había vivido en la casa del número 9 desde que los Ferreira se marcharon en 1987. Pero la casa no estaba vacía. Eso lo sabían todos los del barrio, aunque ninguno lo decía en voz alta porque hay cosas que pronunciadas se vuelven más reales de lo que conviene.</p><p>Lo que decían, cuando se sentían seguros, era que la casa respiraba. No metafóricamente. De verdad. Un movimiento lento de las paredes, apenas perceptible, como el pecho de alguien que duerme. Cada cuatro segundos. Siempre cuatro.</p><p>El nuevo vecino, que llegó de otra ciudad y no conocía la historia, lo notó la primera noche.</p>`,
      `<p>Se llamaba Andrés y había comprado la casa de al lado sin preguntar demasiado. La primera noche no pudo dormir. No por el ruido, sino por el silencio. Un silencio con ritmo. Un silencio que era, si se prestaba atención, una presencia.</p><p>Salió al jardín a las tres de la mañana. La casa del número 9 estaba ahí, oscura. Las ventanas tapadas desde dentro con algo parecido a una membrana.</p><p>Y entonces la vio moverse. Solo un centímetro, quizás dos. La fachada entera, como si fuera piel.</p><p>Andrés se dijo que era el frío. El cansancio. La mala luz. Se lo dijo tres veces, que es el número mínimo para que una mentira empiece a sonar razonable, y volvió adentro.</p><p>Pero antes de entrar, contó. Cuatro segundos. Cuatro segundos. Cuatro segundos.</p>`,
      `<p>En primavera llamó al ayuntamiento para preguntar por el estado de la finca. Le dijeron que estaba en litigio, que los herederos no se ponían de acuerdo, que llevaba décadas así.</p><p>—Las casas así —dijo la funcionaria—, cuando llevan mucho tiempo solas... adquieren costumbres. Y no les gusta que las interrumpan.</p><p>Esa noche Andrés midió la distancia entre su ventana y la fachada de la casa vecina. Dos metros y medio.</p><p>Pero estaba seguro —absolutamente seguro, con ese tipo de certeza que no necesita pruebas— de que al principio habían sido tres metros.</p><p>La casa se estaba acercando.</p>`
    ]
  },
  {
    title:  'El Cartógrafo de lo Invisible',
    teaser: 'Dibujaba mapas de lugares que no existían. Hasta que empezaron a existir.',
    icon:   '🗺️',
    accent: '#6b7fa8',
    pages: [
      `<p>Lena hacía mapas de lugares que no existían. No era fantasía ni era arte, aunque a veces se parecía a las dos cosas. Era algo más preciso: una necesidad, casi compulsiva, de trazar caminos entre puntos que nadie más veía. Comenzó a los doce años, cuando dibujó el plano completo de una ciudad submarina con sus calles de corriente, sus plazas de arena fina y su mercado en el cráter de un volcán dormido.</p><p>Con los años los mapas se volvieron más elaborados. Con escalas exactas, con nombres, con indicaciones de peligro. Los guardaba en tubos de cartón en el armario de su estudio. Nunca los enseñó a nadie.</p><p>Hasta que alguien llamó a su puerta con uno de sus mapas en la mano.</p>`,
      `<p>Era un hombre de mediana edad, con abrigo de lana y la expresión de alguien que ha caminado mucho para llegar a algún sitio. Sostenía un mapa que Lena reconoció de inmediato: lo había dibujado ocho años antes. Un bosque que no existía en ninguna región del mundo que ella conociera, con un lago negro en el centro y un sendero que daba doce vueltas alrededor antes de llegar a la orilla.</p><p>—¿Dónde encontró esto? —preguntó ella.</p><p>—En ese bosque —dijo él—. Clavado en un árbol. Con mi nombre escrito en el margen.</p><p>Lena miró el margen del mapa. Efectivamente, había un nombre escrito con su letra. Un nombre que ella no recordaba haber escrito.</p>`,
      `<p>Durante semanas intentó encontrar una explicación racional. Pero el hombre tenía fotografías del bosque, con el lago negro, con el sendero de doce vueltas. Y en las fotografías había marcas en los árboles idénticas a los símbolos de sus mapas. Símbolos que ella misma había inventado.</p><p>Empezó a revisar sus mapas uno por uno. En el margen de algunos había nombres. Gente que no conocía. Fechas que todavía no habían llegado.</p><p>No eran mapas de lugares que no existían.</p><p>Eran mapas de lugares que aún no existían.</p><p>Esa noche abrió un tubo vacío y empezó a dibujar. Las manos se movían solas. Cuando terminó, en el margen inferior derecho, escrito con su letra, había un nombre.</p><p>El suyo.</p><p>Y una fecha.</p><p>Dentro de tres días.</p>`
    ]
  },
  {
    title:  'El Jardín de los que No Duermen',
    teaser: 'Florecía solo de noche. Y sus flores recordaban las caras de los muertos.',
    icon:   '🌑',
    accent: '#7b9b72',
    pages: [
      `<p>El jardín estaba en el centro del pueblo, rodeado de una verja de hierro que nadie había visto poner y que nadie recordaba que no estuviera siempre. De día era un jardín ordinario: hierba alta, rosales sin podar, un camino de grava cubierto de musgo. La gente pasaba por delante sin detenerse.</p><p>De noche era otra cosa.</p><p>Florecía de golpe, como si alguien apretara un interruptor en el momento exacto en que el último rayo de sol desaparecía. Flores blancas por todas partes, con pétalos que brillaban con una luz propia, tenue, como el fósforo de los relojes viejos.</p><p>Y en los pétalos, si te acercabas lo suficiente, había caras.</p>`,
      `<p>Solo las de los que habían muerto ese año en el pueblo, o cerca, o en algún lugar que tuviera conexión con alguien del pueblo. Las flores no distinguían por geografía. Distinguían por vínculo.</p><p>Sofía perdió a su marido en febrero. En marzo encontró su cara en una flor blanca al fondo del jardín. Se quedó mirándola mucho tiempo, de rodillas en la grava húmeda, sin llorar. Era él, exactamente él, con esa expresión que tenía cuando dormía y que ella nunca le había descrito a nadie porque hay cosas que no se describen.</p><p>Volvió cada noche durante un mes. La flor siempre estaba ahí. Él siempre tenía la misma expresión.</p>`,
      `<p>Lo que Sofía no supo hasta más tarde era que las flores no duraban para siempre.</p><p>—Depende —dijo la anciana que vivía frente al jardín—. De cuánto los recuerden. Los muy recordados duran hasta el otoño. Los olvidados desaparecen en días.</p><p>—¿Y qué pasa cuando desaparece la flor?</p><p>La anciana la miró con algo que no era exactamente pena.</p><p>—Que ya pueden irse —dijo—. Que hasta entonces no podían.</p><p>Sofía volvió al jardín esa noche. La flor de su marido seguía ahí. Con su cara en los pétalos. Con su expresión de sueño tranquilo.</p><p>Se quedó mucho tiempo en silencio. Luego dijo, en voz muy baja: <em>Ya puedes irte.</em></p><p>A la mañana siguiente la flor había desaparecido. En la tierra, hundida apenas un centímetro, había una alianza de bodas que ella reconoció porque era la suya, la que llevaba puesta, la que no se había quitado en veinte años.</p><p>Se la miró en el dedo. Seguía ahí.</p><p>Había dos.</p>`
    ]
  },
  {
    title:  'La Niña que Contaba Pájaros',
    teaser: 'Contaba los cuervos que sobrevolaban el pueblo. Decía que eran mensajes.',
    icon:   '🐦‍⬛',
    accent: '#a08060',
    pages: [
      `<p>Iris tenía siete años cuando empezó a contar los cuervos. Los contaba en voz alta desde la ventana de su habitación, con esa concentración absoluta que tienen los niños para las cosas que los adultos no entienden, y anotaba los números en un cuaderno de tapas rojas que no dejaba ver a nadie.</p><p>Su madre pensó que era una fase. Su padre lo consideró un hobby peculiar pero inofensivo. La maestra dijo que Iris era una niña muy observadora.</p><p>Nadie le preguntó qué significaban los números.</p><p>Hasta que los números empezaron a significar cosas que nadie podía ignorar.</p>`,
      `<p>Tres cuervos el lunes. El miércoles siguiente, un incendio en la serrería al norte del pueblo. Un cuervo en círculos el jueves. Ese fin de semana, el abuelo Martínez tuvo un infarto leve. Siete cuervos en formación el martes. Al día siguiente el río se desbordó y cortó la carretera durante una semana.</p><p>La madre de Iris encontró el cuaderno por accidente. Lo abrió sin intención de leerlo. Lo cerró diez minutos después con las manos temblando, porque en el cuaderno no había solo números y fechas pasadas. Había también una columna marcada como <em>próximo</em>.</p><p>Mañana: dos cuervos en silencio.</p>`,
      `<p>A la mañana siguiente, Iris se sentó en la ventana a las siete en punto y contó en voz alta: <em>uno, dos.</em></p><p>Dos cuervos. En silencio. Posados en el tejado de enfrente durante exactamente cuatro minutos antes de irse.</p><p>Esa tarde llegó una carta certificada de un abogado. El padre de la madre había muerto y las había dejado como únicas herederas de una casa en la costa y un dinero que ella no sabía que existía.</p><p>La madre entró en la habitación de Iris. Se sentó en la cama.</p><p>—¿Cómo sabes lo que van a decir los pájaros?</p><p>Iris levantó los ojos del papel con esa mirada que a veces tienen los niños, muy directa, que parece venir de más lejos de donde debería.</p><p>—No me lo dicen ellos —dijo—. Me lo dices tú. Los pájaros solo me avisan de que tengo que escucharte.</p><p>En la ventana, posado en el alféizar, había un cuervo que ninguna de las dos había visto llegar. Las miraba con sus ojos de botón negro y brillante.</p><p>Luego se fue, sin hacer ruido, hacia el sur.</p>`
    ]
  },
  {
    title:  'El Hombre que Coleccionaba Despedidas',
    teaser: 'Guardaba en frascos de cristal los últimos adioses de los trenes.',
    icon:   '🚉',
    accent: '#7a6b9b',
    pages: [
      `<p>Los frascos estaban en una estantería de roble que ocupaba toda la pared norte de su apartamento, ordenados por fecha, etiquetados con letra pequeña y precisa. Desde el primero, de septiembre de 1971, hasta el último, que era de la semana pasada. Más de doscientos frascos. Más de doscientas despedidas.</p><p>Víctor no coleccionaba saludos ni abrazos de reencuentro. Solo coleccionaba los adioses de las estaciones de tren. El momento exacto en que alguien levantaba la mano para decir hasta luego a alguien que ya no podía verle la cara porque el tren se había puesto en movimiento.</p><p>Ese instante. Ese exacto instante. Eso era lo que guardaba en los frascos.</p>`,
      `<p>Los frascos parecían vacíos. Cristal limpio, tapón de corcho, etiqueta con fecha y estación. Pero si los acercabas al oído podías escuchar algo.</p><p>No voces. No palabras. Algo anterior al lenguaje. Un tono. Una temperatura emocional comprimida. El frasco de noviembre de 1984 sonaba a algo que no tenía nombre pero que reconocías si habías tenido que dejar ir a alguien sabiendo que probablemente era para siempre. El de marzo de 2003 sonaba diferente: más liviano, casi esperanzado.</p><p>—¿Cómo los capturas? —le preguntó alguien una vez.</p><p>—Con mucho cuidado —dijo Víctor—. Y con el frasco abierto en el momento justo. Si lo abres un segundo antes, solo entra aire. Si lo abres un segundo después, ya se ha ido.</p>`,
      `<p>Hay una pregunta que siempre hacían los que llegaban a conocer la colección.</p><p>—¿Hay alguno que te pertenezca?</p><p>Víctor señalaba siempre el mismo frasco. Estaba en el extremo izquierdo de la estantería, sin fecha en la etiqueta, sin nombre de estación. Solo una línea escrita en rojo, que era el único rojo de toda la colección.</p><p><em>La que no llegó a irse.</em></p><p>Nunca explicaba más.</p><p>Una noche, cuando ya no quedaba nadie, Víctor descolgó ese frasco. Lo sostuvo un momento con las dos manos. Lo acercó al oído.</p><p>Sonaba a una persona en un andén que no sube al tren aunque el tren está ahí, aunque las puertas están abiertas, aunque todavía hay tiempo.</p><p>Que se queda.</p><p>Que se queda.</p><p>Que se queda.</p><p>Volvió a colocarlo en su sitio con el mismo cuidado con que se toca todo lo que no puede repararse.</p>`
    ]
  }
];

// ── Estado ─────────────────────────────────────────────────────────────────

let currentStory = null;
let currentPage  = 0;

// ── Estrellas ──────────────────────────────────────────────────────────────

function createStars() {
  const container = document.getElementById('stars');
  for (let i = 0; i < 90; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 2 + 0.5;
    star.style.cssText = [
      `width:${size}px`,
      `height:${size}px`,
      `left:${Math.random() * 100}%`,
      `top:${Math.random() * 100}%`,
      `--d:${2 + Math.random() * 3}s`,
      `animation-delay:${Math.random() * 4}s`,
      `opacity:${Math.random() * 0.4 + 0.1}`
    ].join(';');
    container.appendChild(star);
  }
}

// ── Grid de cuentos ────────────────────────────────────────────────────────

function renderGrid() {
  document.getElementById('story-grid').innerHTML = stories
    .map((s, i) => `
      <div class="story-card" style="--accent:${s.accent}" onclick="openStory(${i})">
        <span class="card-icon">${s.icon}</span>
        <div class="card-title">${s.title}</div>
        <div class="card-teaser">${s.teaser}</div>
      </div>`)
    .join('');
}

// ── Abrir cuento ───────────────────────────────────────────────────────────

function openStory(index) {
  currentStory = index;
  currentPage  = 0;
  document.getElementById('story-grid').style.display = 'none';
  document.getElementById('header').style.display     = 'none';
  document.getElementById('reader').classList.add('active');
  renderPage();
}

// ── Renderizar página ──────────────────────────────────────────────────────

function renderPage() {
  const story = stories[currentStory];
  document.getElementById('story-title').textContent    = story.title;
  document.getElementById('story-body').innerHTML       = story.pages[currentPage];
  document.getElementById('page-indicator').textContent = `${currentPage + 1} / ${story.pages.length}`;
  document.getElementById('prev-btn').disabled = currentPage === 0;
  document.getElementById('next-btn').disabled = currentPage === story.pages.length - 1;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Cambio de página ───────────────────────────────────────────────────────

function changePage(direction) {
  const next = currentPage + direction;
  if (next >= 0 && next < stories[currentStory].pages.length) {
    currentPage = next;
    renderPage();
  }
}

// ── Volver al menú ─────────────────────────────────────────────────────────

function showMenu() {
  document.getElementById('reader').classList.remove('active');
  document.getElementById('story-grid').style.display = 'grid';
  document.getElementById('header').style.display     = 'block';
  currentStory = null;
  currentPage  = 0;
}

// ── Arranque ───────────────────────────────────────────────────────────────

createStars();
renderGrid();
