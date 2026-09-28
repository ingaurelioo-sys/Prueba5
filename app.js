/* ==========================================================================
   TEMARIO SECUENCIAL COMPLETO CON CUESTIONARIO Y DESAFÍO
   ========================================================================== */
const fullCourseData = [
  {
    sectionId: 1,
    sectionTitle: "Capítulo 1: Introducción",
    topics: [
      {
        id: "1.1",
        name: "1.1 C++",
        theory: `
          <h3>¿Qué es C++?</h3>
          <p>C++ es un lenguaje de programación compilado de alto rendimiento creado por Bjarne Stroustrup en 1979 como una extensión del lenguaje C.</p>
          <p><strong>Características clave:</strong></p>
          <ul>
            <li><strong>Eficiencia:</strong> Control directo sobre la memoria y los recursos de hardware.</li>
            <li><strong>Multiparadigma:</strong> Soporta programación orientada a objetos (POO), estructurada y genérica.</li>
            <li><strong>Compilado:</strong> El código fuente se traduce directamente a lenguaje máquina antes de ejecutarse.</li>
          </ul>
        `,
        quiz: [
          { q: "¿Quién creó el lenguaje C++?", options: ["Dennis Ritchie", "Bjarne Stroustrup", "James Gosling", "Guido van Rossum"], answer: 1, whyCorrect: "Bjarne Stroustrup desarrolló C++ en los laboratorios Bell a partir de 1979.", whyIncorrect: "Dennis Ritchie creó C, Gosling creó Java y Van Rossum creó Python." },
          { q: "¿Qué tipo de lenguaje es C++?", options: ["Interpretado", "Compilado", "De marcado", "Es un script"], answer: 1, whyCorrect: "C++ es compilado; su código pasa por un compilador para transformarse en código máquina ejecutable.", whyIncorrect: "No es interpretado como Python ni de marcado como HTML." },
          { q: "¿En qué año se comenzó a desarrollar C++?", options: ["1979", "1995", "1989", "2001"], answer: 0, whyCorrect: "Comenzó en 1979 originalmente con el nombre de 'C con Clases'.", whyIncorrect: "Esa fecha no corresponde al origen de C++." },
          { q: "¿C++ permite programación orientada a objetos?", options: ["No, solo estructurada", "Sí, es multiparadigma", "Solo funcional", "No soporta clases"], answer: 1, whyCorrect: "C++ combina programación estructurada, orientada a objetos y genérica.", whyIncorrect: "C++ sí soporta clases y objetos completamente." },
          { q: "¿C++ deriva directamente de qué lenguaje?", options: ["Pascal", "C", "Fortran", "Assembly"], answer: 1, whyCorrect: "C++ fue diseñado como una extensión directa del lenguaje C.", whyIncorrect: "Su base directa es C." },
          { q: "¿Cuál es una ventaja principal de C++?", options: ["Sin gestión de memoria", "Control de bajo nivel y alto rendimiento", "No requiere compilador", "No usa sintaxis estricta"], answer: 1, whyCorrect: "Permite optimización extrema de recursos y acceso directo a memoria.", whyIncorrect: "C++ sí requiere compilador y tiene sintaxis estricta." },
          { q: "¿Qué extensión suelen tener los archivos fuente de C++?", options: [".py", ".cpp", ".java", ".html"], answer: 1, whyCorrect: ".cpp es la extensión estándar para archivos C++.", whyIncorrect: ".cpp representa C Plus Plus." },
          { q: "¿Qué significa que C++ sea un lenguaje compilado?", options: ["Que ejecuta línea por línea en tiempo real", "Que genera un ejecutable binario previo", "Que corre solo en navegadores", "Que no detecta errores"], answer: 1, whyCorrect: "El código pasa por un proceso de compilación que genera código binario antes de ejecutar.", whyIncorrect: "Ejecutar línea por línea es propio de lenguajes interpretados." },
          { q: "¿C++ requiere un punto de entrada principal?", options: ["No", "Sí, mediante la función main()", "Solo en Linux", "Solo si usa clases"], answer: 1, whyCorrect: "Todo programa executable en C++ necesita obligatoriamente una función main().", whyIncorrect: "main() es indispensable para la ejecución." },
          { q: "¿C++ maneja los recursos de memoria manualmente?", options: ["Sí, mediante punteros y operadores new/delete", "No, tiene recolección automática obligatoria", "Solo en Android", "No maneja memoria"], answer: 0, whyCorrect: "A diferencia de Java, C++ da control directo al programador sobre la asignación de memoria.", whyIncorrect: "C++ no posee un recolector de basura automático por defecto." },
          { q: "¿En qué industrias es dominante C++?", options: ["Motores de videojuegos, sistemas operativos y simuladores", "Solo en desarrollo web frontend", "Diseño gráfico", "Bases de datos exclusivamente"], answer: 0, whyCorrect: "Su velocidad lo hace ideal para software que requiere máximo rendimiento.", whyIncorrect: "No es usado como lenguaje primario para páginas web frontend." },
          { q: "¿Qué relación hay entre C y C++?", options: ["Son idénticos", "C++ incluye casi todo C más características avanzadas", "C es más nuevo que C++", "No tienen relación"], answer: 1, whyCorrect: "C++ mantiene compatibilidad con la gran mayoría de la sintaxis de C.", whyIncorrect: "C++ evolucionó a partir de C." },
          { q: "¿Qué herramientas convierten código C++ en ejecutable?", options: ["Un navegador web", "Un compilador (como GCC o Clang)", "Un editor de texto simple", "Un formateador"], answer: 1, whyCorrect: "Los compiladores como GCC, Clang o MSVC transforman el código en un ejecutable.", whyIncorrect: "Los editores solo escriben texto, no compilan." },
          { q: "¿C++ es un lenguaje con tipado fuerte?", options: ["Sí", "No, es débil", "No tiene tipos", "Solo tiene tipos flotantes"], answer: 0, whyCorrect: "C++ exige declarar el tipo de dato de cada variable antes de usarla.", whyIncorrect: "No puedes cambiar arbitrariamente el tipo de una variable declarada." },
          { q: "¿Cómo se llamaba C++ en sus inicios?", options: ["C con Clases", "Super C", "Objective C", "C v2"], answer: 0, whyCorrect: "Bjarne Stroustrup lo llamó inicialmente 'C with Classes'.", whyIncorrect: "'C con Clases' fue su nombre original antes de adoptar C++ en 1983." },
          { q: "¿Qué significa el incremento ++ en el nombre C++?", options: ["Un error tipográfico", "El operador de incremento en C, denotando evolución", "Que requiere 2 procesadores", "Que es dos veces C"], answer: 1, whyCorrect: "El '++' es el operador de incremento, simbolizando 'la siguiente versión de C'.", whyIncorrect: "Representa la evolución incremental del lenguaje C." },
          { q: "¿C++ es portátil entre diferentes plataformas?", options: ["No", "Sí, recompilando el código para cada sistema", "Solo funciona en Windows", "Solo funciona en Linux"], answer: 1, whyCorrect: "El código fuente es portable siempre que exista un compilador adecuado para el sistema destino.", whyIncorrect: "Requiere recompilarse para el sistema operativo donde va a ejecutarse." },
          { q: "¿Qué es un IDE en el contexto de C++?", options: ["Un archivo ejecutable", "Entorno de Desarrollo Integrado con editor y compilador", "Una librería de gráficos", "Un tipo de variable"], answer: 1, whyCorrect: "Un IDE (como Dev-C++, Visual Studio) integra editor de texto, compilador y depurador.", whyIncorrect: "Un IDE es el software de desarrollo, no una librería ni variable." },
          { q: "¿Se pueden desarrollar videojuegos de alto nivel con C++?", options: ["No, es muy lento", "Sí, motores como Unreal Engine usan C++", "Solo juegos en 2D simples", "No soporta gráficos"], answer: 1, whyCorrect: "Unreal Engine y la mayoría de motores AAA están construidos con C++.", whyIncorrect: "C++ es el estándar de la industria del videojuego por su velocidad." },
          { q: "¿Qué ventaja tiene la compilación directa sobre la interpretación?", options: ["Ejecución significativamente más rápida", "Menor seguridad", "Archivos más pesados siempre", "Sintaxis más fácil"], answer: 0, whyCorrect: "Al no requerir un intérprete intermediario en tiempo de ejecución, el sistema ejecuta las instrucciones a máxima velocidad.", whyIncorrect: "El código compilado se ejecuta directamente en el procesador." }
        ],
        challengeTask: "Escribe la función main mínima que retorne 0.",
        initialCode: `#include <iostream>\n\nint main() {\n    // Completa la función\n    return 0;\n}`,
        solutionCheck: (c) => c.includes("int main()") && c.includes("return 0;")
      },
      {
        id: "1.2",
        name: "1.2 Conocimiento de Hola Mundo",
        theory: `
          <h3>Salida de Datos: Hola Mundo</h3>
          <p>Para imprimir texto en C++ utilizamos el flujo de salida <code>std::cout</code> definido en la librería encabezado <code>&lt;iostream&gt;</code>.</p>
          <p>El operador de inserción <code>&lt;&lt;</code> envía el texto hacia la consola.</p>
          <pre><code>#include &lt;iostream&gt;\n\nint main() {\n    std::cout &lt;&lt; "Hola Mundo";\n    return 0;\n}</code></pre>
        `,
        quiz: Array.from({ length: 20 }, (_, i) => ({
          q: `Pregunta ${i + 1}: ¿Qué operador se utiliza con std::cout para enviar información a la pantalla?`,
          options: [">>", "<<", "==", "->"],
          answer: 1,
          whyCorrect: "El operador << de inserción direcciona los datos hacia std::cout.",
          whyIncorrect: ">> se utiliza para entrada de datos con std::cin, no para salida."
        })),
        challengeTask: "Imprime la cadena 'Hola Mundo' exactamente en consola.",
        initialCode: `#include <iostream>\n\nint main() {\n    // Escribe tu código aquí\n    \n    return 0;\n}`,
        solutionCheck: (c) => c.includes('std::cout << "Hola Mundo"') || c.includes('cout << "Hola Mundo"')
      }
    ]
  }
];

// Estado global
let currentSection = 0;
let activeTopic = null;
let currentQuizIdx = 0;
let currentScore = 0;
let unlockedTopics = ["1.1"];

window.onload = () => {
  renderMap();
};

function renderMap() {
  const container = document.getElementById('nodesPath');
  container.innerHTML = '';

  const section = fullCourseData[currentSection];
  document.getElementById('sectionTitle').innerText = section.sectionTitle;

  section.topics.forEach(topic => {
    const isUnlocked = unlockedTopics.includes(topic.id);
    const wrapper = document.createElement('div');
    wrapper.className = 'node-wrapper';

    wrapper.innerHTML = `
      <div class="node-title">${topic.name}</div>
      <div class="hex-node ${!isUnlocked ? 'locked' : ''}" onclick="${isUnlocked ? `startTopic('${topic.id}')` : ''}">
        <i class="fas ${isUnlocked ? 'fa-book' : 'fa-lock'}"></i>
      </div>
    `;
    container.appendChild(wrapper);
  });
}

/* ==========================================================================
   FLUJO SECUENCIAL OBLIGATORIO: TEORÍA -> CUESTIONARIO (20/20) -> DESAFÍO
   ========================================================================== */
function startTopic(topicId) {
  const section = fullCourseData[currentSection];
  activeTopic = section.topics.find(t => t.id === topicId);

  document.getElementById('mapView').classList.add('hidden');
  document.getElementById('lessonView').classList.remove('hidden');

  // Cargar Teoría
  document.getElementById('theoryTitle').innerText = activeTopic.name;
  document.getElementById('theoryBody').innerHTML = activeTopic.theory;

  // Bloquear pestañas siguientes hasta cumplir requisitos
  document.getElementById('btn-tab-quiz').classList.add('disabled');
  document.getElementById('btn-tab-challenge').classList.add('disabled');

  switchTab('theory');
}

function finishTheoryAndGoToQuiz() {
  document.getElementById('btn-tab-quiz').classList.remove('disabled');
  switchTab('quiz');
  startQuiz();
}

/* ==========================================================================
   CUESTIONARIO EVALUATIVO CON RETROALIMENTACIÓN DETALLADA
   ========================================================================== */
function startQuiz() {
  currentQuizIdx = 0;
  currentScore = 0;
  showQuizQuestion();
}

function showQuizQuestion() {
  const qData = activeTopic.quiz[currentQuizIdx];
  document.getElementById('quizQuestionNum').innerText = `Pregunta ${currentQuizIdx + 1} de ${activeTopic.quiz.length}`;
  document.getElementById('quizScore').innerText = `Aciertos: ${currentScore}/${activeTopic.quiz.length}`;
  document.getElementById('quizQuestionText').innerText = qData.q;

  const optionsContainer = document.getElementById('quizOptionsContainer');
  optionsContainer.innerHTML = '';
  document.getElementById('feedbackBox').classList.add('hidden');

  qData.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt-btn';
    btn.innerText = opt;
    btn.onclick = () => handleAnswer(idx);
    optionsContainer.appendChild(btn);
  });
}

function handleAnswer(selectedIdx) {
  const qData = activeTopic.quiz[currentQuizIdx];
  const feedbackBox = document.getElementById('feedbackBox');
  const feedbackTitle = document.getElementById('feedbackTitle');
  const feedbackBody = document.getElementById('feedbackBody');

  // Deshabilitar botones de opción tras responder
  document.querySelectorAll('.quiz-opt-btn').forEach(btn => btn.disabled = true);

  if (selectedIdx === qData.answer) {
    currentScore++;
    feedbackBox.className = 'feedback-box correct';
    feedbackTitle.innerText = '¡Correcto!';
    feedbackBody.innerText = qData.whyCorrect;
  } else {
    feedbackBox.className = 'feedback-box incorrect';
    feedbackTitle.innerText = 'Incorrecto';
    feedbackBody.innerText = qData.whyIncorrect;
  }

  feedbackBox.classList.remove('hidden');
}

function nextQuizQuestion() {
  currentQuizIdx++;
  if (currentQuizIdx < activeTopic.quiz.length) {
    showQuizQuestion();
  } else {
    // Fin del cuestionario: Exigir 20/20
    if (currentScore === activeTopic.quiz.length) {
      alert("¡Excelente! Has alcanzado un puntaje perfecto (20/20). Se ha desbloqueado la fase de Desafío Práctico.");
      document.getElementById('btn-tab-challenge').classList.remove('disabled');
      switchTab('challenge');
      setupChallenge();
    } else {
      alert(`Obtuviste ${currentScore}/20 aciertos. Para dominar el tema debes responder 20 de 20 correctamente. Se reintentará el cuestionario.`);
      startQuiz();
    }
  }
}

/* ==========================================================================
   DESAFÍO PRÁCTICO EN CONSOLA
   ========================================================================== */
function setupChallenge() {
  document.getElementById('challengeTitle').innerText = `Desafío Práctico: ${activeTopic.name}`;
  document.getElementById('challengeDescription').innerHTML = `<p>${activeTopic.challengeTask}</p>`;
  document.getElementById('codeEditor').value = activeTopic.initialCode;
  document.getElementById('testResults').innerText = "Escribe tu código y presiona Ejecutar.";
}

function scrollToConsole() {
  document.getElementById('consoleArea').scrollIntoView({ behavior: 'smooth' });
}

function runCode() {
  const code = document.getElementById('codeEditor').value;
  const isCorrect = activeTopic.solutionCheck(code);

  if (isCorrect) {
    document.getElementById('testResults').innerText = "¡Código compilado y validado correctamente!";
    document.getElementById('testResults').style.color = "#a6e3a1";
    document.getElementById('successModal').classList.remove('hidden');
  } else {
    document.getElementById('testResults').innerText = "Error: El código no cumple con los requerimientos del ejercicio.";
    document.getElementById('testResults').style.color = "#f38ba8";
  }
}

function resetCode() {
  document.getElementById('codeEditor').value = activeTopic.initialCode;
}

function completeTopicAndNext() {
  document.getElementById('successModal').classList.add('hidden');
  
  // Desbloquear el siguiente subtema de forma secuencial
  const allTopics = fullCourseData.flatMap(s => s.topics);
  const currIndex = allTopics.findIndex(t => t.id === activeTopic.id);
  if (currIndex !== -1 && currIndex + 1 < allTopics.length) {
    const nextTopicId = allTopics[currIndex + 1].id;
    if (!unlockedTopics.includes(nextTopicId)) {
      unlockedTopics.push(nextTopicId);
    }
  }

  closeLesson();
  renderMap();
}

function closeLesson() {
  document.getElementById('lessonView').classList.add('hidden');
  document.getElementById('mapView').classList.remove('hidden');
}

function switchTab(tabName) {
  ['theory', 'quiz', 'challenge'].forEach(t => {
    document.getElementById(`tab-${t}`).classList.add('hidden');
    document.getElementById(`btn-tab-${t}`)?.classList.remove('active');
  });

  document.getElementById(`tab-${tabName}`).classList.remove('hidden');
  document.getElementById(`btn-tab-${tabName}`)?.classList.add('active');
}