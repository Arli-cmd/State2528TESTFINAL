
export const Lang = {
  ENG: 'ENG',
  RUS: 'RUS',
  KOR: 'KOR',
  CHI: 'CHI',
  DEU: 'DEU',
};

const EVENTS_ENG = { bearHunt: "Bear Hunt", foundry: "Foundry", canyon: "Canyon", crazyJoe: "Crazy Joe", mercenaries: "Mercenaries" };
const EVENTS_RUS = { bearHunt: "Медведь", foundry: "Литейная", canyon: "Каньон", crazyJoe: "Джо", mercenaries: "Наемники" };
const EVENTS_KOR = { bearHunt: "베어 헌트", foundry: "파운드리", canyon: "캐니언", crazyJoe: "크레이지 조", mercenaries: "용병" };
const EVENTS_CHI = { bearHunt: "熊猎", foundry: "铸造厂", canyon: "峡谷", crazyJoe: "疯狂乔", mercenaries: "雇佣兵" };
const EVENTS_DEU = { bearHunt: "Bärenjagd", foundry: "Gießerei", canyon: "Canyon", crazyJoe: "Crazy Joe", mercenaries: "Söldner" };

export const COPY = {
  [Lang.ENG]: {
    nav: { about: "State", nap: "NAP", reasons: "Why Us", alliances: "Alliances", apply: "Apply" },
    hero: { title: "STATE 2528", subtitle: "The Golden Standard", slogan: "A United State. A Winning Community." },
    events: EVENTS_ENG,
    about: {
      status: { active: "STATUS: ACTIVE", nap: "NAP: STABLE", coord: "COORDINATION: HIGH" },
      kicker: "About 2528",
      title: "More Than Just a State",
      shortIntro: "State 2528 is a stable, multinational state with an active NAP6 and strong inter-alliance coordination. We focus on strategy, unity, and respectful play to succeed in all global events.\n\nOur approach emphasizes joint preparation, clear roles, and consistent execution across the state.",
      shortApproach: "We value fair play and smart strategy. No drama, just good gameplay."
    },
    nap: {
      kicker: "Our Rules",
      title: "Safe Growth & Fair Play",
      desc: "We play smart and keep it peaceful inside the state. NAP means no wasted resources on internal fights — just steady growth and stronger showings in every event.",
      rulesTitle: "NAP Rules",
      napAlliancesTitle: "NAP Alliances",
      rules: [
        "No city attacks or scouting between NAP alliances.",
        "Castle and forts rotate on a clear, posted schedule.",
        "If there’s an issue, leadership handles it — no public fights.",
        "Toxicity, sabotage, or harassment: zero tolerance.",
      ],
      rotationTitle: "Castle & Fort Rotations",
      rotationDesc: "Sunfire Castle rotates on a clear schedule — fair access, smooth leadership transitions, and long-term stability for the state.",
      fortsDesc: "Fort and stronghold rotations are fair and contribution-based, aligned with preparation-phase SvS."
    },
    reasons: {
      kicker: "Why Transfer?",
      title: "Your New Home Awaits",
      items: [
        { title: "International & Inclusive", desc: "A global mix of players, one respectful vibe — whatever your time zone, you’ll fit in." },
        { title: "Experienced Leadership", desc: "Leaders who keep things calm, organized, and effective — especially during SvS." },
        { title: "State Discord Channel", desc: "Official state Discord channel for announcements, planning, and inter-alliance coordination." },
        { title: "Structured State Management", desc: "Clear rules, aligned decisions, and state-wide cooperation that actually works." },
        { title: "SvS-Oriented State", desc: "We’re SvS-minded: prep, discipline, and teamwork for consistent results." },
        { title: "Drama-Free & Mature Community", desc: "No drama policy. Calm, mature players who focus on goals — not arguments." },
      ]
    },
    alliances: {
      kicker: "Top Alliances",
      title: "Find Your Alliance",
      subtitle: "Different playstyles, same goal — organized, coordinated, and moving as one.",
      reqTitle: "Looking For",
      scheduleTitle: "Key Events (UTC)",
      coordsTitle: "Location",
      cards: [
        {
          tag: "KOR",
          name: "Korean Dynasty",
          motto: "Details coming soon",
          desc: "Details coming soon...",
          schedule: [
            { label: EVENTS_ENG.bearHunt, time: 'TBA' },
            { label: EVENTS_ENG.foundry, time: 'TBA' },
            { label: EVENTS_ENG.canyon, time: 'TBA' },
            { label: EVENTS_ENG.crazyJoe, time: 'TBA' },
            { label: EVENTS_ENG.mercenaries, time: 'TBA' }
          ],
          reqs: ["Coming soon"],
          coords: "X:753 Y:568"
        },
        {
          tag: "ONE",
          name: "The One",
          motto: "Forging Victory, Together.",
          desc: "[ONE] is calm, organized, and focused on teamwork, ensuring every member grows, learns, and wins together",
          schedule: [
            { label: EVENTS_ENG.bearHunt, time: '02:00 • 13:00 • 18:30' },
            { label: EVENTS_ENG.foundry, time: '14:00 • 19:00' },
            { label: EVENTS_ENG.canyon, time: '14:00 • 19:00' },
            { label: EVENTS_ENG.crazyJoe, time: '15:00' },
            { label: EVENTS_ENG.mercenaries, time: '15:00' }
          ],
          reqs: ["Furnace Level: FC4+", "Daily active", "Positive attitude"],
          coords: "X:589 Y:461"
        },
        {
          tag: "AFK",
          name: "AFK Legion",
          motto: "Details coming soon",
          desc: "Details coming soon...",
          schedule: [
            { label: EVENTS_ENG.bearHunt, time: 'TBA' },
            { label: EVENTS_ENG.foundry, time: 'TBA' },
            { label: EVENTS_ENG.canyon, time: 'TBA' },
            { label: EVENTS_ENG.crazyJoe, time: 'TBA' },
            { label: EVENTS_ENG.mercenaries, time: 'TBA' }
          ],
          reqs: ["Coming soon"],
          coords: "X:755 Y:690"
        },
        {
          tag: "GOD",
          name: "Gods of War",
          motto: "Details coming soon",
          desc: "Details coming soon...",
          schedule: [
            { label: EVENTS_ENG.bearHunt, time: 'TBA' },
            { label: EVENTS_ENG.foundry, time: 'TBA' },
            { label: EVENTS_ENG.canyon, time: 'TBA' },
            { label: EVENTS_ENG.crazyJoe, time: 'TBA' },
            { label: EVENTS_ENG.mercenaries, time: 'TBA' }
          ],
          reqs: ["Coming soon"],
          coords: "X:725 Y:550"
        }
      ]
    },
    apply: {
      note: "We check all applications to ensure a good fit.",
      kicker: "Join Us",
      title: "Ready to make the move?",
      desc: "If you're an active player looking for a stable, winning home, we'd love to have you. Let's start the conversation.",
      button: "Start Transfer Process →"
    },
    footer: { line: "STATE 2528 • The Golden Standard", small: "Unity. Strategy. Victory." }
  },
  [Lang.RUS]: {
    nav: { about: "О штате", nap: "Правила", reasons: "Преимущества", alliances: "Альянсы", apply: "Трансфер" },
    hero: { title: "STATE 2528", subtitle: "Золотой Стандарт", slogan: "Единый штат. Побеждающее сообщество." },
    events: EVENTS_RUS,
    about: {
      status: { active: "СТАТУС: АКТИВЕН", nap: "NAP: СТАБИЛЕН", coord: "КООРДИНАЦИЯ: ТОП" },
      kicker: "О штате 2528",
      title: "Больше, чем просто штат",
      shortIntro: "Штат 2528 — это стабильное, многонациональное государство с активным NAP6 и сильной координацией между альянсами. Мы фокусируемся на стратегии, единстве и уважительной игре для победы во всех глобальных событиях.\n\nНаш подход делает упор на совместную подготовку, четкие роли и последовательное выполнение задач всем штатом.",
      shortApproach: "Мы ценим честную игру и умную стратегию. Никакой драмы, только качественный геймплей."
    },
    nap: {
      kicker: "Наши правила",
      title: "Безопасный рост и честная игра",
      desc: "Мы играем с умом и поддерживаем мир внутри штата. NAP означает отсутствие траты ресурсов на внутренние распри — только стабильный рост и лучшие результаты в каждом событии.",
      rulesTitle: "Правила NAP",
      napAlliancesTitle: "Альянсы NAP",
      rules: ["Никаких атак на города или разведки между альянсами NAP.", "Замок и форты ротируются по четкому расписанию.", "Лидеры решают споры лично — без скандалов в мировом чате.", "Нулевая терпимость к токсичности, саботажу и оскорблениям."],
      rotationTitle: "Ротация Замка и Фортов",
      rotationDesc: "Замок Солнца ротируется по четкому графику — честный доступ, плавная смена руководства и долгосрочная стабильность штата.",
      fortsDesc: "Ротация фортов и крепостей честная и основана на вкладе, в соответствии с фазой подготовки к SvS."
    },
    reasons: {
      kicker: "Зачем переезжать?",
      title: "Твой новый дом ждет",
      items: [
        { title: "Интернациональность", desc: "Глобальный микс игроков, одна атмосфера уважения — какой бы ни был твой часовой пояс, ты впишешься." },
        { title: "Опытное руководство", desc: "Лидеры, которые поддерживают спокойствие, организованность и эффективность — особенно во время SvS." },
        { title: "Дискорд штата", desc: "Официальный канал Discord для анонсов, планирования и координации альянсов." },
        { title: "Структурное управление", desc: "Четкие правила, согласованные решения и сотрудничество всего штата, которое действительно работает." },
        { title: "Ориентир на SvS", desc: "Мы нацелены на SvS: подготовка, дисциплина и командная работа для стабильных результатов." },
        { title: "Без драм", desc: "Политика без драм. Спокойные, взрослые игроки, которые фокусируются на целях, а не на спорах." },
      ]
    },
    alliances: {
      kicker: "Топ Альянсы",
      title: "Найди свой альянс",
      subtitle: "Разные стили игры, одна цель — организованность, координация и движение как единое целое.",
      reqTitle: "Мы ищем",
      scheduleTitle: "События (UTC)",
      coordsTitle: "Координаты",
      cards: [
        {
            tag: "KOR",
            name: "Korean Dynasty",
            motto: "Скоро",
            desc: "Информация скоро появится...",
            schedule: [
              { label: EVENTS_RUS.bearHunt, time: 'TBA' },
              { label: EVENTS_RUS.foundry, time: 'TBA' },
              { label: EVENTS_RUS.canyon, time: 'TBA' },
              { label: EVENTS_RUS.crazyJoe, time: 'TBA' },
              { label: EVENTS_RUS.mercenaries, time: 'TBA' }
            ],
            reqs: ["Скоро"],
            coords: "X:753 Y:568"
        },
        {
            tag: "ONE",
            name: "The One",
            motto: "Куем победу вместе.",
            desc: "[ONE] — спокойный, организованный альянс, сфокусированный на командной работе, где каждый участник растет, учится и побеждает вместе.",
            schedule: [
              { label: EVENTS_RUS.bearHunt, time: '02:00 • 13:00 • 18:30' },
              { label: EVENTS_RUS.foundry, time: '14:00 • 19:00' },
              { label: EVENTS_RUS.canyon, time: '14:00 • 19:00' },
              { label: EVENTS_RUS.crazyJoe, time: '15:00' },
              { label: EVENTS_RUS.mercenaries, time: '15:00' }
            ],
            reqs: ["Печь FC4+", "Ежедневный актив", "Позитив и уважение"],
            coords: "X:589 Y:461"
        },
        {
            tag: "AFK",
            name: "AFK Legion",
            motto: "Скоро",
            desc: "Информация скоро появится...",
            schedule: [
              { label: EVENTS_RUS.bearHunt, time: 'TBA' },
              { label: EVENTS_RUS.foundry, time: 'TBA' },
              { label: EVENTS_RUS.canyon, time: 'TBA' },
              { label: EVENTS_RUS.crazyJoe, time: 'TBA' },
              { label: EVENTS_RUS.mercenaries, time: 'TBA' }
            ],
            reqs: ["Скоро"],
            coords: "X:755 Y:690"
        },
        {
            tag: "GOD",
            name: "Gods of War",
            motto: "Скоро",
            desc: "Информация скоро появится...",
            schedule: [
              { label: EVENTS_RUS.bearHunt, time: 'TBA' },
              { label: EVENTS_RUS.foundry, time: 'TBA' },
              { label: EVENTS_RUS.canyon, time: 'TBA' },
              { label: EVENTS_RUS.crazyJoe, time: 'TBA' },
              { label: EVENTS_RUS.mercenaries, time: 'TBA' }
            ],
            reqs: ["Скоро"],
            coords: "X:725 Y:550"
        }
      ]
    },
    apply: {
      note: "Мы просматриваем все заявки лично.",
      kicker: "Присоединяйся",
      title: "Готов к переезду?",
      desc: "Если ты активный игрок и ищешь стабильный, побеждающий дом — мы будем рады тебя видеть. Давай начнем.",
      button: "Начать процесс трансфера →"
    },
    footer: { line: "STATE 2528 • Золотой Стандарт", small: "Единство. Стратегия. Победа." }
  },
  [Lang.KOR]: {
    nav: { about: "국가", nap: "NAP", reasons: "장점", alliances: "연맹", apply: "지원" },
    hero: { title: "STATE 2528", subtitle: "골든 스탠다드", slogan: "단합된 국가. 승리하는 커뮤니티." },
    events: EVENTS_KOR,
    about: {
      status: { active: "상태: 활성", nap: "NAP: 안정", coord: "협력: 최상" },
      kicker: "국가 소개",
      title: "단순한 서버 그 이상",
      shortIntro: "State 2528은 활동적인 NAP6와 강력한 연맹 간 협력을 갖춘 안정적인 다국적 국가입니다. 우리는 전략, 단결, 존중하는 플레이에 집중하여 모든 글로벌 이벤트에서 승리합니다.\n\n우리의 접근 방식은 공동 준비, 명확한 역할 분담, 그리고 국가 전체의 일관된 실행을 강조합니다.",
      shortApproach: "우리는 공정한 플레이와 스마트한 전략을 중요하게 생각합니다. 드라마는 없고, 좋은 게임 플레이만 있습니다."
    },
    nap: {
      kicker: "규칙",
      title: "안전한 성장과 공정함",
      desc: "우리는 스마트하게 플레이하며 국가 내부의 평화를 유지합니다. NAP는 내부 싸움에 자원을 낭비하지 않는 것을 의미합니다 — 오직 꾸준한 성장과 이벤트에서의 강력한 성과만을 추구합니다.",
      rulesTitle: "NAP 규칙",
      napAlliancesTitle: "NAP 연맹",
      rules: ["NAP 연맹 간 도시 공격 및 정찰 금지.", "성과 요새는 명확한 일정에 따라 로테이션됩니다.", "문제가 발생하면 지도부가 비공개로 해결합니다 — 공개적인 싸움 금지.", "비매너, 방해 행위, 괴롭힘: 무관용 원칙."],
      rotationTitle: "성 및 요새 로테이션",
      rotationDesc: "태양성은 명확한 일정에 따라 로테이션됩니다 — 공정한 기회, 원활한 지도부 인계, 국가의 장기적인 안정성을 위함입니다.",
      fortsDesc: "요새와 거점 로테이션은 공정하며, SvS 준비 단계 기여도에 따라 배정됩니다."
    },
    reasons: {
      kicker: "이주해야 하는 이유",
      title: "당신의 새로운 집",
      items: [
        { title: "국제적 & 포용적", desc: "전 세계 플레이어들의 조화, 존중하는 분위기 — 당신의 시간대가 언제든 환영합니다." },
        { title: "숙련된 지도부", desc: "특히 SvS 기간 동안 침착하고 조직적이며 효과적으로 이끄는 리더들." },
        { title: "국가 디스코드 채널", desc: "공지사항, 계획 수립, 연맹 간 조율을 위한 공식 국가 디스코드 채널." },
        { title: "체계적인 국가 운영", desc: "명확한 규칙, 합의된 결정, 그리고 실제로 작동하는 국가 단위의 협력." },
        { title: "SvS 중심 국가", desc: "우리는 SvS를 지향합니다: 준비, 규율, 팀워크를 통해 꾸준한 결과를 만들어냅니다." },
        { title: "드라마 없는 성숙한 커뮤니티", desc: "드라마 금지 정책. 논쟁보다는 목표에 집중하는 차분하고 성숙한 플레이어들." },
      ]
    },
    alliances: {
      kicker: "탑 연맹",
      title: "당신의 연맹을 찾으세요",
      subtitle: "스타일은 다르지만 목표는 같습니다 — 조직적이고 협력하며 하나로 움직입니다.",
      reqTitle: "모집 조건",
      scheduleTitle: "주요 이벤트 (UTC)",
      coordsTitle: "위치",
      cards: [
        {
          tag: "KOR",
          name: "Korean Dynasty",
          motto: "곧 공개",
          desc: "세부 정보 준비 중...",
          schedule: [
            { label: EVENTS_KOR.bearHunt, time: '미정' },
            { label: EVENTS_KOR.foundry, time: '미정' },
            { label: EVENTS_KOR.canyon, time: '미정' },
            { label: EVENTS_KOR.crazyJoe, time: '미정' },
            { label: EVENTS_KOR.mercenaries, time: '미정' }
          ],
          reqs: ["곧 공개"],
          coords: "X:753 Y:568"
        },
        {
          tag: "ONE",
          name: "The One",
          motto: "함께 승리를 만들어갑니다.",
          desc: "[ONE]은 차분하고 조직적이며 팀워크에 집중합니다. 모든 멤버가 함께 성장하고 배우며 승리합니다.",
          schedule: [
            { label: EVENTS_KOR.bearHunt, time: '02:00 • 13:00 • 18:30' },
            { label: EVENTS_KOR.foundry, time: '14:00 • 19:00' },
            { label: EVENTS_KOR.canyon, time: '14:00 • 19:00' },
            { label: EVENTS_KOR.crazyJoe, time: '15:00' },
            { label: EVENTS_KOR.mercenaries, time: '15:00' }
          ],
          reqs: ["용광로 레벨: FC4 이상", "매일 접속", "긍정적인 태도"],
          coords: "X:589 Y:461"
        },
        {
          tag: "AFK",
          name: "AFK Legion",
          motto: "곧 공개",
          desc: "세부 정보 준비 중...",
          schedule: [
            { label: EVENTS_KOR.bearHunt, time: '미정' },
            { label: EVENTS_KOR.foundry, time: '미정' },
            { label: EVENTS_KOR.canyon, time: '미정' },
            { label: EVENTS_KOR.crazyJoe, time: '미정' },
            { label: EVENTS_KOR.mercenaries, time: '미정' }
          ],
          reqs: ["곧 공개"],
          coords: "X:755 Y:690"
        },
        {
          tag: "GOD",
          name: "Gods of War",
          motto: "곧 공개",
          desc: "세부 정보 준비 중...",
          schedule: [
            { label: EVENTS_KOR.bearHunt, time: '미정' },
            { label: EVENTS_KOR.foundry, time: '미정' },
            { label: EVENTS_KOR.canyon, time: '미정' },
            { label: EVENTS_KOR.crazyJoe, time: '미정' },
            { label: EVENTS_KOR.mercenaries, time: '미정' }
          ],
          reqs: ["곧 공개"],
          coords: "X:725 Y:550"
        }
      ]
    },
    apply: {
      note: "모든 지원서를 꼼꼼히 검토합니다.",
      kicker: "합류하기",
      title: "이주할 준비가 되셨나요?",
      desc: "안정적이고 승리하는 집을 찾는 활동적인 플레이어라면 환영합니다.",
      button: "이주 절차 시작하기 →"
    },
    footer: { line: "STATE 2528 • 골든 스탠다드", small: "단합. 전략. 승리." }
  },
  [Lang.CHI]: {
    nav: { about: "国家", nap: "NAP", reasons: "优势", alliances: "联盟", apply: "申请" },
    hero: { title: "STATE 2528", subtitle: "黄金标准", slogan: "团结的国家，胜利的社区。" },
    events: EVENTS_CHI,
    about: {
      status: { active: "状态：活跃", nap: "NAP：稳定", coord: "协作：极高" },
      kicker: "关于 2528",
      title: "不仅仅是一个州",
      shortIntro: "2528州是一个稳定、多国籍的州，拥有活跃的NAP6协议和强大的联盟间协调能力。我们专注于战略、团结和尊重的游戏方式，以在所有全球活动中取得成功。\n\n我们的方法强调共同准备、明确角色以及全州范围内的一致执行。",
      shortApproach: "我们重视公平竞争和明智的策略。没有戏剧性冲突，只有高质量的游戏体验。"
    },
    nap: {
      kicker: "规则",
      title: "安全发育与公平竞争",
      desc: "我们在州内通过明智的策略保持和平。NAP意味着不将资源浪费在内斗上——只为了稳步增长并在每场活动中表现更强。",
      rulesTitle: "NAP 规则",
      napAlliancesTitle: "NAP 联盟",
      rules: ["NAP联盟之间禁止攻击城市或侦察。", "城堡和要塞按明确公布的时间表轮换。", "如有问题，由领导层处理——禁止公开争吵。", "对恶意言行、破坏或骚扰零容忍。"],
      rotationTitle: "城堡与要塞轮换",
      rotationDesc: "太阳城城堡按明确的时间表轮换——公平使用，平稳的领导权交接，以及州的长期稳定。",
      fortsDesc: "要塞和据点的轮换是公平的，基于贡献，并与SvS备战阶段保持一致。"
    },
    reasons: {
      kicker: "为什么移民？",
      title: "你的新家在等你",
      items: [
        { title: "国际化与包容性", desc: "全球玩家的融合，尊重的氛围——无论你在哪个时区，都能融入。" },
        { title: "经验丰富的领导层", desc: "保持冷静、有序和高效的领导者——尤其是在SvS期间。" },
        { title: "州 Discord 频道", desc: "用于公告、规划和联盟间协调的官方州 Discord 频道。" },
        { title: "结构化的州管理", desc: "明确的规则，统一的决策，以及切实有效的全州合作。" },
        { title: "以SvS为导向", desc: "我们具有SvS思维：准备、纪律和团队合作以获得持续的成果。" },
        { title: "无戏剧性与成熟的社区", desc: "无戏剧性政策。冷静、成熟的玩家，专注于目标而非争论。" },
      ]
    },
    alliances: {
      kicker: "顶级联盟",
      title: "找到你的联盟",
      subtitle: "不同的风格，同一个目标——有组织、协调一致，行动如一。",
      reqTitle: "招募要求",
      scheduleTitle: "关键活动 (UTC)",
      coordsTitle: "位置",
      cards: [
        {
          tag: "KOR",
          name: "Korean Dynasty",
          motto: "即将公布",
          desc: "详情即将公布...",
          schedule: [
            { label: EVENTS_CHI.bearHunt, time: '待定' },
            { label: EVENTS_CHI.foundry, time: '待定' },
            { label: EVENTS_CHI.canyon, time: '待定' },
            { label: EVENTS_CHI.crazyJoe, time: '待定' },
            { label: EVENTS_CHI.mercenaries, time: '待定' }
          ],
          reqs: ["即将公布"],
          coords: "X:753 Y:568"
        },
        {
          tag: "ONE",
          name: "The One",
          motto: "共同铸就胜利。",
          desc: "[ONE] 冷静、有序，专注于团队合作，确保每一位成员共同成长、学习并赢得胜利。",
          schedule: [
            { label: EVENTS_CHI.bearHunt, time: '02:00 • 13:00 • 18:30' },
            { label: EVENTS_CHI.foundry, time: '14:00 • 19:00' },
            { label: EVENTS_CHI.canyon, time: '14:00 • 19:00' },
            { label: EVENTS_CHI.crazyJoe, time: '15:00' },
            { label: EVENTS_CHI.mercenaries, time: '15:00' }
          ],
          reqs: ["火炉等级：FC4+", "每日活跃", "积极态度"],
          coords: "X:589 Y:461"
        },
        {
          tag: "AFK",
          name: "AFK Legion",
          motto: "即将公布",
          desc: "详情即将公布...",
          schedule: [
            { label: EVENTS_CHI.bearHunt, time: '待定' },
            { label: EVENTS_CHI.foundry, time: '待定' },
            { label: EVENTS_CHI.canyon, time: '待定' },
            { label: EVENTS_CHI.crazyJoe, time: '待定' },
            { label: EVENTS_CHI.mercenaries, time: '待定' }
          ],
          reqs: ["即将公布"],
          coords: "X:755 Y:690"
        },
        {
          tag: "GOD",
          name: "Gods of War",
          motto: "即将公布",
          desc: "详情即将公布...",
          schedule: [
            { label: EVENTS_CHI.bearHunt, time: '待定' },
            { label: EVENTS_CHI.foundry, time: '待定' },
            { label: EVENTS_CHI.canyon, time: '待定' },
            { label: EVENTS_CHI.crazyJoe, time: '待定' },
            { label: EVENTS_CHI.mercenaries, time: '待定' }
          ],
          reqs: ["即将公布"],
          coords: "X:725 Y:550"
        }
      ]
    },
    apply: {
      note: "我们会认真审核每一份申请。",
      kicker: "加入我们",
      title: "准备好行动了吗？",
      desc: "如果你是一名正在寻找稳定、胜利之家的活跃玩家，我们热烈欢迎。",
      button: "开始移民流程 →"
    },
    footer: { line: "STATE 2528 • 黄金标准", small: "团结。策略。胜利。" }
  },
  [Lang.DEU]: {
    nav: { about: "Staat", nap: "NAP", reasons: "Warum wir", alliances: "Allianzen", apply: "Bewerben" },
    hero: { title: "STATE 2528", subtitle: "Der Goldstandard", slogan: "Ein Staat. Eine Community. Ein Sieg." },
    events: EVENTS_DEU,
    about: {
      status: { active: "STATUS: AKTIV", nap: "NAP: STABIL", coord: "KOORDINATION: HOCH" },
      kicker: "Über 2528",
      title: "Mehr als nur ein Staat",
      shortIntro: "Staat 2528 ist ein stabiler, multinationaler Staat mit einem aktiven NAP6 und starker Koordination zwischen den Allianzen. Wir konzentrieren uns auf Strategie, Einheit und respektvolles Spiel, um bei allen globalen Events erfolgreich zu sein.\n\nUnser Ansatz betont gemeinsame Vorbereitung, klare Rollen und konsequente Ausführung im gesamten Staat.",
      shortApproach: "Wir schätzen Fairplay und kluge Strategien. Kein Drama, nur gutes Gameplay."
    },
    nap: {
      kicker: "Unsere Regeln",
      title: "Sicheres Wachstum & Fairplay",
      desc: "Wir spielen klug und halten den Frieden im Staat. NAP bedeutet keine verschwendeten Ressourcen durch interne Kämpfe – nur stetiges Wachstum und stärkere Leistungen in jedem Event.",
      rulesTitle: "NAP Regeln",
      napAlliancesTitle: "NAP-Allianzen",
      rules: ["Keine Angriffe auf Städte oder Spionage zwischen NAP-Allianzen.", "Burg und Festungen rotieren nach einem klaren Zeitplan.", "Probleme werden von der Führung gelöst – keine öffentlichen Streits.", "Null Toleranz für Toxizität, Sabotage oder Belästigung."],
      rotationTitle: "Burg- & Festungsrotation",
      rotationDesc: "Die Sonnenfeuer-Burg rotiert nach einem klaren Zeitplan – fairer Zugang, reibungslose Führungswechsel und langfristige Stabilität für den Staat.",
      fortsDesc: "Festungs- und Stützpunktrotationen sind fair und beitragsorientiert, abgestimmt auf die SvS-Vorbereitungsphase."
    },
    reasons: {
      kicker: "Warum wechseln?",
      title: "Dein neues Zuhause",
      items: [
        { title: "International & Inklusiv", desc: "Ein globaler Mix aus Spielern, eine respektvolle Atmosphäre – egal welche Zeitzone, du passt rein." },
        { title: "Erfahrene Führung", desc: "Anführer, die alles ruhig, organisiert und effektiv halten – besonders während des SvS." },
        { title: "Staat Discord Kanal", desc: "Offizieller Staat-Discord für Ankündigungen, Planung und Koordination zwischen den Allianzen." },
        { title: "Strukturiertes Staatsmanagement", desc: "Klare Regeln, abgestimmte Entscheidungen und staatsweite Zusammenarbeit, die wirklich funktioniert." },
        { title: "SvS-Orientierter Staat", desc: "Wir sind SvS-orientiert: Vorbereitung, Disziplin und Teamarbeit für konstante Ergebnisse." },
        { title: "Drama-Freie & Reife Community", desc: "Kein-Drama-Politik. Ruhige, reife Spieler, die sich auf Ziele konzentrieren – nicht auf Streits." },
      ]
    },
    alliances: {
      kicker: "Top Allianzen",
      title: "Finde deine Allianz",
      subtitle: "Unterschiedliche Spielstile, ein Ziel – organisiert, koordiniert und als Einheit.",
      reqTitle: "Wir suchen",
      scheduleTitle: "Events (UTC)",
      coordsTitle: "Standort",
      cards: [
        {
          tag: "KOR",
          name: "Korean Dynasty",
          motto: "Demnächst",
          desc: "Details folgen in Kürze...",
          schedule: [
            { label: EVENTS_DEU.bearHunt, time: 'TBA' },
            { label: EVENTS_DEU.foundry, time: 'TBA' },
            { label: EVENTS_DEU.canyon, time: 'TBA' },
            { label: EVENTS_DEU.crazyJoe, time: 'TBA' },
            { label: EVENTS_DEU.mercenaries, time: 'TBA' }
          ],
          reqs: ["Demnächst"],
          coords: "X:753 Y:568"
        },
        {
          tag: "ONE",
          name: "The One",
          motto: "Gemeinsam zum Sieg.",
          desc: "[ONE] ist ruhig, organisiert und auf Teamarbeit fokussiert. Wir wachsen, lernen und gewinnen zusammen.",
          schedule: [
            { label: EVENTS_DEU.bearHunt, time: '02:00 • 13:00 • 18:30' },
            { label: EVENTS_DEU.foundry, time: '14:00 • 19:00' },
            { label: EVENTS_DEU.canyon, time: '14:00 • 19:00' },
            { label: EVENTS_DEU.crazyJoe, time: '15:00' },
            { label: EVENTS_DEU.mercenaries, time: '15:00' }
          ],
          reqs: ["Ofenlevel: FC4+", "Täglich aktiv", "Positive Haltung"],
          coords: "X:589 Y:461"
        },
        {
          tag: "AFK",
          name: "AFK Legion",
          motto: "Demnächst",
          desc: "Details folgen in Kürze...",
          schedule: [
            { label: EVENTS_DEU.bearHunt, time: 'TBA' },
            { label: EVENTS_DEU.foundry, time: 'TBA' },
            { label: EVENTS_DEU.canyon, time: 'TBA' },
            { label: EVENTS_DEU.crazyJoe, time: 'TBA' },
            { label: EVENTS_DEU.mercenaries, time: 'TBA' }
          ],
          reqs: ["Demnächst"],
          coords: "X:755 Y:690"
        },
        {
          tag: "GOD",
          name: "Gods of War",
          motto: "Demnächst",
          desc: "Details folgen in Kürze...",
          schedule: [
            { label: EVENTS_DEU.bearHunt, time: 'TBA' },
            { label: EVENTS_DEU.foundry, time: 'TBA' },
            { label: EVENTS_DEU.canyon, time: 'TBA' },
            { label: EVENTS_DEU.crazyJoe, time: 'TBA' },
            { label: EVENTS_DEU.mercenaries, time: 'TBA' }
          ],
          reqs: ["Demnächst"],
          coords: "X:725 Y:550"
        }
      ]
    },
    apply: {
      note: "Wir prüfen jede Bewerbung persönlich.",
      kicker: "Beitreten",
      title: "Bereit für den Wechsel?",
      desc: "Wenn du ein aktiver Spieler bist, der ein stabiles, erfolgreiches Zuhause sucht, bist du willkommen.",
      button: "Transfer starten →"
    },
    footer: { line: "STATE 2528 • Der Goldstandard", small: "Einheit. Strategie. Sieg." }
  }
};
