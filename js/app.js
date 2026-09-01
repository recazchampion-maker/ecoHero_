const A='assets/';
const challenges=[
 {id:1,cat:'مياه',icon:'13_water_icon.png',title:'استخدم كوبك القابل لإعادة الاستخدام اليوم 💧',desc:'بدل شراء زجاجة بلاستيك جديدة، استخدم زجاجتك أو كوبك الشخصي.'},
 {id:2,cat:'تدوير',icon:'15_recycle_icon.png',title:'افصل ورقًا أو كرتونًا للتدوير ♻️',desc:'اجمع الورق والكرتون النظيف وضعه في حاوية التدوير المناسبة.'},
 {id:3,cat:'بلاستيك',icon:'17_plastic_icon.png',title:'تجنب قطعة بلاستيك للاستخدام مرة واحدة 🧴',desc:'استبدلها ببديل قابل لإعادة الاستخدام.'},
 {id:4,cat:'طاقة',icon:'16_energy_icon.png',title:'أطفئ جهازًا لا تحتاجه الآن ⚡',desc:'خطوة صغيرة في ترشيد الطاقة تصنع فرقًا مع الوقت.'},
 {id:5,cat:'طبيعة',icon:'14_tree_icon.png',title:'ازرع أو اعتنِ بنبات اليوم 🌳',desc:'اسقِ نباتًا أو ازرع بذرة واهتم بها.'},
 {id:6,cat:'نظافة',icon:'06_hero_character.png',title:'التقط 3 قطع قمامة حولك 🌍',desc:'اجعل مكانك أنظف، وتخلص من النفايات بالطريقة المناسبة.'}
];
const levels=[
 {min:0,name:'🌱 المبتدئ البيئي',planet:'02_planet_level1.png',max:20},
 {min:20,name:'🌿 صديق الطبيعة',planet:'03_planet_level2.png',max:50},
 {min:50,name:'🌳 حارس الكوكب',planet:'04_planet_level3.png',max:100},
 {min:100,name:'🏆 EcoHero',planet:'05_planet_level4.png',max:150}
];
const badges=[
 {id:'water',min:20,title:'💧 حارس الماء',locked:'11_water_badge_locked.png',open:'07_water_badge.png',desc:'أكمل 20 XP لفتحه.'},
 {id:'tree',min:50,title:'🌳 صديق الأشجار',locked:'11_water_badge_locked.png',open:'08_nature_badge.png',desc:'أكمل 50 XP لفتحه.'},
 {id:'recycle',min:100,title:'♻️ بطل التدوير',locked:'12_recycle_badge_locked.png',open:'09_recycle_badge.png',desc:'أكمل 100 XP لفتحه.'},
 {id:'hero',min:150,title:'🌍 EcoHero',locked:'12_recycle_badge_locked.png',open:'10_ecohereo_badge.png',desc:'أكمل 150 XP لفتحه.'}
];
const tips={plastic:'🧴 البلاستيك: حاول إعادة استخدامه أو وضعه في حاوية التدوير المناسبة.',paper:'📦 الورق: افصل الورق والكرتون عن باقي النفايات وضعه في حاوية التدوير المناسبة.',glass:'🍾 الزجاج: افصل الزجاج عن باقي النفايات وتخلص منه في المكان المخصص.',battery:'🔋 البطاريات: لا تضعها في القمامة العادية. استخدم نقطة جمع مخصصة للبطاريات إن كانت متاحة.'};

const questionBank=[
{id:'q1',level:1,cat:'مياه 💧',type:'mcq',title:'لما تخلص غسل سنانك، تعمل إيه عشان متضيعش مياه؟',options:['أسيب الحنفية مفتوحة','أقفل الحنفية','أفتحها أكتر','مش فارقة'],answer:1,info:'قفل الحنفية وإنت بتغسل سنانك بيوفر مياه كتير.'},
{id:'q2',level:1,cat:'كهربا ⚡',type:'mcq',title:'لو خرجت من الأوضة، تعمل إيه في النور؟',options:['أسيبه منور','أطفيه','أزوّد النور','أفتح كل الأنوار'],answer:1,info:'إطفاء النور اللي مش محتاجه بيوفر كهربا.'},
{id:'q3',level:1,cat:'بلاستيك 🧴',type:'mcq',title:'إيه أحسن بدل زجاجة الميه البلاستيك كل يوم؟',options:['زجاجة قابلة لإعادة الاستخدام','زجاجة جديدة كل مرة','أرمي الزجاجة في الشارع','أستخدم كذا زجاجة'],answer:0,info:'استخدام زجاجة قابلة لإعادة الاستخدام يقلل البلاستيك.'},
{id:'q4',level:1,cat:'تدوير ♻️',type:'mcq',title:'لو عندك علبة بلاستيك فاضية ونضيفة، تعمل إيه؟',options:['أرميها في الشارع','أحرقها','أحطها في مكان التدوير المناسب لو موجود','أرميها في النهر'],answer:2,info:'العبوة النظيفة ممكن تدخل التدوير حسب نظام المكان.'},
{id:'q5',level:1,cat:'ورق 📄',type:'mcq',title:'إزاي نوفر في الورق؟',options:['نستخدم الورقة من الناحيتين','نطبع كل حاجة مرتين','نرمي الورق السليم','نستخدم ورقة جديدة لكل سطر'],answer:0,info:'استخدام الناحيتين يقلل استهلاك الورق.'},
{id:'q6',level:1,cat:'طبيعة 🌱',type:'mcq',title:'النبات محتاج إيه عشان يفضل كويس؟',options:['مياه مناسبة وضوء مناسب','مياه كتير جدًا','نقطّع ورقه','نسيبه من غير مياه'],answer:0,info:'النبات محتاج رعاية مناسبة من غير إسراف في المياه.'},
{id:'q7',level:1,cat:'مواصلات 🚶',type:'mcq',title:'لو المكان قريب وآمن، إيه اختيار أحسن للبيئة؟',options:['المشي','ركوب العربية لوحدي','تشغيل العربية من غير ما نتحرك','مشوار زيادة بالعربية'],answer:0,info:'المشي في المشاوير القريبة والآمنة بيقلل الانبعاثات.'},
{id:'q8',level:1,cat:'أكل 🍎',type:'mcq',title:'قبل ما تاخد أكل كتير، تعمل إيه؟',options:['آخد قد احتياجي','آخد أكتر وأرمي الباقي','أرمي الأكل الصالح','ملا الطبق للآخر دايمًا'],answer:0,info:'أخد الكمية اللي محتاجها بيقلل هدر الأكل.'},
{id:'q9',level:2,cat:'مياه 💧',type:'calc',title:'الحنفية بتنزل 2 لتر في الدقيقة. في 5 دقايق هدرنا كام لتر؟',answer:'10',info:'2 × 5 = 10 لتر.'},
{id:'q10',level:2,cat:'كهربا ⚡',type:'mcq',title:'إيه التصرف اللي بيوفر كهربا أكتر؟',options:['أطفي الجهاز لما أخلص منه','أسيبه شغال طول اليوم','أفتح التلفزيون من غير ما أتفرج','أشغل كل الأجهزة مع بعض'],answer:0,info:'إطفاء الأجهزة اللي مش مستخدمة بيوفر الطاقة.'},
{id:'q11',level:2,cat:'تدوير ♻️',type:'mcq',title:'ليه بنفصل الورق والكرتون عن باقي الزبالة؟',options:['عشان ممكن يتدوّروا','عشان ياخدوا مساحة أكبر','عشان نرميهم في الشارع','مفيش سبب'],answer:0,info:'فرز المواد بيساعد على إعادة تدويرها.'},
{id:'q12',level:2,cat:'بلاستيك 🧴',type:'mcq',title:'أنهي تصرف يقلل البلاستيك اللي بنستخدمه؟',options:['استخدام شنطة قابلة لإعادة الاستخدام','أخذ كيس لكل حاجة','استخدام أكواب بلاستيك كتير','رمي البلاستيك في الطبيعة'],answer:0,info:'البدائل القابلة لإعادة الاستخدام بتقلل البلاستيك أحادي الاستخدام.'},
{id:'q13',level:2,cat:'أكل 🍎',type:'mcq',title:'عندك أكل زيادة ولسه صالح، الأفضل تعمل إيه؟',options:['نحفظه ونستخدمه بعدين لو ينفع','نرميه فورًا','نسيبه مكشوف','نشتري نفس الأكل تاني'],answer:0,info:'حفظ الأكل الصالح واستخدامه لاحقًا يقلل الهدر.'},
{id:'q14',level:2,cat:'ورق 📄',type:'calc',title:'لو استخدمت ورقة من الناحيتين بدل ورقتين، وفرت كام ورقة؟',answer:'1',info:'استخدام ورقة واحدة بدل ورقتين يعني وفرت ورقة واحدة.'},
{id:'q15',level:2,cat:'مواصلات 🚶',type:'mcq',title:'لو مشوارك قريب وممكن تمشيه بأمان، ليه المشي اختيار كويس؟',options:['بيقلل استخدام العربية','عشان نستهلك بنزين أكتر','عشان نزود الزحمة','عشان العربية تشتغل أكتر'],answer:0,info:'المشي يقلل استخدام الوقود والانبعاثات.'},
{id:'q16',level:2,cat:'طبيعة 🌱',type:'mcq',title:'لو لقيت صنبور بيسرب، تعمل إيه؟',options:['أطنش','أبلغ حد كبير أو المسؤول','أفتحه أكتر','أسيبه يسرّب'],answer:1,info:'الإبلاغ عن التسريب يساعد على منع هدر المياه.'},
{id:'q17',level:3,cat:'مياه 💧',type:'order',title:'رتّب التصرفات من الأحسن لتوفير المياه للأوحش.',items:['أصلّح التسريب','أقفل الحنفية وأنا بغسل سناني','أسيب الحنفية مفتوحة'],answer:[0,1,2],info:'إصلاح التسريب ثم قفل الحنفية أفضل من تركها مفتوحة.'},
{id:'q18',level:3,cat:'كهربا ⚡',type:'calc',title:'لو لمبة بتستهلك 10 وحدات في الساعة، هتوفر كام وحدة لو طفيتها 3 ساعات؟',answer:'30',info:'10 × 3 = 30 وحدة.'},
{id:'q19',level:3,cat:'تدوير ♻️',type:'mcq',title:'إيه اللي يساعد التدوير ينجح أكتر؟',options:['نفصل المواد ونحطها في المكان الصح','نخلط كل حاجة ببعض','نرمي المواد في الشارع','نحرق البلاستيك'],answer:0,info:'الفرز الصحيح بيساعد المواد توصل للتدوير المناسب.'},
{id:'q20',level:3,cat:'بلاستيك 🧴',type:'mcq',title:'إيه مشكلة البلاستيك اللي بنستخدمه مرة واحدة؟',options:['بيزود كمية المخلفات','بيختفي فورًا','بيتزرع في الأرض','مبيعملش أي مخلفات'],answer:0,info:'الاستخدام مرة واحدة بيزود المخلفات، فالأفضل نستخدم بدائل قابلة لإعادة الاستخدام.'},
{id:'q21',level:3,cat:'أكل 🍎',type:'mcq',title:'إيه عادة تساعدنا نقلل رمي الأكل؟',options:['نخطط للوجبات ونشتري على قد احتياجنا','نشتري أكتر من اللازم','نرمي الباقي الصالح','ناخد كميات أكبر من احتياجنا'],answer:0,info:'التخطيط والشراء على قد الاحتياج يقلل هدر الطعام.'},
{id:'q22',level:3,cat:'ورق 📄',type:'mcq',title:'قبل ما تطبع حاجة، إيه سؤال مهم تسأله لنفسك؟',options:['هل أنا محتاج أطبعها أصلًا؟','أطبعها مرتين؟','أستخدم ورق أكتر؟','أرمي الورق بعد الطباعة؟'],answer:0,info:'التفكير قبل الطباعة يقلل استهلاك الورق.'},
{id:'q23',level:3,cat:'طبيعة 🌱',type:'mcq',title:'ليه بنحافظ على النباتات والأشجار؟',options:['بتساعد البيئة وبتوفر موطن لكائنات كتير','عشان نكسرها','عشان نرمي عليها الزبالة','ملهاش فايدة'],answer:0,info:'النباتات والأشجار مهمة للبيئة وللكائنات الحية.'},
{id:'q24',level:3,cat:'مواصلات 🚶',type:'mcq',title:'أنهي اختيار ممكن يقلل التلوث في مشوار قريب؟',options:['المشي أو العجلة لو المكان آمن','ركوب العربية لوحدي دايمًا','تشغيل العربية وهي واقفة','عمل مشوار بالعربية من غير سبب'],answer:0,info:'المشي أو العجلة في الأماكن الآمنة يقلل استخدام الوقود.'},
{id:'q25',level:4,cat:'مياه 💧',type:'calc',title:'أسرة بتوفر 3 لتر مياه كل يوم. في 7 أيام هتوفر كام لتر؟',answer:'21',info:'3 × 7 = 21 لتر.'},
{id:'q26',level:4,cat:'كهربا ⚡',type:'mcq',title:'لو شاحن الموبايل مش مستخدم، الأفضل تعمل إيه؟',options:['أفصله من الكهرباء','أسيبه متوصل طول الوقت','أوصل شواحن زيادة','أسيبه شغال من غير موبايل'],answer:0,info:'فصل الأجهزة والشواحن غير المستخدمة عادة أفضل لتقليل استهلاك الكهرباء.'},
{id:'q27',level:4,cat:'تدوير ♻️',type:'order',title:'رتّب الحلول من الأفضل لتقليل المخلفات للأقل.',items:['أقلل اللي بشتريه','أعيد استخدام الحاجة','أدوّر الحاجة لو ينفع'],answer:[0,1,2],info:'الأفضل نقلل المخلفات من البداية، وبعدها نعيد الاستخدام ثم التدوير.'},
{id:'q28',level:4,cat:'بلاستيك 🧴',type:'mcq',title:'لو قدامك اختيار بين كوباية تستخدمها كذا مرة وكوباية تستخدمها مرة واحدة، تختار إيه؟',options:['القابلة لإعادة الاستخدام','اللي تستخدم مرة واحدة كل مرة','الاتنين ونرميهم','أي حاجة ونرميها في الشارع'],answer:0,info:'إعادة الاستخدام بتقلل كمية المخلفات.'},
{id:'q29',level:4,cat:'أكل 🍎',type:'calc',title:'لو 2 قطعة أكل بتترمي كل يوم، في 5 أيام هيترمي كام قطعة؟',answer:'10',info:'2 × 5 = 10 قطع.'},
{id:'q30',level:4,cat:'ورق 📄',type:'mcq',title:'إيه الاختيار الأفضل لما تكون الورقة لسه فاضية من ناحية؟',options:['أستخدم الناحية التانية','أرميها فورًا','أطبع عليها حاجة مش محتاجها','أقطعها وأرميها'],answer:0,info:'استخدام الناحية التانية بيقلل استهلاك الورق.'},
{id:'q31',level:4,cat:'طبيعة 🌱',type:'mcq',title:'لما تسقي نبات، إيه الصح؟',options:['أسقيه على قد احتياجه','أغرقه بالمياه','أسيبه من غير مياه دايمًا','أرش مياه من غير سبب'],answer:0,info:'الري بكمية مناسبة يحافظ على النبات ويوفر المياه.'},
{id:'q32',level:4,cat:'مواصلات 🚶',type:'mcq',title:'إيه عادة أحسن للبيئة في المشاوير القريبة؟',options:['المشي لو المكان آمن','استخدام العربية لكل مشوار صغير','تشغيل العربية وهي واقفة','عمل مشوار زيادة بالعربية'],answer:0,info:'المشي للمشاوير القريبة والآمنة يقلل الانبعاثات واستهلاك الوقود.'}
];
const taskBank=[
{id:'t1',cat:'⏱️ وقت التحدي',title:'مهمة توفير المياه 💧',desc:'اذهب إلى أقرب صنبور وتأكد أنه مغلق جيدًا بعد الاستخدام. نفّذ المهمة ثم اضغط «أنجزت المهمة».',icon:'13_water_icon.png'},
{id:'t2',cat:'⏱️ وقت التحدي',title:'مهمة إعادة التدوير ♻️',desc:'ابحث عن 3 أشياء قابلة لإعادة التدوير وضعها في مكان التجميع المناسب بمساعدة شخص بالغ إذا لزم الأمر.',icon:'15_recycle_icon.png'},
{id:'t3',cat:'⏱️ وقت التحدي',title:'مهمة الطاقة ⚡',desc:'أطفئ نورًا أو جهازًا كهربائيًا غير مستخدم الآن، ثم ارجع واضغط «أنجزت المهمة».',icon:'16_energy_icon.png'},
{id:'t4',cat:'⏱️ وقت التحدي',title:'مهمة الورق 🌳',desc:'استخدم ورقة من الجانبين اليوم بدل استخدام ورقة جديدة. بعدها اضغط «أنجزت المهمة».',icon:'14_tree_icon.png'},
{id:'t5',cat:'⏱️ وقت التحدي',title:'مهمة البلاستيك 🧴',desc:'استخدم زجاجة أو كوبًا قابلًا لإعادة الاستخدام بدل عبوة أحادية الاستخدام في مشروبك القادم.',icon:'17_plastic_icon.png'},
{id:'t6',cat:'⏱️ وقت التحدي',title:'مهمة الطعام 🍎',desc:'قبل رمي بقايا طعام صالحة، اسأل شخصًا بالغًا إن كان يمكن حفظها أو استخدامها لاحقًا.',icon:'06_hero_character.png'},
{id:'t7',cat:'⏱️ وقت التحدي',title:'مهمة الطبيعة 🌱',desc:'اعتنِ بنبات: اسقه بكمية مناسبة أو نظف مكانه، ثم اضغط «أنجزت المهمة».',icon:'14_tree_icon.png'},
{id:'t8',cat:'⏱️ وقت التحدي',title:'مهمة الحركة 🚶',desc:'إذا كانت وجهتك قريبة وآمنة، اختر المشي بدل رحلة قصيرة بالسيارة، وبموافقة شخص بالغ.',icon:'06_hero_character.png'}
];

let state=JSON.parse(localStorage.getItem('ecoHeroState')||'null')||{xp:0,completed:0,water:0,completedIds:[],lastChallenge:null,sound:true,finished:false,questionCount:0,taskCount:0,lastTaskAtQuestion:-1};
let challenge=null;
function save(){localStorage.setItem('ecoHeroState',JSON.stringify(state));}
function levelFor(xp){return [...levels].reverse().find(l=>xp>=l.min)||levels[0]}
function currentLevelIndex(){return levels.findIndex(l=>levelFor(state.xp)===l)}
function render(){
 const l=levelFor(state.xp); const next=levels[currentLevelIndex()+1]; const base=l.min; const cap=next?next.min:l.max; const pct=Math.min(100,Math.max(0,((state.xp-base)/(cap-base))*100));
 document.getElementById('levelName').textContent=l.name; document.getElementById('xpText').textContent=`${state.xp} / ${cap} XP`; document.getElementById('xpBar').style.width=pct+'%'; document.getElementById('xpStat').textContent=state.xp; document.getElementById('completedStat').textContent=state.completed; document.getElementById('waterStat').textContent=state.water.toFixed(0); document.getElementById('totalScore').textContent=state.xp+' XP'; document.getElementById('myLevel').textContent=l.name; document.getElementById('planet').src=A+l.planet; document.getElementById('levelPill').textContent=`Level ${currentLevelIndex()+1}`;
 const msgs=['كل خطوة صغيرة بتفرق! 🌍💚','الكوكب بدأ يلاحظ مجهودك! 🌿','أنت بتصنع فرقًا حقيقيًا! 🌳','أصبحت EcoHero! الكوكب فخور بيك! 🏆']; document.getElementById('motivation').textContent=msgs[currentLevelIndex()]; renderBadges(); save();
}
function renderBadges(){document.getElementById('badgesGrid').innerHTML=badges.map(b=>{const open=state.xp>=b.min;return `<article class="badge-card ${open?'':'locked'}"><img src="${A+(open?b.open:b.locked)}" alt="${b.title}"><div><h3>${b.title}</h3><p>${open?'تم فتح الوسام! 🎉':b.desc}</p><span class="badge-status">${open?'🔓 مفتوح':'🔒 مقفول'}</span></div></article>`}).join('')}
function toast(t){const el=document.getElementById('toast');el.textContent=t;el.classList.add('show');clearTimeout(window._toast);window._toast=setTimeout(()=>el.classList.remove('show'),2200)}
function navigate(page){document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active',p.id===page));document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.page===page));window.scrollTo({top:0,behavior:'smooth'})}
function ensureAnswerBox(){let box=document.getElementById('challengeAnswer');if(!box){box=document.createElement('div');box.id='challengeAnswer';box.className='challenge-answer';const p=document.getElementById('challengeDescription');p.after(box)}return box}
function pickChallenge(){
 if(state.finished||state.xp>=150){finishGame();return}
 const canTask=availableTasks().length>0 && state.questionCount>0 && state.questionCount!==state.lastTaskAtQuestion && state.questionCount%2===0;
 if(canTask){challenge=shuffle(availableTasks())[0];challenge.kind='task';renderChallenge();return}
 const pool=availableQuestions(); if(!pool.length){challenge=shuffle(availableTasks())[0];challenge.kind='task';renderChallenge();return}
 challenge=shuffle(pool)[0];challenge.kind='question';state.lastChallenge=challenge.id;save();renderChallenge();toast('فكر كويس قبل ما تجاوب! 🧠🚀')
}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function availableQuestions(){const lvl=currentLevelIndex()+1;const sameLevel=questionBank.filter(q=>q.level===lvl&&!state.completedIds.includes(q.id));if(sameLevel.length)return sameLevel;return questionBank.filter(q=>!state.completedIds.includes(q.id))}
function availableTasks(){return taskBank.filter(t=>!state.completedIds.includes(t.id))}
function renderChallenge(){
 const box=ensureAnswerBox(); box.innerHTML=''; box.style.display='';
 document.getElementById('challengeCategory').textContent=challenge.cat;
 document.getElementById('challengeIcon').src=A+(challenge.icon||'13_water_icon.png');
 document.getElementById('challengeTitle').textContent=challenge.title;
 document.getElementById('challengeDescription').textContent=challenge.desc||challenge.info||'';
 document.getElementById('speakChallenge').disabled=false;
 const done=document.getElementById('completeChallenge'); const get=document.getElementById('getChallenge');
 get.disabled=false; done.disabled=false;
 if(challenge.kind==='task'){
  done.style.display='';done.textContent='✅ أنجزت المهمة';
 }else{
  done.style.display='none';
  if(challenge.type==='mcq') challenge.options.forEach((x,i)=>{const b=document.createElement('button');b.type='button';b.className='answer-option';b.textContent=x;b.onclick=()=>checkAnswer(i);box.appendChild(b)});
  if(challenge.type==='calc'){const input=document.createElement('input');input.type='number';input.inputMode='numeric';input.placeholder='اكتب الإجابة';input.className='answer-input';const b=document.createElement('button');b.type='button';b.className='primary';b.textContent='تحقق من الإجابة';b.onclick=()=>checkAnswer(input.value.trim());box.append(input,b)}
  if(challenge.type==='order'){let chosen=[];const shown=shuffle(challenge.items);shown.forEach(x=>{const b=document.createElement('button');b.type='button';b.className='answer-option order-option';b.dataset.index=challenge.items.indexOf(x);b.textContent=x;b.onclick=()=>{const idx=+b.dataset.index;const pos=chosen.indexOf(idx);if(pos>=0){chosen.splice(pos,1);b.classList.remove('selected')}else{chosen.push(idx);b.classList.add('selected')}box.querySelectorAll('.order-option').forEach(btn=>{const p=chosen.indexOf(+btn.dataset.index);btn.textContent=(p>=0?(p+1)+'. ':'')+challenge.items[+btn.dataset.index]})};box.appendChild(b)});const b=document.createElement('button');b.type='button';b.className='primary';b.textContent='تحقق من الترتيب';b.onclick=()=>checkOrder(chosen);box.appendChild(b)}
 }
}
function checkAnswer(value){let ok=challenge.type==='calc'?String(value)===String(challenge.answer):value===challenge.answer;if(!ok)return toast('إجابة غير صحيحة، حاول مرة أخرى 🤔');completeVerified('question');toast('إجابة صحيحة! +10 XP 🎉')}
function checkOrder(vals){if(vals.length!==challenge.answer.length||!vals.every((v,i)=>v===challenge.answer[i]))return toast('الترتيب مش صحيح، جرّب مرة ثانية 🤔');completeVerified('question');toast('ترتيب ممتاز! +10 XP 🎉')}
function completeVerified(kind){if(!challenge||state.finished)return;state.xp=Math.min(150,state.xp+10);state.completed++;if(!state.completedIds.includes(challenge.id))state.completedIds.push(challenge.id);if(kind==='question')state.questionCount++;else {state.taskCount++;state.lastTaskAtQuestion=state.questionCount;}save();document.getElementById('completeChallenge').disabled=true;document.getElementById('speakChallenge').disabled=true;render();document.querySelector('.planet-wrap').classList.add('pop');setTimeout(()=>document.querySelector('.planet-wrap').classList.remove('pop'),750);if(state.xp>=150){state.finished=true;save();setTimeout(finishGame,500)}else setTimeout(pickChallenge,650)}
function complete(){if(!challenge||challenge.kind!=='task')return;completeVerified('task');toast('أحسنت! أنجزت مهمة حقيقية للبيئة 🌱 +10 XP')}
function finishGame(){state.finished=true;save();challenge=null;document.getElementById('completeChallenge').disabled=true;document.getElementById('speakChallenge').disabled=true;document.getElementById('getChallenge').disabled=true;document.getElementById('getChallenge').textContent='🏆 الرحلة اكتملت';document.getElementById('challengeCategory').textContent='EcoHero';document.getElementById('challengeTitle').textContent='أحسنت! وصلت إلى نهاية الرحلة 🌍';document.getElementById('challengeDescription').textContent='أكملت رحلتك البيئية بنجاح. كل إجابة صحيحة وكل مهمة أنجزتها كانت خطوة نحو بيئة أفضل.';const box=document.getElementById('challengeAnswer');if(box)box.style.display='none';let modal=document.getElementById('finalModal');if(!modal){modal=document.createElement('div');modal.id='finalModal';modal.className='modal';modal.innerHTML='<div class="modal-card final-card"><div class="final-emoji">🌍💚</div><h2>رحلتك اكتملت! 🏆</h2><p>أنت الآن EcoHero حقيقي. كل تحدٍ أنجزته كان خطوة نحو بيئة أفضل.</p><div class="final-score"><div><strong id="finalScore">0 XP</strong><span>إجمالي النقاط</span></div><div><strong id="finalChallenges">0</strong><span>تحديات مكتملة</span></div></div><div class="final-message">🌱 بصمتك تركت أثرًا إيجابيًا على الكوكب. استمر بنفس الروح!</div><button class="primary" id="finalClose">أنا EcoHero! 🚀</button></div></div>';document.body.appendChild(modal);document.getElementById('finalClose').onclick=()=>modal.classList.add('hidden')}document.getElementById('finalScore').textContent=state.xp+' XP';document.getElementById('finalChallenges').textContent=state.completed;modal.classList.remove('hidden')}
function showBadge(id){const b=badges.find(x=>x.id===id);document.getElementById('modalBadgeImg').src=A+b.open;document.getElementById('modalBadgeTitle').textContent='وسام جديد! 🎉';document.getElementById('modalBadgeText').textContent=`فتحت ${b.title}. استمر، أنت بتقرب من EcoHero!`;document.getElementById('badgeModal').classList.remove('hidden')}
function speak(){if(!challenge||!('speechSynthesis' in window))return toast('المتصفح لا يدعم قراءة النص بصوت.');speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(challenge.title);u.lang='ar-EG';u.rate=.9;speechSynthesis.speak(u)}
document.addEventListener('click',e=>{const page=e.target.closest('[data-page]');if(page)navigate(page.dataset.page);const close=e.target.closest('[data-close]');if(close)document.getElementById(close.dataset.close).classList.add('hidden')});
document.getElementById('getChallenge').onclick=pickChallenge;document.getElementById('completeChallenge').onclick=complete;document.getElementById('speakChallenge').onclick=speak;document.getElementById('calculateWater').onclick=()=>{const m=Number(document.getElementById('minutes').value);if(!m||m<0)return toast('اكتب عدد الدقائق أولًا 💧');const saved=m*6;state.water+=saved;document.getElementById('waterResult').textContent=`🎉 وفرت حوالي ${saved.toFixed(0)} لتر من المياه! 💧`;save();render();toast('تم حفظ توفير المياه في تقدمك! 🌱')};
document.querySelectorAll('[data-tip]').forEach(b=>b.onclick=()=>document.getElementById('recycleTip').textContent=tips[b.dataset.tip]);
document.getElementById('soundBtn').onclick=()=>{state.sound=!state.sound;document.getElementById('soundBtn').textContent=state.sound?'🔊':'🔇';save()};document.getElementById('resetBtn').onclick=()=>{if(confirm('متأكد إنك عايز تبدأ من الصفر؟')){localStorage.removeItem('ecoHeroState');location.reload()}};
render();document.getElementById('soundBtn').textContent=state.sound?'🔊':'🔇';pickChallenge();
