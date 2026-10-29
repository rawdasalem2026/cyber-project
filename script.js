const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];

const lessonData = {
  1: {
    eyebrow: "الدرس 2-1", title: "تقنيات التشفير والمصادقة", icon: "⌑",
    concepts: [
      { name: "HTTP وHTTPS", icon: "↔", title: "ما الفرق بين HTTP وHTTPS؟", text: "HTTP بروتوكول لتبادل طلبات واستجابات الويب، لكنه لا يشفّر الاتصال بذاته. أما HTTPS فيستخدم HTTP عبر اتصال محمي ببروتوكول TLS لتشفير البيانات وحمايتها أثناء الانتقال.", tip: "HTTPS يحمي الاتصال أثناء النقل ولكنه جزء من خطة أمان شاملة تتطلب التأكد من مصداقية الموقع." },
      { name: "مصافحة TLS", icon: "⇄", title: "كيف يبدأ الاتصال الآمن؟", text: "يتفاوض المتصفح والخادم على إعدادات الاتصال، ويتحقق المتصفح من شهادة الخادم الرقمية، ثم تُولد مفاتيح الجلسة لتشفير البيانات بأسلوب آمن وسريع.", tip: "مصافحة TLS تضمن أن الطرف الآخر هو بالفعل الخادم المطلوب قبل بدء تبادل البيانات المشفرة." },
      { name: "الشهادة الرقمية", icon: "▤", title: "ما وظيفة الشهادة الرقمية؟", text: "تربط الشهادة الرقمية هوية مثل اسم النطاق بمفتاح عام، وتساعد المتصفح على التحقق من هوية الخادم عبر جهة إشهار موثوقة.", tip: "وجود الشهادة الرقمية هو دليل على هويّة الخادم الموثوقة للتواصل." },
      { name: "التشفير المتماثل وغير المتماثل", icon: "⚿", title: "المفاتيح والتشفير", text: "التشفير المتماثل يستخدم مفتاحاً واحداً للتشفير وفك التشفير وهو سريع جداً. أما غير المتماثل فيستخدم زوجاً من المفاتيح (عام للجميع وخاص لصاحبه) لتوزيع المفاتيح وتوقيع البيانات.", tip: "أنظمة TLS الحديثة تجمع بين التشفيرين للحصول على أقصى أمان وأعلى سرعة." },
      { name: "المصادقة 2FA و MFA", icon: "◎", title: "التحقق متعدد العوامل", text: "المصادقة الثنائية 2FA تتطلب إثبات الهوية باستخدام عاملين من فئتين مختلفتين (مثل كلمة المرور + رمز هاتف أو بصمة).", tip: "استخدام أكثر من عامل يمنع الاختراق حتى لو تم تسريب كلمة المرور." }
    ]
  },
  2: {
    eyebrow: "الدرس 2-2", title: "تصميم أمان الشبكات", icon: "⌘",
    concepts: [
      { name: "جدار الحماية Firewall", icon: "▥", title: "حارس بوابة الشبكة", text: "يراقب جدار الحماية حركة البيانات الواردة والصادرة ويطبق قواعد أمان حازمة للسماح بالمرور أو حظره بناءً على المنافذ والعناوين.", tip: "جدار الحماية هو خط الدفاع الأول لمنع الوصول غير المصرح به." },
      { name: "الشبكة الافتراضية VPN", icon: "⇄", title: "النفق الآمن للاتصال", text: "تنشئ الـ VPN نفقاً مشفراً لنقل البيانات عبر الشبكات العامة (كالإنترنت) بأمان وكأن الجهاز متصل داخل الشبكة الخاصة للمؤسسة.", tip: "VPN تحمي البيانات من التنصت أثناء نقلها عبر شبكات الـ Wi-Fi العامة." },
      { name: "المنطقة المعزولة DMZ", icon: "▤", title: "منطقة الخوادم العامة", text: "تستضيف DMZ الخوادم المتاحة للجمهور (مثل خادم الويب) وتفصلها عن الشبكة الداخلية لحماية البيانات الحساسة إذا تعرض خادم الويب للاختراق.", tip: "فصل DMZ يضمن عدم وصول المهاجم مباشرة إلى قواعد البيانات الداخلية." },
      { name: "انعدام الثقة Zero Trust", icon: "◎", title: "لا تثق أبداً.. تحقق دائماً", text: "مفهوم أمني حديث ينص على عدم الثقة بأي مستخدم أو جهاز تلقائياً حتى لو كان داخل الشبكة الداخلية، بل يلزم التحقق المستمر من الهوية والصلاحيات.", tip: "تطبيق مبدأ Zero Trust يقلل الهجمات الداخلية والانتقال الخفي للمهاجمين." }
    ]
  },
  3: {
    eyebrow: "الدرس 2-3", title: "الاستجابة للحوادث وإدارة المخاطر", icon: "⌁",
    concepts: [
      { name: "الحادث الأمني", icon: "⚠", title: "ما هو الحادث السيبراني؟", text: "حدث يهدد سرية المعلومات أو سلامتها أو توافرها، مثل تسريب البيانات، التعديل غير المصرح، أو هجمات حظر الخدمة.", tip: "السرعة والدقة في اكتشاف الحادث يقللان الأضرار الناجمة عنه." },
      { name: "مراحل الاستجابة الـ 6", icon: "01", title: "التعامل المنظم مع الأزمات", text: "تبدأ بالتحضير، ثم الاكتشاف والتحليل، يليها الاحتواء للحد من الضرر، ثم الاستئصال وإزالة التهديد، فالاستعادة إلى الوضع الطبيعي، وأخيراً استخلاص الدروس المستفادة.", tip: "الالتزام بالخطوات الست يضمن التعافي السريع دون فقدان الأدلة الرقمية." },
      { name: "حاسبة تقييم المخاطر", icon: "×", title: "مصفوفة المخاطر السيبرانية", text: "تُحسب درجة الخطر بضرب: (درجة احتمالية الحدوث) × (حجم التأثير والضرر). الأولوية تُعطى للمخاطر ذات النتيجة الأعلى.", tip: "تقييم المخاطر يساعد المؤسسات على توزيع الميزانية والأدوات على الثغرات الأكثر خطورة أولاً." }
    ]
  }
};

let currentLesson = 1;

function renderLesson(id) {
  currentLesson = id;
  const d = lessonData[id];
  $("#detailEyebrow").textContent = d.eyebrow;
  $("#detailTitle").textContent = d.title;
  $("#conceptIcon").textContent = d.icon;
  $("#conceptList").innerHTML = d.concepts.map((c, i) => `<button class="concept-item ${i === 0 ? 'active' : ''}" data-concept="${i}">${c.name}</button>`).join("");
  showConcept(0);
  $$(".lesson-card").forEach(c => c.classList.toggle("selected", Number(c.dataset.lesson) === id));
}

function showConcept(index) {
  const c = lessonData[currentLesson].concepts[index];
  $("#conceptIcon").textContent = c.icon;
  $("#conceptTitle").textContent = c.title;
  $("#conceptText").textContent = c.text;
  $("#conceptTip").textContent = c.tip;
  $$(".concept-item").forEach((b, i) => b.classList.toggle("active", i === index));
}

$$(".lesson-card").forEach(card => card.addEventListener("click", () => {
  renderLesson(Number(card.dataset.lesson));
  $("#lessonDetail").scrollIntoView({ behavior: "smooth", block: "start" });
}));

$("#conceptList").addEventListener("click", e => {
  const b = e.target.closest("[data-concept]");
  if (b) showConcept(Number(b.dataset.concept));
});

renderLesson(1);

$$(".lab-tab").forEach(tab => tab.addEventListener("click", () => {
  $$(".lab-tab").forEach(t => t.classList.toggle("active", t === tab));
  ["web", "network", "incident"].forEach(id => $("#" + id + "Lab").hidden = tab.dataset.lab !== id);
}));

function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return "ENC_" + Math.abs(hash).toString(16) + "x89f";
}

let protocol = "http", busy = false;

function setProtocol(p) {
  protocol = p;
  $$(".protocol-btn").forEach(b => b.classList.toggle("active", b.dataset.protocol === p));
  $("#protocolShield").textContent = p.toUpperCase();
  $("#protocolShield").classList.toggle("secure", p === "https");
  $("#networkNote").textContent = p === "https" ? "الاتصال مشفر ومؤمن ببروتوكول TLS. النص يتحول لرموز مشفرة أثناء الانتقال!" : "البيانات تنتقل كنص واضح (Plaintext) يمكن لأي متجسس قراءته!";
  $("#httpsSteps").hidden = p !== "https";
  resetWeb();
}

$$(".protocol-btn").forEach(b => b.addEventListener("click", () => setProtocol(b.dataset.protocol)));

function resetWeb() {
  busy = false;
  $("#requestProgress").style.width = "0";
  $("#requestPacket").classList.remove("moving");
  $("#requestPacket").style.opacity = "0";
  $("#clientState").textContent = "جاهز للإرسال";
  $("#serverState").textContent = "في الانتظار";
  $("#webStatus").textContent = "المحاكاة جاهزة.";
  $("#sendRequest").disabled = false;
  $$(".step-chip").forEach((s, i) => s.classList.toggle("active", i === 0 && protocol === "https"));
  $$(".step-chip").forEach(s => s.classList.remove("done"));
}

$("#resetWeb").addEventListener("click", resetWeb);

const wait = ms => new Promise(res => setTimeout(res, ms));

$("#sendRequest").addEventListener("click", async () => {
  if (busy) return;
  busy = true;
  $("#sendRequest").disabled = true;

  const rawText = $("#userPayload").value || "بيانات سرية";

  if (protocol === "https") {
    $("#webStatus").textContent = "المرحلة 1: التحقق من الشهادة الرقمية للخادم...";
    $$(".step-chip")[0].classList.add("active");
    await wait(800);
    $$(".step-chip")[0].classList.remove("active"); $$(".step-chip")[0].classList.add("done");

    $("#webStatus").textContent = "المرحلة 2: تبادل مفاتيح TLS وإنشاء الجلسة المشفرة...";
    $$(".step-chip")[1].classList.add("active");
    await wait(800);
    $$(".step-chip")[1].classList.remove("active"); $$(".step-chip")[1].classList.add("done");
    $$(".step-chip")[2].classList.add("active");

    $("#requestPacket").textContent = simpleHash(rawText);
  } else {
    $("#requestPacket").textContent = rawText;
  }

  $("#clientState").textContent = "جاري إرسال الحزمة...";
  $("#webStatus").textContent = "الحزمة تعبر الشبكة الآن...";
  $("#requestPacket").style.opacity = "1";
  $("#requestPacket").classList.add("moving");
  $("#requestProgress").style.width = "100%";

  await wait(1500);

  $("#serverState").textContent = "تم استلام البيانات " + (protocol === "https" ? "(تم فك التشفير بنجاح)" : "(وصلت صريحة)");
  $("#webStatus").textContent = protocol === "https" ? "اكتملت المحاكاة: نُقلت البيانات بأمان عالي بفضل تشفير TLS!" : "تحذير: نُقلت البيانات دون أي تشفير!";
  
  if (protocol === "https") {
    $$(".step-chip")[2].classList.remove("active");
    $$(".step-chip")[2].classList.add("done");
  }

  busy = false;
  $("#sendRequest").disabled = false;
});

$("#checkRoute").addEventListener("click", () => {
  const src = $("#sourceSelect").value;
  const tgt = $("#targetSelect").value;
  const res = $("#routeResult");

  let allowed = false;
  let explanation = "";

  if (src === "internet" && tgt === "webserver") {
    allowed = true;
    explanation = "سمح جدار الحماية بالوصول لأن خادم الويب متواجد داخل الـ DMZ ومخصص لاستقبال الزوار من الإنترنت.";
  } else if (src === "internet" && tgt === "database") {
    allowed = false;
    explanation = "ممنوع! حظر جدار الحماية الوصول المباشر من الإنترنت إلى قاعدة البيانات الداخلية لحماية بيانات المؤسسة.";
  } else if (src === "employee" && tgt === "database") {
    allowed = true;
    explanation = "تم السماح بالاتصال. الموظف متصل من داخل الشبكة الداخلية ويمتلك صلاحيات الوصول للبيانات.";
  } else {
    allowed = true;
    explanation = "الاتصال مسموح به وفق قواعد الشبكة الافتراضية.";
  }

  res.className = "route-result " + (allowed ? "allowed" : "blocked");
  res.innerHTML = `<b>${allowed ? "✓ اتصال مسموح (Passed)" : "⛔ اتصال محظور (Blocked)"}</b><p>${explanation}</p>`;

  const packet = $("#networkPacket");
  packet.classList.remove("animate");
  void packet.offsetWidth;
  packet.classList.add("animate");
});

const incidentStages = [
  ["التحضير (Preparation)", "تحديد الأدوار، وتجهيز أدوات المراقبة، ووضع خطة استجابة مسبقة قبل وقوع الحادث."],
  ["الاكتشاف والتحليل (Identification)", "رصد التنبيهات، وتحليل السجلات الرقمية للتحقق من وجود اختراق فعلي وقاس مدى أثره."],
  ["الاحتواء (Containment)", "عزل الأجهزة أو السيرفرات المصابة فوراً لمنع انتشار التهديد إلى بقية أجزاء الشبكة."],
  ["الاستئصال (Eradication)", "إزالة البرمجيات الخبيثة، وسد الثغرة الأمنية التي دخل منها المهاجم بالكامل."],
  ["الاستعادة (Recovery)", "إعادة تشغيل الأنظمة ببطء وأمان مع استعادة النسخ الاحتياطية ومراقبة العمليات."],
  ["الدروس المستفادة (Lessons Learned)", "توثيق التقرير النهائي للحادث وتحسين إجراءات الدفاع لمنع تكرار الهجوم مستقبلاً."]
];

let incidentIndex = 0;
function renderIncident() {
  const [title, desc] = incidentStages[incidentIndex];
  $("#incidentCounter").textContent = `المرحلة ${incidentIndex + 1} من 6`;
  $("#incidentTitle").textContent = title;
  $("#incidentDescription").textContent = desc;

  $$(".incident-step").forEach((s, i) => {
    s.classList.toggle("current", i === incidentIndex);
    s.classList.toggle("done", i < incidentIndex);
  });

  $("#nextIncident").textContent = incidentIndex === 5 ? "↻ إعادة السيناريو" : "المرحلة التالية ←";
}

$("#nextIncident").addEventListener("click", () => {
  incidentIndex = incidentIndex === 5 ? 0 : incidentIndex + 1;
  renderIncident();
});

$("#evaluateRisk").addEventListener("click", () => {
  const l = Number($("#likelihood").value);
  const i = Number($("#impact").value);
  const score = l * i;

  let level = "منخفض", color = "#61e0b3";
  if (score >= 6) { level = "مرتفع جداً - أولوية قصوى"; color = "#ff788b"; }
  else if (score >= 3) { level = "متوسط - يتطلب المتابعة"; color = "#ffce78"; }

  $("#riskResult").innerHTML = `<span class="risk-score" style="color:${color}">${score}</span><div><b style="color:${color}">خطر ${level}</b><p>النتيجة = الاحتمالية (${l}) × التأثير (${i})</p></div>`;
});

const questions = [
  { topic: "تقنيات التشفير والمصادقة", q: "ما الفائدة الأساسية من استخدام HTTPS؟", a: ["تشفير الاتصال وحماية البيانات أثناء النقل", "زيادة سرعة فتح الموقع فقط", "منع الإعلانات على الموقع", "حذف الفيروسات تلقائياً"], correct: 0, why: "HTTPS يشفّر البيانات المنقولة بين المتصفح والسيرفر باستخدام بروتوكول TLS." },
  { topic: "تقنيات التشفير والمصادقة", q: "ما وظيفة الشهادة الرقمية؟", a: ["تخزين الصور على السيرفر", "إثبات هوية الخادم الموثوق للمتصفح", "تسريع الإنترنت", "تغيير شكل الموقع"], correct: 1, why: "الشهادات الرقمية تُصدر من جهات موثوقة لإثبات أن الموقع هو بالفعل ما يدعيه." },
  { topic: "تصميم أمان الشبكات", q: "أين نضع خادم الويب المتاح للجمهور لحماية الشبكة الداخلية؟", a: ["داخل قاعدة البيانات", "في المنطقة المعزولة DMZ", "على جهاز الموظف", "خارج جدار الحماية كلياً"], correct: 1, why: "تُستخدم الـ DMZ لفصل الخوادم العامة عن الشبكة الداخلية الحساسة." },
  { topic: "تصميم أمان الشبكات", q: "ماذا يقصد بمبدأ انعدام الثقة (Zero Trust)؟", a: ["عدم استخدام الكلمات السرية", "التحقق من الهوية والصلاحيات دائماً لكل طلب", "الثقة التلقائية بكل موظف", "إغلاق الشركة تماماً"], correct: 1, why: "Zero Trust يعتمد على قاعدة 'لا تثق بأحد مطلقاً، وتحقق دائماً'." },
  { topic: "الاستجابة للحوادث", q: "ما أول مرحلة ينبغي القيام بها عند وقوع حادث أمني؟", a: ["إعادة تشغيل الأجهزة", "الاحتواء والاكتشاف فوراً للحد من الضرر", "إغلاق الشركة", "نشر الخبر على الويب"], correct: 1, why: "الاكتشاف والاحتواء السريع يمنع انتشار التهديد لشبكات أخرى." },
  { topic: "إدارة المخاطر", q: "كيف نحدد درجة الخطورة السيبرانية في النماذج المبسطة؟", a: ["الاحتمالية + التأثير", "الاحتمالية × التأثير", "عدد الأجهزة ÷ 2", "سعر السيرفر"], correct: 1, why: "مصفوفة تقييم المخاطر تعتمد على ضرب درجة الاحتمالية في حجم التأثير." }
];

let qIndex = 0, score = 0, answered = false;

function renderQuestion() {
  const q = questions[qIndex];
  answered = false;
  $("#questionCounter").textContent = `السؤال ${qIndex + 1} من ${questions.length}`;
  $("#quizProgress").style.width = `${((qIndex + 1) / questions.length) * 100}%`;
  $("#questionTopic").textContent = q.topic;
  $("#questionText").textContent = q.q;
  $("#answers").innerHTML = q.a.map((ans, i) => `<button class="answer-option" data-answer="${i}"><b>${["أ", "ب", "ج", "د"][i]}.</b> ${ans}</button>`).join("");
  $("#quizFeedback").hidden = true;
  $("#nextQuestion").disabled = true;
  $("#quizScore").textContent = `النتيجة: ${score}`;
}

$("#answers").addEventListener("click", e => {
  const btn = e.target.closest("[data-answer]");
  if (!btn || answered) return;
  answered = true;

  const q = questions[qIndex];
  const chosen = Number(btn.dataset.answer);
  const correct = chosen === q.correct;

  if (correct) score++;

  $$(".answer-option").forEach((b, i) => {
    b.disabled = true;
    if (i === q.correct) b.classList.add("correct");
    else if (i === chosen) b.classList.add("wrong");
  });

  $("#quizFeedback").hidden = false;
  $("#quizFeedback").textContent = (correct ? "إجابة صحيحة! " : "إجابة غير دقيقة. ") + q.why;
  $("#quizScore").textContent = `النتيجة: ${score}`;
  $("#nextQuestion").disabled = false;
});

$("#nextQuestion").addEventListener("click", () => {
  if (qIndex < questions.length - 1) {
    qIndex++;
    renderQuestion();
  } else {
    $("#questionTopic").textContent = "اكتمل الاختبار!";
    $("#questionText").textContent = `حصلتَ على ${score} من ${questions.length}`;
    $("#answers").innerHTML = `<div class="route-result allowed"><b>${score >= 4 ? "ممتاز جداً يا مبرمج!" : "محاولة جيدة!"}</b><p>يمكنك إعادة الاختبار في أي وقت لتثبيت المعلومات.</p></div>`;
    $("#nextQuestion").textContent = "إعادة الاختبار";
    $("#nextQuestion").onclick = () => { qIndex = 0; score = 0; renderQuestion(); };
  }
});

renderQuestion();