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
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]:
      '魔导阵线的强度达到2/3/4/5/6时, 队伍中魔导型黑卫血量降低至50%以下时, 对随机1个目标释放妖术, 使其变为羊, 持续1.5/2/3/4/4秒, 冷却时间为14/14/14/14/8秒',
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
          displayValueA = '1.5';
          displayValueB = '14';
          break;
        case 3:
          displayValueA = '2';
          displayValueB = '14';
          break;
        case 4:
          displayValueA = '3';
          displayValueB = '14';
          break;
        case 5:
          displayValueA = '4';
          displayValueB = '14';
          break;
        case 6:
          displayValueA = '4';
          displayValueB = '8';
          break;
        default:
          displayValueA = '0';
          displayValueB = '0';
      }
      return (
        <span>
          队伍中魔导型黑卫血量降低至50%以下时, 对随机1个目标释放妖术,
          使其变为羊, 持续
          <ColoredText text={displayValueA} />
          秒, 冷却时间为
          <ColoredText text={displayValueB} />秒
        </span>
      );
    },
  },
  噬魂: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 4,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '噬魂',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]:
      '噬魂阵线的强度达到2/3/4时, 上阵的噬魂型黑卫在进行普通攻击时, 有15%/35%/75%几率偷取目标25怒气, 每0.5秒起效一次',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      let displayValueA;

      switch (level) {
        case 2:
          displayValueA = '15%';
          break;
        case 3:
          displayValueA = '35%';
          break;
        case 4:
          displayValueA = '75%';
          break;
        default:
          displayValueA = '0%';
      }
      return (
        <span>
          上阵的噬魂型黑卫在进行普通攻击时, 有
          <ColoredText text={displayValueA} />
          几率偷取目标25怒气, 每0.5秒起效一次
        </span>
      );
    },
  },
  医者: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 6,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '医者',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]:
      '医者阵线的强度达到2/3/4/5/6时, 上阵黑卫造成的治疗效果提升15%/25%/35%/50%/50%. 医者英雄阵亡时可复活0/0/0/0/1次, 回复45%生命值',
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
          displayValueA = '15%';
          displayValueB = '0';
          break;
        case 3:
          displayValueA = '25%';
          displayValueB = '0';
          break;
        case 4:
          displayValueA = '35%';
          displayValueB = '0';
          break;
        case 5:
          displayValueA = '50%';
          displayValueB = '0';
          break;
        case 6:
          displayValueA = '50%';
          displayValueB = '1';
          break;
        default:
          displayValueA = '0%';
          displayValueB = '0';
      }
      return (
        <span>
          上阵黑卫造成的治疗效果提升
          <ColoredText text={displayValueA} />. 医者英雄阵亡时可复活
          <ColoredText text={displayValueB} />
          次, 回复45%生命值
        </span>
      );
    },
  },
  召唤: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 6,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '召唤',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]:
      '召唤阵线的强度达到2/3/4/5/6时, 召唤物普通攻击附带0.1%/0.2%/0.3%/0.5%/1%物理和法术强度的混沌伤害. (神之嫡子的蛇灵不享受此效果)',
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

      switch (level) {
        case 2:
          displayValueA = '0.1%';

          break;
        case 3:
          displayValueA = '0.2%';

          break;
        case 4:
          displayValueA = '0.3%';

          break;
        case 5:
          displayValueA = '0.5%';

          break;
        case 6:
          displayValueA = '1%';

          break;
        default:
          displayValueA = '0%';
      }
      return (
        <span>
          召唤物普通攻击附带
          <ColoredText text={displayValueA} />
          物理和法术强度的混沌伤害. {`(`}神之嫡子的蛇灵不享受此效果{`)`}
        </span>
      );
    },
  },
  通灵: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 5,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '通灵',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]:
      '通灵阵线的强度达到2/3/4/5时, 召唤物造成的伤害提升10%/15%/20%/20%, 且会额外召唤0/0/0/1只魔狼作战, 魔狼拥有全队平均生命,强度,暴击,攻速等属性以及50%的伤害减免, 且具有冲锋和嘲讽技能',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
      5: 'LVL-5 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      let displayValueA;
      let displayValueB;

      switch (level) {
        case 2:
          displayValueA = '10%';
          displayValueB = '0';
          break;
        case 3:
          displayValueA = '15%';
          displayValueB = '0';
          break;
        case 4:
          displayValueA = '20%';
          displayValueB = '0';
          break;
        case 5:
          displayValueA = '20%';
          displayValueB = '1';
          break;
        default:
          displayValueA = '0%';
          displayValueB = '0';
      }
      return (
        <span>
          召唤物造成的伤害提升
          <ColoredText text={displayValueA} />, 且会额外召唤
          <ColoredText text={displayValueB} />
          只魔狼作战,
          魔狼拥有全队平均生命,强度,暴击,攻速等属性以及50%的伤害减免,
          且具有冲锋和嘲讽技能
        </span>
      );
    },
  },
  坚韧: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 5,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '坚韧',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]:
      '坚韧阵线的强度达到2/3/4/5时, 上阵黑卫的生命值提升8%/12%/20%/20%, 受到伤害额外减免0%/0%/0%/20%',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
      5: 'LVL-5 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      let displayValueA;
      let displayValueB;

      switch (level) {
        case 2:
          displayValueA = '8%';
          displayValueB = '0%';
          break;
        case 3:
          displayValueA = '12%';
          displayValueB = '0%';
          break;
        case 4:
          displayValueA = '20%';
          displayValueB = '0%';
          break;
        case 5:
          displayValueA = '20%';
          displayValueB = '20%';
          break;
        default:
          displayValueA = '0%';
          displayValueB = '0%';
      }
      return (
        <span>
          上阵黑卫的生命值提升
          <ColoredText text={displayValueA} />, 受到伤害额外减免
          <ColoredText text={displayValueB} />
        </span>
      );
    },
  },
  妖精: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 4,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '妖精',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]:
      '妖精阵线的强度达到2/3/4时, 上阵黑卫受到的治疗效果提升10%/20%/40%, 每个妖精死亡时, 回复所有友军0/0/300点怒气',
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
          displayValueB = '0';
          break;
        case 3:
          displayValueA = '20%';
          displayValueB = '0';
          break;
        case 4:
          displayValueA = '40%';
          displayValueB = '300';
          break;
        default:
          displayValueA = '0%';
          displayValueB = '0';
      }
      return (
        <span>
          上阵黑卫受到的治疗效果提升
          <ColoredText text={displayValueA} />, 每个妖精死亡时, 回复所有友军
          <ColoredText text={displayValueB} />
          点怒气
        </span>
      );
    },
  },
  统帅: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 1,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '统帅',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]:
      '统帅阵线的强度达到1/2时, 每拥有一个阵线效果, 统帅型黑卫的生命值提升5%/8%, 伤害提升3%/5%',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      let displayValueA;
      let displayValueB;

      switch (level) {
        case 1:
          displayValueA = '5%';
          displayValueB = '3%';
          break;
        case 2:
          displayValueA = '8%';
          displayValueB = '5%';
          break;
        default:
          displayValueA = '0%';
          displayValueB = '0%';
      }
      return (
        <span>
          每拥有一个阵线效果, 统帅型黑卫的生命值提升
          <ColoredText text={displayValueA} />, 伤害提升
          <ColoredText text={displayValueB} />
        </span>
      );
    },
  },
  盾御: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 6,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '盾御',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]:
      '盾御阵线达到2/3/4/5/6时, 当上阵黑卫的护盾值不为0时, 造成的伤害提升6%/8%/10%/12%/15%, 如果是盾御型黑卫, 则有0%/0%/0%/0%/35%几率免疫昏迷与冰冻',
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
          displayValueA = '6%';
          displayValueB = '0%';
          break;
        case 3:
          displayValueA = '8%';
          displayValueB = '0%';
          break;
        case 4:
          displayValueA = '10%';
          displayValueB = '0%';
          break;
        case 5:
          displayValueA = '12%';
          displayValueB = '0%';
          break;
        case 6:
          displayValueA = '15%';
          displayValueB = '35%';
          break;
        default:
          displayValueA = '0%';
          displayValueB = '0%';
      }
      return (
        <span>
          当上阵黑卫的护盾值不为0时, 造成的伤害提升
          <ColoredText text={displayValueA} />, 如果是盾御型黑卫, 则有
          <ColoredText text={displayValueB} />
          几率免疫昏迷与冰冻
        </span>
      );
    },
  },
  超导: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 5,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '超导',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]:
      '超导阵线达到2/3/4/5时, 全队能量回复速度提升3%/6%/10%/10%, 且超导阵线黑卫每5秒对随机敌方释放0/0/0/1道闪电链, 闪电链会连锁4次, 每次连锁衰减30%伤害. 闪电链伤害 = 5秒内额外获得的怒气值/140*(法术+物理)强度. (额外获得能量:偷取怒气, 技能直接恢复怒气等效果)',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
      5: 'LVL-5 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      let displayValueA;
      let displayValueB;

      switch (level) {
        case 2:
          displayValueA = '3%';
          displayValueB = '0';
          break;
        case 3:
          displayValueA = '6%';
          displayValueB = '0';
          break;
        case 4:
          displayValueA = '10%';
          displayValueB = '0';
          break;
        case 5:
          displayValueA = '10%';
          displayValueB = '1';
          break;
        default:
          displayValueA = '0%';
          displayValueB = '0';
      }
      return (
        <span>
          全队能量回复速度提升
          <ColoredText text={displayValueA} />,
          且超导阵线黑卫每5秒对随机敌方释放
          <ColoredText text={displayValueB} />
          道闪电链, 闪电链会连锁4次, 每次连锁衰减30%伤害. 闪电链伤害 =
          5秒内额外获得的怒气值/140*{`(`}法术+物理{`)`}强度. {`(`}
          额外获得能量:偷取怒气, 技能直接恢复怒气等效果{`)`}
        </span>
      );
    },
  },
  力场: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 4,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '力场',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]:
      '力场阵线达到2/3/4时, 力场阵线黑卫每隔20秒在自身位置释放抵挡弹道的护罩, 持续3/4/5秒',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      let displayValueA;

      switch (level) {
        case 2:
          displayValueA = '3';
          break;
        case 3:
          displayValueA = '4';
          break;
        case 4:
          displayValueA = '5';
          break;
        default:
          displayValueA = '0';
      }
      return (
        <span>
          力场阵线黑卫每隔20秒在自身位置释放抵挡弹道的护罩, 持续
          <ColoredText text={displayValueA} />秒
        </span>
      );
    },
  },
  流星: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 4,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '流星',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]:
      '流星阵线达到2/3/4时, 10秒1次, 召唤流星对场上所有敌人造成1000%/1500%/2000%强度的火焰伤害. (释放者为全队法术强度最高角色)',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      let displayValueA;

      switch (level) {
        case 2:
          displayValueA = '1000%';
          break;
        case 3:
          displayValueA = '1500%';
          break;
        case 4:
          displayValueA = '2000%';
          break;
        default:
          displayValueA = '0%';
      }
      return (
        <span>
          10秒1次, 召唤流星对场上所有敌人造成
          <ColoredText text={displayValueA} />
          强度的火焰伤害. {`(`}释放者为全队法术强度最高角色{`)`}
        </span>
      );
    },
  },
  暴怒: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 6,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '暴怒',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]:
      '暴怒阵线达到2/3/4/5/6时, 暴怒阵线黑卫每次受伤会增加会增加造成的所有伤害1%/1.5%/2%/3%/3%, 最多叠加5次, 持续30秒. 队伍中其他黑卫死亡时, 暴怒阵线黑卫有0%/0%/0%/0%/100%概率立刻恢复生命值并处于狂怒状态, 增加的伤害效果提升100%. 持续30秒',
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
          displayValueA = '1%';
          displayValueB = '0%';
          break;
        case 3:
          displayValueA = '1.5%';
          displayValueB = '0%';
          break;
        case 4:
          displayValueA = '2%';
          displayValueB = '0%';
          break;
        case 5:
          displayValueA = '3%';
          displayValueB = '0%';
          break;
        case 6:
          displayValueA = '3%';
          displayValueB = '100%';
          break;
        default:
          displayValueA = '0%';
          displayValueB = '0%';
      }
      return (
        <span>
          暴怒阵线黑卫每次受伤会增加会增加造成的所有伤害
          <ColoredText text={displayValueA} />, 最多叠加5次, 持续30秒.
          队伍中其他黑卫死亡时, 暴怒阵线黑卫有
          <ColoredText text={displayValueB} />
          概率立刻恢复生命值并处于狂怒状态, 增加的伤害效果提升100%. 持续30秒
        </span>
      );
    },
  },
  风涌: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 4,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '风涌',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]:
      '风涌阵线达到2/3/4时, 战斗开始时, 每隔20秒召唤持续2.5/3.5/4.5秒的龙卷吹起一名敌方单位, 期间该敌人无法行动, 也不会受到伤害',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      let displayValueA;

      switch (level) {
        case 2:
          displayValueA = '2.5';

          break;
        case 3:
          displayValueA = '3.5';

          break;
        case 4:
          displayValueA = '4.5';

          break;
        default:
          displayValueA = '0';
      }
      return (
        <span>
          战斗开始时, 每隔20秒召唤持续
          <ColoredText text={displayValueA} />
          秒的龙卷吹起一名敌方单位, 期间该敌人无法行动, 也不会受到伤害
        </span>
      );
    },
  },
  回能: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 4,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '回能',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]:
      '回能阵线达到2/3/4时, 魔法盾消失时, 恢复自身怒气值50/75/100. 效果每5秒可触发1次',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      let displayValueA;

      switch (level) {
        case 2:
          displayValueA = '50';

          break;
        case 3:
          displayValueA = '75';

          break;
        case 4:
          displayValueA = '100';

          break;
        default:
          displayValueA = '0';
      }
      return (
        <span>
          魔法盾消失时, 恢复自身怒气值
          <ColoredText text={displayValueA} />. 效果每5秒可触发1次
        </span>
      );
    },
  },
  聚变: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 6,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '聚变',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]:
      '聚变阵线达到2/3/4/5/6时, 聚变阵线黑卫获得的所有球的基础效果增加20%/30%/40%/50%/50%. 当聚变阵线黑卫获得球时, 累积0/0/0/0/1层充能, 达到20层时, 在随机敌方位置召唤离子风暴, 每秒对范围内敌人进行打击, 造成800%法术强度的闪电伤害, 持续5秒, CD 10秒',
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
          displayValueA = '20%';
          displayValueB = '0';
          break;
        case 3:
          displayValueA = '30%';
          displayValueB = '0';
          break;
        case 4:
          displayValueA = '40%';
          displayValueB = '0';
          break;
        case 5:
          displayValueA = '50%';
          displayValueB = '0';
          break;
        case 6:
          displayValueA = '50%';
          displayValueB = '1';
          break;
        default:
          displayValueA = '0%';
          displayValueB = '0';
      }
      return (
        <span>
          聚变阵线黑卫获得的所有球的基础效果增加
          <ColoredText text={displayValueA} />. 当聚变阵线黑卫获得球时, 累积
          <ColoredText text={displayValueB} />
          层充能, 达到20层时, 在随机敌方位置召唤离子风暴,
          每秒对范围内敌人进行打击, 造成800%法术强度的闪电伤害, 持续5秒, CD 10秒
        </span>
      );
    },
  },
  回馈: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 6,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 3,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '回馈',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]:
      '回馈阵线达到2/3/4/5时, 属于自身的召唤物死亡时, 召唤者获得25%/50%/75%/100%强度的魔法盾, 该效果5秒触发1次. 召唤物死亡, 召唤者还会恢复0/0/0/250点怒气, 该效果10秒触发一次',
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
        case 3:
          displayValueA = '25%';
          displayValueB = '0';
          break;
        case 4:
          displayValueA = '50%';
          displayValueB = '0';
          break;
        case 5:
          displayValueA = '75%';
          displayValueB = '0';
          break;
        case 6:
          displayValueA = '100%';
          displayValueB = '250';
          break;
        default:
          displayValueA = '0%';
          displayValueB = '0';
      }
      return (
        <span>
          属于自身的召唤物死亡时, 召唤者获得
          <ColoredText text={displayValueA} />
          强度的魔法盾, 该效果5秒触发1次. 召唤物死亡, 召唤者还会恢复
          <ColoredText text={displayValueB} />
          点怒气, 该效果10秒触发一次
        </span>
      );
    },
  },
  灭法: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 4,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '灭法',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]:
      '灭法阵线达到2/3/4级时, 队伍中灭法阵线黑卫死亡时, 会沉默所有敌方黑卫3/4/5秒',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      let displayValueA;

      switch (level) {
        case 2:
          displayValueA = '3';

          break;
        case 3:
          displayValueA = '4';

          break;
        case 4:
          displayValueA = '5';
          break;
        default:
          displayValueA = '0';
      }
      return (
        <span>
          队伍中灭法阵线黑卫死亡时, 会沉默所有敌方黑卫
          <ColoredText text={displayValueA} />秒
        </span>
      );
    },
  },
  咒蚀: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 4,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '咒蚀',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]:
      '咒蚀阵线达到2/3/4时, 每当队伍中有角色对敌人造成冰缓,感电,中毒,点燃状态时, 咒蚀阵线的黑卫将获得1个随机球, 触发间隔为3/1.5/0.5秒',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      let displayValueA;

      switch (level) {
        case 2:
          displayValueA = '3';

          break;
        case 3:
          displayValueA = '1.5';

          break;
        case 4:
          displayValueA = '0.5';
          break;
        default:
          displayValueA = '0';
      }
      return (
        <span>
          每当队伍中有角色对敌人造成冰缓,感电,中毒,点燃状态时,
          咒蚀阵线的黑卫将获得1个随机球, 触发间隔为
          <ColoredText text={displayValueA} />秒
        </span>
      );
    },
  },
  雷暴: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 4,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '雷暴',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]:
      '雷暴阵线达到2/3/4级时, 队伍中的该阵线黑卫在释放必杀技同时, 朝随机敌人释放2/4/8道闪电, 对落点附近敌人造成800%法术强度闪电伤害. (该伤害视为技能伤害，且只会受到全伤害增幅和闪电伤害增幅的影响)',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
      4: 'LVL-4 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      let displayValueA;

      switch (level) {
        case 2:
          displayValueA = '2';

          break;
        case 3:
          displayValueA = '4';

          break;
        case 4:
          displayValueA = '8';
          break;
        default:
          displayValueA = '0';
      }
      return (
        <span>
          队伍中的该阵线黑卫在释放必杀技同时, 朝随机敌人释放
          <ColoredText text={displayValueA} />
          道闪电, 对落点附近敌人造成800%法术强度闪电伤害. {`(`}
          该伤害视为技能伤害，且只会受到全伤害增幅和闪电伤害增幅的影响{`)`}
        </span>
      );
    },
  },
  共鸣: {
    [RAW_FORMATION_CONFIG_KEYS.MAX_LVL]: 3,
    [RAW_FORMATION_CONFIG_KEYS.MIN_EFFECT_LVL]: 2,
    [RAW_FORMATION_CONFIG_KEYS.NAME]: '共鸣',
    [RAW_FORMATION_CONFIG_KEYS.CATEGORY]: 'EXTRA',
    [RAW_FORMATION_CONFIG_KEYS.DESCRIPTION]:
      '共鸣阵线达到2/3级时, 共鸣阵线的黑卫所有球的上限增加1/2个',
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS]: {
      1: 'N/A',
      2: 'LVL-2 EFFECT',
      3: 'LVL-3 EFFECT',
    },
    [RAW_FORMATION_CONFIG_KEYS.EFFECTS_DESCRIPTION_HANDLER]: (level) => {
      let displayValueA;

      switch (level) {
        case 2:
          displayValueA = '1';

          break;
        case 3:
          displayValueA = '2';
          break;
        default:
          displayValueA = '0';
      }
      return (
        <span>
          共鸣阵线的黑卫所有球的上限增加
          <ColoredText text={displayValueA} />个
        </span>
      );
    },
  },
};
