import { ColoredText } from '@src/formation_helper/Utils';

const vanguard_effects_description_handler = (level) => {
  const descriptions = [];
  //   ---------------------- Low lvl ----------------------
  if (level >= 2) {
    switch (level) {
      case 2:
        descriptions.push(
          <li>
            队伍中的前锋型黑卫有
            <ColoredText text={`5%`} />
            的几率完全抵挡该次受到的伤害
          </li>
        );
        break;
      case 3:
        descriptions.push(
          <li>
            队伍中的前锋型黑卫有
            <ColoredText text={`8%`} />
            的几率完全抵挡该次受到的伤害
          </li>
        );
        break;
      default:
        // for level >= 4
        descriptions.push(
          <li>
            队伍中的前锋型黑卫有
            <ColoredText text={`10%`} />
            的几率完全抵挡该次受到的伤害
          </li>
        );
        break;
    }
  }

  //   ------------------ Mid lvl ----------------------
  if (level >= 5) {
    switch (level) {
      case 5:
        descriptions.push(
          <li>
            前锋阵线的黑卫在受到致命伤害时,会触发
            <ColoredText color="purple" text={`不死状态`} />, 在后续
            <ColoredText text={`3`} />
            秒内受到任意伤害都不会死亡
          </li>
        );
        break;
      case 6:
        descriptions.push(
          <li>
            前锋阵线的黑卫在受到致命伤害时,会触发
            <ColoredText color="purple" text={`不死状态`} />, 在后续
            <ColoredText text={`4`} />
            秒内受到任意伤害都不会死亡
          </li>
        );
        break;
      default:
        // for level >= 7
        descriptions.push(
          <li>
            前锋阵线的黑卫在受到致命伤害时,会触发
            <ColoredText color="purple" text={`不死状态`} />, 在后续
            <ColoredText text={`5`} />
            秒内受到任意伤害都不会死亡
          </li>
        );
        break;
    }
  }

  // ------------------- High lvl ----------------------
  if (level >= 8) {
    switch (level) {
      case 5:
        descriptions.push(
          <li>
            所有黑卫增加
            <ColoredText text={`8%`} />
            吸血
          </li>
        );
        break;
      default:
        descriptions.push(
          <li>
            所有黑卫增加
            <ColoredText text={`15%`} />
            吸血
          </li>
        );
        break;
    }
  }
  // ------------------- Ultra lvl --------------------
  if (level >= 10) {
    switch (level) {
      case 10:
        descriptions.push(
          <li>
            所有黑卫生命值增加
            <ColoredText text={`5%`} />
            . 每有一个激活的阵线效果, 前锋型黑卫获得额外
            <ColoredText text={`1%`} />
            伤害
          </li>
        );
        break;
      default:
        descriptions.push(
          <li>
            所有黑卫生命值增加
            <ColoredText text={`10%`} />
            . 每有一个激活的阵线效果, 前锋型黑卫获得额外
            <ColoredText text={`3%`} />
            伤害
          </li>
        );
        break;
    }
  }
  return (
    <ul>
      {descriptions.map((description, index) => (
        <span key={index}>{description}</span>
      ))}
    </ul>
  );
};

const support_effect_description_handler = (level) => {
  // 辅助阵线的强度达到2/3/4时, 溢出的治疗量的50%/75%/100%会转换为护盾值
  // 辅助阵线的强度达到5/6/7时, 所有黑卫每5秒回复3%/4%/5%生命值
  // 辅助阵线的强度达到8/9时, 黑卫阵亡时有30%/65%几率触发复活,回复30%生命值
  // 辅助阵线的强度达到10/11时,所有黑卫的生命值增加5%/10%,所有暴击抗性增加5%/15%
  const descriptions = [];
  //   ---------------------- Low lvl ----------------------
  if (level >= 2) {
    switch (level) {
      case 2:
        descriptions.push(
          <li>
            溢出的治疗量的
            <ColoredText text={`50%`} />
            会转换为护盾值
          </li>
        );
        break;
      case 3:
        descriptions.push(
          <li>
            溢出的治疗量的
            <ColoredText text={`75%`} />
            会转换为护盾值
          </li>
        );
        break;
      default:
        // for level >= 4
        descriptions.push(
          <li>
            溢出的治疗量的
            <ColoredText text={`100%`} />
            会转换为护盾值
          </li>
        );
        break;
    }
  }

  //   ------------------ Mid lvl ----------------------
  if (level >= 5) {
    switch (level) {
      case 5:
        descriptions.push(
          <li>
            所有黑卫每5秒回复
            <ColoredText text={`3%`} />
            生命值
          </li>
        );
        break;
      case 6:
        descriptions.push(
          <li>
            所有黑卫每5秒回复
            <ColoredText text={`4%`} />
            生命值
          </li>
        );
        break;
      default:
        // for level >= 7
        descriptions.push(
          <li>
            所有黑卫每5秒回复
            <ColoredText text={`5%`} />
            生命值
          </li>
        );
        break;
    }
  }

  // ------------------- High lvl ----------------------
  if (level >= 8) {
    switch (level) {
      case 5:
        descriptions.push(
          <li>
            黑卫阵亡时有
            <ColoredText text={`30%`} />
            几率触发复活,回复30%生命值
          </li>
        );
        break;
      default:
        descriptions.push(
          <li>
            黑卫阵亡时有
            <ColoredText text={`65%`} />
            几率触发复活,回复30%生命值
          </li>
        );
        break;
    }
  }
  // ------------------- Ultra lvl --------------------
  if (level >= 10) {
    switch (level) {
      case 10:
        descriptions.push(
          <li>
            所有黑卫的生命值增加
            <ColoredText text={`5%`} />
            ,所有暴击抗性增加
            <ColoredText text={`5%`} />
          </li>
        );
        break;
      default:
        descriptions.push(
          <li>
            所有黑卫的生命值增加
            <ColoredText text={`10%`} />
            ,所有暴击抗性增加
            <ColoredText text={`15%`} />
          </li>
        );
        break;
    }
  }
  return (
    <ul>
      {descriptions.map((description, index) => (
        <span key={index}>{description}</span>
      ))}
    </ul>
  );
};

export const RAW_FORMATION_CONFIG_KEYS = {
  MAX_LVL: 'MAX_LVL',
  NAME: 'NAME',
  CATEGORY: 'CATEGORY',
  EFFECTS: 'EFFECTS',
  EFFECTS_DESCRIPTION_HANDLER: 'EFFECTS_DESCRIPTION_HANDLER',
  DESCRIPTION: 'DESCRIPTION',
};

export const RAW_FORMATION_DATA = {
  组合阵线: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 4,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '组合阵线',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]:
      '上阵的不同阵线的黑卫数量达到2种及以上时,增加生命值和护盾值*5%*lvl,造成伤害增加*5%*lvl',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return (
        <span>
          上阵的黑卫的生命值，护盾值以及造成的伤害增加
          <ColoredText text={`${level * 5}%`} />
        </span>
      );
    },
  },
  前锋: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 11,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '前锋',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'MAJOR',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]: `前锋阵线的强度达到2/3/4时, 队伍中的前锋型黑卫有5%/8%/10%的几率完全抵挡该次受到的伤害
    前锋阵线的强度达到5/6/7时, 前锋阵线的黑卫在受到致命伤害时, 会触发[不死状态],在后续3/4/5秒内受到任意伤害都不会死亡
    前锋阵线的强度达到8/9时, 所有黑卫增加8%/15%吸血
    前锋阵线的强度达到10/11时, 所有黑卫生命值增加5%/10%.每有一个激活的阵线效果,前锋型黑卫获得额外1%/3%伤害`,

    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
      5: 'LVL-5 EFFECT',
      6: 'LVL-6 EFFECT',
      7: 'LVL-7 EFFECT',
      8: 'LVL-8 EFFECT',
      9: 'LVL-9 EFFECT',
      10: 'LVL-10 EFFECT',
      11: 'LVL-11 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]:
      vanguard_effects_description_handler,
  },
  辅助: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 11,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '辅助',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'MAJOR',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]: `辅助阵线的强度达到2/3/4时, 溢出的治疗量的50%/75%/100%会转换为护盾值
    辅助阵线的强度达到5/6/7时, 所有黑卫每5秒回复3%/4%/5%生命值
    辅助阵线的强度达到8/9时, 黑卫阵亡时有30%/65%几率触发复活,回复30%生命值
    辅助阵线的强度达到10/11时,所有黑卫的生命值增加5%/10%,所有暴击抗性增加5%/15%`,

    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
      5: 'LVL-5 EFFECT',
      6: 'LVL-6 EFFECT',
      7: 'LVL-7 EFFECT',
      8: 'LVL-8 EFFECT',
      9: 'LVL-9 EFFECT',
      10: 'LVL-10 EFFECT',
      11: 'LVL-11 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]:
      support_effect_description_handler,
  },
  狩魔: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 11,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '狩魔',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'MAJOR',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
      5: 'LVL-5 EFFECT',
      6: 'LVL-6 EFFECT',
      7: 'LVL-7 EFFECT',
      8: 'LVL-8 EFFECT',
      9: 'LVL-9 EFFECT',
      10: 'LVL-10 EFFECT',
      11: 'LVL-11 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return <span>HI</span>;
    },
  },
  秘术: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 11,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '秘术',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'MAJOR',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
      5: 'LVL-5 EFFECT',
      6: 'LVL-6 EFFECT',
      7: 'LVL-7 EFFECT',
      8: 'LVL-8 EFFECT',
      9: 'LVL-9 EFFECT',
      10: 'LVL-10 EFFECT',
      11: 'LVL-11 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return <span>HI</span>;
    },
  },
  守护: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 11,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '守护',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'MAJOR',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
      5: 'LVL-5 EFFECT',
      6: 'LVL-6 EFFECT',
      7: 'LVL-7 EFFECT',
      8: 'LVL-8 EFFECT',
      9: 'LVL-9 EFFECT',
      10: 'LVL-10 EFFECT',
      11: 'LVL-11 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return <span>HI</span>;
    },
  },
  刺杀: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 11,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '刺杀',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'MAJOR',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
      5: 'LVL-5 EFFECT',
      6: 'LVL-6 EFFECT',
      7: 'LVL-7 EFFECT',
      8: 'LVL-8 EFFECT',
      9: 'LVL-9 EFFECT',
      10: 'LVL-10 EFFECT',
      11: 'LVL-11 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return <span>HI</span>;
    },
  },
  游侠: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 4,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '游侠',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return <span>HI</span>;
    },
  },
  诡影: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 4,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '诡影',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return <span>HI</span>;
    },
  },
  强袭: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 6,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '强袭',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
      5: 'LVL-5 EFFECT',
      6: 'LVL-5 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return <span>HI</span>;
    },
  },
  智慧: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 4,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '智慧',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return <span>HI</span>;
    },
  },
  敌法: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 4,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '敌法',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return <span>HI</span>;
    },
  },
  魔导: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 6,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '魔导',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
      5: 'LVL-5 EFFECT',
      6: 'LVL-5 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return <span>HI</span>;
    },
  },
  噬魂: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 4,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '噬魂',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return <span>HI</span>;
    },
  },
  医者: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 6,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '医者',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
      5: 'LVL-5 EFFECT',
      6: 'LVL-5 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return <span>HI</span>;
    },
  },
  召唤: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 6,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '召唤',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
      5: 'LVL-5 EFFECT',
      6: 'LVL-5 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return <span>HI</span>;
    },
  },
  通灵: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 5,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '通灵',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
      5: 'LVL-5 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return <span>HI</span>;
    },
  },
  坚韧: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 5,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '坚韧',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
      5: 'LVL-5 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return <span>HI</span>;
    },
  },
  妖精: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 4,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '妖精',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return <span>HI</span>;
    },
  },
  统帅: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '统帅',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return <span>HI</span>;
    },
  },
  盾御: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 6,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '盾御',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
      5: 'LVL-5 EFFECT',
      6: 'LVL-5 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return <span>HI</span>;
    },
  },
  超导: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 5,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '超导',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
      5: 'LVL-5 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return <span>HI</span>;
    },
  },
  力场: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 4,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '力场',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return <span>HI</span>;
    },
  },
  流星: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 4,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '流星',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return <span>HI</span>;
    },
  },
  暴怒: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 6,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '暴怒',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
      5: 'LVL-5 EFFECT',
      6: 'LVL-5 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return <span>HI</span>;
    },
  },
  风涌: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 4,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '风涌',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return <span>HI</span>;
    },
  },
  回能: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 4,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '回能',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return <span>HI</span>;
    },
  },
  聚变: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 6,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '聚变',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
      5: 'LVL-5 EFFECT',
      6: 'LVL-5 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return <span>HI</span>;
    },
  },
  回馈: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 6,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '回馈',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
      5: 'LVL-5 EFFECT',
      6: 'LVL-5 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return <span>HI</span>;
    },
  },
  灭法: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 4,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '灭法',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return <span>HI</span>;
    },
  },
  咒蚀: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 4,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '咒蚀',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return <span>HI</span>;
    },
  },
  雷暴: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 4,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '雷暴',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return <span>HI</span>;
    },
  },
  共鸣: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 3,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '共鸣',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      return <span>HI</span>;
    },
  },
};
