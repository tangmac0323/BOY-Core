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
            <ColoredText color="purple" text={`[不死状态]`} />, 在后续
            <ColoredText text={`3`} />
            秒内受到任意伤害都不会死亡
          </li>
        );
        break;
      case 6:
        descriptions.push(
          <li>
            前锋阵线的黑卫在受到致命伤害时,会触发
            <ColoredText color="purple" text={`[不死状态]`} />, 在后续
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
            <ColoredText color="purple" text={`[不死状态]`} />, 在后续
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

const hunter_effect_description_handler = (level) => {
  // 狩魔阵线的强度达到2/3/4时,狩魔阵线的黑卫暴击几率增加5%/7%/10%
  // 狩魔阵线的强度达到5/6/7时, 所有黑卫暴击伤害增加50%/75%/100%
  // 狩魔阵线的强度达到8/9时, 所有黑卫的攻击速度提升15%/40%。
  // 狩魔阵线的强度达到10/11时, 所有黑卫生命值增加5%/10%, 获得10%/30%技能回避. 成功技能回避后, 伤害提升10%/25%, 持续5秒
  const descriptions = [];
  //   ---------------------- Low lvl ----------------------
  if (level >= 2) {
    switch (level) {
      case 2:
        descriptions.push(
          <li>
            狩魔阵线的黑卫暴击几率增加
            <ColoredText text={`5%`} />
          </li>
        );
        break;
      case 3:
        descriptions.push(
          <li>
            狩魔阵线的黑卫暴击几率增加
            <ColoredText text={`7%`} />
          </li>
        );
        break;
      default:
        // for level >= 4
        descriptions.push(
          <li>
            狩魔阵线的黑卫暴击几率增加
            <ColoredText text={`10%`} />
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
            所有黑卫暴击伤害增加
            <ColoredText text={`50%`} />
          </li>
        );
        break;
      case 6:
        descriptions.push(
          <li>
            所有黑卫暴击伤害增加
            <ColoredText text={`75%`} />
          </li>
        );
        break;
      default:
        // for level >= 7
        descriptions.push(
          <li>
            所有黑卫暴击伤害增加
            <ColoredText text={`100%`} />
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
            所有黑卫的攻击速度提升
            <ColoredText text={`15%`} />
          </li>
        );
        break;
      default:
        descriptions.push(
          <li>
            所有黑卫的攻击速度提升
            <ColoredText text={`40%`} />
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
            <ColoredText text={`5%`} />, 获得
            <ColoredText text={`5%`} />
            技能回避. 成功技能回避后, 伤害提升
            <ColoredText text={`5%`} />, 持续5秒
          </li>
        );
        break;
      default:
        descriptions.push(
          <li>
            所有黑卫生命值增加
            <ColoredText text={`10%`} />, 获得
            <ColoredText text={`30%`} />
            技能回避. 成功技能回避后, 伤害提升
            <ColoredText text={`25%`} />, 持续5秒
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

const mage_effect_description_handler = (level) => {
  // 秘术阵线的强度达到2/3/4时, 秘术型黑卫在释放大招后, 会立即回复100/125/150怒气
  // 秘术阵线的强度达到5/6/7时, 所有秘术型黑卫增加8%/10%/15%法术强度
  // 秘术阵线的强度达到8/9时, 所有黑卫初始怒气值增加50/200
  // 秘术阵线的强度达到10/11时, 所有黑卫增加100/200怒气上限
  const descriptions = [];
  //   ---------------------- Low lvl ----------------------
  if (level >= 2) {
    switch (level) {
      case 2:
        descriptions.push(
          <li>
            秘术型黑卫在释放大招后, 会立即回复
            <ColoredText text={`100`} />
            怒气
          </li>
        );
        break;
      case 3:
        descriptions.push(
          <li>
            秘术型黑卫在释放大招后, 会立即回复
            <ColoredText text={`125`} />
            怒气
          </li>
        );
        break;
      default:
        // for level >= 4
        descriptions.push(
          <li>
            秘术型黑卫在释放大招后, 会立即回复
            <ColoredText text={`150`} />
            怒气
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
            所有秘术型黑卫增加
            <ColoredText text={`8%`} />
            法术强度
          </li>
        );
        break;
      case 6:
        descriptions.push(
          <li>
            所有秘术型黑卫增加
            <ColoredText text={`10%`} />
            法术强度
          </li>
        );
        break;
      default:
        // for level >= 7
        descriptions.push(
          <li>
            所有秘术型黑卫增加
            <ColoredText text={`15%`} />
            法术强度
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
            所有黑卫初始怒气值增加
            <ColoredText text={`50`} />
          </li>
        );
        break;
      default:
        descriptions.push(
          <li>
            所有黑卫初始怒气值增加
            <ColoredText text={`200`} />
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
            所有黑卫增加
            <ColoredText text={`100`} />
            怒气上限
          </li>
        );
        break;
      default:
        descriptions.push(
          <li>
            所有黑卫增加
            <ColoredText text={`200`} />
            怒气上限
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

const guardian_effect_description_handler = (level) => {
  // 守护阵线的强度达到2/3/4时, 所有黑卫增加3%/6%/10%生命值和护盾值
  // 守护阵线的强度达到5/6/7时, 所有黑卫增加6%/12%/18%体质
  // 守护阵线的强度达到8/9时, 队伍中其他黑卫受到的单次伤害超过自身最大生命值30%时, 由队伍中生命最高的守护黑卫对其添加守护黑卫10%/20%最大生命值的魔法盾, 持续6秒. 该效果有10秒的触发间隔
  // 守护阵线的强度到达10/11时, 由队伍中生命最高的守护黑卫召唤1只中级/高级护卫(诡面刺客/静谧猎手)助战,持续30秒. 护卫拥有召唤者25%/40%生命值和60%攻击力以及强度
  const descriptions = [];
  //   ---------------------- Low lvl ----------------------
  if (level >= 2) {
    switch (level) {
      case 2:
        descriptions.push(
          <li>
            所有黑卫增加
            <ColoredText text={`3%`} />
            生命值和护盾值
          </li>
        );
        break;
      case 3:
        descriptions.push(
          <li>
            所有黑卫增加
            <ColoredText text={`6%`} />
            生命值和护盾值
          </li>
        );
        break;
      default:
        // for level >= 4
        descriptions.push(
          <li>
            所有黑卫增加
            <ColoredText text={`10%`} />
            生命值和护盾值
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
            所有黑卫增加
            <ColoredText text={`6%`} />
            体质
          </li>
        );
        break;
      case 6:
        descriptions.push(
          <li>
            所有黑卫增加
            <ColoredText text={`12%`} />
            体质
          </li>
        );
        break;
      default:
        // for level >= 7
        descriptions.push(
          <li>
            所有黑卫增加
            <ColoredText text={`18%`} />
            体质
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
            队伍中其他黑卫受到的单次伤害超过自身最大生命值30%时,
            由队伍中生命最高的守护黑卫对其添加守护黑卫
            <ColoredText text={`10%`} />
            最大生命值的魔法盾, 持续6秒. 该效果有10秒的触发间隔
          </li>
        );
        break;
      default:
        descriptions.push(
          <li>
            队伍中其他黑卫受到的单次伤害超过自身最大生命值30%时,
            由队伍中生命最高的守护黑卫对其添加守护黑卫
            <ColoredText text={`20%`} />
            最大生命值的魔法盾, 持续6秒. 该效果有10秒的触发间隔
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
            由队伍中生命最高的守护黑卫召唤1只中级/高级护卫(诡面刺客/静谧猎手)助战,持续30秒.
            护卫拥有召唤者
            <ColoredText text={`25%`} />
            生命值和60%攻击力以及强度
          </li>
        );
        break;
      default:
        descriptions.push(
          <li>
            由队伍中生命最高的守护黑卫召唤1只中级/高级护卫(诡面刺客/静谧猎手)助战,持续30秒.
            护卫拥有召唤者
            <ColoredText text={`40%`} />
            生命值和60%攻击力以及强度
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

const assassin_effect_description_handler = (level) => {
  // 刺杀阵线的强度达到2/3/4时, 刺杀型黑卫增加25%/35%/50%闪避
  // 刺杀阵线的强度达到5/6/7时, 所有刺杀型黑卫增加15%/30%/50%回避
  // 刺杀阵线的强度达到8/9时, 所有黑卫技能暴击率增加4%/8%. 刺杀型黑卫终结普通单位获得的怒气提升25%/50%, 终结英雄单位获得对方50%/75%的怒气
  // 刺杀阵线的强度达到10/11时, 所有黑卫生命值增加5%/10%. 刺杀型黑卫造成普通伤害后, 目标治疗量下降35%/70%, 持续3秒
  const descriptions = [];
  //   ---------------------- Low lvl ----------------------
  if (level >= 2) {
    switch (level) {
      case 2:
        descriptions.push(
          <li>
            刺杀型黑卫增加
            <ColoredText text={`25%`} />
            闪避
          </li>
        );
        break;
      case 3:
        descriptions.push(
          <li>
            刺杀型黑卫增加
            <ColoredText text={`35%`} />
            闪避
          </li>
        );
        break;
      default:
        // for level >= 4
        descriptions.push(
          <li>
            刺杀型黑卫增加
            <ColoredText text={`50%`} />
            闪避
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
            所有刺杀型黑卫增加
            <ColoredText text={`15%`} />
            回避
          </li>
        );
        break;
      case 6:
        descriptions.push(
          <li>
            所有刺杀型黑卫增加
            <ColoredText text={`30%`} />
            回避
          </li>
        );
        break;
      default:
        // for level >= 7
        descriptions.push(
          <li>
            所有刺杀型黑卫增加
            <ColoredText text={`50%`} />
            回避
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
            所有黑卫技能暴击率增加
            <ColoredText text={`4%`} />. 刺杀型黑卫终结普通单位获得的怒气提升
            <ColoredText text={`25%`} />, 终结英雄单位获得对方
            <ColoredText text={`50%`} />
            的怒气
          </li>
        );
        break;
      default:
        descriptions.push(
          <li>
            所有黑卫技能暴击率增加
            <ColoredText text={`8%`} />. 刺杀型黑卫终结普通单位获得的怒气提升
            <ColoredText text={`50%`} />, 终结英雄单位获得对方
            <ColoredText text={`75%`} />
            的怒气
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
            <ColoredText text={`5%`} />. 刺杀型黑卫造成普通伤害后,
            目标治疗量下降
            <ColoredText text={`35%`} />, 持续3秒
          </li>
        );
        break;
      default:
        descriptions.push(
          <li>
            所有黑卫生命值增加
            <ColoredText text={`10%`} />. 刺杀型黑卫造成普通伤害后,
            目标治疗量下降
            <ColoredText text={`70%`} />, 持续3秒
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
  MIN_EFFECT_LVL: 'MIN_EFFECT_LVL',
  NAME: 'NAME',
  CATEGORY: 'CATEGORY',
  EFFECTS: 'EFFECTS',
  EFFECTS_DESCRIPTION_HANDLER: 'EFFECTS_DESCRIPTION_HANDLER',
  DESCRIPTION: 'DESCRIPTION',
};

export const RAW_FORMATION_DATA = {
  组合阵线: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 4,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
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
      let displayValue;

      switch (level) {
        case 2:
          displayValue = '5%';
          break;
        case 3:
          displayValue = '10%';
          break;
        case 4:
          displayValue = '20%';
          break;
        default:
          displayValue = '0%';
      }
      return (
        <span>
          上阵的黑卫的生命值，护盾值以及造成的伤害增加
          <ColoredText text={displayValue} />
        </span>
      );
    },
  },
  前锋: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 11,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
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
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
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
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '狩魔',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'MAJOR',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]: `狩魔阵线的强度达到2/3/4时, 狩魔阵线的黑卫暴击几率增加5%/7%/10%
    狩魔阵线的强度达到5/6/7时, 所有黑卫暴击伤害增加50%/75%/100%
    狩魔阵线的强度达到8/9时, 所有黑卫的攻击速度提升15%/40%。
    狩魔阵线的强度达到10/11时, 所有黑卫生命值增加5%/10%, 获得10%/30%技能回避. 成功技能回避后, 伤害提升10%/25%, 持续5秒`,
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
      hunter_effect_description_handler,
  },
  秘术: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 11,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '秘术',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'MAJOR',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]: `秘术阵线的强度达到2/3/4时, 秘术型黑卫在释放大招后, 会立即回复100/125/150怒气
    秘术阵线的强度达到5/6/7时, 所有秘术型黑卫增加8%/10%/15%法术强度
    秘术阵线的强度达到8/9时, 所有黑卫初始怒气值增加50/200
    秘术阵线的强度达到10/11时, 所有黑卫增加100/200怒气上限`,
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
      mage_effect_description_handler,
  },
  守护: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 11,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '守护',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'MAJOR',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]: `守护阵线的强度达到2/3/4时, 所有黑卫增加3%/6%/10%生命值和护盾值
    守护阵线的强度达到5/6/7时, 所有黑卫增加6%/12%/18%体质
    守护阵线的强度达到8/9时, 队伍中其他黑卫受到的单次伤害超过自身最大生命值30%时, 由队伍中生命最高的守护黑卫对其添加守护黑卫10%/20%最大生命值的魔法盾, 持续6秒. 该效果有10秒的触发间隔
    守护阵线的强度到达10/11时, 由队伍中生命最高的守护黑卫召唤1只中级/高级护卫(诡面刺客/静谧猎手)助战,持续30秒. 护卫拥有召唤者25%/40%生命值和60%攻击力以及强度`,
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
      guardian_effect_description_handler,
  },
  刺杀: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 11,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '刺杀',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'MAJOR',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]: `刺杀阵线的强度达到2/3/4时, 刺杀型黑卫增加25%/35%/50%闪避
    刺杀阵线的强度达到5/6/7时, 所有刺杀型黑卫增加15%/30%/50%回避
    刺杀阵线的强度达到8/9时, 所有黑卫技能暴击率增加4%/8%. 刺杀型黑卫终结普通单位获得的怒气提升25%/50%, 终结英雄单位获得对方50%/75%的怒气
    刺杀阵线的强度达到10/11时, 所有黑卫生命值增加5%/10%. 刺杀型黑卫造成普通伤害后, 目标治疗量下降35%/70%, 持续3秒`,
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
      assassin_effect_description_handler,
  },
  游侠: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 4,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '游侠',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]:
      '游侠阵线的强度达到2/3/4时, 所有上阵的游侠型黑卫攻击速度提升10%/15%/30%, 其它上阵黑卫攻击速度提升5%/10%/20%',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      let displayValueA;
      let displayValueB;

      switch (level) {
        case 2:
          displayValueA = '10%';
          displayValueB = '5%';
          break;
        case 3:
          displayValueA = '15%';
          displayValueB = '10%';
          break;
        case 4:
          displayValueA = '30%';
          displayValueB = '20%';
          break;
        default:
          displayValueA = '0%';
          displayValueB = '0%';
      }
      return (
        <span>
          所有上阵的游侠型黑卫攻击速度提升
          <ColoredText text={displayValueA} />
          ,其它上阵黑卫攻击速度提升
          <ColoredText text={displayValueB} />
        </span>
      );
    },
  },
  诡影: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 4,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '诡影',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]:
      '诡影阵线的强度达到2/3/4时, 所有上阵黑卫回避增加10%/20%/30%, 回避后攻击速度提升0%/0%/30%, 持续6秒',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      let displayValueA;
      let displayValueB;

      switch (level) {
        case 2:
          displayValueA = '10%';
          displayValueB = '0%';
          break;
        case 3:
          displayValueA = '20%';
          displayValueB = '0%';
          break;
        case 4:
          displayValueA = '30%';
          displayValueB = '30%';
          break;
        default:
          displayValueA = '0%';
          displayValueB = '0%';
      }
      return (
        <span>
          所有上阵黑卫回避增加
          <ColoredText text={displayValueA} />, 回避后攻击速度提升
          <ColoredText text={displayValueB} />, 持续6秒
        </span>
      );
    },
  },
  强袭: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 6,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '强袭',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]:
      '强袭阵线的强度达到2/3/4/5/6时, 所有上阵黑卫忽视目标4%/6%/8%/10%/10%的全伤害减免, 前锋型黑卫的[不死状态]持续时间增加0/0/0/0/2秒',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
      5: 'LVL-5 EFFECT',
      6: 'LVL-5 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      let displayValueA;
      let displayValueB;

      switch (level) {
        case 2:
          displayValueA = '4%';
          displayValueB = '0';
          break;
        case 3:
          displayValueA = '6%';
          displayValueB = '0';
          break;
        case 4:
          displayValueA = '8%';
          displayValueB = '0';
          break;
        case 5:
          displayValueA = '10%';
          displayValueB = '0';
          break;
        case 6:
          displayValueA = '10%';
          displayValueB = '0';
          break;
        default:
          displayValueA = '0%';
          displayValueB = '0';
      }
      return (
        <span>
          所有上阵黑卫忽视目标
          <ColoredText text={displayValueA} />
          的全伤害减免, 前锋型黑卫的
          <ColoredText color="purple" text={`[不死状态]`} />
          持续时间增加
          <ColoredText text={displayValueB} />秒
        </span>
      );
    },
  },
  智慧: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 4,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '智慧',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]:
      '智慧阵线的强度达到2/3/4时, 上阵黑卫的怒气上限增加50/80/200. 每个在场的智慧英雄提升全队0%/0%/3%英雄独立增伤',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      let displayValueA;
      let displayValueB;

      switch (level) {
        case 2:
          displayValueA = '50';
          displayValueB = '0%';
          break;
        case 3:
          displayValueA = '80';
          displayValueB = '0%';
          break;
        case 4:
          displayValueA = '200';
          displayValueB = '3%';
          break;
        default:
          displayValueA = '0';
          displayValueB = '0%';
      }
      return (
        <span>
          上阵黑卫的怒气上限增加
          <ColoredText text={displayValueA} />. 每个在场的智慧英雄提升全队
          <ColoredText text={displayValueB} />
          英雄独立增伤
        </span>
      );
    },
  },
  敌法: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 4,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '敌法',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]:
      '敌法阵线的强度达到2/3/4时, 上阵黑卫受到的技能暴击几率降低4%/8%/15%. 敌法阵线黑卫受到暴击时, 恢复0/0/50点怒气, 该效果有1秒的触发间隔',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      let displayValueA;
      let displayValueB;

      switch (level) {
        case 2:
          displayValueA = '4%';
          displayValueB = '0';
          break;
        case 3:
          displayValueA = '8%';
          displayValueB = '0';
          break;
        case 4:
          displayValueA = '15%';
          displayValueB = '50';
          break;
        default:
          displayValueA = '0%';
          displayValueB = '0';
      }
      return (
        <span>
          上阵黑卫受到的技能暴击几率降低
          <ColoredText text={displayValueA} />. 敌法阵线黑卫受到暴击时, 恢复
          <ColoredText text={displayValueB} />
          点怒气, 该效果有1秒的触发间隔
        </span>
      );
    },
  },
  //   TODO: FINISH THIS
  魔导: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 6,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '魔导',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]: '',
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
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '噬魂',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]: '',
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
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '医者',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]: '',
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
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '召唤',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]: '',
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
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '通灵',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]: '',
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
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '坚韧',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]: '',
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
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '妖精',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]: '',
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
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 1,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '统帅',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]: '',
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
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '盾御',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]: '',
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
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '超导',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]: '',
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
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '力场',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]: '',
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
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '流星',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]: '',
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
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '暴怒',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]: '',
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
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '风涌',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]: '',
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
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '回能',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]: '',
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
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '聚变',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]: '',
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
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '回馈',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]: '',
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
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '灭法',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]: '',
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
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '咒蚀',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]: '',
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
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '雷暴',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]: '',
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
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '共鸣',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]: '',
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
