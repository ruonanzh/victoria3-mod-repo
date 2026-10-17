# Victoria 3 提示词写作标准（英文）

本文件规定 `victoria3-mod-repo` 里所有英文文本的写法。判据来自 ASD-STE100 与 `asd-ste100` skill。

**适用对象**：会进 agent 上下文的英文。改提示词前必须先读本文件。

对照件：`D:/desktop-gamer-agent-pi-eu5/docs/eu5-harness/prompt-standard.md`（EU5 版，本文件的来源）。
本文件只改与 Victoria 3 相关的内容，其余照 EU5 版执行。

## 1. 为什么 Victoria 3 单独一份

EU5 版里的路径、工具名、游戏对象都绑在 EU5 上。主要有四处不同。

1. vanilla 脚本镜像多一层 `game/`：`game-scripts/game/game/`，因为 `sync_game_scripts` 镜像的是安装根。
2. 覆盖机制按**目录门控**，共 122 个目录。关键字只认文件顶层。
3. 存在 `docs/mod-wiki/`：一份 wiki 快照，属于生成物，不适用本文件，也不得手改。
4. 版本与语义的权威分三层：dump、vanilla 脚本、wiki 快照。三层的覆盖度差异很大。

第 2 到第 4 条决定了术语表要新增一批词，见第 5 节。

## 2. 适用范围

**适用**：

1. `AGENTS.md` 与 `README.md`。
2. `.pi/skills/*/SKILL.md`，含 frontmatter 的 `description`。
3. `.pi/agents/*.md`。
4. `docs/INDEX.md`、`docs/game.md`、`docs/victoria3-modding-conventions.md`。
5. `reference/README.md`。
6. `.pi/extensions/*.ts` 与 `.pi/lib/*.ts` 里的 `description`、`promptSnippet`、`promptGuidelines`、参数 `description`。
7. 工具的 `content` 返回文案与错误文案。

**不适用**：

1. `docs/mod-wiki/`：wiki 快照，CC BY-SA 3.0，原样保留。见 `docs/mod-wiki/SOURCE.md`。
2. `reference/example_mod/`：样例 mod 本身，属于被测数据。
3. `game-scripts/`：git-ignored 的 vanilla 镜像。
4. 代码本身、代码注释与 commit message。代码注释给人看，按 `ste` skill 的排除项办。
   `description`、`content`、错误文案这类**字符串**仍然适用，见适用清单第 6、7 项。
5. 原样引用的游戏命令、日志、游戏界面文案。

## 3. 两种模式

先选模式，再动笔。

### 3.1 Strict

**范围**：工具元数据、`content`、错误文案、SKILL 的步骤段、`.pi/agents/` 的规则段。

适用第 4 节全部规则，含句长上限与一词一义。

### 3.2 STE-flavored

**范围**：`docs/**` 与 SKILL 的说明性正文。

适用第 4 节全部结构规则。第 4.1 节的词法规则作为方向，不要求逐词替换。说明性正文需要一点变化空间。

## 4. 规则

### 4.1 词

1. **一词一义。** 同一个动作全文只用一个动词。选了 `check`，就不再写 `verify`、`confirm`、`validate` 表示同一个动作。
2. **先定义，后使用。** Victoria 3 专有词在第 5 节定义。读者已知的通用词不定义。
3. **用具体动词。** 写 `analyze the log`，不写 `perform an analysis of the log`。
4. **字面量保持原样。** 路径、命令、标识符、工具名、状态词、游戏关键字保持原文，写在反引号内。
   例：`game-scripts/`、`validate_mod`、`PASS`、`INJECT:`、`thumbnail`。
5. **名词串不超过 3 个词。** 写 `the folder that gates the keyword`，不写 `the keyword gating folder list`。
6. **不用营销形容词。** `seamless`、`robust`、`cutting-edge` 一律不得使用。要主张，就给测量值。

### 4.2 句

1. **一句一事。** 一句只写一个动作或一个事实。
2. **句长上限。** 步骤句不超过 20 词。描述句不超过 25 词。
3. **用主动语态。** 写出谁做动作。执行者不明确或无关时可以例外。
4. **条件在前，动作在后。** 写 `If the path is missing, run try_set_game_dir.`，不写 `Run try_set_game_dir if the path is missing.`。
5. **只用简单时态。** 不定式、祈使句、一般现在、一般过去、一般将来、过去分词作定语。
6. **不得用分号。** 拆成两句。
7. **不得用短语动词。** 写 `start`、`read`、`find`。`look up` 改成 `find` 或 `read`。
8. **保留 hedge。** `may`、`can`、`could` 的原意不得升格成事实。
   例：`The game may ignore the file.` 不得改成 `The game ignores the file.`
9. **不用双重否定。**
10. **不省略主语与冠词。** 省略后有两种读法时，必须补出。

### 4.3 段与列表

1. 一段一个主题，不超过 6 句。
2. 三步以上写成编号列表。一步一个动作。
3. 不得用 `etc.`、`and so on`、`...` 结束列举。列全，或写出完整清单的位置。

### 4.4 符号

1. 不得用符号传达情态、警告或强调。`✓`、`✗`、`⚠️`、`⭐` 一律不得使用。
2. 不得用箭头 `→`、`←` 代替文字。必须写成完整句。

   | 不得写 | 改写 |
   |---|---|
   | `FAIL: X` → 修 Y | If the tool returns `FAIL: X`, fix Y. |
   | 参数 ← 值 | The value of that parameter is 值. |
   | 玩家发言 → INDEX | Read the routing table in `docs/INDEX.md` first. |

3. 状态词 `PASS`、`FAIL`、`PARTIAL`、`WARN`、`NEXT` 保留原样。
4. 日志格式与命令输出里的箭头按原样保留。
5. 序号、列表符号、代码块、表格的结构不受本节限制。表格单元格里的文字按正文规则办。

### 4.5 工具返回文案

1. 用英文或 ASCII。Windows 的 GBK 会把非 ASCII 字符显示成乱码。
2. 格式：错误码与说明一行，换行，`NEXT:` 加下一步。
3. 错误码用英文大写加下划线。例：`INVALID_MOD_DIR`、`TARGET_NOT_FOUND`。
4. 失败时给出下一步动作。不得让 agent 重做刚刚失败的动作。
5. 业务结果用 `PASS`、`WARN`、`FAIL`、`PARTIAL`。工具错误用 `throw`。
6. `PASS` 行带括号标签时，标签写结果词，不写动作词。结果词见第 5.7 节。

## 5. 术语表

一个概念只用一个写法。一个写法只表示一个概念。

### 5.1 路径与位置

| 概念 | 唯一写法 | 不得写 |
|---|---|---|
| 游戏安装目录 | `game directory` | `game install directory`、`game folder` |
| 工作区根 | `workspace root` | `repo root` |
| mod 目录 | `mod directory` | `mod folder`、`mod dir` |
| mod 安装目录 | `mod install directory` | `launcher dir`、`install target` |
| 玩家文档目录 | `Paradox user-documents directory` | `user documents folder` |
| 创意工坊目录 | `Steam Workshop directory` | `Workshop folder` |
| `game-scripts/`：写 mod 前要加载的上下文 | `the modding context` | `the authoring context`、`the vanilla context` |
| `game-scripts/game/game/` | `the vanilla scripts` | 用 `vanilla` 指整个 `game-scripts/` |
| `game-scripts/workshop/` | `the Workshop scripts` | 把创意工坊脚本称作 vanilla |
| `docs/mod-wiki/`：wiki 快照 | `the mod API snapshot` | `the offline wiki`、`the wiki copy` |
| dump 产物：`script_docs` 写出的 log | `the script documentation dump`，简称 `the dump` | `the docs folder`、`the generated wiki` |
| 状态文件 | `.gamer-agent.local.json` | `the JSON file`、`state file` |
| 目录 | `directory` | `folder` |

**一个概念只有一个名字。** 不得写「首次用全名，其后用简称」。表里的唯一写法全文照用。

`folder` 只允许出现在字面量里，见第 5.2 节。

### 5.2 字面量

下列写法按规则 4.1.4 保持原样。它们是字面量，不是第 5 节那些概念的别称。

1. **代码标识符**：`cwd`、`gameDir`、`modDir`、`modInstallDir`、`workshopDir`、`discoverGameDir`。
2. **路径**：`game-scripts/`、`your_mods/<ModName>`、`.pi/extensions/`、`docs/mod-wiki/`。
3. **含 folder 的标识符**：`libraryfolders.vdf`、`create_mod_folder`、`GAME_FOLDER_NAME`、
   `common/genes/`（游戏目录名，原样）。
4. **占位符**：`<userDocuments>`、`<language>`、`<ModName>`、`<Documents>`。
5. **工具名**：`try_set_game_dir`、`set_game_dir`、`check_game_paths`、`get_game_info`、
   `check_runtime`、`install_runtime`、`validate_mod`、`install_mod`、`sync_game_scripts`。
6. **状态串**：`gameDir discovered and recorded`、`PASS`、`FAIL`、`WARN`、`NEXT`。
7. **游戏关键字**：`INJECT:`、`REPLACE:`、`TRY_INJECT:`、`INJECT_OR_CREATE:`、`REPLACE_OR_CREATE:`。
8. **元数据字段**：`name`、`id`、`version`、`supported_game_version`、`short_description`、`tags`、
   `thumbnail`、`relationships`、`game_id`、`game_custom_data`、`replace_paths`、`multiplayer_synchronized`。
9. **控制台命令**：`script_docs`、`dump_data_types`、`-debug_mode`、`-run_console_action`。

### 5.3 游戏与 mod 概念

| 概念 | 唯一写法 | 不得写 |
|---|---|---|
| 使用 mod 的人 | `the player` | `the user` |
| 脚本语言 | `PDXScript` | `PDX script`、`PDX-script` |
| mod 类型名 | `pdx-script` | `PDXScript` |
| 原版内容 | `vanilla`（形容词） | `base game` |
| mod 的产物 | `mod`（名词） | `artifact`、`plugin` |
| mod 元数据文件 | `.metadata/metadata.json` | `the descriptor`、`manifest` |
| 支持关键字的那批目录 | `the gated folders` | `the keyword folders`、`the override folders` |
| 关键字允许的位置 | `the file top level` | `the top block`、`the root block` |
| GUI `type`/`template` 与 `events` 的取胜规则 | `first-loaded-wins` | `last one wins`、`later wins` |
| 整目录丢弃原版内容 | `replace_paths` | `replace_path`（单数，Victoria 3 不用这个键） |

### 5.4 三个易混词

这三个词不是同义词，是分工。

| 词 | 含义 | 例子 |
|---|---|---|
| `override` | 通用概念：mod 覆盖原版内容 | The three override mechanisms |
| `overwrite` | 整文件覆盖：同路径、同文件名 | Direct file overwrite |
| `replace` | 对象级替换：`REPLACE:` 关键字，或隐式替换 | Implicit replace |

Victoria 3 另有一个易混的说法：`replace_paths` 是整目录丢弃，不是对象级替换。写 `replace_paths`
时不得简称 `replace`。

### 5.5 名称的三个写法

`your_mods/` 下的名字与 `metadata.json` 里的两个字段是三件事。

| 概念 | 唯一写法 | 说明 |
|---|---|---|
| `your_mods/` 下的目录名 | `directory name` | 决定安装目录名 |
| `metadata.json` 的 `id` | `mod id` | 启动器按它识别 mod。可为空，Steam 上传时补 |
| `metadata.json` 的 `name` | `mod name` | 启动器与游戏里显示给玩家的标题 |

### 5.6 动作词

| 概念 | 唯一写法 | 不得写 |
|---|---|---|
| 查路径或前提对不对 | `check`（工具名 `check_game_paths`、`check_runtime`） | `verify`、`double-check` |
| 查 mod 是否合格 | `validate_mod`（工具名）；`validate`（动词，只指这个工具的动作）；`linter`（类别名） | `lint`（动词） |
| 向玩家确认 | `confirm`（只用于向玩家确认） | `ask for confirmation` |
| 删除文件 | `delete` | `remove`、`erase` |
| 工具自己找游戏目录 | `locate` | `search`、`hunt for` |
| 把值写进状态文件 | `record` | `save`、`store`、`persist` |
| 写 mod（动词） | `write` | `author` |
| mod 制作活动（名词与定语） | `modding` | `authoring` |
| 规则文件里的规则 | `the modding conventions` | `the authoring rules` |
| 把 game/ 与 workshop/ 脚本复制进 `game-scripts/` | `mirror` | `copy down`、`download` |
| 把 mod 复制进 mod 安装目录 | `install` | `deploy`、`publish` |
| 更新工作区代码 | `update` | `sync`、`pull` |
| 从 wiki 快照或脚本里找出名字 | `find` | `look up`、`search for` |
| 在游戏里产出 dump | `produce the dump` | `generate the docs`、`dump the wiki` |

**字面量例外**：工具名 `discoverGameDir` 与 `discoverSteamLibraryRoots` 保持原样。它们是代码标识符。

### 5.7 结果形容词

检查结果与路径状态只用一个写法。按对象分。

| 概念 | 唯一写法 | 不得写 |
|---|---|---|
| 路径检查通过 | `correct` | `verified`、`checked`、`valid` |
| mod 检查通过 | `valid` | `correct` |
| 路径未记录 | `not recorded` | `missing`、`unset` |
| 调用方没传路径 | `not given` | `missing`、`undefined` |
| 项可选 | `optional` | `may be omitted` |

### 5.8 已测数值

第 4.1.6 条要求主张带测量值。下列数值来自实测，改动前必须重新测。

| 事实 | 数值 | 出处 |
|---|---|---|
| 门控目录数 | 122 | `docs/mod-wiki/Mod compatibility.md` 的 List of folders |
| effect 总数（1.13.11） | 3,152 | `script_docs` 的 `effects.log` |
| trigger 总数（1.13.11） | 1,816 | `script_docs` 的 `triggers.log` |
| wiki 快照覆盖的 effect | 584，占 19% | 快照 69 页的表格首列与 dump 比对 |
| wiki 快照覆盖的 trigger | 956，占 53% | 同上 |
| 真实 mod 的顶层关键字用例 | 2,318 处，嵌套 0 处 | 10 个已下载 Workshop mod |
| vanilla 的关键字用例 | 0 处 | `game/` 全量扫描 |

## 6. 检查方法

### 6.1 机检

`asd-ste100` skill 的 `scripts/ste-lint.py` 检查分号、句长、短语动词、虚化动词、同义词轮换、被动语态、复合时态。
该脚本放在规划仓，本仓没有副本。

```bash
py "D:/desktop-gamer-agent-pi-eu5/.pi/skills/asd-ste100/scripts/ste-lint.py" <file>
```

退出码 1 表示硬违规超过基线。首次采纳一份旧文件时，可以用 `--baseline N` 容忍。

机检不覆盖 hedge、字面量、术语表、警告语气。这四项必须人工核对。

**已知项**：机检会报下面三类。人工确认后忽略，不得用 `--disable synonym-rotation`，那会连带关掉整条规则。

1. `correct` 与 `fix`。`correct` 是第 5.7 节的结果形容词，`fix` 是另一个动作。
2. `validate` 与 `check`。`validate` 是第 5.6 节允许的、`validate_mod` 的动词。
3. `confirm` 与 `check`。`confirm` 只用于向玩家确认，`check` 查数据。两者不是同一个动作。

**`.ts` 文件怎么查**：不得把 `.ts` 直接喂给机检，代码里的分号会被当成违规。只取字符串
（`description`、`content`、错误文案）。注释不查：

```bash
node "D:/desktop-gamer-agent-pi-eu5/docs/eu5-harness/tools/extract-prose.mjs" .pi/extensions/*.ts .pi/lib/*.ts
```

它给每个输入生成一个 `<文件>.prose.txt`。机检跑那些文件。**跑完必须删掉，不得提交它们。**

### 6.2 人工核对

1. 逐句对照第 4 节。
2. 逐个专有词对照第 5 节。
3. 检查每个 hedge 是否保住了原意。
4. 检查字面量是否原样。
5. 检查英文分号是否清零。
6. 检查速记符号是否清零。
7. 检查第 5.8 节的数值与实际一致。
