# List of GUI script functions

*Main article: [GUI script](./GUI script.md)*

This page lists all of the GUI script functions, as the list is too large to directly include on the GUI script main page.

List of all GUI functions

| Type | Function | Arguments | Output | Description |
| AIAttitude | AccessSelf |  | AIAttitude | Category: const |
| AIAttitude | CalcScore |  | CFixedPoint |  |
| AIAttitude | GetColor |  | CString | Category: nonconst |
| AIAttitude | GetDesc |  | CString | Category: nonconst |
| AIAttitude | GetFirstCountry |  | Country | Category: nonconst |
| AIAttitude | GetName |  | CString | Category: nonconst |
| AIAttitude | GetReasonsDesc |  | CString | Category: nonconst |
| AIAttitude | GetSecondCountry |  | Country | Category: nonconst |
| AIAttitude | GetStrategicDesireCatalystDesc |  | CString | Category: nonconst |
| AIAttitude | GetStrategicDesireDesc |  | CString | Category: nonconst |
| AIAttitude | GetTexture |  | Unknown | Category: nonconst |
| AIAttitude | GetTooltip |  | CString | Category: nonconst |
| AIAttitude | GetTooltipTag |  | CString | Category: nonconst |
| AIAttitude | Self |  | AIAttitude |  |
| AIStrategy | AccessSelf |  | AIStrategy | Category: const |
| AIStrategy | GetDesc | 1. Country | CString | Category: nonconst |
| AIStrategy | GetName |  | CString | Category: nonconst |
| AIStrategy | GetTexture |  | Unknown | Category: nonconst |
| AIStrategy | GetTooltip | 1. Country | CString | Category: nonconst |
| AIStrategy | GetTooltipTag |  | CString | Category: nonconst |
| AIStrategy | Self |  | AIStrategy |  |
| AcceptanceStatus | AccessSelf |  | AcceptanceStatus | Category: const |
| AcceptanceStatus | GetBackground |  | Unknown | Category: nonconst |
| AcceptanceStatus | GetColor |  | CVector4f | Category: nonconst |
| AcceptanceStatus | GetDesc |  | CString | Category: nonconst |
| AcceptanceStatus | GetEffectsDescIn | 1. Country | CString | Category: nonconst |
| AcceptanceStatus | GetHigherStatus |  | AcceptanceStatus | Category: nonconst |
| AcceptanceStatus | GetLargeIcon |  | Unknown | Category: nonconst |
| AcceptanceStatus | GetLowerBound |  | int32 | Category: nonconst |
| AcceptanceStatus | GetLowerStatus |  | AcceptanceStatus | Category: nonconst |
| AcceptanceStatus | GetName |  | CString | Category: nonconst |
| AcceptanceStatus | GetNameNoFormatting |  | CString | Category: nonconst |
| AcceptanceStatus | GetNameNoIcon |  | CString | Category: nonconst |
| AcceptanceStatus | GetOrdinal |  | int32 | Category: nonconst |
| AcceptanceStatus | GetSmallIcon |  | Unknown | Category: nonconst |
| AcceptanceStatus | GetTextIcon |  | CString | Category: nonconst |
| AcceptanceStatus | GetTooltipTag |  | CString | Category: nonconst |
| AcceptanceStatus | GetUpperBound |  | int32 | Category: nonconst |
| AcceptanceStatus | HasHigherStatus |  | bool |  |
| AcceptanceStatus | HasLowerStatus |  | bool |  |
| AcceptanceStatus | Self |  | AcceptanceStatus |  |
| AcceptanceStatusSegment | AccessSelf |  | AcceptanceStatusSegment | Category: const |
| AcceptanceStatusSegment | GetColor |  | CVector4f | Category: nonconst |
| AcceptanceStatusSegment | GetPopulationDesc |  | CString | Category: nonconst |
| AcceptanceStatusSegment | GetStatus |  | AcceptanceStatus | Category: nonconst |
| AcceptanceStatusSegment | GetTotalPopulation |  | int64 | Category: nonconst |
| AcceptanceStatusSegment | GetTotalPopulationIncreasingInAcceptance |  | int64 | Category: nonconst |
| AcceptanceStatusSegment | Self |  | AcceptanceStatusSegment |  |
| AccountInventory | AccessSelf |  | AccountInventory | Category: const |
| AccountInventory | HasItem | 1. Unknown | bool |  |
| AccountInventory | HasRetrievedInventory |  | bool |  |
| AccountInventory | Self |  | AccountInventory |  |
| Achievement | AccessSelf |  | Achievement | Category: const |
| Achievement | IsUnlocked |  | bool |  |
| Achievement | Self |  | Achievement |  |
| AchievementPopup | AccessJustUnlockedAchievements |  | Unknown | Category: const |
| AchievementPopup | AccessSelf |  | AchievementPopup | Category: const |
| AchievementPopup | Self |  | AchievementPopup |  |
| AchievementPopup | ShowWindow |  | void |  |
| AchievementWindow | AccessGroups |  | Unknown | Category: const |
| AchievementWindow | AccessSelf |  | AchievementWindow | Category: const |
| AchievementWindow | HasGameStarted |  | bool |  |
| AchievementWindow | Hide |  | void |  |
| AchievementWindow | Self |  | AchievementWindow |  |
| AchievementWindow | ShouldShowAll |  | bool |  |
| AchievementWindow | ShouldShowLocked |  | bool |  |
| AchievementWindow | ShouldShowPossible |  | bool |  |
| AchievementWindow | ShouldShowUnlocked |  | bool |  |
| AchievementWindow | Show |  | void |  |
| AchievementWindow | ShowAll |  | void |  |
| AchievementWindow | ShowLocked |  | void |  |
| AchievementWindow | ShowPossible |  | void |  |
| AchievementWindow | ShowUnlocked |  | void |  |
| AddFriendWindow | AccessSelf |  | AddFriendWindow | Category: const |
| AddFriendWindow | Hide |  | void |  |
| AddFriendWindow | Self |  | AddFriendWindow |  |
| AddFriendWindow | ShouldBeShown |  | bool |  |
| AddFriendWindow | Show |  | void |  |
| AddWarGoalPanel | AccessCountry |  | Country | Category: const |
| AddWarGoalPanel | AccessDiplomaticPlay |  | DiplomaticPlay | Category: const |
| AddWarGoalPanel | AccessSelf |  | AddWarGoalPanel | Category: const |
| AddWarGoalPanel | AccessShownWarGoalTypes |  | Unknown | Category: const |
| AddWarGoalPanel | AccessShownWarGoals |  | Unknown | Category: const |
| AddWarGoalPanel | ClearSelectedWarGoalType |  | void |  |
| AddWarGoalPanel | GetCountry |  | Country | Category: nonconst |
| AddWarGoalPanel | GetDiplomaticPlay |  | DiplomaticPlay | Category: nonconst |
| AddWarGoalPanel | HasSelectedWarGoalType |  | bool |  |
| AddWarGoalPanel | Self |  | AddWarGoalPanel |  |
| AddWarGoalPanel | SetSelectedWarGoalType | 1. WarGoalType | void |  |
| AgitatorSlot | AccessSelf |  | AgitatorSlot | Category: const |
| AgitatorSlot | EnableInvite |  | void |  |
| AgitatorSlot | GetAgitator |  | Character | Category: nonconst |
| AgitatorSlot | Self |  | AgitatorSlot |  |
| Alert | AccessSelf |  | Alert | Category: const |
| Alert | AddingFinished |  | void |  |
| Alert | BeginIdleAnimation |  | void |  |
| Alert | GetAction |  | CString | Category: nonconst |
| Alert | GetAlertGroup |  | Unknown | Category: nonconst |
| Alert | GetColor |  | CVector4f | Category: nonconst |
| Alert | GetDescription |  | CString | Category: nonconst |
| Alert | GetHint |  | CString | Category: nonconst |
| Alert | GetName |  | CString | Category: nonconst |
| Alert | GetScopeTexture |  | Unknown | Category: nonconst |
| Alert | GetTexture |  | Unknown | Category: nonconst |
| Alert | GetToolTip |  | CString | Category: nonconst |
| Alert | GetTooltipTag |  | CString | Category: nonconst |
| Alert | HasScopeTexture |  | bool |  |
| Alert | IdleAnimationFinished |  | void |  |
| Alert | IsAdded |  | bool |  |
| Alert | IsAdding |  | bool |  |
| Alert | IsAngryImportantAction |  | bool |  |
| Alert | IsHidden |  | bool |  |
| Alert | IsRead |  | bool |  |
| Alert | IsRemovalRequested |  | bool |  |
| Alert | MarkAsHidden |  | void |  |
| Alert | MarkAsRead |  | void |  |
| Alert | RemovingFinished |  | void |  |
| Alert | Self |  | Alert |  |
| Alert | StartRemoving |  | void |  |
| Alert | Unhide |  | void |  |
| AlertGroup | AccessSelf |  | AlertGroup | Category: const |
| AlertGroup | GetTooltipTag |  | CString | Category: nonconst |
| AlertGroup | Self |  | AlertGroup |  |
| AlertOptionItem | AccessSelf |  | AlertOptionItem | Category: const |
| AlertOptionItem | GetName |  | CString | Category: nonconst |
| AlertOptionItem | GetNameWithConcept |  | CString | Category: nonconst |
| AlertOptionItem | IsDefault |  | bool |  |
| AlertOptionItem | Self |  | AlertOptionItem |  |
| AlertSettingsItem | AccessSelf |  | AlertSettingsItem | Category: const |
| AlertSettingsItem | GetCurrentOption |  | AlertOptionItem | Category: nonconst |
| AlertSettingsItem | GetSettingName |  | CString | Category: nonconst |
| AlertSettingsItem | GetValidOptions |  | Unknown | Category: nonconst |
| AlertSettingsItem | OnSelectOption |  | void |  |
| AlertSettingsItem | Self |  | AlertSettingsItem |  |
| Amendment | AccessSelf |  | Amendment | Category: const |
| Amendment | GetAttachedLaw |  | Law | Category: nonconst |
| Amendment | GetCooldownEndDate |  | CString | Category: nonconst |
| Amendment | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| Amendment | GetEndorsingInterestGroups |  | Unknown | Category: nonconst |
| Amendment | GetEndorsingInterestGroupsBreakdown |  | CString | Category: nonconst |
| Amendment | GetEndorsingInterestGroupsSummary |  | CString | Category: nonconst |
| Amendment | GetIndifferentInterestGroups |  | Unknown | Category: nonconst |
| Amendment | GetIndifferentInterestGroupsBreakdown |  | CString | Category: nonconst |
| Amendment | GetIndifferentInterestGroupsSummary |  | CString | Category: nonconst |
| Amendment | GetName |  | CString | Category: nonconst |
| Amendment | GetNameNoFormatting |  | CString | Category: nonconst |
| Amendment | GetNumEndorsingInterestGroups |  | int32 | Category: nonconst |
| Amendment | GetNumIndifferentInterestGroups |  | int32 | Category: nonconst |
| Amendment | GetNumOpposingInterestGroups |  | int32 | Category: nonconst |
| Amendment | GetOnAmendedEffectsDesc |  | CString | Category: nonconst |
| Amendment | GetOnRepealEffectsDesc |  | CString | Category: nonconst |
| Amendment | GetOpposingInterestGroups |  | Unknown | Category: nonconst |
| Amendment | GetOpposingInterestGroupsBreakdown |  | CString | Category: nonconst |
| Amendment | GetOpposingInterestGroupsSummary |  | CString | Category: nonconst |
| Amendment | GetParentLawType |  | LawType | Category: nonconst |
| Amendment | GetSponsor |  | InterestGroup | Category: nonconst |
| Amendment | GetTimeoutDate |  | CString | Category: nonconst |
| Amendment | GetTooltipTag |  | CString | Category: nonconst |
| Amendment | GetType |  | AmendmentType | Category: nonconst |
| Amendment | HasCooldown |  | bool |  |
| Amendment | HasCooledDown |  | bool |  |
| Amendment | HasTimedOut |  | bool |  |
| Amendment | HasTimeout |  | bool |  |
| Amendment | IsActive |  | bool |  |
| Amendment | MakeScope |  | Scope |  |
| Amendment | Repeal |  | Command |  |
| Amendment | Self |  | Amendment |  |
| AmendmentType | AccessSelf |  | AmendmentType | Category: const |
| AmendmentType | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| AmendmentType | GetDesc |  | CString | Category: nonconst |
| AmendmentType | GetInstitutionModifierDesc |  | CString | Category: nonconst |
| AmendmentType | GetIsPossibleDesc | 1. Unknown 2. Unknown | CString | Category: nonconst |
| AmendmentType | GetModifier |  | Modifier | Category: nonconst |
| AmendmentType | GetName |  | CString | Category: nonconst |
| AmendmentType | GetNameNoFormatting |  | CString | Category: nonconst |
| AmendmentType | GetNameWithLaw | 1. Law | CString | Category: nonconst |
| AmendmentType | GetOnAmendedEffectsDesc | 1. Unknown | CString | Category: nonconst |
| AmendmentType | GetOnRepealEffectsDesc | 1. Unknown | CString | Category: nonconst |
| AmendmentType | GetParentLawType |  | LawType | Category: nonconst |
| AmendmentType | GetSponsorModifier |  | Modifier | Category: nonconst |
| AmendmentType | GetTaxModifierDesc | 1. Country | CString | Category: nonconst |
| AmendmentType | GetTooltipTag |  | CString | Category: nonconst |
| AmendmentType | GetUnlocks |  | CString | Category: nonconst |
| AmendmentType | HasParentLaw |  | bool |  |
| AmendmentType | IsPossible | 1. Unknown 2. Unknown | bool |  |
| AmendmentType | MakeScope |  | Scope |  |
| AmendmentType | Self |  | AmendmentType |  |
| AnchorItem | AccessSelf |  | AnchorItem | Category: const |
| AnchorItem | GetAnchorIndexAsString |  | CString | Category: nonconst |
| AnchorItem | GetDisplayString |  | CString | Category: nonconst |
| AnchorItem | GetIndexValidator |  | Unknown | Category: nonconst |
| AnchorItem | GetTooltip |  | CString | Category: nonconst |
| AnchorItem | IsExpanded |  | bool |  |
| AnchorItem | IsLocked |  | bool |  |
| AnchorItem | Self |  | AnchorItem |  |
| AnchorItem | SetAnchorIndexCallback |  | void |  |
| AnchorItem | ToggleExpanded |  | void |  |
| AnchorItem | ToggleLock |  | void |  |
| Application | AccessSelf |  | Application | Category: const |
| Application | Quit |  | void |  |
| Application | Self |  | Application |  |
| Article | AccessSelf |  | Article | Category: const |
| Article | CanWithdraw | 1. Unknown | bool |  |
| Article | ExceedsMaxContraventions | 1. Country | bool |  |
| Article | GetAboutToBreakReasonDesc |  | CString | Category: nonconst |
| Article | GetArticleNumber |  | int32 | Category: nonconst |
| Article | GetArticleType |  | ArticleType | Category: nonconst |
| Article | GetAutoBreakReasonDesc |  | CString | Category: nonconst |
| Article | GetBaseCost |  | CFixedPoint | Category: nonconst |
| Article | GetBuildingType |  | BuildingType | Category: nonconst |
| Article | GetCompany |  | Company | Category: nonconst |
| Article | GetCostFor | 1. Country | CFixedPoint | Category: nonconst |
| Article | GetCostForDesc | 1. Unknown | CString | Category: nonconst |
| Article | GetCostWithTooltipFor | 1. Country | CString | Category: nonconst |
| Article | GetCountry |  | Country | Category: nonconst |
| Article | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| Article | GetEffectsDesc |  | CString | Category: nonconst |
| Article | GetFirstOrSourceCountry |  | Country | Category: nonconst |
| Article | GetGoods |  | Goods | Category: nonconst |
| Article | GetIcon |  | Unknown | Category: nonconst |
| Article | GetImmediateEffectsDesc |  | CString | Category: nonconst |
| Article | GetLaw |  | LawType | Category: nonconst |
| Article | GetMaintenancePayer |  | Country | Category: nonconst |
| Article | GetMutualModifierDesc |  | CString | Category: nonconst |
| Article | GetName |  | CString | Category: nonconst |
| Article | GetNameNoFormatting |  | CString | Category: nonconst |
| Article | GetNameNoIcon |  | CString | Category: nonconst |
| Article | GetNonFulfillmentDesc |  | CString | Category: nonconst |
| Article | GetNonFulfillmentDescFor | 1. Country | CString | Category: nonconst |
| Article | GetQuantity |  | CFixedPoint | Category: nonconst |
| Article | GetRelationsEffectDesc |  | CString | Category: nonconst |
| Article | GetSecondOrTargetCountry |  | Country | Category: nonconst |
| Article | GetShippingLane |  | ShippingLane | Category: nonconst |
| Article | GetShortDesc |  | CString | Category: nonconst |
| Article | GetSourceCountry |  | Country | Category: nonconst |
| Article | GetSourceModifierDesc |  | CString | Category: nonconst |
| Article | GetState |  | State | Category: nonconst |
| Article | GetStrategicRegion |  | StrategicRegion | Category: nonconst |
| Article | GetTargetCountry |  | Country | Category: nonconst |
| Article | GetTargetModifierDesc |  | CString | Category: nonconst |
| Article | GetText |  | CString | Category: nonconst |
| Article | GetTooltipTag |  | CString | Category: nonconst |
| Article | GetTreaty |  | Treaty | Category: nonconst |
| Article | HasContraventions | 1. Unknown | bool |  |
| Article | HasFlag | 1. Unknown | bool |  |
| Article | HasKind | 1. CString | bool |  |
| Article | HasType | 1. CString | bool |  |
| Article | MakeScope |  | Scope |  |
| Article | RequiresInput | 1. CString | bool |  |
| Article | Self |  | Article |  |
| ArticleDraft | AccessSelf |  | ArticleDraft | Category: const |
| ArticleDraft | CanAddWarGoal | 1. Country 2. DiplomaticPlay | bool |  |
| ArticleDraft | CanBeModified |  | bool |  |
| ArticleDraft | CanBeModifiedDesc |  | CString |  |
| ArticleDraft | FilterGoods | 1. CString | void |  |
| ArticleDraft | GetAcceptance | 1. Country | int32 | Category: nonconst |
| ArticleDraft | GetAcceptanceBreakdown | 1. Country | CString | Category: nonconst |
| ArticleDraft | GetArticleNumber |  | int32 | Category: nonconst |
| ArticleDraft | GetArticleType |  | ArticleType | Category: nonconst |
| ArticleDraft | GetBaseCost |  | CFixedPoint | Category: nonconst |
| ArticleDraft | GetBuildingType |  | BuildingType | Category: nonconst |
| ArticleDraft | GetCompany |  | Company | Category: nonconst |
| ArticleDraft | GetCostFor | 1. Country | CFixedPoint | Category: nonconst |
| ArticleDraft | GetCostForDesc | 1. Unknown | CString | Category: nonconst |
| ArticleDraft | GetCostWithTooltipFor | 1. Country | CString | Category: nonconst |
| ArticleDraft | GetCountry |  | Country | Category: nonconst |
| ArticleDraft | GetEffectsDesc |  | CString | Category: nonconst |
| ArticleDraft | GetFirstOrSource |  | Country | Category: nonconst |
| ArticleDraft | GetGoods |  | Goods | Category: nonconst |
| ArticleDraft | GetIcon |  | Unknown | Category: nonconst |
| ArticleDraft | GetImmediateEffectsDesc |  | CString | Category: nonconst |
| ArticleDraft | GetLawType |  | LawType | Category: nonconst |
| ArticleDraft | GetMaintenancePayer |  | Country | Category: nonconst |
| ArticleDraft | GetMaxValidQuantity |  | int32 | Category: nonconst |
| ArticleDraft | GetMinValidQuantity |  | int32 | Category: nonconst |
| ArticleDraft | GetMutualModifierDesc |  | CString | Category: nonconst |
| ArticleDraft | GetName |  | CString | Category: nonconst |
| ArticleDraft | GetNameNoFormatting |  | CString | Category: nonconst |
| ArticleDraft | GetNameNoIcon |  | CString | Category: nonconst |
| ArticleDraft | GetNumInputs |  | int32 | Category: nonconst |
| ArticleDraft | GetQuantity |  | CFixedPoint | Category: nonconst |
| ArticleDraft | GetQuantityPercentage |  | float | Category: nonconst |
| ArticleDraft | GetQuantityValidator |  | Unknown | Category: nonconst |
| ArticleDraft | GetRelationsEffectDesc |  | CString | Category: nonconst |
| ArticleDraft | GetRequiredInputsDesc |  | CString | Category: nonconst |
| ArticleDraft | GetSecondOrTarget |  | Country | Category: nonconst |
| ArticleDraft | GetShortDesc |  | CString | Category: nonconst |
| ArticleDraft | GetSourceModifierDesc |  | CString | Category: nonconst |
| ArticleDraft | GetState |  | State | Category: nonconst |
| ArticleDraft | GetStrategicRegion |  | StrategicRegion | Category: nonconst |
| ArticleDraft | GetTargetModifierDesc |  | CString | Category: nonconst |
| ArticleDraft | GetText |  | CString | Category: nonconst |
| ArticleDraft | GetValidBuildingTypes |  | Unknown | Category: nonconst |
| ArticleDraft | GetValidCompanies |  | Unknown | Category: nonconst |
| ArticleDraft | GetValidCountries |  | Unknown | Category: nonconst |
| ArticleDraft | GetValidGoods |  | Unknown | Category: nonconst |
| ArticleDraft | GetValidLaws | 1. LawType | Unknown | Category: nonconst |
| ArticleDraft | GetValidStates |  | Unknown | Category: nonconst |
| ArticleDraft | GetValidStrategicRegions |  | Unknown | Category: nonconst |
| ArticleDraft | GetWarGoalInfamyValue | 1. Country | CFixedPoint | Category: nonconst |
| ArticleDraft | GetWarGoalInfamyValueDesc | 1. Unknown | CString | Category: nonconst |
| ArticleDraft | GetWarGoalManeuversCost | 1. Unknown 2. Unknown | int32 | Category: nonconst |
| ArticleDraft | GetWarGoalManeuversCostDesc | 1. Unknown 2. Unknown | CString | Category: nonconst |
| ArticleDraft | HasAllRequiredInputsSet |  | bool |  |
| ArticleDraft | HasFlag | 1. Unknown | bool |  |
| ArticleDraft | HasInputValue | 1. CString | bool |  |
| ArticleDraft | HasKind | 1. CString | bool |  |
| ArticleDraft | HasType | 1. CString | bool |  |
| ArticleDraft | IsLawTypeValidInput | 1. LawType | bool |  |
| ArticleDraft | IsPossible |  | bool |  |
| ArticleDraft | IsSelectedGoods | 1. CString | bool |  |
| ArticleDraft | IsVisible |  | bool |  |
| ArticleDraft | OnInputTextChanged |  | void |  |
| ArticleDraft | OnQuantityChanged |  | void |  |
| ArticleDraft | OnQuantityChangedSlider |  | void |  |
| ArticleDraft | OnTextChanged |  | void |  |
| ArticleDraft | RequiresAnyInput |  | bool |  |
| ArticleDraft | RequiresInput | 1. CString | bool |  |
| ArticleDraft | Self |  | ArticleDraft |  |
| ArticleDraft | SetBuildingType | 1. BuildingType | void |  |
| ArticleDraft | SetCompany | 1. Company | void |  |
| ArticleDraft | SetCountry | 1. Country | void |  |
| ArticleDraft | SetGood | 1. Goods | void |  |
| ArticleDraft | SetLaw | 1. LawType | void |  |
| ArticleDraft | SetQuantity | 1. Unknown | void |  |
| ArticleDraft | SetState | 1. State | void |  |
| ArticleDraft | SetStrategicRegion | 1. StrategicRegion | void |  |
| ArticleDraft | SetText | 1. Unknown | void |  |
| ArticleDraft | SortGoods | 1. CString | void |  |
| ArticleType | AccessSelf |  | ArticleType | Category: const |
| ArticleType | GetCost |  | CFixedPoint | Category: nonconst |
| ArticleType | GetCostFor | 1. Unknown 2. Unknown 3. Unknown | CFixedPoint | Category: nonconst |
| ArticleType | GetCostForDesc | 1. Unknown 2. Unknown 3. Unknown | CString | Category: nonconst |
| ArticleType | GetDailyRelationsProgress |  | CFixedPoint | Category: nonconst |
| ArticleType | GetDesc |  | CString | Category: nonconst |
| ArticleType | GetEffectsDesc |  | CString | Category: nonconst |
| ArticleType | GetIcon |  | Unknown | Category: nonconst |
| ArticleType | GetIsAvailableDesc | 1. Unknown 2. Unknown | CString | Category: nonconst |
| ArticleType | GetIsPossibleDesc | 1. Unknown 2. Unknown | CString | Category: nonconst |
| ArticleType | GetIsVisibleDesc | 1. Unknown 2. Unknown | CString | Category: nonconst |
| ArticleType | GetName |  | CString | Category: nonconst |
| ArticleType | GetNameNoFormatting |  | CString | Category: nonconst |
| ArticleType | GetNameNoIcon |  | CString | Category: nonconst |
| ArticleType | GetNumInputs |  | int32 | Category: nonconst |
| ArticleType | GetRelationsEffectDesc |  | CString | Category: nonconst |
| ArticleType | GetRelationsImprovementMax |  | int32 | Category: nonconst |
| ArticleType | GetRelationsImprovementMin |  | int32 | Category: nonconst |
| ArticleType | GetTooltipTag |  | CString | Category: nonconst |
| ArticleType | HasFlag | 1. CString | bool |  |
| ArticleType | HasKind | 1. Unknown | bool |  |
| ArticleType | HasType | 1. CString | bool |  |
| ArticleType | IsAvailable | 1. Country 2. Country | bool |  |
| ArticleType | IsPossible | 1. Unknown 2. Unknown | bool |  |
| ArticleType | IsVisible | 1. Country 2. Country | bool |  |
| ArticleType | RequiresAnyInput |  | bool |  |
| ArticleType | Self |  | ArticleType |  |
| Attribute | AccessSelf |  | Attribute | Category: const |
| Attribute | GetName |  | CString | Category: nonconst |
| Attribute | GetValue |  | float | Category: nonconst |
| Attribute | OnValueChanged |  | void |  |
| Attribute | Self |  | Attribute |  |
| AvailabilityEntry | AccessSelf |  | AvailabilityEntry | Category: const |
| AvailabilityEntry | GetAvailabilityString |  | CUTF8String | Category: nonconst |
| AvailabilityEntry | Self |  | AvailabilityEntry |  |
| Battle | AccessAttackerBattleParticipant |  | BattleParticipant | Category: const |
| Battle | AccessAttackerModifier |  | Modifier | Category: const |
| Battle | AccessBorrowedAttackerBuildingEntries |  | Unknown | Category: const |
| Battle | AccessBorrowedDefenderBuildingEntries |  | Unknown | Category: const |
| Battle | AccessCommandedAttackerBuildingEntries |  | Unknown | Category: const |
| Battle | AccessCommandedDefenderBuildingEntries |  | Unknown | Category: const |
| Battle | AccessCountryTrendPairs |  | Unknown | Category: const |
| Battle | AccessDefenderBattleParticipant |  | BattleParticipant | Category: const |
| Battle | AccessDefenderModifier |  | Modifier | Category: const |
| Battle | AccessManpowerTrendPairs |  | Unknown | Category: const |
| Battle | AccessSelf |  | Battle | Category: const |
| Battle | CalcCurrentAttackerManpower |  | int64 |  |
| Battle | CalcCurrentAttackerMorale |  | CFixedPoint |  |
| Battle | CalcCurrentDefenderManpower |  | int64 |  |
| Battle | CalcCurrentDefenderMorale |  | CFixedPoint |  |
| Battle | CalcPushOfWar |  | CFixedPoint |  |
| Battle | EndedInconclusively |  | bool |  |
| Battle | GetAttacker |  | Country | Category: nonconst |
| Battle | GetAttackerBorrowedFormations |  | Unknown | Category: nonconst |
| Battle | GetAttackerCondition |  | BattleCondition | Category: nonconst |
| Battle | GetAttackerConditionUpdateDesc |  | CString | Category: nonconst |
| Battle | GetAttackerEndCE |  | CFixedPoint | Category: nonconst |
| Battle | GetAttackerLostUnits |  | int32 | Category: nonconst |
| Battle | GetAttackerModifier |  | Modifier | Category: nonconst |
| Battle | GetAttackerNumWantedUnitsDesc |  | CString | Category: nonconst |
| Battle | GetAttackerStartCE |  | CFixedPoint | Category: nonconst |
| Battle | GetAttackerStatistics |  | Unknown | Category: nonconst |
| Battle | GetAttackerStillFightingTrend |  | DataTrend | Category: nonconst |
| Battle | GetAttackerTotalDead |  | CFixedPoint | Category: nonconst |
| Battle | GetAttackerTotalDemoralized |  | CFixedPoint | Category: nonconst |
| Battle | GetAttackerTotalWounded |  | CFixedPoint | Category: nonconst |
| Battle | GetAttackerTrend |  | DataTrend | Category: nonconst |
| Battle | GetAttackerUnderCommandBreakdown |  | CString | Category: nonconst |
| Battle | GetBattleIcon |  | Unknown | Category: nonconst |
| Battle | GetBattleUnitFormation | 1. MilitaryFormation | BattleMilitaryFormation | Category: nonconst |
| Battle | GetBattleUnitTypeList | 1. MilitaryFormation | Unknown | Category: nonconst |
| Battle | GetCapturingCountry |  | Country | Category: nonconst |
| Battle | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| Battle | GetDateDesc |  | CString | Category: nonconst |
| Battle | GetDefender |  | Country | Category: nonconst |
| Battle | GetDefenderBorrowedFormations |  | Unknown | Category: nonconst |
| Battle | GetDefenderCondition |  | BattleCondition | Category: nonconst |
| Battle | GetDefenderConditionUpdateDesc |  | CString | Category: nonconst |
| Battle | GetDefenderEndCE |  | CFixedPoint | Category: nonconst |
| Battle | GetDefenderLostUnits |  | int32 | Category: nonconst |
| Battle | GetDefenderModifier |  | Modifier | Category: nonconst |
| Battle | GetDefenderNumWantedUnitsDesc |  | CString | Category: nonconst |
| Battle | GetDefenderStartCE |  | CFixedPoint | Category: nonconst |
| Battle | GetDefenderStatistics |  | Unknown | Category: nonconst |
| Battle | GetDefenderStillFightingTrend |  | DataTrend | Category: nonconst |
| Battle | GetDefenderTotalDead |  | CFixedPoint | Category: nonconst |
| Battle | GetDefenderTotalDemoralized |  | CFixedPoint | Category: nonconst |
| Battle | GetDefenderTotalWounded |  | CFixedPoint | Category: nonconst |
| Battle | GetDefenderTrend |  | DataTrend | Category: nonconst |
| Battle | GetDefenderUnderCommandBreakdown |  | CString | Category: nonconst |
| Battle | GetDefenseRaw |  | CFixedPoint | Category: nonconst |
| Battle | GetDurationInDaysRaw |  | int32 | Category: nonconst |
| Battle | GetEndDate |  | CString | Category: nonconst |
| Battle | GetEndingAttackerMorale |  | CFixedPoint | Category: nonconst |
| Battle | GetEndingDefenderMorale |  | CFixedPoint | Category: nonconst |
| Battle | GetFinalAttackerManpower |  | int64 | Category: nonconst |
| Battle | GetFinalAttackerUnits |  | int32 | Category: nonconst |
| Battle | GetFinalDefenderManpower |  | int64 | Category: nonconst |
| Battle | GetFinalDefenderUnits |  | int32 | Category: nonconst |
| Battle | GetInitialAttackerMorale |  | CFixedPoint | Category: nonconst |
| Battle | GetInitialDefenderMorale |  | CFixedPoint | Category: nonconst |
| Battle | GetLocationName |  | CString | Category: nonconst |
| Battle | GetLoosingProvincesCountry |  | Country | Category: nonconst |
| Battle | GetLoser |  | Country | Category: nonconst |
| Battle | GetMaxNumberInBattleTrends |  | CFixedPoint | Category: nonconst |
| Battle | GetMaxNumberInManpowerTrends |  | CFixedPoint | Category: nonconst |
| Battle | GetName |  | CString | Category: nonconst |
| Battle | GetNumCapturedProvinces |  | int32 | Category: nonconst |
| Battle | GetOccupationWon |  | CString | Category: nonconst |
| Battle | GetOccupationWonRaw |  | CFixedPoint | Category: nonconst |
| Battle | GetOffenseRaw |  | CFixedPoint | Category: nonconst |
| Battle | GetProvince |  | Province | Category: nonconst |
| Battle | GetStartDate |  | CString | Category: nonconst |
| Battle | GetStartingAttackerManpower |  | int64 | Category: nonconst |
| Battle | GetStartingAttackerUnits |  | int32 | Category: nonconst |
| Battle | GetStartingDefenderManpower |  | int64 | Category: nonconst |
| Battle | GetStartingDefenderUnits |  | int32 | Category: nonconst |
| Battle | GetState |  | State | Category: nonconst |
| Battle | GetStatusString |  | CString | Category: nonconst |
| Battle | GetTerrain |  | CString | Category: nonconst |
| Battle | GetTerrainDesc |  | CString | Category: nonconst |
| Battle | GetTooltipTag |  | CString | Category: nonconst |
| Battle | GetUnitIcon |  | CString | Category: nonconst |
| Battle | GetVictoryScore |  | CString | Category: nonconst |
| Battle | GetVictoryScoreRaw |  | CFixedPoint | Category: nonconst |
| Battle | GetWinner |  | Country | Category: nonconst |
| Battle | HasEnded |  | bool |  |
| Battle | HasInvasion |  | bool |  |
| Battle | IsActive |  | bool |  |
| Battle | IsBeingHighlighted |  | bool |  |
| Battle | IsBeingTutorialHighlighted |  | bool |  |
| Battle | IsLandBattle |  | bool |  |
| Battle | IsLeadCountry | 1. Country | bool |  |
| Battle | IsLoser | 1. Country | bool |  |
| Battle | IsManpowerTrendsEmpty |  | bool |  |
| Battle | IsNavalBattle |  | bool |  |
| Battle | IsNavalInvasionLandingBattle |  | bool |  |
| Battle | IsOnLoserSide | 1. Country | bool |  |
| Battle | IsOnWinnerSide | 1. Country | bool |  |
| Battle | IsRelevantForCountry | 1. Country | bool |  |
| Battle | IsValid |  | bool |  |
| Battle | IsWinner | 1. Country | bool |  |
| Battle | IsZoomingToMapMarkerPosition |  | bool |  |
| Battle | LostOrCapturedProvinces | 1. Unknown | bool |  |
| Battle | MakeScope |  | Scope |  |
| Battle | Self |  | Battle |  |
| Battle | ZoomToMapMarkerPosition |  | void |  |
| BattleBuildingEntry | AccessSelf |  | BattleBuildingEntry | Category: const |
| BattleBuildingEntry | GetAverageMorale |  | CFixedPoint | Category: nonconst |
| BattleBuildingEntry | GetBuilding |  | Building | Category: nonconst |
| BattleBuildingEntry | GetUnits |  | Unknown | Category: nonconst |
| BattleBuildingEntry | IsExpanded |  | bool |  |
| BattleBuildingEntry | IsUnderDirectCommand |  | bool |  |
| BattleBuildingEntry | Self |  | BattleBuildingEntry |  |
| BattleBuildingEntry | ToggleExpand |  | void |  |
| BattleCondition | AccessSelf |  | BattleCondition | Category: const |
| BattleCondition | GetDesc |  | CString | Category: nonconst |
| BattleCondition | GetModifierDesc |  | CString | Category: nonconst |
| BattleCondition | GetName |  | CString | Category: nonconst |
| BattleCondition | GetNameNoFormatting |  | CString | Category: nonconst |
| BattleCondition | GetTexture |  | Unknown | Category: nonconst |
| BattleCondition | GetTooltipTag |  | CString | Category: nonconst |
| BattleCondition | IsValid |  | bool |  |
| BattleCondition | Self |  | BattleCondition |  |
| BattleMarker | AccessSelf |  | BattleMarker | Category: const |
| BattleMarker | GetBattle |  | Battle | Category: nonconst |
| BattleMarker | GetPosition |  | CVector2f | Category: nonconst |
| BattleMarker | Self |  | BattleMarker |  |
| BattleMilitaryFormation | AccessSelf |  | BattleMilitaryFormation | Category: const |
| BattleMilitaryFormation | GetAverageDefense |  | CFixedPoint | Category: nonconst |
| BattleMilitaryFormation | GetAverageOffense |  | CFixedPoint | Category: nonconst |
| BattleMilitaryFormation | GetCurrentManpowerFromFormation |  | int64 | Category: nonconst |
| BattleMilitaryFormation | GetCurrentMorale |  | CFixedPoint | Category: nonconst |
| BattleMilitaryFormation | GetMaxManpowerFromFormation |  | int64 | Category: nonconst |
| BattleMilitaryFormation | GetTotalUnitsFromFormation |  | int32 | Category: nonconst |
| BattleMilitaryFormation | Self |  | BattleMilitaryFormation |  |
| BattlePanel | AccessSelf |  | BattlePanel | Category: const |
| BattlePanel | GetBattle |  | Battle | Category: nonconst |
| BattlePanel | Self |  | BattlePanel |  |
| BattleParticipant | AccessCountry |  | Country | Category: const |
| BattleParticipant | AccessSelf |  | BattleParticipant | Category: const |
| BattleParticipant | GetCountry |  | Country | Category: nonconst |
| BattleParticipant | GetMorale |  | CFixedPoint | Category: nonconst |
| BattleParticipant | GetNumCombatUnits |  | int32 | Category: nonconst |
| BattleParticipant | Self |  | BattleParticipant |  |
| BattleParticipantsPanel | AccessCombatUnits |  | Unknown | Category: const |
| BattleParticipantsPanel | AccessSelf |  | BattleParticipantsPanel | Category: const |
| BattleParticipantsPanel | GetBattle |  | Battle | Category: nonconst |
| BattleParticipantsPanel | GetHeaderText |  | CString | Category: nonconst |
| BattleParticipantsPanel | Self |  | BattleParticipantsPanel |  |
| BattleSide | AccessSelf |  | BattleSide | Category: const |
| BattleSide | GetIconFrame |  | int32 | Category: nonconst |
| BattleSide | GetNumUnits |  | int32 | Category: nonconst |
| BattleSide | GetNumUnitsAtEndOfBattleDesc |  | CString | Category: nonconst |
| BattleSide | GetNumUnitsAtStartOfBattleDesc |  | CString | Category: nonconst |
| BattleSide | GetNumUnitsDesc |  | CString | Category: nonconst |
| BattleSide | GetOutcome |  | CString | Category: nonconst |
| BattleSide | GetStatus |  | CString | Category: nonconst |
| BattleSide | GetStatusDesc |  | CString | Category: nonconst |
| BattleSide | HasEscaped |  | bool |  |
| BattleSide | HasLost |  | bool |  |
| BattleSide | HasWon |  | bool |  |
| BattleSide | IsAttacker |  | bool |  |
| BattleSide | IsDefender |  | bool |  |
| BattleSide | Self |  | BattleSide |  |
| BattleUnitType | AccessSelf |  | BattleUnitType | Category: const |
| BattleUnitType | GetAverageMorale |  | CFixedPoint | Category: nonconst |
| BattleUnitType | GetCombatUnitType |  | CombatUnitType | Category: nonconst |
| BattleUnitType | GetIDString | 1. Battle 2. MilitaryFormation | CString | Category: nonconst |
| BattleUnitType | GetNumberOfConscriptUnits |  | int32 | Category: nonconst |
| BattleUnitType | GetNumberOfRegularUnits |  | int32 | Category: nonconst |
| BattleUnitType | GetUnits |  | Unknown | Category: nonconst |
| BattleUnitType | Self |  | BattleUnitType |  |
| BlurThreshold | AccessSelf |  | BlurThreshold | Category: const |
| BlurThreshold | GetValue |  | float | Category: nonconst |
| BlurThreshold | Self |  | BlurThreshold |  |
| BlurThreshold | SetValue |  | void |  |
| BlurThreshold | SetValueStr |  | void |  |
| BrushBool | AccessSelf |  | BrushBool | Category: const |
| BrushBool | Get |  | bool |  |
| BrushBool | Self |  | BrushBool |  |
| BrushBool | Set |  | void |  |
| BrushBool | Toggle |  | void |  |
| BrushFloat | AccessSelf |  | BrushFloat | Category: const |
| BrushFloat | DecreaseBySmallStep |  | void |  |
| BrushFloat | DecreaseByStep |  | void |  |
| BrushFloat | IncreaseBySmallStep |  | void |  |
| BrushFloat | IncreaseByStep |  | void |  |
| BrushFloat | Max |  | float |  |
| BrushFloat | Min |  | float |  |
| BrushFloat | ScaledValue | 1. Unknown | float |  |
| BrushFloat | Self |  | BrushFloat |  |
| BrushFloat | SetMax |  | void |  |
| BrushFloat | SetMin |  | void |  |
| BrushFloat | SetScaledValue | 1. Unknown | void |  |
| BrushFloat | SetStepSize |  | void |  |
| BrushFloat | SetValue |  | void |  |
| BrushFloat | SetValueArg | 1. Unknown | void |  |
| BrushFloat | SetValueFromWidget | 1. PdxGuiWidget | void |  |
| BrushFloat | SmallStepSize |  | float |  |
| BrushFloat | StepSize |  | float |  |
| BrushFloat | Value |  | float |  |
| BrushSettings | AccessSelf |  | BrushSettings | Category: const |
| BrushSettings | Amount |  | BrushFloat |  |
| BrushSettings | Diameter |  | float |  |
| BrushSettings | Hardness |  | BrushFloat |  |
| BrushSettings | PixelSnap |  | BrushBool |  |
| BrushSettings | Radius |  | BrushFloat |  |
| BrushSettings | Self |  | BrushSettings |  |
| BrushSettings | SetAmount |  | void |  |
| BrushSettings | SetDiameter |  | void |  |
| BrushSettings | SetHardness |  | void |  |
| BrushSettingsDropdown | AccessSelf |  | BrushSettingsDropdown | Category: const |
| BrushSettingsDropdown | GetBrushDiameter |  | float | Category: nonconst |
| BrushSettingsDropdown | Self |  | BrushSettingsDropdown |  |
| BrushSettingsDropdown | Settings |  | BrushSettings |  |
| BrushSettingsDropdown | Thumbnail |  | Unknown |  |
| BrushSettingsDropdown | Toggle |  | void |  |
| BrushSettingsGlobal | AccessSelf |  | BrushSettingsGlobal | Category: const |
| BrushSettingsGlobal | GetDisplayAmountNames |  | Unknown | Category: nonconst |
| BrushSettingsGlobal | IsDisplayAmountActive | 1. Unknown | bool |  |
| BrushSettingsGlobal | Self |  | BrushSettingsGlobal |  |
| BrushSettingsGlobal | SetIsDisplayAmountFromString | 1. Unknown | void |  |
| BudgetPanel | AccessSelf |  | BudgetPanel | Category: const |
| BudgetPanel | AccessTaxableGoods |  | Unknown | Category: const |
| BudgetPanel | AccessTaxedGoods |  | Unknown | Category: const |
| BudgetPanel | CanTaxGoods |  | bool |  |
| BudgetPanel | Filter | 1. Unknown | void |  |
| BudgetPanel | GetFilters |  | Unknown | Category: nonconst |
| BudgetPanel | IsAddConsumptionTaxMenuOpen |  | bool |  |
| BudgetPanel | IsSelected | 1. Unknown | bool |  |
| BudgetPanel | Self |  | BudgetPanel |  |
| BudgetPanel | ToggleAddConsumptionTaxMenu | 1. Unknown | void |  |
| Building | AccessConsumedGoods |  | Unknown | Category: const |
| Building | AccessModifier |  | Modifier | Category: const |
| Building | AccessOwnerPopsList |  | PopList | Category: const |
| Building | AccessPopsList |  | PopList | Category: const |
| Building | AccessProducedGoods |  | Unknown | Category: const |
| Building | AccessProductionMethod | 1. ProductionMethodGroup | ProductionMethod | Category: const |
| Building | AccessProductionMethodGroups |  | Unknown | Category: const |
| Building | AccessSelf |  | Building | Category: const |
| Building | AccessShortageGoods |  | Unknown | Category: const |
| Building | AccessState |  | State | Category: const |
| Building | AccessStateRegion |  | StateRegion | Category: const |
| Building | CalcInfrastructureUsage |  | CFixedPoint |  |
| Building | CalcInputAvailabilityOutputMult |  | CFixedPoint |  |
| Building | CalcInputGoodsShortageTargetPenalty |  | CFixedPoint |  |
| Building | CalcInputGoodsShortageTargetPenaltyFromGoods | 1. Unknown | CFixedPoint |  |
| Building | CalcUrbanizationProvided |  | int32 |  |
| Building | CanBeAffectedByInputShortage | 1. ModifierEntry | bool |  |
| Building | CanBePrivatized |  | bool |  |
| Building | CancelConstruction |  | Command |  |
| Building | Downsize |  | Command |  |
| Building | GetAdjustHiringTargetDesc |  | CString | Category: nonconst |
| Building | GetAllEmployeesTransferDesc |  | CString | Category: nonconst |
| Building | GetAllFailedHiresDesc |  | CString | Category: nonconst |
| Building | GetArmyManpower |  | int64 | Category: nonconst |
| Building | GetArmyReadinessStatusDesc |  | CString | Category: nonconst |
| Building | GetAutoDownsizeTooltip |  | CString | Category: nonconst |
| Building | GetAutoExpandTooltip |  | CString | Category: nonconst |
| Building | GetAutoExpandTriggers |  | CString | Category: nonconst |
| Building | GetAverageAnnualEarningsPerEmployee |  | CFixedPoint | Category: nonconst |
| Building | GetAverageAnnualEarningsPerEmployeeFormatted |  | CString | Category: nonconst |
| Building | GetAverageAnnualWage |  | CFixedPoint | Category: nonconst |
| Building | GetAverageAnnualWageBreakdown |  | CString | Category: nonconst |
| Building | GetAverageAnnualWageBreakdownForPopType | 1. PopType | CString | Category: nonconst |
| Building | GetAverageAnnualWageForPopType | 1. PopType | CFixedPoint | Category: nonconst |
| Building | GetAverageAnnualWageForPopTypeDesc | 1. Unknown | CString | Category: nonconst |
| Building | GetAverageAnnualWageSubsidies |  | CFixedPoint | Category: nonconst |
| Building | GetAverageStandardOfLiving |  | CFixedPoint | Category: nonconst |
| Building | GetBalance |  | CFixedPoint | Category: nonconst |
| Building | GetBalanceDesc |  | CString | Category: nonconst |
| Building | GetBuildingAssets |  | Unknown | Category: nonconst |
| Building | GetBuildingGroupName |  | CString | Category: nonconst |
| Building | GetBuildingOwnerships |  | Unknown | Category: nonconst |
| Building | GetBuildingType |  | BuildingType | Category: nonconst |
| Building | GetCancelConstructionTooltip |  | CString | Category: nonconst |
| Building | GetCappedAssetsLong |  | Unknown | Category: nonconst |
| Building | GetCappedAssetsLongRest |  | Unknown | Category: nonconst |
| Building | GetCappedAssetsShort |  | Unknown | Category: nonconst |
| Building | GetCappedAssetsShortRest |  | Unknown | Category: nonconst |
| Building | GetCappedOwnersLong |  | Unknown | Category: nonconst |
| Building | GetCappedOwnersLongRest |  | Unknown | Category: nonconst |
| Building | GetCappedOwnersShort |  | Unknown | Category: nonconst |
| Building | GetCappedOwnersShortRest |  | Unknown | Category: nonconst |
| Building | GetCashReservesTrend |  | DataTrend | Category: nonconst |
| Building | GetCasualtiesDesc |  | CString | Category: nonconst |
| Building | GetChangeProductionMethodPopQualificationsWarningBreakdown | 1. ProductionMethod | CString | Category: nonconst |
| Building | GetCombatUnitCapacity |  | int32 | Category: nonconst |
| Building | GetCombatUnitCapacityDesc |  | CString | Category: nonconst |
| Building | GetCombatUnitProduction |  | CString | Category: nonconst |
| Building | GetCombatUnitProductionBreakdown |  | CString | Category: nonconst |
| Building | GetCombatUnitTypes |  | Unknown | Category: nonconst |
| Building | GetCombatUnits |  | Unknown | Category: nonconst |
| Building | GetCombatUnitsIcon |  | CString | Category: nonconst |
| Building | GetCombatUnitsInFormation | 1. MilitaryFormation | Unknown | Category: nonconst |
| Building | GetCompany |  | Company | Category: nonconst |
| Building | GetConstructionProgressPercentage |  | float | Category: nonconst |
| Building | GetConstructionRemainingWeeksDesc |  | CString | Category: nonconst |
| Building | GetConstructionSpeedPerWeek |  | CFixedPoint | Category: nonconst |
| Building | GetConstructionSpeedPerWeekDesc |  | CString | Category: nonconst |
| Building | GetConsumption | 1. Goods | CFixedPoint | Category: nonconst |
| Building | GetConsumptionDesc | 1. Goods | CString | Category: nonconst |
| Building | GetConsumptionValue | 1. Goods | CFixedPoint | Category: nonconst |
| Building | GetCurrentCashReserves |  | CFixedPoint | Category: nonconst |
| Building | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| Building | GetDebugTooltip |  | CString | Category: nonconst |
| Building | GetDefaultOutputGoods |  | Goods | Category: nonconst |
| Building | GetDownsizeTooltip |  | CString | Category: nonconst |
| Building | GetEarnings |  | CFixedPoint | Category: nonconst |
| Building | GetEarningsPerEmployeeTrend |  | DataTrend | Category: nonconst |
| Building | GetEmployeeCap |  | int64 | Category: nonconst |
| Building | GetEmployeesBreakdown |  | CString | Category: nonconst |
| Building | GetEmployeesTransferDesc | 1. PopType | CString | Category: nonconst |
| Building | GetEmploymentPercentage |  | CFixedPoint | Category: nonconst |
| Building | GetEmploymentTooltip |  | CString | Category: nonconst |
| Building | GetEstablishmentDate |  | CString | Category: nonconst |
| Building | GetExpansionLevel |  | int32 | Category: nonconst |
| Building | GetExpansionLevelBreakdown |  | CString | Category: nonconst |
| Building | GetExpansionLevelBreakdownDesc |  | CString | Category: nonconst |
| Building | GetExpansionLevelDesc |  | CString | Category: nonconst |
| Building | GetExpansionLevelsInQueue |  | int32 | Category: nonconst |
| Building | GetFailedHiresDesc | 1. PopType | CString | Category: nonconst |
| Building | GetGoodsShortageListDesc |  | CString | Category: nonconst |
| Building | GetGovernmentExpenses |  | CFixedPoint | Category: nonconst |
| Building | GetGovernmentExpensesDesc |  | CString | Category: nonconst |
| Building | GetHQ |  | Hq | Category: nonconst |
| Building | GetID |  | int32 | Category: nonconst |
| Building | GetIDString |  | CString | Category: nonconst |
| Building | GetIcon |  | Unknown | Category: nonconst |
| Building | GetInfrastructureUsageBreakdown |  | CString | Category: nonconst |
| Building | GetInputMult |  | CFixedPoint | Category: nonconst |
| Building | GetInputMultDesc |  | CString | Category: nonconst |
| Building | GetInputOutputTooltip |  | CString | Category: nonconst |
| Building | GetInputShortagePenalty |  | CFixedPoint | Category: nonconst |
| Building | GetLastIncome |  | CFixedPoint | Category: nonconst |
| Building | GetLastMaterialExpenses |  | CFixedPoint | Category: nonconst |
| Building | GetLastMaterialExpensesDesc |  | CString | Category: nonconst |
| Building | GetLastRevenue |  | CFixedPoint | Category: nonconst |
| Building | GetLastRevenueBalancedSI | 1. CFixedPoint 2. int32 | CString | Category: nonconst |
| Building | GetLastSlaveBasket |  | int32 | Category: nonconst |
| Building | GetLastSlaveBasketDesc |  | CString | Category: nonconst |
| Building | GetLastSlaveUpkeep |  | CFixedPoint | Category: nonconst |
| Building | GetLastSlaveUpkeepDesc |  | CString | Category: nonconst |
| Building | GetLastWagesExpenses |  | CFixedPoint | Category: nonconst |
| Building | GetLastWagesExpensesDesc |  | CString | Category: nonconst |
| Building | GetManpowerCapacity |  | int64 | Category: nonconst |
| Building | GetMaxCashReserves |  | CFixedPoint | Category: nonconst |
| Building | GetMaxPopSize | 1. PopType | int64 | Category: nonconst |
| Building | GetMaxPopSizeDesc | 1. PopType | CString | Category: nonconst |
| Building | GetMilitaryFormations |  | Unknown | Category: nonconst |
| Building | GetMobilizationRatio |  | CFixedPoint | Category: nonconst |
| Building | GetModifier |  | Modifier | Category: nonconst |
| Building | GetName |  | CString | Category: nonconst |
| Building | GetNameNoFormatting |  | CString | Category: nonconst |
| Building | GetNationalizeBuildingNoCompensationDesc | 1. Unknown | CString | Category: nonconst |
| Building | GetNationalizeBuildingWithCompensationDesc | 1. Unknown | CString | Category: nonconst |
| Building | GetNavyManpower |  | int64 | Category: nonconst |
| Building | GetNoLevelsCanBeNationalizedDesc |  | CString | Category: nonconst |
| Building | GetNoOfEmployed |  | int64 | Category: nonconst |
| Building | GetNotHiringReasonDesc |  | CString | Category: nonconst |
| Building | GetNumActiveUnitsProvidedToFormation | 1. MilitaryFormation | int32 | Category: nonconst |
| Building | GetNumEmployeesOfType | 1. PopType | int64 | Category: nonconst |
| Building | GetNumLevelsCanBeNationalized |  | int32 | Category: nonconst |
| Building | GetNumOwnedLevels |  | int32 | Category: nonconst |
| Building | GetNumUnitsOfCombatUnitType | 1. CombatUnitType | int32 | Category: nonconst |
| Building | GetNumUnitsOfCombatUnitTypeProvidedToFormation | 1. Unknown 2. Unknown | int32 | Category: nonconst |
| Building | GetNumberOfCombatUnits |  | int32 | Category: nonconst |
| Building | GetNumberOfFullyMobilizedBattalions |  | int32 | Category: nonconst |
| Building | GetOutputPercentage | 1. Goods | CFixedPoint | Category: nonconst |
| Building | GetOutputRatio |  | CFixedPoint | Category: nonconst |
| Building | GetOwner |  | Country | Category: nonconst |
| Building | GetPopTypeFullyReplacedDesc | 1. PopType | CString | Category: nonconst |
| Building | GetPopTypeReplacementDesc | 1. PopType | CString | Category: nonconst |
| Building | GetPrivatizationTooltip |  | CString | Category: nonconst |
| Building | GetProducedModifiers |  | Modifier | Category: nonconst |
| Building | GetProduction | 1. Goods | CFixedPoint | Category: nonconst |
| Building | GetProductionDesc | 1. Goods | CString | Category: nonconst |
| Building | GetProductionMethodGroup | 1. Unknown | ProductionMethodGroup | Category: nonconst |
| Building | GetProductionValue | 1. Goods | CFixedPoint | Category: nonconst |
| Building | GetProfitability |  | CString | Category: nonconst |
| Building | GetProfitabilityCompareIcon |  | CString | Category: nonconst |
| Building | GetProfitabilityCompareIconInType |  | CString | Category: nonconst |
| Building | GetProfitabilityInType |  | CString | Category: nonconst |
| Building | GetProfitabilityInTypeTrend |  | DataTrend | Category: nonconst |
| Building | GetProfitabilityRank |  | int32 | Category: nonconst |
| Building | GetProfitabilityRankInType |  | int32 | Category: nonconst |
| Building | GetProfitabilityTrend |  | DataTrend | Category: nonconst |
| Building | GetQueueConstructionPopQualificationsWarningBreakdown |  | CString | Category: nonconst |
| Building | GetQueueConstructionTooltip |  | CString | Category: nonconst |
| Building | GetQueueMilitaryConstructionTooltip | 1. MilitaryFormation 2. CombatUnitType | CString | Category: nonconst |
| Building | GetResetProductionMethodsToStandardTooltip |  | CString | Category: nonconst |
| Building | GetSamplePops |  | Unknown | Category: nonconst |
| Building | GetSizeTooltip |  | CString | Category: nonconst |
| Building | GetState |  | State | Category: nonconst |
| Building | GetStateRegion |  | StateRegion | Category: nonconst |
| Building | GetStatusDesc |  | CString | Category: nonconst |
| Building | GetSubsidies |  | CFixedPoint | Category: nonconst |
| Building | GetSubsidiesDesc |  | CString | Category: nonconst |
| Building | GetSubsidizeTooltip |  | CString | Category: nonconst |
| Building | GetSubsistenceOutput |  | CFixedPoint | Category: nonconst |
| Building | GetSubsistenceOutputDesc |  | CString | Category: nonconst |
| Building | GetSubventions |  | CFixedPoint | Category: nonconst |
| Building | GetTariffsPaid |  | CFixedPoint | Category: nonconst |
| Building | GetTaxationRevenue |  | CFixedPoint | Category: nonconst |
| Building | GetTaxationRevenueTooltip |  | CString | Category: nonconst |
| Building | GetThroughputBonusCurrent |  | CFixedPoint | Category: nonconst |
| Building | GetThroughputBonusTarget |  | CFixedPoint | Category: nonconst |
| Building | GetThroughputDesc |  | CString | Category: nonconst |
| Building | GetTimedModifiers |  | Unknown | Category: nonconst |
| Building | GetTogglePrivatizationTooltip |  | CString | Category: nonconst |
| Building | GetTooltip |  | CString | Category: nonconst |
| Building | GetTooltipTag |  | CString | Category: nonconst |
| Building | GetTotalConsumptionValue |  | CFixedPoint | Category: nonconst |
| Building | GetTotalExpenses |  | CFixedPoint | Category: nonconst |
| Building | GetTotalExpensesBalancedSI | 1. CFixedPoint 2. int32 | CString | Category: nonconst |
| Building | GetTotalProductionValue |  | CFixedPoint | Category: nonconst |
| Building | GetTradeRevenue |  | CFixedPoint | Category: nonconst |
| Building | GetTrainingRate |  | int64 | Category: nonconst |
| Building | GetTrainingRateDesc |  | CString | Category: nonconst |
| Building | GetUnitsProvidedToFormationBreakdown | 1. MilitaryFormation | CString | Category: nonconst |
| Building | GetUrbanizationProvidedBreakdown |  | CString | Category: nonconst |
| Building | GetWageRate |  | CFixedPoint | Category: nonconst |
| Building | GetWorstGoodsShortage |  | Goods | Category: nonconst |
| Building | HasAnyInputShortage |  | bool |  |
| Building | HasConstructionQueued |  | bool |  |
| Building | HasFailedHires |  | bool |  |
| Building | HasGovernmentConstructionQueued |  | bool |  |
| Building | HasInputGoods |  | bool |  |
| Building | HasInputShortage | 1. Goods | bool |  |
| Building | HasMaximumInputShortage | 1. Goods | bool |  |
| Building | HasOutputGoods |  | bool |  |
| Building | HasPrivateConstructionQueued |  | bool |  |
| Building | HasReachedLevelCap |  | bool |  |
| Building | HasSlaves |  | bool |  |
| Building | HasTradeRevenue |  | bool |  |
| Building | IsActive |  | bool |  |
| Building | IsActiveStr |  | CString |  |
| Building | IsAutoDownsizing |  | bool |  |
| Building | IsAutoExpanding |  | bool |  |
| Building | IsBeingHighlighted |  | bool |  |
| Building | IsBeingTutorialHighlighted |  | bool |  |
| Building | IsBuildingType | 1. BuildingType | bool |  |
| Building | IsCappedBuilding |  | bool |  |
| Building | IsCurrentlyUnderConstruction |  | bool |  |
| Building | IsDownsizeable |  | bool |  |
| Building | IsExpandable |  | bool |  |
| Building | IsGovernmentFunded |  | bool |  |
| Building | IsMilitaryBuilding |  | bool |  |
| Building | IsOwner | 1. Country | bool |  |
| Building | IsPinnedInOutliner |  | bool |  |
| Building | IsPotentialQueueConstruction |  | bool |  |
| Building | IsRoleFullyReplacedByAnotherPopType | 1. PopType | bool |  |
| Building | IsSelfFunded |  | bool |  |
| Building | IsSubsidized |  | bool |  |
| Building | IsSubsistenceBuilding |  | bool |  |
| Building | IsUrbanCenter |  | bool |  |
| Building | IsValid |  | bool |  |
| Building | MakeScope |  | Scope |  |
| Building | NationalizeBuildingLevels | 1. int32 | Command |  |
| Building | ProvidesUrbanization |  | bool |  |
| Building | QueueConstruction |  | Command |  |
| Building | QueueMilitaryConstruction | 1. MilitaryFormation 2. CombatUnitType | Command |  |
| Building | ResetProductionMethodsToStandard |  | Command |  |
| Building | Self |  | Building |  |
| Building | ShouldShowAsHiring |  | bool |  |
| Building | ShouldShowAsUnableToHire |  | bool |  |
| Building | ShouldShowAsUnwillingToHire |  | bool |  |
| Building | ShowLevelAndMaxLevel |  | bool |  |
| Building | SortBuildings | 1. CString | void |  |
| Building | ToggleAutoExpand |  | Command |  |
| Building | ToggleAutoExpandOff |  | Command |  |
| Building | ToggleAutoExpandOn |  | Command |  |
| Building | TogglePinInOutliner |  | void |  |
| Building | TogglePrivatization |  | Command |  |
| Building | ToggleSubsidies |  | Command |  |
| Building | ToggleSubsidiesOff |  | Command |  |
| Building | ToggleSubsidiesOn |  | Command |  |
| Building | UsesInfrastructure |  | bool |  |
| BuildingBrowserBuildingTypeItem | AccessSelf |  | BuildingBrowserBuildingTypeItem | Category: const |
| BuildingBrowserBuildingTypeItem | CanShowNationalizeBuildingsWindow |  | bool |  |
| BuildingBrowserBuildingTypeItem | GetAllSameProductionMethodTexture | 1. ProductionMethodGroup | Unknown | Category: nonconst |
| BuildingBrowserBuildingTypeItem | GetBuildingType |  | BuildingType | Category: nonconst |
| BuildingBrowserBuildingTypeItem | GetBuildings |  | Unknown | Category: nonconst |
| BuildingBrowserBuildingTypeItem | GetBuildingsInCountry |  | Unknown | Category: nonconst |
| BuildingBrowserBuildingTypeItem | GetBulkChangeTooltip | 1. ProductionMethodGroup | CString | Category: nonconst |
| BuildingBrowserBuildingTypeItem | GetFilteredAverageProductivity |  | CFixedPoint | Category: nonconst |
| BuildingBrowserBuildingTypeItem | GetNationalizeBuildingsButtonTooltip |  | CString | Category: nonconst |
| BuildingBrowserBuildingTypeItem | GetTotalFilteredCashReserves |  | CFixedPoint | Category: nonconst |
| BuildingBrowserBuildingTypeItem | GetTotalFilteredEmployed |  | int64 | Category: nonconst |
| BuildingBrowserBuildingTypeItem | GetTotalFilteredEmployeeCap |  | int64 | Category: nonconst |
| BuildingBrowserBuildingTypeItem | GetTotalFilteredMaxCashReserves |  | CFixedPoint | Category: nonconst |
| BuildingBrowserBuildingTypeItem | GetTotalFilteredSizeDesc |  | CString | Category: nonconst |
| BuildingBrowserBuildingTypeItem | HasAllAutoExpand |  | bool |  |
| BuildingBrowserBuildingTypeItem | HasAllDisallowedPrivatization |  | bool |  |
| BuildingBrowserBuildingTypeItem | HasAllForcedPrivatization |  | bool |  |
| BuildingBrowserBuildingTypeItem | HasAllNoAutoExpand |  | bool |  |
| BuildingBrowserBuildingTypeItem | HasAllNoPrivatization |  | bool |  |
| BuildingBrowserBuildingTypeItem | HasAllNoSubsidies |  | bool |  |
| BuildingBrowserBuildingTypeItem | HasAllPrivatization |  | bool |  |
| BuildingBrowserBuildingTypeItem | HasAllSameProductionMethod | 1. ProductionMethodGroup | bool |  |
| BuildingBrowserBuildingTypeItem | HasAllSubsidies |  | bool |  |
| BuildingBrowserBuildingTypeItem | HasMixedAutoExpand |  | bool |  |
| BuildingBrowserBuildingTypeItem | HasMixedPrivatization |  | bool |  |
| BuildingBrowserBuildingTypeItem | HasMixedSubsidies |  | bool |  |
| BuildingBrowserBuildingTypeItem | RemoveAllPrivatization |  | Command |  |
| BuildingBrowserBuildingTypeItem | Self |  | BuildingBrowserBuildingTypeItem |  |
| BuildingBrowserBuildingTypeItem | ShowNationalizeBuildingsWindow |  | void |  |
| BuildingBrowserBuildingTypeItem | ToggleAllAutoExpand |  | Command |  |
| BuildingBrowserBuildingTypeItem | ToggleAllPrivatization |  | Command |  |
| BuildingBrowserBuildingTypeItem | ToggleAllSubsidies |  | Command |  |
| BuildingBrowserBuildingTypeItem | ToggleSwitchProductionMethodMenu | 1. ProductionMethodGroup 2. PdxGuiWidget | void |  |
| BuildingBrowserPanel | AccessSelf |  | BuildingBrowserPanel | Category: const |
| BuildingBrowserPanel | BuildingTypeFilterAreAllTypesShown |  | bool |  |
| BuildingBrowserPanel | BuildingTypeFilterAreNoTypesShown |  | bool |  |
| BuildingBrowserPanel | BuildingTypeFilterHideAllTypes |  | void |  |
| BuildingBrowserPanel | BuildingTypeFilterIsTypeShown | 1. BuildingType | bool |  |
| BuildingBrowserPanel | BuildingTypeFilterShowAllTypes |  | void |  |
| BuildingBrowserPanel | BuildingTypeFilterToggleShown | 1. BuildingType | void |  |
| BuildingBrowserPanel | CanShowNationalizeBuildingsWindow |  | bool |  |
| BuildingBrowserPanel | Filter | 1. Unknown | void |  |
| BuildingBrowserPanel | GetAllBuildingTypes |  | Unknown | Category: nonconst |
| BuildingBrowserPanel | GetAllStates |  | Unknown | Category: nonconst |
| BuildingBrowserPanel | GetBuildingBrowserBuildingTypeItems |  | Unknown | Category: nonconst |
| BuildingBrowserPanel | GetCountry |  | Country | Category: nonconst |
| BuildingBrowserPanel | GetFilteredBuildingTypes |  | Unknown | Category: nonconst |
| BuildingBrowserPanel | GetNationalizeBuildingsButtonTooltip |  | CString | Category: nonconst |
| BuildingBrowserPanel | GetPotentialDevelopmentBuildingTypes |  | Unknown | Category: nonconst |
| BuildingBrowserPanel | GetPotentialRuralBuildingTypes |  | Unknown | Category: nonconst |
| BuildingBrowserPanel | GetPotentialUrbanBuildingTypes |  | Unknown | Category: nonconst |
| BuildingBrowserPanel | GetSortedAndFilteredBuildings |  | Unknown | Category: nonconst |
| BuildingBrowserPanel | IsAnyFilterActive |  | bool |  |
| BuildingBrowserPanel | IsBuildingTypeExpanded | 1. BuildingType | bool |  |
| BuildingBrowserPanel | IsFilterNo | 1. CString | bool |  |
| BuildingBrowserPanel | IsFilterYes | 1. CString | bool |  |
| BuildingBrowserPanel | IsFiltered | 1. CString | bool |  |
| BuildingBrowserPanel | IsGroupedByBuildingType |  | bool |  |
| BuildingBrowserPanel | ResetAllFilters |  | void |  |
| BuildingBrowserPanel | Self |  | BuildingBrowserPanel |  |
| BuildingBrowserPanel | SetFilterMode | 1. CString 2. CString | void |  |
| BuildingBrowserPanel | ShowNationalizeBuildingsWindow |  | void |  |
| BuildingBrowserPanel | Sort | 1. CString | void |  |
| BuildingBrowserPanel | StateFilterAreNoStatesShown |  | bool |  |
| BuildingBrowserPanel | StateFilterHideAllStates |  | void |  |
| BuildingBrowserPanel | StateFilterIsStateShown | 1. Unknown | bool |  |
| BuildingBrowserPanel | StateFilterShowAllStates |  | void |  |
| BuildingBrowserPanel | StateFilterToggleShown | 1. Unknown | void |  |
| BuildingBrowserPanel | StateFiltersAreAllStatesShown |  | bool |  |
| BuildingBrowserPanel | ToggleExpandBuildingType | 1. BuildingType | void |  |
| BuildingBrowserPanel | ToggleGroupedByBuildingType |  | void |  |
| BuildingDetailsPanel | AccessBuilding |  | Building | Category: const |
| BuildingDetailsPanel | AccessSelf |  | BuildingDetailsPanel | Category: const |
| BuildingDetailsPanel | AccessState |  | State | Category: const |
| BuildingDetailsPanel | GetBuilding |  | Building | Category: nonconst |
| BuildingDetailsPanel | GetState |  | State | Category: nonconst |
| BuildingDetailsPanel | Self |  | BuildingDetailsPanel |  |
| BuildingGroup | AccessSelf |  | BuildingGroup | Category: const |
| BuildingGroup | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| BuildingGroup | GetName |  | CString | Category: nonconst |
| BuildingGroup | GetNameNoFormatting |  | CString | Category: nonconst |
| BuildingGroup | GetTooltipTag |  | CString | Category: nonconst |
| BuildingGroup | IsBuildingGroup | 1. BuildingGroup | bool |  |
| BuildingGroup | MakeScope |  | Scope |  |
| BuildingGroup | Self |  | BuildingGroup |  |
| BuildingMarker | AccessBuilding |  | Building | Category: const |
| BuildingMarker | AccessSelf |  | BuildingMarker | Category: const |
| BuildingMarker | GetBuilding |  | Building | Category: nonconst |
| BuildingMarker | IsOpenInBuildingPanel |  | bool |  |
| BuildingMarker | Self |  | BuildingMarker |  |
| BuildingOwnership | AccessSelf |  | BuildingOwnership | Category: const |
| BuildingOwnership | GetDividendToOwner |  | CFixedPoint | Category: nonconst |
| BuildingOwnership | GetLevel |  | int32 | Category: nonconst |
| BuildingOwnership | GetOwnedBuilding |  | Building | Category: nonconst |
| BuildingOwnership | GetOwnerBuilding |  | Building | Category: nonconst |
| BuildingOwnership | GetOwnerCountry |  | Country | Category: nonconst |
| BuildingOwnership | GetOwnershipRatio |  | CFixedPoint | Category: nonconst |
| BuildingOwnership | GetOwnershipTypeColor |  | CVector4f | Category: nonconst |
| BuildingOwnership | GetPropertyRatio |  | CFixedPoint | Category: nonconst |
| BuildingOwnership | GetTooltipTag |  | CString | Category: nonconst |
| BuildingOwnership | IsCountryOwned |  | bool |  |
| BuildingOwnership | Self |  | BuildingOwnership |  |
| BuildingPotentialMarker | AccessSelf |  | BuildingPotentialMarker | Category: const |
| BuildingPotentialMarker | AccessState |  | State | Category: const |
| BuildingPotentialMarker | GetBuildingType |  | BuildingType | Category: nonconst |
| BuildingPotentialMarker | GetPosition |  | CVector2f | Category: nonconst |
| BuildingPotentialMarker | GetState |  | State | Category: nonconst |
| BuildingPotentialMarker | Self |  | BuildingPotentialMarker |  |
| BuildingProductionMethodsEntry | AccessSelf |  | BuildingProductionMethodsEntry | Category: const |
| BuildingProductionMethodsEntry | GetAllSameProductionMethod | 1. Unknown | ProductionMethod | Category: nonconst |
| BuildingProductionMethodsEntry | GetAllSameProductionMethodTexture | 1. ProductionMethodGroup | Unknown | Category: nonconst |
| BuildingProductionMethodsEntry | GetBuildingType |  | BuildingType | Category: nonconst |
| BuildingProductionMethodsEntry | GetBuildings |  | Unknown | Category: nonconst |
| BuildingProductionMethodsEntry | GetBulkChangeTooltip | 1. ProductionMethodGroup | CString | Category: nonconst |
| BuildingProductionMethodsEntry | HasAllAutoExpand |  | bool |  |
| BuildingProductionMethodsEntry | HasAllNoAutoExpand |  | bool |  |
| BuildingProductionMethodsEntry | HasAllNoSubsidies |  | bool |  |
| BuildingProductionMethodsEntry | HasAllSameProductionMethod | 1. ProductionMethodGroup | bool |  |
| BuildingProductionMethodsEntry | HasAllSubsidies |  | bool |  |
| BuildingProductionMethodsEntry | HasMixedAutoExpand |  | bool |  |
| BuildingProductionMethodsEntry | HasMixedSubsidies |  | bool |  |
| BuildingProductionMethodsEntry | IsExpanded |  | bool |  |
| BuildingProductionMethodsEntry | Self |  | BuildingProductionMethodsEntry |  |
| BuildingProductionMethodsEntry | ToggleAllAutoExpand |  | Command |  |
| BuildingProductionMethodsEntry | ToggleAllSubsidies |  | Command |  |
| BuildingProductionMethodsEntry | ToggleExpand |  | void |  |
| BuildingType | AccessProductionMethodGroups |  | Unknown | Category: const |
| BuildingType | AccessSelf |  | BuildingType | Category: const |
| BuildingType | ActivateExpansionLens |  | void |  |
| BuildingType | CanBeAutoExpanded |  | bool |  |
| BuildingType | CanBeSubsidized |  | bool |  |
| BuildingType | CanSwitchOwner |  | bool |  |
| BuildingType | CreatedByUrbanization |  | bool |  |
| BuildingType | FiredPopsBecomeRadical |  | bool |  |
| BuildingType | GetBackground |  | Unknown | Category: nonconst |
| BuildingType | GetBuildingGroup |  | BuildingGroup | Category: nonconst |
| BuildingType | GetBuildingGroupName |  | CString | Category: nonconst |
| BuildingType | GetBuildingKindDesc | 1. Country | CString | Category: nonconst |
| BuildingType | GetBuildingModifier |  | Modifier | Category: nonconst |
| BuildingType | GetConstructionCosts |  | CString | Category: nonconst |
| BuildingType | GetCountryModifier |  | Modifier | Category: nonconst |
| BuildingType | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| BuildingType | GetDiscoveredResourceName |  | CString | Category: nonconst |
| BuildingType | GetExpansionMissingQualificationsDesc | 1. Unknown 2. Unknown | CString | Category: nonconst |
| BuildingType | GetExpansionProductivityDesc | 1. Unknown 2. Unknown | CString | Category: nonconst |
| BuildingType | GetExpansionProductivityImpact | 1. Building 2. State | CFixedPoint | Category: nonconst |
| BuildingType | GetExpansionProductivityImpactDesc | 1. Building 2. State | CString | Category: nonconst |
| BuildingType | GetExpansionRevenueImpact | 1. Building 2. State | CFixedPoint | Category: nonconst |
| BuildingType | GetExpansionRevenueImpactDesc | 1. Building 2. State | CString | Category: nonconst |
| BuildingType | GetID |  | int32 | Category: nonconst |
| BuildingType | GetIDString |  | CString | Category: nonconst |
| BuildingType | GetIcon |  | Unknown | Category: nonconst |
| BuildingType | GetKey |  | CString | Category: nonconst |
| BuildingType | GetModifierEffectsAsString |  | CString | Category: nonconst |
| BuildingType | GetMonopolyCompanyIn | 1. Unknown | Company | Category: nonconst |
| BuildingType | GetMonopolyCountryIn | 1. Unknown | Country | Category: nonconst |
| BuildingType | GetName |  | CString | Category: nonconst |
| BuildingType | GetNameNoFormatting |  | CString | Category: nonconst |
| BuildingType | GetNumAvailableStatesForBuilding |  | int32 | Category: nonconst |
| BuildingType | GetNumLevelsInCountryFormatted | 1. Country | CString | Category: nonconst |
| BuildingType | GetNumLevelsInCountryRaw | 1. Country | int32 | Category: nonconst |
| BuildingType | GetNumLevelsOwnedByCompanyFormatted | 1. Company | CString | Category: nonconst |
| BuildingType | GetNumLevelsOwnedByCompanyRaw | 1. Company | int32 | Category: nonconst |
| BuildingType | GetProductivitySpanDesc | 1. Country | CString | Category: nonconst |
| BuildingType | GetRequiredConstruction |  | CFixedPoint | Category: nonconst |
| BuildingType | GetResetProductionMethodsToStandardTooltip |  | CString | Category: nonconst |
| BuildingType | GetStandardProductionMethodDesc | 1. Unknown | CString | Category: nonconst |
| BuildingType | GetStateModifier |  | Modifier | Category: nonconst |
| BuildingType | GetTabName |  | CString | Category: nonconst |
| BuildingType | GetToggleMonopolyEffectDesc |  | CString | Category: nonconst |
| BuildingType | GetTooltip |  | CString | Category: nonconst |
| BuildingType | GetTooltipForBuilding | 1. Building | CString | Category: nonconst |
| BuildingType | GetTooltipForState | 1. Unknown | CString | Category: nonconst |
| BuildingType | GetTooltipTag |  | CString | Category: nonconst |
| BuildingType | GetUrbanizationProvidedBreakdown |  | CString | Category: nonconst |
| BuildingType | HasCompanyMonopoly | 1. Unknown | bool |  |
| BuildingType | HasCountryMonopoly |  | bool |  |
| BuildingType | HasInputGoods |  | bool |  |
| BuildingType | HasMonopoly |  | bool |  |
| BuildingType | HasOutputGoods |  | bool |  |
| BuildingType | HasRequiredPrinciplesInCountry | 1. Country | bool |  |
| BuildingType | HasRequiredTechnologiesInCountry | 1. Country | bool |  |
| BuildingType | IsAlwaysSelfOwning |  | bool |  |
| BuildingType | IsBeingHighlighted |  | bool |  |
| BuildingType | IsBeingTutorialHighlighted |  | bool |  |
| BuildingType | IsBuildable |  | bool |  |
| BuildingType | IsBuildableInAnyState | 1. Country | bool |  |
| BuildingType | IsCappedBuilding |  | bool |  |
| BuildingType | IsDownsizeable |  | bool |  |
| BuildingType | IsExpandable |  | bool |  |
| BuildingType | IsGovernmentFunded |  | bool |  |
| BuildingType | IsMilitaryBuilding |  | bool |  |
| BuildingType | IsRural |  | bool |  |
| BuildingType | IsSelfFunded |  | bool |  |
| BuildingType | IsSubsistenceBuilding |  | bool |  |
| BuildingType | IsUnique |  | bool |  |
| BuildingType | IsUrban |  | bool |  |
| BuildingType | IsUsingArableLand |  | bool |  |
| BuildingType | IssDevelopment |  | bool |  |
| BuildingType | MakeScope |  | Scope |  |
| BuildingType | ProvidesUrbanization |  | bool |  |
| BuildingType | RecruitsCombatUnits |  | bool |  |
| BuildingType | ResetProductionMethodsToStandard |  | Command |  |
| BuildingType | Self |  | BuildingType |  |
| BuildingType | ToggleMonopoly |  | Command |  |
| BuildingType | UsesInfrastructure |  | bool |  |
| CFixedPoint | AccessSelf |  | CFixedPoint | Category: const |
| CFixedPoint | GetFixedPoint |  | Unknown | Category: nonconst |
| CFixedPoint | Self |  | CFixedPoint |  |
| CPdxEnumValue | AccessSelf |  | CPdxEnumValue | Category: const |
| CPdxEnumValue | AreBundleValuesMixed |  | bool |  |
| CPdxEnumValue | GetDropdownEntries |  | Unknown | Category: nonconst |
| CPdxEnumValue | GetDropdownValueIndex |  | CVector2i | Category: nonconst |
| CPdxEnumValue | GetValueString |  | CString | Category: nonconst |
| CPdxEnumValue | Self |  | CPdxEnumValue |  |
| CPdxEnumValue | SetDropdownValueIndex |  | void |  |
| CPdxFloatRect | AccessSelf |  | CPdxFloatRect | Category: const |
| CPdxFloatRect | GetRect |  | Unknown | Category: nonconst |
| CPdxFloatRect | Self |  | CPdxFloatRect |  |
| CPdxInputBindingSetting | AccessSelf |  | CPdxInputBindingSetting | Category: const |
| CPdxInputBindingSetting | Self |  | CPdxInputBindingSetting |  |
| CPdxIntRect | AccessSelf |  | CPdxIntRect | Category: const |
| CPdxIntRect | GetRect |  | Unknown | Category: nonconst |
| CPdxIntRect | Self |  | CPdxIntRect |  |
| CString | AccessSelf |  | CString | Category: const |
| CString | GetString |  | Unknown | Category: nonconst |
| CString | Self |  | CString |  |
| CUTF8String | AccessSelf |  | CUTF8String | Category: const |
| CUTF8String | GetString |  | Unknown | Category: nonconst |
| CUTF8String | Self |  | CUTF8String |  |
| CVector2f | AccessSelf |  | CVector2f | Category: const |
| CVector2f | GetVector |  | Unknown | Category: nonconst |
| CVector2f | Self |  | CVector2f |  |
| CVector2i | AccessSelf |  | CVector2i | Category: const |
| CVector2i | GetVector |  | Unknown | Category: nonconst |
| CVector2i | Self |  | CVector2i |  |
| CVector3f | AccessSelf |  | CVector3f | Category: const |
| CVector3f | GetVector |  | Unknown | Category: nonconst |
| CVector3f | Self |  | CVector3f |  |
| CVector3i | AccessSelf |  | CVector3i | Category: const |
| CVector3i | GetVector |  | Unknown | Category: nonconst |
| CVector3i | Self |  | CVector3i |  |
| CVector4f | AccessSelf |  | CVector4f | Category: const |
| CVector4f | GetVector |  | Unknown | Category: nonconst |
| CVector4f | Self |  | CVector4f |  |
| CVector4i | AccessSelf |  | CVector4i | Category: const |
| CVector4i | GetVector |  | Unknown | Category: nonconst |
| CVector4i | Self |  | CVector4i |  |
| CanalType | AccessSelf |  | CanalType | Category: const |
| CanalType | GetBuildingType |  | BuildingType | Category: nonconst |
| CanalType | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| CanalType | GetName |  | CString | Category: nonconst |
| CanalType | GetNameNoFormatting |  | CString | Category: nonconst |
| CanalType | GetStateRegion |  | StateRegion | Category: nonconst |
| CanalType | GetTexture |  | Unknown | Category: nonconst |
| CanalType | GetTooltipTag |  | CString | Category: nonconst |
| CanalType | MakeScope |  | Scope |  |
| CanalType | Self |  | CanalType |  |
| ChangeLawPanel | AccessSelf |  | ChangeLawPanel | Category: const |
| ChangeLawPanel | GetLawAlternatives |  | Unknown | Category: nonconst |
| ChangeLawPanel | GetLawGroup |  | LawGroup | Category: nonconst |
| ChangeLawPanel | GetSelectedLaw |  | Law | Category: nonconst |
| ChangeLawPanel | Self |  | ChangeLawPanel |  |
| ChangeProductionMethodMenuItem | AccessMethod |  | ProductionMethod | Category: const |
| ChangeProductionMethodMenuItem | AccessSelf |  | ChangeProductionMethodMenuItem | Category: const |
| ChangeProductionMethodMenuItem | Execute |  | void |  |
| ChangeProductionMethodMenuItem | GetProductionMethodGroup |  | ProductionMethodGroup | Category: nonconst |
| ChangeProductionMethodMenuItem | GetTooltip | 1. Country | CString | Category: nonconst |
| ChangeProductionMethodMenuItem | IsActive |  | bool |  |
| ChangeProductionMethodMenuItem | IsValid |  | bool |  |
| ChangeProductionMethodMenuItem | OnMenuItemHovered |  | void |  |
| ChangeProductionMethodMenuItem | Self |  | ChangeProductionMethodMenuItem |  |
| ChangeProductionMethodsMenuItems | AccessItems |  | Unknown | Category: const |
| ChangeProductionMethodsMenuItems | AccessSelf |  | ChangeProductionMethodsMenuItems | Category: const |
| ChangeProductionMethodsMenuItems | Self |  | ChangeProductionMethodsMenuItems |  |
| Character | AccessBattle |  | Battle | Category: const |
| Character | AccessCulture |  | Culture | Category: const |
| Character | AccessInterestGroup |  | InterestGroup | Category: const |
| Character | AccessOrders |  | Unknown | Category: const |
| Character | AccessPossibleSpecialOrders |  | Unknown | Category: const |
| Character | AccessReligion |  | Religion | Category: const |
| Character | AccessSelf |  | Character | Category: const |
| Character | AccessTraits |  | Unknown | Category: const |
| Character | AccessUnavailableOrders |  | Unknown | Category: const |
| Character | GetAcceptanceStatus |  | AcceptanceStatus | Category: nonconst |
| Character | GetAcceptanceStatusIn | 1. Country | AcceptanceStatus | Category: nonconst |
| Character | GetAcceptanceValue |  | int32 | Category: nonconst |
| Character | GetAcceptanceValueDesc |  | CString | Category: nonconst |
| Character | GetAcceptanceValueDescIn | 1. Country | CString | Category: nonconst |
| Character | GetAcceptanceValueIn | 1. Country | int32 | Category: nonconst |
| Character | GetAge |  | int32 | Category: nonconst |
| Character | GetAgitatorSpawnedNotificationText |  | CString | Category: nonconst |
| Character | GetAllRoleNames |  | CString | Category: nonconst |
| Character | GetAnimatedPortrait | 1. PortraitEnvironment 2. PortraitCamera 3. PortraitAnimation 4. CVector2f | Unknown | Category: nonconst |
| Character | GetAssignedState |  | State | Category: nonconst |
| Character | GetBattle |  | Battle | Category: nonconst |
| Character | GetBirthday |  | CString | Category: nonconst |
| Character | GetCombatUnitsTypeIcon |  | CString | Category: nonconst |
| Character | GetCommandLimit |  | CString | Category: nonconst |
| Character | GetCommandLimitDesc |  | CString | Category: nonconst |
| Character | GetCommandLimitRaw |  | int32 | Category: nonconst |
| Character | GetCommanderDetails |  | CString | Category: nonconst |
| Character | GetCommanderRank |  | CommanderRank | Category: nonconst |
| Character | GetCountry |  | Country | Category: nonconst |
| Character | GetCulture |  | Culture | Category: nonconst |
| Character | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| Character | GetDebugDesc |  | CString | Category: nonconst |
| Character | GetFirstName |  | CString | Category: nonconst |
| Character | GetFirstNameNoFormatting |  | CString | Category: nonconst |
| Character | GetFirstNamePossessive |  | CString | Category: nonconst |
| Character | GetFront |  | Front | Category: nonconst |
| Character | GetFullName |  | CString | Category: nonconst |
| Character | GetFullNameNoFormatting |  | CString | Category: nonconst |
| Character | GetFullNamePossessive |  | CString | Category: nonconst |
| Character | GetFullNameWithTitle |  | CString | Category: nonconst |
| Character | GetFullNameWithTitleNoFormatting |  | CString | Category: nonconst |
| Character | GetFullNameWithTitlePossessive |  | CString | Category: nonconst |
| Character | GetGender |  | CString | Category: nonconst |
| Character | GetGenderOpposite |  | CString | Category: nonconst |
| Character | GetHerHim |  | CString | Category: nonconst |
| Character | GetHerHimOpposite |  | CString | Category: nonconst |
| Character | GetHerHis |  | CString | Category: nonconst |
| Character | GetHerHisOpposite |  | CString | Category: nonconst |
| Character | GetHerselfHimself |  | CString | Category: nonconst |
| Character | GetHerselfHimselfOpposite |  | CString | Category: nonconst |
| Character | GetHistoricalUrl |  | CString | Category: nonconst |
| Character | GetHomeCountry |  | Country | Category: nonconst |
| Character | GetHomeCountryDefinition |  | CountryDefinition | Category: nonconst |
| Character | GetID |  | int32 | Category: nonconst |
| Character | GetIDString |  | CString | Category: nonconst |
| Character | GetIdeology |  | Ideology | Category: nonconst |
| Character | GetInfoTooltip |  | CString | Category: nonconst |
| Character | GetInteraction | 1. Unknown | CharacterInteraction | Category: nonconst |
| Character | GetInteractions |  | Unknown | Category: nonconst |
| Character | GetInterestGroup |  | InterestGroup | Category: nonconst |
| Character | GetInvasion |  | Invasion | Category: nonconst |
| Character | GetLastName |  | CString | Category: nonconst |
| Character | GetLastNameNoFormatting |  | CString | Category: nonconst |
| Character | GetLastNamePossessive |  | CString | Category: nonconst |
| Character | GetMilitaryFormation |  | MilitaryFormation | Category: nonconst |
| Character | GetNextCommanderRank |  | CommanderRank | Category: nonconst |
| Character | GetNextCommanderRankBenefits |  | CString | Category: nonconst |
| Character | GetNextOrderType |  | CommanderOrderType | Category: nonconst |
| Character | GetNumUnitsThatWouldBeSplitOff |  | int32 | Category: nonconst |
| Character | GetOrderType |  | CommanderOrderType | Category: nonconst |
| Character | GetPoliticalMovement |  | PoliticalMovement | Category: nonconst |
| Character | GetPopularity |  | CFixedPoint | Category: nonconst |
| Character | GetPopularityDesc |  | CString | Category: nonconst |
| Character | GetPortrait | 1. PortraitEnvironment 2. PortraitCamera 3. PortraitAnimation 4. CVector2f | Unknown | Category: nonconst |
| Character | GetPrimaryRoleName |  | CString | Category: nonconst |
| Character | GetPrimaryRoleTitle |  | CString | Category: nonconst |
| Character | GetPromoteCommand |  | Command | Category: nonconst |
| Character | GetRankName |  | CString | Category: nonconst |
| Character | GetRankNameFor | 1. CommanderRank | CString | Category: nonconst |
| Character | GetRankTitle |  | CString | Category: nonconst |
| Character | GetRankTitleFor | 1. CommanderRank | CString | Category: nonconst |
| Character | GetRecruitCommand | 1. MilitaryFormation | Command | Category: nonconst |
| Character | GetReligion |  | Religion | Category: nonconst |
| Character | GetRepairingTexture |  | Unknown | Category: nonconst |
| Character | GetSheHe |  | CString | Category: nonconst |
| Character | GetSheHeOpposite |  | CString | Category: nonconst |
| Character | GetStrengthPointsIcon |  | CString | Category: nonconst |
| Character | GetTimedModifiers |  | Unknown | Category: nonconst |
| Character | GetTooltipTag |  | CString | Category: nonconst |
| Character | GetTraitsDesc |  | CString | Category: nonconst |
| Character | GetWomanMan |  | CString | Category: nonconst |
| Character | GetWomanManOpposite |  | CString | Category: nonconst |
| Character | HasAdvancingOrder |  | bool |  |
| Character | HasInvasionPlan |  | bool |  |
| Character | HasMilitaryFormation |  | bool |  |
| Character | HasOrder | 1. Unknown | bool |  |
| Character | HasUnavailableAdvanceOrders |  | bool |  |
| Character | HasUnavailableDefendOrders |  | bool |  |
| Character | IsAdmiral |  | bool |  |
| Character | IsAgitator |  | bool |  |
| Character | IsAtFront |  | bool |  |
| Character | IsAttackingInBattle |  | bool |  |
| Character | IsBeingHighlighted |  | bool |  |
| Character | IsBeingTutorialHighlighted |  | bool |  |
| Character | IsBusy |  | bool |  |
| Character | IsCommander |  | bool |  |
| Character | IsDefeated |  | bool |  |
| Character | IsDefendingInBattle |  | bool |  |
| Character | IsExecutive |  | bool |  |
| Character | IsFemale |  | bool |  |
| Character | IsGeneral |  | bool |  |
| Character | IsHeir |  | bool |  |
| Character | IsHistorical |  | bool |  |
| Character | IsIGLeader |  | bool |  |
| Character | IsInBattle |  | bool |  |
| Character | IsInExilePool |  | bool |  |
| Character | IsMaxRank |  | bool |  |
| Character | IsOffer |  | bool |  |
| Character | IsPinnedInOutliner |  | bool |  |
| Character | IsPolitician |  | bool |  |
| Character | IsRetired |  | bool |  |
| Character | IsRuler |  | bool |  |
| Character | IsValid |  | bool |  |
| Character | IsZoomingToOrderTarget |  | bool |  |
| Character | MakeScope |  | Scope |  |
| Character | OpenHistoricalUrl |  | void |  |
| Character | PredictMovementToJoin | 1. Unknown | PoliticalMovement |  |
| Character | PredictMovementTypeToStart | 1. Unknown | PoliticalMovementType |  |
| Character | RecruitCharacter | 1. Unknown | void |  |
| Character | SelectOrder | 1. CommanderOrderType | Command |  |
| Character | Self |  | Character |  |
| Character | SplitIntoOwnFormation |  | Command |  |
| Character | TogglePinInOutliner |  | void |  |
| Character | WillJoinMovementIfInvited | 1. Country | bool |  |
| Character | WillStartMovementIfInvited | 1. Country | bool |  |
| Character | ZoomToLocation |  | void |  |
| Character | ZoomToOrderTarget |  | void |  |
| CharacterInteraction | AccessSelf |  | CharacterInteraction | Category: const |
| CharacterInteraction | ExecuteCommand | 1. Character | void |  |
| CharacterInteraction | GetClickSound |  | Unknown | Category: nonconst |
| CharacterInteraction | GetCommandDesc | 1. Character | CString | Category: nonconst |
| CharacterInteraction | GetCooldownDesc | 1. Character | CString | Category: nonconst |
| CharacterInteraction | GetCooldownDuration | 1. Character | CString | Category: nonconst |
| CharacterInteraction | GetCooldownRemaining | 1. Character | CString | Category: nonconst |
| CharacterInteraction | GetDesc |  | CString | Category: nonconst |
| CharacterInteraction | GetEffects | 1. Character | CString | Category: nonconst |
| CharacterInteraction | GetIcon |  | Unknown | Category: nonconst |
| CharacterInteraction | GetInfo |  | CString | Category: nonconst |
| CharacterInteraction | GetName |  | CString | Category: nonconst |
| CharacterInteraction | GetRequirements | 1. Character | CString | Category: nonconst |
| CharacterInteraction | GetTooltipTag |  | CString | Category: nonconst |
| CharacterInteraction | HasCooldown | 1. Unknown | bool |  |
| CharacterInteraction | HasIcon |  | bool |  |
| CharacterInteraction | IsCommandValid | 1. Character | bool |  |
| CharacterInteraction | IsOnCooldown | 1. Character | bool |  |
| CharacterInteraction | Self |  | CharacterInteraction |  |
| CharacterInteraction | ShouldShowRequirements |  | bool |  |
| CharacterTrait | AccessSelf |  | CharacterTrait | Category: const |
| CharacterTrait | AccessUnlockedOrders |  | Unknown | Category: const |
| CharacterTrait | GetDesc |  | CString | Category: nonconst |
| CharacterTrait | GetModifiers |  | CString | Category: nonconst |
| CharacterTrait | GetName |  | CString | Category: nonconst |
| CharacterTrait | GetNameNoFormatting |  | CString | Category: nonconst |
| CharacterTrait | GetTexture |  | Unknown | Category: nonconst |
| CharacterTrait | GetTooltipTag |  | CString | Category: nonconst |
| CharacterTrait | Self |  | CharacterTrait |  |
| Chat | AccessChatMessages |  | Unknown | Category: const |
| Chat | AccessSelf |  | Chat | Category: const |
| Chat | GetReceiver |  | Friend | Category: nonconst |
| Chat | GetReceiverName |  | CUTF8String | Category: nonconst |
| Chat | GetUnreadMessageCount |  | int32 | Category: nonconst |
| Chat | HasUnreadMessages |  | bool |  |
| Chat | IsRoomChat |  | bool |  |
| Chat | Self |  | Chat |  |
| ChatMessage | AccessSelf |  | ChatMessage | Category: const |
| ChatMessage | GetMessage |  | CUTF8String | Category: nonconst |
| ChatMessage | GetName |  | CUTF8String | Category: nonconst |
| ChatMessage | Self |  | ChatMessage |  |
| ChatNotificationMessage | AccessSelf |  | ChatNotificationMessage | Category: const |
| ChatNotificationMessage | ChatMessage |  | ChatMessage |  |
| ChatNotificationMessage | Kill |  | void |  |
| ChatNotificationMessage | Self |  | ChatNotificationMessage |  |
| ChatNotificationMessage | StartChat |  | void |  |
| ChatTab | AccessSelf |  | ChatTab | Category: const |
| ChatTab | Activate |  | void |  |
| ChatTab | Close |  | void |  |
| ChatTab | GetChat |  | Chat | Category: nonconst |
| ChatTab | GetChatTitle |  | CUTF8String | Category: nonconst |
| ChatTab | IsActive |  | bool |  |
| ChatTab | Self |  | ChatTab |  |
| ChatWindow | AccessChatTabs |  | Unknown | Category: const |
| ChatWindow | AccessSelf |  | ChatWindow | Category: const |
| ChatWindow | CanSendMessage |  | bool |  |
| ChatWindow | Hide |  | void |  |
| ChatWindow | Self |  | ChatWindow |  |
| ChatWindow | SendMessage |  | void |  |
| ChatWindow | ShouldBeShown |  | bool |  |
| ChatWindow | Show |  | void |  |
| ChildGenerator | AccessSelf |  | ChildGenerator | Category: const |
| ChildGenerator | GetGenerationItems |  | Unknown | Category: nonconst |
| ChildGenerator | GetRandomChildrenRatio |  | float | Category: nonconst |
| ChildGenerator | OnRandomizedRatioChanged |  | void |  |
| ChildGenerator | Regenerate |  | void |  |
| ChildGenerator | Self |  | ChildGenerator |  |
| ChildItem | AccessSelf |  | ChildItem | Category: const |
| ChildItem | CopyDnaToClipboard |  | void |  |
| ChildItem | GetDna |  | CString | Category: nonconst |
| ChildItem | GetDnaForTexture | 1. CString | CString | Category: nonconst |
| ChildItem | IsRandomized |  | bool |  |
| ChildItem | PasteDna |  | void |  |
| ChildItem | Self |  | ChildItem |  |
| Cities | AccessSelf |  | Cities | Category: const |
| Cities | ClearAll |  | void |  |
| Cities | GetCurrentBuildingCityTypeName |  | CString | Category: nonconst |
| Cities | GetCurrentBuildingLevel |  | int32 | Category: nonconst |
| Cities | GetCurrentBuildingTypeName |  | CString | Category: nonconst |
| Cities | GetMidRatio |  | float | Category: nonconst |
| Cities | GetMonumentsMode |  | CString | Category: nonconst |
| Cities | GetPoorRatio |  | float | Category: nonconst |
| Cities | GetRichRatio |  | float | Category: nonconst |
| Cities | IsAutoRefresh |  | bool |  |
| Cities | IsCurrentBuildingTypeValid |  | bool |  |
| Cities | IsCurrentBuildingUnderConstruction |  | bool |  |
| Cities | Random |  | void |  |
| Cities | Refresh |  | void |  |
| Cities | Self |  | Cities |  |
| Cities | SetAutoRefresh | 1. bool | void |  |
| Cities | SetCurrentBuildingLevel |  | void |  |
| Cities | SetCurrentBuildingLevelStr |  | void |  |
| Cities | SetCurrentBuildingUnderConstruction | 1. bool | void |  |
| Cities | SetMidRatio |  | void |  |
| Cities | SetMidRatioStr |  | void |  |
| Cities | SetPoorRatio |  | void |  |
| Cities | SetPoorRatioStr |  | void |  |
| Cities | SetRichRatio |  | void |  |
| Cities | SetRichRatioStr |  | void |  |
| CityMarker | AccessSelf |  | CityMarker | Category: const |
| CityMarker | GetCityName |  | CString | Category: nonconst |
| CityMarker | GetCountry |  | Country | Category: nonconst |
| CityMarker | GetState |  | State | Category: nonconst |
| CityMarker | IsCountryCapital |  | bool |  |
| CityMarker | IsRegionCapital |  | bool |  |
| CityMarker | Self |  | CityMarker |  |
| CivilWar | AccessInsurrectionaryIGs | 1. Country | Unknown | Category: const |
| CivilWar | AccessOriginCountry |  | Country | Category: const |
| CivilWar | AccessPoliticalMovement |  | PoliticalMovement | Category: const |
| CivilWar | AccessSelf |  | CivilWar | Category: const |
| CivilWar | AccessUprisingCountry |  | Country | Category: const |
| CivilWar | GetClockCheckpointDateString |  | CString | Category: nonconst |
| CivilWar | GetClockCheckpointRemainingWeeks |  | int32 | Category: nonconst |
| CivilWar | GetClockTime |  | CFixedPoint | Category: nonconst |
| CivilWar | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| CivilWar | GetLeadingInsurrectionaryIG |  | InterestGroup | Category: nonconst |
| CivilWar | GetMaxProgress |  | CFixedPoint | Category: nonconst |
| CivilWar | GetMaxProgressDesc |  | CString | Category: nonconst |
| CivilWar | GetName |  | CString | Category: nonconst |
| CivilWar | GetNumUprisingBattalions |  | int32 | Category: nonconst |
| CivilWar | GetNumUprisingFlotillas |  | int32 | Category: nonconst |
| CivilWar | GetNumUprisingPotentialConscripts |  | int32 | Category: nonconst |
| CivilWar | GetNumUprisingStates |  | int32 | Category: nonconst |
| CivilWar | GetOriginCountry |  | Country | Category: nonconst |
| CivilWar | GetPoliticalMovement |  | PoliticalMovement | Category: nonconst |
| CivilWar | GetProgress |  | CFixedPoint | Category: nonconst |
| CivilWar | GetProgressAtCheckpoint |  | CFixedPoint | Category: nonconst |
| CivilWar | GetProgressAtCheckpointDesc |  | CString | Category: nonconst |
| CivilWar | GetTooltipTag |  | CString | Category: nonconst |
| CivilWar | GetUprisingConscriptionRateDesc |  | CString | Category: nonconst |
| CivilWar | GetUprisingCountry |  | Country | Category: nonconst |
| CivilWar | GetUprisingNumUnitsDesc |  | CString | Category: nonconst |
| CivilWar | GetUprisingStatesString |  | CString | Category: nonconst |
| CivilWar | HasBrokenOut |  | bool |  |
| CivilWar | HasPoliticalMovement |  | bool |  |
| CivilWar | IsOriginCountry | 1. Unknown | bool |  |
| CivilWar | IsRevolution |  | bool |  |
| CivilWar | IsSecession |  | bool |  |
| CivilWar | IsUprisingCountry | 1. Unknown | bool |  |
| CivilWar | IsValid |  | bool |  |
| CivilWar | MakeScope |  | Scope |  |
| CivilWar | Self |  | CivilWar |  |
| CloudSaveData | AccessSelf |  | CloudSaveData | Category: const |
| CloudSaveData | AreCloudSavesAvailable |  | bool |  |
| CloudSaveData | GetCloudSaveTooltip |  | CString | Category: nonconst |
| CloudSaveData | OnCloudSaveClick |  | void |  |
| CloudSaveData | Self |  | CloudSaveData |  |
| CloudSaveData | ShouldSaveToCloud |  | bool |  |
| CoatOfArms | AccessSelf |  | CoatOfArms | Category: const |
| CoatOfArms | GetColor | 1. Unknown | CVector4f | Category: nonconst |
| CoatOfArms | GetFrame | 1. Unknown 2. Unknown | int32 | Category: nonconst |
| CoatOfArms | GetLargeFlagFrame |  | int32 | Category: nonconst |
| CoatOfArms | GetLargeFlagSlot |  | CVector4f | Category: nonconst |
| CoatOfArms | GetLargeFlagTexture |  | Unknown | Category: nonconst |
| CoatOfArms | GetLargePowerBlocCoaFrame |  | int32 | Category: nonconst |
| CoatOfArms | GetLargePowerBlocCoaSlot |  | CVector4f | Category: nonconst |
| CoatOfArms | GetLargePowerBlocCoaTexture |  | Unknown | Category: nonconst |
| CoatOfArms | GetMediumFlagFrame |  | int32 | Category: nonconst |
| CoatOfArms | GetMediumFlagSlot |  | CVector4f | Category: nonconst |
| CoatOfArms | GetMediumFlagTexture |  | Unknown | Category: nonconst |
| CoatOfArms | GetMediumPowerBlocCoaFrame |  | int32 | Category: nonconst |
| CoatOfArms | GetMediumPowerBlocCoaSlot |  | CVector4f | Category: nonconst |
| CoatOfArms | GetMediumPowerBlocCoaTexture |  | Unknown | Category: nonconst |
| CoatOfArms | GetSlot | 1. Unknown 2. Unknown | CVector4f | Category: nonconst |
| CoatOfArms | GetSmallFlagFrame |  | int32 | Category: nonconst |
| CoatOfArms | GetSmallFlagSlot |  | CVector4f | Category: nonconst |
| CoatOfArms | GetSmallFlagTexture |  | Unknown | Category: nonconst |
| CoatOfArms | GetSmallPowerBlocCoaFrame |  | int32 | Category: nonconst |
| CoatOfArms | GetSmallPowerBlocCoaSlot |  | CVector4f | Category: nonconst |
| CoatOfArms | GetSmallPowerBlocCoaTexture |  | Unknown | Category: nonconst |
| CoatOfArms | GetTexture | 1. Unknown 2. Unknown | Unknown | Category: nonconst |
| CoatOfArms | GetVeryLargePowerBlocCoaFrame |  | int32 | Category: nonconst |
| CoatOfArms | GetVeryLargePowerBlocCoaSlot |  | CVector4f | Category: nonconst |
| CoatOfArms | GetVeryLargePowerBlocCoaTexture |  | Unknown | Category: nonconst |
| CoatOfArms | GetVerySmallPowerBlocCoaFrame |  | int32 | Category: nonconst |
| CoatOfArms | GetVerySmallPowerBlocCoaSlot |  | CVector4f | Category: nonconst |
| CoatOfArms | GetVerySmallPowerBlocCoaTexture |  | Unknown | Category: nonconst |
| CoatOfArms | Self |  | CoatOfArms |  |
| CoatOfArmsPreviewWindow | AccessSelf |  | CoatOfArmsPreviewWindow | Category: const |
| CoatOfArmsPreviewWindow | Close |  | void |  |
| CoatOfArmsPreviewWindow | GetRandomFlagFrame | 1. uint32 | int32 | Category: nonconst |
| CoatOfArmsPreviewWindow | GetRandomFlagTexture | 1. uint32 | Unknown | Category: nonconst |
| CoatOfArmsPreviewWindow | RandomSeed |  | void |  |
| CoatOfArmsPreviewWindow | Self |  | CoatOfArmsPreviewWindow |  |
| CohesionLevel | AccessSelf |  | CohesionLevel | Category: const |
| CohesionLevel | GetBackground |  | Unknown | Category: nonconst |
| CohesionLevel | GetEffects |  | CString | Category: nonconst |
| CohesionLevel | GetLowerBound |  | CFixedPoint | Category: nonconst |
| CohesionLevel | GetName |  | CString | Category: nonconst |
| CohesionLevel | GetNameNoFormatting |  | CString | Category: nonconst |
| CohesionLevel | GetProgress | 1. Unknown | float | Category: nonconst |
| CohesionLevel | GetTooltipTag |  | CString | Category: nonconst |
| CohesionLevel | GetUpperBound |  | CFixedPoint | Category: nonconst |
| CohesionLevel | GetWidth |  | CFixedPoint | Category: nonconst |
| CohesionLevel | IsActive | 1. Unknown | bool |  |
| CohesionLevel | Self |  | CohesionLevel |  |
| ColonyMarker | AccessSelf |  | ColonyMarker | Category: const |
| ColonyMarker | AccessState |  | State | Category: const |
| ColonyMarker | GetPosition |  | CVector2f | Category: nonconst |
| ColonyMarker | GetState |  | State | Category: nonconst |
| ColonyMarker | Self |  | ColonyMarker |  |
| ColorPicker | AccessSelf |  | ColorPicker | Category: const |
| ColorPicker | GetColor |  | CVector4f | Category: nonconst |
| ColorPicker | GetColorSpace |  | Unknown | Category: nonconst |
| ColorPicker | Self |  | ColorPicker |  |
| CombatUnit | AccessSelf |  | CombatUnit | Category: const |
| CombatUnit | GetBattle |  | Battle | Category: nonconst |
| CombatUnit | GetBuilding |  | Building | Category: nonconst |
| CombatUnit | GetCasualtiesDesc |  | CString | Category: nonconst |
| CombatUnit | GetCountry |  | Country | Category: nonconst |
| CombatUnit | GetCulture |  | Culture | Category: nonconst |
| CombatUnit | GetCurrentExperienceTowardsNextLevel |  | CFixedPoint | Category: nonconst |
| CombatUnit | GetCurrentVeterancyLevel |  | int32 | Category: nonconst |
| CombatUnit | GetCurrentVeterancyLevelEffect |  | CString | Category: nonconst |
| CombatUnit | GetCurrentVeterancyLevelIcon |  | Unknown | Category: nonconst |
| CombatUnit | GetCurrentVeterancyLevelName |  | CString | Category: nonconst |
| CombatUnit | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| CombatUnit | GetDefenseBreakdown |  | CString | Category: nonconst |
| CombatUnit | GetDefenseFormatted |  | CString | Category: nonconst |
| CombatUnit | GetDefenseRaw |  | CFixedPoint | Category: nonconst |
| CombatUnit | GetDemoralized |  | int64 | Category: nonconst |
| CombatUnit | GetExperienceGainDescription |  | CString | Category: nonconst |
| CombatUnit | GetFront |  | Front | Category: nonconst |
| CombatUnit | GetIconString |  | CString | Category: nonconst |
| CombatUnit | GetIconTexture |  | Unknown | Category: nonconst |
| CombatUnit | GetManpowerFormatted |  | CString | Category: nonconst |
| CombatUnit | GetManpowerRaw |  | int64 | Category: nonconst |
| CombatUnit | GetManpowerTooltip |  | CString | Category: nonconst |
| CombatUnit | GetMaxManpower |  | int64 | Category: nonconst |
| CombatUnit | GetMilitaryFormation |  | MilitaryFormation | Category: nonconst |
| CombatUnit | GetMobilization |  | CFixedPoint | Category: nonconst |
| CombatUnit | GetMorale |  | CString | Category: nonconst |
| CombatUnit | GetMoraleGainDesc |  | CString | Category: nonconst |
| CombatUnit | GetMoraleModifierBreakdown |  | CString | Category: nonconst |
| CombatUnit | GetMoraleRaw |  | CFixedPoint | Category: nonconst |
| CombatUnit | GetMoraleTooltip |  | CString | Category: nonconst |
| CombatUnit | GetName |  | CString | Category: nonconst |
| CombatUnit | GetNeededExperienceForNextLevel |  | CFixedPoint | Category: nonconst |
| CombatUnit | GetOffenseBreakdown |  | CString | Category: nonconst |
| CombatUnit | GetOffenseFormatted |  | CString | Category: nonconst |
| CombatUnit | GetOffenseRaw |  | CFixedPoint | Category: nonconst |
| CombatUnit | GetPowerProjection |  | CFixedPoint | Category: nonconst |
| CombatUnit | GetTooltipTag |  | CString | Category: nonconst |
| CombatUnit | GetType |  | CString | Category: nonconst |
| CombatUnit | GetUnitType |  | CombatUnitType | Category: nonconst |
| CombatUnit | HasBattle |  | bool |  |
| CombatUnit | HasFront |  | bool |  |
| CombatUnit | IsArmyUnit |  | bool |  |
| CombatUnit | IsConscript |  | bool |  |
| CombatUnit | IsFullyMobilized |  | bool |  |
| CombatUnit | IsMobilizing |  | bool |  |
| CombatUnit | IsNavyUnit |  | bool |  |
| CombatUnit | IsValid |  | bool |  |
| CombatUnit | MakeScope |  | Scope |  |
| CombatUnit | Self |  | CombatUnit |  |
| CombatUnitGroup | AccessSelf |  | CombatUnitGroup | Category: const |
| CombatUnitGroup | GetDesc |  | CString | Category: nonconst |
| CombatUnitGroup | GetIDString |  | CString | Category: nonconst |
| CombatUnitGroup | GetName |  | CString | Category: nonconst |
| CombatUnitGroup | GetTooltipTag |  | CString | Category: nonconst |
| CombatUnitGroup | GetUIColor |  | CVector4f | Category: nonconst |
| CombatUnitGroup | Self |  | CombatUnitGroup |  |
| CombatUnitType | AccessSelf |  | CombatUnitType | Category: const |
| CombatUnitType | GetBasePowerProjection |  | CFixedPoint | Category: nonconst |
| CombatUnitType | GetBattleModifier |  | Modifier | Category: nonconst |
| CombatUnitType | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| CombatUnitType | GetDefaultTexture |  | Unknown | Category: nonconst |
| CombatUnitType | GetDesc |  | CString | Category: nonconst |
| CombatUnitType | GetFormationModifier |  | Modifier | Category: nonconst |
| CombatUnitType | GetGroup |  | CombatUnitGroup | Category: nonconst |
| CombatUnitType | GetIconString |  | CString | Category: nonconst |
| CombatUnitType | GetName |  | CString | Category: nonconst |
| CombatUnitType | GetNameNoFormatting |  | CString | Category: nonconst |
| CombatUnitType | GetNameWithCulture | 1. Culture | CString | Category: nonconst |
| CombatUnitType | GetRequirements |  | CString | Category: nonconst |
| CombatUnitType | GetTextureForCulture | 1. Culture | Unknown | Category: nonconst |
| CombatUnitType | GetTooltipTag |  | CString | Category: nonconst |
| CombatUnitType | GetUpkeepModifier |  | Modifier | Category: nonconst |
| CombatUnitType | IsValid |  | bool |  |
| CombatUnitType | MakeScope |  | Scope |  |
| CombatUnitType | Self |  | CombatUnitType |  |
| Command | AccessSelf |  | Command | Category: const |
| Command | Execute |  | void |  |
| Command | GetConfirmationDesc |  | CString | Category: nonconst |
| Command | GetDesc |  | CString | Category: nonconst |
| Command | IsPotential |  | bool |  |
| Command | IsRedundant |  | bool |  |
| Command | IsValid |  | bool |  |
| Command | Self |  | Command |  |
| Command | ShouldAskConfirmation |  | bool |  |
| CommanderOrderType | AccessSelf |  | CommanderOrderType | Category: const |
| CommanderOrderType | CanEscapeFromBattle |  | bool |  |
| CommanderOrderType | GetAltName | 1. CString | CString | Category: nonconst |
| CommanderOrderType | GetClickSound |  | Unknown | Category: nonconst |
| CommanderOrderType | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| CommanderOrderType | GetDesc |  | CString | Category: nonconst |
| CommanderOrderType | GetEscapePowerRatio |  | CFixedPoint | Category: nonconst |
| CommanderOrderType | GetModifier |  | Modifier | Category: nonconst |
| CommanderOrderType | GetName |  | CString | Category: nonconst |
| CommanderOrderType | GetNameNoFormatting |  | CString | Category: nonconst |
| CommanderOrderType | GetTexture |  | Unknown | Category: nonconst |
| CommanderOrderType | GetTooltipTag |  | CString | Category: nonconst |
| CommanderOrderType | HasAdvanceBehavior |  | bool |  |
| CommanderOrderType | IsBasicOrderType |  | bool |  |
| CommanderOrderType | IsRaidConvoys |  | bool |  |
| CommanderOrderType | IsStandBy |  | bool |  |
| CommanderOrderType | IsValid |  | bool |  |
| CommanderOrderType | MakeScope |  | Scope |  |
| CommanderOrderType | Self |  | CommanderOrderType |  |
| CommanderPanel | AccessCharacter |  | Character | Category: const |
| CommanderPanel | AccessSelf |  | CommanderPanel | Category: const |
| CommanderPanel | GetCharacter |  | Character | Category: nonconst |
| CommanderPanel | Self |  | CommanderPanel |  |
| CommanderRank | AccessSelf |  | CommanderRank | Category: const |
| CommanderRank | GetModifiers | 1. Character | CString | Category: nonconst |
| CommanderRank | GetName | 1. Character | CString | Category: nonconst |
| CommanderRank | GetTexture |  | Unknown | Category: nonconst |
| CommanderRank | GetTitle | 1. Unknown | CString | Category: nonconst |
| CommanderRank | GetTooltipTag |  | CString | Category: nonconst |
| CommanderRank | Self |  | CommanderRank |  |
| CompaniesPanel | AccessSelf |  | CompaniesPanel | Category: const |
| CompaniesPanel | GetCompanies |  | Unknown | Category: nonconst |
| CompaniesPanel | IsSorted | 1. Unknown | bool |  |
| CompaniesPanel | Self |  | CompaniesPanel |  |
| CompaniesPanel | Sort | 1. CString | void |  |
| Company | AccessCompanyType |  | CompanyType | Category: const |
| Company | AccessExecutive |  | Character | Category: const |
| Company | AccessSelf |  | Company | Category: const |
| Company | GetActiveCharters | 1. CompanyCharterType | Unknown | Category: nonconst |
| Company | GetAdditionalIndustryTypes |  | Unknown | Category: nonconst |
| Company | GetBuilding |  | Building | Category: nonconst |
| Company | GetBuildingTypeLevels | 1. BuildingType | int32 | Category: nonconst |
| Company | GetBuildingTypeSizeDescription | 1. BuildingType | CString | Category: nonconst |
| Company | GetBuildingTypes |  | Unknown | Category: nonconst |
| Company | GetBuildingTypesForTrends |  | Unknown | Category: nonconst |
| Company | GetBuildingTypesSizeDescription |  | CString | Category: nonconst |
| Company | GetColonies |  | Unknown | Category: nonconst |
| Company | GetCompanyType |  | CompanyType | Category: nonconst |
| Company | GetCountry |  | Country | Category: nonconst |
| Company | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| Company | GetEstablishmentDate |  | Date | Category: nonconst |
| Company | GetExecutive |  | Character | Category: nonconst |
| Company | GetFormattedProductivity |  | CString | Category: nonconst |
| Company | GetGlobalProductivityComparison |  | CFixedPoint | Category: nonconst |
| Company | GetHQProfitDescription |  | CString | Category: nonconst |
| Company | GetIsProducingPrestigeGoodsDesc |  | CString | Category: nonconst |
| Company | GetMonopoliesDesc |  | CString | Category: nonconst |
| Company | GetMonopolyBuildingTypes |  | Unknown | Category: nonconst |
| Company | GetName |  | CString | Category: nonconst |
| Company | GetNameFromPerspective | 1. Unknown | CString | Category: nonconst |
| Company | GetNameNoFormatting |  | CString | Category: nonconst |
| Company | GetNameNoIcon |  | CString | Category: nonconst |
| Company | GetNumEmployedBuildingLevels |  | int32 | Category: nonconst |
| Company | GetNumOwnedBuildingLevels |  | int32 | Category: nonconst |
| Company | GetOwnedCountries |  | Unknown | Category: nonconst |
| Company | GetOwnedTradeCenters |  | Unknown | Category: nonconst |
| Company | GetPrestigeGoods |  | Unknown | Category: nonconst |
| Company | GetProducedPrestigeGoodsDesc |  | CString | Category: nonconst |
| Company | GetProductivity |  | CFixedPoint | Category: nonconst |
| Company | GetProductivityTrend |  | DataTrend | Category: nonconst |
| Company | GetProfit |  | CFixedPoint | Category: nonconst |
| Company | GetProfitTrend |  | DataTrend | Category: nonconst |
| Company | GetProsperity |  | CFixedPoint | Category: nonconst |
| Company | GetProsperityChange |  | CFixedPoint | Category: nonconst |
| Company | GetProsperityChangeDesc |  | CString | Category: nonconst |
| Company | GetProsperityTrend |  | DataTrend | Category: nonconst |
| Company | GetRegionalHQs |  | Unknown | Category: nonconst |
| Company | GetRevenueTrend |  | DataTrend | Category: nonconst |
| Company | GetSizeTrend |  | DataTrend | Category: nonconst |
| Company | GetState |  | State | Category: nonconst |
| Company | GetTargetProsperity |  | CFixedPoint | Category: nonconst |
| Company | GetTargetProsperityBreakdown |  | CString | Category: nonconst |
| Company | GetTargetProsperityDesc |  | CString | Category: nonconst |
| Company | GetTooltipTag |  | CString | Category: nonconst |
| Company | GetTrendForBuildingType | 1. BuildingType | DataTrend | Category: nonconst |
| Company | HasAdditionalIndustry | 1. BuildingType | bool |  |
| Company | HasAnyColonizationCharterActive |  | bool |  |
| Company | HasAnyIndustryCharterActive |  | bool |  |
| Company | HasAnyInvestmentCharterActive |  | bool |  |
| Company | HasAnyMonopolyCharterActive |  | bool |  |
| Company | HasAnyTradeCharterActive |  | bool |  |
| Company | HasHighProductivity |  | bool |  |
| Company | HasLowProductivity |  | bool |  |
| Company | HasMonopoly | 1. Unknown | bool |  |
| Company | IsPinnedInOutliner |  | bool |  |
| Company | IsProducingPrestigeGoods |  | bool |  |
| Company | IsProsperous |  | bool |  |
| Company | IsValid |  | bool |  |
| Company | MakeScope |  | Scope |  |
| Company | Self |  | Company |  |
| Company | ToggleBuildingCharter | 1. CompanyCharterType 2. BuildingType | Command |  |
| Company | ToggleCharter | 1. CompanyCharterType | Command |  |
| Company | TogglePinInOutliner |  | void |  |
| Company | ToggleRegionCharter | 1. CompanyCharterType 2. StateRegion | Command |  |
| CompanyChangeNamePopup | AccessSelf |  | CompanyChangeNamePopup | Category: const |
| CompanyChangeNamePopup | Confirm |  | Command |  |
| CompanyChangeNamePopup | GetCompany |  | Company | Category: nonconst |
| CompanyChangeNamePopup | OnEditName |  | void |  |
| CompanyChangeNamePopup | Self |  | CompanyChangeNamePopup |  |
| CompanyCharter | AccessSelf |  | CompanyCharter | Category: const |
| CompanyCharter | GetBuildingType |  | BuildingType | Category: nonconst |
| CompanyCharter | GetDesc |  | CString | Category: nonconst |
| CompanyCharter | GetEffects |  | CString | Category: nonconst |
| CompanyCharter | GetName |  | CString | Category: nonconst |
| CompanyCharter | GetNameNoFormatting |  | CString | Category: nonconst |
| CompanyCharter | GetNameNoIcon |  | CString | Category: nonconst |
| CompanyCharter | GetStateRegion |  | StateRegion | Category: nonconst |
| CompanyCharter | GetToggleCommand |  | Command | Category: nonconst |
| CompanyCharter | GetTooltipTag |  | CString | Category: nonconst |
| CompanyCharter | GetType |  | CompanyCharterType | Category: nonconst |
| CompanyCharter | Self |  | CompanyCharter |  |
| CompanyCharterType | AccessSelf |  | CompanyCharterType | Category: const |
| CompanyCharterType | GetAuthorityCost | 1. Company | CFixedPoint | Category: nonconst |
| CompanyCharterType | GetDesc |  | CString | Category: nonconst |
| CompanyCharterType | GetEffects |  | CString | Category: nonconst |
| CompanyCharterType | GetIcon |  | Unknown | Category: nonconst |
| CompanyCharterType | GetName |  | CString | Category: nonconst |
| CompanyCharterType | GetNameNoFormatting |  | CString | Category: nonconst |
| CompanyCharterType | GetNameNoIcon |  | CString | Category: nonconst |
| CompanyCharterType | GetPotentialBuildings | 1. Company | Unknown | Category: nonconst |
| CompanyCharterType | GetPotentialRegions | 1. Company | Unknown | Category: nonconst |
| CompanyCharterType | GetTooltipTag |  | CString | Category: nonconst |
| CompanyCharterType | IsColonizationCharter |  | bool |  |
| CompanyCharterType | IsIndustryCharter |  | bool |  |
| CompanyCharterType | IsInvestmentCharter |  | bool |  |
| CompanyCharterType | IsMonopolyCharter |  | bool |  |
| CompanyCharterType | IsTargettingBuildings |  | bool |  |
| CompanyCharterType | IsTargettingRegions |  | bool |  |
| CompanyCharterType | IsTradeCharter |  | bool |  |
| CompanyCharterType | Self |  | CompanyCharterType |  |
| CompanyPanel | AccessSelf |  | CompanyPanel | Category: const |
| CompanyPanel | GetCompany |  | Company | Category: nonconst |
| CompanyPanel | Self |  | CompanyPanel |  |
| CompanyType | AccessBuildingTypes | 1. Country | Unknown | Category: const |
| CompanyType | AccessSelf |  | CompanyType | Category: const |
| CompanyType | CanProducePrestigeGoods |  | bool |  |
| CompanyType | GetAverageProductivity |  | CFixedPoint | Category: nonconst |
| CompanyType | GetBackground |  | Unknown | Category: nonconst |
| CompanyType | GetCategory |  | CString | Category: nonconst |
| CompanyType | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| CompanyType | GetIcon |  | Unknown | Category: nonconst |
| CompanyType | GetKey |  | CString | Category: nonconst |
| CompanyType | GetName |  | CString | Category: nonconst |
| CompanyType | GetNameNoFormatting |  | CString | Category: nonconst |
| CompanyType | GetNumBuildingLevels |  | int32 | Category: nonconst |
| CompanyType | GetPotentialBuildingTypes | 1. Unknown | Unknown | Category: nonconst |
| CompanyType | GetPotentialState |  | State | Category: nonconst |
| CompanyType | GetPrestigeGoods |  | Unknown | Category: nonconst |
| CompanyType | GetProducedPrestigeGoodsDesc |  | CString | Category: nonconst |
| CompanyType | GetProductivity |  | CFixedPoint | Category: nonconst |
| CompanyType | GetProsperityModifier |  | Modifier | Category: nonconst |
| CompanyType | GetTooltipTag |  | CString | Category: nonconst |
| CompanyType | IsFlavoredCompany |  | bool |  |
| CompanyType | MakeScope |  | Scope |  |
| CompanyType | Self |  | CompanyType |  |
| CompanyType | UsesDynamicNaming |  | bool |  |
| ConfirmationWindow | AccessSelf |  | ConfirmationWindow | Category: const |
| ConfirmationWindow | GetDesc |  | CString | Category: nonconst |
| ConfirmationWindow | Self |  | ConfirmationWindow |  |
| ConsoleMenuItem | AccessSelf |  | ConsoleMenuItem | Category: const |
| ConsoleMenuItem | GetHelp |  | CString | Category: nonconst |
| ConsoleMenuItem | GetName |  | CString | Category: nonconst |
| ConsoleMenuItem | IsCurrentGroup |  | bool |  |
| ConsoleMenuItem | Select |  | void |  |
| ConsoleMenuItem | Self |  | ConsoleMenuItem |  |
| ConsoleWindow | AccessSelf |  | ConsoleWindow | Category: const |
| ConsoleWindow | IsMenuShown |  | bool |  |
| ConsoleWindow | Self |  | ConsoleWindow |  |
| ConsoleWindow | ToggleMenu |  | void |  |
| ConstructionPanel | AccessCurrentGovernmentConstructionQueuePage | 1. Country | int32 | Category: const |
| ConstructionPanel | AccessCurrentPrivateConstructionQueuePage | 1. Country | int32 | Category: const |
| ConstructionPanel | AccessSelf |  | ConstructionPanel | Category: const |
| ConstructionPanel | GetConstructionEntries |  | Unknown | Category: nonconst |
| ConstructionPanel | GetCountry |  | Country | Category: nonconst |
| ConstructionPanel | GetFilter |  | Unknown | Category: nonconst |
| ConstructionPanel | GetNumGovernmentConstructionQueueElements | 1. Country | int32 | Category: nonconst |
| ConstructionPanel | GetNumGovernmentConstructionQueuePages | 1. Country | int32 | Category: nonconst |
| ConstructionPanel | GetNumPrivateConstructionQueueElements | 1. Country | int32 | Category: nonconst |
| ConstructionPanel | GetNumPrivateConstructionQueuePages | 1. Country | int32 | Category: nonconst |
| ConstructionPanel | IsFilterNo | 1. CString | bool |  |
| ConstructionPanel | IsFilterYes | 1. CString | bool |  |
| ConstructionPanel | IsFiltered | 1. CString | bool |  |
| ConstructionPanel | IsShowingGovernmentConstructions |  | bool |  |
| ConstructionPanel | IsShowingPrivateConstructions |  | bool |  |
| ConstructionPanel | NextGovernmentConstructionQueuePage | 1. Country | void |  |
| ConstructionPanel | NextPrivateConstructionQueuePage | 1. Country | void |  |
| ConstructionPanel | PrevGovernmentConstructionQueuePage | 1. Country | void |  |
| ConstructionPanel | PrevPrivateConstructionQueuePage | 1. Country | void |  |
| ConstructionPanel | Self |  | ConstructionPanel |  |
| ConstructionPanel | SetFilterMode | 1. CString 2. CString | void |  |
| ConstructionPanel | ShowGovernmentConstructions |  | void |  |
| ConstructionPanel | ShowPrivateConstructions |  | void |  |
| ConstructionQueueElement | AccessBuilding |  | Building | Category: const |
| ConstructionQueueElement | AccessSelf |  | ConstructionQueueElement | Category: const |
| ConstructionQueueElement | AccessState |  | State | Category: const |
| ConstructionQueueElement | CalcPercentComplete |  | CFixedPoint |  |
| ConstructionQueueElement | CancelConstruction |  | Command |  |
| ConstructionQueueElement | GetBaseConstructionSpeed |  | CFixedPoint | Category: nonconst |
| ConstructionQueueElement | GetBuilding |  | Building | Category: nonconst |
| ConstructionQueueElement | GetCompanyConstructionBonusDesc |  | CString | Category: nonconst |
| ConstructionQueueElement | GetConstructionSpeed |  | CFixedPoint | Category: nonconst |
| ConstructionQueueElement | GetConstructionSpeedPerWeekDesc |  | CString | Category: nonconst |
| ConstructionQueueElement | GetInvestorBuilding |  | Building | Category: nonconst |
| ConstructionQueueElement | GetInvestorBuildingType |  | BuildingType | Category: nonconst |
| ConstructionQueueElement | GetInvestorCountry |  | Country | Category: nonconst |
| ConstructionQueueElement | GetInvestorState |  | State | Category: nonconst |
| ConstructionQueueElement | GetQueueNumber |  | int32 | Category: nonconst |
| ConstructionQueueElement | GetState |  | State | Category: nonconst |
| ConstructionQueueElement | GetTooltip |  | CString | Category: nonconst |
| ConstructionQueueElement | GetTooltipTag |  | CString | Category: nonconst |
| ConstructionQueueElement | GetTotalProgress |  | CFixedPoint | Category: nonconst |
| ConstructionQueueElement | GetWeeksLeft |  | int32 | Category: nonconst |
| ConstructionQueueElement | IsCurrentlyUnderConstruction |  | bool |  |
| ConstructionQueueElement | IsPrivatelyFundedConstruction |  | bool |  |
| ConstructionQueueElement | IsValidConstruction |  | bool |  |
| ConstructionQueueElement | MoveDown |  | Command |  |
| ConstructionQueueElement | MoveToBottom |  | Command |  |
| ConstructionQueueElement | MoveToTop |  | Command |  |
| ConstructionQueueElement | MoveUp |  | Command |  |
| ConstructionQueueElement | Self |  | ConstructionQueueElement |  |
| Container | AccessSelf |  | Container | Category: const |
| Container | Self |  | Container |  |
| ContextMenuItem | AccessSelf |  | ContextMenuItem | Category: const |
| ContextMenuItem | Enabled |  | bool |  |
| ContextMenuItem | GetIcon |  | Unknown | Category: nonconst |
| ContextMenuItem | GetLabel |  | CString | Category: nonconst |
| ContextMenuItem | Self |  | ContextMenuItem |  |
| ContextualDiplomaticActionType | AccessCountry |  | Country | Category: const |
| ContextualDiplomaticActionType | AccessSelf |  | ContextualDiplomaticActionType | Category: const |
| ContextualDiplomaticActionType | GetCountry |  | Country | Category: nonconst |
| ContextualDiplomaticActionType | GetDiplomaticActionType |  | DiplomaticActionType | Category: nonconst |
| ContextualDiplomaticActionType | GetTooltipTag |  | CString | Category: nonconst |
| ContextualDiplomaticActionType | Self |  | ContextualDiplomaticActionType |  |
| ContextualDiplomaticPact | AccessDiplomaticPact |  | DiplomaticPact | Category: const |
| ContextualDiplomaticPact | AccessSelf |  | ContextualDiplomaticPact | Category: const |
| ContextualDiplomaticPact | GetContextCountry |  | Country | Category: nonconst |
| ContextualDiplomaticPact | GetDiplomaticActionType |  | DiplomaticActionType | Category: nonconst |
| ContextualDiplomaticPact | GetDiplomaticPact |  | DiplomaticPact | Category: nonconst |
| ContextualDiplomaticPact | GetOtherCountry |  | Country | Category: nonconst |
| ContextualDiplomaticPact | GetTooltip |  | CString | Category: nonconst |
| ContextualDiplomaticPact | GetTooltipTag |  | CString | Category: nonconst |
| ContextualDiplomaticPact | IsOngoingForContextCountry |  | bool |  |
| ContextualDiplomaticPact | IsOngoingForOtherCountry |  | bool |  |
| ContextualDiplomaticPact | Self |  | ContextualDiplomaticPact |  |
| CountriesPanel | AccessSelf |  | CountriesPanel | Category: const |
| CountriesPanel | GetCountries |  | Unknown | Category: nonconst |
| CountriesPanel | IsSorted | 1. Unknown | bool |  |
| CountriesPanel | Self |  | CountriesPanel |  |
| CountriesPanel | Sort | 1. CString | void |  |
| Country | AccessActiveDiplomaticPactTypes |  | Unknown | Category: const |
| Country | AccessActiveDiplomaticPacts | 1. ContextualDiplomaticActionType | Unknown | Category: const |
| Country | AccessActiveDiplomaticPlays |  | Unknown | Category: const |
| Country | AccessActiveEconomyLaws |  | Unknown | Category: const |
| Country | AccessActiveHumanRightsLaws |  | Unknown | Category: const |
| Country | AccessActiveInterestGroups |  | Unknown | Category: const |
| Country | AccessActiveJournalEntries |  | Unknown | Category: const |
| Country | AccessActiveLawFromGroup | 1. LawGroup | Law | Category: const |
| Country | AccessActiveNonPlayerObjectiveJournalEntries |  | Unknown | Category: const |
| Country | AccessActiveOtherLaws |  | Unknown | Category: const |
| Country | AccessActiveParties |  | Unknown | Category: const |
| Country | AccessActivePinnedNonPlayerObjectiveJournalEntries |  | Unknown | Category: const |
| Country | AccessActivePinnedPlayerObjectiveJournalEntries |  | Unknown | Category: const |
| Country | AccessActivePlayerObjectiveJournalEntries |  | Unknown | Category: const |
| Country | AccessActivePowerStructureLaws |  | Unknown | Category: const |
| Country | AccessAdmirals |  | Unknown | Category: const |
| Country | AccessAdmiralsOffer |  | Unknown | Category: const |
| Country | AccessAllInterestGroups |  | Unknown | Category: const |
| Country | AccessCapital |  | State | Category: const |
| Country | AccessCivilWars |  | Unknown | Category: const |
| Country | AccessConstructionQueue |  | Unknown | Category: const |
| Country | AccessCurrentlyResearchedTechnology |  | Technology | Category: const |
| Country | AccessDefinition |  | CountryDefinition | Category: const |
| Country | AccessFirstMarket |  | Market | Category: const |
| Country | AccessFormableCountries |  | Unknown | Category: const |
| Country | AccessGenerals |  | Unknown | Category: const |
| Country | AccessGeneralsOffer |  | Unknown | Category: const |
| Country | AccessGovernment |  | GovernmentType | Category: const |
| Country | AccessGovernmentConstructionQueue |  | Unknown | Category: const |
| Country | AccessHeaviestJournalEntry |  | JournalEntry | Category: const |
| Country | AccessHeir |  | Character | Category: const |
| Country | AccessInactiveJournalEntries |  | Unknown | Category: const |
| Country | AccessInstitutions |  | Unknown | Category: const |
| Country | AccessInterestGroupsInGovernment |  | Unknown | Category: const |
| Country | AccessInterestGroupsInOpposition |  | Unknown | Category: const |
| Country | AccessInterests |  | Unknown | Category: const |
| Country | AccessLandHQs |  | Unknown | Category: const |
| Country | AccessLastElectionParties |  | Unknown | Category: const |
| Country | AccessLawBeingEnacted |  | Law | Category: const |
| Country | AccessLawsWithGovernmentOrMovementSupport |  | Unknown | Category: const |
| Country | AccessLawsWithoutGovernmentOrMovementSupport |  | Unknown | Category: const |
| Country | AccessMarginalInterestGroups |  | Unknown | Category: const |
| Country | AccessModifier |  | Modifier | Category: const |
| Country | AccessNavalHQs |  | Unknown | Category: const |
| Country | AccessNonRevolutionaryPoliticalMovements |  | Unknown | Category: const |
| Country | AccessNumResearchableTechnologies |  | int32 | Category: const |
| Country | AccessOverlord |  | Country | Category: const |
| Country | AccessPagedGovernmentConstructionQueue | 1. int32 2. Unknown | Unknown | Category: const |
| Country | AccessPagedPrivateConstructionQueue | 1. int32 2. Unknown | Unknown | Category: const |
| Country | AccessPoliticalMovements |  | Unknown | Category: const |
| Country | AccessPopCultures |  | Unknown | Category: const |
| Country | AccessPopCulturesSortedByPolStr |  | Unknown | Category: const |
| Country | AccessPopCulturesSortedByPopulation |  | Unknown | Category: const |
| Country | AccessPopReligionsSortedByPolStr |  | Unknown | Category: const |
| Country | AccessPopReligionsSortedByPopulation |  | Unknown | Category: const |
| Country | AccessPopTypes |  | Unknown | Category: const |
| Country | AccessPopTypesSortedOnPolStr |  | Unknown | Category: const |
| Country | AccessPopTypesSortedOnPopulation |  | Unknown | Category: const |
| Country | AccessPowerBloc |  | PowerBloc | Category: const |
| Country | AccessPrivateConstructionQueue |  | Unknown | Category: const |
| Country | AccessReleasableCountries |  | Unknown | Category: const |
| Country | AccessResearchableTechnologiesMilitary |  | Unknown | Category: const |
| Country | AccessResearchableTechnologiesOther |  | Unknown | Category: const |
| Country | AccessResearchableTechnologiesProduction |  | Unknown | Category: const |
| Country | AccessResearchableTechnologiesSociety |  | Unknown | Category: const |
| Country | AccessRuler |  | Character | Category: const |
| Country | AccessSecessions |  | Unknown | Category: const |
| Country | AccessSelf |  | Country | Category: const |
| Country | AccessShippingLanes |  | Unknown | Category: const |
| Country | AccessShippingOriginStates | 1. Province | Unknown | Category: const |
| Country | AccessShownCurrentlyConstructingGovernmentQueue |  | Unknown | Category: const |
| Country | AccessShownCurrentlyConstructingPrivateQueue |  | Unknown | Category: const |
| Country | AccessShownCurrentlyConstructingQueue |  | Unknown | Category: const |
| Country | AccessStateReligion |  | Religion | Category: const |
| Country | AccessStates |  | Unknown | Category: const |
| Country | AccessStrategies |  | Unknown | Category: const |
| Country | AccessTopOverlord |  | Country | Category: const |
| Country | AccessTruces |  | Unknown | Category: const |
| Country | AccessVioSovInterestedCountries | 1. Country | Unknown | Category: const |
| Country | AccessVioSovWars | 1. Country | Unknown | Category: const |
| Country | AccessVisibleJournalEntries |  | Unknown | Category: const |
| Country | AccessWars |  | Unknown | Category: const |
| Country | CalcBaseConstructionSpeed |  | CFixedPoint |  |
| Country | CalcConscriptableBattalions |  | int32 |  |
| Country | CalcCulturalTurmoil | 1. Culture | CFixedPoint |  |
| Country | CalcLibertyDesireLevel |  | LibertyDesireLevel |  |
| Country | CalcMaxNumDeclaredInterests |  | int32 |  |
| Country | CalcNumStatesInTurmoil |  | int32 |  |
| Country | CalcRelativeUsedGovernmentConstruction |  | CFixedPoint |  |
| Country | CalcRelativeUsedPrivateConstruction |  | CFixedPoint |  |
| Country | CalcTurmoil |  | CFixedPoint |  |
| Country | CalcUnusedConstruction |  | CFixedPoint |  |
| Country | CalcUsedConstruction |  | CFixedPoint |  |
| Country | CalcUsedGovernmentConstruction |  | CFixedPoint |  |
| Country | CalcUsedPrivateConstruction |  | CFixedPoint |  |
| Country | CanBuildingTypeBeMonopolized | 1. BuildingType | bool |  |
| Country | CanSignTreatyWith | 1. Country | bool |  |
| Country | CanTradeGoods | 1. Unknown | bool |  |
| Country | CreateCompany | 1. CompanyType | Command |  |
| Country | DeclareBankruptcy |  | Command |  |
| Country | DeclareInterest | 1. StrategicRegion | Command |  |
| Country | DemobilizeAllArmies |  | Command |  |
| Country | EstimatedConstructionQueueDuration |  | int32 |  |
| Country | EstimatedGovernmentConstructionQueueDuration |  | int32 |  |
| Country | EstimatedPrivateConstructionQueueDuration |  | int32 |  |
| Country | Exists |  | bool |  |
| Country | GetAIStrategiesDesc |  | CString | Category: nonconst |
| Country | GetActiveConstructionProjectsDesc |  | CString | Category: nonconst |
| Country | GetActiveLawFrom | 1. Unknown | Law | Category: nonconst |
| Country | GetActiveLawFromGroup | 1. CString | Law | Category: nonconst |
| Country | GetActivePeaceDealDesc |  | CString | Category: nonconst |
| Country | GetAdditionalExpensesTrend |  | DataTrend | Category: nonconst |
| Country | GetAdditionalIncomeTrend |  | DataTrend | Category: nonconst |
| Country | GetAdditionalSOLFactorsDescAll |  | CString | Category: nonconst |
| Country | GetAdditionalSOLFactorsDescMiddle |  | CString | Category: nonconst |
| Country | GetAdditionalSOLFactorsDescPoor |  | CString | Category: nonconst |
| Country | GetAdditionalSOLFactorsDescRich |  | CString | Category: nonconst |
| Country | GetAdditionalSOLFactorsDescWithCulture | 1. Culture | CString | Category: nonconst |
| Country | GetAdditionalSOLFactorsDescWithCultureMiddle | 1. Culture | CString | Category: nonconst |
| Country | GetAdditionalSOLFactorsDescWithCulturePoor | 1. Culture | CString | Category: nonconst |
| Country | GetAdditionalSOLFactorsDescWithCultureRich | 1. Culture | CString | Category: nonconst |
| Country | GetAdjective |  | CString | Category: nonconst |
| Country | GetAdjectiveNoFlag |  | CString | Category: nonconst |
| Country | GetAdjectiveNoFormatting |  | CString | Category: nonconst |
| Country | GetAllAcceptanceStatusSegments |  | Unknown | Category: nonconst |
| Country | GetAllGeneralDiploActions |  | Unknown | Category: nonconst |
| Country | GetAllOverlordDiploActions |  | Unknown | Category: nonconst |
| Country | GetAllPowerBlocLeaderDiploActions |  | Unknown | Category: nonconst |
| Country | GetAllPowerBlocMemberDiploActions |  | Unknown | Category: nonconst |
| Country | GetAllSubjectDiploActions |  | Unknown | Category: nonconst |
| Country | GetAllianceLikeTreatiesBrokenDesc | 1. Country | CString | Category: nonconst |
| Country | GetAllianceLikeTreatiesBrokenFromPlayDesc | 1. DiplomaticPlay | CString | Category: nonconst |
| Country | GetAllianceLikeTreatiesBrokenOnWarDesc | 1. Country | CString | Category: nonconst |
| Country | GetAllianceLikeTreatiesList | 1. Unknown | CString | Category: nonconst |
| Country | GetAltAdjective | 1. CString | CString | Category: nonconst |
| Country | GetAltAdjectiveNoFlag | 1. CString | CString | Category: nonconst |
| Country | GetAltAdjectiveNoFormatting | 1. CString | CString | Category: nonconst |
| Country | GetAltName | 1. CString | CString | Category: nonconst |
| Country | GetAltNameNoFlag | 1. CString | CString | Category: nonconst |
| Country | GetAltNameNoFormatting | 1. CString | CString | Category: nonconst |
| Country | GetArableLand |  | int32 | Category: nonconst |
| Country | GetArableLandDesc |  | CString | Category: nonconst |
| Country | GetArmiesBreakdown |  | CString | Category: nonconst |
| Country | GetArmyPowerProjection |  | CFixedPoint | Category: nonconst |
| Country | GetArmyPowerProjectionDesc |  | CString | Category: nonconst |
| Country | GetArmyReadinessStatusDesc |  | CString | Category: nonconst |
| Country | GetAttainableCompanies |  | Unknown | Category: nonconst |
| Country | GetAttitudeColor | 1. Unknown | CVector4f | Category: nonconst |
| Country | GetAttitudeTowards | 1. Country | AIAttitude | Category: nonconst |
| Country | GetAvailableCompanies |  | Unknown | Category: nonconst |
| Country | GetAvailableGeneralDiploActions |  | Unknown | Category: nonconst |
| Country | GetAvailableOverlordDiploActions |  | Unknown | Category: nonconst |
| Country | GetAvailablePowerBlocLeaderDiploActions |  | Unknown | Category: nonconst |
| Country | GetAvailablePowerBlocMemberDiploActions |  | Unknown | Category: nonconst |
| Country | GetAvailableSubjectDiploActions |  | Unknown | Category: nonconst |
| Country | GetAverageExpectedStandardOfLivingWithCultureMiddle | 1. Unknown | CFixedPoint | Category: nonconst |
| Country | GetAverageExpectedStandardOfLivingWithCulturePoor | 1. Unknown | CFixedPoint | Category: nonconst |
| Country | GetAverageExpectedStandardOfLivingWithCultureRich | 1. Unknown | CFixedPoint | Category: nonconst |
| Country | GetAverageSoLByPoliticalStrength |  | CFixedPoint | Category: nonconst |
| Country | GetAverageSoLByPopulation |  | CFixedPoint | Category: nonconst |
| Country | GetAverageSoLByPopulationTrend |  | DataTrend | Category: nonconst |
| Country | GetAverageSoLByPopulationWithCulture | 1. Unknown | CFixedPoint | Category: nonconst |
| Country | GetAverageSoLLowerTrend |  | DataTrend | Category: nonconst |
| Country | GetAverageSoLMiddleTrend |  | DataTrend | Category: nonconst |
| Country | GetAverageSoLUpperTrend |  | DataTrend | Category: nonconst |
| Country | GetAverageStandardOfLivingMiddle |  | CFixedPoint | Category: nonconst |
| Country | GetAverageStandardOfLivingPoor |  | CFixedPoint | Category: nonconst |
| Country | GetAverageStandardOfLivingRich |  | CFixedPoint | Category: nonconst |
| Country | GetAverageStandardOfLivingWithCultureMiddle | 1. Unknown | CFixedPoint | Category: nonconst |
| Country | GetAverageStandardOfLivingWithCulturePoor | 1. Unknown | CFixedPoint | Category: nonconst |
| Country | GetAverageStandardOfLivingWithCultureRich | 1. Unknown | CFixedPoint | Category: nonconst |
| Country | GetAverageStateTaxCollectionMult |  | CFixedPoint | Category: nonconst |
| Country | GetAverageStateTaxCollectionMultBreakdown |  | CString | Category: nonconst |
| Country | GetAverageTaxWaste |  | CFixedPoint | Category: nonconst |
| Country | GetAverageTaxWasteBreakdown |  | CString | Category: nonconst |
| Country | GetBalanceTrend |  | DataDynamicTrend | Category: nonconst |
| Country | GetBaseConstructionSpeedDesc |  | CString | Category: nonconst |
| Country | GetBaseWeeklyTechnologySpread |  | CFixedPoint | Category: nonconst |
| Country | GetBaseWeeklyTechnologySpreadForTech | 1. Unknown | CFixedPoint | Category: nonconst |
| Country | GetBattalions |  | int32 | Category: nonconst |
| Country | GetBattalionsDesc |  | CString | Category: nonconst |
| Country | GetBattalionsMobilizing |  | int32 | Category: nonconst |
| Country | GetBattalionsRanking |  | CString | Category: nonconst |
| Country | GetBolsterDesc |  | CString | Category: nonconst |
| Country | GetBolsteringCostDesc |  | CString | Category: nonconst |
| Country | GetCanBuildingTypeBeMonopolizedDesc | 1. BuildingType | CString | Category: nonconst |
| Country | GetCanSignTreatyWithDesc | 1. Country | CString | Category: nonconst |
| Country | GetCapital |  | State | Category: nonconst |
| Country | GetColonialGrowthDetails |  | CString | Category: nonconst |
| Country | GetCompanies |  | Unknown | Category: nonconst |
| Country | GetCompanyConstructionEfficiencyBonusFormatted |  | CString | Category: nonconst |
| Country | GetCompanyThroughputBonusFormatted |  | CString | Category: nonconst |
| Country | GetConscriptedBattalions |  | int32 | Category: nonconst |
| Country | GetConscriptionRatio |  | CFixedPoint | Category: nonconst |
| Country | GetConstructionGoodsExpenseTrend |  | DataTrend | Category: nonconst |
| Country | GetConstructionGoodsExpenses |  | CFixedPoint | Category: nonconst |
| Country | GetConstructionGoodsExpensesByGoodsDesc | 1. Unknown | CString | Category: nonconst |
| Country | GetConstructionGoodsExpensesDesc |  | CString | Category: nonconst |
| Country | GetConstructionQueueDesc |  | CString | Category: nonconst |
| Country | GetConstructionsInCountry | 1. Country | Unknown | Category: nonconst |
| Country | GetConsumptionTaxIncome |  | CFixedPoint | Category: nonconst |
| Country | GetConsumptionTaxTrend |  | DataTrend | Category: nonconst |
| Country | GetConsumptionTaxesDesc |  | CString | Category: nonconst |
| Country | GetConvoyEffectDesc |  | CString | Category: nonconst |
| Country | GetCountriesWithTreaties |  | Unknown | Category: nonconst |
| Country | GetCountryScorePosition |  | int32 | Category: nonconst |
| Country | GetCountryScorePositionDesc |  | CString | Category: nonconst |
| Country | GetCreditRatio |  | CFixedPoint | Category: nonconst |
| Country | GetCreditTooltip |  | CString | Category: nonconst |
| Country | GetCulturePolStrAsPercentage | 1. Culture | CFixedPoint | Category: nonconst |
| Country | GetCulturePopulation | 1. Culture | int64 | Category: nonconst |
| Country | GetCurrentLeverage | 1. Unknown | CFixedPoint | Category: nonconst |
| Country | GetCurrentLeverageShare | 1. PowerBloc | CFixedPoint | Category: nonconst |
| Country | GetCurrentPowerStruggleMonth |  | int32 | Category: nonconst |
| Country | GetCurrentlyResearchedTechnology |  | Technology | Category: nonconst |
| Country | GetCurrentlySpreadingTechsDesc |  | CString | Category: nonconst |
| Country | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| Country | GetDailyRelationsProgress | 1. Country | CFixedPoint | Category: nonconst |
| Country | GetDaysUntilElection |  | int32 | Category: nonconst |
| Country | GetDaysUntilRankLoss |  | int32 | Category: nonconst |
| Country | GetDecisions |  | Unknown | Category: nonconst |
| Country | GetDeclareBankruptcyDesc |  | CString | Category: nonconst |
| Country | GetDecreasingInterestsDesc |  | CString | Category: nonconst |
| Country | GetDeficitConvoyRatio |  | CFixedPoint | Category: nonconst |
| Country | GetDeficitConvoyRatioForProgressBar |  | CFixedPoint | Category: nonconst |
| Country | GetDeficitPowerRatio | 1. Unknown | CFixedPoint | Category: nonconst |
| Country | GetDeficitPowerRatioForProgressBar | 1. CString | CFixedPoint | Category: nonconst |
| Country | GetDefinition |  | CountryDefinition | Category: nonconst |
| Country | GetDependents |  | int64 | Category: nonconst |
| Country | GetDiplomaticAction | 1. Unknown 2. Unknown | DiplomaticAction | Category: nonconst |
| Country | GetDiplomaticActionWithStates | 1. Unknown 2. Unknown 3. Unknown 4. Unknown | DiplomaticAction | Category: nonconst |
| Country | GetDiplomaticPactsExpenseTrend |  | DataTrend | Category: nonconst |
| Country | GetDiplomaticPactsIncomeTrend |  | DataTrend | Category: nonconst |
| Country | GetDiplomaticStatusColor | 1. Country | CVector4f | Category: nonconst |
| Country | GetDividendsTaxTrend |  | DataTrend | Category: nonconst |
| Country | GetDomesticallyOwnedGDP |  | CFixedPoint | Category: nonconst |
| Country | GetDomesticallyOwnedGDPFraction |  | CFixedPoint | Category: nonconst |
| Country | GetDraftTreaties |  | Unknown | Category: nonconst |
| Country | GetDraftTreatiesWith | 1. Unknown | Unknown | Category: nonconst |
| Country | GetEconomicDependenceOn | 1. Country | CString | Category: nonconst |
| Country | GetEconomicDependenceOnDesc | 1. Unknown | CString | Category: nonconst |
| Country | GetEconomicDependenceOnRaw | 1. Unknown | CFixedPoint | Category: nonconst |
| Country | GetElection |  | Election | Category: nonconst |
| Country | GetElectionPollTooltip |  | CString | Category: nonconst |
| Country | GetElectoralConfidence |  | CFixedPoint | Category: nonconst |
| Country | GetElectoralConfidenceEffectDesc |  | CString | Category: nonconst |
| Country | GetEmployedWorkingAdults |  | int64 | Category: nonconst |
| Country | GetEmptyAgitatorSlots |  | int32 | Category: nonconst |
| Country | GetEnemyOccupation |  | CFixedPoint | Category: nonconst |
| Country | GetEnforcedTreaties |  | Unknown | Category: nonconst |
| Country | GetEnforcedTreatiesWith | 1. Country | Unknown | Category: nonconst |
| Country | GetEnforcedTreatiesWithDesc | 1. Unknown | CString | Category: nonconst |
| Country | GetEventsByCategory | 1. CString | Unknown | Category: nonconst |
| Country | GetExcessConvoyRatio |  | CFixedPoint | Category: nonconst |
| Country | GetExcessConvoyRatioForProgressBar |  | CFixedPoint | Category: nonconst |
| Country | GetExcessPowerRatio | 1. Unknown | CFixedPoint | Category: nonconst |
| Country | GetExcessPowerRatioForProgressBar | 1. CString | CFixedPoint | Category: nonconst |
| Country | GetExpectedSOLFactorsDescAll |  | CString | Category: nonconst |
| Country | GetExpectedSOLFactorsDescMiddle |  | CString | Category: nonconst |
| Country | GetExpectedSOLFactorsDescPoor |  | CString | Category: nonconst |
| Country | GetExpectedSOLFactorsDescRich |  | CString | Category: nonconst |
| Country | GetExpectedSOLFactorsDescWithCulture | 1. Unknown | CString | Category: nonconst |
| Country | GetExpectedSoLByPopulation |  | CFixedPoint | Category: nonconst |
| Country | GetExpectedStandardOfLivingMiddle |  | CFixedPoint | Category: nonconst |
| Country | GetExpectedStandardOfLivingPoor |  | CFixedPoint | Category: nonconst |
| Country | GetExpectedStandardOfLivingRich |  | CFixedPoint | Category: nonconst |
| Country | GetExpensesBreakdown |  | CString | Category: nonconst |
| Country | GetExportSubventionsDescHigh | 1. Goods | CString | Category: nonconst |
| Country | GetExportSubventionsDescLow | 1. Goods | CString | Category: nonconst |
| Country | GetExportSubventionsDescMax | 1. Goods | CString | Category: nonconst |
| Country | GetExportTariffsDescHigh | 1. Goods | CString | Category: nonconst |
| Country | GetExportTariffsDescLow | 1. Goods | CString | Category: nonconst |
| Country | GetExportTariffsDescMax | 1. Goods | CString | Category: nonconst |
| Country | GetExportTariffsDescNone | 1. Goods | CString | Category: nonconst |
| Country | GetExportedAmount | 1. Unknown | CFixedPoint | Category: nonconst |
| Country | GetExports |  | Unknown | Category: nonconst |
| Country | GetFirstPrimaryCulture |  | Culture | Category: nonconst |
| Country | GetFlag |  | CoatOfArms | Category: nonconst |
| Country | GetFlagTextIcon |  | CString | Category: nonconst |
| Country | GetFlavorText |  | CString | Category: nonconst |
| Country | GetFleetsBreakdown |  | CString | Category: nonconst |
| Country | GetFlotillasRanking |  | CString | Category: nonconst |
| Country | GetForeignOwnedGDP |  | CFixedPoint | Category: nonconst |
| Country | GetForeignOwnedGDPDesc |  | CString | Category: nonconst |
| Country | GetForeignOwnedGDPFraction |  | CFixedPoint | Category: nonconst |
| Country | GetFormattedStandardOfLivingAll |  | CString | Category: nonconst |
| Country | GetFormattedStandardOfLivingAllWithCulture | 1. Culture | CString | Category: nonconst |
| Country | GetFormattedStandardOfLivingLabelAll |  | CString | Category: nonconst |
| Country | GetFormattedStandardOfLivingLabelAllWithCulture | 1. Culture | CString | Category: nonconst |
| Country | GetFormattedStandardOfLivingLabelMiddle |  | CString | Category: nonconst |
| Country | GetFormattedStandardOfLivingLabelMiddleWithCulture | 1. Culture | CString | Category: nonconst |
| Country | GetFormattedStandardOfLivingLabelPoor |  | CString | Category: nonconst |
| Country | GetFormattedStandardOfLivingLabelPoorWithCulture | 1. Culture | CString | Category: nonconst |
| Country | GetFormattedStandardOfLivingLabelRich |  | CString | Category: nonconst |
| Country | GetFormattedStandardOfLivingLabelRichWithCulture | 1. Culture | CString | Category: nonconst |
| Country | GetFormattedStandardOfLivingMiddle |  | CString | Category: nonconst |
| Country | GetFormattedStandardOfLivingMiddleWithCulture | 1. Culture | CString | Category: nonconst |
| Country | GetFormattedStandardOfLivingPoor |  | CString | Category: nonconst |
| Country | GetFormattedStandardOfLivingPoorWithCulture | 1. Culture | CString | Category: nonconst |
| Country | GetFormattedStandardOfLivingRich |  | CString | Category: nonconst |
| Country | GetFormattedStandardOfLivingRichWithCulture | 1. Culture | CString | Category: nonconst |
| Country | GetFreeArableLand |  | int32 | Category: nonconst |
| Country | GetGDP |  | CFixedPoint | Category: nonconst |
| Country | GetGDPOwnedInForeignCountries |  | CFixedPoint | Category: nonconst |
| Country | GetGDPOwnedInForeignCountriesDesc |  | CString | Category: nonconst |
| Country | GetGDPPerCapita |  | CFixedPoint | Category: nonconst |
| Country | GetGDPPerCapitaRanking |  | CString | Category: nonconst |
| Country | GetGDPRanking |  | CString | Category: nonconst |
| Country | GetGDPTrend |  | DataTrend | Category: nonconst |
| Country | GetGDPWithOwnershipsInForeignCountries |  | CFixedPoint | Category: nonconst |
| Country | GetGameOverDateString |  | CString | Category: nonconst |
| Country | GetGdpRatioOwnedBy | 1. Unknown | CString | Category: nonconst |
| Country | GetGdpRatioOwnedByDesc | 1. Unknown | CString | Category: nonconst |
| Country | GetGdpRatioOwnedByRaw | 1. Unknown | CFixedPoint | Category: nonconst |
| Country | GetGoldProgressDesc |  | CString | Category: nonconst |
| Country | GetGoldReserveLimit |  | CFixedPoint | Category: nonconst |
| Country | GetGoldReserveLimitDesc |  | CString | Category: nonconst |
| Country | GetGoldReserveRatio |  | CFixedPoint | Category: nonconst |
| Country | GetGoldReserves |  | CFixedPoint | Category: nonconst |
| Country | GetGoldReservesTrend |  | DataDynamicTrend | Category: nonconst |
| Country | GetGoodsLeaderboardDesc |  | CString | Category: nonconst |
| Country | GetGovernment |  | GovernmentType | Category: nonconst |
| Country | GetGovernmentConstructionGoodsExpenses |  | CFixedPoint | Category: nonconst |
| Country | GetGovernmentConstructionGoodsExpensesByGoodsDesc |  | CString | Category: nonconst |
| Country | GetGovernmentGoodsExpenseTrend |  | DataTrend | Category: nonconst |
| Country | GetGovernmentGoodsExpenses |  | CFixedPoint | Category: nonconst |
| Country | GetGovernmentGoodsExpensesByGoodsDesc |  | CString | Category: nonconst |
| Country | GetGovernmentGoodsExpensesDesc |  | CString | Category: nonconst |
| Country | GetGovernmentIGsDesc |  | CString | Category: nonconst |
| Country | GetGovernmentInterestGroupsDesc |  | CString | Category: nonconst |
| Country | GetGovernmentInterestGroupsPopulationDesc |  | CString | Category: nonconst |
| Country | GetGovernmentLegitimacy |  | int32 | Category: nonconst |
| Country | GetGovernmentLegitimacyDesc |  | CString | Category: nonconst |
| Country | GetGovernmentLegitimacyLevel |  | LegitimacyLevel | Category: nonconst |
| Country | GetGovernmentSelfDebt |  | CFixedPoint | Category: nonconst |
| Country | GetGovernmentSelfDebtFraction |  | CFixedPoint | Category: nonconst |
| Country | GetGovernmentShareDividendsTrend |  | DataTrend | Category: nonconst |
| Country | GetGovernmentShareLossesTrend |  | DataTrend | Category: nonconst |
| Country | GetGovernmentSlavesExpenseTrend |  | DataTrend | Category: nonconst |
| Country | GetGovernmentSlavesExpenses |  | CFixedPoint | Category: nonconst |
| Country | GetGovernmentSlavesExpensesDesc |  | CString | Category: nonconst |
| Country | GetGovernmentWageLevelDescHigh |  | CString | Category: nonconst |
| Country | GetGovernmentWageLevelDescLow |  | CString | Category: nonconst |
| Country | GetGovernmentWageLevelDescMedium |  | CString | Category: nonconst |
| Country | GetGovernmentWageLevelDescVeryHigh |  | CString | Category: nonconst |
| Country | GetGovernmentWageLevelDescVeryLow |  | CString | Category: nonconst |
| Country | GetGovernmentWagesExpenseTrend |  | DataTrend | Category: nonconst |
| Country | GetGovernmentWagesExpenses |  | CFixedPoint | Category: nonconst |
| Country | GetGovernmentWagesExpensesDesc |  | CString | Category: nonconst |
| Country | GetGroupsForActiveJournalEntries |  | Unknown | Category: nonconst |
| Country | GetGroupsForInActiveJournalEntries |  | Unknown | Category: nonconst |
| Country | GetGrowingCivilWars |  | Unknown | Category: nonconst |
| Country | GetHeir |  | Character | Category: nonconst |
| Country | GetHighestPossibleRank |  | CString | Category: nonconst |
| Country | GetID |  | int32 | Category: nonconst |
| Country | GetIDString |  | CString | Category: nonconst |
| Country | GetIGApprovalFromLoyalistsBreakdown |  | CString | Category: nonconst |
| Country | GetIGApprovalFromRadicalsBreakdown |  | CString | Category: nonconst |
| Country | GetImportSubventionsDescHigh | 1. Goods | CString | Category: nonconst |
| Country | GetImportSubventionsDescLow | 1. Goods | CString | Category: nonconst |
| Country | GetImportSubventionsDescMax | 1. Goods | CString | Category: nonconst |
| Country | GetImportTariffsDescHigh | 1. Goods | CString | Category: nonconst |
| Country | GetImportTariffsDescLow | 1. Goods | CString | Category: nonconst |
| Country | GetImportTariffsDescMax | 1. Goods | CString | Category: nonconst |
| Country | GetImportTariffsDescNone | 1. Goods | CString | Category: nonconst |
| Country | GetImportedAmount | 1. Unknown | CFixedPoint | Category: nonconst |
| Country | GetImports |  | Unknown | Category: nonconst |
| Country | GetInDefaultEffectsDesc |  | CString | Category: nonconst |
| Country | GetInForceTreaties |  | Unknown | Category: nonconst |
| Country | GetInactiveConstructionProjectsDesc |  | CString | Category: nonconst |
| Country | GetInactivePopulation |  | int64 | Category: nonconst |
| Country | GetInactivePopulationDesc |  | CString | Category: nonconst |
| Country | GetIncomeBreakdown |  | CString | Category: nonconst |
| Country | GetIncomeTaxIncome |  | CFixedPoint | Category: nonconst |
| Country | GetIncorporatedLiteracyRanking |  | CString | Category: nonconst |
| Country | GetIncorporatedLiteracyRate |  | CFixedPoint | Category: nonconst |
| Country | GetIncorporatedLiteracyTrend |  | DataTrend | Category: nonconst |
| Country | GetIncorporatedPopulation |  | int64 | Category: nonconst |
| Country | GetIncorporatedStatesLawCostDesc |  | CString | Category: nonconst |
| Country | GetIndependentInterestGroupsInGovernment |  | Unknown | Category: nonconst |
| Country | GetIndependentInterestGroupsInOpposition |  | Unknown | Category: nonconst |
| Country | GetInfamy |  | CFixedPoint | Category: nonconst |
| Country | GetInfamyColor |  | CVector4f | Category: nonconst |
| Country | GetInfamyDesc |  | CString | Category: nonconst |
| Country | GetInfamyIconTexture |  | Unknown | Category: nonconst |
| Country | GetInfamyLabel |  | CString | Category: nonconst |
| Country | GetInstitutionInvestment |  | CFixedPoint | Category: nonconst |
| Country | GetInstitutionInvestmentBureaucracyCost |  | CFixedPoint | Category: nonconst |
| Country | GetInstitutionInvestmentBureaucracyCostDesc |  | CString | Category: nonconst |
| Country | GetInstitutionInvestmentBureaucracyFactor |  | CFixedPoint | Category: nonconst |
| Country | GetInstitutionInvestmentBureaucracyFactorDesc |  | CString | Category: nonconst |
| Country | GetInstitutionInvestmentDesc |  | CString | Category: nonconst |
| Country | GetInstitutionsSummary |  | CString | Category: nonconst |
| Country | GetInsurrectionaryIGsDesc |  | CString | Category: nonconst |
| Country | GetInterestExpenseTrend |  | DataTrend | Category: nonconst |
| Country | GetInterestGroupOfType | 1. Unknown | InterestGroup | Category: nonconst |
| Country | GetInterestPayment |  | CFixedPoint | Category: nonconst |
| Country | GetInterestRateTooltip |  | CString | Category: nonconst |
| Country | GetInvestmentFundTrend |  | DataTrend | Category: nonconst |
| Country | GetInvestmentGdpFractionInCountry | 1. Country | CFixedPoint | Category: nonconst |
| Country | GetInvestmentIncome |  | CFixedPoint | Category: nonconst |
| Country | GetInvestmentIncomeTrend |  | DataTrend | Category: nonconst |
| Country | GetInvestmentLevelsInCountry | 1. Country | int32 | Category: nonconst |
| Country | GetInvestmentPool |  | CFixedPoint | Category: nonconst |
| Country | GetInvestmentPoolChange |  | CFixedPoint | Category: nonconst |
| Country | GetInvestmentPoolChangeFromConstructionDesc |  | CString | Category: nonconst |
| Country | GetInvestmentPoolChangeFromInvestmentBreakdown |  | CString | Category: nonconst |
| Country | GetInvestmentPoolChangeFromInvestmentDesc |  | CString | Category: nonconst |
| Country | GetInvestmentPoolPredictedNextBuildingDesc |  | CString | Category: nonconst |
| Country | GetJournalEntry | 1. Unknown | JournalEntry | Category: nonconst |
| Country | GetKillRateNavy |  | CFixedPoint | Category: nonconst |
| Country | GetLabel | 1. Country | CString | Category: nonconst |
| Country | GetLackOfAutonomousInvestmentReasonDesc |  | CString | Category: nonconst |
| Country | GetLastCatalystExpiryDate | 1. Country 2. DiplomaticCatalyst | CString | Category: nonconst |
| Country | GetLastElectionResultsTooltip |  | CString | Category: nonconst |
| Country | GetLawBeingEnacted |  | Law | Category: nonconst |
| Country | GetLawBeingEnactedFromGroup | 1. Unknown | Law | Category: nonconst |
| Country | GetLawEnactmentProgress |  | CFixedPoint | Category: nonconst |
| Country | GetLawEnactmentProgressDesc |  | CString | Category: nonconst |
| Country | GetLeaderReligionPercentage |  | CFixedPoint | Category: nonconst |
| Country | GetLeverageAdvantage | 1. PowerBloc | CFixedPoint | Category: nonconst |
| Country | GetLeverageAdvantageTarget | 1. PowerBloc | CFixedPoint | Category: nonconst |
| Country | GetLeverageBreakdown |  | CString | Category: nonconst |
| Country | GetLeverageComparisonDesc | 1. PowerBloc | CString | Category: nonconst |
| Country | GetLeverageGain | 1. PowerBloc | CFixedPoint | Category: nonconst |
| Country | GetLeverageGainBreakdown | 1. PowerBloc | CString | Category: nonconst |
| Country | GetLeverageResistance |  | CFixedPoint | Category: nonconst |
| Country | GetLeverageTarget | 1. PowerBloc | CFixedPoint | Category: nonconst |
| Country | GetLeverageTooltip |  | CString | Category: nonconst |
| Country | GetLibertyDesireLevelLabel |  | CString | Category: nonconst |
| Country | GetLibertyDesireRaw |  | CFixedPoint | Category: nonconst |
| Country | GetLimitedMassMigrationCountryAttraction |  | CFixedPoint | Category: nonconst |
| Country | GetLobbyJournalEntries |  | Unknown | Category: nonconst |
| Country | GetLowerStrataPopulationTrend |  | DataTrend | Category: nonconst |
| Country | GetLoyalistsChangeSummary |  | CString | Category: nonconst |
| Country | GetLoyalistsDecreaseBreakdown |  | CString | Category: nonconst |
| Country | GetLoyalistsIncreaseBreakdown |  | CString | Category: nonconst |
| Country | GetLoyalistsOrRadicalsGainedFromLegitimacy |  | int64 | Category: nonconst |
| Country | GetLoyalistsOrRadicalsGainedFromLegitimacyModifierDescription | 1. Unknown | CString | Category: nonconst |
| Country | GetLoyalistsSummaryDesc |  | CString | Category: nonconst |
| Country | GetLoyalistsTrend |  | DataTrend | Category: nonconst |
| Country | GetLoyaltiesGain |  | CFixedPoint | Category: nonconst |
| Country | GetMapColor |  | CVector4f | Category: nonconst |
| Country | GetMarginalAndInactivePopulationInCountryAsPercentage |  | float | Category: nonconst |
| Country | GetMarginalCloutInCountryAsPercentage |  | float | Category: nonconst |
| Country | GetMarginalInterestGroupsDesc |  | CString | Category: nonconst |
| Country | GetMarginalInterestGroupsPopulationDesc |  | CString | Category: nonconst |
| Country | GetMarket |  | Market | Category: nonconst |
| Country | GetMarketOwnerName |  | CString | Category: nonconst |
| Country | GetMassMigrationAttractionBreakdown |  | CString | Category: nonconst |
| Country | GetMassMigrationAttractionDesc |  | CString | Category: nonconst |
| Country | GetMaxCloutOrPopulationPercentage |  | float | Category: nonconst |
| Country | GetMaxCredit |  | CFixedPoint | Category: nonconst |
| Country | GetMaxFreeCharters |  | int32 | Category: nonconst |
| Country | GetMaxLawEnactmentSetbacks |  | int32 | Category: nonconst |
| Country | GetMaxNumCompanies |  | int32 | Category: nonconst |
| Country | GetMaxNumCompaniesDesc |  | CString | Category: nonconst |
| Country | GetMaxNumDeclaredInterestsBreakdown |  | CString | Category: nonconst |
| Country | GetMaxPowerStruggleMonth |  | int32 | Category: nonconst |
| Country | GetMaxWeeklyTechnologyProgressForTech | 1. Unknown | CFixedPoint | Category: nonconst |
| Country | GetMaxWeeklyTechnologySpread |  | CFixedPoint | Category: nonconst |
| Country | GetMaxWeeklyTechnologySpreadForTech | 1. Unknown | CFixedPoint | Category: nonconst |
| Country | GetMiddleStrataPopulationTrend |  | DataTrend | Category: nonconst |
| Country | GetMilitaryFormationsArmy |  | Unknown | Category: nonconst |
| Country | GetMilitaryFormationsFleet |  | Unknown | Category: nonconst |
| Country | GetMilitaryGoodsExpenseTrend |  | DataTrend | Category: nonconst |
| Country | GetMilitaryGoodsExpenses |  | CFixedPoint | Category: nonconst |
| Country | GetMilitaryGoodsExpensesByGoodsDesc |  | CString | Category: nonconst |
| Country | GetMilitaryGoodsExpensesDesc |  | CString | Category: nonconst |
| Country | GetMilitaryInterfaceColor |  | CVector4f | Category: nonconst |
| Country | GetMilitarySlavesExpenseTrend |  | DataTrend | Category: nonconst |
| Country | GetMilitarySlavesExpenses |  | CFixedPoint | Category: nonconst |
| Country | GetMilitarySlavesExpensesDesc |  | CString | Category: nonconst |
| Country | GetMilitaryWageLevelDescHigh |  | CString | Category: nonconst |
| Country | GetMilitaryWageLevelDescLow |  | CString | Category: nonconst |
| Country | GetMilitaryWageLevelDescMedium |  | CString | Category: nonconst |
| Country | GetMilitaryWageLevelDescVeryHigh |  | CString | Category: nonconst |
| Country | GetMilitaryWageLevelDescVeryLow |  | CString | Category: nonconst |
| Country | GetMilitaryWagesExpenseTrend |  | DataTrend | Category: nonconst |
| Country | GetMilitaryWagesExpenses |  | CFixedPoint | Category: nonconst |
| Country | GetMilitaryWagesExpensesDesc |  | CString | Category: nonconst |
| Country | GetMinWeeklyTechnologyProgressForTech | 1. Technology | CFixedPoint | Category: nonconst |
| Country | GetMinWeeklyTechnologySpread |  | CFixedPoint | Category: nonconst |
| Country | GetMinWeeklyTechnologySpreadForTech | 1. Unknown | CFixedPoint | Category: nonconst |
| Country | GetMintingTrend |  | DataTrend | Category: nonconst |
| Country | GetMobilizationRatio |  | CFixedPoint | Category: nonconst |
| Country | GetModifier |  | Modifier | Category: nonconst |
| Country | GetMoveCapitalEffectsDesc |  | CString | Category: nonconst |
| Country | GetMoveMarketCapitalEffectsDesc |  | CString | Category: nonconst |
| Country | GetName |  | CString | Category: nonconst |
| Country | GetNameNoFlag |  | CString | Category: nonconst |
| Country | GetNameNoFormatting |  | CString | Category: nonconst |
| Country | GetNavyPowerProjection |  | CFixedPoint | Category: nonconst |
| Country | GetNavyPowerProjectionDesc |  | CString | Category: nonconst |
| Country | GetNegotiatingInterestGroup |  | InterestGroup | Category: nonconst |
| Country | GetNextElectionDate |  | CString | Category: nonconst |
| Country | GetNextRank |  | CString | Category: nonconst |
| Country | GetNextRankDesc |  | CString | Category: nonconst |
| Country | GetNextRankNumber |  | int32 | Category: nonconst |
| Country | GetNextStartOfCampaignDate |  | CString | Category: nonconst |
| Country | GetNonPotentialDiploPlays |  | Unknown | Category: nonconst |
| Country | GetNonSubjectDiplomaticPactsWith | 1. Country | Unknown | Category: nonconst |
| Country | GetNumActiveConstructionQueueElements |  | int32 | Category: nonconst |
| Country | GetNumActiveGovernmentConstructionQueueElements |  | int32 | Category: nonconst |
| Country | GetNumActivePrivateConstructionQueueElements |  | int32 | Category: nonconst |
| Country | GetNumActiveShownConstructionQueueElements |  | int32 | Category: nonconst |
| Country | GetNumActiveShownGovernmentConstructionQueueElements |  | int32 | Category: nonconst |
| Country | GetNumActiveShownPrivateConstructionQueueElements |  | int32 | Category: nonconst |
| Country | GetNumAvailableCompanies |  | int32 | Category: nonconst |
| Country | GetNumAvailableConvoys |  | int32 | Category: nonconst |
| Country | GetNumAvailableNegotiations |  | int32 | Category: nonconst |
| Country | GetNumBattalions |  | int32 | Category: nonconst |
| Country | GetNumBuildingsInConstructionQueueInState | 1. State | int32 | Category: nonconst |
| Country | GetNumBuildingsUnderConstructionInState | 1. State | int32 | Category: nonconst |
| Country | GetNumCombatUnits |  | int32 | Category: nonconst |
| Country | GetNumCompanies |  | int32 | Category: nonconst |
| Country | GetNumConvoys |  | int32 | Category: nonconst |
| Country | GetNumConvoysDamagedDesc |  | CString | Category: nonconst |
| Country | GetNumConvoysDesc |  | CString | Category: nonconst |
| Country | GetNumDamagedConvoys |  | int32 | Category: nonconst |
| Country | GetNumDeclaredInterests |  | int32 | Category: nonconst |
| Country | GetNumFlotillas |  | int32 | Category: nonconst |
| Country | GetNumGovernmentConstructionsInQueue |  | int32 | Category: nonconst |
| Country | GetNumInactiveAndNonShownGovernmentConstructionQueueElements |  | int32 | Category: nonconst |
| Country | GetNumInactiveAndNonShownPrivateConstructionQueueElements |  | int32 | Category: nonconst |
| Country | GetNumInactiveConstructionQueueElements |  | int32 | Category: nonconst |
| Country | GetNumInactiveGovernmentConstructionQueueElements |  | int32 | Category: nonconst |
| Country | GetNumInactivePrivateConstructionQueueElements |  | int32 | Category: nonconst |
| Country | GetNumIncorporatedLiteratePops |  | int64 | Category: nonconst |
| Country | GetNumIncorporatedStates |  | int32 | Category: nonconst |
| Country | GetNumIncorporatedStatesDesc |  | CString | Category: nonconst |
| Country | GetNumInsufficientTaxCapacityStates |  | int32 | Category: nonconst |
| Country | GetNumInterestGroupMembers |  | int64 | Category: nonconst |
| Country | GetNumIsolatedStates |  | int32 | Category: nonconst |
| Country | GetNumLowMarketAccessStates |  | int32 | Category: nonconst |
| Country | GetNumLoyalists |  | int64 | Category: nonconst |
| Country | GetNumNeutrals |  | int64 | Category: nonconst |
| Country | GetNumPoliticallyInactiveLoyalists |  | int64 | Category: nonconst |
| Country | GetNumPoliticallyInactiveNeutrals |  | int64 | Category: nonconst |
| Country | GetNumPoliticallyInactiveRadicals |  | int64 | Category: nonconst |
| Country | GetNumPrivateConstructionsInQueue |  | int32 | Category: nonconst |
| Country | GetNumRadicals |  | int64 | Category: nonconst |
| Country | GetNumStatesThatCanBeIncorporated |  | int32 | Category: nonconst |
| Country | GetNumStatesWithConstruction |  | int32 | Category: nonconst |
| Country | GetNumStatesWithoutConstruction |  | int32 | Category: nonconst |
| Country | GetNumTotalLiteratePops |  | int64 | Category: nonconst |
| Country | GetNumTurmoilStates |  | int32 | Category: nonconst |
| Country | GetNumUnincorporatedStates |  | int32 | Category: nonconst |
| Country | GetNumUnincorporatedStatesDesc |  | CString | Category: nonconst |
| Country | GetNumUsableConvoys |  | int32 | Category: nonconst |
| Country | GetNumberOfActiveConscriptionCenters |  | int32 | Category: nonconst |
| Country | GetNumberOfInactiveConscriptionCenters |  | int32 | Category: nonconst |
| Country | GetObjective |  | Objective | Category: nonconst |
| Country | GetObligationFromExpirationDate | 1. Country | CString | Category: nonconst |
| Country | GetObligationFromExpirationDesc | 1. Country | CString | Category: nonconst |
| Country | GetObligationToExpirationDate | 1. Country | CString | Category: nonconst |
| Country | GetObligationToExpirationDesc | 1. Country | CString | Category: nonconst |
| Country | GetObligationsOwedFrom |  | Unknown | Category: nonconst |
| Country | GetObligationsOwedTo |  | Unknown | Category: nonconst |
| Country | GetOppositionInterestGroupsDesc |  | CString | Category: nonconst |
| Country | GetOppositionInterestGroupsPopulationDesc |  | CString | Category: nonconst |
| Country | GetOtherPowerBlocWithHighestLeverage | 1. Unknown | PowerBloc | Category: nonconst |
| Country | GetOverlord |  | Country | Category: nonconst |
| Country | GetOwningCompany |  | Company | Category: nonconst |
| Country | GetPartiesInGovernment |  | Unknown | Category: nonconst |
| Country | GetPartiesInOpposition |  | Unknown | Category: nonconst |
| Country | GetPeopleAbroad |  | int64 | Category: nonconst |
| Country | GetPlayedByDesc |  | CString | Category: nonconst |
| Country | GetPlayer |  | Player | Category: nonconst |
| Country | GetPoliticalLobbies |  | Unknown | Category: nonconst |
| Country | GetPoliticallyInvolvedPercentage |  | CFixedPoint | Category: nonconst |
| Country | GetPoliticallyInvolvedPopulation |  | int64 | Category: nonconst |
| Country | GetPoliticallyInvolvedPopulationDesc |  | CString | Category: nonconst |
| Country | GetPollTaxIncome |  | CFixedPoint | Category: nonconst |
| Country | GetPollTaxTrend |  | DataTrend | Category: nonconst |
| Country | GetPopConsumptionDependenceOn | 1. Unknown | CString | Category: nonconst |
| Country | GetPopConsumptionDependenceOnDesc | 1. Unknown | CString | Category: nonconst |
| Country | GetPopConsumptionDependenceOnRaw | 1. Unknown | CFixedPoint | Category: nonconst |
| Country | GetPopGrowthDesc |  | CString | Category: nonconst |
| Country | GetPopReligions |  | Unknown | Category: nonconst |
| Country | GetPopulationRanking |  | CString | Category: nonconst |
| Country | GetPopulationTrend |  | DataTrend | Category: nonconst |
| Country | GetPotentialCompanies |  | Unknown | Category: nonconst |
| Country | GetPotentialDiploPlays |  | Unknown | Category: nonconst |
| Country | GetPotentialGeneralDiploActions |  | Unknown | Category: nonconst |
| Country | GetPotentialInvestors |  | Unknown | Category: nonconst |
| Country | GetPotentialLabor |  | int64 | Category: nonconst |
| Country | GetPotentialOverlordDiploActions |  | Unknown | Category: nonconst |
| Country | GetPotentialPowerBlocLeaderDiploActions |  | Unknown | Category: nonconst |
| Country | GetPotentialPowerBlocMemberDiploActions |  | Unknown | Category: nonconst |
| Country | GetPotentialSubjectDiploActions |  | Unknown | Category: nonconst |
| Country | GetPowerBloc |  | PowerBloc | Category: nonconst |
| Country | GetPowerBlocExpenseDesc |  | CString | Category: nonconst |
| Country | GetPowerBlocExpenseRaw |  | CFixedPoint | Category: nonconst |
| Country | GetPowerBlocExpenseTrend |  | DataTrend | Category: nonconst |
| Country | GetPowerBlocIncomeDesc |  | CString | Category: nonconst |
| Country | GetPowerBlocIncomeRaw |  | CFixedPoint | Category: nonconst |
| Country | GetPowerBlocIncomeTrend |  | DataTrend | Category: nonconst |
| Country | GetPowerBlocNonMemberCountryTooltip |  | CString | Category: nonconst |
| Country | GetPowerBlocWithHighestLeverage |  | PowerBloc | Category: nonconst |
| Country | GetPowerBlocsTotalLeverageShare |  | CFixedPoint | Category: nonconst |
| Country | GetPowerBlocsWithLeverage |  | Unknown | Category: nonconst |
| Country | GetPowerDelta | 1. CString | CFixedPoint | Category: nonconst |
| Country | GetPowerDeltaIcon | 1. CString | CString | Category: nonconst |
| Country | GetPowerExpensesString | 1. CString | CString | Category: nonconst |
| Country | GetPowerIncome | 1. CString | CFixedPoint | Category: nonconst |
| Country | GetPowerIncomeString | 1. CString | CString | Category: nonconst |
| Country | GetPowerTooltip | 1. CString | CString | Category: nonconst |
| Country | GetPredictedBalanceFromBankruptcy |  | CFixedPoint | Category: nonconst |
| Country | GetPrestige |  | int32 | Category: nonconst |
| Country | GetPrestigeDesc |  | CString | Category: nonconst |
| Country | GetPrestigeForCurrentRank |  | int32 | Category: nonconst |
| Country | GetPrestigeForNextRank |  | int32 | Category: nonconst |
| Country | GetPrestigeGoodsLeaderboardDesc |  | CString | Category: nonconst |
| Country | GetPrestigeToMaintainRank |  | int32 | Category: nonconst |
| Country | GetPrestigeTrend |  | DataTrend | Category: nonconst |
| Country | GetPreviousAttitudeTowards | 1. Unknown | AIAttitude | Category: nonconst |
| Country | GetPreviousAutonomousInvestmentsDesc |  | CString | Category: nonconst |
| Country | GetPreviousRank |  | CString | Category: nonconst |
| Country | GetPriceReportDesc |  | CString | Category: nonconst |
| Country | GetPrimaryCulturesDesc |  | CString | Category: nonconst |
| Country | GetPrincipal |  | CFixedPoint | Category: nonconst |
| Country | GetPrivateConstructionGoodsExpenses |  | CFixedPoint | Category: nonconst |
| Country | GetPrivateConstructionGoodsExpensesByGoodsDesc |  | CString | Category: nonconst |
| Country | GetPrivateConstructionQueueDesc |  | CString | Category: nonconst |
| Country | GetRadicalizationFromBankruptcy |  | int64 | Category: nonconst |
| Country | GetRadicalsChangeSummary |  | CString | Category: nonconst |
| Country | GetRadicalsDecreaseBreakdown |  | CString | Category: nonconst |
| Country | GetRadicalsIncreaseBreakdown |  | CString | Category: nonconst |
| Country | GetRadicalsLoyalistsChangeStartDate |  | CString | Category: nonconst |
| Country | GetRadicalsSummaryDesc |  | CString | Category: nonconst |
| Country | GetRadicalsTrend |  | DataTrend | Category: nonconst |
| Country | GetRank |  | CString | Category: nonconst |
| Country | GetRankDesc |  | CString | Category: nonconst |
| Country | GetRankIconIndex |  | int32 | Category: nonconst |
| Country | GetRankModifier |  | Modifier | Category: nonconst |
| Country | GetRankNumber |  | int32 | Category: nonconst |
| Country | GetRankProgress |  | float | Category: nonconst |
| Country | GetRankTooltip |  | CString | Category: nonconst |
| Country | GetRecentPartiesDesc |  | CString | Category: nonconst |
| Country | GetRegularBattalions |  | int32 | Category: nonconst |
| Country | GetReinforcementRateArmy |  | CFixedPoint | Category: nonconst |
| Country | GetReinforcementRateNavy |  | CFixedPoint | Category: nonconst |
| Country | GetRelationsColor | 1. Unknown | CVector4f | Category: nonconst |
| Country | GetRelationsIconTexture | 1. Country | Unknown | Category: nonconst |
| Country | GetRelationsProgress | 1. Unknown | CFixedPoint | Category: nonconst |
| Country | GetRelationsProgressDesc | 1. Unknown | CString | Category: nonconst |
| Country | GetRelationsTooltip | 1. Country | CString | Category: nonconst |
| Country | GetRelationsWith | 1. Country | int32 | Category: nonconst |
| Country | GetRelationsWithDesc | 1. Country | CString | Category: nonconst |
| Country | GetRelativePrestige | 1. Country | CFixedPoint | Category: nonconst |
| Country | GetRemainingCredit |  | CFixedPoint | Category: nonconst |
| Country | GetRemainingDaysForFreeGovernmentReformRaw |  | int32 | Category: nonconst |
| Country | GetRequiredConvoys |  | int32 | Category: nonconst |
| Country | GetRequiredConvoysBreakdown |  | CString | Category: nonconst |
| Country | GetResearchQueueBottom |  | Unknown | Category: nonconst |
| Country | GetResearchQueueTop |  | Unknown | Category: nonconst |
| Country | GetRuler |  | Character | Category: nonconst |
| Country | GetRulingIGsDesc |  | CString | Category: nonconst |
| Country | GetSOLDescForAllStratas |  | CString | Category: nonconst |
| Country | GetSalariedWorkingAdults |  | int64 | Category: nonconst |
| Country | GetSeaNodesMightBeConvoyRaidedInDesc |  | CString | Category: nonconst |
| Country | GetSelectedLaw |  | Law | Category: nonconst |
| Country | GetSocialHierarchy |  | SocialHierarchy | Category: nonconst |
| Country | GetSpecialSocialHierarchy |  | SocialHierarchy | Category: nonconst |
| Country | GetStandardOfLivingRanking |  | CString | Category: nonconst |
| Country | GetStateOwnedBuildingsBureaucracyCostForLevels | 1. int32 | CFixedPoint | Category: nonconst |
| Country | GetStateReligion |  | Religion | Category: nonconst |
| Country | GetStatesInTurmoilBreakdown |  | CString | Category: nonconst |
| Country | GetStatus | 1. Country | CString | Category: nonconst |
| Country | GetStrategicObjectives |  | Unknown | Category: nonconst |
| Country | GetStrategicRegions |  | Unknown | Category: nonconst |
| Country | GetSubjectOrPowerBlocHierarchyLabel | 1. Country | CString | Category: nonconst |
| Country | GetSubjectPact |  | DiplomaticPact | Category: nonconst |
| Country | GetSubjectType |  | SubjectType | Category: nonconst |
| Country | GetSubjectTypeName |  | CString | Category: nonconst |
| Country | GetSubjects |  | Unknown | Category: nonconst |
| Country | GetSubjectsOfType | 1. SubjectType | Unknown | Category: nonconst |
| Country | GetSubsidiesExpenseTrend |  | DataTrend | Category: nonconst |
| Country | GetSubsidiesExpenses |  | CFixedPoint | Category: nonconst |
| Country | GetSubsidiesExpensesDesc |  | CString | Category: nonconst |
| Country | GetSubsistingWorkingAdults |  | int64 | Category: nonconst |
| Country | GetSubventionsExpenseTrend |  | DataTrend | Category: nonconst |
| Country | GetSubventionsExpenses |  | CFixedPoint | Category: nonconst |
| Country | GetSubventionsExpensesDesc |  | CString | Category: nonconst |
| Country | GetSupplyNetworkNumSeaNodes |  | int32 | Category: nonconst |
| Country | GetSupplyNetworkNumSeaNodesDesc |  | CString | Category: nonconst |
| Country | GetSupplyNetworkStrength |  | CFixedPoint | Category: nonconst |
| Country | GetSuppressionCostDesc |  | CString | Category: nonconst |
| Country | GetSuppressionDesc |  | CString | Category: nonconst |
| Country | GetTagName |  | CString | Category: nonconst |
| Country | GetTargetLeverage | 1. Unknown | CFixedPoint | Category: nonconst |
| Country | GetTargetLeverageShare | 1. PowerBloc | CFixedPoint | Category: nonconst |
| Country | GetTargetRank |  | CString | Category: nonconst |
| Country | GetTariffTrend |  | DataTrend | Category: nonconst |
| Country | GetTaxIncomeFor | 1. Unknown | CFixedPoint | Category: nonconst |
| Country | GetTaxIncomeTrend |  | DataTrend | Category: nonconst |
| Country | GetTaxLevelDescHigh |  | CString | Category: nonconst |
| Country | GetTaxLevelDescLow |  | CString | Category: nonconst |
| Country | GetTaxLevelDescMedium |  | CString | Category: nonconst |
| Country | GetTaxLevelDescVeryHigh |  | CString | Category: nonconst |
| Country | GetTaxLevelDescVeryLow |  | CString | Category: nonconst |
| Country | GetTensionIconTexture | 1. Country | Unknown | Category: nonconst |
| Country | GetTensionTooltip | 1. Country | CString | Category: nonconst |
| Country | GetTensionWith | 1. Country | int32 | Category: nonconst |
| Country | GetTensionWithDesc | 1. Country | CString | Category: nonconst |
| Country | GetTimeUntilTargetReachedArmy |  | CString | Category: nonconst |
| Country | GetTimeUntilTargetReachedNavy |  | CString | Category: nonconst |
| Country | GetTimedModifierDurationRemaining | 1. Modifier | CString | Category: nonconst |
| Country | GetTimedModifiers |  | Unknown | Category: nonconst |
| Country | GetTooltipTag |  | CString | Category: nonconst |
| Country | GetTopOverlord |  | Country | Category: nonconst |
| Country | GetTotalAgitatorSlots |  | int32 | Category: nonconst |
| Country | GetTotalExpensesTrend |  | DataTrend | Category: nonconst |
| Country | GetTotalExportedAmount |  | CFixedPoint | Category: nonconst |
| Country | GetTotalForeignConstructions |  | int32 | Category: nonconst |
| Country | GetTotalGovernmentClout |  | CFixedPoint | Category: nonconst |
| Country | GetTotalImportedAmount |  | CFixedPoint | Category: nonconst |
| Country | GetTotalIncomeTrend |  | DataTrend | Category: nonconst |
| Country | GetTotalLeverageFactors |  | CFixedPoint | Category: nonconst |
| Country | GetTotalLeverageFactorsBreakdown |  | CString | Category: nonconst |
| Country | GetTotalLeverageFactorsWithResistance |  | CFixedPoint | Category: nonconst |
| Country | GetTotalLeverageFactorsWithResistanceBreakdown |  | CString | Category: nonconst |
| Country | GetTotalLiteracyRanking |  | CString | Category: nonconst |
| Country | GetTotalLiteracyRate |  | CFixedPoint | Category: nonconst |
| Country | GetTotalMarginalClout |  | CFixedPoint | Category: nonconst |
| Country | GetTotalNumLoyalistsChange |  | int64 | Category: nonconst |
| Country | GetTotalNumLoyalistsDecrease |  | int64 | Category: nonconst |
| Country | GetTotalNumLoyalistsIncrease |  | int64 | Category: nonconst |
| Country | GetTotalNumRadicalsChange |  | int64 | Category: nonconst |
| Country | GetTotalNumRadicalsDecrease |  | int64 | Category: nonconst |
| Country | GetTotalNumRadicalsIncrease |  | int64 | Category: nonconst |
| Country | GetTotalOppositionClout |  | CFixedPoint | Category: nonconst |
| Country | GetTotalPopulation |  | int64 | Category: nonconst |
| Country | GetTotalUrbanization |  | int32 | Category: nonconst |
| Country | GetTreatiesBrokenFromNeutralityDesc | 1. DiplomaticPlay | CString | Category: nonconst |
| Country | GetTreatiesExpenseTrend |  | DataTrend | Category: nonconst |
| Country | GetTreatiesIncomeTrend |  | DataTrend | Category: nonconst |
| Country | GetTreatiesWith | 1. Country | Unknown | Category: nonconst |
| Country | GetTreatiesWithDesc | 1. Country | CString | Category: nonconst |
| Country | GetTruceDate | 1. Country | CString | Category: nonconst |
| Country | GetUnclaimedLeverage |  | CFixedPoint | Category: nonconst |
| Country | GetUnclaimedLeverageFormatted |  | CString | Category: nonconst |
| Country | GetUnclaimedLeverageShare |  | CFixedPoint | Category: nonconst |
| Country | GetUnclaimedLeverageShareTarget |  | CFixedPoint | Category: nonconst |
| Country | GetUnclaimedLeverageTarget |  | CFixedPoint | Category: nonconst |
| Country | GetUnemployedWorkingAdults |  | int64 | Category: nonconst |
| Country | GetUnenforcedTreaties |  | Unknown | Category: nonconst |
| Country | GetUnenforcedTreatiesWith | 1. Country | Unknown | Category: nonconst |
| Country | GetUnenforcedTreatiesWithDesc | 1. Unknown | CString | Category: nonconst |
| Country | GetUnrealizedTaxes |  | CFixedPoint | Category: nonconst |
| Country | GetUpperStrataPopulationTrend |  | DataTrend | Category: nonconst |
| Country | GetUsedAgitatorSlots |  | int32 | Category: nonconst |
| Country | GetUsedFreeCharters |  | int32 | Category: nonconst |
| Country | GetWarships |  | int32 | Category: nonconst |
| Country | GetWeeklyBalance |  | CFixedPoint | Category: nonconst |
| Country | GetWeeklyCostArmy |  | CFixedPoint | Category: nonconst |
| Country | GetWeeklyCostNavy |  | CFixedPoint | Category: nonconst |
| Country | GetWeeklyExpenses |  | CFixedPoint | Category: nonconst |
| Country | GetWeeklyFixedExpenses |  | CFixedPoint | Category: nonconst |
| Country | GetWeeklyGDP |  | CFixedPoint | Category: nonconst |
| Country | GetWeeklyIncome |  | CFixedPoint | Category: nonconst |
| Country | GetWeeklyInnovation |  | CFixedPoint | Category: nonconst |
| Country | GetWeeklyInnovationDesc |  | CString | Category: nonconst |
| Country | GetWeeklyInterestRate |  | CFixedPoint | Category: nonconst |
| Country | GetWeeklyLeverageGain | 1. PowerBloc | CFixedPoint | Category: nonconst |
| Country | GetWeeklyLibertyDesireChange |  | CFixedPoint | Category: nonconst |
| Country | GetWeeklyLibertyDesireChangeDesc |  | CString | Category: nonconst |
| Country | GetWeeklyLibertyDesireChangeFromSupportIndependence |  | CFixedPoint | Category: nonconst |
| Country | GetWeeklyLibertyDesireChangeFromSupportIndependenceDesc |  | CString | Category: nonconst |
| Country | GetWeeklyMaxInnovation |  | CFixedPoint | Category: nonconst |
| Country | GetWeeklyMaxInnovationDesc |  | CString | Category: nonconst |
| Country | GetWeeklyRawInnovation |  | CFixedPoint | Category: nonconst |
| Country | GetWeeklyResearchSpeed |  | CFixedPoint | Category: nonconst |
| Country | GetWeeklyResearchSpeedDesc |  | CString | Category: nonconst |
| Country | GetWeeklyTechnologyProgressDescForTech | 1. Technology | CString | Category: nonconst |
| Country | GetWeeklyTechnologySpreadBreakdown |  | CString | Category: nonconst |
| Country | GetWeeklyTechnologySpreadDesc |  | CString | Category: nonconst |
| Country | GetWeeklyTechnologySpreadForTechDesc | 1. Technology | CString | Category: nonconst |
| Country | GetWeeklyTemporaryExpenses |  | CFixedPoint | Category: nonconst |
| Country | GetWeeklyTemporaryIncome |  | CFixedPoint | Category: nonconst |
| Country | GetWelfarePaymentsExpenses |  | CFixedPoint | Category: nonconst |
| Country | GetWelfarePaymentsTrend |  | DataTrend | Category: nonconst |
| Country | GetWorkingAdults |  | int64 | Category: nonconst |
| Country | GetYearlyInterestRate |  | CFixedPoint | Category: nonconst |
| Country | GetYouOrCountryName |  | CString | Category: nonconst |
| Country | GetZeroBalancePlotPoints |  | Unknown | Category: nonconst |
| Country | GetZeroMoneyPlotPoints |  | Unknown | Category: nonconst |
| Country | HasActiveDiplomacy |  | bool |  |
| Country | HasAnyAllianceLikeTreatiesWith | 1. Unknown | bool |  |
| Country | HasAnySlavery |  | bool |  |
| Country | HasAnyTaxes |  | bool |  |
| Country | HasConstructionQueued |  | bool |  |
| Country | HasCurrentlyResearchedTechnology |  | bool |  |
| Country | HasDamagedConvoys |  | bool |  |
| Country | HasDeclaredInterest | 1. Unknown | bool |  |
| Country | HasDecreasingInterests |  | bool |  |
| Country | HasDiplomaticPactWith | 1. Unknown 2. Unknown | bool |  |
| Country | HasElectionTrendData |  | bool |  |
| Country | HasElections |  | bool |  |
| Country | HasExportSubventionsHigh | 1. Goods | bool |  |
| Country | HasExportSubventionsLow | 1. Goods | bool |  |
| Country | HasExportSubventionsMax | 1. Goods | bool |  |
| Country | HasExportTariffsHigh | 1. Goods | bool |  |
| Country | HasExportTariffsLow | 1. Goods | bool |  |
| Country | HasExportTariffsMax | 1. Goods | bool |  |
| Country | HasExportTariffsNone | 1. Goods | bool |  |
| Country | HasForeignInvestmentRights | 1. Country | bool |  |
| Country | HasGovernmentWages |  | bool |  |
| Country | HasHeir |  | bool |  |
| Country | HasHigherUnclaimedLeverage |  | bool |  |
| Country | HasHigherUnclaimedLeverageTarget |  | bool |  |
| Country | HasIGApprovalFromLoyalists |  | bool |  |
| Country | HasIGApprovalFromRadicals |  | bool |  |
| Country | HasImportSubventionsHigh | 1. Goods | bool |  |
| Country | HasImportSubventionsLow | 1. Goods | bool |  |
| Country | HasImportSubventionsMax | 1. Goods | bool |  |
| Country | HasImportTariffsHigh | 1. Goods | bool |  |
| Country | HasImportTariffsLow | 1. Goods | bool |  |
| Country | HasImportTariffsMax | 1. Goods | bool |  |
| Country | HasImportTariffsNone | 1. Goods | bool |  |
| Country | HasInterestIn | 1. StrategicRegion | bool |  |
| Country | HasMilitaryWages |  | bool |  |
| Country | HasNewProductionMethodInGroup | 1. ProductionMethodGroup | bool |  |
| Country | HasNewProductionMethodInSameGroup | 1. BuildingType 2. ProductionMethod | bool |  |
| Country | HasObjective |  | bool |  |
| Country | HasOverlappingInterestsWith | 1. Unknown | bool |  |
| Country | HasOwningCompany |  | bool |  |
| Country | HasProgressingLawEnactment |  | bool |  |
| Country | HasRuler |  | bool |  |
| Country | HasSelectedLaw |  | bool |  |
| Country | HasSpecialSocialHierarchy |  | bool |  |
| Country | InDefault |  | bool |  |
| Country | IsAI |  | bool |  |
| Country | IsAIOrOtherPlayer |  | bool |  |
| Country | IsAlliedInDiploPlayWith | 1. Country | bool |  |
| Country | IsAnySubjectOf | 1. Unknown | bool |  |
| Country | IsAtWar |  | bool |  |
| Country | IsAtWarWith | 1. Country | bool |  |
| Country | IsBeingHighlighted |  | bool |  |
| Country | IsBeingTutorialHighlighted |  | bool |  |
| Country | IsColonizable |  | bool |  |
| Country | IsCommittedInDiplomaticPlay |  | bool |  |
| Country | IsConscripting |  | bool |  |
| Country | IsConstructionPaused |  | bool |  |
| Country | IsDead |  | bool |  |
| Country | IsDiplomaticallyRelevantCountry | 1. Unknown | bool |  |
| Country | IsEconomyHealthy |  | bool |  |
| Country | IsEconomyHealthyDesc |  | CString |  |
| Country | IsEnactingLaw |  | bool |  |
| Country | IsHighestRank |  | bool |  |
| Country | IsIgnoringCountryFormation | 1. CountryFormation | bool |  |
| Country | IsIgnoringDecision | 1. Decision | bool |  |
| Country | IsInElectionCampaignPeriod |  | bool |  |
| Country | IsInPowerBloc |  | bool |  |
| Country | IsInsurrectionary |  | bool |  |
| Country | IsInvolvedInActiveConflict |  | bool |  |
| Country | IsLocalPlayer |  | bool |  |
| Country | IsLowestRank |  | bool |  |
| Country | IsMobilized |  | bool |  |
| Country | IsNegotiating |  | bool |  |
| Country | IsNeighborsWith | 1. Unknown | bool |  |
| Country | IsNewProductionMethod | 1. ProductionMethod | bool |  |
| Country | IsObjectiveIdle |  | bool |  |
| Country | IsOtherPlayer |  | bool |  |
| Country | IsPinnedInOutliner |  | bool |  |
| Country | IsPlayer |  | bool |  |
| Country | IsPowerBlocLeader |  | bool |  |
| Country | IsPowerStruggling |  | bool |  |
| Country | IsRank | 1. Unknown | bool |  |
| Country | IsRevolutionary |  | bool |  |
| Country | IsSecessionist |  | bool |  |
| Country | IsSubject |  | bool |  |
| Country | IsSubjectOf | 1. Country | bool |  |
| Country | IsTaxingAnyGood |  | bool |  |
| Country | IsValid |  | bool |  |
| Country | LeavePowerBloc |  | Command |  |
| Country | MakeScope |  | Scope |  |
| Country | MobilizeAllArmies |  | Command |  |
| Country | OwesObligationTo | 1. Unknown | bool |  |
| Country | PauseConstruction |  | Command |  |
| Country | PauseConstructionTooltip |  | CString |  |
| Country | PredictBalanceWithoutTemporaryIncomeAndExpenses |  | CFixedPoint |  |
| Country | PredictConsumptionTaxes |  | CFixedPoint |  |
| Country | PredictDiplomaticPactsExpenses |  | CFixedPoint |  |
| Country | PredictDiplomaticPactsExpensesDesc |  | CString |  |
| Country | PredictDiplomaticPactsIncome |  | CFixedPoint |  |
| Country | PredictDiplomaticPactsIncomeDesc |  | CString |  |
| Country | PredictDividendsTaxes |  | CFixedPoint |  |
| Country | PredictDividendsTaxesDesc |  | CString |  |
| Country | PredictEconomyHealthDesc |  | CString |  |
| Country | PredictGovernmentShareDividends |  | CFixedPoint |  |
| Country | PredictGovernmentShareDividendsDesc |  | CString |  |
| Country | PredictGovernmentShareLosses |  | CFixedPoint |  |
| Country | PredictGovernmentShareLossesDesc |  | CString |  |
| Country | PredictGovernmentWagesExpenses |  | CFixedPoint |  |
| Country | PredictMaxWeeklyTechnologyProgressForTech | 1. Unknown | CFixedPoint |  |
| Country | PredictMilitaryWagesExpenses |  | CFixedPoint |  |
| Country | PredictMinWeeklyTechnologyProgressForTech | 1. Unknown | CFixedPoint |  |
| Country | PredictMinting |  | CFixedPoint |  |
| Country | PredictMintingDesc |  | CString |  |
| Country | PredictTariffs |  | CFixedPoint |  |
| Country | PredictTariffsDesc |  | CString |  |
| Country | PredictTotalMilitaryExpenses |  | CFixedPoint |  |
| Country | PredictTreatyExpenses |  | CFixedPoint |  |
| Country | PredictTreatyExpensesDesc |  | CString |  |
| Country | PredictTreatyIncome |  | CFixedPoint |  |
| Country | PredictTreatyIncomeDesc |  | CString |  |
| Country | PredictWeeklyBalance |  | CFixedPoint |  |
| Country | PredictWeeklyBalanceWithEconomyHealthHint |  | CString |  |
| Country | PredictWeeklyFixedIncome |  | CFixedPoint |  |
| Country | PredictWeeklyIncome |  | CFixedPoint |  |
| Country | RemoveCompany | 1. CompanyType | Command |  |
| Country | ResumeConstruction |  | Command |  |
| Country | ResumeConstructionTooltip |  | CString |  |
| Country | Self |  | Country |  |
| Country | SetExportSubventionsHigh | 1. Goods | Command |  |
| Country | SetExportSubventionsLow | 1. Goods | Command |  |
| Country | SetExportSubventionsMax | 1. Goods | Command |  |
| Country | SetExportTariffsHigh | 1. Goods | Command |  |
| Country | SetExportTariffsLow | 1. Goods | Command |  |
| Country | SetExportTariffsMax | 1. Goods | Command |  |
| Country | SetExportTariffsNone | 1. Goods | Command |  |
| Country | SetGovernmentWageLevelHigh |  | Command |  |
| Country | SetGovernmentWageLevelLow |  | Command |  |
| Country | SetGovernmentWageLevelMedium |  | Command |  |
| Country | SetGovernmentWageLevelVeryHigh |  | Command |  |
| Country | SetGovernmentWageLevelVeryLow |  | Command |  |
| Country | SetImportSubventionsHigh | 1. Goods | Command |  |
| Country | SetImportSubventionsLow | 1. Goods | Command |  |
| Country | SetImportSubventionsMax | 1. Goods | Command |  |
| Country | SetImportTariffsHigh | 1. Goods | Command |  |
| Country | SetImportTariffsLow | 1. Goods | Command |  |
| Country | SetImportTariffsMax | 1. Goods | Command |  |
| Country | SetImportTariffsNone | 1. Goods | Command |  |
| Country | SetMilitaryWageLevelHigh |  | Command |  |
| Country | SetMilitaryWageLevelLow |  | Command |  |
| Country | SetMilitaryWageLevelMedium |  | Command |  |
| Country | SetMilitaryWageLevelVeryHigh |  | Command |  |
| Country | SetMilitaryWageLevelVeryLow |  | Command |  |
| Country | SetTaxLevelHigh |  | Command |  |
| Country | SetTaxLevelLow |  | Command |  |
| Country | SetTaxLevelMedium |  | Command |  |
| Country | SetTaxLevelVeryHigh |  | Command |  |
| Country | SetTaxLevelVeryLow |  | Command |  |
| Country | ShowInvestmentPoolPredictedNextBuilding |  | bool |  |
| Country | SortCompanies | 1. Unknown | void |  |
| Country | SortCultures | 1. CString | void |  |
| Country | SortReligions | 1. CString | void |  |
| Country | SortStates | 1. Unknown | void |  |
| Country | SortSubjects | 1. CString | void |  |
| Country | StartNegotiationWith | 1. InterestGroup | Command |  |
| Country | ToggleIgnoreCountryFormation | 1. CountryFormation | Command |  |
| Country | ToggleIgnoreDecision | 1. Decision | Command |  |
| Country | TogglePinInOutliner |  | void |  |
| Country | TryGetOverlordTooltipEntry |  | CString |  |
| Country | TryGetSubjectsTooltipEntry |  | CString |  |
| CountryCreation | AccessSelf |  | CountryCreation | Category: const |
| CountryCreation | CanReleaseCountry | 1. Country | bool |  |
| CountryCreation | CanReleaseCountryAs | 1. Unknown 2. Unknown | bool |  |
| CountryCreation | GetAdjective |  | CString | Category: nonconst |
| CountryCreation | GetCapital |  | StateRegion | Category: nonconst |
| CountryCreation | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| CountryCreation | GetDefinition |  | CountryDefinition | Category: nonconst |
| CountryCreation | GetName |  | CString | Category: nonconst |
| CountryCreation | GetNumControlledStates | 1. Unknown | int32 | Category: nonconst |
| CountryCreation | GetNumProvincesToRelease |  | int32 | Category: nonconst |
| CountryCreation | GetNumReleasableStates | 1. Country | int32 | Category: nonconst |
| CountryCreation | GetNumRequiredStates |  | int32 | Category: nonconst |
| CountryCreation | GetReleaseDesc | 1. Country | CString | Category: nonconst |
| CountryCreation | GetTooltipTag |  | CString | Category: nonconst |
| CountryCreation | GetTotalNumStates |  | int32 | Category: nonconst |
| CountryCreation | IsReleasedInSpecificProvinces |  | bool |  |
| CountryCreation | IsValid |  | bool |  |
| CountryCreation | ListCultures |  | CString |  |
| CountryCreation | ListPotentialReleasableStates | 1. Country | CString |  |
| CountryCreation | ListPotentialStates | 1. Country | CString |  |
| CountryCreation | ListReleasableStates | 1. Country | CString |  |
| CountryCreation | ListReleasableStatesWithoutHomeland | 1. Country | CString |  |
| CountryCreation | MakeScope |  | Scope |  |
| CountryCreation | Self |  | CountryCreation |  |
| CountryCreation | ShowRequiredNumStates | 1. Country | bool |  |
| CountryDefinition | AccessSelf |  | CountryDefinition | Category: const |
| CountryDefinition | GetAdjective |  | CString | Category: nonconst |
| CountryDefinition | GetBaseFlag |  | CoatOfArms | Category: nonconst |
| CountryDefinition | GetColor |  | CVector4f | Category: nonconst |
| CountryDefinition | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| CountryDefinition | GetFlag | 1. CString | CoatOfArms | Category: nonconst |
| CountryDefinition | GetName |  | CString | Category: nonconst |
| CountryDefinition | GetPrimaryCulture |  | Culture | Category: nonconst |
| CountryDefinition | GetPrimaryCultureName |  | CString | Category: nonconst |
| CountryDefinition | GetTier |  | CString | Category: nonconst |
| CountryDefinition | GetTooltipTag |  | CString | Category: nonconst |
| CountryDefinition | IsValid |  | bool |  |
| CountryDefinition | MakeScope |  | Scope |  |
| CountryDefinition | Self |  | CountryDefinition |  |
| CountryEntry | AccessSelf |  | CountryEntry | Category: const |
| CountryEntry | GetCountry |  | CUTF8String | Category: nonconst |
| CountryEntry | Self |  | CountryEntry |  |
| CountryFormation | AccessFormationCandidates |  | Unknown | Category: const |
| CountryFormation | AccessFormationCultureCountries |  | Unknown | Category: const |
| CountryFormation | AccessFormationStateRegions |  | Unknown | Category: const |
| CountryFormation | AccessSelf |  | CountryFormation | Category: const |
| CountryFormation | CanFormCountry | 1. Unknown | bool |  |
| CountryFormation | CanLaunchLeadershipPlay | 1. Country | bool |  |
| CountryFormation | CanLaunchUnificationPlay |  | bool |  |
| CountryFormation | ControlsStateRegion | 1. Country 2. StateRegion | bool |  |
| CountryFormation | FormCountry | 1. Country | Command |  |
| CountryFormation | GetAdjective |  | CString | Category: nonconst |
| CountryFormation | GetControlsStateRegionDesc | 1. Country 2. StateRegion | CString | Category: nonconst |
| CountryFormation | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| CountryFormation | GetDefinition |  | CountryDefinition | Category: nonconst |
| CountryFormation | GetFormDesc | 1. Country | CString | Category: nonconst |
| CountryFormation | GetName |  | CString | Category: nonconst |
| CountryFormation | GetNumControlledStates | 1. Country | int32 | Category: nonconst |
| CountryFormation | GetNumRequiredStates |  | int32 | Category: nonconst |
| CountryFormation | GetNumSupportingCountries | 1. Country | int32 | Category: nonconst |
| CountryFormation | GetSupportCandidateDesc | 1. Country 2. Country | CString | Category: nonconst |
| CountryFormation | GetSupportForAllCandidatesDesc | 1. Country | CString | Category: nonconst |
| CountryFormation | GetSupportForCandidateBreakdown | 1. Unknown 2. Unknown | CString | Category: nonconst |
| CountryFormation | GetSupportedCandidateCountry | 1. Unknown | Country | Category: nonconst |
| CountryFormation | GetSupportingCountriesDesc | 1. Country | CString | Category: nonconst |
| CountryFormation | GetTooltipTag |  | CString | Category: nonconst |
| CountryFormation | GetTotalNumStates |  | int32 | Category: nonconst |
| CountryFormation | GetTriggerLeadershipPlayDesc | 1. Country 2. Country | CString | Category: nonconst |
| CountryFormation | GetTriggerUnificationPlayDesc | 1. Country | CString | Category: nonconst |
| CountryFormation | IsCandidateForFormation | 1. Unknown | bool |  |
| CountryFormation | IsMajorFormation |  | bool |  |
| CountryFormation | IsSupportingAnyCandidate | 1. Unknown | bool |  |
| CountryFormation | IsSupportingCandidate | 1. Unknown 2. Unknown | bool |  |
| CountryFormation | ListCultures |  | CString |  |
| CountryFormation | ListRequiredStates | 1. Country | CString |  |
| CountryFormation | MakeScope |  | Scope |  |
| CountryFormation | Self |  | CountryFormation |  |
| CountryFormation | ShowLeadershipPlayConfirmation | 1. Unknown | void |  |
| CountryFormation | ShowUnificationPlayConfirmation |  | void |  |
| CountryFormation | SupportCandidate | 1. Unknown 2. Unknown | Command |  |
| CountryFormationPanel | AccessCountryFormation |  | CountryFormation | Category: const |
| CountryFormationPanel | AccessSelf |  | CountryFormationPanel | Category: const |
| CountryFormationPanel | GetCountryFormation |  | CountryFormation | Category: nonconst |
| CountryFormationPanel | Self |  | CountryFormationPanel |  |
| CountryMarker | AccessSelf |  | CountryMarker | Category: const |
| CountryMarker | Self |  | CountryMarker |  |
| CountryPanel | AccessSelf |  | CountryPanel | Category: const |
| CountryPanel | Self |  | CountryPanel |  |
| CountryTrendPair | AccessSelf |  | CountryTrendPair | Category: const |
| CountryTrendPair | GetCountry |  | Country | Category: nonconst |
| CountryTrendPair | GetTrend |  | DataTrend | Category: nonconst |
| CountryTrendPair | Self |  | CountryTrendPair |  |
| CreateAccount | AccessSelf |  | CreateAccount | Category: const |
| CreateAccount | CanCreateAccount |  | bool |  |
| CreateAccount | CreateAccount |  | void |  |
| CreateAccount | GetCountries |  | Unknown | Category: nonconst |
| CreateAccount | GetDays |  | Unknown | Category: nonconst |
| CreateAccount | GetEmail |  | CUTF8String | Category: nonconst |
| CreateAccount | GetErrorMessage |  | CUTF8String | Category: nonconst |
| CreateAccount | GetMonths |  | Unknown | Category: nonconst |
| CreateAccount | GetOptedIntoMarketingChecked |  | bool | Category: nonconst |
| CreateAccount | GetPassword |  | CUTF8String | Category: nonconst |
| CreateAccount | GetSelectedCountryIndex |  | CVector2i | Category: nonconst |
| CreateAccount | GetSelectedDayIndex |  | CVector2i | Category: nonconst |
| CreateAccount | GetSelectedMonthIndex |  | CVector2i | Category: nonconst |
| CreateAccount | GetSelectedYearIndex |  | CVector2i | Category: nonconst |
| CreateAccount | GetYears |  | Unknown | Category: nonconst |
| CreateAccount | Hide |  | void |  |
| CreateAccount | IsCreatingAccount |  | bool |  |
| CreateAccount | OnCountryChanged |  | void |  |
| CreateAccount | OnDayChanged |  | void |  |
| CreateAccount | OnMonthChanged |  | void |  |
| CreateAccount | OnOptedIntoMarketingToggled |  | void |  |
| CreateAccount | OnYearChanged |  | void |  |
| CreateAccount | Self |  | CreateAccount |  |
| CreateAccount | SetEmail |  | void |  |
| CreateAccount | SetPassword |  | void |  |
| CreateAccount | Show |  | void |  |
| CreateSocialProfileWindow | AccessSelf |  | CreateSocialProfileWindow | Category: const |
| CreateSocialProfileWindow | Create |  | void |  |
| CreateSocialProfileWindow | GetErrorMessage |  | CString | Category: nonconst |
| CreateSocialProfileWindow | GetName |  | CString | Category: nonconst |
| CreateSocialProfileWindow | Hide |  | void |  |
| CreateSocialProfileWindow | IsCreatingProfile |  | bool |  |
| CreateSocialProfileWindow | IsValidName |  | bool |  |
| CreateSocialProfileWindow | Self |  | CreateSocialProfileWindow |  |
| CreateSocialProfileWindow | SetName |  | void |  |
| CreateSocialProfileWindow | ShouldBeShown |  | bool |  |
| CreateSocialProfileWindow | Show |  | void |  |
| CreditsWindow | AccessSelf |  | CreditsWindow | Category: const |
| CreditsWindow | GetCredits |  | CUTF8String | Category: nonconst |
| CreditsWindow | HasReachedEnd |  | bool |  |
| CreditsWindow | IsFastest |  | bool |  |
| CreditsWindow | IsPaused |  | bool |  |
| CreditsWindow | IsSlowest |  | bool |  |
| CreditsWindow | OnClose |  | void |  |
| CreditsWindow | OnFaster |  | void |  |
| CreditsWindow | OnSlower |  | void |  |
| CreditsWindow | OnTogglePause |  | void |  |
| CreditsWindow | Self |  | CreditsWindow |  |
| CulturalCommunity | AccessSelf |  | CulturalCommunity | Category: const |
| CulturalCommunity | GetCulture |  | Culture | Category: nonconst |
| CulturalCommunity | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| CulturalCommunity | GetID |  | uint32 | Category: nonconst |
| CulturalCommunity | GetLocalAcceptanceDifference |  | CFixedPoint | Category: nonconst |
| CulturalCommunity | GetLocalAcceptanceDifferenceDesc |  | CString | Category: nonconst |
| CulturalCommunity | GetName |  | CString | Category: nonconst |
| CulturalCommunity | GetState |  | State | Category: nonconst |
| CulturalCommunity | GetTooltipTag |  | CString | Category: nonconst |
| CulturalCommunity | IsValid |  | bool |  |
| CulturalCommunity | MakeScope |  | Scope |  |
| CulturalCommunity | Self |  | CulturalCommunity |  |
| Culture | AccessHomelands |  | Unknown | Category: const |
| Culture | AccessReligion |  | Religion | Category: const |
| Culture | AccessSameHeritageCultures |  | Unknown | Category: const |
| Culture | AccessSelf |  | Culture | Category: const |
| Culture | CalcAvgSoL |  | CFixedPoint |  |
| Culture | CalcAvgSoLForMiddle |  | CFixedPoint |  |
| Culture | CalcAvgSoLForPoor |  | CFixedPoint |  |
| Culture | CalcAvgSoLForRich |  | CFixedPoint |  |
| Culture | CalcTurmoilInCountry | 1. Unknown | CFixedPoint |  |
| Culture | GetAcceptanceDescIn | 1. Country | CString | Category: nonconst |
| Culture | GetAcceptanceIn | 1. Country | int32 | Category: nonconst |
| Culture | GetAllAcceptanceStatusSegments | 1. Country | Unknown | Category: nonconst |
| Culture | GetCasualtiesFromWars |  | int64 | Category: nonconst |
| Culture | GetColor |  | CVector4f | Category: nonconst |
| Culture | GetCulturalTraitsDesc |  | CString | Category: nonconst |
| Culture | GetCurrentFervor |  | CFixedPoint | Category: nonconst |
| Culture | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| Culture | GetDependents | 1. Country | int64 | Category: nonconst |
| Culture | GetDependentsAsPercentage | 1. Country | CFixedPoint | Category: nonconst |
| Culture | GetHeritageTrait |  | DiscriminationTrait | Category: nonconst |
| Culture | GetID |  | uint32 | Category: nonconst |
| Culture | GetLanguageTrait |  | DiscriminationTrait | Category: nonconst |
| Culture | GetMigrationTargetsDesc |  | CString | Category: nonconst |
| Culture | GetMonthlyChangeFervor |  | CFixedPoint | Category: nonconst |
| Culture | GetName |  | CString | Category: nonconst |
| Culture | GetNameNoFormatting |  | CString | Category: nonconst |
| Culture | GetObsessionsDesc |  | CString | Category: nonconst |
| Culture | GetPolStr | 1. Country | int64 | Category: nonconst |
| Culture | GetPolStrAsFloat | 1. Unknown | float | Category: nonconst |
| Culture | GetPolStrAsPercentage | 1. Country | CFixedPoint | Category: nonconst |
| Culture | GetPopulation | 1. Country | int64 | Category: nonconst |
| Culture | GetPopulationAsFloat | 1. Unknown | float | Category: nonconst |
| Culture | GetPopulationAsPercentage | 1. Country | CFixedPoint | Category: nonconst |
| Culture | GetPopulationChange | 1. Country | int64 | Category: nonconst |
| Culture | GetPopulationChangeDesc | 1. Country | CString | Category: nonconst |
| Culture | GetPopulationInCountryAsPercentage | 1. Unknown | CFixedPoint | Category: nonconst |
| Culture | GetReligion |  | Religion | Category: nonconst |
| Culture | GetReligionsDesc |  | CString | Category: nonconst |
| Culture | GetStateDependents | 1. State | int64 | Category: nonconst |
| Culture | GetStateDependentsAsPercentage | 1. State | CFixedPoint | Category: nonconst |
| Culture | GetStatePolStr | 1. State | int64 | Category: nonconst |
| Culture | GetStatePolStrAsFloat | 1. Unknown | float | Category: nonconst |
| Culture | GetStatePolStrAsPercentage | 1. State | CFixedPoint | Category: nonconst |
| Culture | GetStatePopulation | 1. State | int64 | Category: nonconst |
| Culture | GetStatePopulationAsFloat | 1. Unknown | float | Category: nonconst |
| Culture | GetStatePopulationAsPercentage | 1. State | CFixedPoint | Category: nonconst |
| Culture | GetStateWorkforce | 1. State | int64 | Category: nonconst |
| Culture | GetStateWorkforceAsPercentage | 1. State | CFixedPoint | Category: nonconst |
| Culture | GetTaboosDesc |  | CString | Category: nonconst |
| Culture | GetTargetFervor |  | CFixedPoint | Category: nonconst |
| Culture | GetTargetFervorBreakdown |  | CString | Category: nonconst |
| Culture | GetTargetFervorFromCountryModifiers |  | CFixedPoint | Category: nonconst |
| Culture | GetTargetFervorFromCountryModifiersBreakdown |  | CString | Category: nonconst |
| Culture | GetTooltipTag |  | CString | Category: nonconst |
| Culture | GetTraditionTraits |  | Unknown | Category: nonconst |
| Culture | GetTurmoil |  | CFixedPoint | Category: nonconst |
| Culture | GetWorkforce | 1. Country | int64 | Category: nonconst |
| Culture | GetWorkforceAsPercentage | 1. Country | CFixedPoint | Category: nonconst |
| Culture | HasNationalAwakening |  | bool |  |
| Culture | HasSecessionMovement | 1. Country | bool |  |
| Culture | IsPrimaryCultureIn | 1. Country | bool |  |
| Culture | IsPrimaryCultureInYesNo | 1. Unknown | CString |  |
| Culture | IsValid |  | bool |  |
| Culture | MakeScope |  | Scope |  |
| Culture | Self |  | Culture |  |
| CultureCasualtyStatistics | AccessSelf |  | CultureCasualtyStatistics | Category: const |
| CultureCasualtyStatistics | GetDead |  | int64 | Category: nonconst |
| CultureCasualtyStatistics | GetDemoralized |  | int64 | Category: nonconst |
| CultureCasualtyStatistics | GetWounded |  | int64 | Category: nonconst |
| CultureCasualtyStatistics | Self |  | CultureCasualtyStatistics |  |
| CultureInfoPanel | AccessCulture |  | Culture | Category: const |
| CultureInfoPanel | AccessPops |  | Unknown | Category: const |
| CultureInfoPanel | AccessPopsList |  | PopList | Category: const |
| CultureInfoPanel | AccessSelf |  | CultureInfoPanel | Category: const |
| CultureInfoPanel | GetCulture |  | Culture | Category: nonconst |
| CultureInfoPanel | IsShowingNationalOnly |  | bool |  |
| CultureInfoPanel | Self |  | CultureInfoPanel |  |
| CultureInfoPanel | ToggleShowNationalOnly |  | void |  |
| CurveEditor | AccessSelf |  | CurveEditor | Category: const |
| CurveEditor | Configure |  | void |  |
| CurveEditor | Delete |  | void |  |
| CurveEditor | Self |  | CurveEditor |  |
| CurvePoint | AccessSelf |  | CurvePoint | Category: const |
| CurvePoint | Position |  | CVector2f |  |
| CurvePoint | Self |  | CurvePoint |  |
| DataColorPicker | AccessSelf |  | DataColorPicker | Category: const |
| DataColorPicker | GetColor |  | CVector4f | Category: nonconst |
| DataColorPicker | GetName |  | CString | Category: nonconst |
| DataColorPicker | OnColorEdited |  | void |  |
| DataColorPicker | Self |  | DataColorPicker |  |
| DataDynamicTrend | AccessSelf |  | DataDynamicTrend | Category: const |
| DataDynamicTrend | Self |  | DataDynamicTrend |  |
| DataTrend | AccessSelf |  | DataTrend | Category: const |
| DataTrend | Self |  | DataTrend |  |
| DatatypesExplorer | AccessSelf |  | DatatypesExplorer | Category: const |
| DatatypesExplorer | DumpDataTypes |  | bool |  |
| DatatypesExplorer | IsEnableFilterFunctions |  | bool |  |
| DatatypesExplorer | IsEnableFilterMacros |  | bool |  |
| DatatypesExplorer | IsEnableFilterOrphanTypes |  | bool |  |
| DatatypesExplorer | IsEnableFilterPromotes |  | bool |  |
| DatatypesExplorer | IsEnableFilterTypes |  | bool |  |
| DatatypesExplorer | Self |  | DatatypesExplorer |  |
| DatatypesExplorer | SetDataTypeFilter |  | void |  |
| DatatypesExplorer | SetNameFilter |  | void |  |
| DatatypesExplorer | ToggleFilterFunctions |  | void |  |
| DatatypesExplorer | ToggleFilterMacros |  | void |  |
| DatatypesExplorer | ToggleFilterOrphanTypes |  | void |  |
| DatatypesExplorer | ToggleFilterPromotes |  | void |  |
| DatatypesExplorer | ToggleFilterTypes |  | void |  |
| Date | AccessSelf |  | Date | Category: const |
| Date | Format | 1. CString | CString |  |
| Date | GetString |  | CString | Category: nonconst |
| Date | Self |  | Date |  |
| Decision | AccessSelf |  | Decision | Category: const |
| Decision | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| Decision | GetDesc |  | CString | Category: nonconst |
| Decision | GetName |  | CString | Category: nonconst |
| Decision | GetTooltip | 1. Country | CString | Category: nonconst |
| Decision | GetTooltipTag |  | CString | Category: nonconst |
| Decision | MakeScope |  | Scope |  |
| Decision | Self |  | Decision |  |
| Decision | TakeDecision | 1. Country | Command |  |
| Decree | AccessSelf |  | Decree | Category: const |
| Decree | GetCost |  | CFixedPoint | Category: nonconst |
| Decree | GetCountry |  | Country | Category: nonconst |
| Decree | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| Decree | GetModifier |  | Modifier | Category: nonconst |
| Decree | GetName |  | CString | Category: nonconst |
| Decree | GetRemoveCommand |  | Command | Category: nonconst |
| Decree | GetState |  | State | Category: nonconst |
| Decree | GetTexture |  | Unknown | Category: nonconst |
| Decree | GetTooltip |  | CString | Category: nonconst |
| Decree | GetTooltipTag |  | CString | Category: nonconst |
| Decree | GetType |  | DecreeType | Category: nonconst |
| Decree | MakeScope |  | Scope |  |
| Decree | Self |  | Decree |  |
| DecreeMarker | AccessDecree |  | Decree | Category: const |
| DecreeMarker | AccessSelf |  | DecreeMarker | Category: const |
| DecreeMarker | GetDecree |  | Decree | Category: nonconst |
| DecreeMarker | GetPosition |  | CVector2f | Category: nonconst |
| DecreeMarker | Self |  | DecreeMarker |  |
| DecreeType | AccessSelf |  | DecreeType | Category: const |
| DecreeType | GetCostFormatted | 1. Country | CString | Category: nonconst |
| DecreeType | GetDesc |  | CString | Category: nonconst |
| DecreeType | GetEffects |  | CString | Category: nonconst |
| DecreeType | GetErrors | 1. Unknown | CString | Category: nonconst |
| DecreeType | GetModifier |  | Modifier | Category: nonconst |
| DecreeType | GetName |  | CString | Category: nonconst |
| DecreeType | GetNameNoFormatting |  | CString | Category: nonconst |
| DecreeType | GetSetCommand | 1. Unknown | Command | Category: nonconst |
| DecreeType | GetTexture |  | Unknown | Category: nonconst |
| DecreeType | GetTooltip | 1. Country | CString | Category: nonconst |
| DecreeType | GetTooltipForState | 1. Unknown | CString | Category: nonconst |
| DecreeType | GetTooltipTag |  | CString | Category: nonconst |
| DecreeType | Self |  | DecreeType |  |
| DefineProxyNodeWindow | AccessSelf |  | DefineProxyNodeWindow | Category: const |
| DefineProxyNodeWindow | GetName |  | CUTF8String | Category: nonconst |
| DefineProxyNodeWindow | Self |  | DefineProxyNodeWindow |  |
| DefineProxyNodeWindow | SetName | 1. PdxGuiWidget | void |  |
| DetailData | AccessSelf |  | DetailData | Category: const |
| DetailData | ErrorsCount |  | int32 |  |
| DetailData | IsUpdating |  | bool |  |
| DetailData | MaterialIntensityBias |  | float |  |
| DetailData | MaterialsLimit |  | int32 |  |
| DetailData | Repack |  | void |  |
| DetailData | Self |  | DetailData |  |
| DetailData | SetMaterialIntensityBias | 1. Unknown | void |  |
| DetailData | SetMaterialIntensityBiasStr |  | void |  |
| DetailData | SetMaterialsLimit | 1. Unknown | void |  |
| DetailData | SupportedMaterialsLimits |  | Unknown |  |
| DiplomaticAction | AcceptActionProposal |  | Command |  |
| DiplomaticAction | AccessFirstCountry |  | Country | Category: const |
| DiplomaticAction | AccessFirstState |  | State | Category: const |
| DiplomaticAction | AccessSecondCountry |  | Country | Category: const |
| DiplomaticAction | AccessSecondState |  | State | Category: const |
| DiplomaticAction | AccessSelf |  | DiplomaticAction | Category: const |
| DiplomaticAction | CanCallInObligation |  | bool |  |
| DiplomaticAction | CanOweObligation |  | bool |  |
| DiplomaticAction | CanPotentiallyOweObligation |  | bool |  |
| DiplomaticAction | DeclineActionProposal |  | Command |  |
| DiplomaticAction | ExecuteAction |  | Command |  |
| DiplomaticAction | ExecuteWithConfirmation |  | void |  |
| DiplomaticAction | GetAcceptanceValue |  | int32 | Category: nonconst |
| DiplomaticAction | GetAcceptanceValueNoObligation |  | int32 | Category: nonconst |
| DiplomaticAction | GetAcceptanceValueWithCallInObligation |  | int32 | Category: nonconst |
| DiplomaticAction | GetAcceptanceValueWithOweObligation |  | int32 | Category: nonconst |
| DiplomaticAction | GetActionAcceptEffectDesc |  | CString | Category: nonconst |
| DiplomaticAction | GetActionDesc |  | CString | Category: nonconst |
| DiplomaticAction | GetActionNotificationBreakDesc |  | CString | Category: nonconst |
| DiplomaticAction | GetActionNotificationBreakName |  | CString | Category: nonconst |
| DiplomaticAction | GetActionNotificationDesc |  | CString | Category: nonconst |
| DiplomaticAction | GetActionNotificationName |  | CString | Category: nonconst |
| DiplomaticAction | GetActionNotificationThirdPartyAcceptedDesc |  | CString | Category: nonconst |
| DiplomaticAction | GetActionNotificationThirdPartyAcceptedName |  | CString | Category: nonconst |
| DiplomaticAction | GetActionNotificationThirdPartyBreakAcceptedDesc |  | CString | Category: nonconst |
| DiplomaticAction | GetActionNotificationThirdPartyBreakAcceptedName |  | CString | Category: nonconst |
| DiplomaticAction | GetActionNotificationThirdPartyBreakDeclinedDesc |  | CString | Category: nonconst |
| DiplomaticAction | GetActionNotificationThirdPartyBreakDeclinedName |  | CString | Category: nonconst |
| DiplomaticAction | GetActionNotificationThirdPartyBreakDesc |  | CString | Category: nonconst |
| DiplomaticAction | GetActionNotificationThirdPartyBreakName |  | CString | Category: nonconst |
| DiplomaticAction | GetActionNotificationThirdPartyDeclinedDesc |  | CString | Category: nonconst |
| DiplomaticAction | GetActionNotificationThirdPartyDeclinedName |  | CString | Category: nonconst |
| DiplomaticAction | GetActionNotificationThirdPartyDesc |  | CString | Category: nonconst |
| DiplomaticAction | GetActionNotificationThirdPartyName |  | CString | Category: nonconst |
| DiplomaticAction | GetAskToBreakName |  | CString | Category: nonconst |
| DiplomaticAction | GetBaseMaintenanceCost |  | CFixedPoint | Category: nonconst |
| DiplomaticAction | GetBreakName |  | CString | Category: nonconst |
| DiplomaticAction | GetCountryInfo |  | CString | Category: nonconst |
| DiplomaticAction | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| DiplomaticAction | GetDesc |  | CString | Category: nonconst |
| DiplomaticAction | GetEffectsDesc |  | CString | Category: nonconst |
| DiplomaticAction | GetFirstCountry |  | Country | Category: nonconst |
| DiplomaticAction | GetFirstState |  | State | Category: nonconst |
| DiplomaticAction | GetID |  | uint32 | Category: nonconst |
| DiplomaticAction | GetMaintenanceCost |  | CFixedPoint | Category: nonconst |
| DiplomaticAction | GetMaintenanceCostDesc |  | CString | Category: nonconst |
| DiplomaticAction | GetMaintenanceCostForAcceptingCountryDesc |  | CString | Category: nonconst |
| DiplomaticAction | GetMaintenanceCostFormatted |  | CString | Category: nonconst |
| DiplomaticAction | GetModifierDesc |  | CString | Category: nonconst |
| DiplomaticAction | GetName |  | CString | Category: nonconst |
| DiplomaticAction | GetNameNoFormatting |  | CString | Category: nonconst |
| DiplomaticAction | GetNameWithContext |  | CString | Category: nonconst |
| DiplomaticAction | GetPopupDesc |  | CString | Category: nonconst |
| DiplomaticAction | GetProposalAcceptedDesc |  | CString | Category: nonconst |
| DiplomaticAction | GetProposalAcceptedName |  | CString | Category: nonconst |
| DiplomaticAction | GetProposalBreakAcceptedDesc |  | CString | Category: nonconst |
| DiplomaticAction | GetProposalBreakAcceptedName |  | CString | Category: nonconst |
| DiplomaticAction | GetProposalBreakDeclinedDesc |  | CString | Category: nonconst |
| DiplomaticAction | GetProposalBreakDeclinedName |  | CString | Category: nonconst |
| DiplomaticAction | GetProposalDeclinedDesc |  | CString | Category: nonconst |
| DiplomaticAction | GetProposalDeclinedName |  | CString | Category: nonconst |
| DiplomaticAction | GetProposalNotificationBreakDesc |  | CString | Category: nonconst |
| DiplomaticAction | GetProposalNotificationBreakName |  | CString | Category: nonconst |
| DiplomaticAction | GetProposalNotificationDesc |  | CString | Category: nonconst |
| DiplomaticAction | GetProposalNotificationName |  | CString | Category: nonconst |
| DiplomaticAction | GetProposeName |  | CString | Category: nonconst |
| DiplomaticAction | GetRandomAcceptanceChance |  | CFixedPoint | Category: nonconst |
| DiplomaticAction | GetRandomAcceptanceChanceNoObligation |  | CFixedPoint | Category: nonconst |
| DiplomaticAction | GetRandomAcceptanceChanceWithCallInObligation |  | CFixedPoint | Category: nonconst |
| DiplomaticAction | GetRandomAcceptanceChanceWithOweObligation |  | CFixedPoint | Category: nonconst |
| DiplomaticAction | GetRivalryGains |  | CFixedPoint | Category: nonconst |
| DiplomaticAction | GetRivalryGainsDetailsDesc |  | CString | Category: nonconst |
| DiplomaticAction | GetSecondCountry |  | Country | Category: nonconst |
| DiplomaticAction | GetSecondState |  | State | Category: nonconst |
| DiplomaticAction | GetSoundWithConfirmation |  | Unknown | Category: nonconst |
| DiplomaticAction | GetTargetStatesDesc |  | CString | Category: nonconst |
| DiplomaticAction | GetTooltip |  | CString | Category: nonconst |
| DiplomaticAction | GetTooltipTag |  | CString | Category: nonconst |
| DiplomaticAction | GetType |  | DiplomaticActionType | Category: nonconst |
| DiplomaticAction | GetWillAcceptBreakdown |  | CString | Category: nonconst |
| DiplomaticAction | GetWillAcceptBreakdownNoObligation |  | CString | Category: nonconst |
| DiplomaticAction | GetWillAcceptBreakdownWithCallInObligation |  | CString | Category: nonconst |
| DiplomaticAction | GetWillAcceptBreakdownWithOweObligation |  | CString | Category: nonconst |
| DiplomaticAction | GetWillAcceptDesc |  | CString | Category: nonconst |
| DiplomaticAction | GetWillAcceptDescNoObligation |  | CString | Category: nonconst |
| DiplomaticAction | GetWillAcceptDescWithCallInObligation |  | CString | Category: nonconst |
| DiplomaticAction | GetWillAcceptDescWithOweObligation |  | CString | Category: nonconst |
| DiplomaticAction | HasIncompleteTargetData |  | bool |  |
| DiplomaticAction | IsActivePact |  | bool |  |
| DiplomaticAction | IsCallingInObligation |  | bool |  |
| DiplomaticAction | IsHostile |  | bool |  |
| DiplomaticAction | IsHostileToBreak |  | bool |  |
| DiplomaticAction | IsHostileToPropose |  | bool |  |
| DiplomaticAction | IsNonActivePact |  | bool |  |
| DiplomaticAction | IsPersistentPact |  | bool |  |
| DiplomaticAction | IsPromisingObligation |  | bool |  |
| DiplomaticAction | IsRivalry |  | bool |  |
| DiplomaticAction | MakeScope |  | Scope |  |
| DiplomaticAction | RequiresApproval |  | bool |  |
| DiplomaticAction | RequiresApprovalToBreak |  | bool |  |
| DiplomaticAction | RequiresApprovalToPropose |  | bool |  |
| DiplomaticAction | RequiresConfirmation |  | bool |  |
| DiplomaticAction | Self |  | DiplomaticAction |  |
| DiplomaticAction | ViolatesSovereignty |  | bool |  |
| DiplomaticAction | WillAIAccept |  | bool |  |
| DiplomaticAction | WillAIAcceptNoObligation |  | bool |  |
| DiplomaticAction | WillAIAcceptWithCallInObligation |  | bool |  |
| DiplomaticAction | WillAIAcceptWithOweObligation |  | bool |  |
| DiplomaticAction | WillAIMaybeAccept |  | bool |  |
| DiplomaticAction | WillAIMaybeAcceptNoObligation |  | bool |  |
| DiplomaticAction | WillAIMaybeAcceptWithCallInObligation |  | bool |  |
| DiplomaticAction | WillAIMaybeAcceptWithOweObligation |  | bool |  |
| DiplomaticActionType | AccessSelf |  | DiplomaticActionType | Category: const |
| DiplomaticActionType | CanSelectAnyState |  | bool |  |
| DiplomaticActionType | CanSelectFirstState |  | bool |  |
| DiplomaticActionType | CanSelectSecondState |  | bool |  |
| DiplomaticActionType | GetBaseMaintenanceCost |  | CFixedPoint | Category: nonconst |
| DiplomaticActionType | GetDesc |  | CString | Category: nonconst |
| DiplomaticActionType | GetEffectDescriptionFirst | 1. Country 2. Country | CString | Category: nonconst |
| DiplomaticActionType | GetEffectDescriptionNoContext | 1. Country 2. Country | CString | Category: nonconst |
| DiplomaticActionType | GetEffectDescriptionThird | 1. Country 2. Country | CString | Category: nonconst |
| DiplomaticActionType | GetFirstModifier |  | Modifier | Category: nonconst |
| DiplomaticActionType | GetIncomeTransfer |  | CFixedPoint | Category: nonconst |
| DiplomaticActionType | GetKey |  | CString | Category: nonconst |
| DiplomaticActionType | GetMaintenanceCost | 1. Country 2. Country | CFixedPoint | Category: nonconst |
| DiplomaticActionType | GetMaintenanceCostDesc | 1. Unknown 2. Unknown | CString | Category: nonconst |
| DiplomaticActionType | GetMaintenanceCostFormatted | 1. Country 2. Country | CString | Category: nonconst |
| DiplomaticActionType | GetModifyPactActionType |  | DiplomaticActionType | Category: nonconst |
| DiplomaticActionType | GetName |  | CString | Category: nonconst |
| DiplomaticActionType | GetNameNoFormatting |  | CString | Category: nonconst |
| DiplomaticActionType | GetNameWithCountry | 1. Unknown | CString | Category: nonconst |
| DiplomaticActionType | GetSecondModifier |  | Modifier | Category: nonconst |
| DiplomaticActionType | GetTexture |  | Unknown | Category: nonconst |
| DiplomaticActionType | GetTooltipTag |  | CString | Category: nonconst |
| DiplomaticActionType | GetTriggerDescriptionFirst | 1. Country 2. Country | CString | Category: nonconst |
| DiplomaticActionType | GetTriggerDescriptionFirstNot | 1. Country 2. Country | CString | Category: nonconst |
| DiplomaticActionType | GetTriggerDescriptionNoContext | 1. Country 2. Country | CString | Category: nonconst |
| DiplomaticActionType | GetTriggerDescriptionNoContextNot | 1. Country 2. Country | CString | Category: nonconst |
| DiplomaticActionType | GetTriggerDescriptionThird | 1. Country 2. Country | CString | Category: nonconst |
| DiplomaticActionType | GetTriggerDescriptionThirdNot | 1. Country 2. Country | CString | Category: nonconst |
| DiplomaticActionType | HasModifyPact |  | bool |  |
| DiplomaticActionType | HasReversePact |  | bool |  |
| DiplomaticActionType | HasTransferPact |  | bool |  |
| DiplomaticActionType | IsInstantDiplomaticAction |  | bool |  |
| DiplomaticActionType | IsOngoingDiplomaticAction |  | bool |  |
| DiplomaticActionType | IsOngoingDiplomaticPact |  | bool |  |
| DiplomaticActionType | MustSelectFirstState |  | bool |  |
| DiplomaticActionType | MustSelectSecondState |  | bool |  |
| DiplomaticActionType | Self |  | DiplomaticActionType |  |
| DiplomaticActionWindow | AccessDiplomaticAction |  | DiplomaticAction | Category: const |
| DiplomaticActionWindow | AccessFirstState |  | State | Category: const |
| DiplomaticActionWindow | AccessPossibleStates |  | Unknown | Category: const |
| DiplomaticActionWindow | AccessSecondState |  | State | Category: const |
| DiplomaticActionWindow | AccessSelf |  | DiplomaticActionWindow | Category: const |
| DiplomaticActionWindow | AccessStateSelectionTarget |  | Country | Category: const |
| DiplomaticActionWindow | CanSelectFirstState |  | bool |  |
| DiplomaticActionWindow | CanSelectSecondState |  | bool |  |
| DiplomaticActionWindow | ClearFirstState |  | void |  |
| DiplomaticActionWindow | ClearSecondState |  | void |  |
| DiplomaticActionWindow | ClearStateSelectionTarget |  | void |  |
| DiplomaticActionWindow | ExecuteAction |  | Command |  |
| DiplomaticActionWindow | GetConfirmationSound |  | Unknown | Category: nonconst |
| DiplomaticActionWindow | GetConfirmationTooltip |  | CString | Category: nonconst |
| DiplomaticActionWindow | GetDiplomaticAction |  | DiplomaticAction | Category: nonconst |
| DiplomaticActionWindow | GetFirstState |  | State | Category: nonconst |
| DiplomaticActionWindow | GetSecondState |  | State | Category: nonconst |
| DiplomaticActionWindow | GetStateSelectionTarget |  | Country | Category: nonconst |
| DiplomaticActionWindow | HasStateSelectionTarget |  | bool |  |
| DiplomaticActionWindow | IsUsingObligation |  | bool |  |
| DiplomaticActionWindow | SelectState | 1. Unknown | void |  |
| DiplomaticActionWindow | Self |  | DiplomaticActionWindow |  |
| DiplomaticActionWindow | SetStateSelectionTarget | 1. Unknown | void |  |
| DiplomaticActionWindow | ShowMapNotification |  | void |  |
| DiplomaticActionWindow | ToggleCallInObligation |  | void |  |
| DiplomaticActionWindow | ToggleOweObligation |  | void |  |
| DiplomaticActionWindow | WillCallInObligation |  | bool |  |
| DiplomaticActionWindow | WillOweObligation |  | bool |  |
| DiplomaticCatalyst | AccessDiplomaticCatalystType |  | DiplomaticCatalystType | Category: const |
| DiplomaticCatalyst | AccessSelf |  | DiplomaticCatalyst | Category: const |
| DiplomaticCatalyst | GetCountry |  | Country | Category: nonconst |
| DiplomaticCatalyst | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| DiplomaticCatalyst | GetDesc |  | CString | Category: nonconst |
| DiplomaticCatalyst | GetDiplomaticCatalystType |  | DiplomaticCatalystType | Category: nonconst |
| DiplomaticCatalyst | GetOccuranceDate |  | Date | Category: nonconst |
| DiplomaticCatalyst | GetTargetCountry |  | Country | Category: nonconst |
| DiplomaticCatalyst | GetTooltipTag |  | CString | Category: nonconst |
| DiplomaticCatalyst | IsValid |  | bool |  |
| DiplomaticCatalyst | MakeScope |  | Scope |  |
| DiplomaticCatalyst | Self |  | DiplomaticCatalyst |  |
| DiplomaticCatalystCategory | AccessSelf |  | DiplomaticCatalystCategory | Category: const |
| DiplomaticCatalystCategory | GetCatalystEffectCooldownDays |  | int32 | Category: nonconst |
| DiplomaticCatalystCategory | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| DiplomaticCatalystCategory | GetName |  | CString | Category: nonconst |
| DiplomaticCatalystCategory | GetTooltipTag |  | CString | Category: nonconst |
| DiplomaticCatalystCategory | MakeScope |  | Scope |  |
| DiplomaticCatalystCategory | Self |  | DiplomaticCatalystCategory |  |
| DiplomaticCatalystType | AccessSelf |  | DiplomaticCatalystType | Category: const |
| DiplomaticCatalystType | GetCategory |  | DiplomaticCatalystCategory | Category: nonconst |
| DiplomaticCatalystType | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| DiplomaticCatalystType | GetDesc | 1. Unknown 2. Unknown | CString | Category: nonconst |
| DiplomaticCatalystType | GetName |  | CString | Category: nonconst |
| DiplomaticCatalystType | GetTooltipTag |  | CString | Category: nonconst |
| DiplomaticCatalystType | MakeScope |  | Scope |  |
| DiplomaticCatalystType | Self |  | DiplomaticCatalystType |  |
| DiplomaticDemand | AcceptDiplomaticDemand |  | Command |  |
| DiplomaticDemand | AccessSelf |  | DiplomaticDemand | Category: const |
| DiplomaticDemand | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| DiplomaticDemand | GetDemandedWarGoal |  | WarGoal | Category: nonconst |
| DiplomaticDemand | GetDiplomaticPlayType |  | DiplomaticPlayType | Category: nonconst |
| DiplomaticDemand | GetProposalDesc |  | CString | Category: nonconst |
| DiplomaticDemand | GetSender |  | Country | Category: nonconst |
| DiplomaticDemand | GetTarget |  | Country | Category: nonconst |
| DiplomaticDemand | GetTooltipTag |  | CString | Category: nonconst |
| DiplomaticDemand | IsValid |  | bool |  |
| DiplomaticDemand | MakeScope |  | Scope |  |
| DiplomaticDemand | RejectDiplomaticDemand |  | Command |  |
| DiplomaticDemand | Self |  | DiplomaticDemand |  |
| DiplomaticOverviewPanel | AccessSelf |  | DiplomaticOverviewPanel | Category: const |
| DiplomaticOverviewPanel | GetCountries |  | Unknown | Category: nonconst |
| DiplomaticOverviewPanel | IsSorted | 1. Unknown | bool |  |
| DiplomaticOverviewPanel | Self |  | DiplomaticOverviewPanel |  |
| DiplomaticOverviewPanel | Sort | 1. CString | void |  |
| DiplomaticPact | AccessSelf |  | DiplomaticPact | Category: const |
| DiplomaticPact | GetAboutToBreakReasonDesc |  | CString | Category: nonconst |
| DiplomaticPact | GetAutoBreakReasonDesc |  | CString | Category: nonconst |
| DiplomaticPact | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| DiplomaticPact | GetDailyRelationsProgress |  | CFixedPoint | Category: nonconst |
| DiplomaticPact | GetDesc |  | CString | Category: nonconst |
| DiplomaticPact | GetDiplomaticAction |  | DiplomaticAction | Category: nonconst |
| DiplomaticPact | GetDiplomaticActionType |  | DiplomaticActionType | Category: nonconst |
| DiplomaticPact | GetFirstCountry |  | Country | Category: nonconst |
| DiplomaticPact | GetID |  | uint32 | Category: nonconst |
| DiplomaticPact | GetName |  | CString | Category: nonconst |
| DiplomaticPact | GetSecondCountry |  | Country | Category: nonconst |
| DiplomaticPact | GetTooltip |  | CString | Category: nonconst |
| DiplomaticPact | GetTooltipTag |  | CString | Category: nonconst |
| DiplomaticPact | HasDailyRelationsProgress |  | bool |  |
| DiplomaticPact | IsFirstCountry | 1. Country | bool |  |
| DiplomaticPact | IsSecondCountry | 1. Country | bool |  |
| DiplomaticPact | IsSubjectRelation |  | bool |  |
| DiplomaticPact | MakeScope |  | Scope |  |
| DiplomaticPact | Self |  | DiplomaticPact |  |
| DiplomaticPact | ShowInOutliner |  | bool |  |
| DiplomaticPlay | AccessExecutedWarGoalsAgainst | 1. Country | Unknown | Category: const |
| DiplomaticPlay | AccessInitiator |  | Country | Category: const |
| DiplomaticPlay | AccessInitiatorBackers |  | Unknown | Category: const |
| DiplomaticPlay | AccessInitiatorBackersNoLoyalSubjects |  | Unknown | Category: const |
| DiplomaticPlay | AccessInitiatorLeaning |  | Unknown | Category: const |
| DiplomaticPlay | AccessInitiatorSideCountries |  | Unknown | Category: const |
| DiplomaticPlay | AccessInitiatorSideCountriesNoLoyalSubjects |  | Unknown | Category: const |
| DiplomaticPlay | AccessOnTheFence |  | Unknown | Category: const |
| DiplomaticPlay | AccessSelf |  | DiplomaticPlay | Category: const |
| DiplomaticPlay | AccessTarget |  | Country | Category: const |
| DiplomaticPlay | AccessTargetBackers |  | Unknown | Category: const |
| DiplomaticPlay | AccessTargetBackersNoLoyalSubjects |  | Unknown | Category: const |
| DiplomaticPlay | AccessTargetLeaning |  | Unknown | Category: const |
| DiplomaticPlay | AccessTargetSideCountries |  | Unknown | Category: const |
| DiplomaticPlay | AccessTargetSideCountriesNoLoyalSubjects |  | Unknown | Category: const |
| DiplomaticPlay | AccessUndecided |  | Unknown | Category: const |
| DiplomaticPlay | AccessWar |  | War | Category: const |
| DiplomaticPlay | AddTreatyWarGoal | 1. WarGoalDraft 2. ArticleDraft | Command |  |
| DiplomaticPlay | AddWarGoal | 1. WarGoalDraft | Command |  |
| DiplomaticPlay | AreOnSameSide | 1. Country 2. Country | bool |  |
| DiplomaticPlay | AtLeastOneCountryWouldAcceptAnySway | 1. Country | bool |  |
| DiplomaticPlay | BeOnTheFence | 1. Country | Command |  |
| DiplomaticPlay | CanAddWarGoal | 1. Country | bool |  |
| DiplomaticPlay | CanAddWarGoalForOtherCountry | 1. Unknown | bool |  |
| DiplomaticPlay | CanBeOnTheFence | 1. Country | bool |  |
| DiplomaticPlay | CanDeclareNeutrality | 1. Country | bool |  |
| DiplomaticPlay | CanLeanTowardsInitiator | 1. Country | bool |  |
| DiplomaticPlay | CanLeanTowardsTarget | 1. Country | bool |  |
| DiplomaticPlay | CanSupportInitiator | 1. Country | bool |  |
| DiplomaticPlay | CanSupportTarget | 1. Country | bool |  |
| DiplomaticPlay | CanSwayCountry | 1. Country 2. Country | bool |  |
| DiplomaticPlay | CanYield | 1. Country | bool |  |
| DiplomaticPlay | CreateSway | 1. Country 2. Country 3. SwayOffer | Command |  |
| DiplomaticPlay | DeclareNeutrality | 1. Country | Command |  |
| DiplomaticPlay | GetAcceptedSway | 1. Country | Sway | Category: nonconst |
| DiplomaticPlay | GetAllWarGoalsOfInitiatorSide |  | Unknown | Category: nonconst |
| DiplomaticPlay | GetAllWarGoalsOfTargetSide |  | Unknown | Category: nonconst |
| DiplomaticPlay | GetBeOnTheFenceValidTooltip | 1. Country | CString | Category: nonconst |
| DiplomaticPlay | GetCanAddWarGoalDesc | 1. WarGoalDraft | CString | Category: nonconst |
| DiplomaticPlay | GetCanSendSwayOfferDesc | 1. Country 2. Country 3. SwayOffer | CString | Category: nonconst |
| DiplomaticPlay | GetCanSwayCountryDesc | 1. Country 2. Country | CString | Category: nonconst |
| DiplomaticPlay | GetConfidence | 1. Unknown | int32 | Category: nonconst |
| DiplomaticPlay | GetConfidenceDesc | 1. Country | CString | Category: nonconst |
| DiplomaticPlay | GetConfidenceLabel | 1. Country | CString | Category: nonconst |
| DiplomaticPlay | GetCountryCanAddWarGoalDesc | 1. Country | CString | Category: nonconst |
| DiplomaticPlay | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| DiplomaticPlay | GetDeclareNeutralityValidTooltip | 1. Country | CString | Category: nonconst |
| DiplomaticPlay | GetDiplomaticPlayType |  | DiplomaticPlayType | Category: nonconst |
| DiplomaticPlay | GetEndDate |  | CString | Category: nonconst |
| DiplomaticPlay | GetEscalation |  | int32 | Category: nonconst |
| DiplomaticPlay | GetEscalationPause |  | int32 | Category: nonconst |
| DiplomaticPlay | GetEscalationProgress |  | CFixedPoint | Category: nonconst |
| DiplomaticPlay | GetIncomingSway | 1. Unknown 2. Unknown | Sway | Category: nonconst |
| DiplomaticPlay | GetIncomingSwayByTargetAndSwayer | 1. Unknown 2. Unknown | Sway | Category: nonconst |
| DiplomaticPlay | GetInitiator |  | Country | Category: nonconst |
| DiplomaticPlay | GetInitiatorBackersBreakdown |  | CString | Category: nonconst |
| DiplomaticPlay | GetInitiatorPreferenceScore | 1. Country | int32 | Category: nonconst |
| DiplomaticPlay | GetInitiatorPreferenceScoreDesc | 1. Country | CString | Category: nonconst |
| DiplomaticPlay | GetInitiatorPrimaryWarGoals |  | Unknown | Category: nonconst |
| DiplomaticPlay | GetInitiatorSecondaryWarGoals |  | Unknown | Category: nonconst |
| DiplomaticPlay | GetInitiatorWarGoals |  | Unknown | Category: nonconst |
| DiplomaticPlay | GetInterestMarker | 1. Unknown | Interest | Category: nonconst |
| DiplomaticPlay | GetLeanTowardsInitiatorValidTooltip | 1. Country | CString | Category: nonconst |
| DiplomaticPlay | GetLeanTowardsTargetValidTooltip | 1. Country | CString | Category: nonconst |
| DiplomaticPlay | GetName |  | CString | Category: nonconst |
| DiplomaticPlay | GetNumInitiatorManeuversRemaining |  | int32 | Category: nonconst |
| DiplomaticPlay | GetNumLeaningMobilizedBattalionsForSide | 1. Unknown | int32 | Category: nonconst |
| DiplomaticPlay | GetNumLeaningMobilizedBattalionsForSideBreakdown | 1. Unknown | CString | Category: nonconst |
| DiplomaticPlay | GetNumLeaningTotalBattalionsForSide | 1. Unknown | int32 | Category: nonconst |
| DiplomaticPlay | GetNumLeaningTotalBattalionsForSideBreakdown | 1. Unknown | CString | Category: nonconst |
| DiplomaticPlay | GetNumLeaningTotalWarshipsForSide | 1. Unknown | int32 | Category: nonconst |
| DiplomaticPlay | GetNumLeaningTotalWarshipsForSideBreakdown | 1. Unknown | CString | Category: nonconst |
| DiplomaticPlay | GetNumManeuversRemaining | 1. Country | int32 | Category: nonconst |
| DiplomaticPlay | GetNumOnTheFenceBattalionsBreakdown |  | CString | Category: nonconst |
| DiplomaticPlay | GetNumOnTheFenceMobilizedBattalions |  | int32 | Category: nonconst |
| DiplomaticPlay | GetNumOnTheFenceTotalBattalions |  | int32 | Category: nonconst |
| DiplomaticPlay | GetNumOnTheFenceTotalWarships |  | int32 | Category: nonconst |
| DiplomaticPlay | GetNumOnTheFenceWarshipsBreakdown |  | CString | Category: nonconst |
| DiplomaticPlay | GetNumTargetManeuversRemaining |  | int32 | Category: nonconst |
| DiplomaticPlay | GetNumberOfPossibleSwayCountriesFormatted | 1. Country | CString | Category: nonconst |
| DiplomaticPlay | GetOutgoingSway | 1. Unknown 2. Unknown | Sway | Category: nonconst |
| DiplomaticPlay | GetPhaseName |  | CString | Category: nonconst |
| DiplomaticPlay | GetPreferenceScoreDesc | 1. Unknown | CString | Category: nonconst |
| DiplomaticPlay | GetStartDate |  | CString | Category: nonconst |
| DiplomaticPlay | GetStrategicRegion |  | StrategicRegion | Category: nonconst |
| DiplomaticPlay | GetSupportInitiatorValidTooltip | 1. Country | CString | Category: nonconst |
| DiplomaticPlay | GetSupportStanceDesc | 1. Country | CString | Category: nonconst |
| DiplomaticPlay | GetSupportTargetValidTooltip | 1. Country | CString | Category: nonconst |
| DiplomaticPlay | GetSwitchSideBreakdown |  | CString | Category: nonconst |
| DiplomaticPlay | GetTarget |  | Country | Category: nonconst |
| DiplomaticPlay | GetTargetBackersBreakdown |  | CString | Category: nonconst |
| DiplomaticPlay | GetTargetPreferenceScore | 1. Country | int32 | Category: nonconst |
| DiplomaticPlay | GetTargetPreferenceScoreDesc | 1. Country | CString | Category: nonconst |
| DiplomaticPlay | GetTargetPrimaryWarGoals |  | Unknown | Category: nonconst |
| DiplomaticPlay | GetTargetSecondaryWarGoals |  | Unknown | Category: nonconst |
| DiplomaticPlay | GetTargetWarGoals |  | Unknown | Category: nonconst |
| DiplomaticPlay | GetTooltipTag |  | CString | Category: nonconst |
| DiplomaticPlay | GetTotalNumBattalionsForSide | 1. Country | int32 | Category: nonconst |
| DiplomaticPlay | GetTotalNumMobilizedBattalionsForSide | 1. Country | int32 | Category: nonconst |
| DiplomaticPlay | GetTotalNumMobilizedBattalionsForSideBreakdown | 1. Country | CString | Category: nonconst |
| DiplomaticPlay | GetTotalNumWarshipsForSide | 1. Country | int32 | Category: nonconst |
| DiplomaticPlay | GetTotalNumWarshipsForSideBreakdown | 1. Country | CString | Category: nonconst |
| DiplomaticPlay | GetWar |  | War | Category: nonconst |
| DiplomaticPlay | GetYieldValidTooltip | 1. Country | CString | Category: nonconst |
| DiplomaticPlay | HasAcceptedSway | 1. Country | bool |  |
| DiplomaticPlay | HasAtLeastOneDesiredSwayOfType | 1. Country 2. Country 3. SwayOfferType | bool |  |
| DiplomaticPlay | HasAtLeastOneDesiredSwayWargoalOfType | 1. Country 2. Country 3. WarGoalType | bool |  |
| DiplomaticPlay | HasEscalatedIntoWar |  | bool |  |
| DiplomaticPlay | HasPreferenceForInitiator | 1. Unknown | bool |  |
| DiplomaticPlay | HasPreferenceForTarget | 1. Unknown | bool |  |
| DiplomaticPlay | IsAmongInitiatorBackers | 1. Unknown | bool |  |
| DiplomaticPlay | IsAmongTargetBackers | 1. Unknown | bool |  |
| DiplomaticPlay | IsBacker | 1. Country | bool |  |
| DiplomaticPlay | IsCommittedParticipant | 1. Country | bool |  |
| DiplomaticPlay | IsInitiator | 1. Country | bool |  |
| DiplomaticPlay | IsInitiatorBacker | 1. Unknown | bool |  |
| DiplomaticPlay | IsInitiatorLeaning | 1. Country | bool |  |
| DiplomaticPlay | IsInitiatorOrBacker | 1. Country | bool |  |
| DiplomaticPlay | IsInvolved | 1. Country | bool |  |
| DiplomaticPlay | IsOnTheFence | 1. Country | bool |  |
| DiplomaticPlay | IsPinnedInOutliner |  | bool |  |
| DiplomaticPlay | IsPrimaryParticipant | 1. Unknown | bool |  |
| DiplomaticPlay | IsTarget | 1. Country | bool |  |
| DiplomaticPlay | IsTargetBacker | 1. Unknown | bool |  |
| DiplomaticPlay | IsTargetLeaning | 1. Country | bool |  |
| DiplomaticPlay | IsTargetOrBacker | 1. Unknown | bool |  |
| DiplomaticPlay | IsTargetOrInitiator | 1. Country | bool |  |
| DiplomaticPlay | IsUndecidedParticipant | 1. Country | bool |  |
| DiplomaticPlay | IsValid |  | bool |  |
| DiplomaticPlay | IsValidWarGoalDeclarer | 1. Country | bool |  |
| DiplomaticPlay | LeanTowardsInitiator | 1. Country | Command |  |
| DiplomaticPlay | LeanTowardsTarget | 1. Country | Command |  |
| DiplomaticPlay | MakeScope |  | Scope |  |
| DiplomaticPlay | PlayerHasPotentialSwayOffers | 1. Country | bool |  |
| DiplomaticPlay | Self |  | DiplomaticPlay |  |
| DiplomaticPlay | SupportInitiator | 1. Unknown | Command |  |
| DiplomaticPlay | SupportTarget | 1. Unknown | Command |  |
| DiplomaticPlay | SwitchSide | 1. Country | Command |  |
| DiplomaticPlay | TogglePinInOutliner |  | void |  |
| DiplomaticPlay | WouldAcceptAnySway | 1. Country 2. Country | bool |  |
| DiplomaticPlay | Yield | 1. Country | Command |  |
| DiplomaticPlayConfirmation | AccessCountryCreations |  | Unknown | Category: const |
| DiplomaticPlayConfirmation | AccessInitiatorCountries |  | Unknown | Category: const |
| DiplomaticPlayConfirmation | AccessInvolvedCountries |  | Unknown | Category: const |
| DiplomaticPlayConfirmation | AccessSelf |  | DiplomaticPlayConfirmation | Category: const |
| DiplomaticPlayConfirmation | AccessTargetCountries |  | Unknown | Category: const |
| DiplomaticPlayConfirmation | AccessUndecidedCountries |  | Unknown | Category: const |
| DiplomaticPlayConfirmation | CanJoinInitiator | 1. Country | bool |  |
| DiplomaticPlayConfirmation | CanJoinTarget | 1. Country | bool |  |
| DiplomaticPlayConfirmation | ConfirmAction |  | Command |  |
| DiplomaticPlayConfirmation | CreateDiplomaticDemand |  | Command |  |
| DiplomaticPlayConfirmation | GetConfirmationSound |  | Unknown | Category: nonconst |
| DiplomaticPlayConfirmation | GetCountryDefinition |  | CountryDefinition | Category: nonconst |
| DiplomaticPlayConfirmation | GetDescription |  | CString | Category: nonconst |
| DiplomaticPlayConfirmation | GetDiplomaticDemandAcceptanceDesc |  | CString | Category: nonconst |
| DiplomaticPlayConfirmation | GetInitiatorCountry |  | Country | Category: nonconst |
| DiplomaticPlayConfirmation | GetTargetCountry |  | Country | Category: nonconst |
| DiplomaticPlayConfirmation | GetTargetState |  | State | Category: nonconst |
| DiplomaticPlayConfirmation | GetType |  | DiplomaticPlayType | Category: nonconst |
| DiplomaticPlayConfirmation | IsSelectingCountryCreation |  | bool |  |
| DiplomaticPlayConfirmation | PredictCannotJoinOrPreferenceForInitiatorDesc | 1. Unknown | CString |  |
| DiplomaticPlayConfirmation | PredictCannotJoinOrPreferenceForTargetDesc | 1. Unknown | CString |  |
| DiplomaticPlayConfirmation | PredictHasPreferenceForInitiator | 1. Country | bool |  |
| DiplomaticPlayConfirmation | PredictHasPreferenceForTarget | 1. Country | bool |  |
| DiplomaticPlayConfirmation | PredictInitiatorPreferenceScore | 1. Unknown | int32 |  |
| DiplomaticPlayConfirmation | PredictInitiatorPreferenceScoreDesc | 1. Unknown | CString |  |
| DiplomaticPlayConfirmation | PredictInitiatorPreferenceScoreFormatted | 1. Country | CString |  |
| DiplomaticPlayConfirmation | PredictPreferenceScoreDesc | 1. Unknown | CString |  |
| DiplomaticPlayConfirmation | PredictTargetPreferenceScore | 1. Unknown | int32 |  |
| DiplomaticPlayConfirmation | PredictTargetPreferenceScoreDesc | 1. Unknown | CString |  |
| DiplomaticPlayConfirmation | PredictTargetPreferenceScoreFormatted | 1. Country | CString |  |
| DiplomaticPlayConfirmation | Self |  | DiplomaticPlayConfirmation |  |
| DiplomaticPlayConfirmation | SetCountryDefinition | 1. Unknown | void |  |
| DiplomaticPlayConfirmation | ShowMapNotification |  | void |  |
| DiplomaticPlayConfirmation | ToggleForceDiplomaticPlay |  | void |  |
| DiplomaticPlayConfirmation | ToggleSelectCountryCreation |  | void |  |
| DiplomaticPlayConfirmation | TriggerDiplomaticPlay |  | Command |  |
| DiplomaticPlayConfirmation | WillForceDiplomaticPlay |  | bool |  |
| DiplomaticPlayPanel | AccessDiplomaticPlay |  | DiplomaticPlay | Category: const |
| DiplomaticPlayPanel | AccessSelf |  | DiplomaticPlayPanel | Category: const |
| DiplomaticPlayPanel | GetDiplomaticPlay |  | DiplomaticPlay | Category: nonconst |
| DiplomaticPlayPanel | Self |  | DiplomaticPlayPanel |  |
| DiplomaticPlayType | AccessSelf |  | DiplomaticPlayType | Category: const |
| DiplomaticPlayType | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| DiplomaticPlayType | GetDiplomaticDemandAcceptanceDesc | 1. Unknown 2. Unknown 3. Unknown 4. Unknown | CString | Category: nonconst |
| DiplomaticPlayType | GetName |  | CString | Category: nonconst |
| DiplomaticPlayType | GetSoundWithConfirmation |  | Unknown | Category: nonconst |
| DiplomaticPlayType | GetStartCommandCountry | 1. Country 2. Country | Command | Category: nonconst |
| DiplomaticPlayType | GetStartCommandCountryWithDefinition | 1. Unknown 2. Unknown 3. Unknown | Command | Category: nonconst |
| DiplomaticPlayType | GetStartCommandState | 1. Country 2. State | Command | Category: nonconst |
| DiplomaticPlayType | GetStartDescCountry | 1. Country 2. Country | CString | Category: nonconst |
| DiplomaticPlayType | GetStartDescCountryWithDefinition | 1. Country 2. Country 3. CountryDefinition | CString | Category: nonconst |
| DiplomaticPlayType | GetStartDescState | 1. Country 2. State | CString | Category: nonconst |
| DiplomaticPlayType | GetStartTooltipCountry | 1. Country 2. Country | CString | Category: nonconst |
| DiplomaticPlayType | GetStartTooltipCountryWithDefinition | 1. Unknown 2. Unknown 3. Unknown | CString | Category: nonconst |
| DiplomaticPlayType | GetStartTooltipState | 1. Country 2. State | CString | Category: nonconst |
| DiplomaticPlayType | GetTexture |  | Unknown | Category: nonconst |
| DiplomaticPlayType | GetTooltipTag |  | CString | Category: nonconst |
| DiplomaticPlayType | GetWarGoalType |  | WarGoalType | Category: nonconst |
| DiplomaticPlayType | HasEnableSwitchSides |  | bool |  |
| DiplomaticPlayType | IsEpic |  | bool |  |
| DiplomaticPlayType | MakeScope |  | Scope |  |
| DiplomaticPlayType | Self |  | DiplomaticPlayType |  |
| DiplomaticPlayType | ShowConfirmationCountry | 1. Country | void |  |
| DiplomaticPlayType | ShowConfirmationCountryWithDefinition | 1. Unknown 2. Unknown | void |  |
| DiplomaticPlayType | ShowConfirmationState | 1. State | void |  |
| DiplomaticRelations | AccessSelf |  | DiplomaticRelations | Category: const |
| DiplomaticRelations | CalcOwedObligationDaysLeft | 1. Country | int32 |  |
| DiplomaticRelations | GetCountryWhichNotOwesObligation |  | Country | Category: nonconst |
| DiplomaticRelations | GetCountryWhichOwesObligation |  | Country | Category: nonconst |
| DiplomaticRelations | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| DiplomaticRelations | GetFirstCountry |  | Country | Category: nonconst |
| DiplomaticRelations | GetID |  | uint32 | Category: nonconst |
| DiplomaticRelations | GetSecondCountry |  | Country | Category: nonconst |
| DiplomaticRelations | GetTooltipTag |  | CString | Category: nonconst |
| DiplomaticRelations | MakeScope |  | Scope |  |
| DiplomaticRelations | Self |  | DiplomaticRelations |  |
| DiscriminationTrait | AccessSelf |  | DiscriminationTrait | Category: const |
| DiscriminationTrait | GetCulturesDesc |  | CString | Category: nonconst |
| DiscriminationTrait | GetName |  | CString | Category: nonconst |
| DiscriminationTrait | GetNameNoFormatting |  | CString | Category: nonconst |
| DiscriminationTrait | GetReligionsDesc |  | CString | Category: nonconst |
| DiscriminationTrait | GetTooltipTag |  | CString | Category: nonconst |
| DiscriminationTrait | GetTraitGroup |  | DiscriminationTraitGroup | Category: nonconst |
| DiscriminationTrait | GetType |  | CString | Category: nonconst |
| DiscriminationTrait | HasTraitGroup |  | bool |  |
| DiscriminationTrait | IsCulturalTrait |  | bool |  |
| DiscriminationTrait | Self |  | DiscriminationTrait |  |
| DiscriminationTraitGroup | AccessSelf |  | DiscriminationTraitGroup | Category: const |
| DiscriminationTraitGroup | GetCulturesDesc |  | CString | Category: nonconst |
| DiscriminationTraitGroup | GetName |  | CString | Category: nonconst |
| DiscriminationTraitGroup | GetNameNoFormatting |  | CString | Category: nonconst |
| DiscriminationTraitGroup | GetReligionsDesc |  | CString | Category: nonconst |
| DiscriminationTraitGroup | GetTooltipTag |  | CString | Category: nonconst |
| DiscriminationTraitGroup | GetType |  | CString | Category: nonconst |
| DiscriminationTraitGroup | IsCulturalTrait |  | bool |  |
| DiscriminationTraitGroup | Self |  | DiscriminationTraitGroup |  |
| Dlc | AccessSelf |  | Dlc | Category: const |
| Dlc | GetBanner |  | Unknown | Category: nonconst |
| Dlc | GetDesc |  | CString | Category: nonconst |
| Dlc | GetIcon |  | Unknown | Category: nonconst |
| Dlc | GetName |  | CString | Category: nonconst |
| Dlc | GetThemeBreakdown |  | CString | Category: nonconst |
| Dlc | GetTooltipTag |  | CString | Category: nonconst |
| Dlc | IsEnabled |  | bool |  |
| Dlc | IsMajor |  | bool |  |
| Dlc | IsThemeProvider |  | bool |  |
| Dlc | IsVerified |  | bool |  |
| Dlc | Self |  | Dlc |  |
| Dlc | ShowInStore |  | void |  |
| DockableLayout | AccessSelf |  | DockableLayout | Category: const |
| DockableLayout | GetName |  | CString | Category: nonconst |
| DockableLayout | Self |  | DockableLayout |  |
| DockableLayoutManager | AccessActiveLayout |  | DockableLayout | Category: const |
| DockableLayoutManager | AccessLayoutSearchList |  | ToolPropertySearchList | Category: const |
| DockableLayoutManager | AccessLayouts |  | Unknown | Category: const |
| DockableLayoutManager | AccessSelectedLayout |  | DockableLayout | Category: const |
| DockableLayoutManager | AccessSelf |  | DockableLayoutManager | Category: const |
| DockableLayoutManager | DeleteUserLayout |  | void |  |
| DockableLayoutManager | SaveAsNewUserLayout |  | void |  |
| DockableLayoutManager | SaveUserLayout |  | void |  |
| DockableLayoutManager | Self |  | DockableLayoutManager |  |
| DockableLayoutManager | SwitchToSelectedLayout |  | void |  |
| DockableWindow | AccessSelf |  | DockableWindow | Category: const |
| DockableWindow | Close |  | void |  |
| DockableWindow | IsHidden |  | bool |  |
| DockableWindow | IsMoving |  | bool |  |
| DockableWindow | Position |  | CVector2f |  |
| DockableWindow | ResizeHandleSize |  | CVector2f |  |
| DockableWindow | Self |  | DockableWindow |  |
| DockableWindow | Size |  | CVector2f |  |
| DockableWindow | Title |  | CString |  |
| DockableWindow | WidgetPosition |  | CVector2f |  |
| DockableWindow | WidgetSize |  | CVector2f |  |
| DrawCmdsList | AccessSelf |  | DrawCmdsList | Category: const |
| DrawCmdsList | GetAttachmentInfo |  | CString | Category: nonconst |
| DrawCmdsList | GetDrawNumber |  | CString | Category: nonconst |
| DrawCmdsList | GetFormat |  | CString | Category: nonconst |
| DrawCmdsList | GetResolution |  | CString | Category: nonconst |
| DrawCmdsList | GetSize |  | uint64 | Category: nonconst |
| DrawCmdsList | GetTextureName |  | Unknown | Category: nonconst |
| DrawCmdsList | GetZoneName |  | CString | Category: nonconst |
| DrawCmdsList | IsCaptured |  | bool |  |
| DrawCmdsList | Self |  | DrawCmdsList |  |
| DrawCmdsViewer | AccessSelf |  | DrawCmdsViewer | Category: const |
| DrawCmdsViewer | CaptureFrame |  | void |  |
| DrawCmdsViewer | ClearCapture |  | void |  |
| DrawCmdsViewer | DecrementCapturedDrawCount |  | void |  |
| DrawCmdsViewer | DecrementCapturedDrawNumberOffset |  | void |  |
| DrawCmdsViewer | GetCapturedDrawCount |  | uint32 | Category: nonconst |
| DrawCmdsViewer | GetCapturedDrawNumberOffset |  | uint32 | Category: nonconst |
| DrawCmdsViewer | GetCapturedFrameNumber |  | uint32 | Category: nonconst |
| DrawCmdsViewer | GetDrawCommandData |  | Unknown | Category: nonconst |
| DrawCmdsViewer | IncrementCapturedDrawCount |  | void |  |
| DrawCmdsViewer | IncrementCapturedDrawNumberOffset |  | void |  |
| DrawCmdsViewer | Self |  | DrawCmdsViewer |  |
| DrawCmdsViewer | SetDrawCount |  | void |  |
| DrawCmdsViewer | SetDrawOffset |  | void |  |
| EditorSettingCategory | AccessSelf |  | EditorSettingCategory | Category: const |
| EditorSettingCategory | GetName |  | CString | Category: nonconst |
| EditorSettingCategory | Self |  | EditorSettingCategory |  |
| EditorSettingsPage | AccessCategories |  | Unknown | Category: const |
| EditorSettingsPage | AccessSelf |  | EditorSettingsPage | Category: const |
| EditorSettingsPage | GetName |  | CString | Category: nonconst |
| EditorSettingsPage | IsSelected |  | bool |  |
| EditorSettingsPage | OnClick |  | void |  |
| EditorSettingsPage | Self |  | EditorSettingsPage |  |
| EditorSettingsWindow | AccessActivePage |  | EditorSettingsPage | Category: const |
| EditorSettingsWindow | AccessPages |  | Unknown | Category: const |
| EditorSettingsWindow | AccessSelf |  | EditorSettingsWindow | Category: const |
| EditorSettingsWindow | AllowApply |  | bool |  |
| EditorSettingsWindow | AppliedOnRestart |  | bool |  |
| EditorSettingsWindow | Close |  | void |  |
| EditorSettingsWindow | GetWindowName |  | CString | Category: nonconst |
| EditorSettingsWindow | HasChanged |  | bool |  |
| EditorSettingsWindow | Hide |  | void |  |
| EditorSettingsWindow | OnApply |  | void |  |
| EditorSettingsWindow | RequireRestart |  | bool |  |
| EditorSettingsWindow | Restore |  | void |  |
| EditorSettingsWindow | Save |  | void |  |
| EditorSettingsWindow | SaveAndClose |  | void |  |
| EditorSettingsWindow | Self |  | EditorSettingsWindow |  |
| EditorSettingsWindow | Show |  | void |  |
| Election | AccessSelf |  | Election | Category: const |
| Election | GetCountry |  | Country | Category: nonconst |
| Election | GetCountryName |  | CString | Category: nonconst |
| Election | GetDateFormatted |  | CString | Category: nonconst |
| Election | GetEligibleVoters |  | int64 | Category: nonconst |
| Election | GetIndependentIGs |  | Unknown | Category: nonconst |
| Election | GetLastElectionDateDesc |  | CString | Category: nonconst |
| Election | GetLastElectionYearRaw |  | int32 | Category: nonconst |
| Election | GetNextElectionYearRaw |  | int32 | Category: nonconst |
| Election | GetParties |  | Unknown | Category: nonconst |
| Election | GetTitle |  | CString | Category: nonconst |
| Election | GetTooltipTag |  | CString | Category: nonconst |
| Election | GetTotalVoters |  | int64 | Category: nonconst |
| Election | GetVoterTurnout |  | CFixedPoint | Category: nonconst |
| Election | GetVotesGraphDateEnd |  | CString | Category: nonconst |
| Election | GetVotesGraphDateStart |  | CString | Category: nonconst |
| Election | GetVotesGraphMax |  | CFixedPoint | Category: nonconst |
| Election | HasPreviousElection |  | bool |  |
| Election | IsInCampaignPeriod |  | bool |  |
| Election | Self |  | Election |  |
| ElectionPanel | AccessSelf |  | ElectionPanel | Category: const |
| ElectionPanel | GetElection |  | Election | Category: nonconst |
| ElectionPanel | Self |  | ElectionPanel |  |
| EmitterNodeWindow | AccessSelf |  | EmitterNodeWindow | Category: const |
| EmitterNodeWindow | AddUserData | 1. PdxGuiWidget | void |  |
| EmitterNodeWindow | GetNodeTitleColor |  | CVector4f | Category: nonconst |
| EmitterNodeWindow | IsAnotherWindowIsolated |  | bool |  |
| EmitterNodeWindow | IsIsolated |  | bool |  |
| EmitterNodeWindow | IsVisuallyEnabled |  | bool |  |
| EmitterNodeWindow | Self |  | EmitterNodeWindow |  |
| EmitterNodeWindow | ToggleSetEmitterIsolatedExclusive |  | void |  |
| EmitterNodeWindow | ToggleSetEmitterIsolatedIncremental |  | void |  |
| EmitterNodeWindow | ToggleSetVisuallyEnabled |  | void |  |
| EmployeeTransfer | AccessSelf |  | EmployeeTransfer | Category: const |
| EmployeeTransfer | GetIlliterate |  | int64 | Category: nonconst |
| EmployeeTransfer | GetLiterate |  | int64 | Category: nonconst |
| EmployeeTransfer | GetTooltipTag |  | CString | Category: nonconst |
| EmployeeTransfer | GetTotal |  | int64 | Category: nonconst |
| EmployeeTransfer | Self |  | EmployeeTransfer |  |
| Encyclopedia | AccessCurrentPage |  | EncyclopediaPage | Category: const |
| Encyclopedia | AccessPages |  | Unknown | Category: const |
| Encyclopedia | AccessSelf |  | Encyclopedia | Category: const |
| Encyclopedia | CanFilterFromHistoryBack |  | bool |  |
| Encyclopedia | CanFilterFromHistoryForward |  | bool |  |
| Encyclopedia | FilterFromHistoryBack |  | void |  |
| Encyclopedia | FilterFromHistoryForward |  | void |  |
| Encyclopedia | GetAllPage |  | EncyclopediaPage | Category: nonconst |
| Encyclopedia | GetCurrentPage |  | EncyclopediaPage | Category: nonconst |
| Encyclopedia | GetPages |  | Unknown | Category: nonconst |
| Encyclopedia | GetViewedEntries |  | Unknown | Category: nonconst |
| Encyclopedia | Hide |  | void |  |
| Encyclopedia | IsShown |  | bool |  |
| Encyclopedia | Self |  | Encyclopedia |  |
| Encyclopedia | SetCurrentPage | 1. EncyclopediaPage | void |  |
| Encyclopedia | ViewAllEntries |  | void |  |
| EncyclopediaEntry | AccessSelf |  | EncyclopediaEntry | Category: const |
| EncyclopediaEntry | GetBody |  | CString | Category: nonconst |
| EncyclopediaEntry | GetFrame |  | int32 | Category: nonconst |
| EncyclopediaEntry | GetFrameSize |  | CVector2i | Category: nonconst |
| EncyclopediaEntry | GetImage |  | Unknown | Category: nonconst |
| EncyclopediaEntry | GetTitle |  | CString | Category: nonconst |
| EncyclopediaEntry | HasImage |  | bool |  |
| EncyclopediaEntry | Self |  | EncyclopediaEntry |  |
| EncyclopediaEntryView | AccessSelf |  | EncyclopediaEntryView | Category: const |
| EncyclopediaEntryView | Get |  | EncyclopediaEntry |  |
| EncyclopediaEntryView | Self |  | EncyclopediaEntryView |  |
| EncyclopediaPage | AccessSelf |  | EncyclopediaPage | Category: const |
| EncyclopediaPage | FilterFromText |  | void |  |
| EncyclopediaPage | GetTitle |  | CString | Category: nonconst |
| EncyclopediaPage | ResetFilter |  | void |  |
| EncyclopediaPage | SearchFromEnteredText |  | void |  |
| EncyclopediaPage | Self |  | EncyclopediaPage |  |
| EndPrepConfirm | AccessSelf |  | EndPrepConfirm | Category: const |
| EndPrepConfirm | Cancel |  | void |  |
| EndPrepConfirm | Confirm |  | void |  |
| EndPrepConfirm | Self |  | EndPrepConfirm |  |
| EntityEditor | AccessSelf |  | EntityEditor | Category: const |
| EntityEditor | AddAudioLayer |  | void |  |
| EntityEditor | AddEntityRemovalLayer |  | void |  |
| EntityEditor | AddEntitySpawnLayer |  | void |  |
| EntityEditor | AddKeyframeOnMouseToHoveredLane |  | void |  |
| EntityEditor | AddKeyframeOnNeedleToHoveredLane |  | void |  |
| EntityEditor | AddVfxLayer |  | void |  |
| EntityEditor | CanInteract |  | bool |  |
| EntityEditor | CurrentAnimationMax |  | float |  |
| EntityEditor | DeleteKeyframe | 1. EntityEditorKeyframe | void |  |
| EntityEditor | Entity |  | ViewerEntity |  |
| EntityEditor | FitCamera |  | void |  |
| EntityEditor | GetLastAutoSaveDuration |  | double | Category: nonconst |
| EntityEditor | GetLastAutoSaveTimestamp |  | Unknown | Category: nonconst |
| EntityEditor | HasEntities |  | bool |  |
| EntityEditor | HasEntity |  | bool |  |
| EntityEditor | HasLastSaveTimestamp |  | bool |  |
| EntityEditor | IsAutoSaving |  | bool |  |
| EntityEditor | IsGridVisible |  | bool |  |
| EntityEditor | IsLoading |  | bool |  |
| EntityEditor | IsScrubbing |  | bool |  |
| EntityEditor | IsWorldMuted |  | bool |  |
| EntityEditor | MovePlayerWithKeyframe |  | bool |  |
| EntityEditor | OnAddLayerClick |  | void |  |
| EntityEditor | OnKeyframeClick | 1. KeyframeWidget 2. EntityEditorKeyframe | void |  |
| EntityEditor | OnKeyframeMove | 1. KeyframeWidget 2. EntityEditorKeyframe | void |  |
| EntityEditor | OnKeyframePressed | 1. KeyframeWidget 2. EntityEditorKeyframe | void |  |
| EntityEditor | OnKeyframeReleased | 1. KeyframeWidget 2. EntityEditorKeyframe | void |  |
| EntityEditor | OnKeyframeRightClick | 1. EntityEditorKeyframe | void |  |
| EntityEditor | OnLayerRightClick | 1. EntityEditorEventLayer | void |  |
| EntityEditor | OnScrubEnd |  | void |  |
| EntityEditor | OnScrubStart |  | void |  |
| EntityEditor | OpenEventEditor | 1. EntityEditorKeyframe | void |  |
| EntityEditor | SaveChanges |  | void |  |
| EntityEditor | ScrubPlayer |  | void |  |
| EntityEditor | Self |  | EntityEditor |  |
| EntityEditor | SetClickedLane | 1. EntityEditorEventLayer | void |  |
| EntityEditor | SetMovePlayerWithKeyframe | 1. Unknown | void |  |
| EntityEditor | ToggleGridVisible |  | void |  |
| EntityEditor | ToggleMovePlayerWithKeyframe |  | void |  |
| EntityEditor | ToggleMuteWorld |  | void |  |
| EntityEditorAudioEventHandler | AccessSelf |  | EntityEditorAudioEventHandler | Category: const |
| EntityEditorAudioEventHandler | AddSoundParamter | 1. EntityEditorKeyframe | void |  |
| EntityEditorAudioEventHandler | RemoveLastSoundParameter | 1. EntityEditorKeyframe | void |  |
| EntityEditorAudioEventHandler | Self |  | EntityEditorAudioEventHandler |  |
| EntityEditorEventLayer | AccessSelf |  | EntityEditorEventLayer | Category: const |
| EntityEditorEventLayer | AddStartEventKeyframe | 1. EntityEditor | void |  |
| EntityEditorEventLayer | HasKeyframes |  | bool |  |
| EntityEditorEventLayer | IsExpanded |  | bool |  |
| EntityEditorEventLayer | IsHovered |  | bool |  |
| EntityEditorEventLayer | Keyframes |  | Unknown |  |
| EntityEditorEventLayer | Self |  | EntityEditorEventLayer |  |
| EntityEditorEventLayer | SetHovered | 1. bool | void |  |
| EntityEditorEventLayer | Title |  | Unknown |  |
| EntityEditorEventLayer | ToggleExpanded |  | void |  |
| EntityEditorKeyframe | AccessSelf |  | EntityEditorKeyframe | Category: const |
| EntityEditorKeyframe | HasEvent |  | bool |  |
| EntityEditorKeyframe | IsHovered |  | bool |  |
| EntityEditorKeyframe | IsSelected |  | bool |  |
| EntityEditorKeyframe | IsStartEvent |  | bool |  |
| EntityEditorKeyframe | KeyframeColor |  | CVector4f |  |
| EntityEditorKeyframe | Label |  | CString |  |
| EntityEditorKeyframe | Self |  | EntityEditorKeyframe |  |
| EntityEditorKeyframe | SetHovered | 1. Unknown | void |  |
| EntityEditorKeyframe | SetSelected | 1. Unknown | void |  |
| EntityEditorKeyframe | TimePoint |  | float |  |
| EntityEditorTimelineState | AccessSelf |  | EntityEditorTimelineState | Category: const |
| EntityEditorTimelineState | AnimationLength |  | float |  |
| EntityEditorTimelineState | KeyframeLayers |  | Unknown |  |
| EntityEditorTimelineState | Name |  | Unknown |  |
| EntityEditorTimelineState | Self |  | EntityEditorTimelineState |  |
| EntityViewerProperties | AccessSelf |  | EntityViewerProperties | Category: const |
| EntityViewerProperties | ClearSelection |  | void |  |
| EntityViewerProperties | IsBloomEvPropertiesVisible |  | bool |  |
| EntityViewerProperties | IsCubemapEvPropertiesVisible |  | bool |  |
| EntityViewerProperties | IsEnvSelected |  | bool |  |
| EntityViewerProperties | IsFogEvPropertiesVisible |  | bool |  |
| EntityViewerProperties | IsLightEnvPropertiesVisible |  | bool |  |
| EntityViewerProperties | IsMeshSelected |  | bool |  |
| EntityViewerProperties | SelectEnvWindow |  | void |  |
| EntityViewerProperties | SelectMeshWindow |  | void |  |
| EntityViewerProperties | Self |  | EntityViewerProperties |  |
| EntityViewerProperties | ToggleIsBloomEvPropertiesVisible |  | void |  |
| EntityViewerProperties | ToggleIsCubemapEvPropertiesVisible |  | void |  |
| EntityViewerProperties | ToggleIsFogEvPropertiesVisible |  | void |  |
| EntityViewerProperties | ToggleIsLightEnvPropertiesVisible |  | void |  |
| EnumSettingEntry | AccessSelf |  | EnumSettingEntry | Category: const |
| EnumSettingEntry | AccessSetting |  | Unknown | Category: const |
| EnumSettingEntry | GetEnumString |  | CString | Category: nonconst |
| EnumSettingEntry | GetGUIName |  | CUTF8String | Category: nonconst |
| EnumSettingEntry | GetRecommendedText |  | CString | Category: nonconst |
| EnumSettingEntry | GetTooltip |  | CUTF8String | Category: nonconst |
| EnumSettingEntry | HasValueChanged |  | bool |  |
| EnumSettingEntry | IsSelected |  | bool |  |
| EnumSettingEntry | Self |  | EnumSettingEntry |  |
| Era | AccessSelf |  | Era | Category: const |
| Era | GetName |  | CString | Category: nonconst |
| Era | GetNumber |  | CString | Category: nonconst |
| Era | GetTechnologyCost |  | int32 | Category: nonconst |
| Era | GetTooltipTag |  | CString | Category: nonconst |
| Era | Self |  | Era |  |
| ErrorDeer | AccessSelf |  | ErrorDeer | Category: const |
| ErrorDeer | GetTooltip |  | CString | Category: nonconst |
| ErrorDeer | HasErrors |  | bool |  |
| ErrorDeer | HasSlowTicks |  | bool |  |
| ErrorDeer | NumberOrErrors |  | int32 |  |
| ErrorDeer | OpenErrorLog |  | void |  |
| ErrorDeer | Self |  | ErrorDeer |  |
| Ethnicity | AccessSelf |  | Ethnicity | Category: const |
| Ethnicity | GetName |  | CString | Category: nonconst |
| Ethnicity | IsVisible |  | bool |  |
| Ethnicity | Self |  | Ethnicity |  |
| EthnicityItem | AccessSelf |  | EthnicityItem | Category: const |
| EthnicityItem | GetName |  | CString | Category: nonconst |
| EthnicityItem | Self |  | EthnicityItem |  |
| Event | AccessSelf |  | Event | Category: const |
| Event | AccessState |  | State | Category: const |
| Event | GetDLCIcon |  | Unknown | Category: nonconst |
| Event | GetDLCName |  | CString | Category: nonconst |
| Event | GetDescription |  | CString | Category: nonconst |
| Event | GetEventIcon |  | Unknown | Category: nonconst |
| Event | GetFlavor |  | CString | Category: nonconst |
| Event | GetKey |  | CString | Category: nonconst |
| Event | GetNumRemainingDays |  | int32 | Category: nonconst |
| Event | GetOnCreatedSoundEvent |  | Unknown | Category: nonconst |
| Event | GetOnOpenedSoundEvent |  | Unknown | Category: nonconst |
| Event | GetPercentageRemainingDays |  | float | Category: nonconst |
| Event | GetRemainingDays |  | CString | Category: nonconst |
| Event | GetState |  | State | Category: nonconst |
| Event | GetTexture |  | Unknown | Category: nonconst |
| Event | GetTitle |  | CString | Category: nonconst |
| Event | GetTooltip |  | CString | Category: nonconst |
| Event | GetTooltipTag |  | CString | Category: nonconst |
| Event | GetTriggerDesc |  | CString | Category: nonconst |
| Event | GetVideo |  | CString | Category: nonconst |
| Event | HasCategory | 1. CString | bool |  |
| Event | HasTexture |  | bool |  |
| Event | HasVideo |  | bool |  |
| Event | IsDLCContent |  | bool |  |
| Event | OpenInEditor |  | void |  |
| Event | Self |  | Event |  |
| EventIcon | AccessSelf |  | EventIcon | Category: const |
| EventIcon | GetTexture |  | Unknown | Category: nonconst |
| EventIcon | IsCoatOfArms |  | bool |  |
| EventIcon | IsPortrait |  | bool |  |
| EventIcon | IsTexture |  | bool |  |
| EventIcon | IsVisible |  | bool |  |
| EventIcon | Self |  | EventIcon |  |
| EventLayerForEntityEditor | AccessSelf |  | EventLayerForEntityEditor | Category: const |
| EventLayerForEntityEditor | HasKeyframes |  | bool |  |
| EventLayerForEntityEditor | IsHovered |  | bool |  |
| EventLayerForEntityEditor | Keyframes |  | Unknown |  |
| EventLayerForEntityEditor | Self |  | EventLayerForEntityEditor |  |
| EventLayerForEntityEditor | SetHovered | 1. Unknown | void |  |
| EventMarker | AccessAnyEvent |  | Event | Category: const |
| EventMarker | AccessSelf |  | EventMarker | Category: const |
| EventMarker | GetAnyEvent |  | Event | Category: nonconst |
| EventMarker | GetPosition |  | CVector2f | Category: nonconst |
| EventMarker | GetTexture |  | Unknown | Category: nonconst |
| EventMarker | Self |  | EventMarker |  |
| EventMarkerListItem | AccessSelf |  | EventMarkerListItem | Category: const |
| EventMarkerListItem | GetDescription |  | CString | Category: nonconst |
| EventMarkerListItem | Self |  | EventMarkerListItem |  |
| EventOption | AccessSelf |  | EventOption | Category: const |
| EventOption | GetDesc |  | CString | Category: nonconst |
| EventOption | GetText |  | CString | Category: nonconst |
| EventOption | IsDefaultOption |  | bool |  |
| EventOption | IsEnabled |  | bool |  |
| EventOption | IsHighlightedOption |  | bool |  |
| EventOption | Select |  | void |  |
| EventOption | Self |  | EventOption |  |
| EventTargetSetupContext | AccessSelf |  | EventTargetSetupContext | Category: const |
| EventTargetSetupContext | Self |  | EventTargetSetupContext |  |
| EventWindow | AccessEvent |  | Event | Category: const |
| EventWindow | AccessSelf |  | EventWindow | Category: const |
| EventWindow | GetDescription |  | CString | Category: nonconst |
| EventWindow | GetEvent |  | Event | Category: nonconst |
| EventWindow | GetFlavor |  | CString | Category: nonconst |
| EventWindow | GetOptions |  | Unknown | Category: nonconst |
| EventWindow | GetTitle |  | CString | Category: nonconst |
| EventWindow | GetTitleTooltip |  | CString | Category: nonconst |
| EventWindow | Self |  | EventWindow |  |
| ExilePool | AccessSelf |  | ExilePool | Category: const |
| ExilePool | GetAllExiles |  | Unknown | Category: nonconst |
| ExilePool | GetExiles |  | Unknown | Category: nonconst |
| ExilePool | GetNumInviteableExiles |  | int32 | Category: nonconst |
| ExilePool | IsInterestGroupFiltered | 1. InterestGroup | bool |  |
| ExilePool | IsInterestGroupFilteredToShowOnly | 1. InterestGroup | bool |  |
| ExilePool | IsSorted | 1. Unknown | bool |  |
| ExilePool | Self |  | ExilePool |  |
| ExilePool | SetInterestGroupFilter | 1. InterestGroup | void |  |
| ExilePool | Sort | 1. CString | void |  |
| ExilePool | ToggleInterestGroupFilter | 1. InterestGroup | void |  |
| ExportTool | AccessSelf |  | ExportTool | Category: const |
| ExportTool | CanExport |  | bool |  |
| ExportTool | Cancel |  | void |  |
| ExportTool | CurrentProgress |  | float |  |
| ExportTool | CurrentProgressDesc |  | CString |  |
| ExportTool | Export |  | void |  |
| ExportTool | GetHeightmapTexture |  | Unknown | Category: nonconst |
| ExportTool | GetMaskEffect |  | Unknown | Category: nonconst |
| ExportTool | GetNotes |  | CString | Category: nonconst |
| ExportTool | GetSelectedMaskIndex |  | CVector2i | Category: nonconst |
| ExportTool | GetTexture |  | Unknown | Category: nonconst |
| ExportTool | HasMasks |  | bool |  |
| ExportTool | IsExporting |  | bool |  |
| ExportTool | MaxProgress |  | float |  |
| ExportTool | Refresh |  | void |  |
| ExportTool | Self |  | ExportTool |  |
| ExportTool | SetExportNotes |  | void |  |
| ExportTool | SetSelectedMaskIndex |  | void |  |
| EyeDropper | AccessSelf |  | EyeDropper | Category: const |
| EyeDropper | IsEnabled |  | bool |  |
| EyeDropper | PackedSamples |  | Unknown |  |
| EyeDropper | PackedSamplesDynamic |  | Unknown |  |
| EyeDropper | Self |  | EyeDropper |  |
| EyeDropper | SetEnabled | 1. bool | void |  |
| EyeDropperPackedSample | AccessSelf |  | EyeDropperPackedSample | Category: const |
| EyeDropperPackedSample | GetChannel |  | CString | Category: nonconst |
| EyeDropperPackedSample | Self |  | EyeDropperPackedSample |  |
| FeedMessageItem | AccessSelf |  | FeedMessageItem | Category: const |
| FeedMessageItem | ClickedExpand |  | bool |  |
| FeedMessageItem | ClickedExpandFinished |  | void |  |
| FeedMessageItem | ClickedHide |  | bool |  |
| FeedMessageItem | ClickedHideFinished |  | void |  |
| FeedMessageItem | Delete |  | void |  |
| FeedMessageItem | EndAnimation |  | void |  |
| FeedMessageItem | Expand |  | void |  |
| FeedMessageItem | GetPlayerMessageItem |  | PlayerMessageItem | Category: nonconst |
| FeedMessageItem | GetTimeoutTimer |  | PieTimer | Category: nonconst |
| FeedMessageItem | IsExpanded |  | bool |  |
| FeedMessageItem | IsSetToDelete |  | bool |  |
| FeedMessageItem | IsToggled |  | bool |  |
| FeedMessageItem | MarkToDelete |  | void |  |
| FeedMessageItem | Self |  | FeedMessageItem |  |
| FeedMessageItem | ShouldHide |  | bool |  |
| FeedMessageItem | ShouldShow |  | bool |  |
| FeedMessageItem | StartAnimation |  | void |  |
| FilterablePropertyList | AccessSelf |  | FilterablePropertyList | Category: const |
| FilterablePropertyList | ClearSearchText |  | void |  |
| FilterablePropertyList | Filter |  | void |  |
| FilterablePropertyList | GetPropertiesLabel |  | CString | Category: nonconst |
| FilterablePropertyList | GetSearchText |  | CString | Category: nonconst |
| FilterablePropertyList | Search |  | void |  |
| FilterablePropertyList | Self |  | FilterablePropertyList |  |
| FoodSecurity | AccessSelf |  | FoodSecurity | Category: const |
| FoodSecurity | GetNumPopsTotal |  | int64 | Category: nonconst |
| FoodSecurity | GetNumStarvingPops |  | int64 | Category: nonconst |
| FoodSecurity | GetNumStarvingPopsMild |  | int64 | Category: nonconst |
| FoodSecurity | GetNumStarvingPopsSevere |  | int64 | Category: nonconst |
| FoodSecurity | GetNumStatesWithFamineFormatted |  | CString | Category: nonconst |
| FoodSecurity | GetNumStatesWithFamineRaw |  | int32 | Category: nonconst |
| FoodSecurity | GetPercentageStarvingPops |  | CFixedPoint | Category: nonconst |
| FoodSecurity | GetPercentageStarvingPopsMild |  | CFixedPoint | Category: nonconst |
| FoodSecurity | GetPercentageStarvingPopsSevere |  | CFixedPoint | Category: nonconst |
| FoodSecurity | GetStarvationTypePopulation | 1. StarvationType | int64 | Category: nonconst |
| FoodSecurity | GetStarvationTypePopulationAsFloat | 1. Unknown | float | Category: nonconst |
| FoodSecurity | GetStarvationTypePopulationAsPercentage | 1. StarvationType | CFixedPoint | Category: nonconst |
| FoodSecurity | HasFamine |  | bool |  |
| FoodSecurity | Self |  | FoodSecurity |  |

List of all GUI functions

| Type | Function | Arguments | Output | Description |
| FoodSecurityFilter | AccessSelf |  | FoodSecurityFilter | Category: const |
| FoodSecurityFilter | GetStates |  | Unknown | Category: nonconst |
| FoodSecurityFilter | HasSpecificCountry |  | bool |  |
| FoodSecurityFilter | HasSpecificState |  | bool |  |
| FoodSecurityFilter | IsCountrySelected | 1. Unknown | bool |  |
| FoodSecurityFilter | IsStateSelected | 1. Unknown | bool |  |
| FoodSecurityFilter | ResetCountryFilter |  | void |  |
| FoodSecurityFilter | ResetStateFilter |  | void |  |
| FoodSecurityFilter | Self |  | FoodSecurityFilter |  |
| FoodSecurityFilter | SetCountryFilter | 1. Unknown | void |  |
| FoodSecurityFilter | SetStateFilter | 1. Unknown | void |  |
| FormationMarker | AccessSelf |  | FormationMarker | Category: const |
| FormationMarker | CalcAverageAvailableDefense |  | CFixedPoint |  |
| FormationMarker | CalcAverageAvailableOffense |  | CFixedPoint |  |
| FormationMarker | CalcAverageMorale |  | CFixedPoint |  |
| FormationMarker | CalcAverageOrganizationPercentage |  | CFixedPoint |  |
| FormationMarker | CalcCurrentManpower |  | int64 |  |
| FormationMarker | CalcMaxManpower |  | int64 |  |
| FormationMarker | CalcTotalNumCombatUnits |  | int32 |  |
| FormationMarker | GetCombatUnitsTypeIcon |  | CString | Category: nonconst |
| FormationMarker | GetDefenseTooltip |  | CString | Category: nonconst |
| FormationMarker | GetFormations |  | Unknown | Category: nonconst |
| FormationMarker | GetManpowerTooltip |  | CString | Category: nonconst |
| FormationMarker | GetMoraleTooltip |  | CString | Category: nonconst |
| FormationMarker | GetOffenseTooltip |  | CString | Category: nonconst |
| FormationMarker | GetOrganizationTooltip |  | CString | Category: nonconst |
| FormationMarker | GetPosition |  | CVector2f | Category: nonconst |
| FormationMarker | GetPositionDesc |  | CString | Category: nonconst |
| FormationMarker | GetSummaryTooltip |  | CString | Category: nonconst |
| FormationMarker | HasMultipleFormations |  | bool |  |
| FormationMarker | IsAnyFormationHighlighted |  | bool |  |
| FormationMarker | IsAnyFormationTraveling |  | bool |  |
| FormationMarker | IsArmy |  | bool |  |
| FormationMarker | IsEnemies |  | bool |  |
| FormationMarker | IsFleet |  | bool |  |
| FormationMarker | OnCtrlClick |  | void |  |
| FormationMarker | OnLeftClick |  | void |  |
| FormationMarker | OnRightClick |  | void |  |
| FormationMarker | OnShiftClick |  | void |  |
| FormationMarker | Self |  | FormationMarker |  |
| FormationPanel | AccessCommanderOrdersPossibleForSelectedFormations |  | Unknown | Category: const |
| FormationPanel | AccessSelf |  | FormationPanel | Category: const |
| FormationPanel | GetFormation |  | MilitaryFormation | Category: nonconst |
| FormationPanel | GetSelectedFormations |  | Unknown | Category: nonconst |
| FormationPanel | HasSelectionView |  | bool |  |
| FormationPanel | SelectFormation | 1. Unknown | void |  |
| FormationPanel | Self |  | FormationPanel |  |
| Friend | AccessSelf |  | Friend | Category: const |
| Friend | GetAvailabilityString |  | CUTF8String | Category: nonconst |
| Friend | GetName |  | CUTF8String | Category: nonconst |
| Friend | GetNameWithColor |  | CUTF8String | Category: nonconst |
| Friend | GetUnreadMessageCount |  | int32 | Category: nonconst |
| Friend | HasUnreadMessages |  | bool |  |
| Friend | RemoveWithConfirmation |  | void |  |
| Friend | Self |  | Friend |  |
| Friend | StartChat |  | void |  |
| FriendListWindow | AccessSelf |  | FriendListWindow | Category: const |
| FriendListWindow | Hide |  | void |  |
| FriendListWindow | Self |  | FriendListWindow |  |
| FriendListWindow | ShouldBeShown |  | bool |  |
| FriendListWindow | Show |  | void |  |
| FriendListWindow | ShowAddFriendWindow |  | void |  |
| FriendRequest | Accept |  | void |  |
| FriendRequest | AccessSelf |  | FriendRequest | Category: const |
| FriendRequest | GetName |  | CUTF8String | Category: nonconst |
| FriendRequest | Reject |  | void |  |
| FriendRequest | Self |  | FriendRequest |  |
| FriendSearchResult | AccessSelf |  | FriendSearchResult | Category: const |
| FriendSearchResult | AddFriend |  | void |  |
| FriendSearchResult | GetName |  | CUTF8String | Category: nonconst |
| FriendSearchResult | Self |  | FriendSearchResult |  |
| Friends | AccessAvailabilityEntries |  | Unknown | Category: const |
| Friends | AccessFriendRequests |  | Unknown | Category: const |
| Friends | AccessFriendSearchResults |  | Unknown | Category: const |
| Friends | AccessFriends |  | Unknown | Category: const |
| Friends | AccessOutgoingFriendRequests |  | Unknown | Category: const |
| Friends | AccessSelf |  | Friends | Category: const |
| Friends | CalcNumberOfOnlineFriends |  | int32 |  |
| Friends | GetAvailabilityStringForLocalAccount |  | CUTF8String | Category: nonconst |
| Friends | GetLocalProfileName |  | CUTF8String | Category: nonconst |
| Friends | GetSearchString |  | CUTF8String | Category: nonconst |
| Friends | GetSelectedAvailabilityEntryIndex |  | CVector2i | Category: nonconst |
| Friends | HasIngoingFriendRequests |  | bool |  |
| Friends | HasOutgoingFriendRequests |  | bool |  |
| Friends | Search |  | void |  |
| Friends | Self |  | Friends |  |
| Friends | SetSearchString |  | void |  |
| Friends | SetSelectedAvailabilityEntryIndex |  | void |  |
| Friends | UpdateFriends |  | void |  |
| Front | AccessActiveBattles |  | Unknown | Category: const |
| Front | AccessAllBattles |  | Unknown | Category: const |
| Front | AccessDiplomaticPlay |  | DiplomaticPlay | Category: const |
| Front | AccessEndedBattles |  | Unknown | Category: const |
| Front | AccessSelf |  | Front | Category: const |
| Front | GetAdvantageFrame |  | int32 | Category: nonconst |
| Front | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| Front | GetDeploySelectedFormationsCommand |  | Command | Category: nonconst |
| Front | GetDesc |  | CString | Category: nonconst |
| Front | GetID |  | uint32 | Category: nonconst |
| Front | GetInitiatorTheatersDebugDesc |  | CString | Category: nonconst |
| Front | GetName |  | CString | Category: nonconst |
| Front | GetNameFromPerspective |  | CString | Category: nonconst |
| Front | GetNameNoFormatting |  | CString | Category: nonconst |
| Front | GetPlayerAdvantageDesc |  | CString | Category: nonconst |
| Front | GetPlayerAdvantageRaw |  | int32 | Category: nonconst |
| Front | GetPlayerSideAlliesCombatUnitsBreakdown |  | CString | Category: nonconst |
| Front | GetPlayerSideAlliesCombatUnitsTravelingBreakdown |  | CString | Category: nonconst |
| Front | GetPlayerSideCombatUnitsBreakdown |  | CString | Category: nonconst |
| Front | GetPlayerSideCombatUnitsTravelingBreakdown |  | CString | Category: nonconst |
| Front | GetPlayerSideNumUnitsAtFront |  | int32 | Category: nonconst |
| Front | GetPlayerSideNumUnitsTraveling |  | int32 | Category: nonconst |
| Front | GetPlayerSideUnitsTooltip |  | CString | Category: nonconst |
| Front | GetRequiredAdvanceProgressForBattle |  | CFixedPoint | Category: nonconst |
| Front | GetTargetTheatersDebugDesc |  | CString | Category: nonconst |
| Front | GetTooltipTag |  | CString | Category: nonconst |
| Front | HasCountry | 1. Country | bool |  |
| Front | IsBeingHighlighted |  | bool |  |
| Front | IsBeingTutorialHighlighted |  | bool |  |
| Front | IsValid |  | bool |  |
| Front | IsVulnerable | 1. Country | bool |  |
| Front | IsZoomingToFront |  | bool |  |
| Front | MakeScope |  | Scope |  |
| Front | Self |  | Front |  |
| Front | ZoomToFront |  | void |  |
| FrontEndCreditsView | AccessSelf |  | FrontEndCreditsView | Category: const |
| FrontEndCreditsView | OnBack |  | void |  |
| FrontEndCreditsView | Self |  | FrontEndCreditsView |  |
| FrontEndLoadConfirmationWindow | AccessSelf |  | FrontEndLoadConfirmationWindow | Category: const |
| FrontEndLoadConfirmationWindow | AnswerNo |  | void |  |
| FrontEndLoadConfirmationWindow | AnswerYes |  | void |  |
| FrontEndLoadConfirmationWindow | GetDesc |  | CString | Category: nonconst |
| FrontEndLoadConfirmationWindow | Self |  | FrontEndLoadConfirmationWindow |  |
| FrontEndLoadView | AccessSelf |  | FrontEndLoadView | Category: const |
| FrontEndLoadView | CanDoContinue |  | bool |  |
| FrontEndLoadView | GetContinueSave |  | SaveGameItem | Category: nonconst |
| FrontEndLoadView | GetSaveGames |  | Unknown | Category: nonconst |
| FrontEndLoadView | GetSelectedSavegame |  | SaveGameItem | Category: nonconst |
| FrontEndLoadView | HasSelectedSavegame |  | bool |  |
| FrontEndLoadView | IsEmpty |  | bool |  |
| FrontEndLoadView | OnBack |  | void |  |
| FrontEndLoadView | OnConfirmContinue | 1. CString | void |  |
| FrontEndLoadView | OnContinue |  | void |  |
| FrontEndLoadView | OnDelete |  | void |  |
| FrontEndLoadView | OnDeleteAll |  | void |  |
| FrontEndLoadView | OnIncompatibleLoadConfirm |  | void |  |
| FrontEndLoadView | OnIncompatibleLoadDeny |  | void |  |
| FrontEndLoadView | OnLoad |  | void |  |
| FrontEndLoadView | OnShowInvalidSavegames |  | void |  |
| FrontEndLoadView | PreContinueSaveCheck |  | void |  |
| FrontEndLoadView | Self |  | FrontEndLoadView |  |
| FrontEndLoadView | ShouldShowInvalidSavegames |  | bool |  |
| FrontEndMainView | AccessLoadView |  | FrontEndLoadView | Category: const |
| FrontEndMainView | AccessSelf |  | FrontEndMainView | Category: const |
| FrontEndMainView | GetMainMenuImage |  | CString | Category: nonconst |
| FrontEndMainView | OnCredits |  | void |  |
| FrontEndMainView | OnHost |  | void |  |
| FrontEndMainView | OnLoad |  | void |  |
| FrontEndMainView | OnLogin |  | void |  |
| FrontEndMainView | OnMultiPlayer |  | void |  |
| FrontEndMainView | OnNewGame |  | void |  |
| FrontEndMainView | OnQuit |  | void |  |
| FrontEndMainView | OnSettings |  | void |  |
| FrontEndMainView | Self |  | FrontEndMainView |  |
| FrontEndMultiplayerView | AccessSelf |  | FrontEndMultiplayerView | Category: const |
| FrontEndMultiplayerView | OnBack |  | void |  |
| FrontEndMultiplayerView | OnHost |  | void |  |
| FrontEndMultiplayerView | OnLoad |  | void |  |
| FrontEndMultiplayerView | OnNewGame |  | void |  |
| FrontEndMultiplayerView | Self |  | FrontEndMultiplayerView |  |
| FrontMarker | AccessSelf |  | FrontMarker | Category: const |
| FrontMarker | GetPosition |  | CVector2f | Category: nonconst |
| FrontMarker | OnClick |  | void |  |
| FrontMarker | Self |  | FrontMarker |  |
| FrontMovementMarker | AccessFront |  | Front | Category: const |
| FrontMovementMarker | AccessSelf |  | FrontMovementMarker | Category: const |
| FrontMovementMarker | CanDeploySelectedFormationsToFront |  | bool |  |
| FrontMovementMarker | GetFront |  | Front | Category: nonconst |
| FrontMovementMarker | GetPosition |  | CVector2f | Category: nonconst |
| FrontMovementMarker | GetPresentFormationsBreakdown |  | CString | Category: nonconst |
| FrontMovementMarker | GetTravelTimeBreakdown |  | CString | Category: nonconst |
| FrontMovementMarker | IsAllSelectedFormationsLocation |  | bool |  |
| FrontMovementMarker | IsAllSelectedFormationsTarget |  | bool |  |
| FrontMovementMarker | IsAnySelectedFormationsLocation |  | bool |  |
| FrontMovementMarker | IsAnySelectedFormationsTarget |  | bool |  |
| FrontMovementMarker | Self |  | FrontMovementMarker |  |
| FrontPanel | AccessFront |  | Front | Category: const |
| FrontPanel | AccessSelf |  | FrontPanel | Category: const |
| FrontPanel | GetFront |  | Front | Category: nonconst |
| FrontPanel | IsShowingBattles |  | bool |  |
| FrontPanel | Self |  | FrontPanel |  |
| FrontPanel | ToggleShowPastBattles |  | void |  |
| FrontSide | AccessSelf |  | FrontSide | Category: const |
| FrontSide | GetAdvancement |  | CFixedPoint | Category: nonconst |
| FrontSide | GetAdvancementProgress |  | CFixedPoint | Category: nonconst |
| FrontSide | GetAdvantage |  | int32 | Category: nonconst |
| FrontSide | GetAdvantageDesc |  | CString | Category: nonconst |
| FrontSide | GetAdvantageFrame |  | int32 | Category: nonconst |
| FrontSide | GetArmies |  | Unknown | Category: nonconst |
| FrontSide | GetCountries |  | Unknown | Category: nonconst |
| FrontSide | GetCountry |  | Country | Category: nonconst |
| FrontSide | GetNumCasualties | 1. Country | int64 | Category: nonconst |
| FrontSide | GetNumDead | 1. Country | int64 | Category: nonconst |
| FrontSide | GetNumUnits |  | int32 | Category: nonconst |
| FrontSide | GetNumUnitsBreakdown |  | CString | Category: nonconst |
| FrontSide | GetNumWounded | 1. Country | int64 | Category: nonconst |
| FrontSide | GetOutsideTopFiveArmies |  | Unknown | Category: nonconst |
| FrontSide | GetOutsideTopFiveArmiesTooltip |  | CString | Category: nonconst |
| FrontSide | GetTopFiveArmies |  | Unknown | Category: nonconst |
| FrontSide | GetTotalNumCasualties |  | int64 | Category: nonconst |
| FrontSide | GetTotalNumDead |  | int64 | Category: nonconst |
| FrontSide | GetTotalNumWounded |  | int64 | Category: nonconst |
| FrontSide | GetUnitDefense |  | CFixedPoint | Category: nonconst |
| FrontSide | GetUnitMorale |  | CFixedPoint | Category: nonconst |
| FrontSide | GetUnitMoraleDesc |  | CString | Category: nonconst |
| FrontSide | GetUnitOffense |  | CFixedPoint | Category: nonconst |
| FrontSide | HasCountry | 1. Unknown | bool |  |
| FrontSide | IsInitiatorSide |  | bool |  |
| FrontSide | IsTargetSide |  | bool |  |
| FrontSide | Self |  | FrontSide |  |
| GUIAchievement | AccessLockedTexture |  | Unknown | Category: const |
| GUIAchievement | AccessSelf |  | GUIAchievement | Category: const |
| GUIAchievement | AccessTexture |  | Unknown | Category: const |
| GUIAchievement | GetAchievement |  | Achievement | Category: nonconst |
| GUIAchievement | GetDescription |  | CUTF8String | Category: nonconst |
| GUIAchievement | GetHappenedDescription |  | CUTF8String | Category: nonconst |
| GUIAchievement | GetName |  | CUTF8String | Category: nonconst |
| GUIAchievement | IsPossible |  | bool |  |
| GUIAchievement | OnClick |  | void |  |
| GUIAchievement | Remove |  | void |  |
| GUIAchievement | Self |  | GUIAchievement |  |
| GameConceptType | AccessSelf |  | GameConceptType | Category: const |
| GameConceptType | CanStartTutorialLesson |  | bool |  |
| GameConceptType | CanStartTutorialLessonDesc |  | CString |  |
| GameConceptType | GetDesc |  | CString | Category: nonconst |
| GameConceptType | GetDescNoFormatting |  | CString | Category: nonconst |
| GameConceptType | GetName |  | CString | Category: nonconst |
| GameConceptType | GetNameNoFormatting |  | CString | Category: nonconst |
| GameConceptType | GetTexture |  | Unknown | Category: nonconst |
| GameConceptType | GetTitle |  | CString | Category: nonconst |
| GameConceptType | GetTooltipTag |  | CString | Category: nonconst |
| GameConceptType | HasTutorialLesson |  | bool |  |
| GameConceptType | Self |  | GameConceptType |  |
| GameConceptType | StartTutorialLesson |  | void |  |
| GameMpSetup | AccessSelf |  | GameMpSetup | Category: const |
| GameMpSetup | CanStart |  | bool |  |
| GameMpSetup | GetEnabledDLCs |  | Unknown | Category: nonconst |
| GameMpSetup | GetEnabledMods |  | Unknown | Category: nonconst |
| GameMpSetup | GetSaveGames |  | Unknown | Category: nonconst |
| GameMpSetup | GetSelectedSaveGame |  | SaveGameItem | Category: nonconst |
| GameMpSetup | IsAutoAccept |  | bool |  |
| GameMpSetup | IsBookmarkSelected |  | bool |  |
| GameMpSetup | IsInvite |  | bool |  |
| GameMpSetup | IsPublicCrossplay |  | bool |  |
| GameMpSetup | IsPublicNoCrossplay |  | bool |  |
| GameMpSetup | IsSaveGameSelected |  | bool |  |
| GameMpSetup | OnBack |  | void |  |
| GameMpSetup | OnDelete |  | void |  |
| GameMpSetup | OnShowInvalidSavegames |  | void |  |
| GameMpSetup | OnStart |  | void |  |
| GameMpSetup | SelectBookmark |  | void |  |
| GameMpSetup | Self |  | GameMpSetup |  |
| GameMpSetup | SetVisibilityInvite |  | void |  |
| GameMpSetup | SetVisibilityPublicCrossplay |  | void |  |
| GameMpSetup | SetVisibilityPublicNoCrossplay |  | void |  |
| GameMpSetup | ShouldShowInvalidSavegames |  | bool |  |
| GameMpSetup | StartTooltip |  | CString |  |
| GameMpSetup | ToggleAutoAccept |  | void |  |
| GameMpSetup | ToggleVisibility |  | void |  |
| GameOverScreen | AccessSelf |  | GameOverScreen | Category: const |
| GameOverScreen | CanContinueAsObserver |  | bool |  |
| GameOverScreen | CanGoToLobby |  | bool |  |
| GameOverScreen | CanLoadGame |  | bool |  |
| GameOverScreen | ContinueAsObserver |  | void |  |
| GameOverScreen | GetGameOverDateString |  | CString | Category: nonconst |
| GameOverScreen | GetGameOverSoundEvent |  | Unknown | Category: nonconst |
| GameOverScreen | GetLoadGameDesc |  | CString | Category: nonconst |
| GameOverScreen | GetQuitName |  | CString | Category: nonconst |
| GameOverScreen | GoToLobby |  | void |  |
| GameOverScreen | OpenLoadView |  | void |  |
| GameOverScreen | Quit |  | void |  |
| GameOverScreen | Self |  | GameOverScreen |  |
| GameRule | AccessSelf |  | GameRule | Category: const |
| GameRule | GetName |  | CString | Category: nonconst |
| GameRule | GetSettings |  | Unknown | Category: nonconst |
| GameRule | Self |  | GameRule |  |
| GameRuleSetting | AccessSelf |  | GameRuleSetting | Category: const |
| GameRuleSetting | GetDescription |  | CString | Category: nonconst |
| GameRuleSetting | GetDescriptionWithObjectiveRecommendation |  | CString | Category: nonconst |
| GameRuleSetting | GetKey |  | CString | Category: nonconst |
| GameRuleSetting | GetName |  | CString | Category: nonconst |
| GameRuleSetting | HasFlag | 1. CString | bool |  |
| GameRuleSetting | Self |  | GameRuleSetting |  |
| GameSetup | AccessSelf |  | GameSetup | Category: const |
| GameSetup | GetCustomRNGSeed |  | CString | Category: nonconst |
| GameSetup | GetObjectives |  | Unknown | Category: nonconst |
| GameSetup | GetSelectedObjective |  | ObjectiveType | Category: nonconst |
| GameSetup | GetSelectedTag |  | CountryDefinition | Category: nonconst |
| GameSetup | HasSelectedObjective |  | bool |  |
| GameSetup | HasSelectedTag |  | bool |  |
| GameSetup | OnBack |  | void |  |
| GameSetup | OnEditRNGSeed |  | void |  |
| GameSetup | OnStart |  | void |  |
| GameSetup | Self |  | GameSetup |  |
| GameSetup | ToggleObjective | 1. ObjectiveType | void |  |
| GameSetup | ToggleTag | 1. CountryDefinition | void |  |
| GeneCategory | AccessSelf |  | GeneCategory | Category: const |
| GeneCategory | GetName |  | CString | Category: nonconst |
| GeneCategory | IsType | 1. Unknown | bool |  |
| GeneCategory | Self |  | GeneCategory |  |
| GeneItem | AccessSelf |  | GeneItem | Category: const |
| GeneItem | GetName |  | CString | Category: nonconst |
| GeneItem | Self |  | GeneItem |  |
| GeneTemplate | AccessSelf |  | GeneTemplate | Category: const |
| GeneTemplate | GetName |  | CString | Category: nonconst |
| GeneTemplate | Self |  | GeneTemplate |  |
| GeneralInformationWindow | AccessSelf |  | GeneralInformationWindow | Category: const |
| GeneralInformationWindow | GetText |  | CString | Category: nonconst |
| GeneralInformationWindow | GetTitle |  | CString | Category: nonconst |
| GeneralInformationWindow | Self |  | GeneralInformationWindow |  |
| GenerationItem | AccessSelf |  | GenerationItem | Category: const |
| GenerationItem | GetChildPortraitItems |  | Unknown | Category: nonconst |
| GenerationItem | Self |  | GenerationItem |  |
| GeographicRegion | AccessSelf |  | GeographicRegion | Category: const |
| GeographicRegion | GetCountryPagedList |  | CString | Category: nonconst |
| GeographicRegion | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| GeographicRegion | GetDescription |  | CString | Category: nonconst |
| GeographicRegion | GetName |  | CString | Category: nonconst |
| GeographicRegion | GetNameNoFormatting |  | CString | Category: nonconst |
| GeographicRegion | GetNumCountries |  | int32 | Category: nonconst |
| GeographicRegion | GetNumStates |  | int32 | Category: nonconst |
| GeographicRegion | GetNumStrategicRegions |  | int32 | Category: nonconst |
| GeographicRegion | GetStatePagedList |  | CString | Category: nonconst |
| GeographicRegion | GetStrategicRegionPagedList |  | CString | Category: nonconst |
| GeographicRegion | GetStrategicRegionTooltip |  | CString | Category: nonconst |
| GeographicRegion | GetTooltip |  | CString | Category: nonconst |
| GeographicRegion | GetTooltipTag |  | CString | Category: nonconst |
| GeographicRegion | GetUnlocks |  | CString | Category: nonconst |
| GeographicRegion | MakeScope |  | Scope |  |
| GeographicRegion | Self |  | GeographicRegion |  |
| GeographicRegion | ZoomToRegion |  | void |  |
| GfxSkin | AccessSelf |  | GfxSkin | Category: const |
| GfxSkin | GetFolders |  | Unknown | Category: nonconst |
| GfxSkin | GetName |  | CString | Category: nonconst |
| GfxSkin | GetPath |  | CString | Category: nonconst |
| GfxSkin | GetTextures |  | Unknown | Category: nonconst |
| GfxSkin | Self |  | GfxSkin |  |
| Goods | AccessBuildingsProducingThis |  | Unknown | Category: const |
| Goods | AccessBuildingsUsingThis |  | Unknown | Category: const |
| Goods | AccessMarket |  | Market | Category: const |
| Goods | AccessProductionMethodsProducingThis |  | Unknown | Category: const |
| Goods | AccessProductionMethodsUsingThis |  | Unknown | Category: const |
| Goods | AccessSelf |  | Goods | Category: const |
| Goods | AccessState |  | State | Category: const |
| Goods | CalcConsumptionTaxAmount | 1. Country | CFixedPoint |  |
| Goods | CalcConsumptionTaxAuthorityCost | 1. Country | CFixedPoint |  |
| Goods | CalcPotentialConsumptionTaxAmount | 1. Country | CFixedPoint |  |
| Goods | CanEditName |  | bool |  |
| Goods | GetAccessAdjustedStateBuy |  | CFixedPoint | Category: nonconst |
| Goods | GetAccessAdjustedStateSell |  | CFixedPoint | Category: nonconst |
| Goods | GetBaseGoods |  | Goods | Category: nonconst |
| Goods | GetBasePrice |  | CFixedPoint | Category: nonconst |
| Goods | GetBasePricePlotPoints |  | Unknown | Category: nonconst |
| Goods | GetBreakdownOfBuildingsAffectedByShortageInMarket |  | CString | Category: nonconst |
| Goods | GetBreakdownOfBuildingsAffectedByShortageInState |  | CString | Category: nonconst |
| Goods | GetBuildingsProducingThisDesc |  | CString | Category: nonconst |
| Goods | GetBuildingsUsingThisDesc |  | CString | Category: nonconst |
| Goods | GetCategoryColor |  | CVector4f | Category: nonconst |
| Goods | GetCategoryName |  | CString | Category: nonconst |
| Goods | GetColor |  | CVector4f | Category: nonconst |
| Goods | GetCompareDescAgainstBasePrice | 1. CFixedPoint | CString | Category: nonconst |
| Goods | GetCompareIconAgainstBasePrice | 1. CFixedPoint | CString | Category: nonconst |
| Goods | GetCompareIconAgainstBasePriceNoFormatting | 1. CFixedPoint | CString | Category: nonconst |
| Goods | GetCompareIconAgainstBasePriceNoTooltip | 1. CFixedPoint | CString | Category: nonconst |
| Goods | GetConsumptionPercentage |  | CFixedPoint | Category: nonconst |
| Goods | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| Goods | GetExportersToMarket |  | Unknown | Category: nonconst |
| Goods | GetExportersToState |  | Unknown | Category: nonconst |
| Goods | GetGoodsShortageDesc |  | CString | Category: nonconst |
| Goods | GetImportersFromMarket |  | Unknown | Category: nonconst |
| Goods | GetImportersFromState |  | Unknown | Category: nonconst |
| Goods | GetKey |  | CString | Category: nonconst |
| Goods | GetLeaderboardDesc |  | CString | Category: nonconst |
| Goods | GetLeaderboardSpot | 1. Country | int32 | Category: nonconst |
| Goods | GetLeaderboardSpotDesc | 1. Country | CString | Category: nonconst |
| Goods | GetLocalPriceShare |  | CFixedPoint | Category: nonconst |
| Goods | GetLocalPricesDesc |  | CString | Category: nonconst |
| Goods | GetMarket |  | Market | Category: nonconst |
| Goods | GetMarketAverageSubventionRate |  | CFixedPoint | Category: nonconst |
| Goods | GetMarketAverageTariffRate |  | CFixedPoint | Category: nonconst |
| Goods | GetMarketBalanceLabel |  | CString | Category: nonconst |
| Goods | GetMarketBuildingTypeBuyOrdersBreakdown | 1. Unknown | CString | Category: nonconst |
| Goods | GetMarketBuildingTypeSellOrdersBreakdown | 1. Unknown | CString | Category: nonconst |
| Goods | GetMarketBuyAndSellOrdersBalance |  | CFixedPoint | Category: nonconst |
| Goods | GetMarketBuyOrders |  | CFixedPoint | Category: nonconst |
| Goods | GetMarketBuyOrdersBreakdown |  | CString | Category: nonconst |
| Goods | GetMarketBuyOrdersWithTooltip |  | CString | Category: nonconst |
| Goods | GetMarketConsumption |  | CFixedPoint | Category: nonconst |
| Goods | GetMarketConsumptionBreakdown |  | CString | Category: nonconst |
| Goods | GetMarketConsumptionWithTooltip |  | CString | Category: nonconst |
| Goods | GetMarketExportAdvantage |  | CFixedPoint | Category: nonconst |
| Goods | GetMarketExports |  | CFixedPoint | Category: nonconst |
| Goods | GetMarketGoodsShortageDesc |  | CString | Category: nonconst |
| Goods | GetMarketImportAdvantage |  | CFixedPoint | Category: nonconst |
| Goods | GetMarketImports |  | CFixedPoint | Category: nonconst |
| Goods | GetMarketMonopolyFraction |  | CFixedPoint | Category: nonconst |
| Goods | GetMarketMonopolyPriceImpact |  | CFixedPoint | Category: nonconst |
| Goods | GetMarketPopConsumptionBreakdown |  | CString | Category: nonconst |
| Goods | GetMarketPrestigeGoods |  | Unknown | Category: nonconst |
| Goods | GetMarketPrestigeGoodsBought |  | Unknown | Category: nonconst |
| Goods | GetMarketPrestigeGoodsSold |  | Unknown | Category: nonconst |
| Goods | GetMarketPrice |  | CFixedPoint | Category: nonconst |
| Goods | GetMarketPriceDesc |  | CString | Category: nonconst |
| Goods | GetMarketPriceLabel |  | CString | Category: nonconst |
| Goods | GetMarketPriceShare |  | CFixedPoint | Category: nonconst |
| Goods | GetMarketPriceShareDesc |  | CString | Category: nonconst |
| Goods | GetMarketPriceWithTooltip |  | CString | Category: nonconst |
| Goods | GetMarketProduction |  | CFixedPoint | Category: nonconst |
| Goods | GetMarketProductionAndConsumptionDiff |  | CFixedPoint | Category: nonconst |
| Goods | GetMarketProductionBreakdown |  | CString | Category: nonconst |
| Goods | GetMarketProductionWithTooltip |  | CString | Category: nonconst |
| Goods | GetMarketRelativeExportAdvantage |  | CFixedPoint | Category: nonconst |
| Goods | GetMarketRelativeExportAdvantageDesc |  | CString | Category: nonconst |
| Goods | GetMarketRelativeImportAdvantage |  | CFixedPoint | Category: nonconst |
| Goods | GetMarketRelativeImportAdvantageDesc |  | CString | Category: nonconst |
| Goods | GetMarketSellOrders |  | CFixedPoint | Category: nonconst |
| Goods | GetMarketSellOrdersBreakdown |  | CString | Category: nonconst |
| Goods | GetMarketSellOrdersWithTooltip |  | CString | Category: nonconst |
| Goods | GetMarketTariffsSubventionsBalance |  | CFixedPoint | Category: nonconst |
| Goods | GetMarketTariffsSubventionsBalanceDesc |  | CString | Category: nonconst |
| Goods | GetMarketWithLargestExportShare |  | Market | Category: nonconst |
| Goods | GetMarketWithLargestImportShare |  | Market | Category: nonconst |
| Goods | GetMaxImbalance |  | CFixedPoint | Category: nonconst |
| Goods | GetMaxPrice |  | CFixedPoint | Category: nonconst |
| Goods | GetMinPrice |  | CFixedPoint | Category: nonconst |
| Goods | GetName |  | CString | Category: nonconst |
| Goods | GetNameNoFormatting |  | CString | Category: nonconst |
| Goods | GetNameNoIcon |  | CString | Category: nonconst |
| Goods | GetNeedLevelsContainingThisDesc |  | CString | Category: nonconst |
| Goods | GetNonPrestigeGoodsMarketBuyOrders |  | CFixedPoint | Category: nonconst |
| Goods | GetNonPrestigeGoodsMarketSellOrders |  | CFixedPoint | Category: nonconst |
| Goods | GetNonPrestigeGoodsStateConsumption |  | CFixedPoint | Category: nonconst |
| Goods | GetNonPrestigeGoodsStateProduction |  | CFixedPoint | Category: nonconst |
| Goods | GetNonPrestigeGoodsWorldMarketExports |  | CFixedPoint | Category: nonconst |
| Goods | GetNonPrestigeGoodsWorldMarketImports |  | CFixedPoint | Category: nonconst |
| Goods | GetNumBuildingsAffectedByShortageInMarket |  | int32 | Category: nonconst |
| Goods | GetNumBuildingsAffectedByShortageInState |  | int32 | Category: nonconst |
| Goods | GetPercentageDeltaAgainstBasePrice | 1. CFixedPoint | CFixedPoint | Category: nonconst |
| Goods | GetPrestigeAwardForPrestigeGoodSpot | 1. Unknown | int32 | Category: nonconst |
| Goods | GetPrestigeAwardForPrestigeGoodSpotDesc | 1. int32 | CString | Category: nonconst |
| Goods | GetPrestigeAwardForSpot | 1. Unknown | int32 | Category: nonconst |
| Goods | GetPrestigeAwardForSpotDesc | 1. int32 | CString | Category: nonconst |
| Goods | GetPrestigeGoodCombatUnitEffectDesc |  | CString | Category: nonconst |
| Goods | GetPrestigeGoodLeaderboardDesc |  | CString | Category: nonconst |
| Goods | GetPrestigeGoodLeaderboardSpot | 1. Country | int32 | Category: nonconst |
| Goods | GetPrestigeGoodLeaderboardSpotDesc | 1. Country | CString | Category: nonconst |
| Goods | GetPrestigeGoodSoLEffectDesc |  | CString | Category: nonconst |
| Goods | GetPrestigeGoodThroughputEffectDesc |  | CString | Category: nonconst |
| Goods | GetPrestigeGoodTradeAdvantageEffectDesc |  | CString | Category: nonconst |
| Goods | GetPriceTrend |  | DataTrend | Category: nonconst |
| Goods | GetProductionPercentage |  | CFixedPoint | Category: nonconst |
| Goods | GetShortCompareDescAgainstBasePrice | 1. CFixedPoint | CString | Category: nonconst |
| Goods | GetShortageRatioInMarket |  | CFixedPoint | Category: nonconst |
| Goods | GetShortageRatioInState |  | CFixedPoint | Category: nonconst |
| Goods | GetState |  | State | Category: nonconst |
| Goods | GetStateBalanceLabel |  | CString | Category: nonconst |
| Goods | GetStateConsumption |  | CFixedPoint | Category: nonconst |
| Goods | GetStateConsumptionBreakdown |  | CString | Category: nonconst |
| Goods | GetStateConsumptionLabel |  | CString | Category: nonconst |
| Goods | GetStateConsumptionWithTooltip |  | CString | Category: nonconst |
| Goods | GetStateExportAdvantage |  | CFixedPoint | Category: nonconst |
| Goods | GetStateExportAdvantageDesc |  | CString | Category: nonconst |
| Goods | GetStateExportPrice |  | CFixedPoint | Category: nonconst |
| Goods | GetStateExportPriceDesc |  | CString | Category: nonconst |
| Goods | GetStateExportSubventionRate |  | CFixedPoint | Category: nonconst |
| Goods | GetStateExportSubventionRateDesc |  | CString | Category: nonconst |
| Goods | GetStateExportTariffRate |  | CFixedPoint | Category: nonconst |
| Goods | GetStateExportTariffRateDesc |  | CString | Category: nonconst |
| Goods | GetStateExports |  | CFixedPoint | Category: nonconst |
| Goods | GetStateExportsDesc |  | CString | Category: nonconst |
| Goods | GetStateGoodsShortageDesc |  | CString | Category: nonconst |
| Goods | GetStateImportAdvantage |  | CFixedPoint | Category: nonconst |
| Goods | GetStateImportAdvantageDesc |  | CString | Category: nonconst |
| Goods | GetStateImportPrice |  | CFixedPoint | Category: nonconst |
| Goods | GetStateImportPriceDesc |  | CString | Category: nonconst |
| Goods | GetStateImportSubventionRate |  | CFixedPoint | Category: nonconst |
| Goods | GetStateImportSubventionRateDesc |  | CString | Category: nonconst |
| Goods | GetStateImportTariffRate |  | CFixedPoint | Category: nonconst |
| Goods | GetStateImportTariffRateDesc |  | CString | Category: nonconst |
| Goods | GetStateImports |  | CFixedPoint | Category: nonconst |
| Goods | GetStateImportsDesc |  | CString | Category: nonconst |
| Goods | GetStateMonopolyFraction |  | CFixedPoint | Category: nonconst |
| Goods | GetStateMonopolyPriceImpact |  | CFixedPoint | Category: nonconst |
| Goods | GetStatePopDemandBreakdown | 1. State 2. PopType | CString | Category: nonconst |
| Goods | GetStatePopProductionBreakdown | 1. State 2. PopType | CString | Category: nonconst |
| Goods | GetStatePopTypeDemandBreakdown | 1. State | CString | Category: nonconst |
| Goods | GetStatePopTypeProductionBreakdown | 1. State | CString | Category: nonconst |
| Goods | GetStatePrestigeGoods |  | Unknown | Category: nonconst |
| Goods | GetStatePrestigeGoodsBought |  | Unknown | Category: nonconst |
| Goods | GetStatePrestigeGoodsSold |  | Unknown | Category: nonconst |
| Goods | GetStatePrice |  | CFixedPoint | Category: nonconst |
| Goods | GetStatePriceDesc |  | CString | Category: nonconst |
| Goods | GetStatePriceLabel |  | CString | Category: nonconst |
| Goods | GetStatePriceWithTooltip |  | CString | Category: nonconst |
| Goods | GetStateProduction |  | CFixedPoint | Category: nonconst |
| Goods | GetStateProductionBreakdown |  | CString | Category: nonconst |
| Goods | GetStateProductionConsumptionDiff |  | CFixedPoint | Category: nonconst |
| Goods | GetStateProductionLabel |  | CString | Category: nonconst |
| Goods | GetStateProductionWithTooltip |  | CString | Category: nonconst |
| Goods | GetStateRelativeExportAdvantage |  | CFixedPoint | Category: nonconst |
| Goods | GetStateRelativeExportAdvantageDesc |  | CString | Category: nonconst |
| Goods | GetStateRelativeImportAdvantage |  | CFixedPoint | Category: nonconst |
| Goods | GetStateRelativeImportAdvantageDesc |  | CString | Category: nonconst |
| Goods | GetStateTariffsSubventionsBalance |  | CFixedPoint | Category: nonconst |
| Goods | GetStateTariffsSubventionsBalanceDesc |  | CString | Category: nonconst |
| Goods | GetStateToMarketPriceDiff |  | CFixedPoint | Category: nonconst |
| Goods | GetTaxDesc | 1. Country | CString | Category: nonconst |
| Goods | GetTextIcon |  | CString | Category: nonconst |
| Goods | GetTexture |  | Unknown | Category: nonconst |
| Goods | GetTooltipTag |  | CString | Category: nonconst |
| Goods | GetTotalImportExport |  | CFixedPoint | Category: nonconst |
| Goods | GetTradedQuantity |  | CFixedPoint | Category: nonconst |
| Goods | GetWorldMarketAdditionalExportsFromMarket |  | CFixedPoint | Category: nonconst |
| Goods | GetWorldMarketAdditionalImportsToMarket |  | CFixedPoint | Category: nonconst |
| Goods | GetWorldMarketBasePrice |  | CFixedPoint | Category: nonconst |
| Goods | GetWorldMarketBasePriceDesc |  | CString | Category: nonconst |
| Goods | GetWorldMarketExporters |  | Unknown | Category: nonconst |
| Goods | GetWorldMarketExports |  | CFixedPoint | Category: nonconst |
| Goods | GetWorldMarketExportsAndImportsBalance |  | CFixedPoint | Category: nonconst |
| Goods | GetWorldMarketExportsBreakdown |  | CString | Category: nonconst |
| Goods | GetWorldMarketExportsWithTooltip |  | CString | Category: nonconst |
| Goods | GetWorldMarketImporters |  | Unknown | Category: nonconst |
| Goods | GetWorldMarketImports |  | CFixedPoint | Category: nonconst |
| Goods | GetWorldMarketImportsBreakdown |  | CString | Category: nonconst |
| Goods | GetWorldMarketImportsWithTooltip |  | CString | Category: nonconst |
| Goods | GetWorldMarketMonopolyFraction |  | CFixedPoint | Category: nonconst |
| Goods | GetWorldMarketMonopolyPriceImpact |  | CFixedPoint | Category: nonconst |
| Goods | GetWorldMarketPrestigeGoods |  | Unknown | Category: nonconst |
| Goods | GetWorldMarketPrestigeGoodsExported |  | Unknown | Category: nonconst |
| Goods | GetWorldMarketPrestigeGoodsImported |  | Unknown | Category: nonconst |
| Goods | GetWorldPriceTrend |  | DataTrend | Category: nonconst |
| Goods | HasGoodsShortage |  | bool |  |
| Goods | HasImportExportControl |  | bool |  |
| Goods | HasMarketContext |  | bool |  |
| Goods | HasPriceTrend |  | bool |  |
| Goods | HasShortageInMarket |  | bool |  |
| Goods | HasShortageInState |  | bool |  |
| Goods | HasStateContext |  | bool |  |
| Goods | IsBeingHighlighted |  | bool |  |
| Goods | IsGoodsMarketTabOpen |  | bool |  |
| Goods | IsLocal |  | bool |  |
| Goods | IsPinnedInOutliner |  | bool |  |
| Goods | IsPrestigeGoods |  | bool |  |
| Goods | IsTaxed | 1. Unknown | bool |  |
| Goods | IsTradeable |  | bool |  |
| Goods | IsValid |  | bool |  |
| Goods | MakeScope |  | Scope |  |
| Goods | Self |  | Goods |  |
| Goods | TogglePinInOutliner |  | void |  |
| Goods | ToggleTaxation | 1. Country | Command |  |
| Goods | WithMarketContext | 1. Unknown | Goods |  |
| Goods | WithStateContext | 1. Unknown | Goods |  |
| GoodsExpenseItem | AccessSelf |  | GoodsExpenseItem | Category: const |
| GoodsExpenseItem | GetExpenseRatio |  | CFixedPoint | Category: nonconst |
| GoodsExpenseItem | GetGoods |  | Goods | Category: nonconst |
| GoodsExpenseItem | GetPrice |  | CFixedPoint | Category: nonconst |
| GoodsExpenseItem | GetRelativePriceDiff |  | CFixedPoint | Category: nonconst |
| GoodsExpenseItem | GetTotalCost |  | CFixedPoint | Category: nonconst |
| GoodsExpenseItem | Self |  | GoodsExpenseItem |  |
| GoodsList | AccessSelf |  | GoodsList | Category: const |
| GoodsList | GetGoods |  | Unknown | Category: nonconst |
| GoodsList | GetPopConsumptionRatio | 1. Goods | CFixedPoint | Category: nonconst |
| GoodsList | GetPrice | 1. Unknown | CFixedPoint | Category: nonconst |
| GoodsList | HasMarketContext |  | bool |  |
| GoodsList | HasStateContext |  | bool |  |
| GoodsList | RestoreSort |  | void |  |
| GoodsList | Self |  | GoodsList |  |
| GoodsList | Sort | 1. CString | void |  |
| GoodsLocalPricesPanel | AccessGoods |  | Goods | Category: const |
| GoodsLocalPricesPanel | AccessLocalPrices |  | Unknown | Category: const |
| GoodsLocalPricesPanel | AccessSelf |  | GoodsLocalPricesPanel | Category: const |
| GoodsLocalPricesPanel | GetGoods |  | Goods | Category: nonconst |
| GoodsLocalPricesPanel | Self |  | GoodsLocalPricesPanel |  |
| GoodsLocalPricesPanel | Sort | 1. Unknown | void |  |
| GoodsPanel | AccessSelf |  | GoodsPanel | Category: const |
| GoodsPanel | GetInputValues |  | Unknown | Category: nonconst |
| GoodsPanel | GetInputValuesTotal |  | CFixedPoint | Category: nonconst |
| GoodsPanel | GetOutputValues |  | Unknown | Category: nonconst |
| GoodsPanel | GetOutputValuesTotal |  | CFixedPoint | Category: nonconst |
| GoodsPanel | Self |  | GoodsPanel |  |
| GoodsPanelChildValue | AccessSelf |  | GoodsPanelChildValue | Category: const |
| GoodsPanelChildValue | GetName |  | CString | Category: nonconst |
| GoodsPanelChildValue | GetValue |  | CFixedPoint | Category: nonconst |
| GoodsPanelChildValue | Self |  | GoodsPanelChildValue |  |
| GoodsPanelValue | AccessSelf |  | GoodsPanelValue | Category: const |
| GoodsPanelValue | GetBuilding |  | Building | Category: nonconst |
| GoodsPanelValue | GetBuildingType |  | BuildingType | Category: nonconst |
| GoodsPanelValue | GetChildren |  | Unknown | Category: nonconst |
| GoodsPanelValue | GetMarket |  | Market | Category: nonconst |
| GoodsPanelValue | GetName |  | CString | Category: nonconst |
| GoodsPanelValue | GetState |  | State | Category: nonconst |
| GoodsPanelValue | GetValue |  | CFixedPoint | Category: nonconst |
| GoodsPanelValue | HasBuildingInfo |  | bool |  |
| GoodsPanelValue | HasBuildingTypeInfo |  | bool |  |
| GoodsPanelValue | HasMarketContext |  | bool |  |
| GoodsPanelValue | Self |  | GoodsPanelValue |  |
| GoodsPanelValue | ShowChildValues |  | bool |  |
| GoodsProductionInfo | AccessGoods |  | Goods | Category: const |
| GoodsProductionInfo | AccessSelf |  | GoodsProductionInfo | Category: const |
| GoodsProductionInfo | GetAmount |  | CFixedPoint | Category: nonconst |
| GoodsProductionInfo | GetMP |  | CFixedPoint | Category: nonconst |
| GoodsProductionInfo | GetName |  | CString | Category: nonconst |
| GoodsProductionInfo | GetPrice |  | CFixedPoint | Category: nonconst |
| GoodsProductionInfo | GetSoldFor |  | CFixedPoint | Category: nonconst |
| GoodsProductionInfo | GetTexture |  | Unknown | Category: nonconst |
| GoodsProductionInfo | Self |  | GoodsProductionInfo |  |
| GoodsStatePanel | AccessSelf |  | GoodsStatePanel | Category: const |
| GoodsStatePanel | GetInputValues |  | Unknown | Category: nonconst |
| GoodsStatePanel | GetInputValuesTotal |  | CFixedPoint | Category: nonconst |
| GoodsStatePanel | GetOutputValues |  | Unknown | Category: nonconst |
| GoodsStatePanel | GetOutputValuesTotal |  | CFixedPoint | Category: nonconst |
| GoodsStatePanel | Self |  | GoodsStatePanel |  |
| GoodsUsagePanel | AccessGoods |  | Goods | Category: const |
| GoodsUsagePanel | AccessProductionValues |  | Unknown | Category: const |
| GoodsUsagePanel | AccessSelf |  | GoodsUsagePanel | Category: const |
| GoodsUsagePanel | GetGoods |  | Goods | Category: nonconst |
| GoodsUsagePanel | Self |  | GoodsUsagePanel |  |
| GoodsWorldMarketPanel | AccessSelf |  | GoodsWorldMarketPanel | Category: const |
| GoodsWorldMarketPanel | GetBaseGoods |  | Goods | Category: nonconst |
| GoodsWorldMarketPanel | GetGoods |  | Goods | Category: nonconst |
| GoodsWorldMarketPanel | GetMarkets |  | Unknown | Category: nonconst |
| GoodsWorldMarketPanel | Self |  | GoodsWorldMarketPanel |  |
| GoodsWorldMarketPanel | SortMarkets | 1. Unknown | void |  |
| GovernmentType | AccessSelf |  | GovernmentType | Category: const |
| GovernmentType | GetDesc |  | CString | Category: nonconst |
| GovernmentType | GetName |  | CString | Category: nonconst |
| GovernmentType | GetPossibleTriggerDesc | 1. Player | CString | Category: nonconst |
| GovernmentType | GetTooltipTag |  | CString | Category: nonconst |
| GovernmentType | GetTransferOfPowerDesc |  | CString | Category: nonconst |
| GovernmentType | GetTransferOfPowerName |  | CString | Category: nonconst |
| GovernmentType | Self |  | GovernmentType |  |
| Graph | AccessSelf |  | Graph | Category: const |
| Graph | Errors |  | Unknown |  |
| Graph | HasErrors |  | bool |  |
| Graph | Self |  | Graph |  |
| GraphInterfaceNodeWindow | AccessSelf |  | GraphInterfaceNodeWindow | Category: const |
| GraphInterfaceNodeWindow | AddPin | 1. bool | void |  |
| GraphInterfaceNodeWindow | Self |  | GraphInterfaceNodeWindow |  |
| GraphPanel | AccessAnimationEditorSearch |  | NodeEditorSearch | Category: const |
| GraphPanel | AccessMetadataWindow |  | MetadataWindow | Category: const |
| GraphPanel | AccessSelf |  | GraphPanel | Category: const |
| GraphPanel | ClearSelection |  | void |  |
| GraphPanel | CompoundNodeUpdated | 1. Unknown | void |  |
| GraphPanel | Copy |  | void |  |
| GraphPanel | CreateInfoBoxNode |  | int32 |  |
| GraphPanel | CreateNodeByName | 1. Unknown | int32 |  |
| GraphPanel | Cut |  | void |  |
| GraphPanel | Delete |  | void |  |
| GraphPanel | Fit |  | void |  |
| GraphPanel | GetMetadataWindow |  | MetadataWindow | Category: nonconst |
| GraphPanel | GetNodeLineMaskTexture | 1. bool | Unknown | Category: nonconst |
| GraphPanel | GetNodeLineTexture | 1. bool | Unknown | Category: nonconst |
| GraphPanel | GetViewportHotkeysDescription |  | CString | Category: nonconst |
| GraphPanel | HasExportButton |  | bool |  |
| GraphPanel | HasImportButton |  | bool |  |
| GraphPanel | HasPreviewer |  | bool |  |
| GraphPanel | HasRenamingCapability |  | bool |  |
| GraphPanel | InvertSelection |  | void |  |
| GraphPanel | IsButtonEnabled | 1. CString | bool |  |
| GraphPanel | IsNodeEditorSearchVisible |  | bool |  |
| GraphPanel | IsPasteable |  | bool |  |
| GraphPanel | IsSaveable |  | bool |  |
| GraphPanel | IsViewportHoteysDescriptionShown |  | bool |  |
| GraphPanel | LayoutNodes |  | void |  |
| GraphPanel | Load |  | void |  |
| GraphPanel | New |  | void |  |
| GraphPanel | OnEditorPreferencesClicked |  | void |  |
| GraphPanel | OnExportButton |  | void |  |
| GraphPanel | OnImportButton |  | void |  |
| GraphPanel | OpenPreviewer |  | void |  |
| GraphPanel | Paste |  | void |  |
| GraphPanel | PasteConnectedToExisting |  | void |  |
| GraphPanel | Properties |  | void |  |
| GraphPanel | RenameGraph |  | void |  |
| GraphPanel | Save |  | void |  |
| GraphPanel | SaveAs |  | void |  |
| GraphPanel | SelectAllNodes |  | void |  |
| GraphPanel | SelectionToCompoundNode |  | void |  |
| GraphPanel | SelectionToGroupNode |  | void |  |
| GraphPanel | Self |  | GraphPanel |  |
| GraphPanel | SetZoom | 1. int32 | void |  |
| GraphPanel | ShatterSelectedGroup |  | void |  |
| GraphPanel | ShowNodeEditorSearch |  | void |  |
| GraphPanel | ShowNodeSearch |  | void |  |
| Group | AccessSelf |  | Group | Category: const |
| Group | AccessVisibleAchievements |  | Unknown | Category: const |
| Group | CalcNumberOfUnlockedVisibleAchievements |  | int32 |  |
| Group | GetName |  | CUTF8String | Category: nonconst |
| Group | GetNumberOfVisibleAchievements |  | int32 | Category: nonconst |
| Group | IsCollapsed |  | bool |  |
| Group | Self |  | Group |  |
| Group | ToggleCollapsed |  | void |  |
| GuiAnimationCurveEditor | AccessSelf |  | GuiAnimationCurveEditor | Category: const |
| GuiAnimationCurveEditor | GetGraphLines |  | Unknown | Category: nonconst |
| GuiAnimationCurveEditor | IsAnyEditorOpen |  | bool |  |
| GuiAnimationCurveEditor | Self |  | GuiAnimationCurveEditor |  |
| GuiAnimationCurveEditorControlPoint | AccessSelf |  | GuiAnimationCurveEditorControlPoint | Category: const |
| GuiAnimationCurveEditorControlPoint | GetCoords |  | CVector2f | Category: nonconst |
| GuiAnimationCurveEditorControlPoint | IsSelected | 1. GuiAnimationEditorMetadataCtx | bool |  |
| GuiAnimationCurveEditorControlPoint | IsUnderMousePointer |  | bool |  |
| GuiAnimationCurveEditorControlPoint | Self |  | GuiAnimationCurveEditorControlPoint |  |
| GuiAnimationCurveEditorLine | AccessSelf |  | GuiAnimationCurveEditorLine | Category: const |
| GuiAnimationCurveEditorLine | GetColor |  | CVector4f | Category: nonconst |
| GuiAnimationCurveEditorLine | GetControlPoints |  | Unknown | Category: nonconst |
| GuiAnimationCurveEditorLine | GetLineVertices |  | Unknown | Category: nonconst |
| GuiAnimationCurveEditorLine | Self |  | GuiAnimationCurveEditorLine |  |
| GuiAnimationCurveEditorViewport | AccessSelf |  | GuiAnimationCurveEditorViewport | Category: const |
| GuiAnimationCurveEditorViewport | GetNeedlePosition | 1. Unknown 2. Unknown 3. Unknown | CVector2f | Category: nonconst |
| GuiAnimationCurveEditorViewport | Self |  | GuiAnimationCurveEditorViewport |  |
| GuiAnimationEditor | AccessAnimSets |  | Unknown | Category: const |
| GuiAnimationEditor | AccessAnimations |  | Unknown | Category: const |
| GuiAnimationEditor | AccessAvailableTracks |  | Unknown | Category: const |
| GuiAnimationEditor | AccessSelf |  | GuiAnimationEditor | Category: const |
| GuiAnimationEditor | AccessUniversalTracks |  | Unknown | Category: const |
| GuiAnimationEditor | AddKeyframesAtCurrentTime |  | void |  |
| GuiAnimationEditor | CanChangeSelectedAnimSetParent |  | bool |  |
| GuiAnimationEditor | CanCreateNewAnimation |  | bool |  |
| GuiAnimationEditor | CanDeleteSelectedAnimSet |  | bool |  |
| GuiAnimationEditor | CanDeleteSelectedAnimations |  | bool |  |
| GuiAnimationEditor | CanRenameSelectedAnimSet |  | bool |  |
| GuiAnimationEditor | CanRenameSelectedAnimation |  | bool |  |
| GuiAnimationEditor | ChangeSelectedAnimSetParent |  | void |  |
| GuiAnimationEditor | CreateNewAnimSet |  | void |  |
| GuiAnimationEditor | CreateNewAnimation |  | void |  |
| GuiAnimationEditor | DeleteSelectedAnimSet |  | void |  |
| GuiAnimationEditor | DeleteSelectedAnimations |  | void |  |
| GuiAnimationEditor | DeleteSelectedKeyframes |  | void |  |
| GuiAnimationEditor | GetAnimSets |  | Unknown | Category: nonconst |
| GuiAnimationEditor | GetAnimations |  | Unknown | Category: nonconst |
| GuiAnimationEditor | GetAvailableTracks |  | Unknown | Category: nonconst |
| GuiAnimationEditor | GetUniversalTracks |  | Unknown | Category: nonconst |
| GuiAnimationEditor | IsAnyCurveEditorOpen |  | bool |  |
| GuiAnimationEditor | IsKeyframeSelectionValidForCurvePreset |  | bool |  |
| GuiAnimationEditor | OnSave |  | void |  |
| GuiAnimationEditor | OnSaveAs |  | void |  |
| GuiAnimationEditor | RenameSelectedAnimSet |  | void |  |
| GuiAnimationEditor | RenameSelectedAnimation |  | void |  |
| GuiAnimationEditor | Self |  | GuiAnimationEditor |  |
| GuiAnimationEditorAnimSetEntry | AccessSelf |  | GuiAnimationEditorAnimSetEntry | Category: const |
| GuiAnimationEditorAnimSetEntry | GetDisplayName |  | CString | Category: nonconst |
| GuiAnimationEditorAnimSetEntry | IsSelected |  | bool |  |
| GuiAnimationEditorAnimSetEntry | Self |  | GuiAnimationEditorAnimSetEntry |  |
| GuiAnimationEditorAnimSetEntry | ToggleSelected |  | void |  |
| GuiAnimationEditorAnimationEntry | AccessSelf |  | GuiAnimationEditorAnimationEntry | Category: const |
| GuiAnimationEditorAnimationEntry | GetDisplayName |  | CString | Category: nonconst |
| GuiAnimationEditorAnimationEntry | GetTooltipMessage |  | CString | Category: nonconst |
| GuiAnimationEditorAnimationEntry | IsAnimationInherited |  | bool |  |
| GuiAnimationEditorAnimationEntry | IsSelected |  | bool |  |
| GuiAnimationEditorAnimationEntry | OverrideInheritedAnimation |  | void |  |
| GuiAnimationEditorAnimationEntry | Self |  | GuiAnimationEditorAnimationEntry |  |
| GuiAnimationEditorAnimationEntry | ToggleSelected |  | void |  |
| GuiAnimationEditorAvailableTrack | AccessSelf |  | GuiAnimationEditorAvailableTrack | Category: const |
| GuiAnimationEditorAvailableTrack | AddTrack |  | void |  |
| GuiAnimationEditorAvailableTrack | GetDescription |  | Unknown | Category: nonconst |
| GuiAnimationEditorAvailableTrack | GetDisplayName |  | Unknown | Category: nonconst |
| GuiAnimationEditorAvailableTrack | GetExcludedDisplayName |  | Unknown | Category: nonconst |
| GuiAnimationEditorAvailableTrack | IsExcluded |  | bool |  |
| GuiAnimationEditorAvailableTrack | Self |  | GuiAnimationEditorAvailableTrack |  |
| GuiAnimationEditorKeyframe | AccessSelf |  | GuiAnimationEditorKeyframe | Category: const |
| GuiAnimationEditorKeyframe | GetPosition |  | CVector2f | Category: nonconst |
| GuiAnimationEditorKeyframe | GetTimeInSeconds |  | float | Category: nonconst |
| GuiAnimationEditorKeyframe | IsDataFlowButton |  | bool |  |
| GuiAnimationEditorKeyframe | IsDataFlowToWidget |  | bool |  |
| GuiAnimationEditorKeyframe | IsDragged |  | bool |  |
| GuiAnimationEditorKeyframe | IsSelected |  | bool |  |
| GuiAnimationEditorKeyframe | IsUnderMousePointer |  | bool |  |
| GuiAnimationEditorKeyframe | IsValid |  | bool |  |
| GuiAnimationEditorKeyframe | Self |  | GuiAnimationEditorKeyframe |  |
| GuiAnimationEditorKeyframe | ToggleDataFlow |  | void |  |
| GuiAnimationEditorMetadataCtx | AccessSelf |  | GuiAnimationEditorMetadataCtx | Category: const |
| GuiAnimationEditorMetadataCtx | DeselectAllKeyframes |  | void |  |
| GuiAnimationEditorMetadataCtx | HasSelectedAnyKeyframes |  | bool |  |
| GuiAnimationEditorMetadataCtx | IsAnimationsTabCollapsed |  | bool |  |
| GuiAnimationEditorMetadataCtx | IsKeyframeSnapping |  | bool |  |
| GuiAnimationEditorMetadataCtx | SelectAllKeyframes |  | void |  |
| GuiAnimationEditorMetadataCtx | Self |  | GuiAnimationEditorMetadataCtx |  |
| GuiAnimationEditorMetadataCtx | ToggleAnimationsTabCollapsed |  | void |  |
| GuiAnimationEditorMetadataCtx | ToggleKeyframeSnapping |  | void |  |
| GuiAnimationEditorPlayer | AccessSelf |  | GuiAnimationEditorPlayer | Category: const |
| GuiAnimationEditorPlayer | CanPlay |  | bool |  |
| GuiAnimationEditorPlayer | GetCurrentSpeedMultiplierOptionIndex |  | CVector2i | Category: nonconst |
| GuiAnimationEditorPlayer | GetCurrentTime |  | float | Category: nonconst |
| GuiAnimationEditorPlayer | GetMaxDuration |  | float | Category: nonconst |
| GuiAnimationEditorPlayer | GetSpeedMultiplier |  | float | Category: nonconst |
| GuiAnimationEditorPlayer | GetSpeedMultiplierOptions |  | Unknown | Category: nonconst |
| GuiAnimationEditorPlayer | IsDraggingTime |  | bool |  |
| GuiAnimationEditorPlayer | IsLoopEnabled |  | bool |  |
| GuiAnimationEditorPlayer | IsPlaying |  | bool |  |
| GuiAnimationEditorPlayer | Self |  | GuiAnimationEditorPlayer |  |
| GuiAnimationEditorPlayer | SetCurrentTime | 1. float | void |  |
| GuiAnimationEditorPlayer | SetIsPlaying | 1. Unknown | void |  |
| GuiAnimationEditorPlayer | SetLoopEnabled | 1. Unknown | void |  |
| GuiAnimationEditorPlayer | SetSpeedMultiplier | 1. Unknown | void |  |
| GuiAnimationEditorPlayer | SetSpeedMultiplierOptionIndex |  | void |  |
| GuiAnimationEditorPlayer | ShouldMoveNeedleWithKeyframe |  | bool |  |
| GuiAnimationEditorPlayer | StepBackwards |  | void |  |
| GuiAnimationEditorPlayer | StepForward |  | void |  |
| GuiAnimationEditorPlayer | ToggleIsPlaying |  | void |  |
| GuiAnimationEditorPlayer | ToggleLoopEnabled |  | void |  |
| GuiAnimationEditorPlayer | ToggleMoveNeedleWithKeyframe |  | void |  |
| GuiAnimationEditorPlayerSpeedMultiplierEntry | AccessSelf |  | GuiAnimationEditorPlayerSpeedMultiplierEntry | Category: const |
| GuiAnimationEditorPlayerSpeedMultiplierEntry | GetDisplayName |  | CString | Category: nonconst |
| GuiAnimationEditorPlayerSpeedMultiplierEntry | GetMultiplier |  | float | Category: nonconst |
| GuiAnimationEditorPlayerSpeedMultiplierEntry | Self |  | GuiAnimationEditorPlayerSpeedMultiplierEntry |  |
| GuiAnimationEditorRuler | AccessRulerResolutionEntries |  | Unknown | Category: const |
| GuiAnimationEditorRuler | AccessSelf |  | GuiAnimationEditorRuler | Category: const |
| GuiAnimationEditorRuler | GetRulerResolutionEntries |  | Unknown | Category: nonconst |
| GuiAnimationEditorRuler | Self |  | GuiAnimationEditorRuler |  |
| GuiAnimationEditorRulerResolutionEntry | AccessSelf |  | GuiAnimationEditorRulerResolutionEntry | Category: const |
| GuiAnimationEditorRulerResolutionEntry | GetDisplayValue |  | CString | Category: nonconst |
| GuiAnimationEditorRulerResolutionEntry | GetPosition |  | CVector2f | Category: nonconst |
| GuiAnimationEditorRulerResolutionEntry | IsSubdivision |  | bool |  |
| GuiAnimationEditorRulerResolutionEntry | Self |  | GuiAnimationEditorRulerResolutionEntry |  |
| GuiAnimationEditorUniversalTrack | AccessKeyframes |  | Unknown | Category: const |
| GuiAnimationEditorUniversalTrack | AccessSelf |  | GuiAnimationEditorUniversalTrack | Category: const |
| GuiAnimationEditorUniversalTrack | AddKeyframeAtMousePointer |  | void |  |
| GuiAnimationEditorUniversalTrack | CleanAssignedWidgets |  | void |  |
| GuiAnimationEditorUniversalTrack | GetAssignedWidgetsCount |  | int32 | Category: nonconst |
| GuiAnimationEditorUniversalTrack | GetDisplayName |  | CString | Category: nonconst |
| GuiAnimationEditorUniversalTrack | GetDuration |  | float | Category: nonconst |
| GuiAnimationEditorUniversalTrack | GetIndentationDepth |  | int32 | Category: nonconst |
| GuiAnimationEditorUniversalTrack | GetKeyframes |  | Unknown | Category: nonconst |
| GuiAnimationEditorUniversalTrack | GetTimelineViewRightCornerPosition |  | CVector2f | Category: nonconst |
| GuiAnimationEditorUniversalTrack | GetTimelineViewSize |  | CVector2f | Category: nonconst |
| GuiAnimationEditorUniversalTrack | HasDataToAnimate |  | bool |  |
| GuiAnimationEditorUniversalTrack | IsCollapsable |  | bool |  |
| GuiAnimationEditorUniversalTrack | IsCollapsed |  | bool |  |
| GuiAnimationEditorUniversalTrack | IsInWidgetAssignmentMode |  | bool |  |
| GuiAnimationEditorUniversalTrack | IsRemovable |  | bool |  |
| GuiAnimationEditorUniversalTrack | IsTimeAtKeyframe |  | bool |  |
| GuiAnimationEditorUniversalTrack | IsTimeWithinAnimation |  | bool |  |
| GuiAnimationEditorUniversalTrack | IsTrackTypeAnimation |  | bool |  |
| GuiAnimationEditorUniversalTrack | IsTrackTypeProperty |  | bool |  |
| GuiAnimationEditorUniversalTrack | IsUnderMousePointer |  | bool |  |
| GuiAnimationEditorUniversalTrack | NextKeyframe |  | void |  |
| GuiAnimationEditorUniversalTrack | OpenTrackSelection |  | void |  |
| GuiAnimationEditorUniversalTrack | PreviousKeyframe |  | void |  |
| GuiAnimationEditorUniversalTrack | Remove |  | void |  |
| GuiAnimationEditorUniversalTrack | Self |  | GuiAnimationEditorUniversalTrack |  |
| GuiAnimationEditorUniversalTrack | ToggleCollapsed |  | void |  |
| GuiAnimationEditorUniversalTrack | ToggleKeyframe |  | void |  |
| GuiAnimationEditorUniversalTrack | ToggleWidgetAssignmentMode |  | void |  |
| GuiAnimationEditorViewportBase | AccessSelf |  | GuiAnimationEditorViewportBase | Category: const |
| GuiAnimationEditorViewportBase | GetNeedlePosition | 1. PdxGuiWidget 2. float 3. float | CVector2f | Category: nonconst |
| GuiAnimationEditorViewportBase | Self |  | GuiAnimationEditorViewportBase |  |
| GuiAnimationEditorViewportUserInput | AccessSelf |  | GuiAnimationEditorViewportUserInput | Category: const |
| GuiAnimationEditorViewportUserInput | GetSelectionDragRectPosition | 1. PdxGuiWidget | CVector2f | Category: nonconst |
| GuiAnimationEditorViewportUserInput | GetSelectionDragRectSize |  | CVector2f | Category: nonconst |
| GuiAnimationEditorViewportUserInput | IsDraggingSelectionRect |  | bool |  |
| GuiAnimationEditorViewportUserInput | Self |  | GuiAnimationEditorViewportUserInput |  |
| GuiAnimationTimelineViewport | AccessSelf |  | GuiAnimationTimelineViewport | Category: const |
| GuiAnimationTimelineViewport | BeginDragDuration | 1. GuiAnimationEditorUniversalTrack | void |  |
| GuiAnimationTimelineViewport | CanBeginDragDuration |  | bool |  |
| GuiAnimationTimelineViewport | GetNeedlePosition | 1. Unknown 2. Unknown 3. Unknown | CVector2f | Category: nonconst |
| GuiAnimationTimelineViewport | Self |  | GuiAnimationTimelineViewport |  |
| GuiContext | AccessSelf |  | GuiContext | Category: const |
| GuiContext | GetScreenResolution |  | CVector2f | Category: nonconst |
| GuiContext | Self |  | GuiContext |  |
| GuiCurrentDrag | AccessSelf |  | GuiCurrentDrag | Category: const |
| GuiCurrentDrag | CurrentPosition |  | CVector2f |  |
| GuiCurrentDrag | Self |  | GuiCurrentDrag |  |
| GuiCurrentDrag | StartPosition |  | CVector2f |  |
| GuiDataProfiler | AccessSelf |  | GuiDataProfiler | Category: const |
| GuiDataProfiler | BeginRecording |  | void |  |
| GuiDataProfiler | CanBeginRecording |  | bool |  |
| GuiDataProfiler | GetCurrentDurationTypeDescription |  | CString | Category: nonconst |
| GuiDataProfiler | GetCurrentFrame |  | uint32 | Category: nonconst |
| GuiDataProfiler | GetDurationTypeIndex |  | CVector2i | Category: nonconst |
| GuiDataProfiler | GetDurationTypeNames |  | Unknown | Category: nonconst |
| GuiDataProfiler | GetDurationValueTypeIndex |  | CVector2i | Category: nonconst |
| GuiDataProfiler | GetDurationValueTypeNames |  | Unknown | Category: nonconst |
| GuiDataProfiler | GetNodeDuration | 1. GuiDataProfilerEntryNode | CString | Category: nonconst |
| GuiDataProfiler | GetNodeTree |  | Unknown | Category: nonconst |
| GuiDataProfiler | GetNumFramesToCapture |  | uint32 | Category: nonconst |
| GuiDataProfiler | GetSortingMethodIndex |  | CVector2i | Category: nonconst |
| GuiDataProfiler | GetSortingMethodNames |  | Unknown | Category: nonconst |
| GuiDataProfiler | GetTotalCapturedWidgets |  | uint32 | Category: nonconst |
| GuiDataProfiler | GetViewTypeIndex |  | CVector2i | Category: nonconst |
| GuiDataProfiler | GetViewTypeNames |  | Unknown | Category: nonconst |
| GuiDataProfiler | IsCallsListView |  | bool |  |
| GuiDataProfiler | IsLocationColumnShown |  | bool |  |
| GuiDataProfiler | IsNodeExpanded | 1. GuiDataProfilerEntryNode | bool |  |
| GuiDataProfiler | IsRecording |  | bool |  |
| GuiDataProfiler | NextFrame | 1. int32 | void |  |
| GuiDataProfiler | Self |  | GuiDataProfiler |  |
| GuiDataProfiler | SetCurrentFrame |  | void |  |
| GuiDataProfiler | SetDurationTypeIndex |  | void |  |
| GuiDataProfiler | SetDurationValueTypeIndex |  | void |  |
| GuiDataProfiler | SetNumFramesToCapture |  | void |  |
| GuiDataProfiler | SetSortingMethodIndex |  | void |  |
| GuiDataProfiler | SetViewTypeIndex |  | void |  |
| GuiDataProfiler | ToggleLocationColumnShown |  | void |  |
| GuiDataProfiler | ToggleNodeExpanded | 1. GuiDataProfilerEntryNode | void |  |
| GuiDataProfilerEntryNode | AccessSelf |  | GuiDataProfilerEntryNode | Category: const |
| GuiDataProfilerEntryNode | CanOpenFileLocation |  | bool |  |
| GuiDataProfilerEntryNode | GetBranchDepth | 1. int32 2. int32 | CVector2f | Category: nonconst |
| GuiDataProfilerEntryNode | GetLocation |  | CString | Category: nonconst |
| GuiDataProfilerEntryNode | GetName |  | Unknown | Category: nonconst |
| GuiDataProfilerEntryNode | GetNumCalls |  | uint32 | Category: nonconst |
| GuiDataProfilerEntryNode | HasChildren |  | bool |  |
| GuiDataProfilerEntryNode | OpenFileLocation |  | void |  |
| GuiDataProfilerEntryNode | Self |  | GuiDataProfilerEntryNode |  |
| GuiEditorTooltip | AccessSelf |  | GuiEditorTooltip | Category: const |
| GuiEditorTooltip | GetDescription |  | CString | Category: nonconst |
| GuiEditorTooltip | GetTitle |  | CString | Category: nonconst |
| GuiEditorTooltip | HasDescription |  | bool |  |
| GuiEditorTooltip | HasTitle |  | bool |  |
| GuiEditorTooltip | IsVisible |  | bool |  |
| GuiEditorTooltip | Self |  | GuiEditorTooltip |  |
| GuiGameRule | AccessSelf |  | GuiGameRule | Category: const |
| GuiGameRule | GetRule |  | GameRule | Category: nonconst |
| GuiGameRule | GetSetting |  | GameRuleSetting | Category: nonconst |
| GuiGameRule | Next |  | void |  |
| GuiGameRule | Prev |  | void |  |
| GuiGameRule | Self |  | GuiGameRule |  |
| GuiGameRulePreset | AccessSelf |  | GuiGameRulePreset | Category: const |
| GuiGameRulePreset | GetName |  | CString | Category: nonconst |
| GuiGameRulePreset | GetSettingForRule | 1. Unknown | GameRuleSetting | Category: nonconst |
| GuiGameRulePreset | HasRuleWithFlag | 1. Unknown | bool |  |
| GuiGameRulePreset | IsIronmanEnabled |  | bool |  |
| GuiGameRulePreset | Self |  | GuiGameRulePreset |  |
| HQMarker | AccessSelf |  | HQMarker | Category: const |
| HQMarker | Self |  | HQMarker |  |
| HQMovementMarker | AccessSelf |  | HQMovementMarker | Category: const |
| HQMovementMarker | CanStationSelectedFormationsInHQ |  | bool |  |
| HQMovementMarker | GetHQ |  | Hq | Category: nonconst |
| HQMovementMarker | GetPosition |  | CVector2f | Category: nonconst |
| HQMovementMarker | GetPresentFormationsBreakdown |  | CString | Category: nonconst |
| HQMovementMarker | GetTravelTimeBreakdown |  | CString | Category: nonconst |
| HQMovementMarker | IsAllSelectedFormationsLocation |  | bool |  |
| HQMovementMarker | IsAllSelectedFormationsTarget |  | bool |  |
| HQMovementMarker | IsAnySelectedFormationsLocation |  | bool |  |
| HQMovementMarker | IsAnySelectedFormationsTarget |  | bool |  |
| HQMovementMarker | Self |  | HQMovementMarker |  |
| HarvestCondition | AccessSelf |  | HarvestCondition | Category: const |
| HarvestCondition | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| HarvestCondition | GetDurationDays |  | int32 | Category: nonconst |
| HarvestCondition | GetEffectDesc |  | CString | Category: nonconst |
| HarvestCondition | GetIntensity |  | CFixedPoint | Category: nonconst |
| HarvestCondition | GetName |  | CString | Category: nonconst |
| HarvestCondition | GetNameNoFormatting |  | CString | Category: nonconst |
| HarvestCondition | GetNameNoIcon |  | CString | Category: nonconst |
| HarvestCondition | GetNumStates |  | int32 | Category: nonconst |
| HarvestCondition | GetRemainingDays |  | int32 | Category: nonconst |
| HarvestCondition | GetRemainingDuration |  | CString | Category: nonconst |
| HarvestCondition | GetRemainingDurationLabel |  | CString | Category: nonconst |
| HarvestCondition | GetRemainingDurationRange |  | CString | Category: nonconst |
| HarvestCondition | GetTooltipTag |  | CString | Category: nonconst |
| HarvestCondition | MakeScope |  | Scope |  |
| HarvestCondition | Self |  | HarvestCondition |  |
| HarvestConditionArea | AccessSelf |  | HarvestConditionArea | Category: const |
| HarvestConditionArea | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| HarvestConditionArea | GetEffectDesc |  | CString | Category: nonconst |
| HarvestConditionArea | GetHarvestConditions |  | Unknown | Category: nonconst |
| HarvestConditionArea | GetHarvestConditionsAffecting | 1. Country | Unknown | Category: nonconst |
| HarvestConditionArea | GetHarvestConditionsNotAffecting | 1. Country | Unknown | Category: nonconst |
| HarvestConditionArea | GetIntensity |  | CFixedPoint | Category: nonconst |
| HarvestConditionArea | GetName |  | CString | Category: nonconst |
| HarvestConditionArea | GetNameNoFormatting |  | CString | Category: nonconst |
| HarvestConditionArea | GetNameNoIcon |  | CString | Category: nonconst |
| HarvestConditionArea | GetNumStates |  | int32 | Category: nonconst |
| HarvestConditionArea | GetRemainingDays |  | int32 | Category: nonconst |
| HarvestConditionArea | GetRemainingDuration |  | CString | Category: nonconst |
| HarvestConditionArea | GetRemainingDurationLabel |  | CString | Category: nonconst |
| HarvestConditionArea | GetRemainingDurationRange |  | CString | Category: nonconst |
| HarvestConditionArea | GetTooltipTag |  | CString | Category: nonconst |
| HarvestConditionArea | IsValid |  | bool |  |
| HarvestConditionArea | MakeScope |  | Scope |  |
| HarvestConditionArea | Self |  | HarvestConditionArea |  |
| HarvestConditionList | AccessSelf |  | HarvestConditionList | Category: const |
| HarvestConditionList | GetNumStatesWithType | 1. HarvestConditionType | int32 | Category: nonconst |
| HarvestConditionList | GetStatesBreakdown | 1. HarvestConditionType | CString | Category: nonconst |
| HarvestConditionList | GetTypes |  | Unknown | Category: nonconst |
| HarvestConditionList | Self |  | HarvestConditionList |  |
| HarvestConditionRegionMarker | AccessSelf |  | HarvestConditionRegionMarker | Category: const |
| HarvestConditionRegionMarker | GetHarvestConditionAreas |  | Unknown | Category: nonconst |
| HarvestConditionRegionMarker | GetPosition |  | CVector2f | Category: nonconst |
| HarvestConditionRegionMarker | Self |  | HarvestConditionRegionMarker |  |
| HarvestConditionType | AccessSelf |  | HarvestConditionType | Category: const |
| HarvestConditionType | GetColor |  | CVector4f | Category: nonconst |
| HarvestConditionType | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| HarvestConditionType | GetDescription |  | CString | Category: nonconst |
| HarvestConditionType | GetEffectDesc |  | CString | Category: nonconst |
| HarvestConditionType | GetIcon |  | Unknown | Category: nonconst |
| HarvestConditionType | GetName |  | CString | Category: nonconst |
| HarvestConditionType | GetNameNoFormatting |  | CString | Category: nonconst |
| HarvestConditionType | GetNameNoIcon |  | CString | Category: nonconst |
| HarvestConditionType | GetTooltipTag |  | CString | Category: nonconst |
| HarvestConditionType | MakeScope |  | Scope |  |
| HarvestConditionType | Self |  | HarvestConditionType |  |
| Heightmap | AccessSelf |  | Heightmap | Category: const |
| Heightmap | GetHeightmapSize |  | float | Category: nonconst |
| Heightmap | Self |  | Heightmap |  |
| HeightmapPainter | AccessSelf |  | HeightmapPainter | Category: const |
| HeightmapPainter | GenerateAndSaveHeightmapQuadTree |  | void |  |
| HeightmapPainter | GetSmoothAmount |  | int32 | Category: nonconst |
| HeightmapPainter | ReloadHeightmap |  | void |  |
| HeightmapPainter | Self |  | HeightmapPainter |  |
| HeightmapPainter | SetSmoothAmount |  | void |  |
| HeightmapPainterMode | AccessSelf |  | HeightmapPainterMode | Category: const |
| HeightmapPainterMode | IsSelected |  | bool |  |
| HeightmapPainterMode | Self |  | HeightmapPainterMode |  |
| HeightmapResolution | AccessSelf |  | HeightmapResolution | Category: const |
| HeightmapResolution | ClearSelection |  | void |  |
| HeightmapResolution | Decrease |  | void |  |
| HeightmapResolution | GetRectangleSelect |  | bool | Category: nonconst |
| HeightmapResolution | Increase |  | void |  |
| HeightmapResolution | InvertSelection |  | void |  |
| HeightmapResolution | Is16Bit |  | bool |  |
| HeightmapResolution | Is8Bit |  | bool |  |
| HeightmapResolution | ReloadHeightmap |  | void |  |
| HeightmapResolution | SelectAll |  | void |  |
| HeightmapResolution | SelectedCount |  | int32 |  |
| HeightmapResolution | Self |  | HeightmapResolution |  |
| HeightmapResolution | Set16Bit |  | void |  |
| HeightmapResolution | Set8Bit |  | void |  |
| HighlightManager | AccessSelf |  | HighlightManager | Category: const |
| HighlightManager | HighlightBattle | 1. Battle | void |  |
| HighlightManager | HighlightBuilding | 1. Building | void |  |
| HighlightManager | HighlightCharacter | 1. Character | void |  |
| HighlightManager | HighlightCivilWarCountry | 1. Unknown | void |  |
| HighlightManager | HighlightCountry | 1. Country | void |  |
| HighlightManager | HighlightCountryCreation | 1. CountryCreation | void |  |
| HighlightManager | HighlightCountryFormation | 1. Unknown | void |  |
| HighlightManager | HighlightFront | 1. Front | void |  |
| HighlightManager | HighlightGeographicRegion | 1. GeographicRegion | void |  |
| HighlightManager | HighlightGoods | 1. Unknown | void |  |
| HighlightManager | HighlightHQ | 1. Hq | void |  |
| HighlightManager | HighlightHarvestConditionArea | 1. HarvestConditionArea | void |  |
| HighlightManager | HighlightHarvestConditionType | 1. HarvestConditionType | void |  |
| HighlightManager | HighlightInvasion | 1. Invasion | void |  |
| HighlightManager | HighlightMarket | 1. Market | void |  |
| HighlightManager | HighlightMilitaryFormation | 1. MilitaryFormation | void |  |
| HighlightManager | HighlightMilitaryFormationSupplyNetwork | 1. Unknown | void |  |
| HighlightManager | HighlightPoliticalMovement | 1. PoliticalMovement | void |  |
| HighlightManager | HighlightPowerBloc | 1. PowerBloc | void |  |
| HighlightManager | HighlightShippingLane | 1. ShippingLane | void |  |
| HighlightManager | HighlightState | 1. State | void |  |
| HighlightManager | HighlightStateOccupation | 1. State 2. Country | void |  |
| HighlightManager | HighlightStateRegion | 1. StateRegion | void |  |
| HighlightManager | HighlightStateTrait | 1. StateTrait | void |  |
| HighlightManager | HighlightStrategicObjective | 1. State | void |  |
| HighlightManager | HighlightStrategicRegion | 1. StrategicRegion | void |  |
| HighlightManager | HighlightSupplyNetwork | 1. Country | void |  |
| HighlightManager | HighlightTechnology | 1. Unknown | void |  |
| HighlightManager | HighlightTheaters | 1. Unknown | void |  |
| HighlightManager | RemoveHighlight |  | void |  |
| HighlightManager | Self |  | HighlightManager |  |
| HistoryViewer | AccessSelf |  | HistoryViewer | Category: const |
| HistoryViewer | GetEntryName | 1. Unknown | CString | Category: nonconst |
| HistoryViewer | IsEntryAhead | 1. Unknown | bool |  |
| HistoryViewer | IsEntryCurrent | 1. Unknown | bool |  |
| HistoryViewer | IsEntryExecutable | 1. Unknown | bool |  |
| HistoryViewer | Self |  | HistoryViewer |  |
| HistoryViewer | SetEntryCurrent | 1. Unknown | void |  |
| HomelandMarker | AccessSelf |  | HomelandMarker | Category: const |
| HomelandMarker | GetCulture |  | Culture | Category: nonconst |
| HomelandMarker | GetPosition |  | CVector2f | Category: nonconst |
| HomelandMarker | GetState |  | State | Category: nonconst |
| HomelandMarker | Self |  | HomelandMarker |  |
| Hq | AccessSelf |  | Hq | Category: const |
| Hq | GetCombatUnitsIcon |  | CString | Category: nonconst |
| Hq | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| Hq | GetName |  | CString | Category: nonconst |
| Hq | GetNameNoFlag |  | CString | Category: nonconst |
| Hq | GetNameNoFlagNoConcept |  | CString | Category: nonconst |
| Hq | GetStates |  | Unknown | Category: nonconst |
| Hq | GetStationSelectedFormationsCommand |  | Command | Category: nonconst |
| Hq | GetTooltipTag |  | CString | Category: nonconst |
| Hq | IsBeingHighlighted |  | bool |  |
| Hq | IsBeingTutorialHighlighted |  | bool |  |
| Hq | IsLandHQ |  | bool |  |
| Hq | IsNavalHQ |  | bool |  |
| Hq | IsTemporaryHQ |  | bool |  |
| Hq | IsValid |  | bool |  |
| Hq | IsZoomingToHQ |  | bool |  |
| Hq | MakeScope |  | Scope |  |
| Hq | Self |  | Hq |  |
| Hq | ZoomToHQ |  | void |  |
| Ideology | AccessSelf |  | Ideology | Category: const |
| Ideology | EndorsesLaw | 1. Law | bool |  |
| Ideology | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| Ideology | GetDesc |  | CString | Category: nonconst |
| Ideology | GetEndorsedLawsInLawGroup | 1. LawGroup | Unknown | Category: nonconst |
| Ideology | GetLawGroups |  | Unknown | Category: nonconst |
| Ideology | GetLawStanceDesc |  | CString | Category: nonconst |
| Ideology | GetName |  | CString | Category: nonconst |
| Ideology | GetNameNoFormatting |  | CString | Category: nonconst |
| Ideology | GetNeutralLawsInLawGroup | 1. LawGroup | Unknown | Category: nonconst |
| Ideology | GetOpposedLawsInLawGroup | 1. LawGroup | Unknown | Category: nonconst |
| Ideology | GetTexture |  | Unknown | Category: nonconst |
| Ideology | GetTooltipTag |  | CString | Category: nonconst |
| Ideology | IsCharacterIdeology |  | bool |  |
| Ideology | MakeScope |  | Scope |  |
| Ideology | OpposesLaw | 1. Law | bool |  |
| Ideology | Self |  | Ideology |  |
| ImportTool | AccessSelf |  | ImportTool | Category: const |
| ImportTool | AreAllSelected |  | bool |  |
| ImportTool | Cancel |  | void |  |
| ImportTool | GetExportMaskTexture |  | Unknown | Category: nonconst |
| ImportTool | GetExportNotes |  | CString | Category: nonconst |
| ImportTool | GetHeightmapTexture |  | Unknown | Category: nonconst |
| ImportTool | GetMaskEffect |  | Unknown | Category: nonconst |
| ImportTool | HasExportNotes |  | bool |  |
| ImportTool | Import |  | void |  |
| ImportTool | IsImporting |  | bool |  |
| ImportTool | IsSelectedIndeterminable |  | bool |  |
| ImportTool | IsZipLoaded |  | bool |  |
| ImportTool | RefreshHeightmap |  | void |  |
| ImportTool | Self |  | ImportTool |  |
| ImportTool | SetMaskAsReferenceOverlay |  | void |  |
| ImportTool | ToggleAllSelected |  | void |  |
| Importable | AccessSelf |  | Importable | Category: const |
| Importable | GetName |  | CString | Category: nonconst |
| Importable | IsSelected |  | bool |  |
| Importable | Self |  | Importable |  |
| Importable | SetSelected | 1. bool | void |  |
| ImportableGroup | AccessSelf |  | ImportableGroup | Category: const |
| ImportableGroup | AreAllSelected |  | bool |  |
| ImportableGroup | GetImportableCount |  | int32 | Category: nonconst |
| ImportableGroup | GetImportables |  | Unknown | Category: nonconst |
| ImportableGroup | GetTitle |  | CString | Category: nonconst |
| ImportableGroup | HasDiffTool |  | bool |  |
| ImportableGroup | IsCollapsed |  | bool |  |
| ImportableGroup | IsSelectedIndeterminable |  | bool |  |
| ImportableGroup | LaunchDiffTool |  | void |  |
| ImportableGroup | Self |  | ImportableGroup |  |
| ImportableGroup | ToggleAllSelected |  | void |  |
| ImportableGroup | ToggleCollapsed |  | void |  |
| ImportantAlert | AccessSelf |  | ImportantAlert | Category: const |
| ImportantAlert | GetAlert |  | Alert | Category: nonconst |
| ImportantAlert | GetAlertGroup |  | Unknown | Category: nonconst |
| ImportantAlert | GetAlerts |  | Unknown | Category: nonconst |
| ImportantAlert | GetDescription |  | CString | Category: nonconst |
| ImportantAlert | GetName |  | CString | Category: nonconst |
| ImportantAlert | GetNumAlerts |  | int32 | Category: nonconst |
| ImportantAlert | GetTexture |  | Unknown | Category: nonconst |
| ImportantAlert | GetToolTip |  | CString | Category: nonconst |
| ImportantAlert | HasGroup |  | bool |  |
| ImportantAlert | IsAlertGroupExpanded |  | bool |  |
| ImportantAlert | IsRead |  | bool |  |
| ImportantAlert | MarkAsHidden |  | void |  |
| ImportantAlert | MarkAsRead |  | void |  |
| ImportantAlert | Self |  | ImportantAlert |  |
| ImportantAlert | ToggleAlertGroupExpanded |  | void |  |
| InfoboxNodeWindow | AccessSelf |  | InfoboxNodeWindow | Category: const |
| InfoboxNodeWindow | GetTitleScale |  | float | Category: nonconst |
| InfoboxNodeWindow | Self |  | InfoboxNodeWindow |  |
| InformationPanel | AccessSelf |  | InformationPanel | Category: const |
| InformationPanel | IsTabSelected | 1. CString | bool |  |
| InformationPanel | SelectTab | 1. CString | void |  |
| InformationPanel | Self |  | InformationPanel |  |
| InformationPanelBar | AccessSelf |  | InformationPanelBar | Category: const |
| InformationPanelBar | ClosePanel |  | void |  |
| InformationPanelBar | IsAnyPanelOpen |  | bool |  |
| InformationPanelBar | IsAvailable |  | bool |  |
| InformationPanelBar | IsPanelOpen | 1. CString | bool |  |
| InformationPanelBar | IsPanelTabOpen | 1. Unknown 2. Unknown | bool |  |
| InformationPanelBar | OpenAddWarGoalPanel | 1. DiplomaticPlay 2. Country | void |  |
| InformationPanelBar | OpenBattlePanel | 1. Battle | void |  |
| InformationPanelBar | OpenBattlePanelTab | 1. Battle 2. CString | void |  |
| InformationPanelBar | OpenBattleParticipantsPanel | 1. Unknown 2. Unknown | void |  |
| InformationPanelBar | OpenBuildingBrowserPanel | 1. Country | void |  |
| InformationPanelBar | OpenBuildingBrowserPanelForType | 1. Unknown 2. Unknown | void |  |
| InformationPanelBar | OpenBuildingDetailsPanel | 1. Building | void |  |
| InformationPanelBar | OpenBuildingDetailsPanelTab | 1. Unknown 2. Unknown | void |  |
| InformationPanelBar | OpenChangeLaw | 1. LawGroup | void |  |
| InformationPanelBar | OpenCommanderPanel | 1. Character | void |  |
| InformationPanelBar | OpenCompactBuildingBrowserPanel | 1. Unknown | void |  |
| InformationPanelBar | OpenCompactBuildingBrowserPanelCycleFilters | 1. Country 2. CString | void |  |
| InformationPanelBar | OpenCompanyPanel | 1. Company | void |  |
| InformationPanelBar | OpenConstructionCampPanel | 1. Unknown | void |  |
| InformationPanelBar | OpenConstructionCampPanelTab | 1. Unknown 2. Unknown | void |  |
| InformationPanelBar | OpenConstructionPanel | 1. Country | void |  |
| InformationPanelBar | OpenCountryFormationPanel | 1. CountryFormation | void |  |
| InformationPanelBar | OpenCountryPanel | 1. Country | void |  |
| InformationPanelBar | OpenCountryPanelTab | 1. Country 2. CString | void |  |
| InformationPanelBar | OpenCultureInfoPanel | 1. Culture | void |  |
| InformationPanelBar | OpenDiplomaticPlayPanel | 1. DiplomaticPlay | void |  |
| InformationPanelBar | OpenDiplomaticPlayPanelTab | 1. DiplomaticPlay 2. CString | void |  |
| InformationPanelBar | OpenElectionPanel | 1. Player | void |  |
| InformationPanelBar | OpenFrontPanel | 1. Front | void |  |
| InformationPanelBar | OpenGoodsLocalPricesPanel | 1. Goods | void |  |
| InformationPanelBar | OpenGoodsPanel | 1. Market 2. Goods | void |  |
| InformationPanelBar | OpenGoodsStatePanel | 1. State 2. Goods | void |  |
| InformationPanelBar | OpenGoodsUsagePanel | 1. Goods | void |  |
| InformationPanelBar | OpenGoodsWorldMarketPanel | 1. Goods | void |  |
| InformationPanelBar | OpenInterestGroupPanel | 1. InterestGroup | void |  |
| InformationPanelBar | OpenInvasionPanel | 1. Invasion | void |  |
| InformationPanelBar | OpenInvasionPanelTab | 1. Invasion 2. CString | void |  |
| InformationPanelBar | OpenJournalEntryPanel | 1. JournalEntry | void |  |
| InformationPanelBar | OpenJournalEntryPanelDontToggle | 1. Unknown | void |  |
| InformationPanelBar | OpenMarketPanel | 1. Market | void |  |
| InformationPanelBar | OpenMarketPanelCycleTabs | 1. Market 2. CString 3. CString | void |  |
| InformationPanelBar | OpenMarketPanelTab | 1. Market 2. CString | void |  |
| InformationPanelBar | OpenMilitaryFormationPanel | 1. MilitaryFormation | void |  |
| InformationPanelBar | OpenMilitaryFormationPanelTab | 1. MilitaryFormation 2. CString | void |  |
| InformationPanelBar | OpenMilitaryPanelTab | 1. CString | void |  |
| InformationPanelBar | OpenPanel | 1. CString | void |  |
| InformationPanelBar | OpenPanelCycleTabs | 1. CString 2. CString | void |  |
| InformationPanelBar | OpenPanelDontToggle | 1. Unknown | void |  |
| InformationPanelBar | OpenPanelTab | 1. CString 2. CString | void |  |
| InformationPanelBar | OpenPanelTabDontToggle | 1. Unknown 2. Unknown | void |  |
| InformationPanelBar | OpenPartyPanel | 1. Unknown | void |  |
| InformationPanelBar | OpenPoliticalLobbyPanel | 1. PoliticalLobby | void |  |
| InformationPanelBar | OpenPoliticalMovementPanel | 1. PoliticalMovement | void |  |
| InformationPanelBar | OpenPopBrowserPanel | 1. Country | void |  |
| InformationPanelBar | OpenPopDetailsPanel | 1. Pop | void |  |
| InformationPanelBar | OpenPowerBlocFormationPanel |  | void |  |
| InformationPanelBar | OpenPowerBlocPanel | 1. PowerBloc | void |  |
| InformationPanelBar | OpenPowerBlocPanelTab | 1. PowerBloc 2. CString | void |  |
| InformationPanelBar | OpenPreviousPanel |  | void |  |
| InformationPanelBar | OpenReligionInfoPanel | 1. Religion | void |  |
| InformationPanelBar | OpenSeaRegionPanel | 1. Unknown | void |  |
| InformationPanelBar | OpenSeaRegionPanelTab | 1. Province 2. CString | void |  |
| InformationPanelBar | OpenStatePanel | 1. State | void |  |
| InformationPanelBar | OpenStatePanelTab | 1. Unknown 2. Unknown | void |  |
| InformationPanelBar | OpenStatePopulationPanel | 1. Unknown | void |  |
| InformationPanelBar | OpenSwayCountryPanel | 1. DiplomaticPlay 2. Country | void |  |
| InformationPanelBar | OpenTreatyDraftPanel | 1. Treaty | void |  |
| InformationPanelBar | OpenTreatyDraftPanelForNewDraft | 1. Country 2. Country | void |  |
| InformationPanelBar | OpenTreatyPanel | 1. Treaty | void |  |
| InformationPanelBar | Self |  | InformationPanelBar |  |
| InformationPanelBar | ToggleLocationFinder |  | void |  |
| InformationPanelBar | ToggleTop |  | void |  |
| IngameHud | AccessSelf |  | IngameHud | Category: const |
| IngameHud | Self |  | IngameHud |  |
| InputActionBinding | AccessSelf |  | InputActionBinding | Category: const |
| InputActionBinding | Self |  | InputActionBinding |  |
| InspectorPanel | AccessSelf |  | InspectorPanel | Category: const |
| InspectorPanel | GetAnchorItems |  | Unknown | Category: nonconst |
| InspectorPanel | GetSearchFilter |  | CString | Category: nonconst |
| InspectorPanel | Self |  | InspectorPanel |  |
| InspectorPanel | SetSearchFilter |  | void |  |
| Institution | AccessInvestmentLevels |  | Unknown | Category: const |
| Institution | AccessModifier |  | Modifier | Category: const |
| Institution | AccessSelf |  | Institution | Category: const |
| Institution | CanChangeLevelTo | 1. Unknown | bool |  |
| Institution | GetBackground |  | Unknown | Category: nonconst |
| Institution | GetChangeLevelDesc | 1. int32 | CString | Category: nonconst |
| Institution | GetCountry |  | Country | Category: nonconst |
| Institution | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| Institution | GetDesc |  | CString | Category: nonconst |
| Institution | GetGrowDesc |  | CString | Category: nonconst |
| Institution | GetGrowthProgress |  | CFixedPoint | Category: nonconst |
| Institution | GetIcon |  | Unknown | Category: nonconst |
| Institution | GetInvestmentCost |  | CFixedPoint | Category: nonconst |
| Institution | GetInvestmentLevel |  | int32 | Category: nonconst |
| Institution | GetMaxLevel |  | int32 | Category: nonconst |
| Institution | GetModifier |  | Modifier | Category: nonconst |
| Institution | GetModifierDesc |  | CString | Category: nonconst |
| Institution | GetName |  | CString | Category: nonconst |
| Institution | GetNameNoFormatting |  | CString | Category: nonconst |
| Institution | GetProvidingLawsDesc |  | CString | Category: nonconst |
| Institution | GetShrinkDesc |  | CString | Category: nonconst |
| Institution | GetShrinkProgress |  | CFixedPoint | Category: nonconst |
| Institution | GetTargetInvestmentLevel |  | int32 | Category: nonconst |
| Institution | GetTimeToReachTargetLevelDesc |  | CString | Category: nonconst |
| Institution | GetTimedModifiersDesc |  | CString | Category: nonconst |
| Institution | GetTooltipModifierDesc |  | CString | Category: nonconst |
| Institution | GetTooltipTag |  | CString | Category: nonconst |
| Institution | IsChangingLevel |  | bool |  |
| Institution | IsGrowing |  | bool |  |
| Institution | IsShrinking |  | bool |  |
| Institution | IsValid |  | bool |  |
| Institution | MakeScope |  | Scope |  |
| Institution | Self |  | Institution |  |
| Institution | StartChangingLevelTo | 1. int32 | Command |  |
| Institution | StartGrowing |  | Command |  |
| Institution | StartShrinking |  | Command |  |
| Institution | StopSizeChange |  | Command |  |
| InstitutionInvestmentLevel | AccessSelf |  | InstitutionInvestmentLevel | Category: const |
| InstitutionInvestmentLevel | GetLevel |  | int32 | Category: nonconst |
| InstitutionInvestmentLevel | IsActive |  | bool |  |
| InstitutionInvestmentLevel | IsDecreasing |  | bool |  |
| InstitutionInvestmentLevel | IsDecreasingToThisLevel |  | bool |  |
| InstitutionInvestmentLevel | IsIncreasing |  | bool |  |
| InstitutionInvestmentLevel | IsIncreasingToThisLevel |  | bool |  |
| InstitutionInvestmentLevel | IsTargetLevel |  | bool |  |
| InstitutionInvestmentLevel | Self |  | InstitutionInvestmentLevel |  |
| InstitutionType | AccessSelf |  | InstitutionType | Category: const |
| InstitutionType | GetBackground |  | Unknown | Category: nonconst |
| InstitutionType | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| InstitutionType | GetDesc |  | CString | Category: nonconst |
| InstitutionType | GetIcon |  | Unknown | Category: nonconst |
| InstitutionType | GetModifier |  | Modifier | Category: nonconst |
| InstitutionType | GetName |  | CString | Category: nonconst |
| InstitutionType | GetNameNoFormatting |  | CString | Category: nonconst |
| InstitutionType | GetTooltipTag |  | CString | Category: nonconst |
| InstitutionType | IsValid |  | bool |  |
| InstitutionType | MakeScope |  | Scope |  |
| InstitutionType | Self |  | InstitutionType |  |
| Interest | AccessSelf |  | Interest | Category: const |
| Interest | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| Interest | GetIconTooltip |  | CString | Category: nonconst |
| Interest | GetInterestSourceDesc |  | CString | Category: nonconst |
| Interest | GetInterestStatusIcon |  | CString | Category: nonconst |
| Interest | GetInterestStatusName |  | CString | Category: nonconst |
| Interest | GetOwner |  | Country | Category: nonconst |
| Interest | GetProgress |  | float | Category: nonconst |
| Interest | GetProgressBarTooltip |  | CString | Category: nonconst |
| Interest | GetStrategicRegion |  | StrategicRegion | Category: nonconst |
| Interest | GetTooltipTag |  | CString | Category: nonconst |
| Interest | IsActive |  | bool |  |
| Interest | IsDeclared |  | bool |  |
| Interest | MakeScope |  | Scope |  |
| Interest | Self |  | Interest |  |
| Interest | ShouldShowProgressBar |  | bool |  |
| InterestGroup | AccessAllIdeologies |  | Unknown | Category: const |
| InterestGroup | AccessCheapestLawsToPass |  | Unknown | Category: const |
| InterestGroup | AccessCountry |  | Country | Category: const |
| InterestGroup | AccessIntrinsicIdeologies |  | Unknown | Category: const |
| InterestGroup | AccessLeader |  | Character | Category: const |
| InterestGroup | AccessModifier |  | Modifier | Category: const |
| InterestGroup | AccessSelf |  | InterestGroup | Category: const |
| InterestGroup | AccessTraits |  | Unknown | Category: const |
| InterestGroup | CalcApprovalFromLoyalties |  | int32 |  |
| InterestGroup | CalcApprovalFromLoyaltiesDesc |  | CString |  |
| InterestGroup | GetAffiliationBreakdown |  | CString | Category: nonconst |
| InterestGroup | GetAffiliationBreakdownForParty | 1. Party | CString | Category: nonconst |
| InterestGroup | GetAffiliationRaw |  | CFixedPoint | Category: nonconst |
| InterestGroup | GetAgitators |  | Unknown | Category: nonconst |
| InterestGroup | GetAmenability |  | CFixedPoint | Category: nonconst |
| InterestGroup | GetAmenabilityLabel |  | CString | Category: nonconst |
| InterestGroup | GetApprovalRating |  | CString | Category: nonconst |
| InterestGroup | GetApprovalValue |  | int32 | Category: nonconst |
| InterestGroup | GetApprovalValueDecayIfEnactedDesc | 1. LawType | CString | Category: nonconst |
| InterestGroup | GetApprovalValueDeltaFromEnactment | 1. LawType | int32 | Category: nonconst |
| InterestGroup | GetApprovalValueDesc |  | CString | Category: nonconst |
| InterestGroup | GetApprovalValueIfEnacted | 1. LawType | int32 | Category: nonconst |
| InterestGroup | GetClout |  | CFixedPoint | Category: nonconst |
| InterestGroup | GetCloutAsFloat |  | float | Category: nonconst |
| InterestGroup | GetCloutSupportingMovement | 1. PoliticalMovement | CFixedPoint | Category: nonconst |
| InterestGroup | GetCloutTrend |  | DataTrend | Category: nonconst |
| InterestGroup | GetColor |  | CVector4f | Category: nonconst |
| InterestGroup | GetCountry |  | Country | Category: nonconst |
| InterestGroup | GetCountrySupport |  | CFixedPoint | Category: nonconst |
| InterestGroup | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| InterestGroup | GetDesc |  | CString | Category: nonconst |
| InterestGroup | GetFractionOfCloutSupportingMovement | 1. PoliticalMovement | CFixedPoint | Category: nonconst |
| InterestGroup | GetGraphicalLoyalistsRatioInAllInterestGroups |  | float | Category: nonconst |
| InterestGroup | GetGraphicalRadicalsRatioInAllInterestGroups |  | float | Category: nonconst |
| InterestGroup | GetID |  | uint32 | Category: nonconst |
| InterestGroup | GetIdeologyDesc |  | CString | Category: nonconst |
| InterestGroup | GetInfluenceDesc |  | CString | Category: nonconst |
| InterestGroup | GetInfluenceReason |  | CString | Category: nonconst |
| InterestGroup | GetInfluencingMovements |  | Unknown | Category: nonconst |
| InterestGroup | GetLawApprovalBreakdown | 1. Law | CString | Category: nonconst |
| InterestGroup | GetLawApprovalValue | 1. Unknown | int32 | Category: nonconst |
| InterestGroup | GetLawStanceLabel | 1. LawType | CString | Category: nonconst |
| InterestGroup | GetLeader |  | Character | Category: nonconst |
| InterestGroup | GetLeaderIdeology |  | Ideology | Category: nonconst |
| InterestGroup | GetLeaderIdeologyDesc |  | CString | Category: nonconst |
| InterestGroup | GetLoyalistsPoliticalStrength |  | int64 | Category: nonconst |
| InterestGroup | GetLoyalistsTrend |  | DataTrend | Category: nonconst |
| InterestGroup | GetModifier |  | Modifier | Category: nonconst |
| InterestGroup | GetName |  | CString | Category: nonconst |
| InterestGroup | GetNameNoFormatting |  | CString | Category: nonconst |
| InterestGroup | GetNameNoIcon |  | CString | Category: nonconst |
| InterestGroup | GetNameWithCountryVariant |  | CString | Category: nonconst |
| InterestGroup | GetNumLoyalists |  | int64 | Category: nonconst |
| InterestGroup | GetNumLoyalistsRatio |  | float | Category: nonconst |
| InterestGroup | GetNumNeutrals |  | int64 | Category: nonconst |
| InterestGroup | GetNumNeutralsRatio |  | float | Category: nonconst |
| InterestGroup | GetNumPossibleLeaderIdeologies |  | int32 | Category: nonconst |
| InterestGroup | GetNumRadicals |  | int64 | Category: nonconst |
| InterestGroup | GetNumRadicalsRatio |  | float | Category: nonconst |
| InterestGroup | GetNumSupportersForMovement | 1. PoliticalMovement | int64 | Category: nonconst |
| InterestGroup | GetParty |  | Party | Category: nonconst |
| InterestGroup | GetPartyAffiliationHighest |  | Party | Category: nonconst |
| InterestGroup | GetPartyAffiliationTooltip |  | CString | Category: nonconst |
| InterestGroup | GetPoliticalLobbies |  | Unknown | Category: nonconst |
| InterestGroup | GetPoliticalStrength |  | int64 | Category: nonconst |
| InterestGroup | GetPoliticalStrengthDesc |  | CString | Category: nonconst |
| InterestGroup | GetPoliticalStrengthInState | 1. State | int64 | Category: nonconst |
| InterestGroup | GetPoliticalStrengthInStateAsPercentage | 1. State | CFixedPoint | Category: nonconst |
| InterestGroup | GetPoliticallyActivePercentage |  | CFixedPoint | Category: nonconst |
| InterestGroup | GetPoliticallyActiveRaw |  | int64 | Category: nonconst |
| InterestGroup | GetPopPotentialDesc |  | CString | Category: nonconst |
| InterestGroup | GetPopWithIG | 1. Unknown | PopWithIG | Category: nonconst |
| InterestGroup | GetPopulation |  | int64 | Category: nonconst |
| InterestGroup | GetPopulationAsFloat |  | float | Category: nonconst |
| InterestGroup | GetPopulationInCountryAsPercentage |  | CFixedPoint | Category: nonconst |
| InterestGroup | GetPopulationInState | 1. State | int64 | Category: nonconst |
| InterestGroup | GetPopulationNonZero |  | int64 | Category: nonconst |
| InterestGroup | GetPossibleCharacterLeaderIdeologies |  | Unknown | Category: nonconst |
| InterestGroup | GetPossibleRandomLeaderIdeologies |  | Unknown | Category: nonconst |
| InterestGroup | GetRadicalsPoliticalStrength |  | int64 | Category: nonconst |
| InterestGroup | GetRadicalsTrend |  | DataTrend | Category: nonconst |
| InterestGroup | GetStatusTooltip |  | CString | Category: nonconst |
| InterestGroup | GetSupportingPopTypesDesc |  | CString | Category: nonconst |
| InterestGroup | GetTextIcon |  | CString | Category: nonconst |
| InterestGroup | GetTexture |  | Unknown | Category: nonconst |
| InterestGroup | GetTooltipTag |  | CString | Category: nonconst |
| InterestGroup | GetTotalPoliticalStrengthIncludingPartyVotes |  | int64 | Category: nonconst |
| InterestGroup | GetTraitsDesc |  | CString | Category: nonconst |
| InterestGroup | GetWillJoinPartyDesc |  | CString | Category: nonconst |
| InterestGroup | GetWillJoinPartyTooltip |  | CString | Category: nonconst |
| InterestGroup | HasNegotiated |  | bool |  |
| InterestGroup | HasParty |  | bool |  |
| InterestGroup | IsEndorsingLawEnactment | 1. Unknown | bool |  |
| InterestGroup | IsInGovernment |  | bool |  |
| InterestGroup | IsIndifferentToLawEnactment | 1. Unknown | bool |  |
| InterestGroup | IsInfluencedByMovement | 1. Unknown | bool |  |
| InterestGroup | IsInsurrectionary |  | bool |  |
| InterestGroup | IsLeaderInfluencingEnactment | 1. LawType | bool |  |
| InterestGroup | IsLeadingGovernment |  | bool |  |
| InterestGroup | IsMarginal |  | bool |  |
| InterestGroup | IsNegotiating |  | bool |  |
| InterestGroup | IsOpposingLawEnactment | 1. Law | bool |  |
| InterestGroup | IsPinnedInOutliner |  | bool |  |
| InterestGroup | IsPowerful |  | bool |  |
| InterestGroup | IsRevolutionary |  | bool |  |
| InterestGroup | IsSecessionist |  | bool |  |
| InterestGroup | IsValid |  | bool |  |
| InterestGroup | MakeScope |  | Scope |  |
| InterestGroup | PredictLegitimacyChangeDesc |  | CString |  |
| InterestGroup | PredictLegitimacyChangeToSwitch |  | CFixedPoint |  |
| InterestGroup | Self |  | InterestGroup |  |
| InterestGroup | TogglePinInOutliner |  | void |  |
| InterestGroup | WillRadicalizeIfEnacted | 1. LawType | bool |  |
| InterestGroupAndTraitPair | AccessInterestGroup |  | InterestGroup | Category: const |
| InterestGroupAndTraitPair | AccessSelf |  | InterestGroupAndTraitPair | Category: const |
| InterestGroupAndTraitPair | GetInterestGroup |  | InterestGroup | Category: nonconst |
| InterestGroupAndTraitPair | GetTrait |  | InterestGroupTrait | Category: nonconst |
| InterestGroupAndTraitPair | Self |  | InterestGroupAndTraitPair |  |
| InterestGroupMarker | AccessInterestGroup |  | InterestGroup | Category: const |
| InterestGroupMarker | AccessSelf |  | InterestGroupMarker | Category: const |
| InterestGroupMarker | GetInterestGroup |  | InterestGroup | Category: nonconst |
| InterestGroupMarker | GetPosition |  | CVector2f | Category: nonconst |
| InterestGroupMarker | Self |  | InterestGroupMarker |  |
| InterestGroupPanel | AccessInterestGroup |  | InterestGroup | Category: const |
| InterestGroupPanel | AccessPops |  | Unknown | Category: const |
| InterestGroupPanel | AccessPopsList |  | PopList | Category: const |
| InterestGroupPanel | AccessSelf |  | InterestGroupPanel | Category: const |
| InterestGroupPanel | GetInterestGroup |  | InterestGroup | Category: nonconst |
| InterestGroupPanel | Self |  | InterestGroupPanel |  |
| InterestGroupTrait | AccessSelf |  | InterestGroupTrait | Category: const |
| InterestGroupTrait | GetBaseModifiersDesc |  | CString | Category: nonconst |
| InterestGroupTrait | GetBaseTriggersDesc |  | CString | Category: nonconst |
| InterestGroupTrait | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| InterestGroupTrait | GetDesc |  | CString | Category: nonconst |
| InterestGroupTrait | GetInactiveString | 1. InterestGroup | CString | Category: nonconst |
| InterestGroupTrait | GetModifiersDesc | 1. InterestGroup | CString | Category: nonconst |
| InterestGroupTrait | GetName | 1. InterestGroup | CString | Category: nonconst |
| InterestGroupTrait | GetNameNoFormatting |  | CString | Category: nonconst |
| InterestGroupTrait | GetNameWithStatus | 1. Unknown | CString | Category: nonconst |
| InterestGroupTrait | GetTexture |  | Unknown | Category: nonconst |
| InterestGroupTrait | GetTooltipTag |  | CString | Category: nonconst |
| InterestGroupTrait | GetTriggersDesc | 1. InterestGroup | CString | Category: nonconst |
| InterestGroupTrait | IsEnabled | 1. InterestGroup | bool |  |
| InterestGroupTrait | MakeScope |  | Scope |  |
| InterestGroupTrait | Self |  | InterestGroupTrait |  |
| InterestingCountryItem | AccessSelf |  | InterestingCountryItem | Category: const |
| InterestingCountryItem | GetCountry |  | Country | Category: nonconst |
| InterestingCountryItem | GetSetting |  | InterestingCountrySetting | Category: nonconst |
| InterestingCountryItem | OnSelectOption |  | void |  |
| InterestingCountryItem | Self |  | InterestingCountryItem |  |
| InterestingCountrySetting | AccessSelf |  | InterestingCountrySetting | Category: const |
| InterestingCountrySetting | GetIsActiveDesc | 1. Unknown | CString | Category: nonconst |
| InterestingCountrySetting | GetName |  | CString | Category: nonconst |
| InterestingCountrySetting | Self |  | InterestingCountrySetting |  |
| Invasion | AccessSelf |  | Invasion | Category: const |
| Invasion | CanFormationBlockLanding | 1. Unknown | bool |  |
| Invasion | Cancel |  | Command |  |
| Invasion | DeployArmyToDefend | 1. MilitaryFormation | Command |  |
| Invasion | DeployFleetToDefend | 1. MilitaryFormation | Command |  |
| Invasion | GetActiveLandBattles |  | Unknown | Category: nonconst |
| Invasion | GetActiveNavalBattles |  | Unknown | Category: nonconst |
| Invasion | GetAdvancementProgress |  | CFixedPoint | Category: nonconst |
| Invasion | GetArmy |  | MilitaryFormation | Category: nonconst |
| Invasion | GetBlockingFleets |  | Unknown | Category: nonconst |
| Invasion | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| Invasion | GetDefenderHQ |  | Hq | Category: nonconst |
| Invasion | GetDefendingArmies |  | Unknown | Category: nonconst |
| Invasion | GetDefendingArmiesTooltipBreakdown |  | CString | Category: nonconst |
| Invasion | GetDefendingFleets |  | Unknown | Category: nonconst |
| Invasion | GetDefendingFleetsTooltipBreakdown |  | CString | Category: nonconst |
| Invasion | GetDeploySelectedFormationsCommand |  | Command | Category: nonconst |
| Invasion | GetEndedLandBattles |  | Unknown | Category: nonconst |
| Invasion | GetEndedNavalBattles |  | Unknown | Category: nonconst |
| Invasion | GetEnemyState |  | State | Category: nonconst |
| Invasion | GetFleet |  | MilitaryFormation | Category: nonconst |
| Invasion | GetFront |  | Front | Category: nonconst |
| Invasion | GetInvadedCountry |  | Country | Category: nonconst |
| Invasion | GetInvaderCountry |  | Country | Category: nonconst |
| Invasion | GetInvadingArmies |  | Unknown | Category: nonconst |
| Invasion | GetInvadingArmiesTooltipBreakdown |  | CString | Category: nonconst |
| Invasion | GetInvadingFleets |  | Unknown | Category: nonconst |
| Invasion | GetInvadingFleetsTooltipBreakdown |  | CString | Category: nonconst |
| Invasion | GetLandingProgress |  | CFixedPoint | Category: nonconst |
| Invasion | GetMaxLandBattleDefeatsAtZeroOccupation |  | int32 | Category: nonconst |
| Invasion | GetName |  | CString | Category: nonconst |
| Invasion | GetNonBlockingFleets |  | Unknown | Category: nonconst |
| Invasion | GetNumBlockingFleets |  | int32 | Category: nonconst |
| Invasion | GetNumBlockingFleetsUnits |  | int32 | Category: nonconst |
| Invasion | GetNumDefendingArmies |  | int32 | Category: nonconst |
| Invasion | GetNumDefendingArmiesUnits |  | int32 | Category: nonconst |
| Invasion | GetNumDefendingFleets |  | int32 | Category: nonconst |
| Invasion | GetNumDefendingFleetsUnits |  | int32 | Category: nonconst |
| Invasion | GetNumInvadingArmies |  | int32 | Category: nonconst |
| Invasion | GetNumInvadingArmiesUnits |  | int32 | Category: nonconst |
| Invasion | GetNumInvadingFleets |  | int32 | Category: nonconst |
| Invasion | GetNumInvadingFleetsUnits |  | int32 | Category: nonconst |
| Invasion | GetNumLandBattleDefeatsAtZeroOccupation |  | int32 | Category: nonconst |
| Invasion | GetNumNonBlockingFleets |  | int32 | Category: nonconst |
| Invasion | GetNumNonBlockingFleetsUnits |  | int32 | Category: nonconst |
| Invasion | GetPreparationDaysLeftRaw |  | int32 | Category: nonconst |
| Invasion | GetProgress |  | CFixedPoint | Category: nonconst |
| Invasion | GetSeaNode |  | Province | Category: nonconst |
| Invasion | GetSeaNodeName |  | CString | Category: nonconst |
| Invasion | GetSourceState |  | State | Category: nonconst |
| Invasion | GetStatus |  | CString | Category: nonconst |
| Invasion | GetTargetState |  | State | Category: nonconst |
| Invasion | GetTooltipTag |  | CString | Category: nonconst |
| Invasion | HasBlockingEnemyFleetOnSeaNode |  | bool |  |
| Invasion | HasEnded |  | bool |  |
| Invasion | HasFailed |  | bool |  |
| Invasion | HasSucceeded |  | bool |  |
| Invasion | IsBeingHighlighted |  | bool |  |
| Invasion | IsBeingTutorialHighlighted |  | bool |  |
| Invasion | IsFightingLandBattle |  | bool |  |
| Invasion | IsFightingNavalBattle |  | bool |  |
| Invasion | IsLandInvasion |  | bool |  |
| Invasion | IsNavalInvasion |  | bool |  |
| Invasion | IsOnInvaderSide | 1. Country | bool |  |
| Invasion | IsPreparing |  | bool |  |
| Invasion | IsRelevantForCountry | 1. Country | bool |  |
| Invasion | IsStalledDueToCommanderOrders |  | bool |  |
| Invasion | IsValid |  | bool |  |
| Invasion | IsWaiting |  | bool |  |
| Invasion | IsZoomingToMapMarkerPosition |  | bool |  |
| Invasion | MakeScope |  | Scope |  |
| Invasion | Self |  | Invasion |  |
| Invasion | ZoomToMapMarkerPosition |  | void |  |
| InvasionMarker | AccessSelf |  | InvasionMarker | Category: const |
| InvasionMarker | CanDeploySelectedFormationsToDefend |  | bool |  |
| InvasionMarker | GetPosition |  | CVector2f | Category: nonconst |
| InvasionMarker | Self |  | InvasionMarker |  |
| InvasionPanel | AccessSelf |  | InvasionPanel | Category: const |
| InvasionPanel | Self |  | InvasionPanel |  |
| InvasionPlannerPopup | AccessSelf |  | InvasionPlannerPopup | Category: const |
| InvasionPlannerPopup | CanLandInvade |  | bool |  |
| InvasionPlannerPopup | CanMilitaryFormationBeSelected | 1. MilitaryFormation | bool |  |
| InvasionPlannerPopup | CanNavalInvade |  | bool |  |
| InvasionPlannerPopup | GetArmyDaysDesc |  | CString | Category: nonconst |
| InvasionPlannerPopup | GetCanMilitaryFormationBeSelectedTooltip | 1. MilitaryFormation | CString | Category: nonconst |
| InvasionPlannerPopup | GetCommandValidityDesc |  | CString | Category: nonconst |
| InvasionPlannerPopup | GetEfficiencyRaw |  | CFixedPoint | Category: nonconst |
| InvasionPlannerPopup | GetFleetDaysDesc |  | CString | Category: nonconst |
| InvasionPlannerPopup | GetLandingPenaltyModifierMultiplier |  | CFixedPoint | Category: nonconst |
| InvasionPlannerPopup | GetSelectedAdmirals |  | Unknown | Category: nonconst |
| InvasionPlannerPopup | GetSelectedArmies |  | Unknown | Category: nonconst |
| InvasionPlannerPopup | GetSelectedFleets |  | Unknown | Category: nonconst |
| InvasionPlannerPopup | GetSelectedGenerals |  | Unknown | Category: nonconst |
| InvasionPlannerPopup | GetSlowestArmy |  | MilitaryFormation | Category: nonconst |
| InvasionPlannerPopup | GetSlowestFleet |  | MilitaryFormation | Category: nonconst |
| InvasionPlannerPopup | GetSourceState |  | State | Category: nonconst |
| InvasionPlannerPopup | GetTargetState |  | State | Category: nonconst |
| InvasionPlannerPopup | GetTravelDaysDesc |  | CString | Category: nonconst |
| InvasionPlannerPopup | GetTravelTimeDesc |  | CString | Category: nonconst |
| InvasionPlannerPopup | HasAdvancingGeneral |  | bool |  |
| InvasionPlannerPopup | HasInterceptingAdmiral |  | bool |  |
| InvasionPlannerPopup | HasNavalInvasionContext |  | bool |  |
| InvasionPlannerPopup | HasSelectedNecessaryFormations |  | bool |  |
| InvasionPlannerPopup | IsMilitaryFormationSelected | 1. Unknown | bool |  |
| InvasionPlannerPopup | OnSelectedArmy | 1. Unknown | void |  |
| InvasionPlannerPopup | OnSelectedFleet | 1. Unknown | void |  |
| InvasionPlannerPopup | RemoveFormation | 1. Unknown | void |  |
| InvasionPlannerPopup | Self |  | InvasionPlannerPopup |  |
| InvasionPlannerPopup | StartInvasion |  | Command |  |
| JominiGUISetting | AccessSelf |  | JominiGUISetting | Category: const |
| JominiGUISetting | GetDesc |  | CString | Category: nonconst |
| JominiGUISetting | HasChanged |  | bool |  |
| JominiGUISetting | HasChangedSinceStartup |  | bool |  |
| JominiGUISetting | Self |  | JominiGUISetting |  |
| JominiGUISetting | ShouldShow |  | bool |  |
| JominiGameRules | AccessSelf |  | JominiGameRules | Category: const |
| JominiGameRules | ApplySettings |  | void |  |
| JominiGameRules | DeletePresetAtIndex | 1. int32 | void |  |
| JominiGameRules | DeletePresetWithName | 1. CString | void |  |
| JominiGameRules | GetInvalidPresetNameTooltip |  | CString | Category: nonconst |
| JominiGameRules | GetPresetSaveName |  | CString | Category: nonconst |
| JominiGameRules | GetRulePresets |  | Unknown | Category: nonconst |
| JominiGameRules | GetSelectedPreset |  | GuiGameRulePreset | Category: nonconst |
| JominiGameRules | GetSelectedPresetIndex |  | int32 | Category: nonconst |
| JominiGameRules | GetSettings |  | Unknown | Category: nonconst |
| JominiGameRules | HasPresetWithName | 1. CString | bool |  |
| JominiGameRules | HasRuleWithFlag | 1. Unknown | bool |  |
| JominiGameRules | HasValidPresetSelected |  | bool |  |
| JominiGameRules | Hide |  | void |  |
| JominiGameRules | HidePresetWindow |  | void |  |
| JominiGameRules | IsIronman |  | bool |  |
| JominiGameRules | IsPresetWindowShown |  | bool |  |
| JominiGameRules | IsValidPresetName |  | bool |  |
| JominiGameRules | OnPresetSaveNameChange | 1. Unknown | void |  |
| JominiGameRules | OnPresetSaveNameEdit |  | void |  |
| JominiGameRules | OnSelectPreset |  | void |  |
| JominiGameRules | ResetAllToDefaults |  | void |  |
| JominiGameRules | SavePreset |  | void |  |
| JominiGameRules | Self |  | JominiGameRules |  |
| JominiGameRules | SetIronman | 1. Unknown | void |  |
| JominiGameRules | SetPresetSaveName |  | void |  |
| JominiGameRules | ShowPresetWindow |  | void |  |
| JominiNotification | AccessSelf |  | JominiNotification | Category: const |
| JominiNotification | GetAcceptButtonText |  | CString | Category: nonconst |
| JominiNotification | GetDate |  | Date | Category: nonconst |
| JominiNotification | GetDateOrTimestamp |  | CString | Category: nonconst |
| JominiNotification | GetDeclineButtonText |  | CString | Category: nonconst |
| JominiNotification | GetText |  | CString | Category: nonconst |
| JominiNotification | GetTimestamp |  | CString | Category: nonconst |
| JominiNotification | GetTitle |  | CString | Category: nonconst |
| JominiNotification | HasDate |  | bool |  |
| JominiNotification | HasOnAccept |  | bool |  |
| JominiNotification | HasOnDecline |  | bool |  |
| JominiNotification | OnAccept |  | void |  |
| JominiNotification | OnDecline |  | void |  |
| JominiNotification | OnNotificationClick |  | void |  |
| JominiNotification | Self |  | JominiNotification |  |
| JominiNotificationOverlay | AccessSelf |  | JominiNotificationOverlay | Category: const |
| JominiNotificationOverlay | GetAlertCount |  | int32 | Category: nonconst |
| JominiNotificationOverlay | GetAlerts |  | Unknown | Category: nonconst |
| JominiNotificationOverlay | GetNotificationCategoryCount | 1. Unknown | int32 | Category: nonconst |
| JominiNotificationOverlay | GetNotificationCount |  | int32 | Category: nonconst |
| JominiNotificationOverlay | GetNotifications |  | Unknown | Category: nonconst |
| JominiNotificationOverlay | HideSidebar |  | void |  |
| JominiNotificationOverlay | Self |  | JominiNotificationOverlay |  |
| JominiNotificationOverlay | ShowSidebar |  | void |  |
| JominiNotificationOverlay | ToggleSidebar |  | void |  |
| JominiPasswordPopup | AccessSelf |  | JominiPasswordPopup | Category: const |
| JominiPasswordPopup | OnDecline |  | void |  |
| JominiPasswordPopup | OnSubmit |  | void |  |
| JominiPasswordPopup | Self |  | JominiPasswordPopup |  |
| JominiServer | AccessSelf |  | JominiServer | Category: const |
| JominiServer | GetHasPassword |  | bool | Category: nonconst |
| JominiServer | GetMaxPlayers |  | int32 | Category: nonconst |
| JominiServer | GetName |  | CString | Category: nonconst |
| JominiServer | GetNumPlayers |  | int32 | Category: nonconst |
| JominiServer | GetStatus |  | CString | Category: nonconst |
| JominiServer | GetVersion |  | CString | Category: nonconst |
| JominiServer | IsSameVersion |  | bool |  |
| JominiServer | Join |  | void |  |
| JominiServer | Self |  | JominiServer |  |
| JominiServerBrowserGui | AccessSelf |  | JominiServerBrowserGui | Category: const |
| JominiServerBrowserGui | AccessServers |  | Unknown | Category: const |
| JominiServerBrowserGui | GetServers |  | Unknown | Category: nonconst |
| JominiServerBrowserGui | IsCrossPlatformFilterSet |  | bool |  |
| JominiServerBrowserGui | IsEmptyFilterSet |  | bool |  |
| JominiServerBrowserGui | IsFullFilterSet |  | bool |  |
| JominiServerBrowserGui | IsHasPasswordFilterSet |  | bool |  |
| JominiServerBrowserGui | IsRefreshing |  | bool |  |
| JominiServerBrowserGui | IsSameModsFilterSet |  | bool |  |
| JominiServerBrowserGui | IsSameVersionFilterSet |  | bool |  |
| JominiServerBrowserGui | IsSortAscending |  | bool |  |
| JominiServerBrowserGui | IsSortedBy | 1. Unknown | bool |  |
| JominiServerBrowserGui | JoinServerWithId |  | void |  |
| JominiServerBrowserGui | JoinServerWithTextWidget | 1. Unknown | void |  |
| JominiServerBrowserGui | OnFilterTextEdit |  | void |  |
| JominiServerBrowserGui | RefreshServers |  | void |  |
| JominiServerBrowserGui | Self |  | JominiServerBrowserGui |  |
| JominiServerBrowserGui | SetFilterText |  | void |  |
| JominiServerBrowserGui | SetServerId |  | void |  |
| JominiServerBrowserGui | Sort | 1. CString | void |  |
| JominiServerBrowserGui | ToggleCrossPlatformFilter |  | void |  |
| JominiServerBrowserGui | ToggleEmptyFilter |  | void |  |
| JominiServerBrowserGui | ToggleFullFilter |  | void |  |
| JominiServerBrowserGui | ToggleHasPasswordFilter |  | void |  |
| JominiServerBrowserGui | ToggleSameModsFilter |  | void |  |
| JominiServerBrowserGui | ToggleSameVersionFilter |  | void |  |
| JominiSettingsWindow | AccessActivePage |  | SettingsPage | Category: const |
| JominiSettingsWindow | AccessPages |  | Unknown | Category: const |
| JominiSettingsWindow | AccessSelf |  | JominiSettingsWindow | Category: const |
| JominiSettingsWindow | AllowApply |  | bool |  |
| JominiSettingsWindow | AppliedOnApply |  | bool |  |
| JominiSettingsWindow | AppliedOnRestart |  | bool |  |
| JominiSettingsWindow | Close |  | void |  |
| JominiSettingsWindow | GetInputActionName | 1. InputActionBinding | CString | Category: nonconst |
| JominiSettingsWindow | GetInputBindingText |  | CString | Category: nonconst |
| JominiSettingsWindow | GetKeyCodeName | 1. InputActionBinding 2. int32 | CString | Category: nonconst |
| JominiSettingsWindow | GetUserBindingFileName |  | CString | Category: nonconst |
| JominiSettingsWindow | GetWarningText |  | CString | Category: nonconst |
| JominiSettingsWindow | HasChanged |  | bool |  |
| JominiSettingsWindow | HasUserBindingFileName |  | bool |  |
| JominiSettingsWindow | Hide |  | void |  |
| JominiSettingsWindow | IsConfirmButtonEnabled |  | bool |  |
| JominiSettingsWindow | IsCurrentActivePageId | 1. Unknown | bool |  |
| JominiSettingsWindow | IsInputPopUpEnabled |  | bool |  |
| JominiSettingsWindow | OnApply |  | void |  |
| JominiSettingsWindow | OnClickCancel |  | void |  |
| JominiSettingsWindow | OnClickClear |  | void |  |
| JominiSettingsWindow | OnClickConfirm |  | void |  |
| JominiSettingsWindow | OnClickLoadDefaultProfile |  | void |  |
| JominiSettingsWindow | OnClickLoadProfile |  | void |  |
| JominiSettingsWindow | OnClickSaveProfile |  | void |  |
| JominiSettingsWindow | OnEditProfileFileName |  | void |  |
| JominiSettingsWindow | RequireRestart |  | bool |  |
| JominiSettingsWindow | Restore |  | void |  |
| JominiSettingsWindow | Save |  | void |  |
| JominiSettingsWindow | SaveAndClose |  | void |  |
| JominiSettingsWindow | Self |  | JominiSettingsWindow |  |
| JominiSettingsWindow | ShouldShowWarningText |  | bool |  |
| JominiSettingsWindow | Show |  | void |  |
| JominiSettingsWindow | ShowInputPopUp | 1. CPdxInputBindingSetting 2. InputActionBinding 3. int32 | void |  |
| JournalEntry | AccessModifier |  | Modifier | Category: const |
| JournalEntry | AccessSelf |  | JournalEntry | Category: const |
| JournalEntry | CalcCurrentGoalValue |  | CFixedPoint |  |
| JournalEntry | CalcInitialGoalAddValue |  | CFixedPoint |  |
| JournalEntry | CanComplete |  | bool |  |
| JournalEntry | CanStartTutorialLesson |  | bool |  |
| JournalEntry | CanStartTutorialLessonDesc |  | CString |  |
| JournalEntry | CanTimeOut |  | bool |  |
| JournalEntry | GetActivationTooltip |  | CString | Category: nonconst |
| JournalEntry | GetBaselineValue |  | CFixedPoint | Category: nonconst |
| JournalEntry | GetBuildingTarget |  | Building | Category: nonconst |
| JournalEntry | GetCompletionTooltip |  | CString | Category: nonconst |
| JournalEntry | GetCountry |  | Country | Category: nonconst |
| JournalEntry | GetCurrentBarProgress | 1. ScriptedProgressBar | float | Category: nonconst |
| JournalEntry | GetCurrentBarValue | 1. ScriptedProgressBar | CFixedPoint | Category: nonconst |
| JournalEntry | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| JournalEntry | GetFailureTooltip |  | CString | Category: nonconst |
| JournalEntry | GetGoalAddValue |  | CFixedPoint | Category: nonconst |
| JournalEntry | GetGoalDesc |  | CString | Category: nonconst |
| JournalEntry | GetGoalProgressPercent |  | CFixedPoint | Category: nonconst |
| JournalEntry | GetGoalProgressValue |  | CFixedPoint | Category: nonconst |
| JournalEntry | GetIcon |  | Unknown | Category: nonconst |
| JournalEntry | GetInvalidationTooltip |  | CString | Category: nonconst |
| JournalEntry | GetInvolvedCountries |  | Unknown | Category: nonconst |
| JournalEntry | GetInvolvedCountriesDesc |  | CString | Category: nonconst |
| JournalEntry | GetModifier |  | Modifier | Category: nonconst |
| JournalEntry | GetName |  | CString | Category: nonconst |
| JournalEntry | GetNumPossibleScriptedButtons |  | int32 | Category: nonconst |
| JournalEntry | GetOnActivationTooltip |  | CString | Category: nonconst |
| JournalEntry | GetOnCompleteTooltip |  | CString | Category: nonconst |
| JournalEntry | GetOnFailTooltip |  | CString | Category: nonconst |
| JournalEntry | GetOnInvalidationTooltip |  | CString | Category: nonconst |
| JournalEntry | GetOnTimeoutTooltip |  | CString | Category: nonconst |
| JournalEntry | GetProgressDesc |  | CString | Category: nonconst |
| JournalEntry | GetReason |  | CString | Category: nonconst |
| JournalEntry | GetRemainingProgressValue |  | CFixedPoint | Category: nonconst |
| JournalEntry | GetScriptedButtons |  | Unknown | Category: nonconst |
| JournalEntry | GetScriptedProgressBars |  | Unknown | Category: nonconst |
| JournalEntry | GetStatusDesc |  | CString | Category: nonconst |
| JournalEntry | GetTarget |  | Scope | Category: nonconst |
| JournalEntry | GetTimedModifiers |  | Unknown | Category: nonconst |
| JournalEntry | GetTimedModifiersTooltip |  | CString | Category: nonconst |
| JournalEntry | GetTimeoutDaysLeft |  | int32 | Category: nonconst |
| JournalEntry | GetTimeoutTooltip |  | CString | Category: nonconst |
| JournalEntry | GetTooltip |  | CString | Category: nonconst |
| JournalEntry | GetTooltipTag |  | CString | Category: nonconst |
| JournalEntry | GetTotalGoalValue |  | CFixedPoint | Category: nonconst |
| JournalEntry | GetType |  | JournalEntryType | Category: nonconst |
| JournalEntry | HasGoal |  | bool |  |
| JournalEntry | HasHowTutorialLesson |  | bool |  |
| JournalEntry | HasProgressBar |  | bool |  |
| JournalEntry | HasWhyTutorialLesson |  | bool |  |
| JournalEntry | IsActive |  | bool |  |
| JournalEntry | IsBeingHighlighted |  | bool |  |
| JournalEntry | IsBeingTutorialHighlighted |  | bool |  |
| JournalEntry | IsComplete |  | bool |  |
| JournalEntry | IsContextless |  | bool |  |
| JournalEntry | IsDead |  | bool |  |
| JournalEntry | IsPinnedInOutliner |  | bool |  |
| JournalEntry | IsProgressing |  | bool |  |
| JournalEntry | IsValid |  | bool |  |
| JournalEntry | MakeScope |  | Scope |  |
| JournalEntry | Self |  | JournalEntry |  |
| JournalEntry | ShowProgressbarAsMonths |  | bool |  |
| JournalEntry | ShowProgressbarAsTime |  | bool |  |
| JournalEntry | ShowProgressbarAsWeeks |  | bool |  |
| JournalEntry | StartHowTutorialLesson |  | void |  |
| JournalEntry | StartWhyTutorialLesson |  | void |  |
| JournalEntry | TogglePinInOutliner |  | void |  |
| JournalEntryGroup | AccessSelf |  | JournalEntryGroup | Category: const |
| JournalEntryGroup | GetActiveJournalEntryTypes | 1. Country | Unknown | Category: nonconst |
| JournalEntryGroup | GetInactiveJournalEntryTypes | 1. Unknown | Unknown | Category: nonconst |
| JournalEntryGroup | GetKey |  | CString | Category: nonconst |
| JournalEntryGroup | GetName |  | CString | Category: nonconst |
| JournalEntryGroup | GetTooltipTag |  | CString | Category: nonconst |
| JournalEntryGroup | Self |  | JournalEntryGroup |  |
| JournalEntryPanel | AccessJournalEntry |  | JournalEntry | Category: const |
| JournalEntryPanel | AccessSelf |  | JournalEntryPanel | Category: const |
| JournalEntryPanel | GetJournalEntry |  | JournalEntry | Category: nonconst |
| JournalEntryPanel | Self |  | JournalEntryPanel |  |
| JournalEntryType | AccessSelf |  | JournalEntryType | Category: const |
| JournalEntryType | GetGroup |  | JournalEntryGroup | Category: nonconst |
| JournalEntryType | GetIcon |  | Unknown | Category: nonconst |
| JournalEntryType | GetLobbyDesc |  | CString | Category: nonconst |
| JournalEntryType | GetName |  | CString | Category: nonconst |
| JournalEntryType | GetTooltipTag |  | CString | Category: nonconst |
| JournalEntryType | Self |  | JournalEntryType |  |
| JournalPanel | AccessSelf |  | JournalPanel | Category: const |
| JournalPanel | Self |  | JournalPanel |  |
| KeyframeEditor | AccessSelf |  | KeyframeEditor | Category: const |
| KeyframeEditor | OnLaneClick | 1. PdxGuiWidget | void |  |
| KeyframeEditor | Self |  | KeyframeEditor |  |
| KeyframeEventEditor | AccessSelf |  | KeyframeEventEditor | Category: const |
| KeyframeEventEditor | EventDescription |  | Unknown |  |
| KeyframeEventEditor | HasEvent |  | bool |  |
| KeyframeEventEditor | HasKeyframe |  | bool |  |
| KeyframeEventEditor | IsAudioHandler |  | bool |  |
| KeyframeEventEditor | IsVfxHandler |  | bool |  |
| KeyframeEventEditor | KeyframeEditorId |  | Unknown |  |
| KeyframeEventEditor | KeyframeId |  | CString |  |
| KeyframeEventEditor | Self |  | KeyframeEventEditor |  |
| KeyframeWidget | AccessSelf |  | KeyframeWidget | Category: const |
| KeyframeWidget | GetValue |  | float | Category: nonconst |
| KeyframeWidget | Self |  | KeyframeWidget |  |
| Label | AccessSelf |  | Label | Category: const |
| Label | GetDesc |  | CString | Category: nonconst |
| Label | GetName |  | CString | Category: nonconst |
| Label | GetTooltipTag |  | CString | Category: nonconst |
| Label | GetTypeList |  | CString | Category: nonconst |
| Label | Self |  | Label |  |
| LabelingHelper | AccessSelf |  | LabelingHelper | Category: const |
| LabelingHelper | CapitalizeOnlyFirst | 1. CString | CString |  |
| LabelingHelper | GetDaysLocWithTooltip | 1. int32 2. Localization | CString | Category: nonconst |
| LabelingHelper | GetDaysLocWithoutTooltip | 1. int32 | CString | Category: nonconst |
| LabelingHelper | GetFormattedDays | 1. int32 | CString | Category: nonconst |
| LabelingHelper | GetIconForStandardOfLiving | 1. Unknown | CString | Category: nonconst |
| LabelingHelper | GetIconForStandardOfLivingCFixedPoint | 1. CFixedPoint | CString | Category: nonconst |
| LabelingHelper | GetIconForStandardOfLivingFloat | 1. Unknown | CString | Category: nonconst |
| LabelingHelper | GetLabelForPopularityCFixedPoint | 1. CFixedPoint | CString | Category: nonconst |
| LabelingHelper | GetLabelForPopularityFloat | 1. Unknown | CString | Category: nonconst |
| LabelingHelper | GetLabelForRadicalism | 1. CFixedPoint | CString | Category: nonconst |
| LabelingHelper | GetLabelForStandardOfLiving | 1. int32 | CString | Category: nonconst |
| LabelingHelper | GetLabelForStandardOfLivingCFixedPoint | 1. CFixedPoint | CString | Category: nonconst |
| LabelingHelper | GetLabelForStandardOfLivingCFixedPointFormatFromExpected | 1. Unknown 2. Unknown | CString | Category: nonconst |
| LabelingHelper | GetLabelForStandardOfLivingFloat | 1. float | CString | Category: nonconst |
| LabelingHelper | GetLabelForStandardOfLivingFloatFormatFromExpected | 1. Unknown 2. Unknown | CString | Category: nonconst |
| LabelingHelper | GetLabelForStandardOfLivingFormatFromExpected | 1. Unknown 2. Unknown | CString | Category: nonconst |
| LabelingHelper | GetLabelForStandardOfLivingNoIcon | 1. Unknown | CString | Category: nonconst |
| LabelingHelper | GetLabelForStandardOfLivingNoIconCFixedPoint | 1. CFixedPoint | CString | Category: nonconst |
| LabelingHelper | GetLabelForStandardOfLivingNoIconCFixedPointFormatFromExpected | 1. CFixedPoint 2. CFixedPoint | CString | Category: nonconst |
| LabelingHelper | GetLabelForStandardOfLivingNoIconFloat | 1. Unknown | CString | Category: nonconst |
| LabelingHelper | GetLabelForStandardOfLivingNoIconFloatFormatFromExpected | 1. Unknown 2. Unknown | CString | Category: nonconst |
| LabelingHelper | GetLabelForStandardOfLivingNoIconFormatFromExpected | 1. Unknown 2. Unknown | CString | Category: nonconst |
| LabelingHelper | GetLabelForSupport | 1. CFixedPoint | CString | Category: nonconst |
| LabelingHelper | GetMultiTypeGameTimeDifferenceFromDays | 1. int32 2. int32 3. CString | CString | Category: nonconst |
| LabelingHelper | GetMultiTypeGameTimeDifferenceFromMonths | 1. int32 2. int32 3. CString | CString | Category: nonconst |
| LabelingHelper | GetMultiTypeGameTimeDifferenceFromWeeks | 1. int32 2. int32 3. CString | CString | Category: nonconst |
| LabelingHelper | GetPriceCompareDesc | 1. Unknown 2. Unknown 3. Unknown | CString | Category: nonconst |
| LabelingHelper | GetPriceCompareDescShort | 1. Unknown | CString | Category: nonconst |
| LabelingHelper | GetPriceCompareIcon | 1. CFixedPoint | CString | Category: nonconst |
| LabelingHelper | GetPriceCompareIconNoFormatting | 1. CFixedPoint | CString | Category: nonconst |
| LabelingHelper | GetPriceCompareIconNoTooltip | 1. Unknown | CString | Category: nonconst |
| LabelingHelper | GetRemainingDuration | 1. Date 2. CString | CString | Category: nonconst |
| LabelingHelper | Self |  | LabelingHelper |  |
| Law | AccessApprovingIGs |  | Unknown | Category: const |
| Law | AccessDisapprovingIGs |  | Unknown | Category: const |
| Law | AccessNeutralIGs |  | Unknown | Category: const |
| Law | AccessSelf |  | Law | Category: const |
| Law | AppliesTo | 1. Country | bool |  |
| Law | CannotEnactDesc |  | CString |  |
| Law | GetActiveAmendments |  | Unknown | Category: nonconst |
| Law | GetActiveGroupLaw |  | Law | Category: nonconst |
| Law | GetAffectedMovementsFromCancelEnact |  | Unknown | Category: nonconst |
| Law | GetAffectedMovementsFromStartEnact |  | Unknown | Category: nonconst |
| Law | GetAllAmendments |  | Unknown | Category: nonconst |
| Law | GetCancelTooltip |  | CString | Category: nonconst |
| Law | GetCheckpointAdvanceBreakdown |  | CString | Category: nonconst |
| Law | GetCheckpointAdvanceChance |  | CFixedPoint | Category: nonconst |
| Law | GetCheckpointAdvanceWithImpositionBreakdown |  | CString | Category: nonconst |
| Law | GetCheckpointAdvanceWithImpositionChance |  | CFixedPoint | Category: nonconst |
| Law | GetCheckpointBaseDays |  | int32 | Category: nonconst |
| Law | GetCheckpointDebateBreakdown |  | CString | Category: nonconst |
| Law | GetCheckpointDebateChance |  | CFixedPoint | Category: nonconst |
| Law | GetCheckpointDebateWithImpositionBreakdown |  | CString | Category: nonconst |
| Law | GetCheckpointDebateWithImpositionChance |  | CFixedPoint | Category: nonconst |
| Law | GetCheckpointEndDateString |  | CString | Category: nonconst |
| Law | GetCheckpointProgress |  | CFixedPoint | Category: nonconst |
| Law | GetCheckpointRemainingDays |  | int32 | Category: nonconst |
| Law | GetCheckpointStallBreakdown |  | CString | Category: nonconst |
| Law | GetCheckpointStallChance |  | CFixedPoint | Category: nonconst |
| Law | GetCheckpointStallWithImpositionBreakdown |  | CString | Category: nonconst |
| Law | GetCheckpointStallWithImpositionChance |  | CFixedPoint | Category: nonconst |
| Law | GetCheckpointSuccessBreakdown |  | CString | Category: nonconst |
| Law | GetCheckpointSuccessChance |  | CFixedPoint | Category: nonconst |
| Law | GetCheckpointSuccessWithImpositionBreakdown |  | CString | Category: nonconst |
| Law | GetCheckpointSuccessWithImpositionChance |  | CFixedPoint | Category: nonconst |
| Law | GetCheckpointTotalDays |  | int32 | Category: nonconst |
| Law | GetCheckpointTotalDaysBreakdown |  | CString | Category: nonconst |
| Law | GetCountry |  | Country | Category: nonconst |
| Law | GetCurrentEnactmentPhaseKey |  | CString | Category: nonconst |
| Law | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| Law | GetDailyProgress |  | CFixedPoint | Category: nonconst |
| Law | GetDesc |  | CString | Category: nonconst |
| Law | GetEnactmentLastCheckpointDate |  | Date | Category: nonconst |
| Law | GetEnactmentLastCheckpointResult |  | CString | Category: nonconst |
| Law | GetEnactmentPhase |  | int32 | Category: nonconst |
| Law | GetEnactmentPhaseKey | 1. Unknown | CString | Category: nonconst |
| Law | GetEnactmentSetbackCount |  | int32 | Category: nonconst |
| Law | GetExilesThatWouldJoinMovementSupportingLaw |  | Unknown | Category: nonconst |
| Law | GetExilesThatWouldStartMovementSupportingLaw |  | Unknown | Category: nonconst |
| Law | GetFlavor |  | CString | Category: nonconst |
| Law | GetFullName |  | CString | Category: nonconst |
| Law | GetFullNameWithStatus |  | CString | Category: nonconst |
| Law | GetGroup |  | LawGroup | Category: nonconst |
| Law | GetGroupName |  | CString | Category: nonconst |
| Law | GetIGsApproveList |  | CString | Category: nonconst |
| Law | GetIGsDisapproveList |  | CString | Category: nonconst |
| Law | GetIGsEnactmentList |  | CString | Category: nonconst |
| Law | GetIGsUndecidedList |  | CString | Category: nonconst |
| Law | GetIGsWithApprovalChanges |  | Unknown | Category: nonconst |
| Law | GetInstitution |  | Institution | Category: nonconst |
| Law | GetInstitutionModifier |  | Modifier | Category: nonconst |
| Law | GetInstitutionTooltip |  | CString | Category: nonconst |
| Law | GetInstitutionType |  | InstitutionType | Category: nonconst |
| Law | GetLawAlternatives |  | Unknown | Category: nonconst |
| Law | GetLawType |  | LawType | Category: nonconst |
| Law | GetMarginalizedIGsWithApprovalChanges |  | Unknown | Category: nonconst |
| Law | GetName |  | CString | Category: nonconst |
| Law | GetNameNoFormatting |  | CString | Category: nonconst |
| Law | GetNextEnactmentPhaseKey |  | CString | Category: nonconst |
| Law | GetNumIGsApprove |  | uint32 | Category: nonconst |
| Law | GetNumIGsDisapprove |  | uint32 | Category: nonconst |
| Law | GetNumIGsUndecided |  | uint32 | Category: nonconst |
| Law | GetNumSupportingInterestGroups |  | int32 | Category: nonconst |
| Law | GetOnActivateDesc |  | CString | Category: nonconst |
| Law | GetOnDeactivateDesc |  | CString | Category: nonconst |
| Law | GetOnEnactDesc |  | CString | Category: nonconst |
| Law | GetOnImposeDesc |  | CString | Category: nonconst |
| Law | GetPercentPolStrApprove |  | CFixedPoint | Category: nonconst |
| Law | GetPercentPolStrDisapprove |  | CFixedPoint | Category: nonconst |
| Law | GetPercentPolStrUndecided |  | CFixedPoint | Category: nonconst |
| Law | GetPreviousEnactmentPhaseKey |  | CString | Category: nonconst |
| Law | GetRadicalismDriftTargetOnMovementFromCancelEnact | 1. PoliticalMovement | CFixedPoint | Category: nonconst |
| Law | GetRadicalismDriftTargetOnMovementFromStartEnact | 1. PoliticalMovement | CFixedPoint | Category: nonconst |
| Law | GetRadicalismEffectOnMovementFromCancelEnact | 1. PoliticalMovement | CFixedPoint | Category: nonconst |
| Law | GetRadicalismEffectOnMovementFromStartEnact | 1. PoliticalMovement | CFixedPoint | Category: nonconst |
| Law | GetReplacedLawEffect |  | CString | Category: nonconst |
| Law | GetSupportingInterestGroupsBreakdown |  | CString | Category: nonconst |
| Law | GetSupportingInterestGroupsSummary |  | CString | Category: nonconst |
| Law | GetTexture |  | Unknown | Category: nonconst |
| Law | GetTooltip |  | CString | Category: nonconst |
| Law | GetTooltipNoRequirements |  | CString | Category: nonconst |
| Law | GetTooltipTag |  | CString | Category: nonconst |
| Law | GetTypeDesc |  | CString | Category: nonconst |
| Law | HasEnactmentLastCheckpoint |  | bool |  |
| Law | HasInstitution |  | bool |  |
| Law | HasNecessaryLaws |  | bool |  |
| Law | HasNecessaryTech |  | bool |  |
| Law | IsActive |  | bool |  |
| Law | IsBeingEnacted |  | bool |  |
| Law | IsMissingSupport |  | bool |  |
| Law | IsSelected |  | bool |  |
| Law | IsSupported |  | bool |  |
| Law | IsValid |  | bool |  |
| Law | IsVisible |  | bool |  |
| Law | MakeScope |  | Scope |  |
| Law | PredictApprovalChangesDuringEnactmentDesc |  | CString |  |
| Law | PredictLegitimacyChangeToEnact |  | int32 |  |
| Law | PredictLegitimacyChangeToEnactDesc |  | CString |  |
| Law | PredictMovementLoyalistsFromEnactmentDesc |  | CString |  |
| Law | PredictRadicalismChangesFromCancellationDesc |  | CString |  |
| Law | PredictRadicalismChangesFromEnactmentDesc |  | CString |  |
| Law | Select |  | void |  |
| Law | Self |  | Law |  |
| Law | StartEnacting |  | Command |  |
| Law | StartImposing |  | Command |  |
| Law | StopEnacting |  | Command |  |
| LawGroup | AccessSelf |  | LawGroup | Category: const |
| LawGroup | GetDesc |  | CString | Category: nonconst |
| LawGroup | GetFirstInstitutionType |  | InstitutionType | Category: nonconst |
| LawGroup | GetKey |  | CString | Category: nonconst |
| LawGroup | GetName |  | CString | Category: nonconst |
| LawGroup | GetNameNoFormatting |  | CString | Category: nonconst |
| LawGroup | GetNumEnactable |  | int32 | Category: nonconst |
| LawGroup | GetNumImposeOptions | 1. Country | int32 | Category: nonconst |
| LawGroup | GetNumPotentialEnactable |  | int32 | Category: nonconst |
| LawGroup | GetTexture |  | Unknown | Category: nonconst |
| LawGroup | GetTooltipTag |  | CString | Category: nonconst |
| LawGroup | Self |  | LawGroup |  |
| LawType | AccessSelf |  | LawType | Category: const |
| LawType | GetAdditionalEffectDesc |  | CString | Category: nonconst |
| LawType | GetBlockingRequirements | 1. Country | CString | Category: nonconst |
| LawType | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| LawType | GetDesc |  | CString | Category: nonconst |
| LawType | GetEffectDesc | 1. Country | CString | Category: nonconst |
| LawType | GetFullName |  | CString | Category: nonconst |
| LawType | GetFullNameWithStatus | 1. Unknown | CString | Category: nonconst |
| LawType | GetGroup |  | LawGroup | Category: nonconst |
| LawType | GetName |  | CString | Category: nonconst |
| LawType | GetNameNoFormatting |  | CString | Category: nonconst |
| LawType | GetParentLawType |  | LawType | Category: nonconst |
| LawType | GetRequirements | 1. Unknown | CString | Category: nonconst |
| LawType | GetTexture |  | Unknown | Category: nonconst |
| LawType | GetTooltip | 1. Country | CString | Category: nonconst |
| LawType | GetTooltipTag |  | CString | Category: nonconst |
| LawType | GetTypeDesc |  | CString | Category: nonconst |
| LawType | GetUnlocks |  | CString | Category: nonconst |
| LawType | MakeScope |  | Scope |  |
| LawType | Self |  | LawType |  |
| Layer | AccessSelf |  | Layer | Category: const |
| Layer | Self |  | Layer |  |
| LayerTreeItem | AccessSelf |  | LayerTreeItem | Category: const |
| LayerTreeItem | GetInstanceCount |  | int32 | Category: nonconst |
| LayerTreeItem | GetLayer |  | CString | Category: nonconst |
| LayerTreeItem | IsExpanded |  | bool |  |
| LayerTreeItem | IsGenerated |  | bool |  |
| LayerTreeItem | IsHidden |  | bool |  |
| LayerTreeItem | IsLayer |  | bool |  |
| LayerTreeItem | IsLocked |  | bool |  |
| LayerTreeItem | IsSelected |  | bool |  |
| LayerTreeItem | SelectItem |  | void |  |
| LayerTreeItem | Self |  | LayerTreeItem |  |
| LayerTreeItem | ToggleExclusiveLayerHidden |  | void |  |
| LayerTreeItem | ToggleExclusiveLock |  | void |  |
| LayerTreeItem | ToggleLayerHidden |  | void |  |
| LayerTreeItem | ToggleLock |  | void |  |
| LegalDocsViewer | AccessSelf |  | LegalDocsViewer | Category: const |
| LegalDocsViewer | Agree |  | void |  |
| LegalDocsViewer | GetDocumentText |  | CUTF8String | Category: nonconst |
| LegalDocsViewer | Hide |  | void |  |
| LegalDocsViewer | Self |  | LegalDocsViewer |  |
| LegalDocsViewer | Show |  | void |  |
| LegitimacyLevel | AccessSelf |  | LegitimacyLevel | Category: const |
| LegitimacyLevel | GetDeltaSign | 1. int32 2. int32 | int32 | Category: nonconst |
| LegitimacyLevel | GetEffects |  | CString | Category: nonconst |
| LegitimacyLevel | GetEffectsWithLoyaltiesGain | 1. Country | CString | Category: nonconst |
| LegitimacyLevel | GetLowerBound |  | int32 | Category: nonconst |
| LegitimacyLevel | GetName |  | CString | Category: nonconst |
| LegitimacyLevel | GetNameNoFormatting |  | CString | Category: nonconst |
| LegitimacyLevel | GetProgress | 1. Unknown | float | Category: nonconst |
| LegitimacyLevel | GetTooltipTag |  | CString | Category: nonconst |
| LegitimacyLevel | GetUpperBound |  | int32 | Category: nonconst |
| LegitimacyLevel | GetWidth |  | int32 | Category: nonconst |
| LegitimacyLevel | IsActive | 1. Unknown | bool |  |
| LegitimacyLevel | Self |  | LegitimacyLevel |  |
| LensOption | AccessSelf |  | LensOption | Category: const |
| LensOption | Activate |  | void |  |
| LensOption | CanActivate |  | bool |  |
| LensOption | GetCostText |  | CString | Category: nonconst |
| LensOption | GetDecreeType |  | DecreeType | Category: nonconst |
| LensOption | GetDiplomaticAction |  | DiplomaticAction | Category: nonconst |
| LensOption | GetKey |  | CString | Category: nonconst |
| LensOption | GetMapInteraction |  | MapInteraction | Category: nonconst |
| LensOption | GetNumberOfActiveOptions |  | int32 | Category: nonconst |
| LensOption | GetNumberOfInactiveSelectableOptions |  | int32 | Category: nonconst |
| LensOption | GetNumberOfSelections |  | int32 | Category: nonconst |
| LensOption | GetText |  | CString | Category: nonconst |
| LensOption | GetTexture |  | Unknown | Category: nonconst |
| LensOption | GetTooltip |  | CString | Category: nonconst |
| LensOption | IsActive |  | bool |  |
| LensOption | IsDecree |  | bool |  |
| LensOption | IsDiplomaticAction |  | bool |  |
| LensOption | IsMapInteraction |  | bool |  |
| LensOption | Self |  | LensOption |  |
| LensOption | ShouldShowNumberOfSelections |  | bool |  |
| LensOption | Toggle |  | void |  |
| LensTab | AccessSelf |  | LensTab | Category: const |
| LensTab | GetKey |  | CString | Category: nonconst |
| LensTab | GetText |  | CString | Category: nonconst |
| LensTab | GetTexture |  | Unknown | Category: nonconst |
| LensTab | GetTooltip |  | CString | Category: nonconst |
| LensTab | IsOpen |  | bool |  |
| LensTab | IsVisible |  | bool |  |
| LensTab | Open |  | void |  |
| LensTab | Self |  | LensTab |  |
| LensToolbar | AccessSelf |  | LensToolbar | Category: const |
| LensToolbar | ActivateOption | 1. CString | void |  |
| LensToolbar | Close |  | void |  |
| LensToolbar | GetCurrentTab |  | LensTab | Category: nonconst |
| LensToolbar | GetMaxNumItemsPerRow |  | int32 | Category: nonconst |
| LensToolbar | GetOptions |  | Unknown | Category: nonconst |
| LensToolbar | GetTabs |  | Unknown | Category: nonconst |
| LensToolbar | IsAnyLensOpen |  | bool |  |
| LensToolbar | IsLensOpen | 1. CString | bool |  |
| LensToolbar | Open | 1. Unknown | void |  |
| LensToolbar | OpenTab | 1. Unknown | void |  |
| LensToolbar | Self |  | LensToolbar |  |
| LensToolbar | Toggle | 1. CString | void |  |
| LensToolbar | ToggleOption | 1. Unknown | void |  |
| LibertyDesireLevel | AccessSelf |  | LibertyDesireLevel | Category: const |
| LibertyDesireLevel | GetBackground |  | Unknown | Category: nonconst |
| LibertyDesireLevel | GetEffects |  | CString | Category: nonconst |
| LibertyDesireLevel | GetLowerBound |  | CFixedPoint | Category: nonconst |
| LibertyDesireLevel | GetName |  | CString | Category: nonconst |
| LibertyDesireLevel | GetNameNoFormatting |  | CString | Category: nonconst |
| LibertyDesireLevel | GetProgress | 1. Unknown | float | Category: nonconst |
| LibertyDesireLevel | GetTooltipTag |  | CString | Category: nonconst |
| LibertyDesireLevel | GetUpperBound |  | CFixedPoint | Category: nonconst |
| LibertyDesireLevel | GetWidth |  | CFixedPoint | Category: nonconst |
| LibertyDesireLevel | IsActive | 1. CFixedPoint | bool |  |
| LibertyDesireLevel | Self |  | LibertyDesireLevel |  |
| LoadIngameWindow | AccessSelf |  | LoadIngameWindow | Category: const |
| LoadIngameWindow | GetSaveGames |  | Unknown | Category: nonconst |
| LoadIngameWindow | GetSelectedSavegame |  | SaveGameItem | Category: nonconst |
| LoadIngameWindow | HasSelectedSavegame |  | bool |  |
| LoadIngameWindow | IsEmpty |  | bool |  |
| LoadIngameWindow | OnBack |  | void |  |
| LoadIngameWindow | OnDelete |  | void |  |
| LoadIngameWindow | OnDeleteAll |  | void |  |
| LoadIngameWindow | OnLoad |  | void |  |
| LoadIngameWindow | OnShowInvalidSavegames |  | void |  |
| LoadIngameWindow | Self |  | LoadIngameWindow |  |
| LoadIngameWindow | ShouldShowInvalidSavegames |  | bool |  |
| LoadingScreenManager | AccessSelf |  | LoadingScreenManager | Category: const |
| LoadingScreenManager | GetConceptTip |  | GameConceptType | Category: nonconst |
| LoadingScreenManager | GetStaticTip |  | CString | Category: nonconst |
| LoadingScreenManager | HasConceptTip |  | bool |  |
| LoadingScreenManager | HasStaticTip |  | bool |  |
| LoadingScreenManager | RollLoadingTip |  | void |  |
| LoadingScreenManager | Self |  | LoadingScreenManager |  |
| LobbyPlayer | AccessSelf |  | LobbyPlayer | Category: const |
| LobbyPlayer | CanRemovePlayer |  | bool |  |
| LobbyPlayer | GetID |  | int32 | Category: nonconst |
| LobbyPlayer | GetLoadingString |  | CString | Category: nonconst |
| LobbyPlayer | GetName |  | CString | Category: nonconst |
| LobbyPlayer | GetTransferProgress |  | float | Category: nonconst |
| LobbyPlayer | HasPlayable |  | bool |  |
| LobbyPlayer | IsHost |  | bool |  |
| LobbyPlayer | IsHotjoining |  | bool |  |
| LobbyPlayer | IsLocalPlayer |  | bool |  |
| LobbyPlayer | IsObserver |  | bool |  |
| LobbyPlayer | IsReady |  | bool |  |
| LobbyPlayer | RemovePlayer |  | void |  |
| LobbyPlayer | Self |  | LobbyPlayer |  |
| LobbyPlayer | ShowReadyStatus |  | bool |  |
| LobbyView | AccessSelectedPlayable |  | Playable | Category: const |
| LobbyView | AccessSelf |  | LobbyView | Category: const |
| LobbyView | CanControlSelected |  | bool |  |
| LobbyView | CanGoBack |  | bool |  |
| LobbyView | CanReady |  | bool |  |
| LobbyView | CanStart |  | bool |  |
| LobbyView | ClearSelection |  | void |  |
| LobbyView | ControlSelected |  | void |  |
| LobbyView | CopyServerID |  | void |  |
| LobbyView | GetControlToolTip |  | CString | Category: nonconst |
| LobbyView | GetEnabledDLCs |  | Unknown | Category: nonconst |
| LobbyView | GetEnabledMods |  | Unknown | Category: nonconst |
| LobbyView | GetGoBackToolTip |  | CString | Category: nonconst |
| LobbyView | GetOpenMultiplayerToolTip |  | CString | Category: nonconst |
| LobbyView | GetOtherPlayersCount |  | int32 | Category: nonconst |
| LobbyView | GetReadyToolTip |  | CString | Category: nonconst |
| LobbyView | GetSelectText |  | CString | Category: nonconst |
| LobbyView | GetTransferSpeedSettingIndex |  | CVector2i | Category: nonconst |
| LobbyView | GetTransferSpeedSettingOptions |  | Unknown | Category: nonconst |
| LobbyView | GoBack |  | void |  |
| LobbyView | HasEnabledDLCs |  | bool |  |
| LobbyView | HasEnabledMods |  | bool |  |
| LobbyView | HasGameConfigurationWindow |  | bool |  |
| LobbyView | HasSelectedPlayable |  | bool |  |
| LobbyView | HasServerInfo |  | bool |  |
| LobbyView | IsAutoAccept |  | bool |  |
| LobbyView | IsInvite |  | bool |  |
| LobbyView | IsObserver |  | bool |  |
| LobbyView | IsPublicCrossplay |  | bool |  |
| LobbyView | IsPublicNoCrossplay |  | bool |  |
| LobbyView | IsReady |  | bool |  |
| LobbyView | OnNameEdit |  | void |  |
| LobbyView | OnPasswordEdit |  | void |  |
| LobbyView | OnTransferSpeedSettingChanged |  | void |  |
| LobbyView | OpenGameConfigurationWindow |  | void |  |
| LobbyView | OpenMultiplayer |  | void |  |
| LobbyView | Players |  | Unknown |  |
| LobbyView | Ready |  | void |  |
| LobbyView | Self |  | LobbyView |  |
| LobbyView | SetInvite |  | void |  |
| LobbyView | SetName |  | void |  |
| LobbyView | SetPassword |  | void |  |
| LobbyView | SetPublicCrossplay |  | void |  |
| LobbyView | SetPublicNoCrossplay |  | void |  |
| LobbyView | SetShowPlayerList | 1. Unknown | void |  |
| LobbyView | ShouldShowEnabledDLCs |  | bool |  |
| LobbyView | ShouldShowEnabledMods |  | bool |  |
| LobbyView | ShowHosting |  | bool |  |
| LobbyView | ShowModifyServer |  | bool |  |
| LobbyView | ShowPlayerList |  | bool |  |
| LobbyView | Start |  | void |  |
| LobbyView | StartToolTip |  | CString |  |
| LobbyView | ToggleAutoAccept |  | void |  |
| LobbyView | ToggleObserve |  | void |  |
| LobbyView | ToggleShowEnabledDLCs |  | void |  |
| LobbyView | ToggleShowEnabledMods |  | void |  |
| LobbyView | ToggleVisibility |  | void |  |
| LobbyView | UnReady |  | void |  |
| Location | AccessSelf |  | Location | Category: const |
| Location | GetID |  | CString | Category: nonconst |
| Location | GetName |  | CString | Category: nonconst |
| Location | GetType |  | CString | Category: nonconst |
| Location | GoToLocation |  | void |  |
| Location | Self |  | Location |  |
| LocationFinder | AccessSelf |  | LocationFinder | Category: const |
| LocationFinder | Close |  | void |  |
| LocationFinder | GetLocations |  | Unknown | Category: nonconst |
| LocationFinder | Self |  | LocationFinder |  |
| LogEntry | AccessSelf |  | LogEntry | Category: const |
| LogEntry | GetColor |  | CVector4f | Category: nonconst |
| LogEntry | GetText |  | CString | Category: nonconst |
| LogEntry | GetTime |  | CString | Category: nonconst |
| LogEntry | Self |  | LogEntry |  |
| LogViewer | AccessCategories |  | Unknown | Category: const |
| LogViewer | AccessSelf |  | LogViewer | Category: const |
| LogViewer | AccessTypes |  | Unknown | Category: const |
| LogViewer | DecreaseLogInfoExpandSize |  | void |  |
| LogViewer | FlushLog |  | void |  |
| LogViewer | GetFilteredNum |  | int32 | Category: nonconst |
| LogViewer | GetLastLogEntry |  | LogViewerEntry | Category: nonconst |
| LogViewer | GetLogInfoExpandSize |  | int32 | Category: nonconst |
| LogViewer | GetLogInfoExpandSizeVector | 1. float | CVector2f | Category: nonconst |
| LogViewer | GetSelectedLogEntry |  | LogViewerEntry | Category: nonconst |
| LogViewer | GetTextFilter |  | CUTF8String | Category: nonconst |
| LogViewer | HasEntries |  | bool |  |
| LogViewer | IncreaseLogInfoExpandSize |  | void |  |
| LogViewer | IsAnyEntrySelected |  | bool |  |
| LogViewer | OpenLinkedLogViewer |  | void |  |
| LogViewer | OpenLinkedLogViewerFilteredByType | 1. int32 | void |  |
| LogViewer | ResetFilters |  | void |  |
| LogViewer | ResetTextFilter |  | void |  |
| LogViewer | Self |  | LogViewer |  |
| LogViewer | SetTextFilter |  | void |  |
| LogViewer | ToggleHidden |  | void |  |
| LogViewerCategory | AccessSelf |  | LogViewerCategory | Category: const |
| LogViewerCategory | GetFilteredCount |  | int32 | Category: nonconst |
| LogViewerCategory | GetIcon |  | Unknown | Category: nonconst |
| LogViewerCategory | GetIsFiltered |  | bool | Category: nonconst |
| LogViewerCategory | GetName |  | CString | Category: nonconst |
| LogViewerCategory | Self |  | LogViewerCategory |  |
| LogViewerCategory | SetIsFiltered | 1. Unknown | void |  |
| LogViewerEntry | AccessSelf |  | LogViewerEntry | Category: const |
| LogViewerEntry | ContainsScriptFile |  | bool |  |
| LogViewerEntry | GetFileLineNo |  | int32 | Category: nonconst |
| LogViewerEntry | GetFilename |  | Unknown | Category: nonconst |
| LogViewerEntry | GetFilepath |  | CString | Category: nonconst |
| LogViewerEntry | GetIcon |  | Unknown | Category: nonconst |
| LogViewerEntry | GetMessage |  | CString | Category: nonconst |
| LogViewerEntry | GetTimestampLong |  | CString | Category: nonconst |
| LogViewerEntry | GetTimestampShort |  | CString | Category: nonconst |
| LogViewerEntry | IsSelected |  | bool |  |
| LogViewerEntry | OpenInCodeEditor |  | void |  |
| LogViewerEntry | OpenInEditor |  | void |  |
| LogViewerEntry | OpenInExternalLogViewer |  | void |  |
| LogViewerEntry | OpenInScriptEditor |  | void |  |
| LogViewerEntry | Self |  | LogViewerEntry |  |
| LogViewerEntry | SetSelected | 1. bool | void |  |
| LogViewerType | AccessSelf |  | LogViewerType | Category: const |
| LogViewerType | GetFilteredCount |  | int32 | Category: nonconst |
| LogViewerType | GetIcon |  | Unknown | Category: nonconst |
| LogViewerType | GetId |  | int32 | Category: nonconst |
| LogViewerType | GetIsFiltered |  | bool | Category: nonconst |
| LogViewerType | GetName |  | CString | Category: nonconst |
| LogViewerType | Self |  | LogViewerType |  |
| LogViewerType | SetIsFiltered | 1. bool | void |  |
| LoginView | AccessSelf |  | LoginView | Category: const |
| LoginView | GetEmail |  | CUTF8String | Category: nonconst |
| LoginView | GetErrorMessage |  | CUTF8String | Category: nonconst |
| LoginView | GetLoginString |  | CUTF8String | Category: nonconst |
| LoginView | GetPassword |  | CUTF8String | Category: nonconst |
| LoginView | Hide |  | void |  |
| LoginView | IsChangingUserName |  | bool |  |
| LoginView | IsConnectingAccount |  | bool |  |
| LoginView | IsEmailSent |  | bool |  |
| LoginView | IsEmptyUserNamePrompt |  | bool |  |
| LoginView | IsLoggedIn |  | bool |  |
| LoginView | IsLogin |  | bool |  |
| LoginView | IsRestoringPassword |  | bool |  |
| LoginView | IsSuccessfulSetName |  | bool |  |
| LoginView | IsValidLoginInfo |  | bool |  |
| LoginView | Login |  | void |  |
| LoginView | Logout |  | void |  |
| LoginView | OnUserNameChange |  | void |  |
| LoginView | ResetPassword |  | void |  |
| LoginView | Self |  | LoginView |  |
| LoginView | SetEmail |  | void |  |
| LoginView | SetPassword |  | void |  |
| LoginView | SetState | 1. CString | void |  |
| LoginView | SetUserName |  | void |  |
| LoginView | Show |  | void |  |
| LoginView | ToggleConnected |  | void |  |
| LoyaltyType | AccessSelf |  | LoyaltyType | Category: const |
| LoyaltyType | GetColor |  | CVector4f | Category: nonconst |
| LoyaltyType | GetCountryGraphicalRatio | 1. Country | float | Category: nonconst |
| LoyaltyType | GetCountryTooltip | 1. Country | CString | Category: nonconst |
| LoyaltyType | GetCountryTrend | 1. Country | DataTrend | Category: nonconst |
| LoyaltyType | GetHeader |  | CString | Category: nonconst |
| LoyaltyType | GetInterestGroupTooltip | 1. Unknown | CString | Category: nonconst |
| LoyaltyType | GetInterestGroupTrend | 1. Unknown | DataTrend | Category: nonconst |
| LoyaltyType | HasTrend |  | bool |  |
| LoyaltyType | Self |  | LoyaltyType |  |
| MPConfig | AccessSelf |  | MPConfig | Category: const |
| MPConfig | GetOfflinePlayerToolTip |  | CString | Category: nonconst |
| MPConfig | GetPrivateToolTip |  | CString | Category: nonconst |
| MPConfig | GetPublicToolTip |  | CString | Category: nonconst |
| MPConfig | IsCrossplayChecked |  | bool |  |
| MPConfig | IsHotjoinAutoAccept |  | bool |  |
| MPConfig | IsOffline |  | bool |  |
| MPConfig | IsPrivate |  | bool |  |
| MPConfig | IsPublic |  | bool |  |
| MPConfig | Self |  | MPConfig |  |
| MPConfig | SetOffline |  | void |  |
| MPConfig | SetPrivate |  | void |  |
| MPConfig | SetPublic |  | void |  |
| MPConfig | ToggleCrossplay |  | void |  |
| MPConfig | ToggleHotjoinAutoAccept |  | void |  |
| MapContentEditorMode | AccessSelf |  | MapContentEditorMode | Category: const |
| MapContentEditorMode | IsSelected |  | bool |  |
| MapContentEditorMode | Self |  | MapContentEditorMode |  |
| MapContentEditorOptions | AccessSelf |  | MapContentEditorOptions | Category: const |
| MapContentEditorOptions | ApplyChanges |  | void |  |
| MapContentEditorOptions | CanApplyChanges |  | bool |  |
| MapContentEditorOptions | CanErase |  | bool |  |
| MapContentEditorOptions | CanMakeGroupingOperation |  | bool |  |
| MapContentEditorOptions | CurrentLayerHasChanges |  | bool |  |
| MapContentEditorOptions | DiscardChanges |  | void |  |
| MapContentEditorOptions | GetAddToGroupModeDescription |  | CString | Category: nonconst |
| MapContentEditorOptions | GetApplyButtonDescription |  | CString | Category: nonconst |
| MapContentEditorOptions | GetEraserDescription |  | CString | Category: nonconst |
| MapContentEditorOptions | GetMapContentSelectionModeDescription |  | CString | Category: nonconst |
| MapContentEditorOptions | GetPaintModeDescription |  | CString | Category: nonconst |
| MapContentEditorOptions | GetRemoveFromGroupModeDescription |  | CString | Category: nonconst |
| MapContentEditorOptions | IsAddToGroupMode |  | bool |  |
| MapContentEditorOptions | IsAddToGroupModeAllowed |  | bool |  |
| MapContentEditorOptions | IsCurrentLayerPixelBased |  | bool |  |
| MapContentEditorOptions | IsEraserMode |  | bool |  |
| MapContentEditorOptions | IsEraserModeAllowed |  | bool |  |
| MapContentEditorOptions | IsMapContentSelectionMode |  | bool |  |
| MapContentEditorOptions | IsMapContentSelectionModeAllowed |  | bool |  |
| MapContentEditorOptions | IsPaintMode |  | bool |  |
| MapContentEditorOptions | IsPaintModeAllowed |  | bool |  |
| MapContentEditorOptions | IsPaintingAllowed |  | bool |  |
| MapContentEditorOptions | IsRemoveFromGroupMode |  | bool |  |
| MapContentEditorOptions | IsRemoveFromGroupModeAllowed |  | bool |  |
| MapContentEditorOptions | Self |  | MapContentEditorOptions |  |
| MapContentEditorOptions | SetAddToGroupMode |  | void |  |
| MapContentEditorOptions | SetEraserMode |  | void |  |
| MapContentEditorOptions | SetMapContentSelectionMode | 1. bool | void |  |
| MapContentEditorOptions | SetPaintMode |  | void |  |
| MapContentEditorOptions | SetRemoveFromGroupMode |  | void |  |
| MapContentEditorViewport | AccessSelf |  | MapContentEditorViewport | Category: const |
| MapContentEditorViewport | CancelPropertyPainting |  | void |  |
| MapContentEditorViewport | GetPropertyPaintingModeDesc |  | CString | Category: nonconst |
| MapContentEditorViewport | IsInPropertyPaintingMode |  | bool |  |
| MapContentEditorViewport | Self |  | MapContentEditorViewport |  |
| MapContentEntryDesc | AccessSelf |  | MapContentEntryDesc | Category: const |
| MapContentEntryDesc | ContainsErrors |  | bool |  |
| MapContentEntryDesc | GetErrorMessage |  | CString | Category: nonconst |
| MapContentEntryDesc | GetName |  | CString | Category: nonconst |
| MapContentEntryDesc | GetUniqueId |  | int32 | Category: nonconst |
| MapContentEntryDesc | IsDone |  | bool |  |
| MapContentEntryDesc | IsSelected |  | bool |  |
| MapContentEntryDesc | Self |  | MapContentEntryDesc |  |
| MapContentLayerDesc | AccessSelf |  | MapContentLayerDesc | Category: const |
| MapContentLayerDesc | GetName |  | CString | Category: nonconst |
| MapContentLayerDesc | Self |  | MapContentLayerDesc |  |
| MapContentPanel | AccessSelf |  | MapContentPanel | Category: const |
| MapContentPanel | CanCreateNewEntry |  | bool |  |
| MapContentPanel | CanDeleteAnySelectedEntry |  | bool |  |
| MapContentPanel | CreateNewEntry |  | void |  |
| MapContentPanel | DeleteSelectedEntries |  | void |  |
| MapContentPanel | GetCreateNewEntryTooltip |  | CString | Category: nonconst |
| MapContentPanel | GetDeleteSelectedEntriesTooltip |  | CString | Category: nonconst |
| MapContentPanel | Self |  | MapContentPanel |  |
| MapContentPropertyGroup | AccessSelf |  | MapContentPropertyGroup | Category: const |
| MapContentPropertyGroup | GetName |  | CString | Category: nonconst |
| MapContentPropertyGroup | IsExpanded |  | bool |  |
| MapContentPropertyGroup | Self |  | MapContentPropertyGroup |  |
| MapContentPropertyGroup | ToggleExpanded |  | void |  |
| MapContentPropertyGroupsGui | AccessSelf |  | MapContentPropertyGroupsGui | Category: const |
| MapContentPropertyGroupsGui | CanActivatePropertyPaintingMode |  | bool |  |
| MapContentPropertyGroupsGui | IsInPropertyPaintingModeForBool | 1. Unknown | bool |  |
| MapContentPropertyGroupsGui | IsInPropertyPaintingModeForCColor | 1. Unknown | bool |  |
| MapContentPropertyGroupsGui | IsInPropertyPaintingModeForCString | 1. Unknown | bool |  |
| MapContentPropertyGroupsGui | IsInPropertyPaintingModeForColor | 1. Unknown | bool |  |
| MapContentPropertyGroupsGui | IsInPropertyPaintingModeForEnum | 1. Unknown | bool |  |
| MapContentPropertyGroupsGui | IsInPropertyPaintingModeForFloat | 1. Unknown | bool |  |
| MapContentPropertyGroupsGui | IsInPropertyPaintingModeForInt | 1. Unknown | bool |  |
| MapContentPropertyGroupsGui | IsInPropertyPaintingModeForString | 1. Unknown | bool |  |
| MapContentPropertyGroupsGui | IsInPropertyPaintingModeForUint | 1. Unknown | bool |  |
| MapContentPropertyGroupsGui | Self |  | MapContentPropertyGroupsGui |  |
| MapContentPropertyGroupsGui | TogglePropertyPaintingModeBool | 1. Unknown | void |  |
| MapContentPropertyGroupsGui | TogglePropertyPaintingModeCColor | 1. Unknown | void |  |
| MapContentPropertyGroupsGui | TogglePropertyPaintingModeCString | 1. Unknown | void |  |
| MapContentPropertyGroupsGui | TogglePropertyPaintingModeColor | 1. Unknown | void |  |
| MapContentPropertyGroupsGui | TogglePropertyPaintingModeEnum | 1. Unknown | void |  |
| MapContentPropertyGroupsGui | TogglePropertyPaintingModeFloat | 1. Unknown | void |  |
| MapContentPropertyGroupsGui | TogglePropertyPaintingModeInt | 1. Unknown | void |  |
| MapContentPropertyGroupsGui | TogglePropertyPaintingModeString | 1. Unknown | void |  |
| MapContentPropertyGroupsGui | TogglePropertyPaintingModeUint | 1. Unknown | void |  |
| MapContentSelector | AccessSelf |  | MapContentSelector | Category: const |
| MapContentSelector | GetErrorsCount |  | int32 | Category: nonconst |
| MapContentSelector | GetSelectedCount |  | int32 | Category: nonconst |
| MapContentSelector | IsAllSelectedDone |  | bool |  |
| MapContentSelector | IsAllSelectedHasErrors |  | bool |  |
| MapContentSelector | IsShowProgress |  | bool |  |
| MapContentSelector | Self |  | MapContentSelector |  |
| MapContentSelector | SetSelectedDone | 1. Unknown | void |  |
| MapContentSelector | SetShowProgress | 1. Unknown | void |  |
| MapContentSelectorGui | AccessSelf |  | MapContentSelectorGui | Category: const |
| MapContentSelectorGui | ClearEntriesFilter |  | void |  |
| MapContentSelectorGui | GetCurrentLayerIndex |  | CVector2i | Category: nonconst |
| MapContentSelectorGui | GetEntriesFilter |  | CString | Category: nonconst |
| MapContentSelectorGui | GetEntriesWithErrorsCount |  | int32 | Category: nonconst |
| MapContentSelectorGui | GetSelectedEntriesCount |  | int32 | Category: nonconst |
| MapContentSelectorGui | IsAllSelectedDone |  | bool |  |
| MapContentSelectorGui | IsAllSelectedError |  | bool |  |
| MapContentSelectorGui | IsFilterErrors |  | bool |  |
| MapContentSelectorGui | IsShowProgress |  | bool |  |
| MapContentSelectorGui | OnEntrySelected | 1. MapContentEntryDesc | void |  |
| MapContentSelectorGui | Self |  | MapContentSelectorGui |  |
| MapContentSelectorGui | SetCurrentLayerIndex |  | void |  |
| MapContentSelectorGui | SetEntriesFilter |  | void |  |
| MapContentSelectorGui | SetFilterErrors | 1. bool | void |  |
| MapContentSelectorGui | SetSelectedDone | 1. bool | void |  |
| MapContentSelectorGui | SetShowProgress | 1. bool | void |  |
| MapEditor | AccessSelf |  | MapEditor | Category: const |
| MapEditor | AccessUndoHistoryViewerClient |  | UndoHistoryViewerClient | Category: const |
| MapEditor | CanToggleMaterialVisibility |  | bool |  |
| MapEditor | Exit |  | void |  |
| MapEditor | ExportTool |  | void |  |
| MapEditor | GetReferenceOverlayVisibility |  | bool | Category: nonconst |
| MapEditor | GetTerrainColorMapVisibility |  | bool | Category: nonconst |
| MapEditor | GetUndoHistoryViewerClient |  | UndoHistoryViewerClient | Category: nonconst |
| MapEditor | ImportTool |  | void |  |
| MapEditor | IsAutoSaving |  | bool |  |
| MapEditor | IsDynamicTerrainMaterialFeatureTogglable |  | bool |  |
| MapEditor | IsDynamicTerrainMaterialSupported |  | bool |  |
| MapEditor | IsEnabled |  | bool |  |
| MapEditor | IsSavable |  | bool |  |
| MapEditor | ReloadHeightmap |  | void |  |
| MapEditor | Save |  | void |  |
| MapEditor | SaveAll |  | void |  |
| MapEditor | SaveAs |  | void |  |
| MapEditor | Self |  | MapEditor |  |
| MapEditor | SetDynamicTerrainMaterialSupported | 1. bool | void |  |
| MapEditor | SetReferenceOverlayVisibility | 1. bool | void |  |
| MapEditor | ToggleTerrainColorMapVisibility |  | void |  |
| MapEditorGui | AccessLogViewer |  | LogViewer | Category: const |
| MapEditorGui | AccessSelf |  | MapEditorGui | Category: const |
| MapEditorGui | GetReferenceOverlayOpacity |  | float | Category: nonconst |
| MapEditorGui | Self |  | MapEditorGui |  |
| MapEditorGui | SetReferenceOverlayOpacity |  | void |  |
| MapEditorGui | ShowSettingsWindow |  | void |  |
| MapEditorGui | ToggleBordersSettingsOptions |  | void |  |
| MapEditorGui | ToggleReferenceOverlayOptions |  | void |  |
| MapEditorLayerBorder | AccessSelf |  | MapEditorLayerBorder | Category: const |
| MapEditorLayerBorder | GetLayerIndex |  | int32 | Category: nonconst |
| MapEditorLayerBorder | IsForceShown |  | bool |  |
| MapEditorLayerBorder | Self |  | MapEditorLayerBorder |  |
| MapEditorLayerBorder | SetForceShown | 1. bool | void |  |
| MapEditorLayerBorderDockable | AccessSelf |  | MapEditorLayerBorderDockable | Category: const |
| MapEditorLayerBorderDockable | GetLayerName | 1. MapEditorLayerBorder | CString | Category: nonconst |
| MapEditorLayerBorderDockable | Self |  | MapEditorLayerBorderDockable |  |
| MapInteraction | AccessSelf |  | MapInteraction | Category: const |
| MapInteraction | Self |  | MapInteraction |  |
| MapInteractionManager | AccessSelf |  | MapInteractionManager | Category: const |
| MapInteractionManager | HasAnyActiveMapInteraction |  | bool |  |
| MapInteractionManager | IsActiveMapInteraction | 1. Unknown | bool |  |
| MapInteractionManager | ResetActiveMapInteraction |  | void |  |
| MapInteractionManager | Self |  | MapInteractionManager |  |
| MapInteractionManager | ShowMapInteractionNotification |  | void |  |
| MapListActivateConscriptionCenterOption | AccessSelf |  | MapListActivateConscriptionCenterOption | Category: const |
| MapListActivateConscriptionCenterOption | GetConscriptionLimit |  | int32 | Category: nonconst |
| MapListActivateConscriptionCenterOption | GetHQ |  | Hq | Category: nonconst |
| MapListActivateConscriptionCenterOption | GetMilitaryFormation |  | MilitaryFormation | Category: nonconst |
| MapListActivateConscriptionCenterOption | GetNumExpectedConscripts |  | int32 | Category: nonconst |
| MapListActivateConscriptionCenterOption | GetState |  | State | Category: nonconst |
| MapListActivateConscriptionCenterOption | Self |  | MapListActivateConscriptionCenterOption |  |
| MapListActivateConscriptionCenterPanel | AccessSelf |  | MapListActivateConscriptionCenterPanel | Category: const |
| MapListActivateConscriptionCenterPanel | Self |  | MapListActivateConscriptionCenterPanel |  |
| MapListBuildingOption | AccessBuilding |  | Building | Category: const |
| MapListBuildingOption | AccessMilitaryFormation |  | MilitaryFormation | Category: const |
| MapListBuildingOption | AccessSelf |  | MapListBuildingOption | Category: const |
| MapListBuildingOption | AccessState |  | State | Category: const |
| MapListBuildingOption | GetBuilding |  | Building | Category: nonconst |
| MapListBuildingOption | GetCombatUnitType |  | CombatUnitType | Category: nonconst |
| MapListBuildingOption | GetConstructionNeeded |  | CFixedPoint | Category: nonconst |
| MapListBuildingOption | GetMilitaryFormation |  | MilitaryFormation | Category: nonconst |
| MapListBuildingOption | GetState |  | State | Category: nonconst |
| MapListBuildingOption | Self |  | MapListBuildingOption |  |
| MapListBuildingPanel | AccessSelf |  | MapListBuildingPanel | Category: const |
| MapListBuildingPanel | GetBuildingType |  | BuildingType | Category: nonconst |
| MapListBuildingPanel | HasFilter | 1. CString | bool |  |
| MapListBuildingPanel | Self |  | MapListBuildingPanel |  |
| MapListBuildingPanel | SetFilter | 1. CString | void |  |
| MapListColonyOption | AccessSelf |  | MapListColonyOption | Category: const |
| MapListColonyOption | GetRegion |  | CString | Category: nonconst |
| MapListColonyOption | GetState |  | CString | Category: nonconst |
| MapListColonyOption | GetStateRegion |  | StateRegion | Category: nonconst |
| MapListColonyOption | Self |  | MapListColonyOption |  |
| MapListCountriesPanel | AccessSelf |  | MapListCountriesPanel | Category: const |
| MapListCountriesPanel | Self |  | MapListCountriesPanel |  |
| MapListCountryOption | AccessSelf |  | MapListCountryOption | Category: const |
| MapListCountryOption | Self |  | MapListCountryOption |  |
| MapListDecreeOption | AccessSelf |  | MapListDecreeOption | Category: const |
| MapListDecreeOption | GetCost |  | CFixedPoint | Category: nonconst |
| MapListDecreeOption | GetState |  | State | Category: nonconst |
| MapListDecreeOption | Self |  | MapListDecreeOption |  |
| MapListDecreePanel | AccessSelf |  | MapListDecreePanel | Category: const |
| MapListDecreePanel | GetDecreeType |  | DecreeType | Category: nonconst |
| MapListDecreePanel | Self |  | MapListDecreePanel |  |
| MapListDeployMilitaryFormationToFrontOption | AccessSelf |  | MapListDeployMilitaryFormationToFrontOption | Category: const |
| MapListDeployMilitaryFormationToFrontOption | GetFront |  | Front | Category: nonconst |
| MapListDeployMilitaryFormationToFrontOption | Self |  | MapListDeployMilitaryFormationToFrontOption |  |
| MapListDeployMilitaryFormationToFrontPanel | AccessSelf |  | MapListDeployMilitaryFormationToFrontPanel | Category: const |
| MapListDeployMilitaryFormationToFrontPanel | Self |  | MapListDeployMilitaryFormationToFrontPanel |  |
| MapListDiploActionOption | AccessSelf |  | MapListDiploActionOption | Category: const |
| MapListDiploActionOption | GetCountry |  | CString | Category: nonconst |
| MapListDiploActionOption | GetDiplomaticAction |  | DiplomaticAction | Category: nonconst |
| MapListDiploActionOption | Self |  | MapListDiploActionOption |  |
| MapListHarvestConditionAreasPanel | AccessSelf |  | MapListHarvestConditionAreasPanel | Category: const |
| MapListHarvestConditionAreasPanel | Self |  | MapListHarvestConditionAreasPanel |  |
| MapListHarvestConditionOption | AccessSelf |  | MapListHarvestConditionOption | Category: const |
| MapListHarvestConditionOption | GetArea |  | HarvestConditionArea | Category: nonconst |
| MapListHarvestConditionOption | Self |  | MapListHarvestConditionOption |  |
| MapListInterestGroupOption | AccessInterestGroup |  | InterestGroup | Category: const |
| MapListInterestGroupOption | AccessSelf |  | MapListInterestGroupOption | Category: const |
| MapListInterestGroupOption | GetInterestGroup |  | InterestGroup | Category: nonconst |
| MapListInterestGroupOption | Self |  | MapListInterestGroupOption |  |
| MapListInterestGroupsPanel | AccessSelf |  | MapListInterestGroupsPanel | Category: const |
| MapListInterestGroupsPanel | Self |  | MapListInterestGroupsPanel |  |
| MapListMarketOption | AccessMarket |  | Market | Category: const |
| MapListMarketOption | AccessSelf |  | MapListMarketOption | Category: const |
| MapListMarketOption | GetMarket |  | Market | Category: nonconst |
| MapListMarketOption | Self |  | MapListMarketOption |  |
| MapListMarketsPanel | AccessSelf |  | MapListMarketsPanel | Category: const |
| MapListMarketsPanel | Self |  | MapListMarketsPanel |  |
| MapListMilitaryFormationOption | AccessSelf |  | MapListMilitaryFormationOption | Category: const |
| MapListMilitaryFormationOption | CanTravelTo |  | bool |  |
| MapListMilitaryFormationOption | GetTravelDays |  | int32 | Category: nonconst |
| MapListMilitaryFormationOption | Self |  | MapListMilitaryFormationOption |  |
| MapListMilitaryFormationPanel | AccessSelf |  | MapListMilitaryFormationPanel | Category: const |
| MapListMilitaryFormationPanel | Self |  | MapListMilitaryFormationPanel |  |
| MapListOption | AccessSelf |  | MapListOption | Category: const |
| MapListOption | CanClick |  | bool |  |
| MapListOption | GetBackgroundStatusFrame |  | int32 | Category: nonconst |
| MapListOption | GetIconStatusFrame |  | int32 | Category: nonconst |
| MapListOption | GetSelectionIndex |  | uint64 | Category: nonconst |
| MapListOption | GetTitle |  | CString | Category: nonconst |
| MapListOption | GetTooltip |  | CString | Category: nonconst |
| MapListOption | IsMapTargetHighlighted |  | bool |  |
| MapListOption | OnClick |  | void |  |
| MapListOption | OnMouseEnter |  | void |  |
| MapListOption | OnMouseLeave |  | void |  |
| MapListOption | OnRightClick |  | void |  |
| MapListOption | Self |  | MapListOption |  |
| MapListOption | ShouldShowStatusIcon |  | bool |  |
| MapListPanel | AccessFailedOptions |  | Unknown | Category: const |
| MapListPanel | AccessInvalidOptions |  | Unknown | Category: const |
| MapListPanel | AccessSelf |  | MapListPanel | Category: const |
| MapListPanel | AccessValidOptions |  | Unknown | Category: const |
| MapListPanel | GetTitle |  | CString | Category: nonconst |
| MapListPanel | Self |  | MapListPanel |  |
| MapListPanel | Sort | 1. CString | void |  |
| MapListPanelManager | AccessSelf |  | MapListPanelManager | Category: const |
| MapListPanelManager | CloseCurrentPanel |  | void |  |
| MapListPanelManager | HasCurrentInteraction |  | bool |  |
| MapListPanelManager | IsAvailable |  | bool |  |
| MapListPanelManager | IsShowingFailedOptions |  | bool |  |
| MapListPanelManager | IsShowingInvalidOptions |  | bool |  |
| MapListPanelManager | IsVisible |  | bool |  |
| MapListPanelManager | OpenCurrentPanel |  | void |  |
| MapListPanelManager | ResetActiveMapInteraction |  | void |  |
| MapListPanelManager | Self |  | MapListPanelManager |  |
| MapListPanelManager | ToggleCurrentPanel |  | void |  |
| MapListPanelManager | ToggleFailedOptions |  | void |  |
| MapListPanelManager | ToggleInvalidOptions |  | void |  |
| MapListPowerBlocInvitationPanel | AccessSelf |  | MapListPowerBlocInvitationPanel | Category: const |
| MapListPowerBlocInvitationPanel | GetDiplomaticAction | 1. Unknown | DiplomaticAction | Category: nonconst |
| MapListPowerBlocInvitationPanel | GetPowerBloc |  | PowerBloc | Category: nonconst |
| MapListPowerBlocInvitationPanel | Self |  | MapListPowerBlocInvitationPanel |  |
| MapListPowerBlocOption | AccessPowerBloc |  | PowerBloc | Category: const |
| MapListPowerBlocOption | AccessSelf |  | MapListPowerBlocOption | Category: const |
| MapListPowerBlocOption | GetPowerBloc |  | PowerBloc | Category: nonconst |
| MapListPowerBlocOption | Self |  | MapListPowerBlocOption |  |
| MapListPowerBlocsPanel | AccessSelf |  | MapListPowerBlocsPanel | Category: const |
| MapListPowerBlocsPanel | GetDiplomaticAction | 1. Unknown | DiplomaticAction | Category: nonconst |
| MapListPowerBlocsPanel | Self |  | MapListPowerBlocsPanel |  |
| MapListStateOption | AccessSelf |  | MapListStateOption | Category: const |
| MapListStateOption | AccessState |  | State | Category: const |
| MapListStateOption | GetState |  | State | Category: nonconst |
| MapListStateOption | Self |  | MapListStateOption |  |

List of all GUI functions

| Type | Function | Arguments | Output | Description |
| MapListStatePanel | AccessSelf |  | MapListStatePanel | Category: const |
| MapListStatePanel | Self |  | MapListStatePanel |  |
| MapListStrategicRegionOption | AccessSelf |  | MapListStrategicRegionOption | Category: const |
| MapListStrategicRegionOption | AccessStrategicRegion |  | StrategicRegion | Category: const |
| MapListStrategicRegionOption | GetStrategicRegion |  | StrategicRegion | Category: nonconst |
| MapListStrategicRegionOption | Self |  | MapListStrategicRegionOption |  |
| MapListStrategicRegionsPanel | AccessSelf |  | MapListStrategicRegionsPanel | Category: const |
| MapListStrategicRegionsPanel | Self |  | MapListStrategicRegionsPanel |  |
| MapMode | AccessSelf |  | MapMode | Category: const |
| MapMode | GetIcon |  | Unknown | Category: nonconst |
| MapMode | GetName |  | CString | Category: nonconst |
| MapMode | GetTooltipTag |  | CString | Category: nonconst |
| MapMode | Self |  | MapMode |  |
| MapModeList | AccessSelf |  | MapModeList | Category: const |
| MapModeList | GetContextName |  | CString | Category: nonconst |
| MapModeList | GetMapModes |  | Unknown | Category: nonconst |
| MapModeList | IsSelected | 1. Unknown | bool |  |
| MapModeList | IsSelectedByKey | 1. MapMode | bool |  |
| MapModeList | Select | 1. Unknown | void |  |
| MapModeList | SelectByKey | 1. MapMode | void |  |
| MapModeList | SelectDefault |  | void |  |
| MapModeList | Self |  | MapModeList |  |
| MapNotification | AccessSelf |  | MapNotification | Category: const |
| MapNotification | GetText |  | CString | Category: nonconst |
| MapNotification | Self |  | MapNotification |  |
| MapObjectMask | AccessSelf |  | MapObjectMask | Category: const |
| MapObjectMask | GetGeneratorCount |  | int32 | Category: nonconst |
| MapObjectMask | GetGeneratorNames |  | CString | Category: nonconst |
| MapObjectMask | GetName |  | CString | Category: nonconst |
| MapObjectMask | GetTextValidator |  | Unknown | Category: nonconst |
| MapObjectMask | GetThumbnail |  | Unknown | Category: nonconst |
| MapObjectMask | IsModified |  | bool |  |
| MapObjectMask | IsSelected |  | bool |  |
| MapObjectMask | Self |  | MapObjectMask |  |
| MapObjectMask | SetModified |  | void |  |
| MapObjectMask | SetName |  | void |  |
| MapObjectMask | SetSelected |  | void |  |
| MapObjectPainter | AccessSelf |  | MapObjectPainter | Category: const |
| MapObjectPainter | GetTextValidator |  | Unknown | Category: nonconst |
| MapObjectPainter | MarkAllMasksModified |  | void |  |
| MapObjectPainter | MaskList |  | Unknown |  |
| MapObjectPainter | Self |  | MapObjectPainter |  |
| MapObjectPainterMode | AccessSelf |  | MapObjectPainterMode | Category: const |
| MapObjectPainterMode | IsSelected |  | bool |  |
| MapObjectPainterMode | Self |  | MapObjectPainterMode |  |
| MapObjectPainterOptions | AccessBlurThresholdCtx |  | BlurThreshold | Category: const |
| MapObjectPainterOptions | AccessSelf |  | MapObjectPainterOptions | Category: const |
| MapObjectPainterOptions | GetPaintValue |  | float | Category: nonconst |
| MapObjectPainterOptions | IsCurrentBlendMode | 1. CString | bool |  |
| MapObjectPainterOptions | Self |  | MapObjectPainterOptions |  |
| MapObjectPainterOptions | SetBlendMode | 1. CString | void |  |
| MapObjectPainterOptions | SetPaintValue |  | void |  |
| MapObjectPainterOptions | SetPaintValueStr |  | void |  |
| MapObjectTool | AccessSelf |  | MapObjectTool | Category: const |
| MapObjectTool | IsCreateTool |  | bool |  |
| MapObjectTool | IsMovingObjects |  | bool |  |
| MapObjectTool | IsRotatingObjects |  | bool |  |
| MapObjectTool | IsScalingObjects |  | bool |  |
| MapObjectTool | IsSelectionModeMapContent |  | bool |  |
| MapObjectTool | IsSelectionModeObjects |  | bool |  |
| MapObjectTool | RotateRandom |  | void |  |
| MapObjectTool | Self |  | MapObjectTool |  |
| MapObjectTool | SetCreateTool |  | void |  |
| MapObjectTool | SetMovingObjects |  | void |  |
| MapObjectTool | SetRotatingObjects |  | void |  |
| MapObjectTool | SetScalingObjects |  | void |  |
| MapObjectTool | SetSelectionModeMapContent |  | void |  |
| MapObjectTool | SetSelectionModeObjects |  | void |  |
| Market | AccessLocalGoods | 1. Unknown | Unknown | Category: const |
| Market | AccessLocalPrices | 1. Goods | Unknown | Category: const |
| Market | AccessMarketCapital |  | State | Category: const |
| Market | AccessMarketGoods | 1. Unknown | Unknown | Category: const |
| Market | AccessMarketGoodsSortedOnExports | 1. Unknown | Unknown | Category: const |
| Market | AccessMarketGoodsSortedOnImports | 1. Unknown | Unknown | Category: const |
| Market | AccessMarketStates |  | Unknown | Category: const |
| Market | AccessParticipants |  | Unknown | Category: const |
| Market | AccessSelf |  | Market | Category: const |
| Market | CalcSupplyToDemandRatio | 1. Unknown | CFixedPoint |  |
| Market | CanTradeGoods | 1. Goods | bool |  |
| Market | GetBalance |  | CFixedPoint | Category: nonconst |
| Market | GetBalanceDesc |  | CString | Category: nonconst |
| Market | GetCountryExportedAmount | 1. Unknown 2. Unknown | CFixedPoint | Category: nonconst |
| Market | GetCountryImportedAmount | 1. Unknown 2. Unknown | CFixedPoint | Category: nonconst |
| Market | GetCountryTradeCapacity | 1. Country | int32 | Category: nonconst |
| Market | GetCountryTradeCapacityBalance | 1. Country | int32 | Category: nonconst |
| Market | GetCountryTradeCapacityDesc | 1. Country | CString | Category: nonconst |
| Market | GetCountryTradeCapacityUsage | 1. Country | int32 | Category: nonconst |
| Market | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| Market | GetEmptyFilters |  | Unknown | Category: nonconst |
| Market | GetExportAdvantage | 1. Unknown | CFixedPoint | Category: nonconst |
| Market | GetExportedAmount | 1. Goods | CFixedPoint | Category: nonconst |
| Market | GetExportedAmountToMarket | 1. Market 2. Goods | CFixedPoint | Category: nonconst |
| Market | GetExports |  | Unknown | Category: nonconst |
| Market | GetGDPContributionPercentage | 1. Country | CFixedPoint | Category: nonconst |
| Market | GetGoodsSortedByBalance |  | Unknown | Category: nonconst |
| Market | GetGoodsWithShortage |  | Unknown | Category: nonconst |
| Market | GetImportAdvantage | 1. Unknown | CFixedPoint | Category: nonconst |
| Market | GetImportedAmount | 1. Goods | CFixedPoint | Category: nonconst |
| Market | GetImportedAmountFromMarket | 1. Market 2. Goods | CFixedPoint | Category: nonconst |
| Market | GetImports |  | Unknown | Category: nonconst |
| Market | GetMarketCapital |  | State | Category: nonconst |
| Market | GetMarketGDPValue |  | CFixedPoint | Category: nonconst |
| Market | GetMarketSharePercentageFor | 1. Country | CFixedPoint | Category: nonconst |
| Market | GetMaxImbalance |  | CFixedPoint | Category: nonconst |
| Market | GetMaxImbalanceScaledByBasePrice |  | CFixedPoint | Category: nonconst |
| Market | GetModifier |  | Modifier | Category: nonconst |
| Market | GetModifierDesc |  | CString | Category: nonconst |
| Market | GetName |  | CString | Category: nonconst |
| Market | GetNameNoFormatting |  | CString | Category: nonconst |
| Market | GetNameNoFormattingIncludingStatus |  | CString | Category: nonconst |
| Market | GetOwner |  | Country | Category: nonconst |
| Market | GetRelativeExportAdvantage | 1. Unknown | CFixedPoint | Category: nonconst |
| Market | GetRelativeExportAdvantageDesc | 1. Unknown | CString | Category: nonconst |
| Market | GetRelativeImportAdvantage | 1. Unknown | CFixedPoint | Category: nonconst |
| Market | GetRelativeImportAdvantageDesc | 1. Unknown | CString | Category: nonconst |
| Market | GetTooltipTag |  | CString | Category: nonconst |
| Market | GetTopGoodsByHighestBalance | 1. int32 | Unknown | Category: nonconst |
| Market | GetTopGoodsByLowestBalance | 1. int32 | Unknown | Category: nonconst |
| Market | GetTotalBuyOrders |  | CFixedPoint | Category: nonconst |
| Market | GetTotalExportedAmount |  | CFixedPoint | Category: nonconst |
| Market | GetTotalImportedAmount |  | CFixedPoint | Category: nonconst |
| Market | GetTotalSellOrders |  | CFixedPoint | Category: nonconst |
| Market | GetTradeSurplus |  | CFixedPoint | Category: nonconst |
| Market | GetTradeSurplusBreakdown |  | CString | Category: nonconst |
| Market | HasAnyGoodsShortage |  | bool |  |
| Market | HasBuildingGoodsShortage | 1. Unknown | bool |  |
| Market | HasGoodsShortage | 1. Unknown | bool |  |
| Market | HasPopGoodsShortage | 1. Unknown | bool |  |
| Market | IsBeingHighlighted |  | bool |  |
| Market | IsBeingTutorialHighlighted |  | bool |  |
| Market | IsCapitalMarket | 1. Unknown | bool |  |
| Market | IsPinnedInOutliner |  | bool |  |
| Market | IsSame | 1. Market | bool |  |
| Market | IsValid |  | bool |  |
| Market | MakeScope |  | Scope |  |
| Market | RestoreSort |  | void |  |
| Market | Self |  | Market |  |
| Market | Sort | 1. CString | void |  |
| Market | SortStates | 1. CString | void |  |
| Market | TogglePinInOutliner |  | void |  |
| MarketGoods | AccessSelf |  | MarketGoods | Category: const |
| MarketGoods | GetBreakdownOfBuildingsAffectedByShortage |  | CString | Category: nonconst |
| MarketGoods | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| MarketGoods | GetGoods |  | Goods | Category: nonconst |
| MarketGoods | GetIDString |  | CString | Category: nonconst |
| MarketGoods | GetMarket |  | Market | Category: nonconst |
| MarketGoods | GetNumBuildingsAffectedByShortage |  | int32 | Category: nonconst |
| MarketGoods | GetTooltipTag |  | CString | Category: nonconst |
| MarketGoods | MakeScope |  | Scope |  |
| MarketGoods | Self |  | MarketGoods |  |
| MarketPanel | AccessSelf |  | MarketPanel | Category: const |
| MarketPanel | Filter | 1. CString | void |  |
| MarketPanel | GetFilters |  | Unknown | Category: nonconst |
| MarketPanel | IsSelected | 1. CString | bool |  |
| MarketPanel | Self |  | MarketPanel |  |
| MarketsMarker | AccessSelf |  | MarketsMarker | Category: const |
| MarketsMarker | GetAnyMarket |  | Market | Category: nonconst |
| MarketsMarker | GetGoodsListCount |  | int32 | Category: nonconst |
| MarketsMarker | GetMarketsMarkerListItems |  | Unknown | Category: nonconst |
| MarketsMarker | GetPosition |  | CVector2f | Category: nonconst |
| MarketsMarker | OpenMarketPanel |  | void |  |
| MarketsMarker | Self |  | MarketsMarker |  |
| MarketsMarkerListItem | AccessSelf |  | MarketsMarkerListItem | Category: const |
| MarketsMarkerListItem | GetPanelDescription |  | CString | Category: nonconst |
| MarketsMarkerListItem | Self |  | MarketsMarkerListItem |  |
| MaskEntry | AccessSelf |  | MaskEntry | Category: const |
| MaskEntry | GetKey |  | CString | Category: nonconst |
| MaskEntry | Self |  | MaskEntry |  |
| MaskManagerEntry | AccessSelf |  | MaskManagerEntry | Category: const |
| MaskManagerEntry | GetKey |  | CString | Category: nonconst |
| MaskManagerEntry | IsLocked |  | bool |  |
| MaskManagerEntry | IsSelected |  | bool |  |
| MaskManagerEntry | Self |  | MaskManagerEntry |  |
| MaskManagerEntry | SetLocked | 1. bool | void |  |
| MaskManagerEntry | SetSelected | 1. bool | void |  |
| MaskPainterDynamicTerrain | AccessSelf |  | MaskPainterDynamicTerrain | Category: const |
| MaskPainterDynamicTerrain | ClearSelected |  | void |  |
| MaskPainterDynamicTerrain | GetTerrainType |  | CString | Category: nonconst |
| MaskPainterDynamicTerrain | GetTerrainValue |  | float | Category: nonconst |
| MaskPainterDynamicTerrain | HasAnySelectedSetTerrainType |  | bool |  |
| MaskPainterDynamicTerrain | OpenDatabase |  | void |  |
| MaskPainterDynamicTerrain | Self |  | MaskPainterDynamicTerrain |  |
| MaskPainterDynamicTerrain | SetTerrainValue |  | void |  |
| MaskPainterDynamicTerrain | SetTerrainValueStr |  | void |  |
| MaskPainterManager | AccessSelf |  | MaskPainterManager | Category: const |
| MaskPainterManager | CanModify |  | bool |  |
| MaskPainterManager | ClearFilter |  | void |  |
| MaskPainterManager | GetFilter |  | CString | Category: nonconst |
| MaskPainterManager | GetSelectedMaskDesc |  | CString | Category: nonconst |
| MaskPainterManager | IsAnyMaskSelected |  | bool |  |
| MaskPainterManager | IsSelectedMaskTypeDeveloper |  | bool |  |
| MaskPainterManager | IsSelectedMaskTypeLocal |  | bool |  |
| MaskPainterManager | OnClear |  | void |  |
| MaskPainterManager | OnClone |  | void |  |
| MaskPainterManager | OnDelete |  | void |  |
| MaskPainterManager | OnNew |  | void |  |
| MaskPainterManager | OnRename |  | void |  |
| MaskPainterManager | Self |  | MaskPainterManager |  |
| MaskPainterManager | SetFilter |  | void |  |
| MaskPainterManager | SetSelectedMaskDesc |  | void |  |
| MaskPainterManager | ToggleMaskTypeDeveloper |  | void |  |
| MaskPainterManager | ToggleMaskTypeLocal |  | void |  |
| MaskPainterMapContentPanel | AccessSelf |  | MaskPainterMapContentPanel | Category: const |
| MaskPainterMapContentPanel | Self |  | MaskPainterMapContentPanel |  |
| MaskPainterMode | AccessSelf |  | MaskPainterMode | Category: const |
| MaskPainterMode | IsSelected |  | bool |  |
| MaskPainterMode | Self |  | MaskPainterMode |  |
| MaskPainterTool | AccessSelf |  | MaskPainterTool | Category: const |
| MaskPainterTool | IsEraserMode |  | bool |  |
| MaskPainterTool | IsEyeDropperMode |  | bool |  |
| MaskPainterTool | IsMapContentSelectionMode |  | bool |  |
| MaskPainterTool | IsPaintMode |  | bool |  |
| MaskPainterTool | Self |  | MaskPainterTool |  |
| MaskPainterTool | SetEraserMode |  | void |  |
| MaskPainterTool | SetEyeDropperMode | 1. bool | void |  |
| MaskPainterTool | SetMapContentSelectionMode | 1. bool | void |  |
| MaskPainterTool | SetPaintMode |  | void |  |
| MaskPainterViewport | AccessSelf |  | MaskPainterViewport | Category: const |
| MaskPainterViewport | Self |  | MaskPainterViewport |  |
| Material | AccessSelf |  | Material | Category: const |
| Material | GetDiffuseTexture |  | Unknown | Category: nonconst |
| Material | GetName |  | CString | Category: nonconst |
| Material | GetThumbnail |  | Unknown | Category: nonconst |
| Material | IsHighlighted |  | bool |  |
| Material | IsLocked |  | bool |  |
| Material | IsSelected |  | bool |  |
| Material | Self |  | Material |  |
| Material | ToggleHighlight |  | void |  |
| Material | ToggleLocked |  | void |  |
| Material | ToggleSelected |  | void |  |
| MaterialBrowser | AccessSelf |  | MaterialBrowser | Category: const |
| MaterialBrowser | Apply |  | void |  |
| MaterialBrowser | Cancel |  | void |  |
| MaterialBrowser | GetCurrentMaterialsList |  | Unknown | Category: nonconst |
| MaterialBrowser | GetSearchFilter |  | CUTF8String | Category: nonconst |
| MaterialBrowser | IsAnyMaterialSelected |  | bool |  |
| MaterialBrowser | IsMaterialDisabled | 1. Unknown | bool |  |
| MaterialBrowser | IsMaterialSelected | 1. Unknown | bool |  |
| MaterialBrowser | Self |  | MaterialBrowser |  |
| MaterialBrowser | SetSearchFilter |  | void |  |
| MaterialBrowser | ToggleMaterialSelected | 1. Unknown | void |  |
| MaterialEntry | AccessSelf |  | MaterialEntry | Category: const |
| MaterialEntry | GetRawValue |  | int32 | Category: nonconst |
| MaterialEntry | GetValue |  | float | Category: nonconst |
| MaterialEntry | IsVisible |  | bool |  |
| MaterialEntry | Self |  | MaterialEntry |  |
| MaterialMix | AccessMaterials |  | Unknown | Category: const |
| MaterialMix | AccessSelf |  | MaterialMix | Category: const |
| MaterialMix | CanAddMaterialEntry |  | bool |  |
| MaterialMix | GetMaterials |  | Unknown | Category: nonconst |
| MaterialMix | GetMaterialsCount |  | int32 | Category: nonconst |
| MaterialMix | GetName |  | CUTF8String | Category: nonconst |
| MaterialMix | IsPersistent |  | bool |  |
| MaterialMix | Self |  | MaterialMix |  |
| MaterialMix | SetValue | 1. MaterialMixEntry | void |  |
| MaterialMix | TogglePersistence |  | void |  |
| MaterialMixBrush | AccessSamples |  | Unknown | Category: const |
| MaterialMixBrush | AccessSelf |  | MaterialMixBrush | Category: const |
| MaterialMixBrush | ChangeSampleEntryComposition | 1. MaterialMix 2. MaterialMixEntry | void |  |
| MaterialMixBrush | Delete | 1. MaterialMix | void |  |
| MaterialMixBrush | EndSampleCompositionEdit | 1. MaterialMix | void |  |
| MaterialMixBrush | IsSampling |  | bool |  |
| MaterialMixBrush | IsSelected | 1. MaterialMix | bool |  |
| MaterialMixBrush | RenameSample | 1. MaterialMix | void |  |
| MaterialMixBrush | Samples |  | Unknown |  |
| MaterialMixBrush | Self |  | MaterialMixBrush |  |
| MaterialMixBrush | StartSampleCompositionEdit | 1. MaterialMix | void |  |
| MaterialMixBrush | ToggleSampleEntryLock | 1. MaterialMix 2. MaterialMixEntry | void |  |
| MaterialMixBrush | ToggleSamplePersistence | 1. MaterialMix | void |  |
| MaterialMixBrush | ToggleSelected | 1. MaterialMix | void |  |
| MaterialMixEntry | AccessSelf |  | MaterialMixEntry | Category: const |
| MaterialMixEntry | GetPercentageValue |  | float | Category: nonconst |
| MaterialMixEntry | GetValue |  | float | Category: nonconst |
| MaterialMixEntry | GetValueAsText |  | CString | Category: nonconst |
| MaterialMixEntry | IsLocked |  | bool |  |
| MaterialMixEntry | Self |  | MaterialMixEntry |  |
| MaterialMixEntry | SetPercentageValue | 1. Unknown | void |  |
| MaterialMixEntry | ToggleLocked |  | void |  |
| MaterialPaintingMode | AccessBlurThresholdCtx |  | BlurThreshold | Category: const |
| MaterialPaintingMode | AccessSelf |  | MaterialPaintingMode | Category: const |
| MaterialPaintingMode | FocusCameraOnError |  | void |  |
| MaterialPaintingMode | IsBlurSelected |  | bool |  |
| MaterialPaintingMode | IsBrushSettingsLock |  | bool |  |
| MaterialPaintingMode | IsEraserSelected |  | bool |  |
| MaterialPaintingMode | IsEyeDropperSelected |  | bool |  |
| MaterialPaintingMode | IsPainterSelected |  | bool |  |
| MaterialPaintingMode | IsPaintingAllowed |  | bool |  |
| MaterialPaintingMode | IsSearchingForError |  | bool |  |
| MaterialPaintingMode | IsSelected |  | bool |  |
| MaterialPaintingMode | IsTrimWhilePainting |  | bool |  |
| MaterialPaintingMode | IsTrimmerSelected |  | bool |  |
| MaterialPaintingMode | SelectBlur |  | void |  |
| MaterialPaintingMode | SelectEraser |  | void |  |
| MaterialPaintingMode | SelectEyeDropper |  | void |  |
| MaterialPaintingMode | SelectPainter |  | void |  |
| MaterialPaintingMode | SelectTrimmer |  | void |  |
| MaterialPaintingMode | Self |  | MaterialPaintingMode |  |
| MaterialPaintingMode | SetBrushSettingsLock | 1. bool | void |  |
| MaterialPaintingMode | SetTrimWhilePainting | 1. bool | void |  |
| Materials | AccessSelf |  | Materials | Category: const |
| Materials | GetList |  | Unknown | Category: nonconst |
| Materials | List |  | Unknown |  |
| Materials | SelectFirst |  | void |  |
| Materials | SelectLast |  | void |  |
| Materials | SelectNext |  | void |  |
| Materials | SelectPrevious |  | void |  |
| Materials | Self |  | Materials |  |
| Materials | ToggleHighlight |  | void |  |
| Materials | ToggleLocked |  | void |  |
| MaterialsSample | AccessSelf |  | MaterialsSample | Category: const |
| MaterialsSample | Entries |  | Unknown |  |
| MaterialsSample | GetX |  | int32 | Category: nonconst |
| MaterialsSample | GetY |  | int32 | Category: nonconst |
| MaterialsSample | Self |  | MaterialsSample |  |
| MeshImporter | AccessMaterialImportSettings |  | MeshImporterMaterials | Category: const |
| MeshImporter | AccessSelf |  | MeshImporter | Category: const |
| MeshImporter | AccessUndoer |  | UndoStack | Category: const |
| MeshImporter | EditShaderSets |  | void |  |
| MeshImporter | GetInputFileName |  | CString | Category: nonconst |
| MeshImporter | GetLogEntryCountCritical |  | int32 | Category: nonconst |
| MeshImporter | GetLogEntryCountError |  | int32 | Category: nonconst |
| MeshImporter | GetLogEntryCountInfo |  | int32 | Category: nonconst |
| MeshImporter | GetLogEntryCountWarning |  | int32 | Category: nonconst |
| MeshImporter | GetSettingsFileName |  | CString | Category: nonconst |
| MeshImporter | ImportCurrentlySelected |  | void |  |
| MeshImporter | IsAutoSaveOnImport |  | bool |  |
| MeshImporter | IsBrowserViewOpen |  | bool |  |
| MeshImporter | IsLogViewOpen |  | bool |  |
| MeshImporter | IsMeshLodded |  | bool |  |
| MeshImporter | IsSettingsDifferentThanDiskFile |  | bool |  |
| MeshImporter | IsSettingsDiskFileExist |  | bool |  |
| MeshImporter | IsTargetMesh2 |  | bool |  |
| MeshImporter | SaveSettings |  | void |  |
| MeshImporter | Self |  | MeshImporter |  |
| MeshImporter | ToggleAutoSaveOnImport |  | void |  |
| MeshImporter | ToggleBrowserView |  | void |  |
| MeshImporter | ToggleLogView |  | void |  |
| MeshImporterBrowser | AccessSelf |  | MeshImporterBrowser | Category: const |
| MeshImporterBrowser | ClearQueue |  | void |  |
| MeshImporterBrowser | DeselectAllFiles |  | void |  |
| MeshImporterBrowser | GetAllFiles |  | Unknown | Category: nonconst |
| MeshImporterBrowser | GetQueuedFiles |  | Unknown | Category: nonconst |
| MeshImporterBrowser | ImportAllInQueue |  | void |  |
| MeshImporterBrowser | ReloadAllFiles |  | void |  |
| MeshImporterBrowser | SelectAllFiles |  | void |  |
| MeshImporterBrowser | Self |  | MeshImporterBrowser |  |
| MeshImporterBrowserEntry | AccessSelf |  | MeshImporterBrowserEntry | Category: const |
| MeshImporterBrowserEntry | GetFileDescription |  | CString | Category: nonconst |
| MeshImporterBrowserEntry | GetFileName |  | Unknown | Category: nonconst |
| MeshImporterBrowserEntry | GetFullPath |  | Unknown | Category: nonconst |
| MeshImporterBrowserEntry | IsInQueue |  | bool |  |
| MeshImporterBrowserEntry | IsSelected |  | bool |  |
| MeshImporterBrowserEntry | IsSettingsDifferentThanDiskFile |  | bool |  |
| MeshImporterBrowserEntry | IsSettingsDiskFileExist |  | bool |  |
| MeshImporterBrowserEntry | Self |  | MeshImporterBrowserEntry |  |
| MeshImporterBrowserEntry | ToggleQueue |  | void |  |
| MeshImporterBrowserEntry | ToggleSelect |  | void |  |
| MeshImporterMaterialEntry | AccessSelf |  | MeshImporterMaterialEntry | Category: const |
| MeshImporterMaterialEntry | GetDetailsDescription |  | CString | Category: nonconst |
| MeshImporterMaterialEntry | GetMaterialIndex |  | int32 | Category: nonconst |
| MeshImporterMaterialEntry | GetName |  | CString | Category: nonconst |
| MeshImporterMaterialEntry | GetNumberGeometriesUsingMaterial |  | int32 | Category: nonconst |
| MeshImporterMaterialEntry | InjectPropertyList | 1. PdxGuiWidget 2. CString | void |  |
| MeshImporterMaterialEntry | IsCollision |  | bool |  |
| MeshImporterMaterialEntry | Self |  | MeshImporterMaterialEntry |  |
| MeshImporterMaterialEntry | ToggleCollision |  | void |  |
| MeshImporterMaterials | AccessMaterialEntries |  | Unknown | Category: const |
| MeshImporterMaterials | AccessSelf |  | MeshImporterMaterials | Category: const |
| MeshImporterMaterials | GetMaterialEntries |  | Unknown | Category: nonconst |
| MeshImporterMaterials | Self |  | MeshImporterMaterials |  |
| MessageFeedHandler | AccessSelf |  | MessageFeedHandler | Category: const |
| MessageFeedHandler | GetItems |  | Unknown | Category: nonconst |
| MessageFeedHandler | GetNumberOfQueuedMessages |  | int32 | Category: nonconst |
| MessageFeedHandler | HasQueuedMessages |  | bool |  |
| MessageFeedHandler | MarkAllForDelete |  | void |  |
| MessageFeedHandler | Self |  | MessageFeedHandler |  |
| MessageFeedHandler | ShowNotificationFeedNextToOutliner |  | bool |  |
| MessageSettingsWindow | AccessSelf |  | MessageSettingsWindow | Category: const |
| MessageSettingsWindow | CurrentSituationLabelSelectTotal |  | void |  |
| MessageSettingsWindow | CurrentSituationLabelSelectUnread |  | void |  |
| MessageSettingsWindow | GetAlertSettingsItems |  | Unknown | Category: nonconst |
| MessageSettingsWindow | GetInterestingCountryItems |  | Unknown | Category: nonconst |
| MessageSettingsWindow | GetNotificationSettingsItems |  | Unknown | Category: nonconst |
| MessageSettingsWindow | HasPauseOnEvent |  | bool |  |
| MessageSettingsWindow | HasSingleShownItem |  | bool |  |
| MessageSettingsWindow | IsCurrentSituationLabelTotal |  | bool |  |
| MessageSettingsWindow | OnChangeInterestingCountrySettings |  | void |  |
| MessageSettingsWindow | RemoveSingleShownItem |  | void |  |
| MessageSettingsWindow | ResetAlertSettings |  | void |  |
| MessageSettingsWindow | ResetNotificationSettings |  | void |  |
| MessageSettingsWindow | Self |  | MessageSettingsWindow |  |
| MessageSettingsWindow | SetSingleShownItem | 1. Unknown | void |  |
| MessageSettingsWindow | ShouldBeShown | 1. CString | bool |  |
| MessageSettingsWindow | SortInterestingCountryItemsIfNeeded |  | void |  |
| MessageSettingsWindow | TogglePauseOnEvent |  | void |  |
| MetadataWindow | AccessSelf |  | MetadataWindow | Category: const |
| MetadataWindow | Close |  | void |  |
| MetadataWindow | GetTitle |  | CString | Category: nonconst |
| MetadataWindow | IsOpen |  | bool |  |
| MetadataWindow | IsSelectedAnyNode |  | bool |  |
| MetadataWindow | Open |  | void |  |
| MetadataWindow | Self |  | MetadataWindow |  |
| MetadataWindow | Toggle |  | void |  |
| MilitaryFormation | AccessSelf |  | MilitaryFormation | Category: const |
| MilitaryFormation | CanAnyUnitBeUpgraded |  | bool |  |
| MilitaryFormation | CanDeployToFront |  | bool |  |
| MilitaryFormation | CanDeployToSeaNode |  | bool |  |
| MilitaryFormation | CanInvade |  | bool |  |
| MilitaryFormation | CanRecruitConscriptUnit | 1. CombatUnitType | bool |  |
| MilitaryFormation | CanRecruitConscriptUnitTooltip | 1. CombatUnitType | CString |  |
| MilitaryFormation | CanRecruitRegularUnit | 1. CombatUnitType | bool |  |
| MilitaryFormation | CanRecruitRegularUnitTooltip | 1. CombatUnitType | CString |  |
| MilitaryFormation | CanStation |  | bool |  |
| MilitaryFormation | Demobilize |  | Command |  |
| MilitaryFormation | Deselect |  | void |  |
| MilitaryFormation | Disband |  | Command |  |
| MilitaryFormation | FindLeastExperiencedConscriptUnit | 1. Unknown | CombatUnit |  |
| MilitaryFormation | FindLeastExperiencedRegularUnit | 1. CombatUnitType | CombatUnit |  |
| MilitaryFormation | GetAIDebugInfo |  | CString | Category: nonconst |
| MilitaryFormation | GetActiveBattles |  | Unknown | Category: nonconst |
| MilitaryFormation | GetAttritionRaw |  | CFixedPoint | Category: nonconst |
| MilitaryFormation | GetAttritionRiskDesc |  | CString | Category: nonconst |
| MilitaryFormation | GetAverageAttritionPerWeek |  | CFixedPoint | Category: nonconst |
| MilitaryFormation | GetAverageDefense |  | CFixedPoint | Category: nonconst |
| MilitaryFormation | GetAverageDefenseExcludeUnavailableManpower |  | CFixedPoint | Category: nonconst |
| MilitaryFormation | GetAverageOffense |  | CFixedPoint | Category: nonconst |
| MilitaryFormation | GetAverageOffenseExcludeUnavailableManpower |  | CFixedPoint | Category: nonconst |
| MilitaryFormation | GetBorrowSettings |  | Unknown | Category: nonconst |
| MilitaryFormation | GetBuildings |  | Unknown | Category: nonconst |
| MilitaryFormation | GetBuildingsDesc |  | CString | Category: nonconst |
| MilitaryFormation | GetCombatUnitEntries |  | Unknown | Category: nonconst |
| MilitaryFormation | GetCombatUnitsTypeIcon |  | CString | Category: nonconst |
| MilitaryFormation | GetCommandLimit |  | CString | Category: nonconst |
| MilitaryFormation | GetCommandLimitDesc |  | CString | Category: nonconst |
| MilitaryFormation | GetCommandLimitRaw |  | int32 | Category: nonconst |
| MilitaryFormation | GetCommanders |  | Unknown | Category: nonconst |
| MilitaryFormation | GetCommandersWithRecruitableSlot |  | Unknown | Category: nonconst |
| MilitaryFormation | GetCommonDebugInfo |  | CString | Category: nonconst |
| MilitaryFormation | GetConscriptPowerProjection |  | CFixedPoint | Category: nonconst |
| MilitaryFormation | GetConscriptPowerProjectionDesc |  | CString | Category: nonconst |
| MilitaryFormation | GetConscriptUnitsByTypeBreakdown | 1. CombatUnitType | CString | Category: nonconst |
| MilitaryFormation | GetConscriptsGroupsBreakdown |  | CString | Category: nonconst |
| MilitaryFormation | GetConscriptsMobilizationPercentage |  | CFixedPoint | Category: nonconst |
| MilitaryFormation | GetCountry |  | Country | Category: nonconst |
| MilitaryFormation | GetCurrentBlockadeStrength |  | CFixedPoint | Category: nonconst |
| MilitaryFormation | GetCurrentFront |  | Front | Category: nonconst |
| MilitaryFormation | GetCurrentHQ |  | Hq | Category: nonconst |
| MilitaryFormation | GetCurrentManpower |  | int64 | Category: nonconst |
| MilitaryFormation | GetCurrentSeaNode |  | Province | Category: nonconst |
| MilitaryFormation | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| MilitaryFormation | GetDemobilizationStatus |  | CString | Category: nonconst |
| MilitaryFormation | GetDisbandUnitCommand | 1. CombatUnit | Command | Category: nonconst |
| MilitaryFormation | GetDisbandUnitTypeConscriptCommand | 1. CombatUnitType | Command | Category: nonconst |
| MilitaryFormation | GetDisbandUnitTypeRegularCommand | 1. CombatUnitType | Command | Category: nonconst |
| MilitaryFormation | GetEffectFromBeingExiledDesc |  | CString | Category: nonconst |
| MilitaryFormation | GetEffectFromCommandLimitDesc |  | CString | Category: nonconst |
| MilitaryFormation | GetEffectFromSpecialUnitsDesc |  | CString | Category: nonconst |
| MilitaryFormation | GetEffectOfDefaultUnitTypeChange | 1. CombatUnitType | CString | Category: nonconst |
| MilitaryFormation | GetEligibleGroups |  | Unknown | Category: nonconst |
| MilitaryFormation | GetEligibleTypesByGroup | 1. CombatUnitGroup | Unknown | Category: nonconst |
| MilitaryFormation | GetEstimatedMobilizationCostDesc |  | CString | Category: nonconst |
| MilitaryFormation | GetEstimatedMobilizationCostFormatted |  | CString | Category: nonconst |
| MilitaryFormation | GetEstimatedMobilizationCostRaw |  | CFixedPoint | Category: nonconst |
| MilitaryFormation | GetExpectedNumRegulars |  | int32 | Category: nonconst |
| MilitaryFormation | GetFlag |  | Unknown | Category: nonconst |
| MilitaryFormation | GetFlagColor |  | CVector4f | Category: nonconst |
| MilitaryFormation | GetFlotillaGroupsBreakdown |  | CString | Category: nonconst |
| MilitaryFormation | GetFormationStatusDesc |  | CString | Category: nonconst |
| MilitaryFormation | GetFrontDistributionDesc |  | CString | Category: nonconst |
| MilitaryFormation | GetGoodsConsumptionCostRaw |  | CFixedPoint | Category: nonconst |
| MilitaryFormation | GetGoodsConsumptionDesc |  | CString | Category: nonconst |
| MilitaryFormation | GetIDString |  | CString | Category: nonconst |
| MilitaryFormation | GetIncomingNumRegulars |  | int32 | Category: nonconst |
| MilitaryFormation | GetIncomingNumRegularsFromBuilding | 1. Building | int32 | Category: nonconst |
| MilitaryFormation | GetIncomingNumRegularsOfUnitType | 1. CombatUnitType | int32 | Category: nonconst |
| MilitaryFormation | GetInvasionTooltip |  | CString | Category: nonconst |
| MilitaryFormation | GetLocationString |  | CString | Category: nonconst |
| MilitaryFormation | GetLowOrganizationDesc |  | CString | Category: nonconst |
| MilitaryFormation | GetMaxBlockadeStrength |  | CFixedPoint | Category: nonconst |
| MilitaryFormation | GetMaxConscripts |  | int32 | Category: nonconst |
| MilitaryFormation | GetMaxManpower |  | int64 | Category: nonconst |
| MilitaryFormation | GetMobilizationModifier |  | Modifier | Category: nonconst |
| MilitaryFormation | GetMobilizationOptions |  | Unknown | Category: nonconst |
| MilitaryFormation | GetMobilizationPercentage |  | CFixedPoint | Category: nonconst |
| MilitaryFormation | GetMobilizationPercentageFormatted |  | CString | Category: nonconst |
| MilitaryFormation | GetModifier |  | Modifier | Category: nonconst |
| MilitaryFormation | GetMorale |  | CFixedPoint | Category: nonconst |
| MilitaryFormation | GetName |  | CString | Category: nonconst |
| MilitaryFormation | GetNameNoFormatting |  | CString | Category: nonconst |
| MilitaryFormation | GetNameWithCountryFlag |  | CString | Category: nonconst |
| MilitaryFormation | GetNumCombatUnits |  | int32 | Category: nonconst |
| MilitaryFormation | GetNumConscripts |  | int32 | Category: nonconst |
| MilitaryFormation | GetNumConscriptsCombatUnitsOfType | 1. CombatUnitType | int32 | Category: nonconst |
| MilitaryFormation | GetNumConscriptsUnitsInGroup | 1. CombatUnitGroup | int32 | Category: nonconst |
| MilitaryFormation | GetNumDeployToFrontSelections |  | int32 | Category: nonconst |
| MilitaryFormation | GetNumDeployToSeaNodeSelections |  | int32 | Category: nonconst |
| MilitaryFormation | GetNumExpectedConscriptsCombatUnitsOfType | 1. CombatUnitType | int32 | Category: nonconst |
| MilitaryFormation | GetNumExpectedConscriptsCombatUnitsOfTypeFromState | 1. Unknown 2. Unknown | int32 | Category: nonconst |
| MilitaryFormation | GetNumExpectedConscriptsUnitsInGroup | 1. CombatUnitGroup | int32 | Category: nonconst |
| MilitaryFormation | GetNumExpectedRegularCombatUnitsOfType | 1. CombatUnitType | int32 | Category: nonconst |
| MilitaryFormation | GetNumFlotillaUnitsInGroup | 1. Unknown | int32 | Category: nonconst |
| MilitaryFormation | GetNumFullyMobilizedConscripts |  | int32 | Category: nonconst |
| MilitaryFormation | GetNumFullyMobilizedRegulars |  | int32 | Category: nonconst |
| MilitaryFormation | GetNumFullyMobilizedTotalUnits |  | int32 | Category: nonconst |
| MilitaryFormation | GetNumInvasionSelections |  | int32 | Category: nonconst |
| MilitaryFormation | GetNumRegularCombatUnitsOfType | 1. CombatUnitType | int32 | Category: nonconst |
| MilitaryFormation | GetNumRegulars |  | int32 | Category: nonconst |
| MilitaryFormation | GetNumRegularsUnitsInGroup | 1. CombatUnitGroup | int32 | Category: nonconst |
| MilitaryFormation | GetNumSpecialUnits |  | int32 | Category: nonconst |
| MilitaryFormation | GetNumSpecialUnitsExpected |  | int32 | Category: nonconst |
| MilitaryFormation | GetNumStationSelections |  | int32 | Category: nonconst |
| MilitaryFormation | GetNumStrategicObjectiveActive |  | int32 | Category: nonconst |
| MilitaryFormation | GetNumStrategicObjectiveSelections |  | int32 | Category: nonconst |
| MilitaryFormation | GetNumTotalCombatUnitsExpectedInGroup | 1. CombatUnitGroup | int32 | Category: nonconst |
| MilitaryFormation | GetNumTotalCombatUnitsInGroup | 1. CombatUnitGroup | int32 | Category: nonconst |
| MilitaryFormation | GetNumTotalCombatUnitsOfType | 1. Unknown | int32 | Category: nonconst |
| MilitaryFormation | GetOrganization |  | CString | Category: nonconst |
| MilitaryFormation | GetOrganizationDailyChange |  | CFixedPoint | Category: nonconst |
| MilitaryFormation | GetOrganizationDailyChangeDesc |  | CString | Category: nonconst |
| MilitaryFormation | GetOrganizationPercentage |  | CFixedPoint | Category: nonconst |
| MilitaryFormation | GetOrganizationRaw |  | CFixedPoint | Category: nonconst |
| MilitaryFormation | GetOrganizationTargetDesc |  | CString | Category: nonconst |
| MilitaryFormation | GetOrganizationTargetFormatted |  | CString | Category: nonconst |
| MilitaryFormation | GetOrganizationTargetPercentage |  | CFixedPoint | Category: nonconst |
| MilitaryFormation | GetOrganizationTargetRaw |  | CFixedPoint | Category: nonconst |
| MilitaryFormation | GetPowerProjection |  | CFixedPoint | Category: nonconst |
| MilitaryFormation | GetPowerProjectionDesc |  | CString | Category: nonconst |
| MilitaryFormation | GetPrimaryCultureForGroup | 1. Unknown | Culture | Category: nonconst |
| MilitaryFormation | GetPrimaryCultureForType | 1. Unknown | Culture | Category: nonconst |
| MilitaryFormation | GetRegularPowerProjection |  | CFixedPoint | Category: nonconst |
| MilitaryFormation | GetRegularPowerProjectionDesc |  | CString | Category: nonconst |
| MilitaryFormation | GetRegularUnitsByTypeBreakdown | 1. CombatUnitType | CString | Category: nonconst |
| MilitaryFormation | GetRegularsGroupsBreakdown |  | CString | Category: nonconst |
| MilitaryFormation | GetRegularsMobilizationPercentage |  | CFixedPoint | Category: nonconst |
| MilitaryFormation | GetRepairProgress |  | CFixedPoint | Category: nonconst |
| MilitaryFormation | GetSeaPresence |  | CFixedPoint | Category: nonconst |
| MilitaryFormation | GetSeaPresencePerDay |  | CFixedPoint | Category: nonconst |
| MilitaryFormation | GetSelectedUnitTypeForGroup | 1. CombatUnitGroup | CombatUnitType | Category: nonconst |
| MilitaryFormation | GetSetDefaultUnitTypeCommand | 1. CombatUnitType | Command | Category: nonconst |
| MilitaryFormation | GetShippingLane |  | ShippingLane | Category: nonconst |
| MilitaryFormation | GetShippingLaneDesc |  | CString | Category: nonconst |
| MilitaryFormation | GetShortFormationStatusDesc |  | CString | Category: nonconst |
| MilitaryFormation | GetSupply |  | CString | Category: nonconst |
| MilitaryFormation | GetSupplyRaw |  | CFixedPoint | Category: nonconst |
| MilitaryFormation | GetSupplyTooltip |  | CString | Category: nonconst |
| MilitaryFormation | GetTargetSeaNode |  | Province | Category: nonconst |
| MilitaryFormation | GetTooltipTag |  | CString | Category: nonconst |
| MilitaryFormation | GetTravelDaysLeft |  | int32 | Category: nonconst |
| MilitaryFormation | GetTravelTimeLeftLabel |  | CString | Category: nonconst |
| MilitaryFormation | GetUnitIcon |  | CString | Category: nonconst |
| MilitaryFormation | GetUnitLabel |  | CString | Category: nonconst |
| MilitaryFormation | GetUnitTypesByConscriptsGroupBreakdown | 1. CombatUnitGroup | CString | Category: nonconst |
| MilitaryFormation | GetUnitTypesByFlotillaGroupBreakdown | 1. CombatUnitGroup | CString | Category: nonconst |
| MilitaryFormation | GetUnitTypesByRegularsGroupBreakdown | 1. CombatUnitGroup | CString | Category: nonconst |
| MilitaryFormation | GetUpgradeAllUnitsCommand |  | Command | Category: nonconst |
| MilitaryFormation | GetUpgradeConscriptUnitTypeCommand | 1. CombatUnitType | Command | Category: nonconst |
| MilitaryFormation | GetUpgradeRegularUnitTypeCommand | 1. CombatUnitType | Command | Category: nonconst |
| MilitaryFormation | GetUpgradeUnitGroupCommand | 1. CombatUnitGroup | Command | Category: nonconst |
| MilitaryFormation | HasInvasion |  | bool |  |
| MilitaryFormation | HasRaisedConscripts |  | bool |  |
| MilitaryFormation | HasSelectedUnitTypeForGroup | 1. CombatUnitGroup | bool |  |
| MilitaryFormation | HasShippingLane |  | bool |  |
| MilitaryFormation | HasTooManySpecialUnits |  | bool |  |
| MilitaryFormation | HasTooManySpecialUnitsExpected |  | bool |  |
| MilitaryFormation | HasTooManySpecialUnitsExpectedInGroup | 1. CombatUnitGroup | bool |  |
| MilitaryFormation | HasTooManySpecialUnitsInGroup | 1. CombatUnitGroup | bool |  |
| MilitaryFormation | IsAdvancing |  | bool |  |
| MilitaryFormation | IsAdvancingInBattle |  | bool |  |
| MilitaryFormation | IsArmy |  | bool |  |
| MilitaryFormation | IsBeingHighlighted |  | bool |  |
| MilitaryFormation | IsBeingTutorialHighlighted |  | bool |  |
| MilitaryFormation | IsConscriptUnitTypeUpgrading | 1. CombatUnitType | bool |  |
| MilitaryFormation | IsCurrentHQ | 1. Unknown | bool |  |
| MilitaryFormation | IsCurrentSeaNode | 1. Unknown | bool |  |
| MilitaryFormation | IsDefendingInBattle |  | bool |  |
| MilitaryFormation | IsDemobilizing |  | bool |  |
| MilitaryFormation | IsExiled |  | bool |  |
| MilitaryFormation | IsFleet |  | bool |  |
| MilitaryFormation | IsFullyDefeated |  | bool |  |
| MilitaryFormation | IsFullyMobilized |  | bool |  |
| MilitaryFormation | IsInBattle |  | bool |  |
| MilitaryFormation | IsMobilized |  | bool |  |
| MilitaryFormation | IsMobilizing |  | bool |  |
| MilitaryFormation | IsPinnedInOutliner |  | bool |  |
| MilitaryFormation | IsReadyToDefendNavalInvasion |  | bool |  |
| MilitaryFormation | IsRegularUnitTypeUpgrading | 1. CombatUnitType | bool |  |
| MilitaryFormation | IsSelected |  | bool |  |
| MilitaryFormation | IsTargetHQ | 1. Unknown | bool |  |
| MilitaryFormation | IsTargetSeaNode | 1. Unknown | bool |  |
| MilitaryFormation | IsTraveling |  | bool |  |
| MilitaryFormation | IsValid |  | bool |  |
| MilitaryFormation | IsZoomingToMapMarkerPosition |  | bool |  |
| MilitaryFormation | MakeScope |  | Scope |  |
| MilitaryFormation | Mobilize |  | Command |  |
| MilitaryFormation | OnClickRecruitCombatUnit | 1. CombatUnitType | void |  |
| MilitaryFormation | OnClickRecruitConscript | 1. CombatUnitType | void |  |
| MilitaryFormation | OnDeployToFrontClicked |  | void |  |
| MilitaryFormation | OnDeployToSeaNodeClicked |  | void |  |
| MilitaryFormation | OnInvasionClicked |  | void |  |
| MilitaryFormation | OnRehomeClicked |  | void |  |
| MilitaryFormation | OnSetStrategicObjectiveClicked |  | void |  |
| MilitaryFormation | OnStationClicked |  | void |  |
| MilitaryFormation | RaiseConscripts |  | Command |  |
| MilitaryFormation | Select |  | void |  |
| MilitaryFormation | Self |  | MilitaryFormation |  |
| MilitaryFormation | TogglePinInOutliner |  | void |  |
| MilitaryFormation | ToggleSelected |  | void |  |
| MilitaryFormation | ZoomToMapMarkerPosition |  | void |  |
| MilitaryFormationBorrowSetting | AccessSelf |  | MilitaryFormationBorrowSetting | Category: const |
| MilitaryFormationBorrowSetting | GetBorrowingCommand |  | Command | Category: nonconst |
| MilitaryFormationBorrowSetting | GetDesc |  | CString | Category: nonconst |
| MilitaryFormationBorrowSetting | GetName |  | CString | Category: nonconst |
| MilitaryFormationBorrowSetting | IsSelected |  | bool |  |
| MilitaryFormationBorrowSetting | OnClicked |  | void |  |
| MilitaryFormationBorrowSetting | Self |  | MilitaryFormationBorrowSetting |  |
| MilitaryFormationChangeNamePopup | AccessSelf |  | MilitaryFormationChangeNamePopup | Category: const |
| MilitaryFormationChangeNamePopup | Confirm |  | Command |  |
| MilitaryFormationChangeNamePopup | GetArmyFormationColors |  | Unknown | Category: nonconst |
| MilitaryFormationChangeNamePopup | GetArmyFormationFlags |  | Unknown | Category: nonconst |
| MilitaryFormationChangeNamePopup | GetCurrentUnitName |  | CString | Category: nonconst |
| MilitaryFormationChangeNamePopup | GetFleetFormationColors |  | Unknown | Category: nonconst |
| MilitaryFormationChangeNamePopup | GetFleetFormationFlags |  | Unknown | Category: nonconst |
| MilitaryFormationChangeNamePopup | GetFormation |  | MilitaryFormation | Category: nonconst |
| MilitaryFormationChangeNamePopup | GetSelectedColor |  | CVector4f | Category: nonconst |
| MilitaryFormationChangeNamePopup | IsColorSelected | 1. Unknown | bool |  |
| MilitaryFormationChangeNamePopup | IsFlagSelected | 1. Unknown | bool |  |
| MilitaryFormationChangeNamePopup | IsNameUnitsAfterCultureSelected |  | bool |  |
| MilitaryFormationChangeNamePopup | IsNameUnitsAfterStateSelected |  | bool |  |
| MilitaryFormationChangeNamePopup | OnEditName |  | void |  |
| MilitaryFormationChangeNamePopup | OnSelectColor | 1. Unknown | void |  |
| MilitaryFormationChangeNamePopup | OnSelectFlag | 1. Unknown | void |  |
| MilitaryFormationChangeNamePopup | SelectNameUnitsAfterCulture |  | void |  |
| MilitaryFormationChangeNamePopup | SelectNameUnitsAfterState |  | void |  |
| MilitaryFormationChangeNamePopup | Self |  | MilitaryFormationChangeNamePopup |  |
| MilitaryFormationColor | AccessSelf |  | MilitaryFormationColor | Category: const |
| MilitaryFormationColor | GetColor |  | CVector4f | Category: nonconst |
| MilitaryFormationColor | Self |  | MilitaryFormationColor |  |
| MilitaryFormationFlag | AccessSelf |  | MilitaryFormationFlag | Category: const |
| MilitaryFormationFlag | GetIcon |  | Unknown | Category: nonconst |
| MilitaryFormationFlag | GetKey |  | CString | Category: nonconst |
| MilitaryFormationFlag | GetName |  | CString | Category: nonconst |
| MilitaryFormationFlag | GetTooltipTag |  | CString | Category: nonconst |
| MilitaryFormationFlag | Self |  | MilitaryFormationFlag |  |
| MilitaryFormationUnitEntry | AccessSelf |  | MilitaryFormationUnitEntry | Category: const |
| MilitaryFormationUnitEntry | GetCombatUnits |  | Unknown | Category: nonconst |
| MilitaryFormationUnitEntry | GetCurrentNumConscriptUnits |  | int32 | Category: nonconst |
| MilitaryFormationUnitEntry | GetCurrentNumRegularUnits |  | int32 | Category: nonconst |
| MilitaryFormationUnitEntry | GetCurrentNumTotalUnits |  | int32 | Category: nonconst |
| MilitaryFormationUnitEntry | GetExpectedNumConscriptUnits |  | int32 | Category: nonconst |
| MilitaryFormationUnitEntry | GetExpectedNumRegularUnits |  | int32 | Category: nonconst |
| MilitaryFormationUnitEntry | GetExpectedNumTotalUnits |  | int32 | Category: nonconst |
| MilitaryFormationUnitEntry | GetIDString |  | CString | Category: nonconst |
| MilitaryFormationUnitEntry | GetMobilization |  | CFixedPoint | Category: nonconst |
| MilitaryFormationUnitEntry | GetRegularUnitsAndRaisedConscripts |  | Unknown | Category: nonconst |
| MilitaryFormationUnitEntry | GetUnitType |  | CombatUnitType | Category: nonconst |
| MilitaryFormationUnitEntry | IsForGroup | 1. CombatUnitGroup | bool |  |
| MilitaryFormationUnitEntry | IsFullyMobilized |  | bool |  |
| MilitaryFormationUnitEntry | IsMobilizing |  | bool |  |
| MilitaryFormationUnitEntry | Self |  | MilitaryFormationUnitEntry |  |
| MilitaryPanelBuildingEntry | AccessSelf |  | MilitaryPanelBuildingEntry | Category: const |
| MilitaryPanelBuildingEntry | GetBuilding |  | Building | Category: nonconst |
| MilitaryPanelBuildingEntry | IsExpanded |  | bool |  |
| MilitaryPanelBuildingEntry | Self |  | MilitaryPanelBuildingEntry |  |
| MilitaryPanelBuildingEntry | ToggleExpand |  | void |  |
| MixBrushMode | AccessSelf |  | MixBrushMode | Category: const |
| MixBrushMode | IsSelected |  | bool |  |
| MixBrushMode | Self |  | MixBrushMode |  |
| MobilizationOption | AccessSelf |  | MobilizationOption | Category: const |
| MobilizationOption | CanBeTurnedOff | 1. Unknown | bool |  |
| MobilizationOption | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| MobilizationOption | GetDesc |  | CString | Category: nonconst |
| MobilizationOption | GetName |  | CString | Category: nonconst |
| MobilizationOption | GetNameNoFormatting |  | CString | Category: nonconst |
| MobilizationOption | GetNumActiveForSelected |  | int32 | Category: nonconst |
| MobilizationOption | GetNumBlockedForSelected |  | int32 | Category: nonconst |
| MobilizationOption | GetNumCouldBeActivatedForSelected |  | int32 | Category: nonconst |
| MobilizationOption | GetTexture |  | Unknown | Category: nonconst |
| MobilizationOption | GetTooltip |  | CString | Category: nonconst |
| MobilizationOption | GetTooltipTag |  | CString | Category: nonconst |
| MobilizationOption | GetTooltipWithActivateDesc | 1. MilitaryFormation | CString | Category: nonconst |
| MobilizationOption | GetTooltipWithActivateDescForSelected |  | CString | Category: nonconst |
| MobilizationOption | GetTooltipWithDeactivateDesc | 1. MilitaryFormation | CString | Category: nonconst |
| MobilizationOption | GetTooltipWithDeactivateDescForSelected |  | CString | Category: nonconst |
| MobilizationOption | GetTooltipWithToggleDesc | 1. Unknown | CString | Category: nonconst |
| MobilizationOption | GetUnitModifier |  | Modifier | Category: nonconst |
| MobilizationOption | GetUpkeepModifier |  | Modifier | Category: nonconst |
| MobilizationOption | GetUpkeepUnscaledModifier |  | Modifier | Category: nonconst |
| MobilizationOption | IsActivated | 1. MilitaryFormation | bool |  |
| MobilizationOption | IsActivatedForSelected |  | bool |  |
| MobilizationOption | IsActiveForSomeButNotAllSelected |  | bool |  |
| MobilizationOption | IsBlockedForSomeSelected |  | bool |  |
| MobilizationOption | IsDeactivatedForSelected |  | bool |  |
| MobilizationOption | IsMixedActivationForSelected |  | bool |  |
| MobilizationOption | IsPossible | 1. Unknown | bool |  |
| MobilizationOption | IsShown | 1. Unknown | bool |  |
| MobilizationOption | MakeScope |  | Scope |  |
| MobilizationOption | Self |  | MobilizationOption |  |
| MobilizationOption | Toggle | 1. MilitaryFormation | Command |  |
| MobilizationOption | ToggleForSelected |  | Command |  |
| MobilizationOptionGroup | AccessSelf |  | MobilizationOptionGroup | Category: const |
| MobilizationOptionGroup | GetDesc |  | CString | Category: nonconst |
| MobilizationOptionGroup | GetIcon |  | Unknown | Category: nonconst |
| MobilizationOptionGroup | GetKey |  | CString | Category: nonconst |
| MobilizationOptionGroup | GetMobilizationOptions |  | Unknown | Category: nonconst |
| MobilizationOptionGroup | GetName |  | CString | Category: nonconst |
| MobilizationOptionGroup | GetNameNoFormatting |  | CString | Category: nonconst |
| MobilizationOptionGroup | GetTooltip |  | CString | Category: nonconst |
| MobilizationOptionGroup | GetTooltipTag |  | CString | Category: nonconst |
| MobilizationOptionGroup | GetUpkeepGoodsDescShort | 1. MilitaryFormation | CString | Category: nonconst |
| MobilizationOptionGroup | Self |  | MobilizationOptionGroup |  |
| Modifier | AccessSelf |  | Modifier | Category: const |
| Modifier | GetBreakdownFor | 1. Unknown | ModifierBreakdown | Category: nonconst |
| Modifier | GetDesc |  | CString | Category: nonconst |
| Modifier | GetDescFor | 1. CString | CString | Category: nonconst |
| Modifier | GetDescNoGoods |  | CString | Category: nonconst |
| Modifier | GetEntries |  | Unknown | Category: nonconst |
| Modifier | GetFormattedValueFor | 1. Unknown | CString | Category: nonconst |
| Modifier | GetFullEntryDescFor | 1. Unknown | CString | Category: nonconst |
| Modifier | GetInvertedValueFor | 1. Unknown | CFixedPoint | Category: nonconst |
| Modifier | GetName |  | CString | Category: nonconst |
| Modifier | GetNonFormattedValueWithBreakdownAndNoDecimalsFor | 1. Unknown | CString | Category: nonconst |
| Modifier | GetNonFormattedValueWithBreakdownFor | 1. Unknown | CString | Category: nonconst |
| Modifier | GetTooltipFor | 1. Unknown | CString | Category: nonconst |
| Modifier | GetTooltipTag |  | CString | Category: nonconst |
| Modifier | GetValueFor | 1. Unknown | CFixedPoint | Category: nonconst |
| Modifier | GetValueWithBreakdownFor | 1. Unknown | CString | Category: nonconst |
| Modifier | IsEmpty |  | bool |  |
| Modifier | Self |  | Modifier |  |
| ModifierBreakdown | AccessSelf |  | ModifierBreakdown | Category: const |
| ModifierBreakdown | GetBreakdown |  | CString | Category: nonconst |
| ModifierBreakdown | GetFormattedMultipliedValue |  | CString | Category: nonconst |
| ModifierBreakdown | GetFormattedRawValue |  | CString | Category: nonconst |
| ModifierBreakdown | GetModifier |  | Modifier | Category: nonconst |
| ModifierBreakdown | GetMultipliedValue |  | CFixedPoint | Category: nonconst |
| ModifierBreakdown | GetName |  | CString | Category: nonconst |
| ModifierBreakdown | GetRawValue |  | CFixedPoint | Category: nonconst |
| ModifierBreakdown | GetSourceMultiplier |  | CFixedPoint | Category: nonconst |
| ModifierBreakdown | GetTooltipTag |  | CString | Category: nonconst |
| ModifierBreakdown | GetTypeDescription |  | CString | Category: nonconst |
| ModifierBreakdown | GetTypeName |  | CString | Category: nonconst |
| ModifierBreakdown | Self |  | ModifierBreakdown |  |
| ModifierEntry | AccessSelf |  | ModifierEntry | Category: const |
| ModifierEntry | GetBreakdown |  | CString | Category: nonconst |
| ModifierEntry | GetDesc |  | CString | Category: nonconst |
| ModifierEntry | GetFormattedValue |  | CString | Category: nonconst |
| ModifierEntry | GetName |  | CString | Category: nonconst |
| ModifierEntry | GetTooltip |  | CString | Category: nonconst |
| ModifierEntry | GetValue |  | CFixedPoint | Category: nonconst |
| ModifierEntry | GetValueWithBreakdown |  | CString | Category: nonconst |
| ModifierEntry | Self |  | ModifierEntry |  |
| ModifierNodeData | AccessSelf |  | ModifierNodeData | Category: const |
| ModifierNodeData | GetName |  | CString | Category: nonconst |
| ModifierNodeData | GetTotalCount |  | int32 | Category: nonconst |
| ModifierNodeData | GetUpdatedCount |  | int32 | Category: nonconst |
| ModifierNodeData | GetUpdatedTrend |  | DataTrend | Category: nonconst |
| ModifierNodeData | OpenDetails |  | void |  |
| ModifierNodeData | Self |  | ModifierNodeData |  |
| ModifierNodeDebuggerView | AccessSelf |  | ModifierNodeDebuggerView | Category: const |
| ModifierNodeDebuggerView | GetGraphItems |  | Unknown | Category: nonconst |
| ModifierNodeDebuggerView | GetGraphLines |  | Unknown | Category: nonconst |
| ModifierNodeDebuggerView | Self |  | ModifierNodeDebuggerView |  |
| ModifierNodeDetailsView | AccessSelf |  | ModifierNodeDetailsView | Category: const |
| ModifierNodeDetailsView | GetModifierNodeData |  | ModifierNodeData | Category: nonconst |
| ModifierNodeDetailsView | Self |  | ModifierNodeDetailsView |  |
| ModifierNodeGraphItem | AccessSelf |  | ModifierNodeGraphItem | Category: const |
| ModifierNodeGraphItem | GetKey |  | CString | Category: nonconst |
| ModifierNodeGraphItem | GetModifierNodeData |  | ModifierNodeData | Category: nonconst |
| ModifierNodeGraphItem | GetPosition |  | CVector2f | Category: nonconst |
| ModifierNodeGraphItem | GetTooltip |  | CString | Category: nonconst |
| ModifierNodeGraphItem | Self |  | ModifierNodeGraphItem |  |
| ModifierNodeGraphLine | AccessSelf |  | ModifierNodeGraphLine | Category: const |
| ModifierNodeGraphLine | GetFrom |  | CVector2f | Category: nonconst |
| ModifierNodeGraphLine | GetLineFrom |  | CVector2f | Category: nonconst |
| ModifierNodeGraphLine | GetLineTo |  | CVector2f | Category: nonconst |
| ModifierNodeGraphLine | GetPoints |  | Unknown | Category: nonconst |
| ModifierNodeGraphLine | GetPointsInContainer |  | Unknown | Category: nonconst |
| ModifierNodeGraphLine | GetPosition |  | CVector2f | Category: nonconst |
| ModifierNodeGraphLine | GetSize |  | CVector2f | Category: nonconst |
| ModifierNodeGraphLine | GetTo |  | CVector2f | Category: nonconst |
| ModifierNodeGraphLine | IsFromNodeVirtual |  | bool |  |
| ModifierNodeGraphLine | IsToNodeVirtual |  | bool |  |
| ModifierNodeGraphLine | Self |  | ModifierNodeGraphLine |  |
| ModifierNodeListView | AccessSelf |  | ModifierNodeListView | Category: const |
| ModifierNodeListView | GetModifierNodes |  | Unknown | Category: nonconst |
| ModifierNodeListView | Self |  | ModifierNodeListView |  |
| ModifierNodeListView | Sort | 1. CString | void |  |
| ModifiersPanel | AccessSelf |  | ModifiersPanel | Category: const |
| ModifiersPanel | GetModifier |  | Modifier | Category: nonconst |
| ModifiersPanel | GetTimedModifiers |  | Unknown | Category: nonconst |
| ModifiersPanel | Self |  | ModifiersPanel |  |
| MoveTool | AccessSelf |  | MoveTool | Category: const |
| MoveTool | Self |  | MoveTool |  |
| MultiplayerSetupWindow | AccessSelf |  | MultiplayerSetupWindow | Category: const |
| MultiplayerSetupWindow | CanHost |  | bool |  |
| MultiplayerSetupWindow | Cancel |  | void |  |
| MultiplayerSetupWindow | GetDefaultServerName |  | CUTF8String | Category: nonconst |
| MultiplayerSetupWindow | GetDefaultServerPassword |  | CUTF8String | Category: nonconst |
| MultiplayerSetupWindow | Host |  | void |  |
| MultiplayerSetupWindow | HostToolTip |  | CString |  |
| MultiplayerSetupWindow | Self |  | MultiplayerSetupWindow |  |
| MultiplayerSetupWindow | ShouldShowMPConfig |  | bool |  |
| MultiplayerSynchronizationInfo | AccessSelf |  | MultiplayerSynchronizationInfo | Category: const |
| MultiplayerSynchronizationInfo | GetPlayerDatesString |  | CString | Category: nonconst |
| MultiplayerSynchronizationInfo | Self |  | MultiplayerSynchronizationInfo |  |
| MusicPlayer | AccessCategories |  | Unknown | Category: const |
| MusicPlayer | AccessSelf |  | MusicPlayer | Category: const |
| MusicPlayer | AccessTracksFromSelectedCategory |  | Unknown | Category: const |
| MusicPlayer | GetCategoryEnabledText | 1. MusicPlayerCategory | CString | Category: nonconst |
| MusicPlayer | GetCategoryName | 1. MusicPlayerCategory | CString | Category: nonconst |
| MusicPlayer | GetCategoryNameLocKey | 1. Unknown | CString | Category: nonconst |
| MusicPlayer | GetMusicDensity |  | float | Category: nonconst |
| MusicPlayer | GetMusicDensityString |  | CString | Category: nonconst |
| MusicPlayer | GetPlaybackStatusFrameIndex |  | int32 | Category: nonconst |
| MusicPlayer | GetPlayingTrackElapsedTime |  | CString | Category: nonconst |
| MusicPlayer | GetPlayingTrackName |  | CString | Category: nonconst |
| MusicPlayer | GetSelectedCategory |  | Unknown | Category: nonconst |
| MusicPlayer | GetTrackEnabledText | 1. Unknown | CString | Category: nonconst |
| MusicPlayer | GetTrackName | 1. Unknown | CString | Category: nonconst |
| MusicPlayer | GetTrackTextColor | 1. MusicTrack | CVector4f | Category: nonconst |
| MusicPlayer | GetVolume |  | float | Category: nonconst |
| MusicPlayer | GetVolumeString |  | CString | Category: nonconst |
| MusicPlayer | HasSelectedCategory |  | bool |  |
| MusicPlayer | IsPlaying |  | bool |  |
| MusicPlayer | IsSelectedCategory | 1. MusicPlayerCategory | bool |  |
| MusicPlayer | OnNextTrack |  | void |  |
| MusicPlayer | OnSelectAndPlayTrack | 1. MusicTrack | void |  |
| MusicPlayer | OnSelectCategory | 1. MusicPlayerCategory | void |  |
| MusicPlayer | OnSelectTrack | 1. Unknown | void |  |
| MusicPlayer | OnToggleCategoryEnabled | 1. MusicPlayerCategory | void |  |
| MusicPlayer | OnTogglePlayPause |  | void |  |
| MusicPlayer | OnToggleTrackEnabled | 1. MusicTrack | void |  |
| MusicPlayer | Self |  | MusicPlayer |  |
| MusicPlayer | SetMusicDensity |  | void |  |
| MusicPlayer | SetVolume |  | void |  |
| MusicPlayerCategory | AccessSelf |  | MusicPlayerCategory | Category: const |
| MusicPlayerCategory | GetName |  | CString | Category: nonconst |
| MusicPlayerCategory | GetNameLocKey |  | CString | Category: nonconst |
| MusicPlayerCategory | GetTexture |  | Unknown | Category: nonconst |
| MusicPlayerCategory | GetTracks |  | Unknown | Category: nonconst |
| MusicPlayerCategory | HasTexture |  | bool |  |
| MusicPlayerCategory | IsEnabled |  | bool |  |
| MusicPlayerCategory | IsPlaying |  | bool |  |
| MusicPlayerCategory | Self |  | MusicPlayerCategory |  |
| MusicTrack | AccessSelf |  | MusicTrack | Category: const |
| MusicTrack | GetCategory |  | Unknown | Category: nonconst |
| MusicTrack | GetName |  | CString | Category: nonconst |
| MusicTrack | IsEnabled |  | bool |  |
| MusicTrack | IsPlaying |  | bool |  |
| MusicTrack | Self |  | MusicTrack |  |
| NationalAwakeningMarker | AccessSelf |  | NationalAwakeningMarker | Category: const |
| NationalAwakeningMarker | GetPosition |  | CVector2f | Category: nonconst |
| NationalAwakeningMarker | Self |  | NationalAwakeningMarker |  |
| NationalizeBuildingGroup | AccessSelf |  | NationalizeBuildingGroup | Category: const |
| NationalizeBuildingGroup | GetColor |  | CVector4f | Category: nonconst |
| NationalizeBuildingGroup | GetErrors |  | CString | Category: nonconst |
| NationalizeBuildingGroup | GetFilterMaxLevels | 1. CString | int32 | Category: nonconst |
| NationalizeBuildingGroup | GetFilterNumSelectedLevels | 1. CString | int32 | Category: nonconst |
| NationalizeBuildingGroup | GetInvestor |  | Country | Category: nonconst |
| NationalizeBuildingGroup | GetMaxLevels |  | int32 | Category: nonconst |
| NationalizeBuildingGroup | GetName |  | CString | Category: nonconst |
| NationalizeBuildingGroup | GetNumSelectedLevels |  | int32 | Category: nonconst |
| NationalizeBuildingGroup | GetSelectedLevelsDesc |  | CString | Category: nonconst |
| NationalizeBuildingGroup | HasFilter | 1. Unknown | bool |  |
| NationalizeBuildingGroup | IsGovernment |  | bool |  |
| NationalizeBuildingGroup | IsNationalizable |  | bool |  |
| NationalizeBuildingGroup | IsPrivate |  | bool |  |
| NationalizeBuildingGroup | OnSelectedLevelsEditboxValueChanged |  | void |  |
| NationalizeBuildingGroup | OnSelectedLevelsSliderValueChanged |  | void |  |
| NationalizeBuildingGroup | Self |  | NationalizeBuildingGroup |  |
| NationalizeBuildingGroup | SetFilter | 1. Unknown | void |  |
| NationalizeBuildingTypeGroup | AccessSelf |  | NationalizeBuildingTypeGroup | Category: const |
| NationalizeBuildingTypeGroup | GetBuildingType |  | BuildingType | Category: nonconst |
| NationalizeBuildingTypeGroup | GetCurrentLevels |  | int32 | Category: nonconst |
| NationalizeBuildingTypeGroup | GetMaxLevels |  | int32 | Category: nonconst |
| NationalizeBuildingTypeGroup | GetSelectedBuildingsBreakdown |  | CString | Category: nonconst |
| NationalizeBuildingTypeGroup | Self |  | NationalizeBuildingTypeGroup |  |
| NationalizeBuildingWindow | AccessSelf |  | NationalizeBuildingWindow | Category: const |
| NationalizeBuildingWindow | CanToggleCompensation |  | bool |  |
| NationalizeBuildingWindow | GetBuildingGroups |  | Unknown | Category: nonconst |
| NationalizeBuildingWindow | GetBuildingTypeGroups |  | Unknown | Category: nonconst |
| NationalizeBuildingWindow | GetBuildings |  | Unknown | Category: nonconst |
| NationalizeBuildingWindow | GetCanToggleCompensationTooltip |  | CString | Category: nonconst |
| NationalizeBuildingWindow | GetCompensationBreakdown |  | CString | Category: nonconst |
| NationalizeBuildingWindow | GetCompensationShareToInvestmentPool |  | CFixedPoint | Category: nonconst |
| NationalizeBuildingWindow | GetCompensationShareToPlayerInvestmentPool |  | CFixedPoint | Category: nonconst |
| NationalizeBuildingWindow | GetCompensationTotal |  | CFixedPoint | Category: nonconst |
| NationalizeBuildingWindow | GetDamagedRelationsListDesc |  | CString | Category: nonconst |
| NationalizeBuildingWindow | GetNumLevelsToNationalize |  | int32 | Category: nonconst |
| NationalizeBuildingWindow | GetPopRadicalizationListDesc |  | CString | Category: nonconst |
| NationalizeBuildingWindow | HasNationalizableGroup |  | bool |  |
| NationalizeBuildingWindow | IsNationalizingAll |  | bool |  |
| NationalizeBuildingWindow | NationalizeBuildingGroupsConfirm |  | void |  |
| NationalizeBuildingWindow | NationalizeBuildingGroupsGetDesc |  | CString |  |
| NationalizeBuildingWindow | NationalizeBuildingGroupsIsValid |  | bool |  |
| NationalizeBuildingWindow | Self |  | NationalizeBuildingWindow |  |
| NationalizeBuildingWindow | SetNationalizeToAll |  | void |  |
| NationalizeBuildingWindow | SetNationalizeToNone |  | void |  |
| NationalizeBuildingWindow | Sort | 1. Unknown | void |  |
| NationalizeBuildingWindow | ToggleGiveCompensation |  | void |  |
| NationalizeBuildingWindow | WillGiveCompensation |  | bool |  |
| Node | AccessSelf |  | Node | Category: const |
| Node | ContextColor |  | CVector4f |  |
| Node | Description |  | CString |  |
| Node | ErrorColor |  | CVector4f |  |
| Node | ErrorTooltip |  | CString |  |
| Node | GetBackgroundColor |  | CVector4f | Category: nonconst |
| Node | GetId |  | int32 | Category: nonconst |
| Node | GetSelectedColor |  | CVector4f | Category: nonconst |
| Node | HasDescription |  | bool |  |
| Node | HasError |  | bool |  |
| Node | IsSelected |  | bool |  |
| Node | Name |  | CString |  |
| Node | Self |  | Node |  |
| Node | TextColor |  | CVector4f |  |
| Node | Texture |  | Unknown |  |
| Node | Tooltip |  | CString |  |
| NodeEditorSearch | AccessSelf |  | NodeEditorSearch | Category: const |
| NodeEditorSearch | ClearSearchText |  | void |  |
| NodeEditorSearch | CurrentResultIndex |  | int32 |  |
| NodeEditorSearch | GetSearchText |  | CUTF8String | Category: nonconst |
| NodeEditorSearch | GoToNextResult |  | void |  |
| NodeEditorSearch | GoToPreviousResult |  | void |  |
| NodeEditorSearch | HasOccurrences |  | bool |  |
| NodeEditorSearch | Hide |  | void |  |
| NodeEditorSearch | IsVisible |  | bool |  |
| NodeEditorSearch | NumOccurrences |  | int32 |  |
| NodeEditorSearch | Search |  | void |  |
| NodeEditorSearch | Self |  | NodeEditorSearch |  |
| NodeError | AccessSelf |  | NodeError | Category: const |
| NodeError | GoTo |  | void |  |
| NodeError | Message |  | CString |  |
| NodeError | Node |  | int32 |  |
| NodeError | Self |  | NodeError |  |
| NodeLine | AccessSelf |  | NodeLine | Category: const |
| NodeLine | Color |  | CVector4f |  |
| NodeLine | From |  | CVector2f |  |
| NodeLine | GetAnimationSpeed |  | CVector2f | Category: nonconst |
| NodeLine | GetOwnerNodeId |  | int32 | Category: nonconst |
| NodeLine | Highlighted |  | bool |  |
| NodeLine | IsDisabled |  | bool |  |
| NodeLine | Self |  | NodeLine |  |
| NodeLine | SetHighlightedDirectly | 1. bool | void |  |
| NodeLine | SetSelected | 1. bool | void |  |
| NodeLine | To |  | CVector2f |  |
| NodeLine | Tooltip |  | Unknown |  |
| NodeLine | Width |  | float |  |
| NodePin | AccessSelf |  | NodePin | Category: const |
| NodePin | Color |  | CVector4f |  |
| NodePin | DrawAsConnected |  | bool |  |
| NodePin | Highlight |  | bool |  |
| NodePin | IsInlinedNodeConnected |  | bool |  |
| NodePin | IsNodePinDisplayNameEmpty |  | bool |  |
| NodePin | Name |  | CString |  |
| NodePin | Self |  | NodePin |  |
| NodePin | Tooltip |  | CString |  |
| NodePin | TypeColor |  | CVector4f |  |
| NodeWindow | AccessSelf |  | NodeWindow | Category: const |
| NodeWindow | Close |  | void |  |
| NodeWindow | DescriptionDialog |  | void |  |
| NodeWindow | NameDialog |  | void |  |
| NodeWindow | Self |  | NodeWindow |  |
| NodeWindow | SetDescription |  | void |  |
| NonRegisteredDockable | AccessSelf |  | NonRegisteredDockable | Category: const |
| NonRegisteredDockable | GetID |  | CString | Category: nonconst |
| NonRegisteredDockable | Self |  | NonRegisteredDockable |  |
| NotificationDummyContext | AccessSelf |  | NotificationDummyContext | Category: const |
| NotificationDummyContext | Self |  | NotificationDummyContext |  |
| NotificationOptionItem | AccessSelf |  | NotificationOptionItem | Category: const |
| NotificationOptionItem | GetName |  | CString | Category: nonconst |
| NotificationOptionItem | GetNameWithConcept |  | CString | Category: nonconst |
| NotificationOptionItem | IsDefault |  | bool |  |
| NotificationOptionItem | Self |  | NotificationOptionItem |  |
| NotificationSettingsItem | AccessSelf |  | NotificationSettingsItem | Category: const |
| NotificationSettingsItem | GetCurrentOption |  | NotificationOptionItem | Category: nonconst |
| NotificationSettingsItem | GetName |  | CString | Category: nonconst |
| NotificationSettingsItem | GetTag |  | CString | Category: nonconst |
| NotificationSettingsItem | GetValidOptions |  | Unknown | Category: nonconst |
| NotificationSettingsItem | HasAutoPause |  | bool |  |
| NotificationSettingsItem | OnSelectOption |  | void |  |
| NotificationSettingsItem | Self |  | NotificationSettingsItem |  |
| NotificationSettingsItem | ToggleAutoPause |  | void |  |
| Nudger | AccessSelf |  | Nudger | Category: const |
| Nudger | CreateNewBlankMapObjectType |  | void |  |
| Nudger | DeleteSelected |  | void |  |
| Nudger | Deselect |  | void |  |
| Nudger | FocusCameraOnSelection |  | void |  |
| Nudger | IsAnyMapObjectExpanded |  | bool |  |
| Nudger | IsAnyMapObjectHidden |  | bool |  |
| Nudger | IsAnyMapObjectLocked |  | bool |  |
| Nudger | IsAnyObjectEntrySelected |  | bool |  |
| Nudger | IsAnyObjectSelected |  | bool |  |
| Nudger | IsAnySelectedMapObjectDynamicType |  | bool |  |
| Nudger | IsMultiSpawnEnabled |  | bool |  |
| Nudger | OnMapObjectSelected | 1. Unknown | void |  |
| Nudger | SelectAll |  | void |  |
| Nudger | Self |  | Nudger |  |
| Nudger | SetAllMapObjectsExpanded | 1. bool | void |  |
| Nudger | SetAllMapObjectsHidden | 1. bool | void |  |
| Nudger | SetAllMapObjectsLocked | 1. bool | void |  |
| Nudger | SetMapObjectHidden | 1. Unknown 2. Unknown | void |  |
| Nudger | SetMapObjectLocked | 1. Unknown 2. Unknown | void |  |
| Nudger | SetMapObjectLockedExclusive | 1. Unknown 2. Unknown | void |  |
| Nudger | SetMultiSpawnEnabled | 1. bool | void |  |
| Nudger | ToggleInstancesClampToWaterLevel |  | void |  |
| Nudger | ToggleInstancesRenderUnderwater |  | void |  |
| NudgerLayerEntryMapObjectDesc | AccessSelf |  | NudgerLayerEntryMapObjectDesc | Category: const |
| NudgerLayerEntryMapObjectDesc | GetName |  | CString | Category: nonconst |
| NudgerLayerEntryMapObjectDesc | IsAutoNudgingError |  | bool |  |
| NudgerLayerEntryMapObjectDesc | IsLocked |  | bool |  |
| NudgerLayerEntryMapObjectDesc | IsSelected |  | bool |  |
| NudgerLayerEntryMapObjectDesc | Select |  | void |  |
| NudgerLayerEntryMapObjectDesc | Self |  | NudgerLayerEntryMapObjectDesc |  |
| NudgerLayerEntryMapObjectDesc | SetLocked | 1. bool | void |  |
| NudgerMapContentGui | AccessSelf |  | NudgerMapContentGui | Category: const |
| NudgerMapContentGui | AutoNudgeSelection |  | void |  |
| NudgerMapContentGui | GetAutoNudgingReadyProgress |  | float | Category: nonconst |
| NudgerMapContentGui | IsAutoNudgePreviewEnabled |  | bool |  |
| NudgerMapContentGui | IsAutoNudgingReady |  | bool |  |
| NudgerMapContentGui | IsAutoNudgingSettingsOpen |  | bool |  |
| NudgerMapContentGui | IsAutoNudgingSupported |  | bool |  |
| NudgerMapContentGui | Self |  | NudgerMapContentGui |  |
| NudgerMapContentGui | SetAutoNudgePreviewEnabled | 1. Unknown | void |  |
| NudgerMapContentGui | SetAutoNudgingSettingsOpen | 1. Unknown | void |  |
| NudgerMapObjectPropertyListDockable | AccessSelf |  | NudgerMapObjectPropertyListDockable | Category: const |
| NudgerMapObjectPropertyListDockable | Delete |  | void |  |
| NudgerMapObjectPropertyListDockable | HasEntry |  | bool |  |
| NudgerMapObjectPropertyListDockable | IsGenerate |  | bool |  |
| NudgerMapObjectPropertyListDockable | Self |  | NudgerMapObjectPropertyListDockable |  |
| NudgerMode | AccessSelf |  | NudgerMode | Category: const |
| NudgerMode | IsSelected |  | bool |  |
| NudgerMode | Self |  | NudgerMode |  |
| ObjectBrowser | AccessSelf |  | ObjectBrowser | Category: const |
| ObjectBrowser | CopyAsCSV |  | void |  |
| ObjectBrowser | CreateNewPreset |  | void |  |
| ObjectBrowser | DeleteSelectedPreset |  | void |  |
| ObjectBrowser | ForceUpdate |  | void |  |
| ObjectBrowser | GetFilterString |  | CUTF8String | Category: nonconst |
| ObjectBrowser | GetNumObjectsFiltered |  | int32 | Category: nonconst |
| ObjectBrowser | GetNumObjectsTotal |  | int32 | Category: nonconst |
| ObjectBrowser | GetPresets |  | Unknown | Category: nonconst |
| ObjectBrowser | GetProviders |  | Unknown | Category: nonconst |
| ObjectBrowser | GetSelectedProvider |  | CVector2i | Category: nonconst |
| ObjectBrowser | GetSelectedView |  | CVector2i | Category: nonconst |
| ObjectBrowser | GetViews |  | Unknown | Category: nonconst |
| ObjectBrowser | HasConfig |  | bool |  |
| ObjectBrowser | IsObjectSelected | 1. int32 | bool |  |
| ObjectBrowser | IsOutputFlattened |  | bool |  |
| ObjectBrowser | IsWaitingForProvider |  | bool |  |
| ObjectBrowser | RenameSelectedPreset |  | void |  |
| ObjectBrowser | RequestUpdate |  | void |  |
| ObjectBrowser | SaveCurrentChanges |  | void |  |
| ObjectBrowser | SaveDefaults |  | void |  |
| ObjectBrowser | SelectProvider |  | void |  |
| ObjectBrowser | SelectView |  | void |  |
| ObjectBrowser | Self |  | ObjectBrowser |  |
| ObjectBrowser | SetFilterString |  | void |  |
| ObjectBrowser | SetObjectSelected | 1. Unknown | void |  |
| ObjectBrowser | SetSelectedPreset | 1. ObjectPreset | void |  |
| ObjectBrowser | ToggleObjectSelected | 1. int32 | void |  |
| ObjectBrowser | ToggleOutputFlattened |  | void |  |
| ObjectBrowserView | AccessSelf |  | ObjectBrowserView | Category: const |
| ObjectBrowserView | Name |  | CUTF8String |  |
| ObjectBrowserView | Self |  | ObjectBrowserView |  |
| ObjectInspector | AccessPluginEntries |  | Unknown | Category: const |
| ObjectInspector | AccessSelf |  | ObjectInspector | Category: const |
| ObjectInspector | GetObjectName |  | CUTF8String | Category: nonconst |
| ObjectInspector | GetTypeName |  | CUTF8String | Category: nonconst |
| ObjectInspector | Self |  | ObjectInspector |  |
| ObjectInspectorDockable | AccessSelf |  | ObjectInspectorDockable | Category: const |
| ObjectInspectorDockable | Detach |  | void |  |
| ObjectInspectorDockable | IsAttached |  | bool |  |
| ObjectInspectorDockable | Self |  | ObjectInspectorDockable |  |
| ObjectInspectorPlugin | AccessSelf |  | ObjectInspectorPlugin | Category: const |
| ObjectInspectorPlugin | GetErrorMessage |  | CUTF8String | Category: nonconst |
| ObjectInspectorPlugin | GetTitle |  | CUTF8String | Category: nonconst |
| ObjectInspectorPlugin | HasError |  | bool |  |
| ObjectInspectorPlugin | Self |  | ObjectInspectorPlugin |  |
| ObjectPreset | AccessSelf |  | ObjectPreset | Category: const |
| ObjectPreset | IsSelected |  | bool |  |
| ObjectPreset | PresetName |  | CUTF8String |  |
| ObjectPreset | Self |  | ObjectPreset |  |
| ObjectProvider | AccessSelf |  | ObjectProvider | Category: const |
| ObjectProvider | Name |  | CUTF8String |  |
| ObjectProvider | RequestUpdate |  | void |  |
| ObjectProvider | Self |  | ObjectProvider |  |
| Objective | AccessSelf |  | Objective | Category: const |
| Objective | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| Objective | GetDesc |  | CString | Category: nonconst |
| Objective | GetDescForCountryDef | 1. Unknown | CString | Category: nonconst |
| Objective | GetDisabledBackground |  | Unknown | Category: nonconst |
| Objective | GetEnabledBackground |  | Unknown | Category: nonconst |
| Objective | GetIcon |  | Unknown | Category: nonconst |
| Objective | GetName |  | CString | Category: nonconst |
| Objective | GetNameNoFormatting |  | CString | Category: nonconst |
| Objective | GetObjectiveType |  | ObjectiveType | Category: nonconst |
| Objective | GetTooltipTag |  | CString | Category: nonconst |
| Objective | MakeScope |  | Scope |  |
| Objective | Self |  | Objective |  |
| ObjectiveType | AccessSelf |  | ObjectiveType | Category: const |
| ObjectiveType | GetDesc |  | CString | Category: nonconst |
| ObjectiveType | GetDescForCountryDef | 1. CountryDefinition | CString | Category: nonconst |
| ObjectiveType | GetDisabledBackground |  | Unknown | Category: nonconst |
| ObjectiveType | GetEnabledBackground |  | Unknown | Category: nonconst |
| ObjectiveType | GetIcon |  | Unknown | Category: nonconst |
| ObjectiveType | GetIdleHeader |  | CString | Category: nonconst |
| ObjectiveType | GetIdleHint |  | CString | Category: nonconst |
| ObjectiveType | GetIsAvailableDescription |  | CString | Category: nonconst |
| ObjectiveType | GetName |  | CString | Category: nonconst |
| ObjectiveType | GetNameForCountryDef | 1. CountryDefinition | CString | Category: nonconst |
| ObjectiveType | GetNameNoFormatting |  | CString | Category: nonconst |
| ObjectiveType | GetRecommendedGameRules |  | Unknown | Category: nonconst |
| ObjectiveType | GetRecommendedTags |  | Unknown | Category: nonconst |
| ObjectiveType | GetTooltipTag |  | CString | Category: nonconst |
| ObjectiveType | HasRecommendedGameRules |  | bool |  |
| ObjectiveType | IsAvailable |  | bool |  |
| ObjectiveType | IsAvailableForAllCountries |  | bool |  |
| ObjectiveType | Self |  | ObjectiveType |  |
| ObstinanceMarker | AccessSelf |  | ObstinanceMarker | Category: const |
| ObstinanceMarker | GetPosition |  | CVector2f | Category: nonconst |
| ObstinanceMarker | Self |  | ObstinanceMarker |  |
| OccupationPiechartData | AccessSelf |  | OccupationPiechartData | Category: const |
| OccupationPiechartData | GetCountry |  | Country | Category: nonconst |
| OccupationPiechartData | GetCountryColor |  | CVector4f | Category: nonconst |
| OccupationPiechartData | GetOccupationFraction |  | CFixedPoint | Category: nonconst |
| OccupationPiechartData | Self |  | OccupationPiechartData |  |
| OosData | AccessSelf |  | OosData | Category: const |
| OosData | GetFolder |  | CString | Category: nonconst |
| OosData | GetPlayerId |  | int32 | Category: nonconst |
| OosData | GetPlayerName |  | CString | Category: nonconst |
| OosData | GetType |  | CString | Category: nonconst |
| OosData | IsLocalPlayer |  | bool |  |
| OosData | IsObserver |  | bool |  |
| OosData | Self |  | OosData |  |
| OosWindow | AccessSelf |  | OosWindow | Category: const |
| OosWindow | Close |  | void |  |
| OosWindow | Continue |  | void |  |
| OosWindow | GetOosData |  | Unknown | Category: nonconst |
| OosWindow | GoToMenu |  | void |  |
| OosWindow | IsLocalOos |  | bool |  |
| OosWindow | IsMultiplayerHost |  | bool |  |
| OosWindow | Resync |  | void |  |
| OosWindow | Self |  | OosWindow |  |
| OpinionMarker | AccessSelf |  | OpinionMarker | Category: const |
| OpinionMarker | GetCountry |  | Country | Category: nonconst |
| OpinionMarker | GetPosition |  | CVector2f | Category: nonconst |
| OpinionMarker | Self |  | OpinionMarker |  |
| OutgoingFriendRequest | AccessSelf |  | OutgoingFriendRequest | Category: const |
| OutgoingFriendRequest | GetName |  | CUTF8String | Category: nonconst |
| OutgoingFriendRequest | Remove |  | void |  |
| OutgoingFriendRequest | Self |  | OutgoingFriendRequest |  |
| Outliner | AccessPlayers |  | Unknown | Category: const |
| Outliner | AccessSelf |  | Outliner | Category: const |
| Outliner | Self |  | Outliner |  |
| OutlinerEntry | AccessScope |  | Scope | Category: const |
| OutlinerEntry | AccessSelf |  | OutlinerEntry | Category: const |
| OutlinerEntry | AccessSituation |  | Event | Category: const |
| OutlinerEntry | GetKey |  | int32 | Category: nonconst |
| OutlinerEntry | GetNumSubEntries |  | int32 | Category: nonconst |
| OutlinerEntry | GetPinnedSubEntries |  | Unknown | Category: nonconst |
| OutlinerEntry | GetSubEntries |  | Unknown | Category: nonconst |
| OutlinerEntry | GetTitle |  | CString | Category: nonconst |
| OutlinerEntry | IsCategory |  | bool |  |
| OutlinerEntry | IsExpanded |  | bool |  |
| OutlinerEntry | IsPinned |  | bool |  |
| OutlinerEntry | IsPinnedExpanded |  | bool |  |
| OutlinerEntry | IsShown |  | bool |  |
| OutlinerEntry | IsShownPinned |  | bool |  |
| OutlinerEntry | Self |  | OutlinerEntry |  |
| OutlinerEntry | ToggleExpanded |  | void |  |
| OutlinerEntry | TogglePinned |  | void |  |
| OutlinerEntry | TogglePinnedExpanded |  | void |  |
| OutputEntry | AccessSelf |  | OutputEntry | Category: const |
| OutputEntry | GetInputTextures |  | Unknown | Category: nonconst |
| OutputEntry | GetPath |  | CString | Category: nonconst |
| OutputEntry | IsSelected |  | bool |  |
| OutputEntry | IsValid |  | bool |  |
| OutputEntry | Self |  | OutputEntry |  |
| OutputEntry | ToggleIsSelected |  | void |  |
| PanelMilitary | AccessCountry |  | Country | Category: const |
| PanelMilitary | AccessSelf |  | PanelMilitary | Category: const |
| PanelMilitary | CanAnyUnitInAnyPlayerFormationBeUpgraded |  | bool |  |
| PanelMilitary | GetCountry |  | Country | Category: nonconst |
| PanelMilitary | GetUpgradeAllUnitsInAllFormationsCommand |  | Command | Category: nonconst |
| PanelMilitary | OnClickRecruitArmyFormation |  | void |  |
| PanelMilitary | OnClickRecruitFleetFormation |  | void |  |
| PanelMilitary | Self |  | PanelMilitary |  |
| ParametricSelect | AccessSelf |  | ParametricSelect | Category: const |
| ParametricSelect | IsHeightDeltaEnabled |  | bool |  |
| ParametricSelect | IsHeightRangeEnabled |  | bool |  |
| ParametricSelect | Select |  | void |  |
| ParametricSelect | Self |  | ParametricSelect |  |
| ParametricSelect | SetHeightDeltaMax |  | void |  |
| ParametricSelect | SetHeightDeltaMin |  | void |  |
| ParametricSelect | SetHeightRangeMax |  | void |  |
| ParametricSelect | SetHeightRangeMin |  | void |  |
| ParametricSelect | Toggle |  | void |  |
| ParticleUserData | AccessSelf |  | ParticleUserData | Category: const |
| ParticleUserData | Id |  | CString |  |
| ParticleUserData | IsSelected |  | bool |  |
| ParticleUserData | Label |  | CString |  |
| ParticleUserData | Remove |  | void |  |
| ParticleUserData | Self |  | ParticleUserData |  |
| ParticleUserData | ToggleSelected |  | void |  |
| ParticleUserData | TypeName |  | Unknown |  |
| ParticleUserData | TypeSize |  | int32 |  |
| Party | AccessSelf |  | Party | Category: const |
| Party | CanJoinGovernment |  | bool |  |
| Party | GetCanJoinGovernmentDesc |  | CString | Category: nonconst |
| Party | GetColor |  | CVector4f | Category: nonconst |
| Party | GetCountry |  | Country | Category: nonconst |
| Party | GetCurrentPollNumVoters |  | int64 | Category: nonconst |
| Party | GetCurrentPollNumVotersDifference |  | int64 | Category: nonconst |
| Party | GetCurrentPollVotingPower |  | int64 | Category: nonconst |
| Party | GetCurrentPollVotingPowerDifference |  | int64 | Category: nonconst |
| Party | GetCurrentPollVotingPowerShare |  | CFixedPoint | Category: nonconst |
| Party | GetCurrentVotingPower |  | int64 | Category: nonconst |
| Party | GetCurrentVotingPowerShare |  | CFixedPoint | Category: nonconst |
| Party | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| Party | GetElectionVotesTrend |  | DataTrend | Category: nonconst |
| Party | GetIcon |  | Unknown | Category: nonconst |
| Party | GetIndependentIGs |  | Unknown | Category: nonconst |
| Party | GetJoinWeightBreakdown | 1. Unknown | CString | Category: nonconst |
| Party | GetLeader |  | InterestGroup | Category: nonconst |
| Party | GetLeaderCharacter |  | Character | Category: nonconst |
| Party | GetMembers |  | Unknown | Category: nonconst |
| Party | GetMembersBreakdown |  | CString | Category: nonconst |
| Party | GetMembersSummary |  | CString | Category: nonconst |
| Party | GetMomentum |  | CFixedPoint | Category: nonconst |
| Party | GetMomentumDesc |  | CString | Category: nonconst |
| Party | GetName |  | CString | Category: nonconst |
| Party | GetNameNoFormatting |  | CString | Category: nonconst |
| Party | GetNumVotersLastElection |  | int64 | Category: nonconst |
| Party | GetTooltipTag |  | CString | Category: nonconst |
| Party | IsInGovernment |  | bool |  |
| Party | IsValid |  | bool |  |
| Party | MakeScope |  | Scope |  |
| Party | Self |  | Party |  |
| PartyPanel | AccessParty |  | Party | Category: const |
| PartyPanel | AccessSelf |  | PartyPanel | Category: const |
| PartyPanel | GetParty |  | Party | Category: nonconst |
| PartyPanel | Self |  | PartyPanel |  |
| PastBattleMarker | AccessSelf |  | PastBattleMarker | Category: const |
| PastBattleMarker | GetBattle |  | Battle | Category: nonconst |
| PastBattleMarker | GetPosition |  | CVector2f | Category: nonconst |
| PastBattleMarker | Self |  | PastBattleMarker |  |
| PauseMenu | AccessSelf |  | PauseMenu | Category: const |
| PauseMenu | CanLoadIngame |  | bool |  |
| PauseMenu | ExitGame |  | void |  |
| PauseMenu | GetExitName |  | CString | Category: nonconst |
| PauseMenu | IsLobbyOpen |  | bool |  |
| PauseMenu | LoadIngame |  | void |  |
| PauseMenu | LoadIngameTooltip |  | CString |  |
| PauseMenu | OpenLobby |  | void |  |
| PauseMenu | OpenSettings |  | void |  |
| PauseMenu | Resume |  | void |  |
| PauseMenu | Save |  | void |  |
| PauseMenu | Self |  | PauseMenu |  |
| PauseMenu | SwitchCountry |  | void |  |
| PdxAccount | AccessSelf |  | PdxAccount | Category: const |
| PdxAccount | GetLastLinkError |  | Unknown | Category: nonconst |
| PdxAccount | GetLastLinkErrorLocalized |  | CString | Category: nonconst |
| PdxAccount | GetThirdPartyProviderLocalizationKey |  | CString | Category: nonconst |
| PdxAccount | GetThirdPartyProviderLocalizedName |  | CString | Category: nonconst |
| PdxAccount | IsLinkingPossible |  | bool |  |
| PdxAccount | IsLoggedIn |  | bool |  |
| PdxAccount | Self |  | PdxAccount |  |
| PdxCoreSetting | AccessSelf |  | PdxCoreSetting | Category: const |
| PdxCoreSetting | RequireApply |  | bool |  |
| PdxCoreSetting | RequireRestart |  | bool |  |
| PdxCoreSetting | Self |  | PdxCoreSetting |  |
| PdxEnumSetting | AccessSelf |  | PdxEnumSetting | Category: const |
| PdxEnumSetting | HasValueChanged | 1. Unknown | bool |  |
| PdxEnumSetting | Self |  | PdxEnumSetting |  |
| PdxGuiFoldOut | AccessSelf |  | PdxGuiFoldOut | Category: const |
| PdxGuiFoldOut | Fold |  | void |  |
| PdxGuiFoldOut | IsFolded |  | bool |  |
| PdxGuiFoldOut | IsUnfolded |  | bool |  |
| PdxGuiFoldOut | Self |  | PdxGuiFoldOut |  |
| PdxGuiFoldOut | SetFoldState |  | void |  |
| PdxGuiFoldOut | Toggle |  | void |  |
| PdxGuiFoldOut | Unfold |  | void |  |
| PdxGuiGfxVideoControl | AccessSelf |  | PdxGuiGfxVideoControl | Category: const |
| PdxGuiGfxVideoControl | IsLooping |  | bool |  |
| PdxGuiGfxVideoControl | IsPlaybackComplete |  | bool |  |
| PdxGuiGfxVideoControl | IsPlaying |  | bool |  |
| PdxGuiGfxVideoControl | Restart |  | void |  |
| PdxGuiGfxVideoControl | Self |  | PdxGuiGfxVideoControl |  |
| PdxGuiGfxVideoControl | SetLooping | 1. Unknown | void |  |
| PdxGuiGfxVideoControl | Start |  | void |  |
| PdxGuiGfxVideoControl | Stop |  | void |  |
| PdxGuiTableRow | AccessSelf |  | PdxGuiTableRow | Category: const |
| PdxGuiTableRow | GetIndex |  | int32 | Category: nonconst |
| PdxGuiTableRow | Self |  | PdxGuiTableRow |  |
| PdxGuiTreeTable | AccessSelf |  | PdxGuiTreeTable | Category: const |
| PdxGuiTreeTable | CanExpand | 1. int32 | bool |  |
| PdxGuiTreeTable | Expand | 1. Unknown | void |  |
| PdxGuiTreeTable | GetDepth | 1. Unknown | int32 | Category: nonconst |
| PdxGuiTreeTable | GetIndent | 1. int32 2. float | CVector2f | Category: nonconst |
| PdxGuiTreeTable | GetNumChildren | 1. Unknown | int32 | Category: nonconst |
| PdxGuiTreeTable | IsExpanded | 1. int32 | bool |  |
| PdxGuiTreeTable | Self |  | PdxGuiTreeTable |  |
| PdxGuiTreeTable | ToggleExpand | 1. int32 | void |  |
| PdxGuiTreeTable | Unexpand | 1. Unknown | void |  |
| PdxGuiWidget | AccessParent |  | PdxGuiWidget | Category: const |
| PdxGuiWidget | AccessSelf |  | PdxGuiWidget | Category: const |
| PdxGuiWidget | CountVisibleChildren |  | int32 |  |
| PdxGuiWidget | DisableValueUpdate |  | void |  |
| PdxGuiWidget | EnableValueUpdate |  | void |  |
| PdxGuiWidget | FindChild | 1. CString | PdxGuiWidget |  |
| PdxGuiWidget | GetChildrenCount |  | int32 | Category: nonconst |
| PdxGuiWidget | GetIndexInDataModel |  | int32 | Category: nonconst |
| PdxGuiWidget | GetRawShortcut |  | CUTF8String | Category: nonconst |
| PdxGuiWidget | GetShortcut |  | CUTF8String | Category: nonconst |
| PdxGuiWidget | GetTooltipLockProgress |  | float | Category: nonconst |
| PdxGuiWidget | HasContext | 1. CString | bool |  |
| PdxGuiWidget | Hide |  | void |  |
| PdxGuiWidget | InterruptAnimation | 1. Unknown | void |  |
| PdxGuiWidget | InterruptThenTriggerAnimation | 1. CString 2. CString | void |  |
| PdxGuiWidget | IsNestedTooltip |  | bool |  |
| PdxGuiWidget | IsTooltipLocked |  | bool |  |
| PdxGuiWidget | IsVisible |  | bool |  |
| PdxGuiWidget | Parent |  | Unknown |  |
| PdxGuiWidget | Self |  | PdxGuiWidget |  |
| PdxGuiWidget | Show |  | void |  |
| PdxGuiWidget | StackBottom |  | void |  |
| PdxGuiWidget | StackTop |  | void |  |
| PdxGuiWidget | TriggerAnimation | 1. CString | void |  |
| PdxSetting | AccessSelf |  | PdxSetting | Category: const |
| PdxSetting | AccessSetting |  | Unknown | Category: const |
| PdxSetting | ChangesNotSaved |  | bool |  |
| PdxSetting | GetSetting |  | Unknown | Category: nonconst |
| PdxSetting | GetTitle |  | CUTF8String | Category: nonconst |
| PdxSetting | GetTooltip |  | CUTF8String | Category: nonconst |
| PdxSetting | Self |  | PdxSetting |  |
| PdxSettingsWindow | AccessSelf |  | PdxSettingsWindow | Category: const |
| PdxSettingsWindow | AllowApply |  | bool |  |
| PdxSettingsWindow | AllowRestore |  | bool |  |
| PdxSettingsWindow | AppliedOnRestart |  | bool |  |
| PdxSettingsWindow | HasChanged |  | bool |  |
| PdxSettingsWindow | OnApply |  | void |  |
| PdxSettingsWindow | OnCancel |  | void |  |
| PdxSettingsWindow | OnRestore |  | void |  |
| PdxSettingsWindow | OnSave |  | void |  |
| PdxSettingsWindow | Self |  | PdxSettingsWindow |  |
| PdxSettingsWindowCategory | AccessSelf |  | PdxSettingsWindowCategory | Category: const |
| PdxSettingsWindowCategory | GetName |  | CString | Category: nonconst |
| PdxSettingsWindowCategory | Self |  | PdxSettingsWindowCategory |  |
| PdxValueSetting | AccessSelf |  | PdxValueSetting | Category: const |
| PdxValueSetting | GetFormattedPendingValue | 1. Unknown | CString | Category: nonconst |
| PdxValueSetting | GetPendingValue | 1. Unknown | float | Category: nonconst |
| PdxValueSetting | HasValueChanged | 1. Unknown | bool |  |
| PdxValueSetting | Self |  | PdxValueSetting |  |
| PieTimer | AccessSelf |  | PieTimer | Category: const |
| PieTimer | GetSlices |  | Unknown | Category: nonconst |
| PieTimer | GetSlicesInverted |  | Unknown | Category: nonconst |
| PieTimer | Self |  | PieTimer |  |
| PieTimerSlice | AccessSelf |  | PieTimerSlice | Category: const |
| PieTimerSlice | GetColor |  | CVector4f | Category: nonconst |
| PieTimerSlice | GetValue |  | float | Category: nonconst |
| PieTimerSlice | Self |  | PieTimerSlice |  |
| Playable | AccessSelf |  | Playable | Category: const |
| Playable | Self |  | Playable |  |
| Player | AccessPlayedOrObservedCountry |  | Country | Category: const |
| Player | AccessSelf |  | Player | Category: const |
| Player | GetName |  | CString | Category: nonconst |
| Player | GetPlayedOrObservedCountry |  | Country | Category: nonconst |
| Player | GetTooltipTag |  | CString | Category: nonconst |
| Player | HasPlayable |  | bool |  |
| Player | IsHost |  | bool |  |
| Player | IsObserver |  | bool |  |
| Player | IsPlayedOrObservedCountry | 1. Country | bool |  |
| Player | Self |  | Player |  |
| PlayerJoinRequest | Accept |  | void |  |
| PlayerJoinRequest | AccessSelf |  | PlayerJoinRequest | Category: const |
| PlayerJoinRequest | GetPlayerName |  | CString | Category: nonconst |
| PlayerJoinRequest | IsChecked |  | bool |  |
| PlayerJoinRequest | Reject |  | void |  |
| PlayerJoinRequest | Self |  | PlayerJoinRequest |  |
| PlayerJoinRequest | Toggle |  | void |  |
| PlayerMessageItem | AccessSelf |  | PlayerMessageItem | Category: const |
| PlayerMessageItem | GetColor |  | CVector4f | Category: nonconst |
| PlayerMessageItem | GetCountry |  | Country | Category: nonconst |
| PlayerMessageItem | GetDate |  | CString | Category: nonconst |
| PlayerMessageItem | GetDescription |  | CString | Category: nonconst |
| PlayerMessageItem | GetDiploPlay |  | DiplomaticPlay | Category: nonconst |
| PlayerMessageItem | GetDiplomaticAction |  | DiplomaticAction | Category: nonconst |
| PlayerMessageItem | GetInstitution |  | Institution | Category: nonconst |
| PlayerMessageItem | GetLaw |  | Law | Category: nonconst |
| PlayerMessageItem | GetMessageGroupTag |  | CString | Category: nonconst |
| PlayerMessageItem | GetName |  | CString | Category: nonconst |
| PlayerMessageItem | GetOnCreatedSoundEvent |  | Unknown | Category: nonconst |
| PlayerMessageItem | GetPrevLaw |  | Law | Category: nonconst |
| PlayerMessageItem | GetScopeActorCountry |  | Country | Category: nonconst |
| PlayerMessageItem | GetScopeDiploPlay |  | DiplomaticPlay | Category: nonconst |
| PlayerMessageItem | GetScopeTargetCountry |  | Country | Category: nonconst |
| PlayerMessageItem | GetScopeTechnology |  | Technology | Category: nonconst |
| PlayerMessageItem | GetTexture |  | Unknown | Category: nonconst |
| PlayerMessageItem | GetTooltip |  | CString | Category: nonconst |
| PlayerMessageItem | GetTopScope |  | TopScope | Category: nonconst |
| PlayerMessageItem | Self |  | PlayerMessageItem |  |
| PlotLine | AccessSelf |  | PlotLine | Category: const |
| PlotLine | GetInterpolatedIndexNearMouse |  | float | Category: nonconst |
| PlotLine | GetInterpolatedValueNearMouse |  | CVector2f | Category: nonconst |
| PlotLine | GetPlotRect |  | CPdxFloatRect | Category: nonconst |
| PlotLine | GetSnappedIndexNearMouse |  | int32 | Category: nonconst |
| PlotLine | GetSnappedValueNearMouse |  | CVector2f | Category: nonconst |
| PlotLine | HasPositionNearMouse |  | bool |  |
| PlotLine | Self |  | PlotLine |  |
| PoliticalLobby | AccessSelf |  | PoliticalLobby | Category: const |
| PoliticalLobby | CalcJoinWeight | 1. InterestGroup | CFixedPoint |  |
| PoliticalLobby | CalcJoinWeightDesc | 1. InterestGroup | CString |  |
| PoliticalLobby | GetAppeasement |  | int32 | Category: nonconst |
| PoliticalLobby | GetAppeasementChangesDesc |  | CString | Category: nonconst |
| PoliticalLobby | GetAppeasementEffectsDesc |  | CString | Category: nonconst |
| PoliticalLobby | GetCountry |  | Country | Category: nonconst |
| PoliticalLobby | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| PoliticalLobby | GetDeficitAppeasementForProgressBar |  | CFixedPoint | Category: nonconst |
| PoliticalLobby | GetDisbandReasonDesc |  | CString | Category: nonconst |
| PoliticalLobby | GetEstablishmentDate |  | Date | Category: nonconst |
| PoliticalLobby | GetExcessAppeasementForProgressBar |  | CFixedPoint | Category: nonconst |
| PoliticalLobby | GetMembers |  | Unknown | Category: nonconst |
| PoliticalLobby | GetMembersDesc |  | CString | Category: nonconst |
| PoliticalLobby | GetName |  | CString | Category: nonconst |
| PoliticalLobby | GetNameNoFormatting |  | CString | Category: nonconst |
| PoliticalLobby | GetNameNoIcon |  | CString | Category: nonconst |
| PoliticalLobby | GetTargetCountry |  | Country | Category: nonconst |
| PoliticalLobby | GetTextIcon |  | CString | Category: nonconst |
| PoliticalLobby | GetTooltipTag |  | CString | Category: nonconst |
| PoliticalLobby | GetTotalClout |  | CFixedPoint | Category: nonconst |
| PoliticalLobby | GetTotalCloutBreakdown |  | CString | Category: nonconst |
| PoliticalLobby | GetType |  | PoliticalLobbyType | Category: nonconst |
| PoliticalLobby | IsPinnedInOutliner |  | bool |  |
| PoliticalLobby | IsValid |  | bool |  |
| PoliticalLobby | MakeScope |  | Scope |  |
| PoliticalLobby | Self |  | PoliticalLobby |  |
| PoliticalLobby | TogglePinInOutliner |  | void |  |
| PoliticalLobbyAppeasementFactor | AccessSelf |  | PoliticalLobbyAppeasementFactor | Category: const |
| PoliticalLobbyAppeasementFactor | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| PoliticalLobbyAppeasementFactor | GetDesc |  | CString | Category: nonconst |
| PoliticalLobbyAppeasementFactor | GetName |  | CString | Category: nonconst |
| PoliticalLobbyAppeasementFactor | GetTooltipTag |  | CString | Category: nonconst |
| PoliticalLobbyAppeasementFactor | MakeScope |  | Scope |  |
| PoliticalLobbyAppeasementFactor | Self |  | PoliticalLobbyAppeasementFactor |  |
| PoliticalLobbyMarker | AccessSelf |  | PoliticalLobbyMarker | Category: const |
| PoliticalLobbyMarker | GetPlacementCountry |  | Country | Category: nonconst |
| PoliticalLobbyMarker | GetPoliticalLobby |  | PoliticalLobby | Category: nonconst |
| PoliticalLobbyMarker | GetPosition |  | CVector2f | Category: nonconst |
| PoliticalLobbyMarker | Self |  | PoliticalLobbyMarker |  |
| PoliticalLobbyPanel | AccessSelf |  | PoliticalLobbyPanel | Category: const |
| PoliticalLobbyPanel | GetPoliticalLobby |  | PoliticalLobby | Category: nonconst |
| PoliticalLobbyPanel | Self |  | PoliticalLobbyPanel |  |
| PoliticalLobbyType | AccessSelf |  | PoliticalLobbyType | Category: const |
| PoliticalLobbyType | GetAppeasementFactorsAnti |  | Unknown | Category: nonconst |
| PoliticalLobbyType | GetAppeasementFactorsPro |  | Unknown | Category: nonconst |
| PoliticalLobbyType | GetCategory |  | CString | Category: nonconst |
| PoliticalLobbyType | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| PoliticalLobbyType | GetName |  | CString | Category: nonconst |
| PoliticalLobbyType | GetTexture |  | Unknown | Category: nonconst |
| PoliticalLobbyType | GetTooltipTag |  | CString | Category: nonconst |
| PoliticalLobbyType | MakeScope |  | Scope |  |
| PoliticalLobbyType | Self |  | PoliticalLobbyType |  |
| PoliticalMovement | AccessSelf |  | PoliticalMovement | Category: const |
| PoliticalMovement | CanCauseObstinance |  | bool |  |
| PoliticalMovement | GetAffectedLawsStall |  | Unknown | Category: nonconst |
| PoliticalMovement | GetAffectedLawsSuccess |  | Unknown | Category: nonconst |
| PoliticalMovement | GetAffectedStallPercentageOnLaw | 1. Unknown | CFixedPoint | Category: nonconst |
| PoliticalMovement | GetAffectedSuccessPercentageOnEndorsedLaws |  | CFixedPoint | Category: nonconst |
| PoliticalMovement | GetAffectedSuccessPercentageOnLaw | 1. Unknown | CFixedPoint | Category: nonconst |
| PoliticalMovement | GetAffectedSuccessPercentageOnOpposedLaws |  | CFixedPoint | Category: nonconst |
| PoliticalMovement | GetBolsteringEffectDesc |  | CString | Category: nonconst |
| PoliticalMovement | GetBottomSupportingCharacters |  | Unknown | Category: nonconst |
| PoliticalMovement | GetBottomSupportingCharactersDesc |  | CString | Category: nonconst |
| PoliticalMovement | GetCharacterIdeologies |  | Unknown | Category: nonconst |
| PoliticalMovement | GetCivilWar |  | CivilWar | Category: nonconst |
| PoliticalMovement | GetCoreIdeology |  | Ideology | Category: nonconst |
| PoliticalMovement | GetCountry |  | Country | Category: nonconst |
| PoliticalMovement | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| PoliticalMovement | GetHighestStateObstinance |  | CFixedPoint | Category: nonconst |
| PoliticalMovement | GetInfluencedInterestGroups |  | Unknown | Category: nonconst |
| PoliticalMovement | GetMilitarySupport |  | CFixedPoint | Category: nonconst |
| PoliticalMovement | GetName |  | CString | Category: nonconst |
| PoliticalMovement | GetNameNoFormatting |  | CString | Category: nonconst |
| PoliticalMovement | GetNameNoIcon |  | CString | Category: nonconst |
| PoliticalMovement | GetNumOfObstinateStates |  | int32 | Category: nonconst |
| PoliticalMovement | GetNumSupportingIndividuals |  | int64 | Category: nonconst |
| PoliticalMovement | GetNumSupportingMilitaryIndividuals |  | int64 | Category: nonconst |
| PoliticalMovement | GetNumSupportingRadicals |  | int64 | Category: nonconst |
| PoliticalMovement | GetObstinateStatesBreakdown |  | CString | Category: nonconst |
| PoliticalMovement | GetPopSupportFactors |  | Unknown | Category: nonconst |
| PoliticalMovement | GetPopularSupport |  | CFixedPoint | Category: nonconst |
| PoliticalMovement | GetRadicalism |  | CFixedPoint | Category: nonconst |
| PoliticalMovement | GetRadicalismTrend |  | DataTrend | Category: nonconst |
| PoliticalMovement | GetSupport |  | CFixedPoint | Category: nonconst |
| PoliticalMovement | GetSupportDesc |  | CString | Category: nonconst |
| PoliticalMovement | GetSupportTrend |  | DataTrend | Category: nonconst |
| PoliticalMovement | GetSupportingCharacters |  | Unknown | Category: nonconst |
| PoliticalMovement | GetSupportingInterestGroups |  | Unknown | Category: nonconst |
| PoliticalMovement | GetSupportingPops |  | PopList | Category: nonconst |
| PoliticalMovement | GetSuppressionEffectDesc |  | CString | Category: nonconst |
| PoliticalMovement | GetTargetRadicalism |  | CFixedPoint | Category: nonconst |
| PoliticalMovement | GetTargetRadicalismDesc |  | CString | Category: nonconst |
| PoliticalMovement | GetTargetSupport |  | CFixedPoint | Category: nonconst |
| PoliticalMovement | GetTextIcon |  | CString | Category: nonconst |
| PoliticalMovement | GetTexture |  | Unknown | Category: nonconst |
| PoliticalMovement | GetTimedModifiers |  | Unknown | Category: nonconst |
| PoliticalMovement | GetTooltipTag |  | CString | Category: nonconst |
| PoliticalMovement | GetTopSupportingCharacters |  | Unknown | Category: nonconst |
| PoliticalMovement | GetType |  | PoliticalMovementType | Category: nonconst |
| PoliticalMovement | GetUprisingDefinition |  | CountryDefinition | Category: nonconst |
| PoliticalMovement | HasSeparateUprisingDefinition |  | bool |  |
| PoliticalMovement | IsBeingHighlighted |  | bool |  |
| PoliticalMovement | IsBolstered |  | bool |  |
| PoliticalMovement | IsCausingObstinance |  | bool |  |
| PoliticalMovement | IsInsurrectionary |  | bool |  |
| PoliticalMovement | IsPinnedInOutliner |  | bool |  |
| PoliticalMovement | IsRevolutionary |  | bool |  |
| PoliticalMovement | IsSecessionist |  | bool |  |
| PoliticalMovement | IsSuppressed |  | bool |  |
| PoliticalMovement | IsValid |  | bool |  |
| PoliticalMovement | MakeScope |  | Scope |  |
| PoliticalMovement | PredictNumberOfRadicalsEveryMonth |  | int64 |  |
| PoliticalMovement | Self |  | PoliticalMovement |  |
| PoliticalMovement | ToggleBolstering |  | Command |  |
| PoliticalMovement | TogglePinInOutliner |  | void |  |
| PoliticalMovement | ToggleSuppression |  | Command |  |
| PoliticalMovementCategory | AccessSelf |  | PoliticalMovementCategory | Category: const |
| PoliticalMovementCategory | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| PoliticalMovementCategory | GetName |  | CString | Category: nonconst |
| PoliticalMovementCategory | GetTexture |  | Unknown | Category: nonconst |
| PoliticalMovementCategory | GetTooltipTag |  | CString | Category: nonconst |
| PoliticalMovementCategory | HasCulturalIdentity |  | bool |  |
| PoliticalMovementCategory | HasReligiousIdentity |  | bool |  |
| PoliticalMovementCategory | MakeScope |  | Scope |  |
| PoliticalMovementCategory | Self |  | PoliticalMovementCategory |  |
| PoliticalMovementPanel | AccessSelf |  | PoliticalMovementPanel | Category: const |
| PoliticalMovementPanel | GetPoliticalMovement |  | PoliticalMovement | Category: nonconst |
| PoliticalMovementPanel | Self |  | PoliticalMovementPanel |  |
| PoliticalMovementPopSupportFactor | AccessSelf |  | PoliticalMovementPopSupportFactor | Category: const |
| PoliticalMovementPopSupportFactor | GetName |  | CString | Category: nonconst |
| PoliticalMovementPopSupportFactor | GetTooltipTag |  | CString | Category: nonconst |
| PoliticalMovementPopSupportFactor | Self |  | PoliticalMovementPopSupportFactor |  |
| PoliticalMovementType | AccessSelf |  | PoliticalMovementType | Category: const |
| PoliticalMovementType | GetCategory |  | PoliticalMovementCategory | Category: nonconst |
| PoliticalMovementType | GetCoreIdeology |  | Ideology | Category: nonconst |
| PoliticalMovementType | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| PoliticalMovementType | GetName |  | CString | Category: nonconst |
| PoliticalMovementType | GetNameNoFormatting |  | CString | Category: nonconst |
| PoliticalMovementType | GetTexture |  | Unknown | Category: nonconst |
| PoliticalMovementType | GetTooltipTag |  | CString | Category: nonconst |
| PoliticalMovementType | IsValid |  | bool |  |
| PoliticalMovementType | MakeScope |  | Scope |  |
| PoliticalMovementType | Self |  | PoliticalMovementType |  |
| PoliticsPanel | AccessActiveIGTraits |  | Unknown | Category: const |
| PoliticsPanel | AccessReformGovernment |  | ReformGovernment | Category: const |
| PoliticsPanel | AccessSelf |  | PoliticsPanel | Category: const |
| PoliticsPanel | GetAgitatorSlots |  | Unknown | Category: nonconst |
| PoliticsPanel | GetCloutGraphDateEnd |  | CString | Category: nonconst |
| PoliticsPanel | GetCloutGraphDateStart |  | CString | Category: nonconst |
| PoliticsPanel | GetCloutGraphMax |  | CFixedPoint | Category: nonconst |
| PoliticsPanel | GetPopulationGroupingsForClout |  | Unknown | Category: nonconst |
| PoliticsPanel | GetPopulationGroupingsForPopulation |  | Unknown | Category: nonconst |
| PoliticsPanel | GetReformGovernment |  | ReformGovernment | Category: nonconst |
| PoliticsPanel | IsCloutGraphInitialized |  | bool |  |
| PoliticsPanel | ResetAgitatorSlotInvites |  | void |  |
| PoliticsPanel | Self |  | PoliticsPanel |  |
| Pop | AccessBuilding |  | Building | Category: const |
| Pop | AccessCulture |  | Culture | Category: const |
| Pop | AccessLargestInterestGroup |  | InterestGroup | Category: const |
| Pop | AccessPopType |  | PopType | Category: const |
| Pop | AccessReligion |  | Religion | Category: const |
| Pop | AccessSelf |  | Pop | Category: const |
| Pop | AccessState |  | State | Category: const |
| Pop | AccessSupportedInterestGroups |  | Unknown | Category: const |
| Pop | CalcAnnualPollTaxAmount |  | CFixedPoint |  |
| Pop | GetAcceptanceStatus |  | AcceptanceStatus | Category: nonconst |
| Pop | GetAcceptanceValue |  | int32 | Category: nonconst |
| Pop | GetAcceptanceValueDesc |  | CString | Category: nonconst |
| Pop | GetAdditionalSOLFactorsDesc |  | CString | Category: nonconst |
| Pop | GetAnimatedPortrait | 1. PortraitEnvironment 2. PortraitCamera 3. PortraitAnimation 4. CVector2f 5. CString 6. int32 | Unknown | Category: nonconst |
| Pop | GetAssimilatingCulture |  | Culture | Category: nonconst |
| Pop | GetAverageAnnualWage |  | CFixedPoint | Category: nonconst |
| Pop | GetConsumptionFactorDesc |  | CString | Category: nonconst |
| Pop | GetConvertingReligion |  | Religion | Category: nonconst |
| Pop | GetCulture |  | Culture | Category: nonconst |
| Pop | GetCurrentJobSatisfaction |  | CFixedPoint | Category: nonconst |
| Pop | GetCurrentSoLModifiers |  | int32 | Category: nonconst |
| Pop | GetCurrentSoLModifiersDesc |  | CString | Category: nonconst |
| Pop | GetCurrentStandardOfLiving |  | int32 | Category: nonconst |
| Pop | GetCurrentStandardOfLivingTrend |  | DataTrend | Category: nonconst |
| Pop | GetCurrentWealth |  | int32 | Category: nonconst |
| Pop | GetCurrentWealthDesc |  | CString | Category: nonconst |
| Pop | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| Pop | GetDebugInfo |  | CString | Category: nonconst |
| Pop | GetDependentIncome |  | CFixedPoint | Category: nonconst |
| Pop | GetDependentIncomeDesc |  | CString | Category: nonconst |
| Pop | GetDependentIncomeSources |  | CString | Category: nonconst |
| Pop | GetDependentsSize |  | int64 | Category: nonconst |
| Pop | GetEducationAccess |  | CFixedPoint | Category: nonconst |
| Pop | GetEducationAccessDetailsDesc |  | CString | Category: nonconst |
| Pop | GetExpectedSOLFactorsDesc |  | CString | Category: nonconst |
| Pop | GetExpectedStandardOfLiving |  | int32 | Category: nonconst |
| Pop | GetExpectedStandardOfLivingDesc |  | CString | Category: nonconst |
| Pop | GetExpectedStandardOfLivingFromLiteracy |  | int32 | Category: nonconst |
| Pop | GetExpectedStandardOfLivingFromLiteracyDesc |  | CString | Category: nonconst |
| Pop | GetExpenses |  | CFixedPoint | Category: nonconst |
| Pop | GetExpensesDesc |  | CString | Category: nonconst |
| Pop | GetFoodSecurityDesc |  | CString | Category: nonconst |
| Pop | GetFoodSecurityLabel |  | CString | Category: nonconst |
| Pop | GetFoodSecurityRaw |  | CFixedPoint | Category: nonconst |
| Pop | GetFormattedStandardOfLiving |  | CString | Category: nonconst |
| Pop | GetFormattedStandardOfLivingLabel |  | CString | Category: nonconst |
| Pop | GetGoodsConsumption |  | Unknown | Category: nonconst |
| Pop | GetIGMembershipDesc |  | CString | Category: nonconst |
| Pop | GetIncome |  | CFixedPoint | Category: nonconst |
| Pop | GetIncomeDesc |  | CString | Category: nonconst |
| Pop | GetIncomeExpensesBalanceDesc |  | CString | Category: nonconst |
| Pop | GetInterestGroupDependentMembers | 1. Unknown | int64 | Category: nonconst |
| Pop | GetInterestGroupMembers | 1. Unknown | int64 | Category: nonconst |
| Pop | GetInterestGroupWorkingAdultMembers | 1. Unknown | int64 | Category: nonconst |
| Pop | GetLargestInterestGroup |  | InterestGroup | Category: nonconst |
| Pop | GetLargestPoliticalMovement |  | PoliticalMovement | Category: nonconst |
| Pop | GetLiteracyDesc |  | CString | Category: nonconst |
| Pop | GetLiteracyRate |  | CFixedPoint | Category: nonconst |
| Pop | GetLocation |  | CString | Category: nonconst |
| Pop | GetMoney |  | CFixedPoint | Category: nonconst |
| Pop | GetMovementMembershipDesc |  | CString | Category: nonconst |
| Pop | GetName |  | CString | Category: nonconst |
| Pop | GetNameNoFormatting |  | CString | Category: nonconst |
| Pop | GetNameNoIcon |  | CString | Category: nonconst |
| Pop | GetNeedsDesc |  | CString | Category: nonconst |
| Pop | GetNetGrowthRate |  | CFixedPoint | Category: nonconst |
| Pop | GetNextJobSatisfaction |  | CFixedPoint | Category: nonconst |
| Pop | GetNextJobSatisfactionDesc |  | CString | Category: nonconst |
| Pop | GetNumAssimilatingIndividuals |  | int64 | Category: nonconst |
| Pop | GetNumConvertingIndividuals |  | int64 | Category: nonconst |
| Pop | GetNumDependentPoliticalParticipants |  | int64 | Category: nonconst |
| Pop | GetNumLoyalists |  | int64 | Category: nonconst |
| Pop | GetNumPoliticalNonParticipants |  | int64 | Category: nonconst |
| Pop | GetNumPoliticalParticipants |  | int64 | Category: nonconst |
| Pop | GetNumPoliticallyInactive |  | int64 | Category: nonconst |
| Pop | GetNumRadicals |  | int64 | Category: nonconst |
| Pop | GetNumWorkforce |  | int64 | Category: nonconst |
| Pop | GetPoliticalMovementSupportFraction | 1. PoliticalMovement | CFixedPoint | Category: nonconst |
| Pop | GetPoliticalMovementSupporterCount | 1. PoliticalMovement | int64 | Category: nonconst |
| Pop | GetPoliticalMovementSupportersInterestGroupMembers | 1. Unknown 2. Unknown | int64 | Category: nonconst |
| Pop | GetPoliticalMovementSupportersLoyalists | 1. Unknown | int64 | Category: nonconst |
| Pop | GetPoliticalMovementSupportersPoliticalStrength | 1. PoliticalMovement | int64 | Category: nonconst |
| Pop | GetPoliticalMovementSupportersRadicals | 1. PoliticalMovement | int64 | Category: nonconst |
| Pop | GetPoliticalMovementTotalSupport | 1. PoliticalMovement | CFixedPoint | Category: nonconst |
| Pop | GetPoliticalMovementTotalSupportDesc | 1. PoliticalMovement | CString | Category: nonconst |
| Pop | GetPoliticalStrength |  | int64 | Category: nonconst |
| Pop | GetPoliticalStrengthDesc |  | CString | Category: nonconst |
| Pop | GetPoliticalStrengthForIG | 1. Unknown | int64 | Category: nonconst |
| Pop | GetPoliticalStrengthTrend |  | DataTrend | Category: nonconst |
| Pop | GetPopAssimilationDesc |  | CString | Category: nonconst |
| Pop | GetPopConversionDesc |  | CString | Category: nonconst |
| Pop | GetPopGrowth |  | CFixedPoint | Category: nonconst |
| Pop | GetPopGrowthDesc |  | CString | Category: nonconst |
| Pop | GetPopType |  | PopType | Category: nonconst |
| Pop | GetQualificationsChangeDesc | 1. PopType | CString | Category: nonconst |
| Pop | GetQualificationsDesc |  | CString | Category: nonconst |
| Pop | GetReligion |  | Religion | Category: nonconst |
| Pop | GetSharesDesc |  | CString | Category: nonconst |
| Pop | GetSizeTrend |  | DataTrend | Category: nonconst |
| Pop | GetSocialClass |  | SocialClass | Category: nonconst |
| Pop | GetStarvationEffectDesc |  | CString | Category: nonconst |
| Pop | GetSupportedPoliticalMovements |  | Unknown | Category: nonconst |
| Pop | GetTexture |  | Unknown | Category: nonconst |
| Pop | GetTooltipTag |  | CString | Category: nonconst |
| Pop | GetTopGoodsConsumption |  | Unknown | Category: nonconst |
| Pop | GetTotalSize |  | int64 | Category: nonconst |
| Pop | GetTypeDesc |  | CString | Category: nonconst |
| Pop | GetTypedPortrait | 1. PortraitEnvironment 2. PortraitCamera 3. PortraitAnimation 4. CVector2f 5. CString 6. int32 | Unknown | Category: nonconst |
| Pop | GetWageDiscriminationDesc |  | CString | Category: nonconst |
| Pop | GetWageRequiredToHireFrom |  | CFixedPoint | Category: nonconst |
| Pop | GetWealthProgression |  | CFixedPoint | Category: nonconst |
| Pop | GetWeeklyExpenses |  | CFixedPoint | Category: nonconst |
| Pop | GetWorkforceIncome |  | CFixedPoint | Category: nonconst |
| Pop | GetWorkforceIncomeDesc |  | CString | Category: nonconst |
| Pop | GetWorkforceRatio |  | CFixedPoint | Category: nonconst |
| Pop | GetWorkforceRatioDesc |  | CString | Category: nonconst |
| Pop | GetWorksAt |  | CString | Category: nonconst |
| Pop | GetWorksAtList |  | CString | Category: nonconst |
| Pop | HasSubsistenceIncome |  | bool |  |
| Pop | HasWelfarePayments |  | bool |  |
| Pop | IsAcceptanceStatusIncreasing |  | bool |  |
| Pop | IsAssimilating |  | bool |  |
| Pop | IsBeingHighlighted |  | bool |  |
| Pop | IsBeingTutorialHighlighted |  | bool |  |
| Pop | IsConverting |  | bool |  |
| Pop | IsEmployed |  | bool |  |
| Pop | IsInSevereStarvation |  | bool |  |
| Pop | IsInStarvation |  | bool |  |
| Pop | IsLookingForJob |  | bool |  |
| Pop | IsPaidWages |  | bool |  |
| Pop | IsSlave |  | bool |  |
| Pop | IsValid |  | bool |  |
| Pop | MakeScope |  | Scope |  |
| Pop | Self |  | Pop |  |
| PopBrowserPanel | AcceptanceFilterAreNoStatusesShown |  | bool |  |
| PopBrowserPanel | AcceptanceFilterHideAllStatuses |  | void |  |
| PopBrowserPanel | AcceptanceFilterIsStatusShown | 1. AcceptanceStatus | bool |  |
| PopBrowserPanel | AcceptanceFilterShowAllStatuses |  | void |  |
| PopBrowserPanel | AcceptanceFilterToggleShown | 1. AcceptanceStatus | void |  |
| PopBrowserPanel | AcceptanceFiltersAreAllStasusesShown |  | bool |  |
| PopBrowserPanel | AccessSelf |  | PopBrowserPanel | Category: const |
| PopBrowserPanel | CultureFilterAreAllShown |  | bool |  |
| PopBrowserPanel | CultureFilterAreNoneShown |  | bool |  |
| PopBrowserPanel | CultureFilterHideAll |  | void |  |
| PopBrowserPanel | CultureFilterIsShown | 1. Culture | bool |  |
| PopBrowserPanel | CultureFilterShowAll |  | void |  |
| PopBrowserPanel | CultureFilterToggleShown | 1. Culture | void |  |
| PopBrowserPanel | Filter | 1. Unknown | void |  |
| PopBrowserPanel | GetAllAcceptanceStatuses |  | Unknown | Category: nonconst |
| PopBrowserPanel | GetAllPopTypes |  | Unknown | Category: nonconst |
| PopBrowserPanel | GetAllStates |  | Unknown | Category: nonconst |
| PopBrowserPanel | GetCountry |  | Country | Category: nonconst |
| PopBrowserPanel | GetFilteredAverageJobSatisfaction |  | CFixedPoint | Category: nonconst |
| PopBrowserPanel | GetFilteredAverageLiteracy |  | CFixedPoint | Category: nonconst |
| PopBrowserPanel | GetFilteredAverageStandardOfLiving |  | CFixedPoint | Category: nonconst |
| PopBrowserPanel | GetFilteredCultures |  | Unknown | Category: nonconst |
| PopBrowserPanel | GetFilteredNumLoyalists |  | int64 | Category: nonconst |
| PopBrowserPanel | GetFilteredNumRadicals |  | int64 | Category: nonconst |
| PopBrowserPanel | GetFilteredPolStrForPopType | 1. PopType | int64 | Category: nonconst |
| PopBrowserPanel | GetFilteredPoliticalStrength |  | int64 | Category: nonconst |
| PopBrowserPanel | GetFilteredPopTypes |  | Unknown | Category: nonconst |
| PopBrowserPanel | GetFilteredPopTypesSortedByPolStr |  | Unknown | Category: nonconst |
| PopBrowserPanel | GetFilteredReligions |  | Unknown | Category: nonconst |
| PopBrowserPanel | GetFilteredStates |  | Unknown | Category: nonconst |
| PopBrowserPanel | GetFilteredTotalSize |  | int64 | Category: nonconst |
| PopBrowserPanel | GetFilteredTotalSizeForCulture | 1. Culture | int64 | Category: nonconst |
| PopBrowserPanel | GetFilteredTotalSizeForPopType | 1. PopType | int64 | Category: nonconst |
| PopBrowserPanel | GetFilteredTotalSizeForReligion | 1. Religion | int64 | Category: nonconst |
| PopBrowserPanel | GetFilteredTotalSizeForState | 1. State | int64 | Category: nonconst |
| PopBrowserPanel | GetSortedAndFilteredPops |  | Unknown | Category: nonconst |
| PopBrowserPanel | IsAnyFilterActive |  | bool |  |
| PopBrowserPanel | IsFilterNo | 1. Unknown | bool |  |
| PopBrowserPanel | IsFilterYes | 1. Unknown | bool |  |
| PopBrowserPanel | IsFiltered | 1. Unknown | bool |  |
| PopBrowserPanel | IsSorted | 1. Unknown | bool |  |
| PopBrowserPanel | PopTypeFilterAreAllShown |  | bool |  |
| PopBrowserPanel | PopTypeFilterAreNoneShown |  | bool |  |
| PopBrowserPanel | PopTypeFilterHideAll |  | void |  |
| PopBrowserPanel | PopTypeFilterIsShown | 1. Unknown | bool |  |
| PopBrowserPanel | PopTypeFilterShowAll |  | void |  |
| PopBrowserPanel | PopTypeFilterToggleShown | 1. Unknown | void |  |
| PopBrowserPanel | ReligionFilterAreAllShown |  | bool |  |
| PopBrowserPanel | ReligionFilterAreNoneShown |  | bool |  |
| PopBrowserPanel | ReligionFilterHideAll |  | void |  |
| PopBrowserPanel | ReligionFilterIsShown | 1. Unknown | bool |  |
| PopBrowserPanel | ReligionFilterShowAll |  | void |  |
| PopBrowserPanel | ReligionFilterToggleShown | 1. Unknown | void |  |
| PopBrowserPanel | ResetAllFilters |  | void |  |
| PopBrowserPanel | Self |  | PopBrowserPanel |  |
| PopBrowserPanel | SetFilterMode | 1. Unknown 2. Unknown | void |  |
| PopBrowserPanel | Sort | 1. Unknown | void |  |
| PopBrowserPanel | StateFilterAreNoStatesShown |  | bool |  |
| PopBrowserPanel | StateFilterHideAllStates |  | void |  |
| PopBrowserPanel | StateFilterIsStateShown | 1. Unknown | bool |  |
| PopBrowserPanel | StateFilterShowAllStates |  | void |  |
| PopBrowserPanel | StateFilterToggleShown | 1. Unknown | void |  |
| PopBrowserPanel | StateFiltersAreAllStatesShown |  | bool |  |
| PopConsumptionGoods | AccessSelf |  | PopConsumptionGoods | Category: const |
| PopConsumptionGoods | GetConsumptionAmount |  | CFixedPoint | Category: nonconst |
| PopConsumptionGoods | GetConsumptionRatio |  | CFixedPoint | Category: nonconst |
| PopConsumptionGoods | GetGoods |  | Goods | Category: nonconst |
| PopConsumptionGoods | GetPop |  | Pop | Category: nonconst |
| PopConsumptionGoods | GetPopNeedsDesc |  | CString | Category: nonconst |
| PopConsumptionGoods | GetTooltipTag |  | CString | Category: nonconst |
| PopConsumptionGoods | Self |  | PopConsumptionGoods |  |
| PopDetailsPanel | AccessPop |  | Pop | Category: const |
| PopDetailsPanel | AccessSelf |  | PopDetailsPanel | Category: const |
| PopDetailsPanel | Self |  | PopDetailsPanel |  |
| PopList | AccessSelf |  | PopList | Category: const |
| PopList | GetAverageStandardOfLiving |  | CFixedPoint | Category: nonconst |
| PopList | GetAverageStandardOfLivingLabel |  | CString | Category: nonconst |
| PopList | GetBuildingContext |  | Building | Category: nonconst |
| PopList | GetInterestGroupContext |  | InterestGroup | Category: nonconst |
| PopList | GetItem0 |  | PopListItem | Category: nonconst |
| PopList | GetItem1 |  | PopListItem | Category: nonconst |
| PopList | GetItem2 |  | PopListItem | Category: nonconst |
| PopList | GetItem3 |  | PopListItem | Category: nonconst |
| PopList | GetItems |  | Unknown | Category: nonconst |
| PopList | GetPoliticalMovementContext |  | PoliticalMovement | Category: nonconst |
| PopList | GetPoliticalStrengthAsPercentage | 1. Unknown | CFixedPoint | Category: nonconst |
| PopList | GetTotalPoliticalStrength |  | int64 | Category: nonconst |
| PopList | GetTotalPopulation |  | int64 | Category: nonconst |
| PopList | HasBuildingContext |  | bool |  |
| PopList | HasInterestGroupContext |  | bool |  |
| PopList | HasPoliticalMovementContext |  | bool |  |
| PopList | Self |  | PopList |  |
| PopListItem | AccessPopType |  | PopType | Category: const |
| PopListItem | AccessSelf |  | PopListItem | Category: const |
| PopListItem | AccessTwoLargestIGs |  | Unknown | Category: const |
| PopListItem | GetAverageAnnualWage |  | CFixedPoint | Category: nonconst |
| PopListItem | GetAverageSoL |  | float | Category: nonconst |
| PopListItem | GetDependentsPopSize |  | int64 | Category: nonconst |
| PopListItem | GetEmploymentDesc |  | CString | Category: nonconst |
| PopListItem | GetFirstPop |  | Pop | Category: nonconst |
| PopListItem | GetNumLoyalists |  | int64 | Category: nonconst |
| PopListItem | GetNumRadicals |  | int64 | Category: nonconst |
| PopListItem | GetNumTotalPops |  | int32 | Category: nonconst |
| PopListItem | GetPopType |  | PopType | Category: nonconst |
| PopListItem | GetPops |  | Unknown | Category: nonconst |
| PopListItem | GetTotalPolStr |  | int64 | Category: nonconst |
| PopListItem | GetTotalPolStrPercentage |  | float | Category: nonconst |
| PopListItem | GetTotalPoliticalMovementSupport |  | CFixedPoint | Category: nonconst |
| PopListItem | GetTotalPopSize |  | int64 | Category: nonconst |
| PopListItem | GetTotalPopSizePercentage |  | float | Category: nonconst |
| PopListItem | GetWorkingAdultsPopSize |  | int64 | Category: nonconst |
| PopListItem | IsAllPopsShown |  | bool |  |
| PopListItem | IsExpanded |  | bool |  |
| PopListItem | Self |  | PopListItem |  |
| PopListItem | ToggleExpand |  | void |  |
| PopNeed | AccessSelf |  | PopNeed | Category: const |
| PopNeed | CalcBaseCost |  | CFixedPoint |  |
| PopNeed | CalcTotalCost |  | CFixedPoint |  |
| PopNeed | GetConsumptionDesc |  | CString | Category: nonconst |
| PopNeed | GetDefaultGoods |  | Goods | Category: nonconst |
| PopNeed | GetDesc |  | CString | Category: nonconst |
| PopNeed | GetDetailsDesc |  | CString | Category: nonconst |
| PopNeed | GetExpensesDesc |  | CString | Category: nonconst |
| PopNeed | GetGoods |  | Unknown | Category: nonconst |
| PopNeed | GetGoodsDesc |  | CString | Category: nonconst |
| PopNeed | GetGoodsEquivalenceDesc | 1. Unknown | CString | Category: nonconst |
| PopNeed | GetName |  | CString | Category: nonconst |
| PopNeed | GetNameNoFormatting |  | CString | Category: nonconst |
| PopNeed | GetPop |  | Pop | Category: nonconst |
| PopNeed | GetTooltipTag |  | CString | Category: nonconst |
| PopNeed | Self |  | PopNeed |  |
| PopType | AccessSelf |  | PopType | Category: const |
| PopType | GetColor |  | CVector4f | Category: nonconst |
| PopType | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| PopType | GetDependents | 1. Country | int64 | Category: nonconst |
| PopType | GetDependentsAsPercentage | 1. Country | CFixedPoint | Category: nonconst |
| PopType | GetDesc |  | CString | Category: nonconst |
| PopType | GetInterestGroupSupportDesc | 1. Country | CString | Category: nonconst |
| PopType | GetLoyalists | 1. Country | int64 | Category: nonconst |
| PopType | GetName |  | CString | Category: nonconst |
| PopType | GetNameNoFormatting |  | CString | Category: nonconst |
| PopType | GetNameNoIcon |  | CString | Category: nonconst |
| PopType | GetNameNoIconNoFormatting |  | CString | Category: nonconst |
| PopType | GetPolStr | 1. Country | int64 | Category: nonconst |
| PopType | GetPolStrAsFloat | 1. Unknown | float | Category: nonconst |
| PopType | GetPolStrAsPercentage | 1. Country | CFixedPoint | Category: nonconst |
| PopType | GetPopulation | 1. Country | int64 | Category: nonconst |
| PopType | GetPopulationAsFloat | 1. Unknown | float | Category: nonconst |
| PopType | GetPopulationAsPercentage | 1. Country | CFixedPoint | Category: nonconst |
| PopType | GetQualificationsGrowthDesc |  | CString | Category: nonconst |
| PopType | GetRadicals | 1. Country | int64 | Category: nonconst |
| PopType | GetStateDependents | 1. State | int64 | Category: nonconst |
| PopType | GetStateDependentsAsPercentage | 1. State | CFixedPoint | Category: nonconst |
| PopType | GetStatePolStr | 1. State | int64 | Category: nonconst |
| PopType | GetStatePolStrAsFloat | 1. Unknown | float | Category: nonconst |
| PopType | GetStatePolStrAsPercentage | 1. State | CFixedPoint | Category: nonconst |
| PopType | GetStatePopulation | 1. State | int64 | Category: nonconst |
| PopType | GetStatePopulationAsFloat | 1. Unknown | float | Category: nonconst |
| PopType | GetStatePopulationAsPercentage | 1. State | CFixedPoint | Category: nonconst |
| PopType | GetStateWorkforce | 1. State | int64 | Category: nonconst |
| PopType | GetStateWorkforceAsPercentage | 1. State | CFixedPoint | Category: nonconst |
| PopType | GetStrataBreakdownInCountry | 1. Country | CString | Category: nonconst |
| PopType | GetTextIcon |  | CString | Category: nonconst |
| PopType | GetTexture |  | Unknown | Category: nonconst |
| PopType | GetTooltipTag |  | CString | Category: nonconst |
| PopType | GetWorkforce | 1. Country | int64 | Category: nonconst |
| PopType | GetWorkforceAsPercentage | 1. Country | CFixedPoint | Category: nonconst |
| PopType | HasSubsistenceIncome |  | bool |  |
| PopType | IsPaidWages | 1. Building | bool |  |
| PopType | IsSlave |  | bool |  |
| PopType | IsValid |  | bool |  |
| PopType | MakeScope |  | Scope |  |
| PopType | Self |  | PopType |  |
| PopWithIG | AccessSelf |  | PopWithIG | Category: const |
| PopWithIG | CalcAttractionToIG |  | CFixedPoint |  |
| PopWithIG | GetAttractionToIGDesc |  | CString | Category: nonconst |
| PopWithIG | GetInterestGroup |  | InterestGroup | Category: nonconst |
| PopWithIG | GetPop |  | Pop | Category: nonconst |
| PopWithIG | GetTooltipTag |  | CString | Category: nonconst |
| PopWithIG | Self |  | PopWithIG |  |
| PopsOverviewPanel | AccessPops |  | Unknown | Category: const |
| PopsOverviewPanel | AccessPopsList |  | PopList | Category: const |
| PopsOverviewPanel | AccessSelf |  | PopsOverviewPanel | Category: const |
| PopsOverviewPanel | GetAverageIncomeMiddle |  | CFixedPoint | Category: nonconst |
| PopsOverviewPanel | GetAverageIncomePoor |  | CFixedPoint | Category: nonconst |
| PopsOverviewPanel | GetAverageIncomeRich |  | CFixedPoint | Category: nonconst |
| PopsOverviewPanel | GetGoodsExpenseItemsMiddle |  | Unknown | Category: nonconst |
| PopsOverviewPanel | GetGoodsExpenseItemsPoor |  | Unknown | Category: nonconst |
| PopsOverviewPanel | GetGoodsExpenseItemsRich |  | Unknown | Category: nonconst |
| PopsOverviewPanel | GetGoodsExpensesMiddle |  | CFixedPoint | Category: nonconst |
| PopsOverviewPanel | GetGoodsExpensesPoor |  | CFixedPoint | Category: nonconst |
| PopsOverviewPanel | GetGoodsExpensesRich |  | CFixedPoint | Category: nonconst |
| PopsOverviewPanel | GetIncomeRemainderMiddle |  | CFixedPoint | Category: nonconst |
| PopsOverviewPanel | GetIncomeRemainderPoor |  | CFixedPoint | Category: nonconst |
| PopsOverviewPanel | GetIncomeRemainderRich |  | CFixedPoint | Category: nonconst |
| PopsOverviewPanel | GetTaxBurdenItemsMiddle |  | Unknown | Category: nonconst |
| PopsOverviewPanel | GetTaxBurdenItemsPoor |  | Unknown | Category: nonconst |
| PopsOverviewPanel | GetTaxBurdenItemsRich |  | Unknown | Category: nonconst |
| PopsOverviewPanel | GetTaxBurdenMiddle |  | CFixedPoint | Category: nonconst |
| PopsOverviewPanel | GetTaxBurdenPoor |  | CFixedPoint | Category: nonconst |
| PopsOverviewPanel | GetTaxBurdenRich |  | CFixedPoint | Category: nonconst |
| PopsOverviewPanel | Self |  | PopsOverviewPanel |  |
| PopulationGrouping | AccessInterestGroup |  | InterestGroup | Category: const |
| PopulationGrouping | AccessSelf |  | PopulationGrouping | Category: const |
| PopulationGrouping | GetGroupName |  | CString | Category: nonconst |
| PopulationGrouping | GetInterestGroup |  | InterestGroup | Category: nonconst |
| PopulationGrouping | GetSizeInPercentage |  | float | Category: nonconst |
| PopulationGrouping | IsInterestGroup |  | bool |  |
| PopulationGrouping | Self |  | PopulationGrouping |  |
| PopupManager | AccessSelf |  | PopupManager | Category: const |
| PopupManager | AnswerNo | 1. ConfirmationWindow | void |  |
| PopupManager | AnswerYes | 1. ConfirmationWindow | void |  |
| PopupManager | AskConfirmation | 1. Command | void |  |
| PopupManager | AskConfirmationCustom | 1. Command 2. CString | void |  |
| PopupManager | AskConfirmationCustomWithSound | 1. Command 2. CString 3. Sound | void |  |
| PopupManager | AskConfirmationWithSound | 1. Command 2. Sound | void |  |
| PopupManager | CloseGeneralInformationWindow |  | void |  |
| PopupManager | CloseMessage | 1. PlayerMessageItem | void |  |
| PopupManager | ClosePopups |  | void |  |
| PopupManager | CloseProposal | 1. Proposal | void |  |
| PopupManager | DeclineProposal | 1. Proposal | void |  |
| PopupManager | ExecuteOrAskConfirmationIfNeeded | 1. Command | void |  |
| PopupManager | ExecuteOrAskConfirmationIfNeededCustom | 1. Unknown 2. Unknown | void |  |
| PopupManager | ExecuteOrAskConfirmationIfNeededCustomWithSound | 1. Unknown 2. Unknown 3. Unknown | void |  |
| PopupManager | ExecuteOrAskConfirmationIfNeededWithSound | 1. Unknown 2. Unknown | void |  |
| PopupManager | GetRecruitFormation |  | MilitaryFormation | Category: nonconst |
| PopupManager | GetRecruitHQ |  | Hq | Category: nonconst |
| PopupManager | Hide |  | void |  |
| PopupManager | HideCompanyChangeName |  | void |  |
| PopupManager | HideDiplomaticActionConfirmation |  | void |  |
| PopupManager | HideDiplomaticPlayConfirmation |  | void |  |
| PopupManager | HideInvasionPlannerPopup |  | void |  |
| PopupManager | HideMilitaryFormationChangeName |  | void |  |
| PopupManager | HideNationalizeBuildingWindow |  | void |  |
| PopupManager | HideOpenEvent | 1. Event | void |  |
| PopupManager | HidePowerBlocCustomizationPopup |  | bool |  |
| PopupManager | HidePowerBlocPrincipleSelectionWindow |  | bool |  |
| PopupManager | HidePrestigeGoodChangeName |  | void |  |
| PopupManager | HideProposal | 1. Unknown | void |  |
| PopupManager | HideRecruitAdmiral |  | bool |  |
| PopupManager | HideRecruitGeneral |  | bool |  |
| PopupManager | HideReleaseCountryConfirmation |  | void |  |
| PopupManager | HideRulerSelectionPopup |  | void |  |
| PopupManager | HideStateChangeName |  | void |  |
| PopupManager | HideTransferFormation |  | void |  |
| PopupManager | OpenAlert | 1. Alert | void |  |
| PopupManager | OpenEvent | 1. Event | void |  |
| PopupManager | OpenProposal | 1. Proposal | void |  |
| PopupManager | Self |  | PopupManager |  |
| PopupManager | ShowCompanyChangeName | 1. Company | void |  |
| PopupManager | ShowDiplomaticPlayConfirmation | 1. Unknown 2. Unknown 3. Unknown 4. Unknown | void |  |
| PopupManager | ShowInvasionPlannerPopup | 1. Unknown | void |  |
| PopupManager | ShowMilitaryFormationChangeName | 1. MilitaryFormation | void |  |
| PopupManager | ShowNationalizeBuildingWindow | 1. Building | void |  |
| PopupManager | ShowPowerBlocCustomizationPopup | 1. Unknown | void |  |
| PopupManager | ShowPowerBlocPrincipleSelectionWindow | 1. Unknown 2. Unknown | void |  |
| PopupManager | ShowPrestigeGoodChangeName | 1. Goods | void |  |
| PopupManager | ShowReleaseCountryConfirmation | 1. CountryCreation | void |  |
| PopupManager | ShowRulerSelectionPopup | 1. Country | void |  |
| PopupManager | ShowStateChangeName | 1. Unknown | void |  |
| PopupManager | ShowTransferFormation | 1. MilitaryFormation | void |  |
| PopupManager | TogglePowerBlocCustomizationPopup |  | void |  |
| PopupManager | ToggleRecruitAdmiral | 1. Unknown | bool |  |
| PopupManager | ToggleRecruitFormationAdmiral | 1. MilitaryFormation | bool |  |
| PopupManager | ToggleRecruitFormationGeneral | 1. MilitaryFormation | bool |  |
| PopupManager | ToggleRecruitGeneral | 1. Unknown | bool |  |
| Portrait3dView | AccessSelf |  | Portrait3dView | Category: const |
| Portrait3dView | GetAnimationTooltip |  | CString | Category: nonconst |
| Portrait3dView | GetPortraitContext |  | Unknown | Category: nonconst |
| Portrait3dView | GetPortraitEntity | 1. int32 | Unknown | Category: nonconst |
| Portrait3dView | SaveScreenshot |  | void |  |
| Portrait3dView | Self |  | Portrait3dView |  |
| PortraitDataContext | AccessSelf |  | PortraitDataContext | Category: const |
| PortraitDataContext | GetName |  | CString | Category: nonconst |
| PortraitDataContext | Self |  | PortraitDataContext |  |
| PortraitEditorAnimationItem | AccessSelf |  | PortraitEditorAnimationItem | Category: const |
| PortraitEditorAnimationItem | GetName |  | CString | Category: nonconst |
| PortraitEditorAnimationItem | Self |  | PortraitEditorAnimationItem |  |
| PortraitEditorWindow | AccessSelf |  | PortraitEditorWindow | Category: const |
| PortraitEditorWindow | CanOptimize |  | bool |  |
| PortraitEditorWindow | GetAge |  | int32 | Category: nonconst |
| PortraitEditorWindow | GetAgePercent |  | float | Category: nonconst |
| PortraitEditorWindow | GetAnimationItems |  | Unknown | Category: nonconst |
| PortraitEditorWindow | GetAnimationTooltip | 1. CString | CString | Category: nonconst |
| PortraitEditorWindow | GetCameraName |  | CString | Category: nonconst |
| PortraitEditorWindow | GetCurrentAnimationFileDesc |  | CString | Category: nonconst |
| PortraitEditorWindow | GetCurrentCameraFileDesc |  | CString | Category: nonconst |
| PortraitEditorWindow | GetCurrentEnvironmentFileDesc |  | CString | Category: nonconst |
| PortraitEditorWindow | GetCurrentEthnicityFileDesc |  | CString | Category: nonconst |
| PortraitEditorWindow | GetCurrentGeneAccessoryString |  | CString | Category: nonconst |
| PortraitEditorWindow | GetCurrentGeneFileDesc |  | CString | Category: nonconst |
| PortraitEditorWindow | GetDNA |  | CString | Category: nonconst |
| PortraitEditorWindow | GetEnvironmentName |  | CString | Category: nonconst |
| PortraitEditorWindow | GetPortraitTexture | 1. Unknown | Unknown | Category: nonconst |
| PortraitEditorWindow | GetSelectedAnimationIndex |  | CVector2i | Category: nonconst |
| PortraitEditorWindow | GetSelectedGeneTemplateColorX |  | float | Category: nonconst |
| PortraitEditorWindow | GetSelectedGeneTemplateColorY |  | float | Category: nonconst |
| PortraitEditorWindow | GetSelectedGeneTemplateStrength |  | float | Category: nonconst |
| PortraitEditorWindow | GetSliderMaxValue |  | float | Category: nonconst |
| PortraitEditorWindow | GetSliderMinValue |  | float | Category: nonconst |
| PortraitEditorWindow | HasAnySliders |  | bool |  |
| PortraitEditorWindow | HasPoses |  | bool |  |
| PortraitEditorWindow | HasSubGenes |  | bool |  |
| PortraitEditorWindow | IsCurrentContentTab | 1. CString | bool |  |
| PortraitEditorWindow | IsSelectedAccessoryGene |  | bool |  |
| PortraitEditorWindow | IsSelectedColorGene |  | bool |  |
| PortraitEditorWindow | IsSelectedMorphGene |  | bool |  |
| PortraitEditorWindow | IsSliderMode | 1. Unknown | bool |  |
| PortraitEditorWindow | IsSliderPortraitType | 1. Unknown | bool |  |
| PortraitEditorWindow | OnAgeChanged |  | void |  |
| PortraitEditorWindow | OnChangeAnimationItemLeft |  | void |  |
| PortraitEditorWindow | OnChangeAnimationItemRight |  | void |  |
| PortraitEditorWindow | OnChangeEthnicityLeft |  | void |  |
| PortraitEditorWindow | OnChangeEthnicityRight |  | void |  |
| PortraitEditorWindow | OnChangeGeneLeft |  | void |  |
| PortraitEditorWindow | OnChangeGeneRight |  | void |  |
| PortraitEditorWindow | OnChangePoseItemLeft |  | void |  |
| PortraitEditorWindow | OnChangePoseItemRight |  | void |  |
| PortraitEditorWindow | OnChangeSubGeneItemLeft |  | void |  |
| PortraitEditorWindow | OnChangeSubGeneItemRight |  | void |  |
| PortraitEditorWindow | OnCopyDNA |  | void |  |
| PortraitEditorWindow | OnCopyPersistentPortraitInfo | 1. CString | void |  |
| PortraitEditorWindow | OnGenerateFromEthnicity |  | void |  |
| PortraitEditorWindow | OnGenerateFromEthnicityExcept |  | void |  |
| PortraitEditorWindow | OnNextCamera |  | void |  |
| PortraitEditorWindow | OnNextEnvironment |  | void |  |
| PortraitEditorWindow | OnPasteDNA |  | void |  |
| PortraitEditorWindow | OnPastePersistentPortraitInfo |  | void |  |
| PortraitEditorWindow | OnPreviousCamera |  | void |  |
| PortraitEditorWindow | OnPreviousEnvironment |  | void |  |
| PortraitEditorWindow | OnRandomizePortraitId |  | void |  |
| PortraitEditorWindow | OnReloadAssets |  | void |  |
| PortraitEditorWindow | OnReloadColorPalettes |  | void |  |
| PortraitEditorWindow | OnReloadDecals |  | void |  |
| PortraitEditorWindow | OnResetDNA |  | void |  |
| PortraitEditorWindow | OnRestartPortrait |  | void |  |
| PortraitEditorWindow | OnRunTextureOptimization |  | void |  |
| PortraitEditorWindow | Open3dView | 1. CString | void |  |
| PortraitEditorWindow | OpenCurrentAnimationFile |  | void |  |
| PortraitEditorWindow | OpenCurrentCameraFile |  | void |  |
| PortraitEditorWindow | OpenCurrentEnvironmentFile |  | void |  |
| PortraitEditorWindow | OpenCurrentEthnicityFile |  | void |  |
| PortraitEditorWindow | OpenCurrentGeneFile |  | void |  |
| PortraitEditorWindow | ResetSliders |  | void |  |
| PortraitEditorWindow | Self |  | PortraitEditorWindow |  |
| PortraitEditorWindow | SetContentTab | 1. CString | void |  |
| PortraitEditorWindow | SetSelectedAnimation |  | void |  |
| PortraitEditorWindow | SetSliderMode | 1. CString | void |  |
| PortraitEditorWindow | SetSliderPortraitType | 1. CString | void |  |
| PortraitTooltip | AccessSelf |  | PortraitTooltip | Category: const |
| PortraitTooltip | Self |  | PortraitTooltip |  |
| PotentialLeaderIdeology | AccessSelf |  | PotentialLeaderIdeology | Category: const |
| PotentialLeaderIdeology | GetChanceBreakdown |  | CString | Category: nonconst |
| PotentialLeaderIdeology | GetChancePercentage |  | CFixedPoint | Category: nonconst |
| PotentialLeaderIdeology | GetCharacterFirstName |  | CString | Category: nonconst |
| PotentialLeaderIdeology | GetCharacterFullName |  | CString | Category: nonconst |
| PotentialLeaderIdeology | HasCharacter |  | bool |  |
| PotentialLeaderIdeology | HasMovement |  | bool |  |
| PotentialLeaderIdeology | Self |  | PotentialLeaderIdeology |  |
| PowerBloc | AccessSelf |  | PowerBloc | Category: const |
| PowerBloc | GetBattalions |  | int32 | Category: nonconst |
| PowerBloc | GetBattalionsBreakdown |  | CString | Category: nonconst |
| PowerBloc | GetCohesion |  | CFixedPoint | Category: nonconst |
| PowerBloc | GetCohesionDesc |  | CString | Category: nonconst |
| PowerBloc | GetCohesionLevel |  | CohesionLevel | Category: nonconst |
| PowerBloc | GetCohesionTarget |  | CFixedPoint | Category: nonconst |
| PowerBloc | GetCohesionWeeklyChange |  | CFixedPoint | Category: nonconst |
| PowerBloc | GetConscriptableBattalions |  | int32 | Category: nonconst |
| PowerBloc | GetCurrentMandateProgress |  | CFixedPoint | Category: nonconst |
| PowerBloc | GetCurrentMandateProgressPercentage |  | CFixedPoint | Category: nonconst |
| PowerBloc | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| PowerBloc | GetFlag |  | CoatOfArms | Category: nonconst |
| PowerBloc | GetFlagTextIcon |  | CString | Category: nonconst |
| PowerBloc | GetFlotillas |  | int32 | Category: nonconst |
| PowerBloc | GetFlotillasBreakdown |  | CString | Category: nonconst |
| PowerBloc | GetFoundingDate |  | Date | Category: nonconst |
| PowerBloc | GetGdp |  | CFixedPoint | Category: nonconst |
| PowerBloc | GetGdpDesc |  | CString | Category: nonconst |
| PowerBloc | GetIdentity |  | PowerBlocIdentity | Category: nonconst |
| PowerBloc | GetIndividualLeverage | 1. Country | CFixedPoint | Category: nonconst |
| PowerBloc | GetLeader |  | Country | Category: nonconst |
| PowerBloc | GetLeaderModifier |  | Modifier | Category: nonconst |
| PowerBloc | GetLeverageAdvantage | 1. Country | CFixedPoint | Category: nonconst |
| PowerBloc | GetLeverageAdvantageDesc | 1. Country | CString | Category: nonconst |
| PowerBloc | GetLeverageFactor | 1. Unknown | CFixedPoint | Category: nonconst |
| PowerBloc | GetLeverageFactorDesc | 1. Unknown | CString | Category: nonconst |
| PowerBloc | GetMapTexture |  | Unknown | Category: nonconst |
| PowerBloc | GetMember | 1. Unknown | Country | Category: nonconst |
| PowerBloc | GetMemberWithUniqueHeadOfState | 1. Unknown | Country | Category: nonconst |
| PowerBloc | GetMembers |  | Unknown | Category: nonconst |
| PowerBloc | GetMembersBreakdown |  | CString | Category: nonconst |
| PowerBloc | GetMembersWithUniqueHeadsOfState |  | Unknown | Category: nonconst |
| PowerBloc | GetModifier |  | Modifier | Category: nonconst |
| PowerBloc | GetName |  | CString | Category: nonconst |
| PowerBloc | GetNameNoFormatting |  | CString | Category: nonconst |
| PowerBloc | GetNameNoIcon |  | CString | Category: nonconst |
| PowerBloc | GetNextMandateDate |  | Date | Category: nonconst |
| PowerBloc | GetNonLeaderModifier |  | Modifier | Category: nonconst |
| PowerBloc | GetNumMandates |  | int32 | Category: nonconst |
| PowerBloc | GetNumMembers |  | int32 | Category: nonconst |
| PowerBloc | GetParticipantWithHighestInfamy |  | Country | Category: nonconst |
| PowerBloc | GetParticipantWithHighestLeaderLawProgressivenessDifference |  | Country | Category: nonconst |
| PowerBloc | GetParticipantWithHighestLibertyDesire |  | Country | Category: nonconst |
| PowerBloc | GetParticipantWithLowestEconomicDependence |  | Country | Category: nonconst |
| PowerBloc | GetParticipantWithLowestEconomicDependenceOnLeader |  | Country | Category: nonconst |
| PowerBloc | GetParticipantWithLowestLeaderRelations |  | Country | Category: nonconst |
| PowerBloc | GetParticipantWithLowestLeaderReligionPercentage |  | Country | Category: nonconst |
| PowerBloc | GetPowerBlocStatue |  | PowerBlocStatue | Category: nonconst |
| PowerBloc | GetPowerStruggleContender |  | Country | Category: nonconst |
| PowerBloc | GetPowerStruggleDesc |  | CString | Category: nonconst |
| PowerBloc | GetPrestigeDesc |  | CString | Category: nonconst |
| PowerBloc | GetPreviousName |  | CString | Category: nonconst |
| PowerBloc | GetPrimaryColor |  | CVector4f | Category: nonconst |
| PowerBloc | GetPrincipleData | 1. Unknown | PowerBlocPrincipleData | Category: nonconst |
| PowerBloc | GetPrinciples |  | Unknown | Category: nonconst |
| PowerBloc | GetRankFormatted |  | CString | Category: nonconst |
| PowerBloc | GetRankRaw |  | int32 | Category: nonconst |
| PowerBloc | GetRankTooltip |  | CString | Category: nonconst |
| PowerBloc | GetRegularBattalions |  | int32 | Category: nonconst |
| PowerBloc | GetRequestToJoin | 1. Unknown | DiplomaticAction | Category: nonconst |
| PowerBloc | GetTimedModifiers |  | Unknown | Category: nonconst |
| PowerBloc | GetTooltip |  | CString | Category: nonconst |
| PowerBloc | GetTooltipTag |  | CString | Category: nonconst |
| PowerBloc | GetTotalPrestige |  | int32 | Category: nonconst |
| PowerBloc | GetWeeklyMandateProgress |  | CFixedPoint | Category: nonconst |
| PowerBloc | GetWeeklyMandateProgressDesc |  | CString | Category: nonconst |
| PowerBloc | HasIdentity | 1. PowerBlocIdentity | bool |  |
| PowerBloc | HasPendingInvitationForCountry | 1. Country | bool |  |
| PowerBloc | HasPendingRequestToJoinFromCountry | 1. Country | bool |  |
| PowerBloc | HasPrinciple | 1. PowerBlocPrinciple | bool |  |
| PowerBloc | HasPrincipleFromGroup | 1. Unknown | bool |  |
| PowerBloc | Invite | 1. Country | Command |  |
| PowerBloc | IsActive |  | bool |  |
| PowerBloc | IsBeingHighlighted |  | bool |  |
| PowerBloc | IsBeingTutorialHighlighted |  | bool |  |
| PowerBloc | IsLeader | 1. Country | bool |  |
| PowerBloc | IsMember | 1. Country | bool |  |
| PowerBloc | IsPrincipleOnCooldown | 1. PowerBlocPrinciple | bool |  |
| PowerBloc | IsRanked | 1. int32 | bool |  |
| PowerBloc | IsValid |  | bool |  |
| PowerBloc | IsZoomingToMapMarkerPosition |  | bool |  |
| PowerBloc | Kick | 1. Country | Command |  |
| PowerBloc | MakeScope |  | Scope |  |
| PowerBloc | MeetsPrimaryPrincipleRequirement |  | bool |  |
| PowerBloc | OpenPendingInvitationForCountry | 1. Country | void |  |
| PowerBloc | PredictCohesionWithMember | 1. Unknown | CFixedPoint |  |
| PowerBloc | RequestToJoin |  | Command |  |
| PowerBloc | Self |  | PowerBloc |  |
| PowerBloc | SortMembers | 1. CString | void |  |
| PowerBloc | ZoomToMapMarkerPosition |  | void |  |
| PowerBlocCoaPiece | AccessSelf |  | PowerBlocCoaPiece | Category: const |
| PowerBlocCoaPiece | GetCoa |  | CoatOfArms | Category: nonconst |
| PowerBlocCoaPiece | GetIndex |  | int32 | Category: nonconst |
| PowerBlocCoaPiece | GetKey |  | CString | Category: nonconst |
| PowerBlocCoaPiece | GetName |  | CString | Category: nonconst |
| PowerBlocCoaPiece | IsSelected |  | bool |  |
| PowerBlocCoaPiece | OnClicked |  | void |  |
| PowerBlocCoaPiece | Self |  | PowerBlocCoaPiece |  |
| PowerBlocCoaPieceSelector | AccessSelf |  | PowerBlocCoaPieceSelector | Category: const |
| PowerBlocCoaPieceSelector | GetItems |  | Unknown | Category: nonconst |
| PowerBlocCoaPieceSelector | GetName |  | CString | Category: nonconst |
| PowerBlocCoaPieceSelector | GetSelectedItem |  | PowerBlocCoaPiece | Category: nonconst |
| PowerBlocCoaPieceSelector | OnNextClicked |  | void |  |
| PowerBlocCoaPieceSelector | OnPreviousClicked |  | void |  |
| PowerBlocCoaPieceSelector | Self |  | PowerBlocCoaPieceSelector |  |
| PowerBlocCustomizationPopup | AccessSelf |  | PowerBlocCustomizationPopup | Category: const |
| PowerBlocCustomizationPopup | AccessStatueAccessorySelectors |  | Unknown | Category: const |
| PowerBlocCustomizationPopup | ConfirmClicked |  | void |  |
| PowerBlocCustomizationPopup | ConfirmGetDesc |  | CString |  |
| PowerBlocCustomizationPopup | ConfirmIsValid |  | bool |  |
| PowerBlocCustomizationPopup | DisableStatueMouseRotation |  | void |  |
| PowerBlocCustomizationPopup | EnableStatueMouseRotation |  | void |  |
| PowerBlocCustomizationPopup | GetCameraPosition |  | CVector3f | Category: nonconst |
| PowerBlocCustomizationPopup | GetCoaPieces |  | Unknown | Category: nonconst |
| PowerBlocCustomizationPopup | GetColorPickers |  | Unknown | Category: nonconst |
| PowerBlocCustomizationPopup | GetCustomCoaPreview |  | CoatOfArms | Category: nonconst |
| PowerBlocCustomizationPopup | GetEmblemColor |  | CVector4f | Category: nonconst |
| PowerBlocCustomizationPopup | GetMapColor |  | CVector4f | Category: nonconst |
| PowerBlocCustomizationPopup | GetMapTexture |  | Unknown | Category: nonconst |
| PowerBlocCustomizationPopup | GetNewCustomName |  | CString | Category: nonconst |
| PowerBlocCustomizationPopup | GetPowerBloc |  | PowerBloc | Category: nonconst |
| PowerBlocCustomizationPopup | GetPowerBlocMapTextureSelector |  | PowerBlocMapTextureSelector | Category: nonconst |
| PowerBlocCustomizationPopup | GetPrimaryColor |  | CVector4f | Category: nonconst |
| PowerBlocCustomizationPopup | GetSecondaryColor |  | CVector4f | Category: nonconst |
| PowerBlocCustomizationPopup | GetStatueHeroTypeOptions |  | Unknown | Category: nonconst |
| PowerBlocCustomizationPopup | GetStatuePedestalTypeOptions |  | Unknown | Category: nonconst |
| PowerBlocCustomizationPopup | OnEditName |  | void |  |
| PowerBlocCustomizationPopup | RandomizeName |  | void |  |
| PowerBlocCustomizationPopup | RandomizeStatue |  | void |  |
| PowerBlocCustomizationPopup | Self |  | PowerBlocCustomizationPopup |  |
| PowerBlocCustomizationPopup | SetNextStatueHeroType |  | void |  |
| PowerBlocCustomizationPopup | SetNextStatuePedestalType |  | void |  |
| PowerBlocCustomizationPopup | SetPrevStatueHeroType |  | void |  |
| PowerBlocCustomizationPopup | SetPrevStatuePedestalType |  | void |  |
| PowerBlocCustomizationPopup | SetStatueHeroType |  | void |  |
| PowerBlocCustomizationPopup | SetStatuePedestalType |  | void |  |
| PowerBlocFormation | AccessSelf |  | PowerBlocFormation | Category: const |
| PowerBlocFormation | CanSelectPrinciple | 1. Unknown 2. Unknown | bool |  |
| PowerBlocFormation | Confirm |  | Command |  |
| PowerBlocFormation | GetCanSelectPrincipleDesc | 1. Unknown 2. Unknown | CString | Category: nonconst |
| PowerBlocFormation | GetChosenName |  | CString | Category: nonconst |
| PowerBlocFormation | GetConfirmedCustomCoaPreview |  | CoatOfArms | Category: nonconst |
| PowerBlocFormation | GetIdentities |  | Unknown | Category: nonconst |
| PowerBlocFormation | GetMapColor |  | CVector4f | Category: nonconst |
| PowerBlocFormation | GetMapTexture |  | Unknown | Category: nonconst |
| PowerBlocFormation | GetNumSelectedPrinciples |  | int32 | Category: nonconst |
| PowerBlocFormation | GetPrinciplePointsCostRaw |  | int32 | Category: nonconst |
| PowerBlocFormation | GetPrinciplePointsRemainingRaw |  | int32 | Category: nonconst |
| PowerBlocFormation | GetPrincipleSlot | 1. Unknown | PowerBlocFormationPrincipleSlot | Category: nonconst |
| PowerBlocFormation | GetPrincipleSlots |  | Unknown | Category: nonconst |
| PowerBlocFormation | GetPrinciples |  | Unknown | Category: nonconst |
| PowerBlocFormation | HasSelectedPrimaryPrinciple |  | bool |  |
| PowerBlocFormation | HasSelectedPrinciple | 1. Unknown | bool |  |
| PowerBlocFormation | HasSelectedPrincipleGroup | 1. Unknown | bool |  |
| PowerBlocFormation | IsAnyIdentitySelected |  | bool |  |
| PowerBlocFormation | IsSelectedIdentity | 1. PowerBlocIdentity | bool |  |
| PowerBlocFormation | RandomizeName |  | void |  |
| PowerBlocFormation | ResetPrinciples |  | void |  |
| PowerBlocFormation | SelectIdentity | 1. PowerBlocIdentity | void |  |
| PowerBlocFormation | Self |  | PowerBlocFormation |  |
| PowerBlocFormationPanel | AccessSelf |  | PowerBlocFormationPanel | Category: const |
| PowerBlocFormationPanel | GetPowerBlocFormation |  | PowerBlocFormation | Category: nonconst |
| PowerBlocFormationPanel | OnEditName |  | void |  |
| PowerBlocFormationPanel | Self |  | PowerBlocFormationPanel |  |
| PowerBlocFormationPanel | ToggleSelectPowerBlocIdentityMenu | 1. Unknown | void |  |
| PowerBlocFormationPrincipleSlot | AccessSelf |  | PowerBlocFormationPrincipleSlot | Category: const |
| PowerBlocFormationPrincipleSlot | IsActive |  | bool |  |
| PowerBlocFormationPrincipleSlot | IsAnyPrincipleSelected |  | bool |  |
| PowerBlocFormationPrincipleSlot | IsChangingPrinciple |  | bool |  |
| PowerBlocFormationPrincipleSlot | IsNext |  | bool |  |
| PowerBlocFormationPrincipleSlot | IsSelectedPrinciple | 1. Unknown | bool |  |
| PowerBlocFormationPrincipleSlot | IsUnlocked |  | bool |  |
| PowerBlocFormationPrincipleSlot | OnAnimationFinished |  | void |  |
| PowerBlocFormationPrincipleSlot | RemovePrinciple |  | void |  |
| PowerBlocFormationPrincipleSlot | Self |  | PowerBlocFormationPrincipleSlot |  |
| PowerBlocIdentity | AccessSelf |  | PowerBlocIdentity | Category: const |
| PowerBlocIdentity | GetBackground |  | Unknown | Category: nonconst |
| PowerBlocIdentity | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| PowerBlocIdentity | GetDesc |  | CString | Category: nonconst |
| PowerBlocIdentity | GetIcon |  | Unknown | Category: nonconst |
| PowerBlocIdentity | GetIsPossibleDesc |  | CString | Category: nonconst |
| PowerBlocIdentity | GetLeaderEffectDesc |  | CString | Category: nonconst |
| PowerBlocIdentity | GetMemberEffectDesc |  | CString | Category: nonconst |
| PowerBlocIdentity | GetName |  | CString | Category: nonconst |
| PowerBlocIdentity | GetNameNoFormatting |  | CString | Category: nonconst |
| PowerBlocIdentity | GetNonLeaderEffectDesc |  | CString | Category: nonconst |
| PowerBlocIdentity | GetOnCreatedEffectDesc | 1. Unknown | CString | Category: nonconst |
| PowerBlocIdentity | GetPowerBlocEffectDesc |  | CString | Category: nonconst |
| PowerBlocIdentity | GetPrimaryPrincipleGroups |  | Unknown | Category: nonconst |
| PowerBlocIdentity | GetPrinciplesDesc |  | CString | Category: nonconst |
| PowerBlocIdentity | GetProductionMethodsDesc |  | CString | Category: nonconst |
| PowerBlocIdentity | GetTooltipTag |  | CString | Category: nonconst |
| PowerBlocIdentity | GetUnlockedPrincipleGroups |  | Unknown | Category: nonconst |
| PowerBlocIdentity | IsPossible |  | bool |  |
| PowerBlocIdentity | MakeScope |  | Scope |  |
| PowerBlocIdentity | Self |  | PowerBlocIdentity |  |
| PowerBlocMapTexture | AccessSelf |  | PowerBlocMapTexture | Category: const |
| PowerBlocMapTexture | GetColor |  | CVector4f | Category: nonconst |
| PowerBlocMapTexture | GetIndex |  | int32 | Category: nonconst |
| PowerBlocMapTexture | GetKey |  | CString | Category: nonconst |
| PowerBlocMapTexture | GetName |  | CString | Category: nonconst |
| PowerBlocMapTexture | GetTexture |  | Unknown | Category: nonconst |
| PowerBlocMapTexture | GetTooltipTag |  | CString | Category: nonconst |
| PowerBlocMapTexture | IsSelected |  | bool |  |
| PowerBlocMapTexture | OnClicked |  | void |  |
| PowerBlocMapTexture | Self |  | PowerBlocMapTexture |  |
| PowerBlocMapTextureSelector | AccessSelf |  | PowerBlocMapTextureSelector | Category: const |
| PowerBlocMapTextureSelector | GetItems |  | Unknown | Category: nonconst |
| PowerBlocMapTextureSelector | GetSelectedItem |  | PowerBlocMapTexture | Category: nonconst |
| PowerBlocMapTextureSelector | OnNextClicked |  | void |  |
| PowerBlocMapTextureSelector | OnPreviousClicked |  | void |  |
| PowerBlocMapTextureSelector | Self |  | PowerBlocMapTextureSelector |  |
| PowerBlocPanel | AccessSelf |  | PowerBlocPanel | Category: const |
| PowerBlocPanel | GetNumInvitableCountries |  | int32 | Category: nonconst |
| PowerBlocPanel | GetPrincipleSlot | 1. Unknown | PowerBlocPrincipleSlot | Category: nonconst |
| PowerBlocPanel | GetSelectedPowerBloc |  | PowerBloc | Category: nonconst |
| PowerBlocPanel | IsPowerBlocSelected |  | bool |  |
| PowerBlocPanel | OnClickInviteCountries |  | void |  |
| PowerBlocPanel | Self |  | PowerBlocPanel |  |
| PowerBlocPanel | ToggleFormationSelectionWindow | 1. PowerBlocFormationPrincipleSlot | void |  |
| PowerBlocPanel | ToggleSelectionWindow | 1. PowerBlocPrincipleSlot | void |  |
| PowerBlocPrinciple | AccessSelf |  | PowerBlocPrinciple | Category: const |
| PowerBlocPrinciple | GetBackground |  | Unknown | Category: nonconst |
| PowerBlocPrinciple | GetBuildingTypesDesc |  | CString | Category: nonconst |
| PowerBlocPrinciple | GetCompanyTypesDesc |  | CString | Category: nonconst |
| PowerBlocPrinciple | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| PowerBlocPrinciple | GetDesc |  | CString | Category: nonconst |
| PowerBlocPrinciple | GetGroup |  | PowerBlocPrincipleGroup | Category: nonconst |
| PowerBlocPrinciple | GetIcon |  | Unknown | Category: nonconst |
| PowerBlocPrinciple | GetIncompatibilitiesDesc |  | CString | Category: nonconst |
| PowerBlocPrinciple | GetInstitutionEffectDesc |  | CString | Category: nonconst |
| PowerBlocPrinciple | GetIsPossibleDesc |  | CString | Category: nonconst |
| PowerBlocPrinciple | GetIsPossibleTriggerDesc |  | CString | Category: nonconst |
| PowerBlocPrinciple | GetLeaderEffectDesc |  | CString | Category: nonconst |
| PowerBlocPrinciple | GetMemberEffectDesc |  | CString | Category: nonconst |
| PowerBlocPrinciple | GetMobilizationOptionsDesc |  | CString | Category: nonconst |
| PowerBlocPrinciple | GetName |  | CString | Category: nonconst |
| PowerBlocPrinciple | GetNameNoFormatting |  | CString | Category: nonconst |
| PowerBlocPrinciple | GetNonLeaderEffectDesc |  | CString | Category: nonconst |
| PowerBlocPrinciple | GetPowerBlocEffectDesc |  | CString | Category: nonconst |
| PowerBlocPrinciple | GetProductionMethodsDesc |  | CString | Category: nonconst |
| PowerBlocPrinciple | GetTooltipTag |  | CString | Category: nonconst |
| PowerBlocPrinciple | IsPossible |  | bool |  |
| PowerBlocPrinciple | MakeScope |  | Scope |  |
| PowerBlocPrinciple | Self |  | PowerBlocPrinciple |  |
| PowerBlocPrinciple | UpgradeToNextLevel |  | Command |  |
| PowerBlocPrincipleData | AccessSelf |  | PowerBlocPrincipleData | Category: const |
| PowerBlocPrincipleData | GetCooldownDate |  | Date | Category: nonconst |
| PowerBlocPrincipleData | GetSelectionDate |  | Date | Category: nonconst |
| PowerBlocPrincipleData | GetTooltipTag |  | CString | Category: nonconst |
| PowerBlocPrincipleData | Self |  | PowerBlocPrincipleData |  |
| PowerBlocPrincipleGroup | AccessSelf |  | PowerBlocPrincipleGroup | Category: const |
| PowerBlocPrincipleGroup | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| PowerBlocPrincipleGroup | GetDesc |  | CString | Category: nonconst |
| PowerBlocPrincipleGroup | GetLevels |  | Unknown | Category: nonconst |
| PowerBlocPrincipleGroup | GetLevelsDesc |  | CString | Category: nonconst |
| PowerBlocPrincipleGroup | GetName |  | CString | Category: nonconst |
| PowerBlocPrincipleGroup | GetNameNoFormatting |  | CString | Category: nonconst |
| PowerBlocPrincipleGroup | GetTooltipTag |  | CString | Category: nonconst |
| PowerBlocPrincipleGroup | IsPrimaryFor | 1. PowerBlocIdentity | bool |  |
| PowerBlocPrincipleGroup | MakeScope |  | Scope |  |
| PowerBlocPrincipleGroup | Self |  | PowerBlocPrincipleGroup |  |
| PowerBlocPrincipleSelectionWindow | AccessSelf |  | PowerBlocPrincipleSelectionWindow | Category: const |
| PowerBlocPrincipleSelectionWindow | CanAffordPrinciple | 1. PowerBlocPrinciple | bool |  |
| PowerBlocPrincipleSelectionWindow | CanSelectPrinciple | 1. PowerBlocPrinciple | bool |  |
| PowerBlocPrincipleSelectionWindow | GetAvailableGroups |  | Unknown | Category: nonconst |
| PowerBlocPrincipleSelectionWindow | GetDescForPrincipleSelection | 1. PowerBlocPrinciple | CString | Category: nonconst |
| PowerBlocPrincipleSelectionWindow | GetMandateCostDescForSelectedPrinciple |  | CString | Category: nonconst |
| PowerBlocPrincipleSelectionWindow | GetMandateCostForSelectedPrinciple |  | int32 | Category: nonconst |
| PowerBlocPrincipleSelectionWindow | GetNumMandates |  | int32 | Category: nonconst |
| PowerBlocPrincipleSelectionWindow | GetPotentialGroups |  | Unknown | Category: nonconst |
| PowerBlocPrincipleSelectionWindow | GetPowerBloc |  | PowerBloc | Category: nonconst |
| PowerBlocPrincipleSelectionWindow | GetPowerBlocFormation |  | PowerBlocFormation | Category: nonconst |
| PowerBlocPrincipleSelectionWindow | GetReplacedPrinciple |  | PowerBlocPrinciple | Category: nonconst |
| PowerBlocPrincipleSelectionWindow | GetSelectedPrinciple |  | PowerBlocPrinciple | Category: nonconst |
| PowerBlocPrincipleSelectionWindow | HasPrinciple | 1. Unknown | bool |  |
| PowerBlocPrincipleSelectionWindow | HasPrincipleFromGroup | 1. Unknown | bool |  |
| PowerBlocPrincipleSelectionWindow | HasSelectedPrimaryPrinciple |  | bool |  |
| PowerBlocPrincipleSelectionWindow | HasSelectedPrinciple |  | bool |  |
| PowerBlocPrincipleSelectionWindow | IsPowerBlocFormation |  | bool |  |
| PowerBlocPrincipleSelectionWindow | IsReplacedPrinciple | 1. PowerBlocPrinciple | bool |  |
| PowerBlocPrincipleSelectionWindow | IsReplacingPrinciple |  | bool |  |
| PowerBlocPrincipleSelectionWindow | IsSelectedPrinciple | 1. PowerBlocPrinciple | bool |  |
| PowerBlocPrincipleSelectionWindow | IsUpgradingPrinciple |  | bool |  |
| PowerBlocPrincipleSelectionWindow | Self |  | PowerBlocPrincipleSelectionWindow |  |
| PowerBlocPrincipleSelectionWindow | SubmitFormationPrincipleSelection |  | void |  |
| PowerBlocPrincipleSelectionWindow | SubmitPrincipleSelection |  | Command |  |
| PowerBlocPrincipleSelectionWindow | TogglePrincipleSelection | 1. PowerBlocPrinciple | void |  |
| PowerBlocPrincipleSlot | AccessSelf |  | PowerBlocPrincipleSlot | Category: const |
| PowerBlocPrincipleSlot | GetPrinciple |  | PowerBlocPrinciple | Category: nonconst |
| PowerBlocPrincipleSlot | GetUnlockDesc |  | CString | Category: nonconst |
| PowerBlocPrincipleSlot | IsActive |  | bool |  |
| PowerBlocPrincipleSlot | IsChangingPrinciple |  | bool |  |
| PowerBlocPrincipleSlot | IsNext |  | bool |  |
| PowerBlocPrincipleSlot | IsUnlocked |  | bool |  |
| PowerBlocPrincipleSlot | OnAnimationFinished |  | void |  |
| PowerBlocPrincipleSlot | Self |  | PowerBlocPrincipleSlot |  |
| PowerBlocStatue | AccessSelf |  | PowerBlocStatue | Category: const |
| PowerBlocStatue | GetEntity | 1. PdxGuiWidget | Unknown | Category: nonconst |
| PowerBlocStatue | GetTooltipTag |  | CString | Category: nonconst |
| PowerBlocStatue | Self |  | PowerBlocStatue |  |
| PowerBlocStatueAccessoryType | AccessSelf |  | PowerBlocStatueAccessoryType | Category: const |
| PowerBlocStatueAccessoryType | GetEntity |  | CString | Category: nonconst |
| PowerBlocStatueAccessoryType | GetName |  | CString | Category: nonconst |
| PowerBlocStatueAccessoryType | GetTooltipTag |  | CString | Category: nonconst |
| PowerBlocStatueAccessoryType | Self |  | PowerBlocStatueAccessoryType |  |
| PowerBlocStatueAccessoryTypeSelector | AccessSelf |  | PowerBlocStatueAccessoryTypeSelector | Category: const |
| PowerBlocStatueAccessoryTypeSelector | GetName |  | CString | Category: nonconst |
| PowerBlocStatueAccessoryTypeSelector | GetStatueAccessoryTypeOptions |  | Unknown | Category: nonconst |
| PowerBlocStatueAccessoryTypeSelector | Self |  | PowerBlocStatueAccessoryTypeSelector |  |
| PowerBlocStatueAccessoryTypeSelector | SetNextStatueAccessoryType |  | void |  |
| PowerBlocStatueAccessoryTypeSelector | SetPrevStatueAccessoryType |  | void |  |
| PowerBlocStatueAccessoryTypeSelector | SetStatueAccessoryType |  | void |  |
| PowerBlocStatueHeroType | AccessSelf |  | PowerBlocStatueHeroType | Category: const |
| PowerBlocStatueHeroType | GetEntity |  | CString | Category: nonconst |
| PowerBlocStatueHeroType | GetName |  | CString | Category: nonconst |
| PowerBlocStatueHeroType | GetTooltipTag |  | CString | Category: nonconst |
| PowerBlocStatueHeroType | Self |  | PowerBlocStatueHeroType |  |
| PowerBlocStatuePedestalType | AccessSelf |  | PowerBlocStatuePedestalType | Category: const |
| PowerBlocStatuePedestalType | GetEntity |  | CString | Category: nonconst |
| PowerBlocStatuePedestalType | GetName |  | CString | Category: nonconst |
| PowerBlocStatuePedestalType | GetTooltipTag |  | CString | Category: nonconst |
| PowerBlocStatuePedestalType | Self |  | PowerBlocStatuePedestalType |  |
| PrestigeGoodChangeNamePopup | AccessSelf |  | PrestigeGoodChangeNamePopup | Category: const |
| PrestigeGoodChangeNamePopup | Confirm |  | Command |  |
| PrestigeGoodChangeNamePopup | GetPrestigeGood |  | Goods | Category: nonconst |
| PrestigeGoodChangeNamePopup | OnEditName |  | void |  |
| PrestigeGoodChangeNamePopup | Self |  | PrestigeGoodChangeNamePopup |  |
| PreviewMaskTexture | AccessSelf |  | PreviewMaskTexture | Category: const |
| PreviewMaskTexture | GetOpacity |  | float | Category: nonconst |
| PreviewMaskTexture | Self |  | PreviewMaskTexture |  |
| PreviewMaskTexture | SetOpacity |  | void |  |
| PreviewMaskTexture | SetOpacityStr |  | void |  |
| ProductionMarker | AccessSelf |  | ProductionMarker | Category: const |
| ProductionMarker | AccessState |  | State | Category: const |
| ProductionMarker | AccessTopItems |  | Unknown | Category: const |
| ProductionMarker | GetPosition |  | CVector2f | Category: nonconst |
| ProductionMarker | Self |  | ProductionMarker |  |
| ProductionMethod | AccessSelf |  | ProductionMethod | Category: const |
| ProductionMethod | GetBuildingTypesUsingThisDesc | 1. Country | CString | Category: nonconst |
| ProductionMethod | GetCompactEmploymentSummaryDesc |  | CString | Category: nonconst |
| ProductionMethod | GetCompactGoodsSummaryDesc |  | CString | Category: nonconst |
| ProductionMethod | GetKey |  | CString | Category: nonconst |
| ProductionMethod | GetName |  | CString | Category: nonconst |
| ProductionMethod | GetNameNoFormatting |  | CString | Category: nonconst |
| ProductionMethod | GetNumOfBuildingsUsingThis | 1. Country | int32 | Category: nonconst |
| ProductionMethod | GetSwitch | 1. Unknown | Command | Category: nonconst |
| ProductionMethod | GetTexture |  | Unknown | Category: nonconst |
| ProductionMethod | GetTooltip | 1. Country | CString | Category: nonconst |
| ProductionMethod | GetTooltipForBuilding | 1. Country 2. Building | CString | Category: nonconst |
| ProductionMethod | GetTooltipTag |  | CString | Category: nonconst |
| ProductionMethod | GetTooltipWithoutRequirements | 1. Unknown 2. Unknown | CString | Category: nonconst |
| ProductionMethod | IsHiddenWhenUnavailable |  | bool |  |
| ProductionMethod | Self |  | ProductionMethod |  |
| ProductionMethodConfirmationPopup | AccessSelf |  | ProductionMethodConfirmationPopup | Category: const |
| ProductionMethodConfirmationPopup | CanExempt |  | bool |  |
| ProductionMethodConfirmationPopup | Cancel |  | void |  |
| ProductionMethodConfirmationPopup | Continue |  | void |  |
| ProductionMethodConfirmationPopup | Exempt |  | void |  |
| ProductionMethodConfirmationPopup | GetExemptedBuildingCount |  | int32 | Category: nonconst |
| ProductionMethodConfirmationPopup | GetLowProductivityBreakdown |  | CString | Category: nonconst |
| ProductionMethodConfirmationPopup | GetTotalBuildingCount |  | int32 | Category: nonconst |
| ProductionMethodConfirmationPopup | Self |  | ProductionMethodConfirmationPopup |  |
| ProductionMethodGroup | AccessBuildingProductionMethods | 1. Building | Unknown | Category: const |
| ProductionMethodGroup | AccessCountryProductionMethods | 1. Country | Unknown | Category: const |
| ProductionMethodGroup | AccessSelf |  | ProductionMethodGroup | Category: const |
| ProductionMethodGroup | GetKey |  | CString | Category: nonconst |
| ProductionMethodGroup | GetMixedIcon |  | Unknown | Category: nonconst |
| ProductionMethodGroup | GetName |  | CString | Category: nonconst |
| ProductionMethodGroup | GetNumAvailableOptions | 1. Building | int32 | Category: nonconst |
| ProductionMethodGroup | GetNumAvailableOptionsForBuildingType | 1. BuildingType | int32 | Category: nonconst |
| ProductionMethodGroup | GetTooltipTag |  | CString | Category: nonconst |
| ProductionMethodGroup | Self |  | ProductionMethodGroup |  |
| ProgressInterface | AccessSelf |  | ProgressInterface | Category: const |
| ProgressInterface | GetProgress |  | CString | Category: nonconst |
| ProgressInterface | Self |  | ProgressInterface |  |
| PropertyListCategory | AccessSelf |  | PropertyListCategory | Category: const |
| PropertyListCategory | GetMargin |  | int32 | Category: nonconst |
| PropertyListCategory | GetName |  | CString | Category: nonconst |
| PropertyListCategory | IsEmpty |  | bool |  |
| PropertyListCategory | IsExpanded |  | bool |  |
| PropertyListCategory | IsRoot |  | bool |  |
| PropertyListCategory | Self |  | PropertyListCategory |  |
| PropertyListCategory | ToggleExpanded |  | void |  |
| PropertyListCategory | ToggleTreeExpanded |  | void |  |
| Proposal | AccessSelf |  | Proposal | Category: const |
| Proposal | AccessTimeoutTimer |  | PieTimer | Category: const |
| Proposal | GetActor |  | Country | Category: nonconst |
| Proposal | GetDescription |  | CString | Category: nonconst |
| Proposal | GetDiplomaticAction |  | DiplomaticAction | Category: nonconst |
| Proposal | GetDiplomaticDemand |  | DiplomaticDemand | Category: nonconst |
| Proposal | GetDiplomaticPlay |  | DiplomaticPlay | Category: nonconst |
| Proposal | GetName |  | CString | Category: nonconst |
| Proposal | GetRecipient |  | Country | Category: nonconst |
| Proposal | GetTarget |  | Country | Category: nonconst |
| Proposal | GetTexture |  | Unknown | Category: nonconst |
| Proposal | GetToolTip |  | CString | Category: nonconst |
| Proposal | GetTooltipTag |  | CString | Category: nonconst |
| Proposal | GetTreaty |  | Treaty | Category: nonconst |
| Proposal | IsHidden |  | bool |  |
| Proposal | MarkAsHidden |  | void |  |
| Proposal | Self |  | Proposal |  |
| Proposal | Unhide |  | void |  |
| Province | AccessSelf |  | Province | Category: const |
| Province | AccessStateRegion |  | StateRegion | Category: const |
| Province | GetArea |  | int32 | Category: nonconst |
| Province | GetBestTexture |  | Unknown | Category: nonconst |
| Province | GetController |  | Country | Category: nonconst |
| Province | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| Province | GetDeploySelectedFormationsCommand |  | Command | Category: nonconst |
| Province | GetID |  | CString | Category: nonconst |
| Province | GetIndex |  | int32 | Category: nonconst |
| Province | GetScreenPosition |  | CVector2f | Category: nonconst |
| Province | GetSeaNodeName |  | CString | Category: nonconst |
| Province | GetState |  | State | Category: nonconst |
| Province | GetStateRegion |  | StateRegion | Category: nonconst |
| Province | GetTerrainCombatWidth |  | CFixedPoint | Category: nonconst |
| Province | GetTerrainName |  | CString | Category: nonconst |
| Province | GetTooltipTag |  | CString | Category: nonconst |
| Province | IsCoastal |  | bool |  |
| Province | MakeScope |  | Scope |  |
| Province | Self |  | Province |  |
| RandomizableValueFloat | AccessSelf |  | RandomizableValueFloat | Category: const |
| RandomizableValueFloat | GetValue |  | float | Category: nonconst |
| RandomizableValueFloat | Randomize |  | void |  |
| RandomizableValueFloat | Self |  | RandomizableValueFloat |  |
| RandomizableValueFloat | SetValue |  | void |  |
| RandomizableValueInt | AccessSelf |  | RandomizableValueInt | Category: const |
| RandomizableValueInt | GetValue |  | int32 | Category: nonconst |
| RandomizableValueInt | Randomize |  | void |  |
| RandomizableValueInt | Self |  | RandomizableValueInt |  |
| RandomizableValueInt | SetValue |  | void |  |
| ReformGovernment | AccessSelf |  | ReformGovernment | Category: const |
| ReformGovernment | Confirm |  | Command |  |
| ReformGovernment | GetAllPotentialInterestGroups |  | Unknown | Category: nonconst |
| ReformGovernment | GetAllPotentialParties |  | Unknown | Category: nonconst |
| ReformGovernment | GetAllStagedInterestGroups |  | Unknown | Category: nonconst |
| ReformGovernment | GetAllStagedParties |  | Unknown | Category: nonconst |
| ReformGovernment | GetConfirmDesc |  | CString | Category: nonconst |
| ReformGovernment | GetCountry |  | Country | Category: nonconst |
| ReformGovernment | GetIndependentPotentialInterestGroups |  | Unknown | Category: nonconst |
| ReformGovernment | GetIndependentStagedInterestGroups |  | Unknown | Category: nonconst |
| ReformGovernment | GetLegitimacy |  | int32 | Category: nonconst |
| ReformGovernment | GetLegitimacyDesc |  | CString | Category: nonconst |
| ReformGovernment | GetLegitimacyLevel |  | LegitimacyLevel | Category: nonconst |
| ReformGovernment | GetOptionIndexText | 1. int32 | CString | Category: nonconst |
| ReformGovernment | GetOptionIndexTooltip | 1. int32 | CString | Category: nonconst |
| ReformGovernment | GetPredictedLawsWithGovernmentOrMovementSupport |  | Unknown | Category: nonconst |
| ReformGovernment | GetPredictedLawsWithGovernmentOrMovementSupportHeader |  | CString | Category: nonconst |
| ReformGovernment | GetPredictedLawsWithoutGovernmentOrMovementSupport |  | Unknown | Category: nonconst |
| ReformGovernment | GetPredictedLawsWithoutGovernmentOrMovementSupportHeader |  | CString | Category: nonconst |
| ReformGovernment | GetPredictedLegitimacy |  | int32 | Category: nonconst |
| ReformGovernment | GetPredictedLegitimacyDelta |  | int32 | Category: nonconst |
| ReformGovernment | GetPredictedLegitimacyDesc |  | CString | Category: nonconst |
| ReformGovernment | GetPredictedLegitimacyLevel |  | LegitimacyLevel | Category: nonconst |
| ReformGovernment | GetPredictedLoyalistsDelta |  | int64 | Category: nonconst |
| ReformGovernment | GetPredictedNewRuler | 1. Unknown | Character | Category: nonconst |
| ReformGovernment | GetPredictedRadicalsDelta |  | int64 | Category: nonconst |
| ReformGovernment | HasMadeAnyChanges |  | bool |  |
| ReformGovernment | HasPredictedLawsWithGovernmentOrMovementSupportChanged |  | bool |  |
| ReformGovernment | HasPredictedLawsWithoutGovernmentOrMovementSupportChanged |  | bool |  |
| ReformGovernment | HasStagedGroup |  | bool |  |
| ReformGovernment | OptionIndexIsActiveGovernment | 1. Unknown | bool |  |
| ReformGovernment | OptionIndexIsSelected | 1. int32 | bool |  |
| ReformGovernment | OptionIndexIsValid | 1. int32 | bool |  |
| ReformGovernment | Reset |  | void |  |
| ReformGovernment | SelectOptionIndex | 1. int32 | void |  |
| ReformGovernment | Self |  | ReformGovernment |  |
| ReformGovernment | StageInterestGroup | 1. InterestGroup | void |  |
| ReformGovernment | StageParty | 1. Party | void |  |
| ReformGovernment | UnstageInterestGroup | 1. InterestGroup | void |  |
| ReformGovernment | UnstageParty | 1. Party | void |  |
| ReformGovernment | WouldGetNewRuler |  | bool |  |
| ReleaseCountryWindow | AccessCountryCreation |  | CountryCreation | Category: const |
| ReleaseCountryWindow | AccessSelf |  | ReleaseCountryWindow | Category: const |
| ReleaseCountryWindow | CanMakeIndependent |  | bool |  |
| ReleaseCountryWindow | CanMakeOwnSubject |  | bool |  |
| ReleaseCountryWindow | CanPlayAsReleased |  | bool |  |
| ReleaseCountryWindow | CanReleaseWithKeepHomelandStates |  | bool |  |
| ReleaseCountryWindow | GetCountryCreation |  | CountryCreation | Category: nonconst |
| ReleaseCountryWindow | GetKeepHomelandStatesTooltip |  | CString | Category: nonconst |
| ReleaseCountryWindow | GetMakeIndependentTooltip |  | CString | Category: nonconst |
| ReleaseCountryWindow | GetMakeOwnSubjectTooltip |  | CString | Category: nonconst |
| ReleaseCountryWindow | GetPlayAsReleasedTooltip |  | CString | Category: nonconst |
| ReleaseCountryWindow | GetPopupQuestion |  | CString | Category: nonconst |
| ReleaseCountryWindow | ReleaseCountry |  | Command |  |
| ReleaseCountryWindow | Self |  | ReleaseCountryWindow |  |
| ReleaseCountryWindow | SubjectTypeToMakeOwnSubjectExists |  | bool |  |
| ReleaseCountryWindow | ToggleKeepHomelandStates |  | void |  |
| ReleaseCountryWindow | ToggleMakeIndependent |  | void |  |
| ReleaseCountryWindow | ToggleMakeOwnSubject |  | void |  |
| ReleaseCountryWindow | TogglePlayAsReleased |  | void |  |
| ReleaseCountryWindow | WillKeepHomelandStates |  | bool |  |
| ReleaseCountryWindow | WillMakeIndependent |  | bool |  |
| ReleaseCountryWindow | WillMakeOwnSubject |  | bool |  |
| ReleaseCountryWindow | WillPlayAsReleased |  | bool |  |
| Religion | AccessSelf |  | Religion | Category: const |
| Religion | GetAcceptanceDescIn | 1. Country | CString | Category: nonconst |
| Religion | GetAcceptanceIn | 1. Country | int32 | Category: nonconst |
| Religion | GetAcceptanceStatusSegmentsIn | 1. Country | Unknown | Category: nonconst |
| Religion | GetColor |  | CVector4f | Category: nonconst |
| Religion | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| Religion | GetDependents | 1. Country | int64 | Category: nonconst |
| Religion | GetDependentsAsPercentage | 1. Country | CFixedPoint | Category: nonconst |
| Religion | GetDesc |  | CString | Category: nonconst |
| Religion | GetIcon |  | Unknown | Category: nonconst |
| Religion | GetName |  | CString | Category: nonconst |
| Religion | GetNameNoFormatting |  | CString | Category: nonconst |
| Religion | GetNameNoIcon |  | CString | Category: nonconst |
| Religion | GetPolStr | 1. Country | int64 | Category: nonconst |
| Religion | GetPolStrAsFloat | 1. Unknown | float | Category: nonconst |
| Religion | GetPolStrAsPercentage | 1. Country | CFixedPoint | Category: nonconst |
| Religion | GetPopulation | 1. Country | int64 | Category: nonconst |
| Religion | GetPopulationAsFloat | 1. Unknown | float | Category: nonconst |
| Religion | GetPopulationAsPercentage | 1. Country | CFixedPoint | Category: nonconst |
| Religion | GetPopulationChange | 1. Country | int64 | Category: nonconst |
| Religion | GetPopulationChangeDesc | 1. Country | CString | Category: nonconst |
| Religion | GetReligiousTraitsDesc |  | CString | Category: nonconst |
| Religion | GetStateDependents | 1. State | int64 | Category: nonconst |
| Religion | GetStateDependentsAsPercentage | 1. State | CFixedPoint | Category: nonconst |
| Religion | GetStatePolStr | 1. State | int64 | Category: nonconst |
| Religion | GetStatePolStrAsFloat | 1. Unknown | float | Category: nonconst |
| Religion | GetStatePolStrAsPercentage | 1. State | CFixedPoint | Category: nonconst |
| Religion | GetStatePopulation | 1. State | int64 | Category: nonconst |
| Religion | GetStatePopulationAsFloat | 1. Unknown | float | Category: nonconst |
| Religion | GetStatePopulationAsPercentage | 1. State | CFixedPoint | Category: nonconst |
| Religion | GetStateWorkforce | 1. State | int64 | Category: nonconst |
| Religion | GetStateWorkforceAsPercentage | 1. State | CFixedPoint | Category: nonconst |
| Religion | GetTaboosDesc |  | CString | Category: nonconst |
| Religion | GetTextIcon |  | CString | Category: nonconst |
| Religion | GetTexture |  | Unknown | Category: nonconst |
| Religion | GetTooltipTag |  | CString | Category: nonconst |
| Religion | GetWorkforce | 1. Country | int64 | Category: nonconst |
| Religion | GetWorkforceAsPercentage | 1. Country | CFixedPoint | Category: nonconst |
| Religion | IsValid |  | bool |  |
| Religion | MakeScope |  | Scope |  |
| Religion | Self |  | Religion |  |
| ReligionInfoPanel | AccessPops |  | Unknown | Category: const |
| ReligionInfoPanel | AccessPopsList |  | PopList | Category: const |
| ReligionInfoPanel | AccessReligion |  | Religion | Category: const |
| ReligionInfoPanel | AccessSelf |  | ReligionInfoPanel | Category: const |
| ReligionInfoPanel | GetReligion |  | Religion | Category: nonconst |
| ReligionInfoPanel | IsShowingNationalOnly |  | bool |  |
| ReligionInfoPanel | Self |  | ReligionInfoPanel |  |
| ReligionInfoPanel | ToggleShowNationalOnly |  | void |  |
| RemoveFriendConfirmWindow | AccessSelf |  | RemoveFriendConfirmWindow | Category: const |
| RemoveFriendConfirmWindow | ConfirmRemove |  | void |  |
| RemoveFriendConfirmWindow | Hide |  | void |  |
| RemoveFriendConfirmWindow | Self |  | RemoveFriendConfirmWindow |  |
| RemoveFriendConfirmWindow | ShouldBeShown |  | bool |  |
| RemoveFriendConfirmWindow | Show |  | void |  |
| RepackWindow | AccessSelf |  | RepackWindow | Category: const |
| RepackWindow | GetCurrentTileSize |  | int32 | Category: nonconst |
| RepackWindow | Repack |  | void |  |
| RepackWindow | Self |  | RepackWindow |  |
| RepackWindow | SetTileSize | 1. CString | void |  |
| RepackWindow | ShouldWrapX |  | bool |  |
| RepackWindow | Toggle |  | void |  |
| RepackWindow | ToggleShouldWrapX |  | void |  |
| ResignConfirmationWindow | AccessSelf |  | ResignConfirmationWindow | Category: const |
| ResignConfirmationWindow | Cancel |  | void |  |
| ResignConfirmationWindow | GetText |  | CString | Category: nonconst |
| ResignConfirmationWindow | IsProgress |  | bool |  |
| ResignConfirmationWindow | IsShowSave |  | bool |  |
| ResignConfirmationWindow | OnDesktop |  | void |  |
| ResignConfirmationWindow | OnMenu |  | void |  |
| ResignConfirmationWindow | Self |  | ResignConfirmationWindow |  |
| ResignConfirmationWindow | SetShowSave | 1. Unknown | void |  |
| ResignConfirmationWindow | ShouldSave |  | bool |  |
| ResignConfirmationWindow | ToggleShouldSave |  | void |  |
| RevolutionaryMovementMarker | AccessSelf |  | RevolutionaryMovementMarker | Category: const |
| RevolutionaryMovementMarker | GetPoliticalMovement |  | PoliticalMovement | Category: nonconst |
| RevolutionaryMovementMarker | GetPosition |  | CVector2f | Category: nonconst |
| RevolutionaryMovementMarker | Self |  | RevolutionaryMovementMarker |  |

List of all GUI functions

| Type | Function | Arguments | Output | Description |
| RightClickMenuManager | AccessSelf |  | RightClickMenuManager | Category: const |
| RightClickMenuManager | Close |  | void |  |
| RightClickMenuManager | IsImportantActionsListOpen |  | bool |  |
| RightClickMenuManager | IsMenuOpen | 1. Unknown | bool |  |
| RightClickMenuManager | IsResearchQueueOpen |  | bool |  |
| RightClickMenuManager | IsSwitchProductionMethodMenuOpen |  | bool |  |
| RightClickMenuManager | Self |  | RightClickMenuManager |  |
| RightClickMenuManager | ShowForBuilding | 1. Building | void |  |
| RightClickMenuManager | ShowForBuildingType | 1. BuildingType | void |  |
| RightClickMenuManager | ShowForCharacter | 1. Character | void |  |
| RightClickMenuManager | ShowForCountry | 1. Country | void |  |
| RightClickMenuManager | ShowForDecree | 1. Decree | void |  |
| RightClickMenuManager | ShowForDiplomaticPlay | 1. DiplomaticPlay | void |  |
| RightClickMenuManager | ShowForGoods | 1. Goods | void |  |
| RightClickMenuManager | ShowForIG | 1. InterestGroup | void |  |
| RightClickMenuManager | ShowForImposeLaw | 1. Law | void |  |
| RightClickMenuManager | ShowForMarket | 1. Market | void |  |
| RightClickMenuManager | ShowForMilitaryFormation | 1. MilitaryFormation | void |  |
| RightClickMenuManager | ShowForPoliticalMovement | 1. PoliticalMovement | void |  |
| RightClickMenuManager | ShowForPowerBloc | 1. PowerBloc | void |  |
| RightClickMenuManager | ShowForSelectArmy |  | void |  |
| RightClickMenuManager | ShowForSelectFleet |  | void |  |
| RightClickMenuManager | ShowForSelectOrder | 1. Character | void |  |
| RightClickMenuManager | ShowForSetDefaultCombatUnitType | 1. MilitaryFormation 2. CombatUnitGroup | void |  |
| RightClickMenuManager | ShowForState | 1. State | void |  |
| RightClickMenuManager | ToggleAddArmyToInvasion | 1. Invasion 2. PdxGuiWidget | void |  |
| RightClickMenuManager | ToggleAddFleetToInvasion | 1. Invasion 2. PdxGuiWidget | void |  |
| RightClickMenuManager | ToggleArticleDraftInput | 1. TreatyDraft 2. ArticleDraft 3. Country 4. PdxGuiWidget 5. CString | void |  |
| RightClickMenuManager | ToggleArticleTypeInput | 1. TreatyDraft 2. ArticleType 3. Country 4. PdxGuiWidget 5. CString | void |  |
| RightClickMenuManager | ToggleBlocActions | 1. Country 2. PdxGuiWidget | void |  |
| RightClickMenuManager | ToggleBlocLeaderActions | 1. Country 2. PdxGuiWidget | void |  |
| RightClickMenuManager | ToggleBuildingActions | 1. Building 2. PdxGuiWidget | void |  |
| RightClickMenuManager | ToggleColorPicker | 1. DataColorPicker 2. PdxGuiWidget | void |  |
| RightClickMenuManager | ToggleCompanyCharterType | 1. CompanyCharterType 2. Company 3. PdxGuiWidget | void |  |
| RightClickMenuManager | ToggleCustomizationOptionItems | 1. Unknown 2. Unknown | void |  |
| RightClickMenuManager | ToggleFilterUnitStates | 1. StagedUnitsWithType 2. StagedFormation 3. PdxGuiWidget | void |  |
| RightClickMenuManager | ToggleImportantActionsList | 1. TopFrontend 2. PdxGuiWidget | void |  |
| RightClickMenuManager | ToggleMapModes | 1. MapModeList 2. PdxGuiWidget | void |  |
| RightClickMenuManager | ToggleMarketStarvationCountriesFilter | 1. Market 2. PdxGuiWidget | void |  |
| RightClickMenuManager | ToggleMarketStarvationStatesFilter | 1. Market 2. PdxGuiWidget | void |  |
| RightClickMenuManager | ToggleMilitaryFormation | 1. MilitaryFormation 2. PdxGuiWidget | void |  |
| RightClickMenuManager | ToggleNationalizePrivatelyOwnedFilter | 1. Unknown 2. Unknown | void |  |
| RightClickMenuManager | ToggleNegotiationIGSelect | 1. Country 2. Law 3. PdxGuiWidget 4. CString | void |  |
| RightClickMenuManager | ToggleOverlordActions | 1. Country 2. PdxGuiWidget | void |  |
| RightClickMenuManager | TogglePowerBlocCoaPieces | 1. PowerBlocCoaPieceSelector 2. PdxGuiWidget | void |  |
| RightClickMenuManager | TogglePowerBlocMapTextureItems | 1. PowerBlocMapTextureSelector 2. PdxGuiWidget | void |  |
| RightClickMenuManager | TogglePrivatizeOrMonopolize | 1. BuildingBrowserBuildingTypeItem 2. PdxGuiWidget | void |  |
| RightClickMenuManager | ToggleResearchQueue | 1. PdxGuiWidget | void |  |
| RightClickMenuManager | ToggleSubjectActions | 1. Country 2. PdxGuiWidget | void |  |
| RightClickMenuManager | ToggleSwayOfferArticleTypeInput | 1. Unknown 2. Unknown 3. Unknown | void |  |
| RightClickMenuManager | ToggleSwitchProductionMethodMenu | 1. Building 2. ProductionMethodGroup 3. PdxGuiWidget | void |  |
| RightClickMenuManager | ToggleSwitchProductionMethodMenuForType | 1. BuildingType 2. ProductionMethodGroup 3. PdxGuiWidget | void |  |
| RightClickMenuManager | ToggleTreatyDraftBindPeriodMenu | 1. Unknown 2. Unknown | void |  |
| RightClickMenuManager | ToggleTreatyDraftReset | 1. TreatyDraft 2. PdxGuiWidget | void |  |
| RightClickMenuManager | ToggleWarGoalArticleTypeInput | 1. Unknown 2. Unknown 3. Unknown | void |  |
| RulerSelectionPopup | AccessRulersOffer |  | Unknown | Category: const |
| RulerSelectionPopup | AccessSelf |  | RulerSelectionPopup | Category: const |
| RulerSelectionPopup | RandomizeRulersOffer |  | Command |  |
| RulerSelectionPopup | Self |  | RulerSelectionPopup |  |
| RulerSelectionPopup | SetRulerCommand | 1. Unknown | Command |  |
| Savable | AbsoluteLocationText |  | CString |  |
| Savable | AccessSelf |  | Savable | Category: const |
| Savable | AllowsFileDialog |  | bool |  |
| Savable | Error |  | CString |  |
| Savable | Filename |  | CString |  |
| Savable | FolderSelect |  | void |  |
| Savable | HasError |  | bool |  |
| Savable | HasWarning |  | bool |  |
| Savable | IsDeletable |  | bool |  |
| Savable | IsFilenameModifiable |  | bool |  |
| Savable | IsRevertible |  | bool |  |
| Savable | IsSelected |  | bool |  |
| Savable | Location |  | CString |  |
| Savable | LocationTooltip |  | CString |  |
| Savable | RevertLocation |  | void |  |
| Savable | Self |  | Savable |  |
| Savable | SetFilename |  | void |  |
| Savable | SetLocation | 1. Unknown | void |  |
| Savable | SetSelected | 1. bool | void |  |
| Savable | Warning |  | CString |  |
| SavableGroup | AccessSelf |  | SavableGroup | Category: const |
| SavableGroup | HasError |  | bool |  |
| SavableGroup | HasWarning |  | bool |  |
| SavableGroup | IsExpanded |  | bool |  |
| SavableGroup | IsRevertible |  | bool |  |
| SavableGroup | IsSelected |  | bool |  |
| SavableGroup | IsSelectedIndeterminable |  | bool |  |
| SavableGroup | Location |  | CString |  |
| SavableGroup | RevertLocation |  | void |  |
| SavableGroup | Savables |  | Unknown |  |
| SavableGroup | Self |  | SavableGroup |  |
| SavableGroup | SetLocation | 1. Unknown | void |  |
| SavableGroup | SetSelected | 1. bool | void |  |
| SavableGroup | Title |  | CString |  |
| SavableGroup | ToggleExpanded |  | void |  |
| SaveDialog | AccessSelf |  | SaveDialog | Category: const |
| SaveDialog | FindGroupLocation | 1. PdxGuiWidget 2. SavableGroup | void |  |
| SaveDialog | FindLocation | 1. PdxGuiWidget 2. Savable | void |  |
| SaveDialog | Groups |  | Unknown |  |
| SaveDialog | IsSelected |  | bool |  |
| SaveDialog | IsSelectedIndeterminable |  | bool |  |
| SaveDialog | SavableCount |  | int32 |  |
| SaveDialog | Self |  | SaveDialog |  |
| SaveDialog | SetSelected | 1. bool | void |  |
| SaveGame | AccessSelf |  | SaveGame | Category: const |
| SaveGame | GetLastModified |  | CString | Category: nonconst |
| SaveGame | GetName |  | CString | Category: nonconst |
| SaveGame | Self |  | SaveGame |  |
| SaveGameAnalysisView | AccessSelf |  | SaveGameAnalysisView | Category: const |
| SaveGameAnalysisView | GetNote | 1. SaveGameBlockData | CUTF8String | Category: nonconst |
| SaveGameAnalysisView | GetProgress |  | float | Category: nonconst |
| SaveGameAnalysisView | GetSaveGame |  | SaveGame | Category: nonconst |
| SaveGameAnalysisView | GetShowHidden |  | bool | Category: nonconst |
| SaveGameAnalysisView | IsActive |  | bool |  |
| SaveGameAnalysisView | IsEmpty |  | bool |  |
| SaveGameAnalysisView | IsReading |  | bool |  |
| SaveGameAnalysisView | Self |  | SaveGameAnalysisView |  |
| SaveGameAnalysisView | Sort | 1. CString | void |  |
| SaveGameAnalysisView | ToggleShowHidden |  | void |  |
| SaveGameAnalyzer | AccessSelf |  | SaveGameAnalyzer | Category: const |
| SaveGameAnalyzer | CancelLoad |  | void |  |
| SaveGameAnalyzer | CloseNotes |  | void |  |
| SaveGameAnalyzer | EditNotes | 1. CString | void |  |
| SaveGameAnalyzer | ListSaves |  | void |  |
| SaveGameAnalyzer | LoadSelected |  | void |  |
| SaveGameAnalyzer | Self |  | SaveGameAnalyzer |  |
| SaveGameBlockData | AccessSelf |  | SaveGameBlockData | Category: const |
| SaveGameBlockData | GetCharCount |  | int32 | Category: nonconst |
| SaveGameBlockData | GetInstanceCount |  | int32 | Category: nonconst |
| SaveGameBlockData | GetOtherPaths |  | CString | Category: nonconst |
| SaveGameBlockData | GetOtherPathsCount |  | int32 | Category: nonconst |
| SaveGameBlockData | GetParentPercentage |  | float | Category: nonconst |
| SaveGameBlockData | GetPath |  | CString | Category: nonconst |
| SaveGameBlockData | GetPercentage |  | float | Category: nonconst |
| SaveGameBlockData | GetTitle |  | CString | Category: nonconst |
| SaveGameBlockData | GetTokenName |  | CString | Category: nonconst |
| SaveGameBlockData | GetWhitespaceCount |  | int32 | Category: nonconst |
| SaveGameBlockData | GetWhitespaceRatio |  | float | Category: nonconst |
| SaveGameBlockData | Self |  | SaveGameBlockData |  |
| SaveGameConfigView | AccessSelf |  | SaveGameConfigView | Category: const |
| SaveGameConfigView | GetTokenName |  | CString | Category: nonconst |
| SaveGameConfigView | IsActive |  | bool |  |
| SaveGameConfigView | IsDirty |  | bool |  |
| SaveGameConfigView | Save |  | void |  |
| SaveGameConfigView | Self |  | SaveGameConfigView |  |
| SaveGameItem | AccessSelf |  | SaveGameItem | Category: const |
| SaveGameItem | CanGetAchievements |  | bool |  |
| SaveGameItem | CanLoad |  | bool |  |
| SaveGameItem | CanLoadDesc |  | CString |  |
| SaveGameItem | GetAchievementBlockingGameRulesInfo |  | CString | Category: nonconst |
| SaveGameItem | GetCountryFlag |  | CoatOfArms | Category: nonconst |
| SaveGameItem | GetCountryName |  | CString | Category: nonconst |
| SaveGameItem | GetCountryRank |  | CString | Category: nonconst |
| SaveGameItem | GetDate |  | Date | Category: nonconst |
| SaveGameItem | GetIncompatibilityTooltip |  | CString | Category: nonconst |
| SaveGameItem | GetLastPlayed |  | CString | Category: nonconst |
| SaveGameItem | GetMissingDLCInfo |  | CString | Category: nonconst |
| SaveGameItem | GetMissingMods |  | CString | Category: nonconst |
| SaveGameItem | GetModifiedDate |  | CString | Category: nonconst |
| SaveGameItem | GetName |  | CString | Category: nonconst |
| SaveGameItem | GetNumberOfPlayers |  | int32 | Category: nonconst |
| SaveGameItem | GetVersionName |  | CString | Category: nonconst |
| SaveGameItem | HasAchievementBlockingGameRules |  | bool |  |
| SaveGameItem | HasMissingDLCs |  | bool |  |
| SaveGameItem | HasMissingMods |  | bool |  |
| SaveGameItem | IsCloudSave |  | bool |  |
| SaveGameItem | IsDifferentVersion |  | bool |  |
| SaveGameItem | IsIronmanSave |  | bool |  |
| SaveGameItem | IsMultiplayer |  | bool |  |
| SaveGameItem | IsSelected |  | bool |  |
| SaveGameItem | IsValid |  | bool |  |
| SaveGameItem | OnLoad |  | void |  |
| SaveGameItem | Select |  | void |  |
| SaveGameItem | SelectAndLoad |  | void |  |
| SaveGameItem | Self |  | SaveGameItem |  |
| SaveGameListView | AccessSaves |  | Unknown | Category: const |
| SaveGameListView | AccessSelf |  | SaveGameListView | Category: const |
| SaveGameListView | HasSelection |  | bool |  |
| SaveGameListView | IsActive |  | bool |  |
| SaveGameListView | IsReading |  | bool |  |
| SaveGameListView | IsSelected | 1. SaveGame | bool |  |
| SaveGameListView | Self |  | SaveGameListView |  |
| SaveGameListView | SetSelected | 1. SaveGame | void |  |
| SaveGameListView | Sort | 1. CString | void |  |
| SaveGameWindow | AccessCloudData |  | CloudSaveData | Category: const |
| SaveGameWindow | AccessSelf |  | SaveGameWindow | Category: const |
| SaveGameWindow | Cancel |  | void |  |
| SaveGameWindow | GetDefaultSaveName |  | CUTF8String | Category: nonconst |
| SaveGameWindow | GetSaveGames |  | Unknown | Category: nonconst |
| SaveGameWindow | IsIronman |  | bool |  |
| SaveGameWindow | IsOverwrite |  | bool |  |
| SaveGameWindow | IsSaveNameOk |  | bool |  |
| SaveGameWindow | IsSaving |  | bool |  |
| SaveGameWindow | IsShowInvalid |  | bool |  |
| SaveGameWindow | Save |  | void |  |
| SaveGameWindow | Self |  | SaveGameWindow |  |
| SaveGameWindow | ToggleShowInvalid |  | void |  |
| SaveGameWindow | UpdateSaveName |  | void |  |
| Scope | AccessSelf |  | Scope | Category: const |
| Scope | GetFlagName |  | CString | Category: nonconst |
| Scope | GetList | 1. Unknown | Unknown | Category: nonconst |
| Scope | GetScriptValueDesc | 1. ScriptValue | CString | Category: nonconst |
| Scope | GetValue |  | CFixedPoint | Category: nonconst |
| Scope | GetValueWithDefault | 1. Unknown | CFixedPoint | Category: nonconst |
| Scope | IsSet |  | bool |  |
| Scope | ScriptValue | 1. ScriptValue | CFixedPoint |  |
| Scope | Self |  | Scope |  |
| Scope | VarRemaining | 1. Unknown | int32 |  |
| ScopeDebugData | AccessSelf |  | ScopeDebugData | Category: const |
| ScopeDebugData | GetDebugInformation |  | CString | Category: nonconst |
| ScopeDebugData | GetRawID |  | CString | Category: nonconst |
| ScopeDebugData | GetTypeData |  | CString | Category: nonconst |
| ScopeDebugData | GetTypeID |  | CString | Category: nonconst |
| ScopeDebugData | GetTypeName |  | CString | Category: nonconst |
| ScopeDebugData | IsValid |  | bool |  |
| ScopeDebugData | Self |  | ScopeDebugData |  |
| ScopeDebugData | SupportsVariables |  | bool |  |
| ScopeDebugInspectorPlugin | AccessSelf |  | ScopeDebugInspectorPlugin | Category: const |
| ScopeDebugInspectorPlugin | Self |  | ScopeDebugInspectorPlugin |  |
| ScopeObjectEditor | AccessSelf |  | ScopeObjectEditor | Category: const |
| ScopeObjectEditor | AsBool |  | bool |  |
| ScopeObjectEditor | AsString |  | CString |  |
| ScopeObjectEditor | GetID |  | uint64 | Category: nonconst |
| ScopeObjectEditor | GetSelecte |  | CVector2i | Category: nonconst |
| ScopeObjectEditor | GetTypeData |  | CString | Category: nonconst |
| ScopeObjectEditor | GetValue |  | CString | Category: nonconst |
| ScopeObjectEditor | GetVariableTypes |  | Unknown | Category: nonconst |
| ScopeObjectEditor | IsBool |  | bool |  |
| ScopeObjectEditor | IsFlag |  | bool |  |
| ScopeObjectEditor | IsNumber |  | bool |  |
| ScopeObjectEditor | IsReference |  | bool |  |
| ScopeObjectEditor | Self |  | ScopeObjectEditor |  |
| ScopeObjectEditor | SetFromString |  | void |  |
| ScopeObjectEditor | SetIDFromString |  | void |  |
| ScopeObjectEditor | SetSelecte |  | void |  |
| ScopeObjectEditor | SetTypeDataFromString |  | void |  |
| ScopeObjectEditor | ToggleBool |  | void |  |
| ScopeObjectProvider | AccessSelf |  | ScopeObjectProvider | Category: const |
| ScopeObjectProvider | GetError |  | CString | Category: nonconst |
| ScopeObjectProvider | GetFilteredResultCount |  | int32 | Category: nonconst |
| ScopeObjectProvider | GetTotalResultCount |  | int32 | Category: nonconst |
| ScopeObjectProvider | GetTriggerString |  | CString | Category: nonconst |
| ScopeObjectProvider | HasError |  | bool |  |
| ScopeObjectProvider | Self |  | ScopeObjectProvider |  |
| ScopeObjectProvider | SetTriggerString |  | void |  |
| ScopeObjectProvider | UpdateFilter |  | void |  |
| ScopeObjectType | AccessSelf |  | ScopeObjectType | Category: const |
| ScopeObjectType | GetName |  | CString | Category: nonconst |
| ScopeObjectType | Self |  | ScopeObjectType |  |
| ScopedEditorSettingsCategory | AccessSelf |  | ScopedEditorSettingsCategory | Category: const |
| ScopedEditorSettingsCategory | Self |  | ScopedEditorSettingsCategory |  |
| ScriptProfilerEntry | AccessSelf |  | ScriptProfilerEntry | Category: const |
| ScriptProfilerEntry | GetAverageTimeExclusive |  | double | Category: nonconst |
| ScriptProfilerEntry | GetAverageTimeInclusive |  | double | Category: nonconst |
| ScriptProfilerEntry | GetBottleneckTime |  | double | Category: nonconst |
| ScriptProfilerEntry | GetCallCount |  | uint64 | Category: nonconst |
| ScriptProfilerEntry | GetFile |  | Unknown | Category: nonconst |
| ScriptProfilerEntry | GetFileAndLine |  | CString | Category: nonconst |
| ScriptProfilerEntry | GetFileName |  | Unknown | Category: nonconst |
| ScriptProfilerEntry | GetFileNameAndLine |  | CString | Category: nonconst |
| ScriptProfilerEntry | GetFormattedBottleneckTiming |  | CString | Category: nonconst |
| ScriptProfilerEntry | GetFormattedTiming |  | CString | Category: nonconst |
| ScriptProfilerEntry | GetLine |  | int32 | Category: nonconst |
| ScriptProfilerEntry | GetMaxTimeInclusive |  | double | Category: nonconst |
| ScriptProfilerEntry | GetMinTimeInclusive |  | double | Category: nonconst |
| ScriptProfilerEntry | GetPerFrameTimeExclusive |  | double | Category: nonconst |
| ScriptProfilerEntry | GetPerFrameTimeInclusive |  | double | Category: nonconst |
| ScriptProfilerEntry | GetPerTickTimeExclusive |  | double | Category: nonconst |
| ScriptProfilerEntry | GetPerTickTimeInclusive |  | double | Category: nonconst |
| ScriptProfilerEntry | GetShortDescription |  | CString | Category: nonconst |
| ScriptProfilerEntry | GetTiming |  | double | Category: nonconst |
| ScriptProfilerEntry | GetTotalTimeExclusive |  | double | Category: nonconst |
| ScriptProfilerEntry | GetTotalTimeInclusive |  | double | Category: nonconst |
| ScriptProfilerEntry | GetType |  | CString | Category: nonconst |
| ScriptProfilerEntry | GetVariant |  | CString | Category: nonconst |
| ScriptProfilerEntry | HasFileLocation |  | bool |  |
| ScriptProfilerEntry | HasSamples |  | bool |  |
| ScriptProfilerEntry | OpenInCodeEditor |  | void |  |
| ScriptProfilerEntry | OpenInScriptEditor |  | void |  |
| ScriptProfilerEntry | Select |  | void |  |
| ScriptProfilerEntry | SelectFile |  | void |  |
| ScriptProfilerEntry | Self |  | ScriptProfilerEntry |  |
| ScriptProfilerFileLine | AccessSelf |  | ScriptProfilerFileLine | Category: const |
| ScriptProfilerFileLine | GetAverageTimeExclusive |  | double | Category: nonconst |
| ScriptProfilerFileLine | GetAverageTimeInclusive |  | double | Category: nonconst |
| ScriptProfilerFileLine | GetBottleneckTime |  | double | Category: nonconst |
| ScriptProfilerFileLine | GetCallCount |  | uint64 | Category: nonconst |
| ScriptProfilerFileLine | GetFormattedBottleneckTiming |  | CString | Category: nonconst |
| ScriptProfilerFileLine | GetFormattedTiming |  | CString | Category: nonconst |
| ScriptProfilerFileLine | GetLine |  | int32 | Category: nonconst |
| ScriptProfilerFileLine | GetMaxTimeInclusive |  | double | Category: nonconst |
| ScriptProfilerFileLine | GetMinTimeInclusive |  | double | Category: nonconst |
| ScriptProfilerFileLine | GetPerFrameTimeExclusive |  | double | Category: nonconst |
| ScriptProfilerFileLine | GetPerFrameTimeInclusive |  | double | Category: nonconst |
| ScriptProfilerFileLine | GetPerTickTimeExclusive |  | double | Category: nonconst |
| ScriptProfilerFileLine | GetPerTickTimeInclusive |  | double | Category: nonconst |
| ScriptProfilerFileLine | GetText |  | Unknown | Category: nonconst |
| ScriptProfilerFileLine | GetTiming |  | double | Category: nonconst |
| ScriptProfilerFileLine | GetTooltip |  | CString | Category: nonconst |
| ScriptProfilerFileLine | GetTotalTimeExclusive |  | double | Category: nonconst |
| ScriptProfilerFileLine | GetTotalTimeInclusive |  | double | Category: nonconst |
| ScriptProfilerFileLine | HasSamples |  | bool |  |
| ScriptProfilerFileLine | OpenInCodeEditor |  | void |  |
| ScriptProfilerFileLine | OpenInScriptEditor |  | void |  |
| ScriptProfilerFileLine | Select |  | void |  |
| ScriptProfilerFileLine | Self |  | ScriptProfilerFileLine |  |
| ScriptProfilerGui | AccessSelf |  | ScriptProfilerGui | Category: const |
| ScriptProfilerGui | GetCaptureTime |  | double | Category: nonconst |
| ScriptProfilerGui | GetCapturedFrames |  | uint64 | Category: nonconst |
| ScriptProfilerGui | GetCapturedSamples |  | int32 | Category: nonconst |
| ScriptProfilerGui | GetCapturedTicks |  | uint64 | Category: nonconst |
| ScriptProfilerGui | GetCurrentEntry |  | ScriptProfilerEntry | Category: nonconst |
| ScriptProfilerGui | GetCurrentEntryChildren |  | Unknown | Category: nonconst |
| ScriptProfilerGui | GetCurrentEntryParents |  | Unknown | Category: nonconst |
| ScriptProfilerGui | GetFileLines |  | Unknown | Category: nonconst |
| ScriptProfilerGui | GetFileSearchList |  | ToolPropertySearchList | Category: nonconst |
| ScriptProfilerGui | GetModeSearchList |  | ToolPropertySearchList | Category: nonconst |
| ScriptProfilerGui | GetNextFile |  | Unknown | Category: nonconst |
| ScriptProfilerGui | GetPreviousFile |  | Unknown | Category: nonconst |
| ScriptProfilerGui | HasNextFile |  | bool |  |
| ScriptProfilerGui | HasPreviousFile |  | bool |  |
| ScriptProfilerGui | IsCapturing |  | bool |  |
| ScriptProfilerGui | OpenFileInCodeEditor |  | void |  |
| ScriptProfilerGui | OpenFileInScriptEditor |  | void |  |
| ScriptProfilerGui | OpenNextFile |  | void |  |
| ScriptProfilerGui | OpenPreviousFile |  | void |  |
| ScriptProfilerGui | ResetCaptureData |  | void |  |
| ScriptProfilerGui | RestartCapture |  | void |  |
| ScriptProfilerGui | SelectEdge |  | void |  |
| ScriptProfilerGui | SelectRoot |  | void |  |
| ScriptProfilerGui | Self |  | ScriptProfilerGui |  |
| ScriptProfilerGui | StartCapture |  | void |  |
| ScriptProfilerGui | StopCapture |  | void |  |
| ScriptRunnerInspector | AccessSelf |  | ScriptRunnerInspector | Category: const |
| ScriptRunnerInspector | GetEffect |  | CString | Category: nonconst |
| ScriptRunnerInspector | GetTrigger |  | CString | Category: nonconst |
| ScriptRunnerInspector | ParseEffect |  | void |  |
| ScriptRunnerInspector | RunEffect |  | void |  |
| ScriptRunnerInspector | RunTrigger |  | void |  |
| ScriptRunnerInspector | Self |  | ScriptRunnerInspector |  |
| ScriptRunnerInspector | SetEffect |  | void |  |
| ScriptRunnerInspector | SetTrigger |  | void |  |
| ScriptRunnerInspector | ShouldModifyEventTargets |  | bool |  |
| ScriptRunnerInspector | ToggleModifyEventTargets |  | void |  |
| ScriptRunnerResult | AccessSelf |  | ScriptRunnerResult | Category: const |
| ScriptRunnerResult | GetResult |  | CString | Category: nonconst |
| ScriptRunnerResult | GetTooltip |  | CString | Category: nonconst |
| ScriptRunnerResult | HasResult |  | bool |  |
| ScriptRunnerResult | IsMissingTooltip |  | bool |  |
| ScriptRunnerResult | IsOutputVisible |  | bool |  |
| ScriptRunnerResult | IsValid |  | bool |  |
| ScriptRunnerResult | Self |  | ScriptRunnerResult |  |
| ScriptRunnerResult | ToggleOutputVisible |  | void |  |
| ScriptedButton | AccessSelf |  | ScriptedButton | Category: const |
| ScriptedButton | ExecuteEffect |  | Command |  |
| ScriptedButton | GetCooldownDesc |  | CString | Category: nonconst |
| ScriptedButton | GetCooldownDuration |  | CString | Category: nonconst |
| ScriptedButton | GetCooldownRemaining |  | CString | Category: nonconst |
| ScriptedButton | GetDesc |  | CString | Category: nonconst |
| ScriptedButton | GetEffectDesc |  | CString | Category: nonconst |
| ScriptedButton | GetName |  | CString | Category: nonconst |
| ScriptedButton | GetPossibleDesc |  | CString | Category: nonconst |
| ScriptedButton | GetTooltipTag |  | CString | Category: nonconst |
| ScriptedButton | HasCooldown |  | bool |  |
| ScriptedButton | IsOnCooldown |  | bool |  |
| ScriptedButton | IsPossible |  | bool |  |
| ScriptedButton | IsSelected |  | bool |  |
| ScriptedButton | IsVisible |  | bool |  |
| ScriptedButton | Self |  | ScriptedButton |  |
| ScriptedGui | AccessSelf |  | ScriptedGui | Category: const |
| ScriptedGui | BuildTooltip | 1. Unknown | CString |  |
| ScriptedGui | Execute | 1. TopScope | void |  |
| ScriptedGui | ExecuteTooltip | 1. TopScope | CString |  |
| ScriptedGui | IsShown | 1. Unknown | bool |  |
| ScriptedGui | IsShownTooltip | 1. Unknown | CString |  |
| ScriptedGui | IsValid | 1. Unknown | bool |  |
| ScriptedGui | IsValidTooltip | 1. Unknown | CString |  |
| ScriptedGui | Self |  | ScriptedGui |  |
| ScriptedProgressBar | AccessSelf |  | ScriptedProgressBar | Category: const |
| ScriptedProgressBar | GetDesc |  | CString | Category: nonconst |
| ScriptedProgressBar | GetMaxValue |  | CFixedPoint | Category: nonconst |
| ScriptedProgressBar | GetMinValue |  | CFixedPoint | Category: nonconst |
| ScriptedProgressBar | GetName |  | CString | Category: nonconst |
| ScriptedProgressBar | GetPeriodicProgressBreakdown |  | CString | Category: nonconst |
| ScriptedProgressBar | GetSecondDesc |  | CString | Category: nonconst |
| ScriptedProgressBar | GetStartValue |  | CFixedPoint | Category: nonconst |
| ScriptedProgressBar | GetTooltipTag |  | CString | Category: nonconst |
| ScriptedProgressBar | IsDefault |  | bool |  |
| ScriptedProgressBar | IsDefaultBad |  | bool |  |
| ScriptedProgressBar | IsDefaultGreen |  | bool |  |
| ScriptedProgressBar | IsDoubleSidedBad |  | bool |  |
| ScriptedProgressBar | IsDoubleSidedGold |  | bool |  |
| ScriptedProgressBar | IsDoubleSidedSpain |  | bool |  |
| ScriptedProgressBar | Self |  | ScriptedProgressBar |  |
| SeaNodeMarker | AccessSelf |  | SeaNodeMarker | Category: const |
| SeaNodeMarker | GetInteractionColor |  | CVector4f | Category: nonconst |
| SeaNodeMarker | GetInteractionTooltip |  | CString | Category: nonconst |
| SeaNodeMarker | GetSupplyNetworkTooltip |  | CString | Category: nonconst |
| SeaNodeMarker | HasActiveSupplyNetwork |  | bool |  |
| SeaNodeMarker | HasAnyShippingLaneDamaged | 1. Country | bool |  |
| SeaNodeMarker | IsActiveInteractionNode |  | bool |  |
| SeaNodeMarker | IsSeaNodeHighlighted |  | bool |  |
| SeaNodeMarker | IsSelected |  | bool |  |
| SeaNodeMarker | IsValidInteractionNode |  | bool |  |
| SeaNodeMarker | SelectClick |  | void |  |
| SeaNodeMarker | SelectInteractionClick |  | void |  |
| SeaNodeMarker | Self |  | SeaNodeMarker |  |
| SeaNodeMarker | ShouldShowInteraction |  | bool |  |
| SeaNodeMovementMarker | AccessSelf |  | SeaNodeMovementMarker | Category: const |
| SeaNodeMovementMarker | CanDeploySelectedFormationsToSeaNode |  | bool |  |
| SeaNodeMovementMarker | GetActiveSupplyNetworkDesc |  | CString | Category: nonconst |
| SeaNodeMovementMarker | GetConvoyRaidingDesc |  | CString | Category: nonconst |
| SeaNodeMovementMarker | GetConvoyRaidingEnemyFleetsDesc |  | CString | Category: nonconst |
| SeaNodeMovementMarker | GetInvasionDesc |  | CString | Category: nonconst |
| SeaNodeMovementMarker | GetInvasionStatus |  | CString | Category: nonconst |
| SeaNodeMovementMarker | GetPosition |  | CVector2f | Category: nonconst |
| SeaNodeMovementMarker | GetPresentFormationsBreakdown |  | CString | Category: nonconst |
| SeaNodeMovementMarker | GetSeaNode |  | Province | Category: nonconst |
| SeaNodeMovementMarker | GetTravelTimeBreakdown |  | CString | Category: nonconst |
| SeaNodeMovementMarker | HasActiveSupplyNetwork |  | bool |  |
| SeaNodeMovementMarker | IsAllSelectedFormationsLocation |  | bool |  |
| SeaNodeMovementMarker | IsAllSelectedFormationsTarget |  | bool |  |
| SeaNodeMovementMarker | IsAnySelectedFormationsLocation |  | bool |  |
| SeaNodeMovementMarker | IsAnySelectedFormationsTarget |  | bool |  |
| SeaNodeMovementMarker | IsBeingConvoyRaidedByEnemies |  | bool |  |
| SeaNodeMovementMarker | IsBeingNavallyInvadedByEnemies |  | bool |  |
| SeaNodeMovementMarker | Self |  | SeaNodeMovementMarker |  |
| SeaRegionInfraMarker | AccessSelf |  | SeaRegionInfraMarker | Category: const |
| SeaRegionInfraMarker | GetPosition |  | CVector2f | Category: nonconst |
| SeaRegionInfraMarker | GetStateRegion |  | StateRegion | Category: nonconst |
| SeaRegionInfraMarker | GetTooltip |  | CString | Category: nonconst |
| SeaRegionInfraMarker | Self |  | SeaRegionInfraMarker |  |
| SeaRegionPanel | AccessActiveBattles |  | Unknown | Category: const |
| SeaRegionPanel | AccessCountriesWithShippingLanes |  | Unknown | Category: const |
| SeaRegionPanel | AccessEndedBattles |  | Unknown | Category: const |
| SeaRegionPanel | AccessProvince |  | Province | Category: const |
| SeaRegionPanel | AccessSelf |  | SeaRegionPanel | Category: const |
| SeaRegionPanel | AccessShippingLanes |  | Unknown | Category: const |
| SeaRegionPanel | GetExporters | 1. Goods | Unknown | Category: nonconst |
| SeaRegionPanel | GetImporters | 1. Goods | Unknown | Category: nonconst |
| SeaRegionPanel | GetNumTradedInWorldMarket | 1. Goods | CFixedPoint | Category: nonconst |
| SeaRegionPanel | GetPlayerSeaRegionWars |  | Unknown | Category: nonconst |
| SeaRegionPanel | GetPresentNeutralFleets |  | Unknown | Category: nonconst |
| SeaRegionPanel | GetProvince |  | Province | Category: nonconst |
| SeaRegionPanel | GetWorldMarketTradeBreakdown | 1. Goods | CString | Category: nonconst |
| SeaRegionPanel | GetWorldMarketTradedGoods |  | Unknown | Category: nonconst |
| SeaRegionPanel | Self |  | SeaRegionPanel |  |
| SeaRegionPanel | Sort | 1. CString | void |  |
| SeaRegionWar | AccessSelf |  | SeaRegionWar | Category: const |
| SeaRegionWar | GetAlliedCountriesWithShippingLanes |  | Unknown | Category: nonconst |
| SeaRegionWar | GetAlliedFleets |  | Unknown | Category: nonconst |
| SeaRegionWar | GetEnemyCountriesWithShippingLanes |  | Unknown | Category: nonconst |
| SeaRegionWar | GetEnemyFleets |  | Unknown | Category: nonconst |
| SeaRegionWar | GetInvasions |  | Unknown | Category: nonconst |
| SeaRegionWar | GetWar |  | War | Category: nonconst |
| SeaRegionWar | Self |  | SeaRegionWar |  |
| SearchListNodeWindow | AccessSelf |  | SearchListNodeWindow | Category: const |
| SearchListNodeWindow | CanEditEntry |  | bool |  |
| SearchListNodeWindow | GetEntryTooltip |  | CString | Category: nonconst |
| SearchListNodeWindow | IsEntryEditingSupported |  | bool |  |
| SearchListNodeWindow | OnEntryEditClick |  | void |  |
| SearchListNodeWindow | Self |  | SearchListNodeWindow |  |
| SelectFromInputNodeWindow | AccessSelf |  | SelectFromInputNodeWindow | Category: const |
| SelectFromInputNodeWindow | AddPin |  | void |  |
| SelectFromInputNodeWindow | GetNumberOfPins |  | int32 | Category: nonconst |
| SelectFromInputNodeWindow | RemovePin |  | void |  |
| SelectFromInputNodeWindow | Self |  | SelectFromInputNodeWindow |  |
| SelectFromInputNodeWindow | SetNumberOfPins |  | void |  |
| SelectParticleUserDataDialog | AccessSelf |  | SelectParticleUserDataDialog | Category: const |
| SelectParticleUserDataDialog | DataModel |  | Unknown |  |
| SelectParticleUserDataDialog | Self |  | SelectParticleUserDataDialog |  |
| SelectTool | AccessSelf |  | SelectTool | Category: const |
| SelectTool | IsHideSelection |  | bool |  |
| SelectTool | Self |  | SelectTool |  |
| SelectTool | SetHideSelection | 1. bool | void |  |
| ServerInformation | AccessSelf |  | ServerInformation | Category: const |
| ServerInformation | GetMPMode |  | CString | Category: nonconst |
| ServerInformation | GetServerID |  | CUTF8String | Category: nonconst |
| ServerInformation | GetServerName |  | CUTF8String | Category: nonconst |
| ServerInformation | HasServerID |  | bool |  |
| ServerInformation | HasServerName |  | bool |  |
| ServerInformation | IsInvite |  | bool |  |
| ServerInformation | IsPublic |  | bool |  |
| ServerInformation | IsSingleplayer |  | bool |  |
| ServerInformation | Self |  | ServerInformation |  |
| SettingCategory | AccessSelf |  | SettingCategory | Category: const |
| SettingCategory | AccessSettingsOrder |  | Unknown | Category: const |
| SettingCategory | GetName |  | CUTF8String | Category: nonconst |
| SettingCategory | GetSettingsOrder |  | Unknown | Category: nonconst |
| SettingCategory | HasSettingsWidgets |  | bool |  |
| SettingCategory | Self |  | SettingCategory |  |
| SettingsPage | AccessCategories |  | Unknown | Category: const |
| SettingsPage | AccessSelf |  | SettingsPage | Category: const |
| SettingsPage | GetName |  | CUTF8String | Category: nonconst |
| SettingsPage | IsSelected |  | bool |  |
| SettingsPage | OnClick |  | void |  |
| SettingsPage | Self |  | SettingsPage |  |
| ShippingLane | AccessSelf |  | ShippingLane | Category: const |
| ShippingLane | GetBeginState |  | State | Category: nonconst |
| ShippingLane | GetConvoyCostFormatted |  | CString | Category: nonconst |
| ShippingLane | GetConvoyCostFormattedShort |  | CString | Category: nonconst |
| ShippingLane | GetConvoyCostRaw |  | int32 | Category: nonconst |
| ShippingLane | GetCountry |  | Country | Category: nonconst |
| ShippingLane | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| ShippingLane | GetDesc |  | CString | Category: nonconst |
| ShippingLane | GetEffectivenessFormatted |  | CString | Category: nonconst |
| ShippingLane | GetEffectivenessRaw |  | CFixedPoint | Category: nonconst |
| ShippingLane | GetEndState |  | State | Category: nonconst |
| ShippingLane | GetName |  | CString | Category: nonconst |
| ShippingLane | GetTooltipTag |  | CString | Category: nonconst |
| ShippingLane | IsGoodsTransfer |  | bool |  |
| ShippingLane | IsPortConnection |  | bool |  |
| ShippingLane | IsSupplyRoute |  | bool |  |
| ShippingLane | MakeScope |  | Scope |  |
| ShippingLane | Self |  | ShippingLane |  |
| SkinEditor | AccessSelf |  | SkinEditor | Category: const |
| SkinEditor | Self |  | SkinEditor |  |
| SmartBrushHeightRange | AccessPattern |  | SmartBrushPattern | Category: const |
| SmartBrushHeightRange | AccessSelf |  | SmartBrushHeightRange | Category: const |
| SmartBrushHeightRange | GetName |  | CUTF8String | Category: nonconst |
| SmartBrushHeightRange | GetOpacityMaskTexturePath |  | CString | Category: nonconst |
| SmartBrushHeightRange | IsVisible |  | bool |  |
| SmartBrushHeightRange | Self |  | SmartBrushHeightRange |  |
| SmartBrushPattern | AccessMaterialMix |  | MaterialMix | Category: const |
| SmartBrushPattern | AccessSelf |  | SmartBrushPattern | Category: const |
| SmartBrushPattern | GetAngleL |  | float | Category: nonconst |
| SmartBrushPattern | GetAngleR |  | float | Category: nonconst |
| SmartBrushPattern | GetBleeding |  | uint32 | Category: nonconst |
| SmartBrushPattern | GetDensity |  | int32 | Category: nonconst |
| SmartBrushPattern | GetInterpolationIndex |  | CVector2i | Category: nonconst |
| SmartBrushPattern | GetModeIndex |  | int32 | Category: nonconst |
| SmartBrushPattern | GetPatternIndex |  | CVector2i | Category: nonconst |
| SmartBrushPattern | GetSharpness |  | uint32 | Category: nonconst |
| SmartBrushPattern | Self |  | SmartBrushPattern |  |
| SmartBrushPresetManager | AccessPresets |  | Unknown | Category: const |
| SmartBrushPresetManager | AccessSelf |  | SmartBrushPresetManager | Category: const |
| SmartBrushPresetManager | GetPresets |  | Unknown | Category: nonconst |
| SmartBrushPresetManager | Self |  | SmartBrushPresetManager |  |
| SmartMaterialPaintingMode | AccessCurrentPreset |  | Unknown | Category: const |
| SmartMaterialPaintingMode | AccessCurrentPresetRanges |  | Unknown | Category: const |
| SmartMaterialPaintingMode | AccessOpacityMaskTexturePreview | 1. SmartBrushHeightRange | Unknown | Category: const |
| SmartMaterialPaintingMode | AccessPatternCurveTexture | 1. SmartBrushPattern | Unknown | Category: const |
| SmartMaterialPaintingMode | AccessPatternTypeTexture | 1. SmartBrushPattern | Unknown | Category: const |
| SmartMaterialPaintingMode | AccessSelf |  | SmartMaterialPaintingMode | Category: const |
| SmartMaterialPaintingMode | AddAngle | 1. SmartBrushPattern 2. bool 3. float | void |  |
| SmartMaterialPaintingMode | AddBleeding | 1. SmartBrushPattern 2. int32 | void |  |
| SmartMaterialPaintingMode | AddDensity | 1. SmartBrushPattern 2. int32 | void |  |
| SmartMaterialPaintingMode | AddOpacityMaskOffset | 1. bool 2. SmartBrushHeightRange 3. float | void |  |
| SmartMaterialPaintingMode | AddOpacityMaskRotation | 1. SmartBrushHeightRange 2. float | void |  |
| SmartMaterialPaintingMode | AddOpacityMaskScale | 1. bool 2. SmartBrushHeightRange 3. float | void |  |
| SmartMaterialPaintingMode | AddSharpness | 1. SmartBrushPattern 2. int32 | void |  |
| SmartMaterialPaintingMode | ApplyChanges |  | void |  |
| SmartMaterialPaintingMode | CanApplyChanges |  | bool |  |
| SmartMaterialPaintingMode | CanReorderRangeToNext | 1. SmartBrushHeightRange | bool |  |
| SmartMaterialPaintingMode | CanReorderRangeToPrev | 1. SmartBrushHeightRange | bool |  |
| SmartMaterialPaintingMode | ChangeSampleEntryComposition | 1. MaterialMix 2. MaterialMixEntry 3. SmartBrushHeightRange 4. Unknown | void |  |
| SmartMaterialPaintingMode | ClearOpacityMaskTexture | 1. SmartBrushHeightRange | void |  |
| SmartMaterialPaintingMode | ClonePreset |  | void |  |
| SmartMaterialPaintingMode | CopyCurveToClipboard | 1. ToolPropertyCurve | void |  |
| SmartMaterialPaintingMode | CreateNewPreset |  | void |  |
| SmartMaterialPaintingMode | CreateNewRange |  | void |  |
| SmartMaterialPaintingMode | DeletePreset |  | void |  |
| SmartMaterialPaintingMode | DeleteRange | 1. SmartBrushHeightRange | void |  |
| SmartMaterialPaintingMode | DiscardChanges |  | void |  |
| SmartMaterialPaintingMode | EndSampleCompositionEdit | 1. MaterialMix 2. SmartBrushHeightRange 3. Unknown | void |  |
| SmartMaterialPaintingMode | GetBackgroundProcessingDesc |  | CString | Category: nonconst |
| SmartMaterialPaintingMode | GetCurrentPreset |  | Unknown | Category: nonconst |
| SmartMaterialPaintingMode | GetCurveFromClipboard |  | Unknown | Category: nonconst |
| SmartMaterialPaintingMode | GetDebugDesc |  | CString | Category: nonconst |
| SmartMaterialPaintingMode | GetDebugUIHint |  | CString | Category: nonconst |
| SmartMaterialPaintingMode | GetOpacityMaskOffset | 1. bool 2. SmartBrushHeightRange | float | Category: nonconst |
| SmartMaterialPaintingMode | GetOpacityMaskRotation | 1. SmartBrushHeightRange | float | Category: nonconst |
| SmartMaterialPaintingMode | GetOpacityMaskScale | 1. bool 2. SmartBrushHeightRange | float | Category: nonconst |
| SmartMaterialPaintingMode | GetPaintingForbiddenDesc |  | CString | Category: nonconst |
| SmartMaterialPaintingMode | GetPresetIndex |  | CVector2i | Category: nonconst |
| SmartMaterialPaintingMode | GetRangeName | 1. Unknown | CUTF8String | Category: nonconst |
| SmartMaterialPaintingMode | GetTopologyPickerDesc |  | CString | Category: nonconst |
| SmartMaterialPaintingMode | HasAnyPresets |  | bool |  |
| SmartMaterialPaintingMode | HasDoneAnyChangesToPresets |  | bool |  |
| SmartMaterialPaintingMode | HasOpacityMaskTexture | 1. SmartBrushHeightRange | bool |  |
| SmartMaterialPaintingMode | IsAutosave |  | bool |  |
| SmartMaterialPaintingMode | IsBackgroundProcessing |  | bool |  |
| SmartMaterialPaintingMode | IsCurrentPresetValid |  | bool |  |
| SmartMaterialPaintingMode | IsCurveClipboardEmpty |  | bool |  |
| SmartMaterialPaintingMode | IsDebugActive |  | bool |  |
| SmartMaterialPaintingMode | IsDebugActiveFor | 1. SmartBrushHeightRange | bool |  |
| SmartMaterialPaintingMode | IsDebugTooltipVisible |  | bool |  |
| SmartMaterialPaintingMode | IsDebuggingSinglePoint |  | bool |  |
| SmartMaterialPaintingMode | IsEraserSelected |  | bool |  |
| SmartMaterialPaintingMode | IsEyeDropperSelected |  | bool |  |
| SmartMaterialPaintingMode | IsHeightRangeVisible | 1. SmartBrushHeightRange | bool |  |
| SmartMaterialPaintingMode | IsOpacityMaskTextureLoading | 1. SmartBrushHeightRange | bool |  |
| SmartMaterialPaintingMode | IsPainterSelected |  | bool |  |
| SmartMaterialPaintingMode | IsPaintingForbidden |  | bool |  |
| SmartMaterialPaintingMode | IsPaintingForbiddenTooltipActive |  | bool |  |
| SmartMaterialPaintingMode | IsSelected |  | bool |  |
| SmartMaterialPaintingMode | IsTopologyPickerEnabled |  | bool |  |
| SmartMaterialPaintingMode | IsTopologyPickerTooltipActive |  | bool |  |
| SmartMaterialPaintingMode | IsVisualDebuggingTooltipActive |  | bool |  |
| SmartMaterialPaintingMode | ReloadPresets |  | void |  |
| SmartMaterialPaintingMode | RemoveMaterialEntry | 1. MaterialMix 2. MaterialMixEntry | void |  |
| SmartMaterialPaintingMode | RenamePreset |  | void |  |
| SmartMaterialPaintingMode | ReorderRangeToNext | 1. SmartBrushHeightRange | void |  |
| SmartMaterialPaintingMode | ReorderRangeToPrev | 1. SmartBrushHeightRange | void |  |
| SmartMaterialPaintingMode | SavePresets |  | void |  |
| SmartMaterialPaintingMode | Self |  | SmartMaterialPaintingMode |  |
| SmartMaterialPaintingMode | SetAngleAsString | 1. bool 2. SmartBrushPattern | void |  |
| SmartMaterialPaintingMode | SetBleedingAsString | 1. SmartBrushPattern | void |  |
| SmartMaterialPaintingMode | SetDensityAsString | 1. SmartBrushPattern | void |  |
| SmartMaterialPaintingMode | SetEraserSelected |  | void |  |
| SmartMaterialPaintingMode | SetEyeDropperSelected |  | void |  |
| SmartMaterialPaintingMode | SetHeightRangeName | 1. SmartBrushHeightRange | void |  |
| SmartMaterialPaintingMode | SetInterpolationIndex | 1. SmartBrushPattern | void |  |
| SmartMaterialPaintingMode | SetOpacityMaskOffsetAsString | 1. bool 2. SmartBrushHeightRange | void |  |
| SmartMaterialPaintingMode | SetOpacityMaskRotationAsString | 1. SmartBrushHeightRange | void |  |
| SmartMaterialPaintingMode | SetOpacityMaskScaleAsString | 1. bool 2. SmartBrushHeightRange | void |  |
| SmartMaterialPaintingMode | SetPainterSelected |  | void |  |
| SmartMaterialPaintingMode | SetPatternIndex | 1. SmartBrushPattern 2. bool | void |  |
| SmartMaterialPaintingMode | SetPatternMode | 1. SmartBrushHeightRange 2. int32 | void |  |
| SmartMaterialPaintingMode | SetPresetIndex |  | void |  |
| SmartMaterialPaintingMode | SetSharpnessAsString | 1. SmartBrushPattern | void |  |
| SmartMaterialPaintingMode | ShowMaterialBrowserAndAddToCurrentPattern | 1. SmartBrushPattern | void |  |
| SmartMaterialPaintingMode | ShowMaterialBrowserAndSetEntryInCurrentPattern | 1. SmartBrushPattern 2. MaterialMixEntry | void |  |
| SmartMaterialPaintingMode | StartSampleCompositionEdit | 1. MaterialMix | void |  |
| SmartMaterialPaintingMode | ToggleAutosave |  | void |  |
| SmartMaterialPaintingMode | ToggleDebugActiveFor | 1. SmartBrushHeightRange | void |  |
| SmartMaterialPaintingMode | ToggleHeightRangeVisible | 1. SmartBrushHeightRange | void |  |
| SmartMaterialPaintingMode | ToggleMaterialLock | 1. Material | void |  |
| SmartMaterialPaintingMode | ToggleSampleEntryLock | 1. MaterialMix 2. MaterialMixEntry 3. SmartBrushHeightRange 4. Unknown | void |  |
| SmartMaterialPaintingMode | ToggleTopologyPicker |  | void |  |
| Social | AccessSelf |  | Social | Category: const |
| Social | GetTotalUnreadChatMessages |  | int32 | Category: nonconst |
| Social | Self |  | Social |  |
| SocialClass | AccessSelf |  | SocialClass | Category: const |
| SocialClass | GetAllowedProfessions |  | Unknown | Category: nonconst |
| SocialClass | GetAllowedStatusesIn | 1. Country | Unknown | Category: nonconst |
| SocialClass | GetDesc |  | CString | Category: nonconst |
| SocialClass | GetEffectsDescIn | 1. Country | CString | Category: nonconst |
| SocialClass | GetMaxAcceptanceIn | 1. Country | int32 | Category: nonconst |
| SocialClass | GetMaxAllowedStatusIn | 1. Country | AcceptanceStatus | Category: nonconst |
| SocialClass | GetMinAcceptanceIn | 1. Country | int32 | Category: nonconst |
| SocialClass | GetMinAllowedStatusIn | 1. Country | AcceptanceStatus | Category: nonconst |
| SocialClass | GetName |  | CString | Category: nonconst |
| SocialClass | GetNameNoFormatting |  | CString | Category: nonconst |
| SocialClass | GetPopTriggerDesc |  | CString | Category: nonconst |
| SocialClass | GetSocialHierarchy |  | SocialHierarchy | Category: nonconst |
| SocialClass | GetStrataConcept |  | CString | Category: nonconst |
| SocialClass | GetTooltipTag |  | CString | Category: nonconst |
| SocialClass | GetTotalPopulationIn | 1. Country | int64 | Category: nonconst |
| SocialClass | HasBoundedAcceptanceIn | 1. Country | bool |  |
| SocialClass | Self |  | SocialClass |  |
| SocialHierarchy | AccessSelf |  | SocialHierarchy | Category: const |
| SocialHierarchy | GetAllSocialClassesDesc |  | CString | Category: nonconst |
| SocialHierarchy | GetDesc |  | CString | Category: nonconst |
| SocialHierarchy | GetLowerStrataPopTypesDesc |  | CString | Category: nonconst |
| SocialHierarchy | GetLowerStrataSocialClasses |  | Unknown | Category: nonconst |
| SocialHierarchy | GetLowerStrataSocialClassesDesc |  | CString | Category: nonconst |
| SocialHierarchy | GetMaxSocialClassesInAnyStrata |  | int32 | Category: nonconst |
| SocialHierarchy | GetMiddleStrataPopTypesDesc |  | CString | Category: nonconst |
| SocialHierarchy | GetMiddleStrataSocialClasses |  | Unknown | Category: nonconst |
| SocialHierarchy | GetMiddleStrataSocialClassesDesc |  | CString | Category: nonconst |
| SocialHierarchy | GetName |  | CString | Category: nonconst |
| SocialHierarchy | GetNameNoFormatting |  | CString | Category: nonconst |
| SocialHierarchy | GetPopTriggerDesc |  | CString | Category: nonconst |
| SocialHierarchy | GetTooltipTag |  | CString | Category: nonconst |
| SocialHierarchy | GetTotalPopulationIn | 1. Country | int64 | Category: nonconst |
| SocialHierarchy | GetUpperStrataPopTypesDesc |  | CString | Category: nonconst |
| SocialHierarchy | GetUpperStrataSocialClasses |  | Unknown | Category: nonconst |
| SocialHierarchy | GetUpperStrataSocialClassesDesc |  | CString | Category: nonconst |
| SocialHierarchy | IsDefault |  | bool |  |
| SocialHierarchy | Self |  | SocialHierarchy |  |
| SocialNotificationWindow | AccessChatMessages |  | Unknown | Category: const |
| SocialNotificationWindow | AccessSelf |  | SocialNotificationWindow | Category: const |
| SocialNotificationWindow | GetNotificationsLayoutAnchor |  | Unknown | Category: nonconst |
| SocialNotificationWindow | Hide |  | void |  |
| SocialNotificationWindow | Self |  | SocialNotificationWindow |  |
| SocialNotificationWindow | ShouldBeShown |  | bool |  |
| SocialNotificationWindow | Show |  | void |  |
| SocialUI | AccessSelf |  | SocialUI | Category: const |
| SocialUI | Hide |  | void |  |
| SocialUI | IsAllowedToBeShown |  | bool |  |
| SocialUI | Self |  | SocialUI |  |
| SocialUI | Show |  | void |  |
| SocialUI | ToggleShow |  | void |  |
| SocialUI | WantsToBeShown |  | bool |  |
| SocialWidget | AccessSelf |  | SocialWidget | Category: const |
| SocialWidget | Self |  | SocialWidget |  |
| SocietyPanel | AccessRepresentativePops |  | Unknown | Category: const |
| SocietyPanel | AccessSelf |  | SocietyPanel | Category: const |
| SocietyPanel | GetPopList |  | PopList | Category: nonconst |
| SocietyPanel | GetSelectedAcceptanceStatus |  | AcceptanceStatus | Category: nonconst |
| SocietyPanel | GetSelectedAcceptanceStatusSegment |  | AcceptanceStatusSegment | Category: nonconst |
| SocietyPanel | IsAcceptanceStatusSelected | 1. Unknown | bool |  |
| SocietyPanel | SelectAcceptanceStatus | 1. Unknown | void |  |
| SocietyPanel | Self |  | SocietyPanel |  |
| SplineAdjustmentTool | AccessSelf |  | SplineAdjustmentTool | Category: const |
| SplineAdjustmentTool | AddAnchorsToAdjacentSelectedPairs |  | void |  |
| SplineAdjustmentTool | CanAddAnchorsInSelection |  | bool |  |
| SplineAdjustmentTool | CanDeleteSelection |  | bool |  |
| SplineAdjustmentTool | DeleteSelected |  | void |  |
| SplineAdjustmentTool | HasMapContent |  | bool |  |
| SplineAdjustmentTool | HasMergeNotes |  | bool |  |
| SplineAdjustmentTool | IsAnchorCreationSelected |  | bool |  |
| SplineAdjustmentTool | IsAnchorSelectionSelected |  | bool |  |
| SplineAdjustmentTool | IsMapContentSelectionSelected |  | bool |  |
| SplineAdjustmentTool | IsNavMeshVisible |  | bool |  |
| SplineAdjustmentTool | IsShowingAllMergeNotes |  | bool |  |
| SplineAdjustmentTool | IsShowingConflictsMergeNotes |  | bool |  |
| SplineAdjustmentTool | SelectAnchorCreation |  | void |  |
| SplineAdjustmentTool | SelectAnchorSelection |  | void |  |
| SplineAdjustmentTool | SelectMapContentSelection |  | void |  |
| SplineAdjustmentTool | Self |  | SplineAdjustmentTool |  |
| SplineAdjustmentTool | ToggleNavMeshVisibility |  | void |  |
| SplineAdjustmentTool | ToggleShowingAllMergeNotes |  | void |  |
| SplineAdjustmentTool | ToggleShowingConflictsMergeNotes |  | void |  |
| SplineAdjustmentToolMode | AccessSelf |  | SplineAdjustmentToolMode | Category: const |
| SplineAdjustmentToolMode | IsSelected |  | bool |  |
| SplineAdjustmentToolMode | Self |  | SplineAdjustmentToolMode |  |
| SplineRiverInteractionMode | AccessSelf |  | SplineRiverInteractionMode | Category: const |
| SplineRiverInteractionMode | IsSelected |  | bool |  |
| SplineRiverInteractionMode | Self |  | SplineRiverInteractionMode |  |
| SplineRiverTool | AccessSelf |  | SplineRiverTool | Category: const |
| SplineRiverTool | GetWidth |  | float | Category: nonconst |
| SplineRiverTool | ModifyWidth | 1. float | void |  |
| SplineRiverTool | Self |  | SplineRiverTool |  |
| SplineRiverTool | SetWidth |  | void |  |
| SplineRiverTool | SetWidthStr |  | void |  |
| SplineStripTool | AccessSelf |  | SplineStripTool | Category: const |
| SplineStripTool | CanDeleteSelection |  | bool |  |
| SplineStripTool | CheckAllStripsForErrors |  | void |  |
| SplineStripTool | DeleteSelected |  | void |  |
| SplineStripTool | FocusCameraOnSelection |  | void |  |
| SplineStripTool | FocusCameraOnStripError |  | void |  |
| SplineStripTool | GetStripErrorCount |  | int32 | Category: nonconst |
| SplineStripTool | HasMapContent |  | bool |  |
| SplineStripTool | HasMergeNotes |  | bool |  |
| SplineStripTool | HasSelectedStrips |  | bool |  |
| SplineStripTool | IsAnchorCreationSelected |  | bool |  |
| SplineStripTool | IsAnchorSelectionSelected |  | bool |  |
| SplineStripTool | IsMapContentSelectionSelected |  | bool |  |
| SplineStripTool | IsNavMeshVisible |  | bool |  |
| SplineStripTool | IsShowingAllMergeNotes |  | bool |  |
| SplineStripTool | IsShowingConflictsMergeNotes |  | bool |  |
| SplineStripTool | IsStripCreationSelected |  | bool |  |
| SplineStripTool | IsStripSelectionSelected |  | bool |  |
| SplineStripTool | SelectAnchorCreation |  | void |  |
| SplineStripTool | SelectAnchorSelection |  | void |  |
| SplineStripTool | SelectMapContentSelection |  | void |  |
| SplineStripTool | SelectStripCreation |  | void |  |
| SplineStripTool | SelectStripSelection |  | void |  |
| SplineStripTool | Self |  | SplineStripTool |  |
| SplineStripTool | ToggleNavMeshVisibility |  | void |  |
| SplineStripTool | ToggleShowingAllMergeNotes |  | void |  |
| SplineStripTool | ToggleShowingConflictsMergeNotes |  | void |  |
| SplineStripToolMode | AccessSelf |  | SplineStripToolMode | Category: const |
| SplineStripToolMode | IsSelected |  | bool |  |
| SplineStripToolMode | Self |  | SplineStripToolMode |  |
| SplineToolsMapContentPanel | AccessSelf |  | SplineToolsMapContentPanel | Category: const |
| SplineToolsMapContentPanel | AutoPlaceHubAnchors |  | void |  |
| SplineToolsMapContentPanel | HasMapContent |  | bool |  |
| SplineToolsMapContentPanel | Self |  | SplineToolsMapContentPanel |  |
| SplineTypeCreateSelectionDropdown | AccessSelf |  | SplineTypeCreateSelectionDropdown | Category: const |
| SplineTypeCreateSelectionDropdown | IsSplineTypeSelected | 1. uint8 | bool |  |
| SplineTypeCreateSelectionDropdown | SelectSplineType | 1. uint8 | void |  |
| SplineTypeCreateSelectionDropdown | Self |  | SplineTypeCreateSelectionDropdown |  |
| SplineTypeCreateSelectionDropdown | SplineTypes |  | Unknown |  |
| SplineTypeCreateSelectionDropdown | Toggle |  | void |  |
| SplineTypeItem | AccessSelf |  | SplineTypeItem | Category: const |
| SplineTypeItem | GetId |  | uint8 | Category: nonconst |
| SplineTypeItem | GetName |  | CString | Category: nonconst |
| SplineTypeItem | Self |  | SplineTypeItem |  |
| SplineTypeSwitchSelectionDropdown | AccessSelf |  | SplineTypeSwitchSelectionDropdown | Category: const |
| SplineTypeSwitchSelectionDropdown | ChangeSelectedStripsType | 1. uint8 | void |  |
| SplineTypeSwitchSelectionDropdown | IsSplineTypeSelected | 1. Unknown | bool |  |
| SplineTypeSwitchSelectionDropdown | Self |  | SplineTypeSwitchSelectionDropdown |  |
| SplineTypeSwitchSelectionDropdown | SplineTypes |  | Unknown |  |
| SplineTypeSwitchSelectionDropdown | Toggle |  | void |  |
| SplineVisibilityDropdown | AccessSelf |  | SplineVisibilityDropdown | Category: const |
| SplineVisibilityDropdown | IsVisibilityModeAll |  | bool |  |
| SplineVisibilityDropdown | IsVisibilityModeFirst |  | bool |  |
| SplineVisibilityDropdown | IsVisibilityModeLast |  | bool |  |
| SplineVisibilityDropdown | Self |  | SplineVisibilityDropdown |  |
| SplineVisibilityDropdown | SetVisibilityModeToAll |  | void |  |
| SplineVisibilityDropdown | SetVisibilityModeToFirst |  | void |  |
| SplineVisibilityDropdown | SetVisibilityModeToLast |  | void |  |
| SplineVisibilityDropdown | Toggle |  | void |  |
| StagedCommanderTransfer | AccessSelf |  | StagedCommanderTransfer | Category: const |
| StagedCommanderTransfer | GetCommander |  | Character | Category: nonconst |
| StagedCommanderTransfer | GetInvalidTransferDesc |  | CString | Category: nonconst |
| StagedCommanderTransfer | HasMoved |  | bool |  |
| StagedCommanderTransfer | Self |  | StagedCommanderTransfer |  |
| StagedFormation | AccessSelf |  | StagedFormation | Category: const |
| StagedFormation | GetCommandLimit |  | CString | Category: nonconst |
| StagedFormation | GetCommandLimitRaw |  | int32 | Category: nonconst |
| StagedFormation | GetCommandLimitRawIfTransferred |  | int32 | Category: nonconst |
| StagedFormation | GetCommanders |  | Unknown | Category: nonconst |
| StagedFormation | GetFormationResultBreakdown |  | CString | Category: nonconst |
| StagedFormation | GetHQs |  | Unknown | Category: nonconst |
| StagedFormation | GetIDString |  | CString | Category: nonconst |
| StagedFormation | GetIDStringForUnitType | 1. StagedUnitsWithType | CString | Category: nonconst |
| StagedFormation | GetMilitaryFormation |  | MilitaryFormation | Category: nonconst |
| StagedFormation | GetName |  | CString | Category: nonconst |
| StagedFormation | GetNumCombatUnits |  | int32 | Category: nonconst |
| StagedFormation | GetNumCombatUnitsIfTransferred |  | int32 | Category: nonconst |
| StagedFormation | GetNumConscriptsFromHQ | 1. Hq | int32 | Category: nonconst |
| StagedFormation | GetNumConscriptsFromState | 1. State | int32 | Category: nonconst |
| StagedFormation | GetNumRegularsFromHQ | 1. Hq | int32 | Category: nonconst |
| StagedFormation | GetNumRegularsFromState | 1. State | int32 | Category: nonconst |
| StagedFormation | GetResultingNumbersDesc |  | CString | Category: nonconst |
| StagedFormation | GetStates |  | Unknown | Category: nonconst |
| StagedFormation | GetUnitTypes |  | Unknown | Category: nonconst |
| StagedFormation | HasValidFormation |  | bool |  |
| StagedFormation | IsAllSelectedFromHQ | 1. Hq | bool |  |
| StagedFormation | IsAllSelectedFromState | 1. State | bool |  |
| StagedFormation | IsFormationSelected | 1. Unknown | bool |  |
| StagedFormation | Self |  | StagedFormation |  |
| StagedFormation | ToggleSelectionOnAllFromHQ | 1. Hq | void |  |
| StagedFormation | ToggleSelectionOnAllFromState | 1. State | void |  |
| StagedUnitsWithType | AccessSelf |  | StagedUnitsWithType | Category: const |
| StagedUnitsWithType | CanMoveConscriptsToStaged |  | bool |  |
| StagedUnitsWithType | CanMoveRegularsToStaged |  | bool |  |
| StagedUnitsWithType | ClearStateFilter |  | void |  |
| StagedUnitsWithType | GetInvalidConscriptTransferDesc |  | CString | Category: nonconst |
| StagedUnitsWithType | GetInvalidRegularTransferDesc |  | CString | Category: nonconst |
| StagedUnitsWithType | GetNumCombatUnits |  | int32 | Category: nonconst |
| StagedUnitsWithType | GetNumConscripts |  | int32 | Category: nonconst |
| StagedUnitsWithType | GetNumConscriptsInState | 1. State | int32 | Category: nonconst |
| StagedUnitsWithType | GetNumFilteredConscripts |  | int32 | Category: nonconst |
| StagedUnitsWithType | GetNumFilteredRegulars |  | int32 | Category: nonconst |
| StagedUnitsWithType | GetNumRegulars |  | int32 | Category: nonconst |
| StagedUnitsWithType | GetNumRegularsInState | 1. State | int32 | Category: nonconst |
| StagedUnitsWithType | GetNumSelectedConscripts |  | int32 | Category: nonconst |
| StagedUnitsWithType | GetNumSelectedRegulars |  | int32 | Category: nonconst |
| StagedUnitsWithType | GetStagedCombatUnitStates |  | Unknown | Category: nonconst |
| StagedUnitsWithType | GetStagedCombatUnits |  | Unknown | Category: nonconst |
| StagedUnitsWithType | GetStagedCombatUnitsInState | 1. State | Unknown | Category: nonconst |
| StagedUnitsWithType | GetStateFilter |  | State | Category: nonconst |
| StagedUnitsWithType | GetUnitType |  | CombatUnitType | Category: nonconst |
| StagedUnitsWithType | HasMoved |  | bool |  |
| StagedUnitsWithType | HasStateFilter |  | bool |  |
| StagedUnitsWithType | IsUnitSelected | 1. CombatUnit | bool |  |
| StagedUnitsWithType | OnConscriptsEditboxValueChanged |  | void |  |
| StagedUnitsWithType | OnConscriptsSliderValueChanged |  | void |  |
| StagedUnitsWithType | OnRegularsEditboxValueChanged |  | void |  |
| StagedUnitsWithType | OnRegularsSliderValueChanged |  | void |  |
| StagedUnitsWithType | Self |  | StagedUnitsWithType |  |
| StagedUnitsWithType | SetStateFilter | 1. Unknown | void |  |
| StagedUnitsWithType | ToggleUnitSelected | 1. CombatUnit | void |  |
| StarvationType | AccessSelf |  | StarvationType | Category: const |
| StarvationType | GetColor |  | CVector4f | Category: nonconst |
| StarvationType | GetIcon |  | Unknown | Category: nonconst |
| StarvationType | GetName |  | CString | Category: nonconst |
| StarvationType | IsMild |  | bool |  |
| StarvationType | IsSevere |  | bool |  |
| StarvationType | Self |  | StarvationType |  |
| State | AbandonColony |  | Command |  |
| State | AccessAllBuiltRuralBuildings |  | Unknown | Category: const |
| State | AccessBuilding | 1. BuildingType | Building | Category: const |
| State | AccessBuildings |  | Unknown | Category: const |
| State | AccessCappedRuralBuildings |  | Unknown | Category: const |
| State | AccessDecrees |  | Unknown | Category: const |
| State | AccessDevelopmentBuildings |  | Unknown | Category: const |
| State | AccessMarket |  | Market | Category: const |
| State | AccessModifier |  | Modifier | Category: const |
| State | AccessOwner |  | Country | Category: const |
| State | AccessPopCultures |  | Unknown | Category: const |
| State | AccessPopInterestGroups |  | Unknown | Category: const |
| State | AccessPopReligions |  | Unknown | Category: const |
| State | AccessPopTypes |  | Unknown | Category: const |
| State | AccessPopsList |  | PopList | Category: const |
| State | AccessSelf |  | State | Category: const |
| State | AccessShippingLanesFromThisState | 1. Province | Unknown | Category: const |
| State | AccessShippingLanesOnlyGoodsTransferFromThisState | 1. Province | Unknown | Category: const |
| State | AccessShippingLanesOnlyPortConnectionsFromThisState | 1. Province | Unknown | Category: const |
| State | AccessShippingLanesOnlySupplyRoutesFromThisState | 1. Province | Unknown | Category: const |
| State | AccessSubsistenceBuilding |  | Building | Category: const |
| State | AccessUncappedRuralBuildings |  | Unknown | Category: const |
| State | AccessUrbanBuildings |  | Unknown | Category: const |
| State | CalcPopInstitutionBureaucracyCost |  | CFixedPoint |  |
| State | CalcSupplyToDemandRatio | 1. Goods | CFixedPoint |  |
| State | CalcTaxCapacity |  | CFixedPoint |  |
| State | CalcTaxCapacityBalance |  | CFixedPoint |  |
| State | CalcTaxCapacityUsage |  | CFixedPoint |  |
| State | CalcTurmoil |  | CFixedPoint |  |
| State | GetAdditionalSOLFactorsDescAll |  | CString | Category: nonconst |
| State | GetAdditionalSOLFactorsDescMiddle |  | CString | Category: nonconst |
| State | GetAdditionalSOLFactorsDescPoor |  | CString | Category: nonconst |
| State | GetAdditionalSOLFactorsDescRich |  | CString | Category: nonconst |
| State | GetAnnualPopNetMigration |  | int64 | Category: nonconst |
| State | GetArableLandCapacity |  | int32 | Category: nonconst |
| State | GetAverageAnnualWage |  | CFixedPoint | Category: nonconst |
| State | GetAverageAnnualWageDesc |  | CString | Category: nonconst |
| State | GetAverageStandardOfLivingAll |  | CFixedPoint | Category: nonconst |
| State | GetAverageStandardOfLivingMiddle |  | CFixedPoint | Category: nonconst |
| State | GetAverageStandardOfLivingPoor |  | CFixedPoint | Category: nonconst |
| State | GetAverageStandardOfLivingRich |  | CFixedPoint | Category: nonconst |
| State | GetBaseBureaucracyCostRaw |  | CFixedPoint | Category: nonconst |
| State | GetBasePopBureaucracyCostRaw |  | CFixedPoint | Category: nonconst |
| State | GetBestTexture |  | Unknown | Category: nonconst |
| State | GetBestTextureEffect |  | CString | Category: nonconst |
| State | GetBlockadeEffectsDesc |  | CString | Category: nonconst |
| State | GetBlockadeLevel |  | CFixedPoint | Category: nonconst |
| State | GetBuilding | 1. BuildingType | Building | Category: nonconst |
| State | GetBuildingsWithGovernmentExpenses |  | Unknown | Category: nonconst |
| State | GetBuildingsWithTaxationRevenue |  | Unknown | Category: nonconst |
| State | GetBureaucracyCost |  | CFixedPoint | Category: nonconst |
| State | GetBureaucracyCostDesc |  | CString | Category: nonconst |
| State | GetCapitalEffectsDesc |  | CString | Category: nonconst |
| State | GetCityHubName |  | CString | Category: nonconst |
| State | GetClaimsDesc |  | CString | Category: nonconst |
| State | GetColonizers | 1. CString | CString | Category: nonconst |
| State | GetColonyCompany |  | Company | Category: nonconst |
| State | GetColonyGrowthDateDesc |  | CString | Category: nonconst |
| State | GetColonyGrowthModifierDesc |  | CString | Category: nonconst |
| State | GetColonyProgress |  | CFixedPoint | Category: nonconst |
| State | GetColonyProgressAsDays |  | int32 | Category: nonconst |
| State | GetColonyProgressAsFloat |  | float | Category: nonconst |
| State | GetColonyProvinceProgressDesc |  | CString | Category: nonconst |
| State | GetColonyTransferName |  | CString | Category: nonconst |
| State | GetColor |  | CVector4f | Category: nonconst |
| State | GetConscriptionLimit |  | int32 | Category: nonconst |
| State | GetConscriptionLimitDesc |  | CString | Category: nonconst |
| State | GetConstructionEfficiency |  | CFixedPoint | Category: nonconst |
| State | GetConstructionEfficiencyForBuildingType | 1. BuildingType | CFixedPoint | Category: nonconst |
| State | GetConstructionEfficiencyForBuildingTypeTooltip | 1. BuildingType | CString | Category: nonconst |
| State | GetConstructionEfficiencyTooltip |  | CString | Category: nonconst |
| State | GetController |  | Country | Category: nonconst |
| State | GetCountry |  | Country | Category: nonconst |
| State | GetCulturalCommunities |  | Unknown | Category: nonconst |
| State | GetCurrentBlockadeStrength |  | CFixedPoint | Category: nonconst |
| State | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| State | GetDailyColonyProgress |  | CFixedPoint | Category: nonconst |
| State | GetDevastationDailyChange |  | CFixedPoint | Category: nonconst |
| State | GetDevastationDailyChangeBreakdown |  | CString | Category: nonconst |
| State | GetDevastationEffects |  | CString | Category: nonconst |
| State | GetDevastationLevel |  | CFixedPoint | Category: nonconst |
| State | GetEnemyWithHighestOccupation |  | Country | Category: nonconst |
| State | GetExpectedSOLFactorsDescAll |  | CString | Category: nonconst |
| State | GetExpectedSOLFactorsDescMiddle |  | CString | Category: nonconst |
| State | GetExpectedSOLFactorsDescPoor |  | CString | Category: nonconst |
| State | GetExpectedSOLFactorsDescRich |  | CString | Category: nonconst |
| State | GetExpectedStandardOfLivingAll |  | CFixedPoint | Category: nonconst |
| State | GetExpectedStandardOfLivingMiddle |  | CFixedPoint | Category: nonconst |
| State | GetExpectedStandardOfLivingPoor |  | CFixedPoint | Category: nonconst |
| State | GetExpectedStandardOfLivingRich |  | CFixedPoint | Category: nonconst |
| State | GetExportRevenue | 1. Goods | CFixedPoint | Category: nonconst |
| State | GetExportedAmount | 1. Goods | CFixedPoint | Category: nonconst |
| State | GetExports |  | Unknown | Category: nonconst |
| State | GetFamineDesc |  | CString | Category: nonconst |
| State | GetFarmHubName |  | CString | Category: nonconst |
| State | GetForestryHubName |  | CString | Category: nonconst |
| State | GetFormattedStandardOfLivingAll |  | CString | Category: nonconst |
| State | GetFormattedStandardOfLivingLabelAll |  | CString | Category: nonconst |
| State | GetFormattedStandardOfLivingLabelMiddle |  | CString | Category: nonconst |
| State | GetFormattedStandardOfLivingLabelPoor |  | CString | Category: nonconst |
| State | GetFormattedStandardOfLivingLabelRich |  | CString | Category: nonconst |
| State | GetFormattedStandardOfLivingMiddle |  | CString | Category: nonconst |
| State | GetFormattedStandardOfLivingPoor |  | CString | Category: nonconst |
| State | GetFormattedStandardOfLivingRich |  | CString | Category: nonconst |
| State | GetFreeArableLandAfterInactiveQueuedEntry |  | CString | Category: nonconst |
| State | GetGDPContribution |  | CFixedPoint | Category: nonconst |
| State | GetGDPContributionPercentage |  | CFixedPoint | Category: nonconst |
| State | GetGDPGoodsContribution | 1. Unknown | CFixedPoint | Category: nonconst |
| State | GetGDPGoodsContributionBreakdown |  | CString | Category: nonconst |
| State | GetGDPGoodsContributionPercentage | 1. Unknown | CFixedPoint | Category: nonconst |
| State | GetGdpRatioOwnedBy | 1. Unknown | CFixedPoint | Category: nonconst |
| State | GetGdpRatioOwnedByDesc | 1. Country | CString | Category: nonconst |
| State | GetGoodsSortedByGDP |  | Unknown | Category: nonconst |
| State | GetGovernmentExpenses |  | CFixedPoint | Category: nonconst |
| State | GetHarvestConditions |  | Unknown | Category: nonconst |
| State | GetHomelandsDesc |  | CString | Category: nonconst |
| State | GetID |  | int32 | Category: nonconst |
| State | GetIDString |  | CString | Category: nonconst |
| State | GetImportRevenue | 1. Goods | CFixedPoint | Category: nonconst |
| State | GetImportedAmount | 1. Goods | CFixedPoint | Category: nonconst |
| State | GetImports |  | Unknown | Category: nonconst |
| State | GetIncorporationPartialEffectsDesc |  | CString | Category: nonconst |
| State | GetIncorporationProgress |  | CFixedPoint | Category: nonconst |
| State | GetIncorporationTimeDesc |  | CString | Category: nonconst |
| State | GetIncorporationTimeLeft |  | CString | Category: nonconst |
| State | GetInfrastructure |  | CFixedPoint | Category: nonconst |
| State | GetInfrastructureBalance |  | CFixedPoint | Category: nonconst |
| State | GetInfrastructureDesc |  | CString | Category: nonconst |
| State | GetInfrastructureUsage |  | CFixedPoint | Category: nonconst |
| State | GetInfrastructureUsageDesc |  | CString | Category: nonconst |
| State | GetInsufficientQualificationsForAvailablePositionsDesc |  | CString | Category: nonconst |
| State | GetInvasions |  | Unknown | Category: nonconst |
| State | GetJobseekersDesc |  | CString | Category: nonconst |
| State | GetLiteracy |  | CFixedPoint | Category: nonconst |
| State | GetMarket |  | Market | Category: nonconst |
| State | GetMarketAccess |  | CFixedPoint | Category: nonconst |
| State | GetMarketAccessDesc |  | CString | Category: nonconst |
| State | GetMarketAccessStatus |  | CString | Category: nonconst |
| State | GetMarketCapitalEffectsDesc |  | CString | Category: nonconst |
| State | GetMassMigrationCulture |  | Culture | Category: nonconst |
| State | GetMassMigrationEndDate |  | CString | Category: nonconst |
| State | GetMassMigrationOriginCountry |  | Country | Category: nonconst |
| State | GetMaxBattalions |  | int32 | Category: nonconst |
| State | GetMaxImbalance |  | CFixedPoint | Category: nonconst |
| State | GetMaxImbalanceScaledByBasePrice |  | CFixedPoint | Category: nonconst |
| State | GetMaxPotentialFor | 1. Building | int32 | Category: nonconst |
| State | GetMigrationAndSlaveTradeDetailsDesc |  | CString | Category: nonconst |
| State | GetMigrationDesc |  | CString | Category: nonconst |
| State | GetMigrationDetailsDesc |  | CString | Category: nonconst |
| State | GetMigrationLabel |  | CString | Category: nonconst |
| State | GetMigrationPull |  | CFixedPoint | Category: nonconst |
| State | GetMigrationPullDesc |  | CString | Category: nonconst |
| State | GetMineHubName |  | CString | Category: nonconst |
| State | GetModifier |  | Modifier | Category: nonconst |
| State | GetName |  | CString | Category: nonconst |
| State | GetNameNoFormatting |  | CString | Category: nonconst |
| State | GetNameWithCountryFlag |  | CString | Category: nonconst |
| State | GetNextColonyProvince |  | Province | Category: nonconst |
| State | GetNonPotentialDiploPlays |  | Unknown | Category: nonconst |
| State | GetNumArableLandReservedForSubsistence |  | int32 | Category: nonconst |
| State | GetNumBaseFreeArableLand |  | int32 | Category: nonconst |
| State | GetNumBuildingsAffectedByGoodsShortage |  | int32 | Category: nonconst |
| State | GetNumColonizers |  | int32 | Category: nonconst |
| State | GetNumConstructableUrbanBuildings |  | int32 | Category: nonconst |
| State | GetNumConsumed | 1. Goods | CFixedPoint | Category: nonconst |
| State | GetNumFreeArableLand |  | int32 | Category: nonconst |
| State | GetNumInactiveQueuedArableLandEntry |  | CString | Category: nonconst |
| State | GetNumJobseekers |  | int64 | Category: nonconst |
| State | GetNumLoyalists |  | int64 | Category: nonconst |
| State | GetNumObstinanceSupporters |  | int64 | Category: nonconst |
| State | GetNumOfObstinatePopsFromMovement | 1. Unknown | int64 | Category: nonconst |
| State | GetNumProduced | 1. Goods | CFixedPoint | Category: nonconst |
| State | GetNumProvinces |  | int32 | Category: nonconst |
| State | GetNumRadicals |  | int64 | Category: nonconst |
| State | GetNumSubsistenceWorkingAdults |  | int64 | Category: nonconst |
| State | GetNumUnemployedWorkingAdults |  | int64 | Category: nonconst |
| State | GetNumUsedArableLand |  | int32 | Category: nonconst |
| State | GetNumUsedArableLandFullyBuilt |  | int32 | Category: nonconst |
| State | GetNumUsedArableLandFullyBuiltEntry |  | CString | Category: nonconst |
| State | GetNumUsedArableLandUnderConstruction |  | int32 | Category: nonconst |
| State | GetNumUsedArableLandUnderConstructionEntry |  | CString | Category: nonconst |
| State | GetNumberOfPopsMiddle |  | int64 | Category: nonconst |
| State | GetNumberOfPopsPoor |  | int64 | Category: nonconst |
| State | GetNumberOfPopsRich |  | int64 | Category: nonconst |
| State | GetObstinance |  | CFixedPoint | Category: nonconst |
| State | GetObstinanceDesc |  | CString | Category: nonconst |
| State | GetObstinanceEffectScale |  | CFixedPoint | Category: nonconst |
| State | GetObstinanceEffectsDesc |  | CString | Category: nonconst |
| State | GetObstinanceFromMovement | 1. Unknown | CFixedPoint | Category: nonconst |
| State | GetOccupant |  | Country | Category: nonconst |
| State | GetOccupantsTooltip |  | CString | Category: nonconst |
| State | GetOccupationPiechartData |  | Unknown | Category: nonconst |
| State | GetOwner |  | Country | Category: nonconst |
| State | GetPlanInvasionDesc |  | CString | Category: nonconst |
| State | GetPolStrForCulture | 1. Culture | int64 | Category: nonconst |
| State | GetPolStrForReligion | 1. Religion | int64 | Category: nonconst |
| State | GetPollutionGeneration |  | CFixedPoint | Category: nonconst |
| State | GetPollutionGenerationDesc |  | CString | Category: nonconst |
| State | GetPollutionHealthEffectsReduction |  | CFixedPoint | Category: nonconst |
| State | GetPollutionHealthEffectsReductionDesc |  | CString | Category: nonconst |
| State | GetPopBirthrate |  | CFixedPoint | Category: nonconst |
| State | GetPopCultureDesc |  | CString | Category: nonconst |
| State | GetPopCultureDescByIndex | 1. Unknown | CString | Category: nonconst |
| State | GetPopGrowthDesc |  | CString | Category: nonconst |
| State | GetPopMortality |  | CFixedPoint | Category: nonconst |
| State | GetPopNetGrowth |  | int64 | Category: nonconst |
| State | GetPopReligionDesc |  | CString | Category: nonconst |
| State | GetPopReligionDescByIndex | 1. Unknown | CString | Category: nonconst |
| State | GetPopTotalChange |  | int64 | Category: nonconst |
| State | GetPops |  | Unknown | Category: nonconst |
| State | GetPopulationForCulture | 1. Culture | int64 | Category: nonconst |
| State | GetPopulationForReligion | 1. Religion | int64 | Category: nonconst |
| State | GetPopulationRatioBelowExpectedStandardOfLiving |  | CFixedPoint | Category: nonconst |
| State | GetPopulationSize |  | int64 | Category: nonconst |
| State | GetPortHubName |  | CString | Category: nonconst |
| State | GetPotentialDecrees |  | Unknown | Category: nonconst |
| State | GetPotentialDiploPlays |  | Unknown | Category: nonconst |
| State | GetPotentialLabor |  | int64 | Category: nonconst |
| State | GetPotentialPopTypeQualificationsDesc |  | CString | Category: nonconst |
| State | GetPotentialProductionForCountry | 1. Goods 2. Country | CFixedPoint | Category: nonconst |
| State | GetPotentialProductionForCountryDesc | 1. Goods 2. Country | CString | Category: nonconst |
| State | GetPotentialQualifications | 1. PopType | int64 | Category: nonconst |
| State | GetPotentialQualificationsBreakdown | 1. PopType | CString | Category: nonconst |
| State | GetPotentialQualificationsDesc |  | CString | Category: nonconst |
| State | GetPotentialUrbanBuildings |  | Unknown | Category: nonconst |
| State | GetProductionInfo |  | Unknown | Category: nonconst |
| State | GetRequiredBlockadeStrength |  | CFixedPoint | Category: nonconst |
| State | GetSamplePops |  | Unknown | Category: nonconst |
| State | GetSlaveExportMarkersDesc |  | CString | Category: nonconst |
| State | GetSlaveImportMarkerDesc |  | CString | Category: nonconst |
| State | GetSlaveTradeDetailsDesc |  | CString | Category: nonconst |
| State | GetStateRegion |  | StateRegion | Category: nonconst |
| State | GetSubsistenceBuilding |  | Building | Category: nonconst |
| State | GetTaxCapacityDesc |  | CString | Category: nonconst |
| State | GetTaxCapacityEffectsDesc |  | CString | Category: nonconst |
| State | GetTaxCapacityUsageDesc |  | CString | Category: nonconst |
| State | GetTaxationRevenue |  | CFixedPoint | Category: nonconst |
| State | GetTheater | 1. Unknown | Theater | Category: nonconst |
| State | GetTimedModifiers |  | Unknown | Category: nonconst |
| State | GetTimedModifiersBreakdown |  | CString | Category: nonconst |
| State | GetTooltipTag |  | CString | Category: nonconst |
| State | GetTotalConsumption |  | CFixedPoint | Category: nonconst |
| State | GetTotalConvoysFromShippingLanesViaState | 1. Province | int32 | Category: nonconst |
| State | GetTotalExportRevenue |  | CFixedPoint | Category: nonconst |
| State | GetTotalExportedAmount |  | CFixedPoint | Category: nonconst |
| State | GetTotalImportRevenue |  | CFixedPoint | Category: nonconst |
| State | GetTotalImportedAmount |  | CFixedPoint | Category: nonconst |
| State | GetTotalLabor |  | int64 | Category: nonconst |
| State | GetTotalPolStr |  | int64 | Category: nonconst |
| State | GetTotalPortConnectionsViaState | 1. Province | int32 | Category: nonconst |
| State | GetTotalProduction |  | CFixedPoint | Category: nonconst |
| State | GetTradeCapacity |  | int32 | Category: nonconst |
| State | GetTradeCapacityBalance |  | int32 | Category: nonconst |
| State | GetTradeCapacityDesc |  | CString | Category: nonconst |
| State | GetTradeCapacityUsage |  | int32 | Category: nonconst |
| State | GetTradeCapacityUsageDesc |  | CString | Category: nonconst |
| State | GetTradePotential |  | CFixedPoint | Category: nonconst |
| State | GetTradePotentialDesc |  | CString | Category: nonconst |
| State | GetTurmoilEffects |  | CString | Category: nonconst |
| State | GetUrbanization |  | int32 | Category: nonconst |
| State | GetUrbanizationBuildingsMaxLevelDesc |  | CString | Category: nonconst |
| State | GetUrbanizationDesc |  | CString | Category: nonconst |
| State | GetUrbanizationNeededPerLevelFormatted |  | CString | Category: nonconst |
| State | GetUrbanizationNeededPerLevelRaw |  | int32 | Category: nonconst |
| State | GetWeeklyEmigration |  | int64 | Category: nonconst |
| State | GetWeeklyImmigration |  | int64 | Category: nonconst |
| State | GetWeeklyPopNetMigration |  | int64 | Category: nonconst |
| State | GetWeeklySlaveExport |  | int64 | Category: nonconst |
| State | GetWeeklySlaveImport |  | int64 | Category: nonconst |
| State | GetWorldMarketAccess |  | CFixedPoint | Category: nonconst |
| State | GetWorldMarketAccessDesc |  | CString | Category: nonconst |
| State | GetWorldMarketAccessFormatted |  | CString | Category: nonconst |
| State | GetYearlyGDP |  | CFixedPoint | Category: nonconst |
| State | GetYearsToIncorporate |  | CFixedPoint | Category: nonconst |
| State | HasAnyGoodsShortage |  | bool |  |
| State | HasBuildingGoodsShortage | 1. Unknown | bool |  |
| State | HasClaims |  | bool |  |
| State | HasConstructionQueued |  | bool |  |
| State | HasDevastation |  | bool |  |
| State | HasDiscoverableResources |  | bool |  |
| State | HasFamine |  | bool |  |
| State | HasGoodsShortage | 1. Unknown | bool |  |
| State | HasHomelands |  | bool |  |
| State | HasInsufficientQualificationsForAvailablePositions |  | bool |  |
| State | HasOccupation |  | bool |  |
| State | HasPopGoodsShortage | 1. Unknown | bool |  |
| State | HasSlaveExportMarkers |  | bool |  |
| State | HasTimedModifiers |  | bool |  |
| State | HasTurmoilEffects |  | bool |  |
| State | IncorporateState |  | Command |  |
| State | IsBeingColonized |  | bool |  |
| State | IsBeingHighlighted |  | bool |  |
| State | IsBeingTutorialHighlighted |  | bool |  |
| State | IsCapitalState |  | bool |  |
| State | IsCoastal |  | bool |  |
| State | IsColonizationPaused |  | bool |  |
| State | IsColonyProgressBlockedByInactiveInterest |  | bool |  |
| State | IsCompanyColony |  | bool |  |
| State | IsContested |  | bool |  |
| State | IsEligibleForMassMigration |  | bool |  |
| State | IsFullyOccupied |  | bool |  |
| State | IsGrowingColony |  | bool |  |
| State | IsImportingSlaves |  | bool |  |
| State | IsIncorporated |  | bool |  |
| State | IsIncorporating |  | bool |  |
| State | IsIsolatedFromMarket |  | bool |  |
| State | IsMarketCapital |  | bool |  |
| State | IsMassMigrationTarget |  | bool |  |
| State | IsOwner | 1. Country | bool |  |
| State | IsPinnedInOutliner |  | bool |  |
| State | IsSlaveState |  | bool |  |
| State | IsSplitState |  | bool |  |
| State | IsStrategicObjective | 1. Country | bool |  |
| State | IsTreatyPort |  | bool |  |
| State | IsUnincorporated |  | bool |  |
| State | IsValid |  | bool |  |
| State | IsValidInvasionTarget |  | bool |  |
| State | IsWorldMarketHub |  | bool |  |
| State | IsZoomingToCapital |  | bool |  |
| State | MakeScope |  | Scope |  |
| State | PanCamera |  | void |  |
| State | PredictBureaucracyCost |  | CFixedPoint |  |
| State | Self |  | State |  |
| State | SortBuildings | 1. Unknown | void |  |
| State | SortBuildingsWithOrder | 1. Unknown 2. Unknown | void |  |
| State | TogglePauseColonization |  | Command |  |
| State | TogglePinInOutliner |  | void |  |
| State | UnincorporateState |  | Command |  |
| State | ZoomExtraCloseToCapital |  | void |  |
| State | ZoomToCapital |  | void |  |
| StateGoods | AccessSelf |  | StateGoods | Category: const |
| StateGoods | GetBreakdownOfBuildingsAffectedByShortage |  | CString | Category: nonconst |
| StateGoods | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| StateGoods | GetGoods |  | Goods | Category: nonconst |
| StateGoods | GetIDString |  | CString | Category: nonconst |
| StateGoods | GetNumBuildingsAffectedByShortage |  | int32 | Category: nonconst |
| StateGoods | GetState |  | State | Category: nonconst |
| StateGoods | GetTooltipTag |  | CString | Category: nonconst |
| StateGoods | MakeScope |  | Scope |  |
| StateGoods | Self |  | StateGoods |  |
| StateInfraMarker | AccessSelf |  | StateInfraMarker | Category: const |
| StateInfraMarker | GetPosition |  | CVector2f | Category: nonconst |
| StateInfraMarker | GetState |  | State | Category: nonconst |
| StateInfraMarker | GetTooltip |  | CString | Category: nonconst |
| StateInfraMarker | IsConnectedMarker |  | bool |  |
| StateInfraMarker | Self |  | StateInfraMarker |  |
| StateMarker | AccessSelf |  | StateMarker | Category: const |
| StateMarker | GetGoods |  | Goods | Category: nonconst |
| StateMarker | GetState |  | State | Category: nonconst |
| StateMarker | Self |  | StateMarker |  |
| StateNameChangePopup | AccessSelf |  | StateNameChangePopup | Category: const |
| StateNameChangePopup | Confirm |  | Command |  |
| StateNameChangePopup | GetState |  | State | Category: nonconst |
| StateNameChangePopup | OnEditCityName |  | void |  |
| StateNameChangePopup | OnEditFarmName |  | void |  |
| StateNameChangePopup | OnEditMineName |  | void |  |
| StateNameChangePopup | OnEditName |  | void |  |
| StateNameChangePopup | OnEditPortName |  | void |  |
| StateNameChangePopup | OnEditWoodName |  | void |  |
| StateNameChangePopup | Self |  | StateNameChangePopup |  |
| StateNameChangePopup | ShouldHaveCityHub |  | bool |  |
| StateNameChangePopup | ShouldHaveFarmHub |  | bool |  |
| StateNameChangePopup | ShouldHaveMineHub |  | bool |  |
| StateNameChangePopup | ShouldHavePortHub |  | bool |  |
| StateNameChangePopup | ShouldHaveWoodHub |  | bool |  |
| StatePopulationPanel | AccessSelf |  | StatePopulationPanel | Category: const |
| StatePopulationPanel | AccessState |  | State | Category: const |
| StatePopulationPanel | GetState |  | State | Category: nonconst |
| StatePopulationPanel | Self |  | StatePopulationPanel |  |
| StateRegion | AccessLargestStateOwner |  | Country | Category: const |
| StateRegion | AccessSelf |  | StateRegion | Category: const |
| StateRegion | AccessStrategicRegion |  | StrategicRegion | Category: const |
| StateRegion | AccessTraits |  | Unknown | Category: const |
| StateRegion | Colonize |  | Command |  |
| StateRegion | GetAdjacentLandStateRegionsDesc |  | CString | Category: nonconst |
| StateRegion | GetAdjacentSeaStateRegionsDesc |  | CString | Category: nonconst |
| StateRegion | GetCityHubName |  | CString | Category: nonconst |
| StateRegion | GetColonizeTooltip |  | CString | Category: nonconst |
| StateRegion | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| StateRegion | GetFarmHubName |  | CString | Category: nonconst |
| StateRegion | GetForestryHubName |  | CString | Category: nonconst |
| StateRegion | GetID |  | int32 | Category: nonconst |
| StateRegion | GetLargestStateInRegion |  | State | Category: nonconst |
| StateRegion | GetLargestStateOwner |  | Country | Category: nonconst |
| StateRegion | GetMineHubName |  | CString | Category: nonconst |
| StateRegion | GetName |  | CString | Category: nonconst |
| StateRegion | GetNameNoFormatting |  | CString | Category: nonconst |
| StateRegion | GetNavalExitStateRegionDesc |  | CString | Category: nonconst |
| StateRegion | GetPollutionEffects |  | CString | Category: nonconst |
| StateRegion | GetPollutionImpact |  | CFixedPoint | Category: nonconst |
| StateRegion | GetPollutionImpactDailyChange |  | CFixedPoint | Category: nonconst |
| StateRegion | GetPollutionImpactTargetLevel |  | CFixedPoint | Category: nonconst |
| StateRegion | GetPollutionLevel |  | CFixedPoint | Category: nonconst |
| StateRegion | GetPortHubName |  | CString | Category: nonconst |
| StateRegion | GetSeaInfrastructure | 1. Country | CFixedPoint | Category: nonconst |
| StateRegion | GetSeaInfrastructureDesc | 1. Country | CString | Category: nonconst |
| StateRegion | GetStatesDesc |  | CString | Category: nonconst |
| StateRegion | GetStrategicRegion |  | StrategicRegion | Category: nonconst |
| StateRegion | GetTooltipTag |  | CString | Category: nonconst |
| StateRegion | IsSplitState |  | bool |  |
| StateRegion | IsValid |  | bool |  |
| StateRegion | MakeScope |  | Scope |  |
| StateRegion | PanCamera |  | void |  |
| StateRegion | Self |  | StateRegion |  |
| StateTrait | AccessSelf |  | StateTrait | Category: const |
| StateTrait | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| StateTrait | GetModifiersDesc |  | CString | Category: nonconst |
| StateTrait | GetName |  | CString | Category: nonconst |
| StateTrait | GetTexture |  | Unknown | Category: nonconst |
| StateTrait | GetTooltipTag |  | CString | Category: nonconst |
| StateTrait | GetUnlocks |  | CString | Category: nonconst |
| StateTrait | MakeScope |  | Scope |  |
| StateTrait | Self |  | StateTrait |  |
| StatesPanel | AccessBuilding | 1. BuildingType | Building | Category: const |
| StatesPanel | AccessLocalGoods |  | Unknown | Category: const |
| StatesPanel | AccessNonLocalGoods |  | Unknown | Category: const |
| StatesPanel | AccessSelf |  | StatesPanel | Category: const |
| StatesPanel | AccessState |  | State | Category: const |
| StatesPanel | AccessSubsistenceBuilding |  | Building | Category: const |
| StatesPanel | CalcBuildUrbanBuildingsButtonPosition |  | CVector2f |  |
| StatesPanel | GetNumAgricultureLevels |  | int32 | Category: nonconst |
| StatesPanel | GetNumAgricultureLevelsDesc |  | CString | Category: nonconst |
| StatesPanel | GetNumAgricultureLevelsInQueue |  | int32 | Category: nonconst |
| StatesPanel | GetNumDevelopmentLevels |  | int32 | Category: nonconst |
| StatesPanel | GetNumDevelopmentLevelsDesc |  | CString | Category: nonconst |
| StatesPanel | GetNumDevelopmentLevelsInQueue |  | int32 | Category: nonconst |
| StatesPanel | GetNumResourceLevels |  | int32 | Category: nonconst |
| StatesPanel | GetNumResourceLevelsDesc |  | CString | Category: nonconst |
| StatesPanel | GetNumResourceLevelsInQueue |  | int32 | Category: nonconst |
| StatesPanel | GetNumUrbanLevels |  | int32 | Category: nonconst |
| StatesPanel | GetNumUrbanLevelsDesc |  | CString | Category: nonconst |
| StatesPanel | GetNumUrbanLevelsInQueue |  | int32 | Category: nonconst |
| StatesPanel | GetState |  | State | Category: nonconst |
| StatesPanel | IsBuildUrbanBuildingsMenuOpen |  | bool |  |
| StatesPanel | IsExpanded | 1. Unknown | bool |  |
| StatesPanel | Self |  | StatesPanel |  |
| StatesPanel | Sort | 1. Unknown | void |  |
| StatesPanel | ToggleBuildUrbanBuildingsMenu | 1. PdxGuiWidget | void |  |
| StatesPanel | ToggleSection | 1. Unknown | void |  |
| StatusWidget | AccessSelf |  | StatusWidget | Category: const |
| StatusWidget | ConnectAccount |  | void |  |
| StatusWidget | DisconnectAccount |  | void |  |
| StatusWidget | Hide |  | void |  |
| StatusWidget | IsAccountConnected |  | bool |  |
| StatusWidget | IsBusy |  | bool |  |
| StatusWidget | Logout |  | void |  |
| StatusWidget | Self |  | StatusWidget |  |
| StatusWidget | Show |  | void |  |
| StatusWidget | SupportsConnectAccount |  | bool |  |
| StatusWidget | ToggleCreateAccountWindow |  | void |  |
| StatusWidget | ToggleCreateProfileWindow |  | void |  |
| StatusWidget | ToggleLoginWindow |  | void |  |
| StrategicRegion | AccessFirstDiplomaticPlay |  | DiplomaticPlay | Category: const |
| StrategicRegion | AccessSelf |  | StrategicRegion | Category: const |
| StrategicRegion | GetConvoyRaidsDesc |  | CString | Category: nonconst |
| StrategicRegion | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| StrategicRegion | GetFirstDiplomaticPlay |  | DiplomaticPlay | Category: nonconst |
| StrategicRegion | GetIndex |  | uint32 | Category: nonconst |
| StrategicRegion | GetInterest | 1. Unknown | Interest | Category: nonconst |
| StrategicRegion | GetInterests |  | Unknown | Category: nonconst |
| StrategicRegion | GetLastConvoyRaidingCountriesToTargetDesc | 1. Country | CString | Category: nonconst |
| StrategicRegion | GetLastConvoyRaidingDamageBy | 1. Country | int32 | Category: nonconst |
| StrategicRegion | GetLastConvoyRaidingDamageEnemyReductionDesc | 1. Country | CString | Category: nonconst |
| StrategicRegion | GetLastConvoyRaidingDamageReductionDesc | 1. Country | CString | Category: nonconst |
| StrategicRegion | GetLastConvoyRaidingDamageTo | 1. Country | int32 | Category: nonconst |
| StrategicRegion | GetLastConvoyRaidingTargetCountriesByAttackerDesc | 1. Country | CString | Category: nonconst |
| StrategicRegion | GetName |  | CString | Category: nonconst |
| StrategicRegion | GetNameNoFormatting |  | CString | Category: nonconst |
| StrategicRegion | GetTooltipTag |  | CString | Category: nonconst |
| StrategicRegion | GetTotalGDP |  | CFixedPoint | Category: nonconst |
| StrategicRegion | HasDiplomaticPlay |  | bool |  |
| StrategicRegion | IsLand |  | bool |  |
| StrategicRegion | IsValid |  | bool |  |
| StrategicRegion | MakeScope |  | Scope |  |
| StrategicRegion | Self |  | StrategicRegion |  |
| StrategicRegionMarker | AccessSelf |  | StrategicRegionMarker | Category: const |
| StrategicRegionMarker | AccessStrategicRegion |  | StrategicRegion | Category: const |
| StrategicRegionMarker | GetPosition |  | CVector2f | Category: nonconst |
| StrategicRegionMarker | GetStrategicRegion |  | StrategicRegion | Category: nonconst |
| StrategicRegionMarker | Self |  | StrategicRegionMarker |  |
| SubjectType | AcceptsAnyOverlor |  | bool |  |
| SubjectType | AcceptsOnlyRecognizedOverlor |  | bool |  |
| SubjectType | AccessSelf |  | SubjectType | Category: const |
| SubjectType | CanStartOwnDiplomaticPlays |  | bool |  |
| SubjectType | GetDesc |  | CString | Category: nonconst |
| SubjectType | GetDiplomaticActionType |  | DiplomaticActionType | Category: nonconst |
| SubjectType | GetHigherAutonomySubjectType | 1. Unknown | SubjectType | Category: nonconst |
| SubjectType | GetIncomeTransfer |  | CFixedPoint | Category: nonconst |
| SubjectType | GetKey |  | CString | Category: nonconst |
| SubjectType | GetLowerAutonomySubjectType | 1. Unknown | SubjectType | Category: nonconst |
| SubjectType | GetName |  | CString | Category: nonconst |
| SubjectType | GetNameNoFormatting |  | CString | Category: nonconst |
| SubjectType | GetNameNoIcon |  | CString | Category: nonconst |
| SubjectType | GetNameNoIconNoFormatting |  | CString | Category: nonconst |
| SubjectType | GetTextIcon |  | CString | Category: nonconst |
| SubjectType | GetTexture |  | Unknown | Category: nonconst |
| SubjectType | GetTooltipTag |  | CString | Category: nonconst |
| SubjectType | HasCategory | 1. Unknown | bool |  |
| SubjectType | IsValid |  | bool |  |
| SubjectType | JoinOverlordWars |  | bool |  |
| SubjectType | Self |  | SubjectType |  |
| SubjectType | ShouldAnnexOnCountryFormation |  | bool |  |
| SupplyNetworkEntry | AccessSelf |  | SupplyNetworkEntry | Category: const |
| SupplyNetworkEntry | GetTooltip |  | CString | Category: nonconst |
| SupplyNetworkEntry | GetValue |  | CFixedPoint | Category: nonconst |
| SupplyNetworkEntry | RouteGetName |  | CString |  |
| SupplyNetworkEntry | Self |  | SupplyNetworkEntry |  |
| Sway | AcceptSway |  | Command |  |
| Sway | AccessSelf |  | Sway | Category: const |
| Sway | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| Sway | GetProposalDesc |  | CString | Category: nonconst |
| Sway | GetSwayOffer |  | SwayOffer | Category: nonconst |
| Sway | GetTooltipTag |  | CString | Category: nonconst |
| Sway | IsCallingInObligation |  | bool |  |
| Sway | IsReverseSway |  | bool |  |
| Sway | IsValid |  | bool |  |
| Sway | MakeScope |  | Scope |  |
| Sway | RejectSway |  | Command |  |
| Sway | Self |  | Sway |  |
| Sway | WouldRepudiateObligationIfRejected |  | bool |  |
| SwayCountryPanel | AccessCountry |  | Country | Category: const |
| SwayCountryPanel | AccessDiplomaticPlay |  | DiplomaticPlay | Category: const |
| SwayCountryPanel | AccessOtherCountry |  | Country | Category: const |
| SwayCountryPanel | AccessSelf |  | SwayCountryPanel | Category: const |
| SwayCountryPanel | AccessShownSwayOffers |  | Unknown | Category: const |
| SwayCountryPanel | AccessSwayOfferTypes |  | Unknown | Category: const |
| SwayCountryPanel | AccessSwayOfferWarGoalTypes |  | Unknown | Category: const |
| SwayCountryPanel | DecreaseFilterLevel |  | void |  |
| SwayCountryPanel | GetCountry |  | Country | Category: nonconst |
| SwayCountryPanel | GetDiplomaticPlay |  | DiplomaticPlay | Category: nonconst |
| SwayCountryPanel | GetOtherCountry |  | Country | Category: nonconst |
| SwayCountryPanel | IsReverseSway |  | bool |  |
| SwayCountryPanel | IsShowingSwayOfferTypes |  | bool |  |
| SwayCountryPanel | IsShowingSwayOfferWarGoalTypes |  | bool |  |
| SwayCountryPanel | IsShowingSwayOffers |  | bool |  |
| SwayCountryPanel | Self |  | SwayCountryPanel |  |
| SwayCountryPanel | SetSwayOfferType | 1. SwayOfferType | void |  |
| SwayCountryPanel | SetSwayOfferWarGoalType | 1. WarGoalType | void |  |
| SwayOffer | AccessSelf |  | SwayOffer | Category: const |
| SwayOffer | CalcManeuversCost | 1. Country 2. Country 3. DiplomaticPlay | int32 |  |
| SwayOffer | GetAcceptSwayScore | 1. Unknown 2. Unknown 3. Unknown | int32 | Category: nonconst |
| SwayOffer | GetAcceptSwayScoreWithArticle | 1. DiplomaticPlay 2. Country 3. Country 4. ArticleDraft | int32 | Category: nonconst |
| SwayOffer | GetCountryForFlag | 1. Country | Country | Category: nonconst |
| SwayOffer | GetDiplomaticActionType |  | DiplomaticActionType | Category: nonconst |
| SwayOffer | GetManeuversCostDesc | 1. Country 2. Country 3. DiplomaticPlay | CString | Category: nonconst |
| SwayOffer | GetName | 1. Country 2. Country 3. DiplomaticPlay | CString | Category: nonconst |
| SwayOffer | GetOfferedWarGoal |  | WarGoal | Category: nonconst |
| SwayOffer | GetState |  | State | Category: nonconst |
| SwayOffer | GetSwayOfferType |  | SwayOfferType | Category: nonconst |
| SwayOffer | GetTexture |  | Unknown | Category: nonconst |
| SwayOffer | GetThirdPartyCountry |  | Country | Category: nonconst |
| SwayOffer | GetTooltipTag |  | CString | Category: nonconst |
| SwayOffer | GetWouldAcceptSwayDesc | 1. DiplomaticPlay 2. Country 3. Country | CString | Category: nonconst |
| SwayOffer | GetWouldAcceptSwayDescWithArticle | 1. DiplomaticPlay 2. Country 3. Country 4. ArticleDraft | CString | Category: nonconst |
| SwayOffer | RequiresAnyInput |  | bool |  |
| SwayOffer | Self |  | SwayOffer |  |
| SwayOffer | SetArticleInputsFromDraft | 1. ArticleDraft | void |  |
| SwayOffer | TakesEffectImmediately |  | bool |  |
| SwayOffer | WouldAcceptSway | 1. DiplomaticPlay 2. Country 3. Country | bool |  |
| SwayOffer | WouldAcceptSwayWithArticle | 1. DiplomaticPlay 2. Country 3. Country 4. ArticleDraft | bool |  |
| SwayOfferType | AccessSelf |  | SwayOfferType | Category: const |
| SwayOfferType | GetName |  | CString | Category: nonconst |
| SwayOfferType | GetTexture |  | Unknown | Category: nonconst |
| SwayOfferType | GetTooltipTag |  | CString | Category: nonconst |
| SwayOfferType | Self |  | SwayOfferType |  |
| TaxBurdenItem | AccessSelf |  | TaxBurdenItem | Category: const |
| TaxBurdenItem | GetTaxType |  | CString | Category: nonconst |
| TaxBurdenItem | GetValue |  | CFixedPoint | Category: nonconst |
| TaxBurdenItem | Self |  | TaxBurdenItem |  |
| TechTreeItem | AccessSelf |  | TechTreeItem | Category: const |
| TechTreeItem | GetKey |  | CString | Category: nonconst |
| TechTreeItem | GetPosition |  | CVector2f | Category: nonconst |
| TechTreeItem | GetTechnology |  | Technology | Category: nonconst |
| TechTreeItem | Self |  | TechTreeItem |  |
| TechTreeLine | AccessSelf |  | TechTreeLine | Category: const |
| TechTreeLine | GetFrom |  | CVector2f | Category: nonconst |
| TechTreeLine | GetLineFrom |  | CVector2f | Category: nonconst |
| TechTreeLine | GetLineTo |  | CVector2f | Category: nonconst |
| TechTreeLine | GetPoints |  | Unknown | Category: nonconst |
| TechTreeLine | GetPointsInContainer |  | Unknown | Category: nonconst |
| TechTreeLine | GetPosition |  | CVector2f | Category: nonconst |
| TechTreeLine | GetSize |  | CVector2f | Category: nonconst |
| TechTreeLine | GetSourceTech |  | Technology | Category: nonconst |
| TechTreeLine | GetTargetTech |  | Technology | Category: nonconst |
| TechTreeLine | GetTo |  | CVector2f | Category: nonconst |
| TechTreeLine | IsFromNodeVirtual |  | bool |  |
| TechTreeLine | IsToNodeVirtual |  | bool |  |
| TechTreeLine | Self |  | TechTreeLine |  |
| TechTreePanel | AccessSelf |  | TechTreePanel | Category: const |
| TechTreePanel | GetMilitaryTechTreeItems |  | Unknown | Category: nonconst |
| TechTreePanel | GetMilitaryTechTreeLines |  | Unknown | Category: nonconst |
| TechTreePanel | GetProductionTechTreeItems |  | Unknown | Category: nonconst |
| TechTreePanel | GetProductionTechTreeLines |  | Unknown | Category: nonconst |
| TechTreePanel | GetSocietyTechTreeItems |  | Unknown | Category: nonconst |
| TechTreePanel | GetSocietyTechTreeLines |  | Unknown | Category: nonconst |
| TechTreePanel | ResetMilitaryView |  | void |  |
| TechTreePanel | ResetProductionView |  | void |  |
| TechTreePanel | ResetSocietyView |  | void |  |
| TechTreePanel | Self |  | TechTreePanel |  |
| Technology | AccessSelf |  | Technology | Category: const |
| Technology | AddToQueue | 1. Country | Command |  |
| Technology | AddToQueueWithUnlocks | 1. Country | Command |  |
| Technology | GetCategoryKey |  | CString | Category: nonconst |
| Technology | GetCategoryName |  | CString | Category: nonconst |
| Technology | GetCost | 1. Country | CFixedPoint | Category: nonconst |
| Technology | GetCostDesc | 1. Country | CString | Category: nonconst |
| Technology | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| Technology | GetDesc |  | CString | Category: nonconst |
| Technology | GetEra |  | Era | Category: nonconst |
| Technology | GetModifiersAsString |  | CString | Category: nonconst |
| Technology | GetName |  | CString | Category: nonconst |
| Technology | GetNameNoFormatting |  | CString | Category: nonconst |
| Technology | GetProgress | 1. Country | CFixedPoint | Category: nonconst |
| Technology | GetProgressPercentage | 1. Country | float | Category: nonconst |
| Technology | GetResearchQueuePosition | 1. Country | int32 | Category: nonconst |
| Technology | GetTexture |  | Unknown | Category: nonconst |
| Technology | GetTimeLeftDesc | 1. Country | CString | Category: nonconst |
| Technology | GetTooltip | 1. Country | CString | Category: nonconst |
| Technology | GetTooltipTag |  | CString | Category: nonconst |
| Technology | GetTooltipWithoutRequirements | 1. Country | CString | Category: nonconst |
| Technology | GetUnlocks | 1. Country | Unknown | Category: nonconst |
| Technology | HasResearchedTech | 1. Country | bool |  |
| Technology | IsBeingHighlighted |  | bool |  |
| Technology | IsBeingTutorialHighlighted |  | bool |  |
| Technology | IsInResearchQueue | 1. Country | bool |  |
| Technology | IsResearchable |  | bool |  |
| Technology | IsResearching | 1. Country | bool |  |
| Technology | IsValid |  | bool |  |
| Technology | MakeScope |  | Scope |  |
| Technology | PredictTimeLeftDesc | 1. Country | CString |  |
| Technology | PredictTimeLeftInQueueDesc | 1. Country | CString |  |
| Technology | RemoveFromQueue | 1. Country | Command |  |
| Technology | Research | 1. Country | Command |  |
| Technology | ResearchWithUnlocks | 1. Country | Command |  |
| Technology | Self |  | Technology |  |
| Technology | ShouldShow | 1. Country | bool |  |
| TechnologyUnlock | AccessSelf |  | TechnologyUnlock | Category: const |
| TechnologyUnlock | GetTexture |  | Unknown | Category: nonconst |
| TechnologyUnlock | GetTooltip |  | CString | Category: nonconst |
| TechnologyUnlock | HasFrame |  | bool |  |
| TechnologyUnlock | IsGroup |  | bool |  |
| TechnologyUnlock | Self |  | TechnologyUnlock |  |
| TerrainToolButton | AccessSelf |  | TerrainToolButton | Category: const |
| TerrainToolButton | IsSelected |  | bool |  |
| TerrainToolButton | Self |  | TerrainToolButton |  |
| TextureEntry | AccessSelf |  | TextureEntry | Category: const |
| TextureEntry | GetName |  | CString | Category: nonconst |
| TextureEntry | GetResolution |  | CString | Category: nonconst |
| TextureEntry | GetTexture |  | Unknown | Category: nonconst |
| TextureEntry | IsAvailable |  | bool |  |
| TextureEntry | OpenTextureViewer |  | void |  |
| TextureEntry | Self |  | TextureEntry |  |
| TextureImporter | AccessOutputEntries |  | Unknown | Category: const |
| TextureImporter | AccessSelf |  | TextureImporter | Category: const |
| TextureImporter | AddCustomResolution |  | void |  |
| TextureImporter | Cancel |  | void |  |
| TextureImporter | GetLastConversion |  | CString | Category: nonconst |
| TextureImporter | GetTextures |  | Unknown | Category: nonconst |
| TextureImporter | HasLastConversion |  | bool |  |
| TextureImporter | Import |  | void |  |
| TextureImporter | IsCustomResolution |  | bool |  |
| TextureImporter | IsImporting |  | bool |  |
| TextureImporter | Refresh |  | void |  |
| TextureImporter | RemoveCustomResolution |  | void |  |
| TextureImporter | Self |  | TextureImporter |  |
| TextureImporter | SetOutputScale | 1. CString | void |  |
| TextureImporter | SetResolution | 1. Unknown | void |  |
| TextureList | AccessSelf |  | TextureList | Category: const |
| TextureList | GetAutoUpdate |  | bool | Category: nonconst |
| TextureList | GetCurrentDirectory |  | CString | Category: nonconst |
| TextureList | GetDirectories |  | Unknown | Category: nonconst |
| TextureList | GetFilterString |  | CUTF8String | Category: nonconst |
| TextureList | GetTextures |  | Unknown | Category: nonconst |
| TextureList | GetTotalSize |  | uint64 | Category: nonconst |
| TextureList | GetTotalTextureCount |  | int32 | Category: nonconst |
| TextureList | GoToParentDirectory |  | void |  |
| TextureList | IsFlatView |  | bool |  |
| TextureList | Self |  | TextureList |  |
| TextureList | SetAutoUpdate | 1. bool | void |  |
| TextureList | SetFilterString |  | void |  |
| TextureList | SetFlatView | 1. bool | void |  |
| TextureList | SortByFormat |  | void |  |
| TextureList | SortByMipMaps |  | void |  |
| TextureList | SortByName |  | void |  |
| TextureList | SortByRefCount |  | void |  |
| TextureList | SortByResolution |  | void |  |
| TextureList | SortBySize |  | void |  |
| TextureList | UpdateTextureList |  | void |  |
| TextureListDirectory | AccessSelf |  | TextureListDirectory | Category: const |
| TextureListDirectory | GetMipMaps |  | int32 | Category: nonconst |
| TextureListDirectory | GetName |  | Unknown | Category: nonconst |
| TextureListDirectory | GetRefcount |  | int32 | Category: nonconst |
| TextureListDirectory | GetSize |  | uint64 | Category: nonconst |
| TextureListDirectory | GetSubDirectoryCount |  | int32 | Category: nonconst |
| TextureListDirectory | GetTextureCount |  | int32 | Category: nonconst |
| TextureListDirectory | Self |  | TextureListDirectory |  |
| TextureListTexture | AccessSelf |  | TextureListTexture | Category: const |
| TextureListTexture | GetFormat |  | CString | Category: nonconst |
| TextureListTexture | GetMipMaps |  | int32 | Category: nonconst |
| TextureListTexture | GetName |  | Unknown | Category: nonconst |
| TextureListTexture | GetRefcount |  | int32 | Category: nonconst |
| TextureListTexture | GetResolution |  | CString | Category: nonconst |
| TextureListTexture | GetSize |  | uint64 | Category: nonconst |
| TextureListTexture | Self |  | TextureListTexture |  |
| TextureNodeWindow | AccessSelf |  | TextureNodeWindow | Category: const |
| TextureNodeWindow | FileSelect |  | void |  |
| TextureNodeWindow | Filename |  | CString |  |
| TextureNodeWindow | Self |  | TextureNodeWindow |  |
| TextureNodeWindow | Texture |  | Unknown |  |
| TextureViewer | AccessSelf |  | TextureViewer | Category: const |
| TextureViewer | Fit |  | void |  |
| TextureViewer | GetAlpha |  | bool | Category: nonconst |
| TextureViewer | GetAutoFit |  | bool | Category: nonconst |
| TextureViewer | GetBlue |  | bool | Category: nonconst |
| TextureViewer | GetConstantBuffers |  | Unknown | Category: nonconst |
| TextureViewer | GetEffect |  | Unknown | Category: nonconst |
| TextureViewer | GetFlipV |  | bool | Category: nonconst |
| TextureViewer | GetGreen |  | bool | Category: nonconst |
| TextureViewer | GetPointSampling |  | bool | Category: nonconst |
| TextureViewer | GetRed |  | bool | Category: nonconst |
| TextureViewer | GetTexture |  | Unknown | Category: nonconst |
| TextureViewer | GetTextureSize |  | CVector2f | Category: nonconst |
| TextureViewer | GetTextureString |  | CString | Category: nonconst |
| TextureViewer | GetTextureZoom |  | CString | Category: nonconst |
| TextureViewer | GetToGamma |  | bool | Category: nonconst |
| TextureViewer | OriginalSize |  | void |  |
| TextureViewer | Self |  | TextureViewer |  |
| TextureViewer | SetAlpha | 1. bool | void |  |
| TextureViewer | SetAutoFit | 1. bool | void |  |
| TextureViewer | SetBlue | 1. bool | void |  |
| TextureViewer | SetFlipV | 1. bool | void |  |
| TextureViewer | SetGreen | 1. bool | void |  |
| TextureViewer | SetPointSampling | 1. bool | void |  |
| TextureViewer | SetRed | 1. bool | void |  |
| TextureViewer | SetToGamma | 1. bool | void |  |
| TextureViewer | ShowFileList |  | void |  |
| Theater | AccessSelf |  | Theater | Category: const |
| Theater | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| Theater | GetID |  | uint32 | Category: nonconst |
| Theater | GetName |  | CString | Category: nonconst |
| Theater | GetNumMobilizedUnitsInTheater |  | int32 | Category: nonconst |
| Theater | GetNumProvinces |  | int32 | Category: nonconst |
| Theater | GetOwner |  | Country | Category: nonconst |
| Theater | GetTooltipTag |  | CString | Category: nonconst |
| Theater | MakeScope |  | Scope |  |
| Theater | Self |  | Theater |  |
| Theme | AccessSelf |  | Theme | Category: const |
| Theme | CanBeSelected |  | bool |  |
| Theme | GetCanBeSelectedDesc |  | CString | Category: nonconst |
| Theme | GetCategory |  | ThemeCategory | Category: nonconst |
| Theme | GetDesc |  | CString | Category: nonconst |
| Theme | GetName |  | CString | Category: nonconst |
| Theme | GetRequiredDlc |  | Dlc | Category: nonconst |
| Theme | GetTooltipTag |  | CString | Category: nonconst |
| Theme | HasDlcRequirement |  | bool |  |
| Theme | IsNew |  | bool |  |
| Theme | IsSelected |  | bool |  |
| Theme | IsUseDynamicTheme |  | bool |  |
| Theme | MarkAsSeen |  | void |  |
| Theme | SelectSingleChoiceTheme |  | void |  |
| Theme | Self |  | Theme |  |
| Theme | ToggleMultipleChoiceTheme |  | void |  |
| ThemeBulkSelectionGroup | AccessSelf |  | ThemeBulkSelectionGroup | Category: const |
| ThemeBulkSelectionGroup | CanBeSelected |  | bool |  |
| ThemeBulkSelectionGroup | GetDesc |  | CString | Category: nonconst |
| ThemeBulkSelectionGroup | GetName |  | CString | Category: nonconst |
| ThemeBulkSelectionGroup | GetRequiredDlc |  | Dlc | Category: nonconst |
| ThemeBulkSelectionGroup | GetThemeListDesc |  | CString | Category: nonconst |
| ThemeBulkSelectionGroup | HasAvailableNewThemes |  | bool |  |
| ThemeBulkSelectionGroup | HasDlcRequirement |  | bool |  |
| ThemeBulkSelectionGroup | IsCustom |  | bool |  |
| ThemeBulkSelectionGroup | IsDynamic |  | bool |  |
| ThemeBulkSelectionGroup | IsSelected |  | bool |  |
| ThemeBulkSelectionGroup | IsSpecialGroupType |  | bool |  |
| ThemeBulkSelectionGroup | MarkThemesAsSeen |  | void |  |
| ThemeBulkSelectionGroup | Self |  | ThemeBulkSelectionGroup |  |
| ThemeCategory | AccessSelf |  | ThemeCategory | Category: const |
| ThemeCategory | GetDesc |  | CString | Category: nonconst |
| ThemeCategory | GetName |  | CString | Category: nonconst |
| ThemeCategory | GetSelectedSingleChoiceTheme |  | Theme | Category: nonconst |
| ThemeCategory | GetThemes |  | Unknown | Category: nonconst |
| ThemeCategory | HasAnyAvailableNewThemes |  | bool |  |
| ThemeCategory | OnSelectSingleChoiceTheme |  | void |  |
| ThemeCategory | Self |  | ThemeCategory |  |
| ThemeWindow | AccessSelf |  | ThemeWindow | Category: const |
| ThemeWindow | GetBulkSelectionGroups |  | Unknown | Category: nonconst |
| ThemeWindow | GetFormattedValue | 1. CString | CString | Category: nonconst |
| ThemeWindow | GetMultipleChoiceThemeCategories |  | Unknown | Category: nonconst |
| ThemeWindow | GetScrollbarMax | 1. CString | float | Category: nonconst |
| ThemeWindow | GetScrollbarMin | 1. CString | float | Category: nonconst |
| ThemeWindow | GetScrollbarStep | 1. CString | float | Category: nonconst |
| ThemeWindow | GetScrollbarValue | 1. CString | float | Category: nonconst |
| ThemeWindow | GetSelectedBulkSelectionGroup |  | ThemeBulkSelectionGroup | Category: nonconst |
| ThemeWindow | GetSingleChoiceThemeCategories |  | Unknown | Category: nonconst |
| ThemeWindow | HasAnyAvailableNewBulkGroups |  | bool |  |
| ThemeWindow | Hide |  | void |  |
| ThemeWindow | IsDawnOfWonderEnabled |  | bool |  |
| ThemeWindow | OnBulkGroupSelected |  | void |  |
| ThemeWindow | Save |  | void |  |
| ThemeWindow | SaveAndHide |  | void |  |
| ThemeWindow | ScrollbarOnValueChanged | 1. CString | void |  |
| ThemeWindow | Self |  | ThemeWindow |  |
| ThemeWindow | Show |  | void |  |
| ThemeWindow | ToggleDayNightEnableManualTime |  | void |  |
| ThemeWindow | ToggleDayNightEnableSyncLocalTime |  | void |  |
| ThemeWindow | ToggleDayNightEnabled |  | void |  |
| TickTaskData | AccessSelf |  | TickTaskData | Category: const |
| TickTaskData | GetAverageTime |  | int32 | Category: nonconst |
| TickTaskData | GetExecutionPriority |  | CString | Category: nonconst |
| TickTaskData | GetExecutionPriorityFrame |  | int32 | Category: nonconst |
| TickTaskData | GetExecutionRate |  | CString | Category: nonconst |
| TickTaskData | GetExecutionRateFrame |  | int32 | Category: nonconst |
| TickTaskData | GetHighestLockTime |  | int32 | Category: nonconst |
| TickTaskData | GetIndex |  | int32 | Category: nonconst |
| TickTaskData | GetName |  | CString | Category: nonconst |
| TickTaskData | GetTimesExecuted |  | int32 | Category: nonconst |
| TickTaskData | IsPersisted |  | bool |  |
| TickTaskData | OpenDetails |  | void |  |
| TickTaskData | Self |  | TickTaskData |  |
| TickTaskDebuggerView | AccessSelf |  | TickTaskDebuggerView | Category: const |
| TickTaskDebuggerView | GetGraphItems |  | Unknown | Category: nonconst |
| TickTaskDebuggerView | GetGraphLines |  | Unknown | Category: nonconst |
| TickTaskDebuggerView | Self |  | TickTaskDebuggerView |  |
| TickTaskDetailsView | AccessSelf |  | TickTaskDetailsView | Category: const |
| TickTaskDetailsView | GetTickTask |  | TickTaskData | Category: nonconst |
| TickTaskDetailsView | Self |  | TickTaskDetailsView |  |
| TickTaskGraphItem | AccessSelf |  | TickTaskGraphItem | Category: const |
| TickTaskGraphItem | GetKey |  | CString | Category: nonconst |
| TickTaskGraphItem | GetPosition |  | CVector2f | Category: nonconst |
| TickTaskGraphItem | GetTickTask |  | TickTaskData | Category: nonconst |
| TickTaskGraphItem | GetTooltip |  | CString | Category: nonconst |
| TickTaskGraphItem | Self |  | TickTaskGraphItem |  |
| TickTaskGraphLine | AccessSelf |  | TickTaskGraphLine | Category: const |
| TickTaskGraphLine | GetFrom |  | CVector2f | Category: nonconst |
| TickTaskGraphLine | GetLineFrom |  | CVector2f | Category: nonconst |
| TickTaskGraphLine | GetLineTo |  | CVector2f | Category: nonconst |
| TickTaskGraphLine | GetPoints |  | Unknown | Category: nonconst |
| TickTaskGraphLine | GetPointsInContainer |  | Unknown | Category: nonconst |
| TickTaskGraphLine | GetPosition |  | CVector2f | Category: nonconst |
| TickTaskGraphLine | GetSize |  | CVector2f | Category: nonconst |
| TickTaskGraphLine | GetTo |  | CVector2f | Category: nonconst |
| TickTaskGraphLine | IsFromNodeVirtual |  | bool |  |
| TickTaskGraphLine | IsToNodeVirtual |  | bool |  |
| TickTaskGraphLine | Self |  | TickTaskGraphLine |  |
| TickTaskListView | AccessSelf |  | TickTaskListView | Category: const |
| TickTaskListView | GetTickTasks |  | Unknown | Category: nonconst |
| TickTaskListView | Self |  | TickTaskListView |  |
| TickTaskListView | Sort | 1. CString | void |  |
| TimeKeeper | AccessSelf |  | TimeKeeper | Category: const |
| TimeKeeper | CanAnyoneUnpause |  | bool |  |
| TimeKeeper | CanDecreaseGameSpeed |  | bool |  |
| TimeKeeper | CanIncreaseGameSpeed |  | bool |  |
| TimeKeeper | CanSetGameSpeed |  | bool |  |
| TimeKeeper | CanTogglePause |  | bool |  |
| TimeKeeper | DecreaseGameSpeed |  | void |  |
| TimeKeeper | GetCurrentDateWithDiff | 1. Unknown | CString | Category: nonconst |
| TimeKeeper | GetDayOfWeek |  | CString | Category: nonconst |
| TimeKeeper | GetDecreaseSpeedTooltip |  | CString | Category: nonconst |
| TimeKeeper | GetGameSpeed |  | int32 | Category: nonconst |
| TimeKeeper | GetGameSpeedFrame |  | int32 | Category: nonconst |
| TimeKeeper | GetIncreaseSpeedTooltip |  | CString | Category: nonconst |
| TimeKeeper | GetPausedBy |  | CString | Category: nonconst |
| TimeKeeper | GetPausedText |  | CString | Category: nonconst |
| TimeKeeper | GetProgressOfWeek |  | int32 | Category: nonconst |
| TimeKeeper | GetTickOfDay |  | int32 | Category: nonconst |
| TimeKeeper | GetTimeAnyoneUnpause |  | int32 | Category: nonconst |
| TimeKeeper | GetTimeOfDay |  | CString | Category: nonconst |
| TimeKeeper | GetTogglePauseTooltip |  | CString | Category: nonconst |
| TimeKeeper | IncreaseGameSpeed |  | void |  |
| TimeKeeper | IsPaused |  | bool |  |
| TimeKeeper | IsPausedByMe |  | bool |  |
| TimeKeeper | Self |  | TimeKeeper |  |
| TimeKeeper | SetGameSpeed | 1. int32 | void |  |
| TimeKeeper | TogglePause |  | void |  |
| TimedModifier | AccessSelf |  | TimedModifier | Category: const |
| TimedModifier | GetDesc |  | CString | Category: nonconst |
| TimedModifier | GetIcon |  | Unknown | Category: nonconst |
| TimedModifier | GetName |  | CString | Category: nonconst |
| TimedModifier | GetOneLineDesc |  | CString | Category: nonconst |
| TimedModifier | GetRemainingDuration |  | CString | Category: nonconst |
| TimedModifier | GetTooltip |  | CString | Category: nonconst |
| TimedModifier | GetTooltipTag |  | CString | Category: nonconst |
| TimedModifier | IsDecaying |  | bool |  |
| TimedModifier | Self |  | TimedModifier |  |
| TimelineKeyframe | AccessSelf |  | TimelineKeyframe | Category: const |
| TimelineKeyframe | IsHovered |  | bool |  |
| TimelineKeyframe | IsSelected |  | bool |  |
| TimelineKeyframe | KeyframeColor |  | CVector4f |  |
| TimelineKeyframe | Label |  | CString |  |
| TimelineKeyframe | Self |  | TimelineKeyframe |  |
| TimelineKeyframe | SetHovered | 1. Unknown | void |  |
| TimelineKeyframe | SetSelected | 1. Unknown | void |  |
| TimelineKeyframe | TimePoint |  | float |  |
| ToastMessageHandler | AccessSelf |  | ToastMessageHandler | Category: const |
| ToastMessageHandler | DismissMessage |  | void |  |
| ToastMessageHandler | GetMessageItem |  | PlayerMessageItem | Category: nonconst |
| ToastMessageHandler | HasMessage |  | bool |  |
| ToastMessageHandler | Self |  | ToastMessageHandler |  |
| ToastMessageHandler | StartDelayingMessage |  | void |  |
| ToastMessageHandler | StopDelayingMessage |  | void |  |
| ToolDialog | AccessSelf |  | ToolDialog | Category: const |
| ToolDialog | Buttons |  | Unknown |  |
| ToolDialog | Cancel |  | void |  |
| ToolDialog | Close |  | void |  |
| ToolDialog | Confirm |  | void |  |
| ToolDialog | Self |  | ToolDialog |  |
| ToolDialog | Title |  | CString |  |
| ToolDialogButton | AccessSelf |  | ToolDialogButton | Category: const |
| ToolDialogButton | OnClick |  | bool |  |
| ToolDialogButton | Self |  | ToolDialogButton |  |
| ToolDialogButton | Text |  | CString |  |
| ToolMessageDialog | AccessSelf |  | ToolMessageDialog | Category: const |
| ToolMessageDialog | IsError |  | bool |  |
| ToolMessageDialog | IsInfo |  | bool |  |
| ToolMessageDialog | IsWarning |  | bool |  |
| ToolMessageDialog | Message |  | CString |  |
| ToolMessageDialog | Self |  | ToolMessageDialog |  |
| ToolProgressDialog | AccessSelf |  | ToolProgressDialog | Category: const |
| ToolProgressDialog | GetProgress |  | float | Category: nonconst |
| ToolProgressDialog | Self |  | ToolProgressDialog |  |
| ToolProperty | AccessActions |  | Unknown | Category: const |
| ToolProperty | AccessSelf |  | ToolProperty | Category: const |
| ToolProperty | GetActions |  | Unknown | Category: nonconst |
| ToolProperty | GetColor |  | CVector4f | Category: nonconst |
| ToolProperty | GetLabel |  | CString | Category: nonconst |
| ToolProperty | GetTooltip |  | CString | Category: nonconst |
| ToolProperty | GetTooltipWithLabel |  | CString | Category: nonconst |
| ToolProperty | HasCheckbox |  | bool |  |
| ToolProperty | HasDefaultValue |  | bool |  |
| ToolProperty | IsActive |  | bool |  |
| ToolProperty | IsSelected |  | bool |  |
| ToolProperty | IsValueDefault |  | bool |  |
| ToolProperty | IsVisible |  | bool |  |
| ToolProperty | Self |  | ToolProperty |  |
| ToolProperty | SetSelected | 1. bool | void |  |
| ToolProperty | SetValueToDefault |  | void |  |
| ToolProperty2SearchList | AccessSelf |  | ToolProperty2SearchList | Category: const |
| ToolProperty2SearchList | AreSelectButtonsVisible |  | bool |  |
| ToolProperty2SearchList | GetSelectedLabel |  | CUTF8String | Category: nonconst |
| ToolProperty2SearchList | GetSelectedValueColor |  | CVector4f | Category: nonconst |
| ToolProperty2SearchList | HasNext |  | bool |  |
| ToolProperty2SearchList | HasPrev |  | bool |  |
| ToolProperty2SearchList | NextEntryTooltip |  | CUTF8String |  |
| ToolProperty2SearchList | OpenSearchList |  | void |  |
| ToolProperty2SearchList | PrevEntryTooltip |  | CUTF8String |  |
| ToolProperty2SearchList | SelectNext |  | void |  |
| ToolProperty2SearchList | SelectPrev |  | void |  |
| ToolProperty2SearchList | Self |  | ToolProperty2SearchList |  |
| ToolPropertyAction | AccessSelf |  | ToolPropertyAction | Category: const |
| ToolPropertyAction | Execute |  | void |  |
| ToolPropertyAction | GetIcon |  | Unknown | Category: nonconst |
| ToolPropertyAction | GetTooltip |  | CString | Category: nonconst |
| ToolPropertyAction | IsAvailable |  | bool |  |
| ToolPropertyAction | IsButton |  | bool |  |
| ToolPropertyAction | IsVisible |  | bool |  |
| ToolPropertyAction | Self |  | ToolPropertyAction |  |
| ToolPropertyBool | AccessSelf |  | ToolPropertyBool | Category: const |
| ToolPropertyBool | IsEnabled |  | bool |  |
| ToolPropertyBool | Self |  | ToolPropertyBool |  |
| ToolPropertyBool | SetEnabled | 1. bool | void |  |
| ToolPropertyCColor | AccessSelf |  | ToolPropertyCColor | Category: const |
| ToolPropertyCColor | GetCColor |  | CVector4f | Category: nonconst |
| ToolPropertyCColor | Self |  | ToolPropertyCColor |  |
| ToolPropertyCColor | SetCColor |  | void |  |
| ToolPropertyCString | AccessSelf |  | ToolPropertyCString | Category: const |
| ToolPropertyCString | GetString |  | CString | Category: nonconst |
| ToolPropertyCString | Self |  | ToolPropertyCString |  |
| ToolPropertyCString | SetString |  | void |  |
| ToolPropertyColor | AccessSelf |  | ToolPropertyColor | Category: const |
| ToolPropertyColor | GetColor |  | CVector4f | Category: nonconst |
| ToolPropertyColor | Self |  | ToolPropertyColor |  |
| ToolPropertyColor | SetColor |  | void |  |
| ToolPropertyCurve | AccessSelf |  | ToolPropertyCurve | Category: const |
| ToolPropertyCurve | GetPreviewTexture | 1. int32 2. int32 3. int32 4. int32 | Unknown | Category: nonconst |
| ToolPropertyCurve | HasCurveEditor |  | bool |  |
| ToolPropertyCurve | OpenCurveEditor |  | void |  |
| ToolPropertyCurve | ResetCurve |  | void |  |
| ToolPropertyCurve | Self |  | ToolPropertyCurve |  |
| ToolPropertyCurve | SetCurve | 1. Unknown | void |  |
| ToolPropertyCurve | ToggleCurveEditor |  | void |  |
| ToolPropertyFloat | AccessSelf |  | ToolPropertyFloat | Category: const |
| ToolPropertyFloat | GetFloat |  | float | Category: nonconst |
| ToolPropertyFloat | GetValueColor |  | CVector4f | Category: nonconst |
| ToolPropertyFloat | Self |  | ToolPropertyFloat |  |
| ToolPropertyFloat | SetFloat |  | void |  |
| ToolPropertyInt | AccessSelf |  | ToolPropertyInt | Category: const |
| ToolPropertyInt | GetInt |  | int32 | Category: nonconst |
| ToolPropertyInt | GetValueColor |  | CVector4f | Category: nonconst |
| ToolPropertyInt | Self |  | ToolPropertyInt |  |
| ToolPropertyInt | SetInt |  | void |  |
| ToolPropertyInt16 | AccessSelf |  | ToolPropertyInt16 | Category: const |
| ToolPropertyInt16 | GetInt16 |  | int16 | Category: nonconst |
| ToolPropertyInt16 | GetValueColor |  | CVector4f | Category: nonconst |
| ToolPropertyInt16 | Self |  | ToolPropertyInt16 |  |
| ToolPropertyInt16 | SetInt16 |  | void |  |
| ToolPropertyInt8 | AccessSelf |  | ToolPropertyInt8 | Category: const |
| ToolPropertyInt8 | GetInt8 |  | int8 | Category: nonconst |
| ToolPropertyInt8 | GetValueColor |  | CVector4f | Category: nonconst |
| ToolPropertyInt8 | Self |  | ToolPropertyInt8 |  |
| ToolPropertyInt8 | SetInt8 |  | void |  |
| ToolPropertyList | AccessSelf |  | ToolPropertyList | Category: const |
| ToolPropertyList | GetColor |  | CVector4f | Category: nonconst |
| ToolPropertyList | GetLabel |  | CString | Category: nonconst |
| ToolPropertyList | IsExpanded |  | bool |  |
| ToolPropertyList | Self |  | ToolPropertyList |  |
| ToolPropertyList | SetExpanded | 1. bool | void |  |
| ToolPropertySearchList | AccessSelf |  | ToolPropertySearchList | Category: const |
| ToolPropertySearchList | GetSelectedText |  | CUTF8String | Category: nonconst |
| ToolPropertySearchList | GetSelectedValueColor |  | CVector4f | Category: nonconst |
| ToolPropertySearchList | OpenSearchList |  | void |  |
| ToolPropertySearchList | Self |  | ToolPropertySearchList |  |
| ToolPropertyString | AccessSelf |  | ToolPropertyString | Category: const |
| ToolPropertyString | GetString |  | CUTF8String | Category: nonconst |
| ToolPropertyString | Self |  | ToolPropertyString |  |
| ToolPropertyString | SetString |  | void |  |
| ToolPropertyUint | AccessSelf |  | ToolPropertyUint | Category: const |
| ToolPropertyUint | GetUint |  | uint32 | Category: nonconst |
| ToolPropertyUint | GetValueColor |  | CVector4f | Category: nonconst |
| ToolPropertyUint | Self |  | ToolPropertyUint |  |
| ToolPropertyUint | SetUint |  | void |  |
| ToolPropertyUint16 | AccessSelf |  | ToolPropertyUint16 | Category: const |
| ToolPropertyUint16 | GetUint16 |  | uint16 | Category: nonconst |
| ToolPropertyUint16 | GetValueColor |  | CVector4f | Category: nonconst |
| ToolPropertyUint16 | Self |  | ToolPropertyUint16 |  |
| ToolPropertyUint16 | SetUint16 |  | void |  |
| ToolPropertyUint8 | AccessSelf |  | ToolPropertyUint8 | Category: const |
| ToolPropertyUint8 | GetUint8 |  | uint8 | Category: nonconst |
| ToolPropertyUint8 | GetValueColor |  | CVector4f | Category: nonconst |
| ToolPropertyUint8 | Self |  | ToolPropertyUint8 |  |
| ToolPropertyUint8 | SetUint8 |  | void |  |
| ToolPropertyUndoableSearchList | AccessSelf |  | ToolPropertyUndoableSearchList | Category: const |
| ToolPropertyUndoableSearchList | AreSelectButtonsVisible |  | bool |  |
| ToolPropertyUndoableSearchList | GetSelectedText |  | CUTF8String | Category: nonconst |
| ToolPropertyUndoableSearchList | GetSelectedValueColor |  | CVector4f | Category: nonconst |
| ToolPropertyUndoableSearchList | HasNext |  | bool |  |
| ToolPropertyUndoableSearchList | HasPrev |  | bool |  |
| ToolPropertyUndoableSearchList | NextEntryTooltip |  | CString |  |
| ToolPropertyUndoableSearchList | OpenSearchList |  | void |  |
| ToolPropertyUndoableSearchList | PrevEntryTooltip |  | CString |  |
| ToolPropertyUndoableSearchList | SelectNext |  | void |  |
| ToolPropertyUndoableSearchList | SelectPrev |  | void |  |
| ToolPropertyUndoableSearchList | Self |  | ToolPropertyUndoableSearchList |  |
| ToolPropertyVec1fPercent | AccessSelf |  | ToolPropertyVec1fPercent | Category: const |
| ToolPropertyVec1fPercent | GetValueColor |  | CVector4f | Category: nonconst |
| ToolPropertyVec1fPercent | GetX |  | CString | Category: nonconst |
| ToolPropertyVec1fPercent | Self |  | ToolPropertyVec1fPercent |  |
| ToolPropertyVec1fPercent | SetX |  | void |  |
| ToolPropertyVec2f | AccessSelf |  | ToolPropertyVec2f | Category: const |
| ToolPropertyVec2f | GetValueColor |  | CVector4f | Category: nonconst |
| ToolPropertyVec2f | GetX |  | CString | Category: nonconst |
| ToolPropertyVec2f | GetY |  | CString | Category: nonconst |
| ToolPropertyVec2f | Self |  | ToolPropertyVec2f |  |
| ToolPropertyVec2f | SetX |  | void |  |
| ToolPropertyVec2f | SetY |  | void |  |
| ToolPropertyVec2fPercent | AccessSelf |  | ToolPropertyVec2fPercent | Category: const |
| ToolPropertyVec2fPercent | GetValueColor |  | CVector4f | Category: nonconst |
| ToolPropertyVec2fPercent | GetX |  | CString | Category: nonconst |
| ToolPropertyVec2fPercent | GetY |  | CString | Category: nonconst |
| ToolPropertyVec2fPercent | Self |  | ToolPropertyVec2fPercent |  |
| ToolPropertyVec2fPercent | SetX |  | void |  |
| ToolPropertyVec2fPercent | SetY |  | void |  |
| ToolPropertyVec2i | AccessSelf |  | ToolPropertyVec2i | Category: const |
| ToolPropertyVec2i | GetValueColor |  | CVector4f | Category: nonconst |
| ToolPropertyVec2i | GetX |  | CString | Category: nonconst |
| ToolPropertyVec2i | GetY |  | CString | Category: nonconst |
| ToolPropertyVec2i | Self |  | ToolPropertyVec2i |  |
| ToolPropertyVec2i | SetX |  | void |  |
| ToolPropertyVec2i | SetY |  | void |  |
| ToolPropertyVec3f | AccessSelf |  | ToolPropertyVec3f | Category: const |
| ToolPropertyVec3f | GetValue |  | CVector3f | Category: nonconst |
| ToolPropertyVec3f | GetValueColor |  | CVector4f | Category: nonconst |
| ToolPropertyVec3f | GetX |  | CString | Category: nonconst |
| ToolPropertyVec3f | GetY |  | CString | Category: nonconst |
| ToolPropertyVec3f | GetZ |  | CString | Category: nonconst |
| ToolPropertyVec3f | Self |  | ToolPropertyVec3f |  |
| ToolPropertyVec3f | SetValueFromColor |  | void |  |
| ToolPropertyVec3f | SetX |  | void |  |
| ToolPropertyVec3f | SetY |  | void |  |
| ToolPropertyVec3f | SetZ |  | void |  |
| ToolPropertyVec3i | AccessSelf |  | ToolPropertyVec3i | Category: const |
| ToolPropertyVec3i | GetValue |  | CVector3i | Category: nonconst |
| ToolPropertyVec3i | GetValueColor |  | CVector4f | Category: nonconst |
| ToolPropertyVec3i | GetX |  | CString | Category: nonconst |
| ToolPropertyVec3i | GetY |  | CString | Category: nonconst |
| ToolPropertyVec3i | GetZ |  | CString | Category: nonconst |
| ToolPropertyVec3i | Self |  | ToolPropertyVec3i |  |
| ToolPropertyVec3i | SetValueFromColor |  | void |  |
| ToolPropertyVec3i | SetX |  | void |  |
| ToolPropertyVec3i | SetY |  | void |  |
| ToolPropertyVec3i | SetZ |  | void |  |
| ToolPropertyVec4i | AccessSelf |  | ToolPropertyVec4i | Category: const |
| ToolPropertyVec4i | GetValue |  | CVector4i | Category: nonconst |
| ToolPropertyVec4i | GetValueColor |  | CVector4f | Category: nonconst |
| ToolPropertyVec4i | GetW |  | CString | Category: nonconst |
| ToolPropertyVec4i | GetX |  | CString | Category: nonconst |
| ToolPropertyVec4i | GetY |  | CString | Category: nonconst |
| ToolPropertyVec4i | GetZ |  | CString | Category: nonconst |
| ToolPropertyVec4i | Self |  | ToolPropertyVec4i |  |
| ToolPropertyVec4i | SetValueFromColor |  | void |  |
| ToolPropertyVec4i | SetW |  | void |  |
| ToolPropertyVec4i | SetX |  | void |  |
| ToolPropertyVec4i | SetY |  | void |  |
| ToolPropertyVec4i | SetZ |  | void |  |
| ToolsPropertyDraggableValueFloat | AccessSelf |  | ToolsPropertyDraggableValueFloat | Category: const |
| ToolsPropertyDraggableValueFloat | GetValidator |  | Unknown | Category: nonconst |
| ToolsPropertyDraggableValueFloat | GetValue |  | float | Category: nonconst |
| ToolsPropertyDraggableValueFloat | OnMouseDragFinished |  | void |  |
| ToolsPropertyDraggableValueFloat | OnMouseDragStarted |  | void |  |
| ToolsPropertyDraggableValueFloat | Self |  | ToolsPropertyDraggableValueFloat |  |
| ToolsPropertyDraggableValueFloat | SetValueFromText |  | void |  |
| ToolsPropertyDraggableValueFloat | UpdateValue |  | void |  |
| ToolsPropertyDraggableValueInt | AccessSelf |  | ToolsPropertyDraggableValueInt | Category: const |
| ToolsPropertyDraggableValueInt | GetValidator |  | Unknown | Category: nonconst |
| ToolsPropertyDraggableValueInt | GetValue |  | int32 | Category: nonconst |
| ToolsPropertyDraggableValueInt | OnMouseDragFinished |  | void |  |
| ToolsPropertyDraggableValueInt | OnMouseDragStarted |  | void |  |
| ToolsPropertyDraggableValueInt | Self |  | ToolsPropertyDraggableValueInt |  |
| ToolsPropertyDraggableValueInt | SetValueFromText |  | void |  |
| ToolsPropertyDraggableValueInt | UpdateValue |  | void |  |
| ToolsPropertyDraggableValueVector2f | AccessSelf |  | ToolsPropertyDraggableValueVector2f | Category: const |
| ToolsPropertyDraggableValueVector2f | GetValidatorX |  | Unknown | Category: nonconst |
| ToolsPropertyDraggableValueVector2f | GetValidatorY |  | Unknown | Category: nonconst |
| ToolsPropertyDraggableValueVector2f | GetX |  | CString | Category: nonconst |
| ToolsPropertyDraggableValueVector2f | GetY |  | CString | Category: nonconst |
| ToolsPropertyDraggableValueVector2f | OnMouseDragFinishedX |  | void |  |
| ToolsPropertyDraggableValueVector2f | OnMouseDragFinishedY |  | void |  |
| ToolsPropertyDraggableValueVector2f | OnMouseDragStartedX |  | void |  |
| ToolsPropertyDraggableValueVector2f | OnMouseDragStartedY |  | void |  |
| ToolsPropertyDraggableValueVector2f | Self |  | ToolsPropertyDraggableValueVector2f |  |
| ToolsPropertyDraggableValueVector2f | SetX |  | void |  |
| ToolsPropertyDraggableValueVector2f | SetY |  | void |  |
| ToolsPropertyDraggableValueVector2f | UpdateValueX |  | void |  |
| ToolsPropertyDraggableValueVector2f | UpdateValueY |  | void |  |
| ToolsPropertyDraggableValueVector2i | AccessSelf |  | ToolsPropertyDraggableValueVector2i | Category: const |
| ToolsPropertyDraggableValueVector2i | GetValidatorX |  | Unknown | Category: nonconst |
| ToolsPropertyDraggableValueVector2i | GetValidatorY |  | Unknown | Category: nonconst |
| ToolsPropertyDraggableValueVector2i | GetX |  | CString | Category: nonconst |
| ToolsPropertyDraggableValueVector2i | GetY |  | CString | Category: nonconst |
| ToolsPropertyDraggableValueVector2i | OnMouseDragFinishedX |  | void |  |
| ToolsPropertyDraggableValueVector2i | OnMouseDragFinishedY |  | void |  |
| ToolsPropertyDraggableValueVector2i | OnMouseDragStartedX |  | void |  |
| ToolsPropertyDraggableValueVector2i | OnMouseDragStartedY |  | void |  |
| ToolsPropertyDraggableValueVector2i | Self |  | ToolsPropertyDraggableValueVector2i |  |
| ToolsPropertyDraggableValueVector2i | SetX |  | void |  |
| ToolsPropertyDraggableValueVector2i | SetY |  | void |  |
| ToolsPropertyDraggableValueVector2i | UpdateValueX |  | void |  |
| ToolsPropertyDraggableValueVector2i | UpdateValueY |  | void |  |
| ToolsPropertyDraggableValueVector3f | AccessSelf |  | ToolsPropertyDraggableValueVector3f | Category: const |
| ToolsPropertyDraggableValueVector3f | GetValidatorX |  | Unknown | Category: nonconst |
| ToolsPropertyDraggableValueVector3f | GetValidatorY |  | Unknown | Category: nonconst |
| ToolsPropertyDraggableValueVector3f | GetValidatorZ |  | Unknown | Category: nonconst |
| ToolsPropertyDraggableValueVector3f | GetX |  | CString | Category: nonconst |
| ToolsPropertyDraggableValueVector3f | GetY |  | CString | Category: nonconst |
| ToolsPropertyDraggableValueVector3f | GetZ |  | CString | Category: nonconst |
| ToolsPropertyDraggableValueVector3f | OnMouseDragFinishedX |  | void |  |
| ToolsPropertyDraggableValueVector3f | OnMouseDragFinishedY |  | void |  |
| ToolsPropertyDraggableValueVector3f | OnMouseDragFinishedZ |  | void |  |
| ToolsPropertyDraggableValueVector3f | OnMouseDragStartedX |  | void |  |
| ToolsPropertyDraggableValueVector3f | OnMouseDragStartedY |  | void |  |
| ToolsPropertyDraggableValueVector3f | OnMouseDragStartedZ |  | void |  |
| ToolsPropertyDraggableValueVector3f | Self |  | ToolsPropertyDraggableValueVector3f |  |
| ToolsPropertyDraggableValueVector3f | SetX |  | void |  |
| ToolsPropertyDraggableValueVector3f | SetY |  | void |  |
| ToolsPropertyDraggableValueVector3f | SetZ |  | void |  |
| ToolsPropertyDraggableValueVector3f | UpdateValueX |  | void |  |
| ToolsPropertyDraggableValueVector3f | UpdateValueY |  | void |  |
| ToolsPropertyDraggableValueVector3f | UpdateValueZ |  | void |  |
| ToolsPropertyDraggableValueVector3i | AccessSelf |  | ToolsPropertyDraggableValueVector3i | Category: const |
| ToolsPropertyDraggableValueVector3i | GetValidatorX |  | Unknown | Category: nonconst |
| ToolsPropertyDraggableValueVector3i | GetValidatorY |  | Unknown | Category: nonconst |
| ToolsPropertyDraggableValueVector3i | GetValidatorZ |  | Unknown | Category: nonconst |
| ToolsPropertyDraggableValueVector3i | GetX |  | CString | Category: nonconst |
| ToolsPropertyDraggableValueVector3i | GetY |  | CString | Category: nonconst |
| ToolsPropertyDraggableValueVector3i | GetZ |  | CString | Category: nonconst |
| ToolsPropertyDraggableValueVector3i | OnMouseDragFinishedX |  | void |  |
| ToolsPropertyDraggableValueVector3i | OnMouseDragFinishedY |  | void |  |
| ToolsPropertyDraggableValueVector3i | OnMouseDragFinishedZ |  | void |  |
| ToolsPropertyDraggableValueVector3i | OnMouseDragStartedX |  | void |  |
| ToolsPropertyDraggableValueVector3i | OnMouseDragStartedY |  | void |  |
| ToolsPropertyDraggableValueVector3i | OnMouseDragStartedZ |  | void |  |
| ToolsPropertyDraggableValueVector3i | Self |  | ToolsPropertyDraggableValueVector3i |  |
| ToolsPropertyDraggableValueVector3i | SetX |  | void |  |
| ToolsPropertyDraggableValueVector3i | SetY |  | void |  |
| ToolsPropertyDraggableValueVector3i | SetZ |  | void |  |
| ToolsPropertyDraggableValueVector3i | UpdateValueX |  | void |  |
| ToolsPropertyDraggableValueVector3i | UpdateValueY |  | void |  |
| ToolsPropertyDraggableValueVector3i | UpdateValueZ |  | void |  |
| ToolsPropertyDraggableValueVector4i | AccessSelf |  | ToolsPropertyDraggableValueVector4i | Category: const |
| ToolsPropertyDraggableValueVector4i | GetValidatorW |  | Unknown | Category: nonconst |
| ToolsPropertyDraggableValueVector4i | GetValidatorX |  | Unknown | Category: nonconst |
| ToolsPropertyDraggableValueVector4i | GetValidatorY |  | Unknown | Category: nonconst |
| ToolsPropertyDraggableValueVector4i | GetValidatorZ |  | Unknown | Category: nonconst |
| ToolsPropertyDraggableValueVector4i | GetW |  | CString | Category: nonconst |
| ToolsPropertyDraggableValueVector4i | GetX |  | CString | Category: nonconst |
| ToolsPropertyDraggableValueVector4i | GetY |  | CString | Category: nonconst |
| ToolsPropertyDraggableValueVector4i | GetZ |  | CString | Category: nonconst |
| ToolsPropertyDraggableValueVector4i | OnMouseDragFinishedW |  | void |  |
| ToolsPropertyDraggableValueVector4i | OnMouseDragFinishedX |  | void |  |
| ToolsPropertyDraggableValueVector4i | OnMouseDragFinishedY |  | void |  |
| ToolsPropertyDraggableValueVector4i | OnMouseDragFinishedZ |  | void |  |
| ToolsPropertyDraggableValueVector4i | OnMouseDragStartedW |  | void |  |
| ToolsPropertyDraggableValueVector4i | OnMouseDragStartedX |  | void |  |
| ToolsPropertyDraggableValueVector4i | OnMouseDragStartedY |  | void |  |
| ToolsPropertyDraggableValueVector4i | OnMouseDragStartedZ |  | void |  |
| ToolsPropertyDraggableValueVector4i | Self |  | ToolsPropertyDraggableValueVector4i |  |
| ToolsPropertyDraggableValueVector4i | SetW |  | void |  |
| ToolsPropertyDraggableValueVector4i | SetX |  | void |  |
| ToolsPropertyDraggableValueVector4i | SetY |  | void |  |
| ToolsPropertyDraggableValueVector4i | SetZ |  | void |  |
| ToolsPropertyDraggableValueVector4i | UpdateValueW |  | void |  |
| ToolsPropertyDraggableValueVector4i | UpdateValueX |  | void |  |
| ToolsPropertyDraggableValueVector4i | UpdateValueY |  | void |  |
| ToolsPropertyDraggableValueVector4i | UpdateValueZ |  | void |  |
| ToolsPropertyPath | AccessSelf |  | ToolsPropertyPath | Category: const |
| ToolsPropertyPath | GetPathFontColor |  | CVector4f | Category: nonconst |
| ToolsPropertyPath | GetPathValue |  | CString | Category: nonconst |
| ToolsPropertyPath | GetTooltipText |  | CString | Category: nonconst |
| ToolsPropertyPath | OpenFileDialog |  | void |  |
| ToolsPropertyPath | Self |  | ToolsPropertyPath |  |
| ToolsPropertyPath | SetPathFromText |  | void |  |
| ToolsPropertyRangedValueFloat | AccessSelf |  | ToolsPropertyRangedValueFloat | Category: const |
| ToolsPropertyRangedValueFloat | GetMax |  | float | Category: nonconst |
| ToolsPropertyRangedValueFloat | GetMin |  | float | Category: nonconst |
| ToolsPropertyRangedValueFloat | GetStep |  | float | Category: nonconst |
| ToolsPropertyRangedValueFloat | GetValue |  | float | Category: nonconst |
| ToolsPropertyRangedValueFloat | GetWheelStep |  | float | Category: nonconst |
| ToolsPropertyRangedValueFloat | OnSetValueEnd | 1. PdxGuiWidget | void |  |
| ToolsPropertyRangedValueFloat | OnSetValueStart | 1. PdxGuiWidget | void |  |
| ToolsPropertyRangedValueFloat | Self |  | ToolsPropertyRangedValueFloat |  |
| ToolsPropertyRangedValueFloat | SetValue |  | void |  |
| ToolsPropertyRangedValueFloat | SetValueFromText | 1. Unknown | void |  |
| ToolsPropertyRangedValueInt | AccessSelf |  | ToolsPropertyRangedValueInt | Category: const |
| ToolsPropertyRangedValueInt | GetMax |  | int32 | Category: nonconst |
| ToolsPropertyRangedValueInt | GetMin |  | int32 | Category: nonconst |
| ToolsPropertyRangedValueInt | GetStep |  | int32 | Category: nonconst |
| ToolsPropertyRangedValueInt | GetValue |  | int32 | Category: nonconst |
| ToolsPropertyRangedValueInt | GetWheelStep |  | int32 | Category: nonconst |
| ToolsPropertyRangedValueInt | OnSetValueEnd | 1. PdxGuiWidget | void |  |
| ToolsPropertyRangedValueInt | OnSetValueStart | 1. PdxGuiWidget | void |  |
| ToolsPropertyRangedValueInt | Self |  | ToolsPropertyRangedValueInt |  |
| ToolsPropertyRangedValueInt | SetValue |  | void |  |
| ToolsPropertyRangedValueInt | SetValueFromText | 1. Unknown | void |  |
| ToolsPropertyTextureStringValue | AccessSelf |  | ToolsPropertyTextureStringValue | Category: const |
| ToolsPropertyTextureStringValue | GetTexture |  | Unknown | Category: nonconst |
| ToolsPropertyTextureStringValue | GetTexturePath |  | CString | Category: nonconst |
| ToolsPropertyTextureStringValue | SelectTexture |  | void |  |
| ToolsPropertyTextureStringValue | Self |  | ToolsPropertyTextureStringValue |  |
| ToolsPropertyTextureStringValue | SetValueFromText |  | void |  |
| ToolsPropertyTextureValue | AccessSelf |  | ToolsPropertyTextureValue | Category: const |
| ToolsPropertyTextureValue | GetTexture |  | Unknown | Category: nonconst |
| ToolsPropertyTextureValue | GetTexturePath |  | CString | Category: nonconst |
| ToolsPropertyTextureValue | SelectTexture |  | void |  |
| ToolsPropertyTextureValue | Self |  | ToolsPropertyTextureValue |  |
| ToolsPropertyTextureValue | SetValueFromText |  | void |  |
| ToolsPropertyValueList | AccessSelf |  | ToolsPropertyValueList | Category: const |
| ToolsPropertyValueList | AddItem |  | void |  |
| ToolsPropertyValueList | CanAddOrRemoveItems |  | bool |  |
| ToolsPropertyValueList | RemoveItem | 1. int32 | void |  |
| ToolsPropertyValueList | Self |  | ToolsPropertyValueList |  |
| ToolsPropertyValueListEntry | AccessSelf |  | ToolsPropertyValueListEntry | Category: const |
| ToolsPropertyValueListEntry | GetIndex |  | int32 | Category: nonconst |
| ToolsPropertyValueListEntry | GetLabel |  | CString | Category: nonconst |
| ToolsPropertyValueListEntry | HasLabel |  | bool |  |
| ToolsPropertyValueListEntry | IsItemVisible |  | bool |  |
| ToolsPropertyValueListEntry | Self |  | ToolsPropertyValueListEntry |  |
| ToolsPropertyVfsMountPath | AccessSelf |  | ToolsPropertyVfsMountPath | Category: const |
| ToolsPropertyVfsMountPath | CloseBrowser |  | void |  |
| ToolsPropertyVfsMountPath | GetFullPath |  | CString | Category: nonconst |
| ToolsPropertyVfsMountPath | GetFullPathFromMountTag | 1. Unknown | CString | Category: nonconst |
| ToolsPropertyVfsMountPath | GetMountTagIndex |  | CVector2i | Category: nonconst |
| ToolsPropertyVfsMountPath | GetPathFontColor |  | CVector4f | Category: nonconst |
| ToolsPropertyVfsMountPath | GetTags |  | Unknown | Category: nonconst |
| ToolsPropertyVfsMountPath | GetVfsMountPathAsString |  | CString | Category: nonconst |
| ToolsPropertyVfsMountPath | GetVfsPath |  | CString | Category: nonconst |
| ToolsPropertyVfsMountPath | IsBrowserOpen |  | bool |  |
| ToolsPropertyVfsMountPath | IsDisplayModeFullPath |  | bool |  |
| ToolsPropertyVfsMountPath | OpenBrowser |  | void |  |
| ToolsPropertyVfsMountPath | Self |  | ToolsPropertyVfsMountPath |  |
| ToolsPropertyVfsMountPath | SetMountTagIndex |  | void |  |
| ToolsPropertyVfsMountPath | SetVfsPathFromText |  | void |  |
| ToolsPropertyVfsMountPath | ToggleBrowser |  | void |  |
| ToolsPropertyVfsMountPath | ToggleDisplayMode |  | void |  |
| ToolsSearch | AccessSelf |  | ToolsSearch | Category: const |
| ToolsSearch | Results |  | Unknown |  |
| ToolsSearch | Search |  | void |  |
| ToolsSearch | Self |  | ToolsSearch |  |
| ToolsSearchResult | AccessSelf |  | ToolsSearchResult | Category: const |
| ToolsSearchResult | Callback |  | void |  |
| ToolsSearchResult | Description |  | CUTF8String |  |
| ToolsSearchResult | DoesTooltipMatch |  | bool |  |
| ToolsSearchResult | Self |  | ToolsSearchResult |  |
| ToolsSearchResult | SortScore |  | int32 |  |
| ToolsSearchResult | Text |  | CUTF8String |  |
| ToolsSearchResult | Tooltip |  | CUTF8String |  |
| ToolsUndoableValueBundleBool | AccessSelf |  | ToolsUndoableValueBundleBool | Category: const |
| ToolsUndoableValueBundleBool | Self |  | ToolsUndoableValueBundleBool |  |
| ToolsUndoableValueBundleBool | ShouldDisplayMixedValuesOverlay |  | bool |  |
| ToolsUndoableValueBundleCColor | AccessSelf |  | ToolsUndoableValueBundleCColor | Category: const |
| ToolsUndoableValueBundleCColor | Self |  | ToolsUndoableValueBundleCColor |  |
| ToolsUndoableValueBundleCColor | ShouldDisplayMixedValuesOverlay |  | bool |  |
| ToolsUndoableValueBundleCString | AccessSelf |  | ToolsUndoableValueBundleCString | Category: const |
| ToolsUndoableValueBundleCString | GetTextboxDisplayValue |  | CString | Category: nonconst |
| ToolsUndoableValueBundleCString | Self |  | ToolsUndoableValueBundleCString |  |
| ToolsUndoableValueBundleCString | SetIsFocused | 1. bool | void |  |
| ToolsUndoableValueBundleCString | SetValueOnFocusOut |  | void |  |
| ToolsUndoableValueBundleCString | ShouldDisplayMixedValuesOverlay |  | bool |  |
| ToolsUndoableValueBundleColor | AccessSelf |  | ToolsUndoableValueBundleColor | Category: const |
| ToolsUndoableValueBundleColor | Self |  | ToolsUndoableValueBundleColor |  |
| ToolsUndoableValueBundleColor | ShouldDisplayMixedValuesOverlay |  | bool |  |
| ToolsUndoableValueBundleFloat | AccessSelf |  | ToolsUndoableValueBundleFloat | Category: const |
| ToolsUndoableValueBundleFloat | GetTextboxDisplayValue |  | CString | Category: nonconst |
| ToolsUndoableValueBundleFloat | Self |  | ToolsUndoableValueBundleFloat |  |
| ToolsUndoableValueBundleFloat | SetIsFocused | 1. bool | void |  |
| ToolsUndoableValueBundleFloat | SetValueOnFocusOut |  | void |  |
| ToolsUndoableValueBundleFloat | ShouldDisplayMixedValuesOverlay |  | bool |  |
| ToolsUndoableValueBundleInt | AccessSelf |  | ToolsUndoableValueBundleInt | Category: const |
| ToolsUndoableValueBundleInt | GetTextboxDisplayValue |  | CString | Category: nonconst |
| ToolsUndoableValueBundleInt | Self |  | ToolsUndoableValueBundleInt |  |
| ToolsUndoableValueBundleInt | SetIsFocused | 1. bool | void |  |
| ToolsUndoableValueBundleInt | SetValueOnFocusOut |  | void |  |
| ToolsUndoableValueBundleInt | ShouldDisplayMixedValuesOverlay |  | bool |  |
| ToolsUndoableValueBundleString | AccessSelf |  | ToolsUndoableValueBundleString | Category: const |
| ToolsUndoableValueBundleString | GetTextboxDisplayValue |  | CString | Category: nonconst |
| ToolsUndoableValueBundleString | Self |  | ToolsUndoableValueBundleString |  |
| ToolsUndoableValueBundleString | SetIsFocused | 1. bool | void |  |
| ToolsUndoableValueBundleString | SetValueOnFocusOut |  | void |  |
| ToolsUndoableValueBundleString | ShouldDisplayMixedValuesOverlay |  | bool |  |
| ToolsUndoableValueBundleUint | AccessSelf |  | ToolsUndoableValueBundleUint | Category: const |
| ToolsUndoableValueBundleUint | GetTextboxDisplayValue |  | CString | Category: nonconst |
| ToolsUndoableValueBundleUint | Self |  | ToolsUndoableValueBundleUint |  |
| ToolsUndoableValueBundleUint | SetIsFocused | 1. bool | void |  |
| ToolsUndoableValueBundleUint | SetValueOnFocusOut |  | void |  |
| ToolsUndoableValueBundleUint | ShouldDisplayMixedValuesOverlay |  | bool |  |
| ToolsUndoableValueBundleUint16 | AccessSelf |  | ToolsUndoableValueBundleUint16 | Category: const |
| ToolsUndoableValueBundleUint16 | GetTextboxDisplayValue |  | CString | Category: nonconst |
| ToolsUndoableValueBundleUint16 | Self |  | ToolsUndoableValueBundleUint16 |  |
| ToolsUndoableValueBundleUint16 | SetIsFocused | 1. bool | void |  |
| ToolsUndoableValueBundleUint16 | SetValueOnFocusOut |  | void |  |
| ToolsUndoableValueBundleUint16 | ShouldDisplayMixedValuesOverlay |  | bool |  |
| ToolsUndoableValueBundleVec2f | AccessSelf |  | ToolsUndoableValueBundleVec2f | Category: const |
| ToolsUndoableValueBundleVec2f | GetTextboxDisplayValue | 1. int32 | CString | Category: nonconst |
| ToolsUndoableValueBundleVec2f | Self |  | ToolsUndoableValueBundleVec2f |  |
| ToolsUndoableValueBundleVec2f | SetIsFocused | 1. int32 2. bool | void |  |
| ToolsUndoableValueBundleVec2f | SetValue | 1. int32 | void |  |
| ToolsUndoableValueBundleVec2f | SetValueOnFocusOut | 1. int32 | void |  |
| ToolsUndoableValueBundleVec2f | ShouldDisplayMixedValuesOverlay | 1. int32 | bool |  |
| ToolsUndoableValueBundleVec2i | AccessSelf |  | ToolsUndoableValueBundleVec2i | Category: const |
| ToolsUndoableValueBundleVec2i | GetTextboxDisplayValue | 1. int32 | CString | Category: nonconst |
| ToolsUndoableValueBundleVec2i | Self |  | ToolsUndoableValueBundleVec2i |  |
| ToolsUndoableValueBundleVec2i | SetIsFocused | 1. int32 2. bool | void |  |
| ToolsUndoableValueBundleVec2i | SetValue | 1. int32 | void |  |
| ToolsUndoableValueBundleVec2i | SetValueOnFocusOut | 1. int32 | void |  |
| ToolsUndoableValueBundleVec2i | ShouldDisplayMixedValuesOverlay | 1. int32 | bool |  |
| ToolsUndoableValueBundleVec3f | AccessSelf |  | ToolsUndoableValueBundleVec3f | Category: const |
| ToolsUndoableValueBundleVec3f | GetTextboxDisplayValue | 1. int32 | CString | Category: nonconst |
| ToolsUndoableValueBundleVec3f | GetValue |  | CVector3f | Category: nonconst |
| ToolsUndoableValueBundleVec3f | Self |  | ToolsUndoableValueBundleVec3f |  |
| ToolsUndoableValueBundleVec3f | SetIsFocused | 1. int32 2. bool | void |  |
| ToolsUndoableValueBundleVec3f | SetValue | 1. int32 | void |  |
| ToolsUndoableValueBundleVec3f | SetValueFromColor |  | void |  |
| ToolsUndoableValueBundleVec3f | SetValueOnFocusOut | 1. int32 | void |  |
| ToolsUndoableValueBundleVec3f | ShouldDisplayMixedValuesOverlay | 1. int32 | bool |  |
| ToolsUndoableValueBundleVec3i | AccessSelf |  | ToolsUndoableValueBundleVec3i | Category: const |
| ToolsUndoableValueBundleVec3i | GetTextboxDisplayValue | 1. int32 | CString | Category: nonconst |
| ToolsUndoableValueBundleVec3i | Self |  | ToolsUndoableValueBundleVec3i |  |
| ToolsUndoableValueBundleVec3i | SetIsFocused | 1. int32 2. bool | void |  |
| ToolsUndoableValueBundleVec3i | SetValue | 1. int32 | void |  |
| ToolsUndoableValueBundleVec3i | SetValueOnFocusOut | 1. int32 | void |  |
| ToolsUndoableValueBundleVec3i | ShouldDisplayMixedValuesOverlay | 1. int32 | bool |  |
| ToolsUndoableValueBundleVec4i | AccessSelf |  | ToolsUndoableValueBundleVec4i | Category: const |
| ToolsUndoableValueBundleVec4i | GetTextboxDisplayValue | 1. int32 | CString | Category: nonconst |
| ToolsUndoableValueBundleVec4i | Self |  | ToolsUndoableValueBundleVec4i |  |
| ToolsUndoableValueBundleVec4i | SetIsFocused | 1. int32 2. bool | void |  |
| ToolsUndoableValueBundleVec4i | SetValue | 1. int32 | void |  |
| ToolsUndoableValueBundleVec4i | SetValueOnFocusOut | 1. int32 | void |  |
| ToolsUndoableValueBundleVec4i | ShouldDisplayMixedValuesOverlay | 1. int32 | bool |  |
| TooltipInfo | AccessSelf |  | TooltipInfo | Category: const |
| TooltipInfo | GetTintColor |  | CVector4f | Category: nonconst |
| TooltipInfo | Self |  | TooltipInfo |  |
| TopFrontend | AccessAlerts |  | Unknown | Category: const |
| TopFrontend | AccessHiddenAlerts |  | Unknown | Category: const |
| TopFrontend | AccessHiddenImportantActions |  | Unknown | Category: const |
| TopFrontend | AccessHiddenProposals |  | Unknown | Category: const |
| TopFrontend | AccessImportantActions |  | Unknown | Category: const |
| TopFrontend | AccessProposals |  | Unknown | Category: const |
| TopFrontend | AccessSelf |  | TopFrontend | Category: const |
| TopFrontend | GetCurrentSituationSetting |  | int32 | Category: nonconst |
| TopFrontend | GetNumHiddenImportantActions |  | int32 | Category: nonconst |
| TopFrontend | GetNumUnreadImportantActions |  | int32 | Category: nonconst |
| TopFrontend | GetTotalNumOfImportantActionGroups |  | int32 | Category: nonconst |
| TopFrontend | Self |  | TopFrontend |  |
| TopFrontend | UnhideAllImportantActions |  | void |  |
| TopScope | AccessSelf |  | TopScope | Category: const |
| TopScope | End |  | TopScope |  |
| TopScope | GetFlagName | 1. Unknown | CString | Category: nonconst |
| TopScope | GetLocalVariable | 1. Unknown | Scope | Category: nonconst |
| TopScope | GetRootScope |  | Scope | Category: nonconst |
| TopScope | GetScriptValueDesc | 1. ScriptValue | CString | Category: nonconst |
| TopScope | GetValue | 1. CString | CFixedPoint | Category: nonconst |
| TopScope | ScriptValue | 1. ScriptValue | CFixedPoint |  |
| TopScope | Self |  | TopScope |  |
| TopScope | gsIG | 1. CString | InterestGroup |  |
| TopScope | gsInterestGroup | 1. CString | InterestGroup |  |
| TopScope | sB | 1. CString | Building |  |
| TopScope | sBG | 1. CString | BuildingGroup |  |
| TopScope | sBT | 1. CString | BuildingType |  |
| TopScope | sBuilding | 1. CString | Building |  |
| TopScope | sBuildingGroup | 1. CString | BuildingGroup |  |
| TopScope | sBuildingType | 1. CString | BuildingType |  |
| TopScope | sC | 1. CString | Country |  |
| TopScope | sCF | 1. CString | CountryFormation |  |
| TopScope | sCM | 1. CString | Company |  |
| TopScope | sCMT | 1. CString | CompanyType |  |
| TopScope | sCOT | 1. CString | CommanderOrderType |  |
| TopScope | sCU | 1. CString | CombatUnit |  |
| TopScope | sCW | 1. CString | CivilWar |  |
| TopScope | sCha | 1. CString | Character |  |
| TopScope | sCharacter | 1. CString | Character |  |
| TopScope | sCivilWar | 1. CString | CivilWar |  |
| TopScope | sCommanderOrderType | 1. CString | CommanderOrderType |  |
| TopScope | sCompany | 1. CString | Company |  |
| TopScope | sCompanyType | 1. CString | CompanyType |  |
| TopScope | sCountry | 1. CString | Country |  |
| TopScope | sCountryFormation | 1. CString | CountryFormation |  |
| TopScope | sCulture | 1. CString | Culture |  |
| TopScope | sD | 1. CString | Decision |  |
| TopScope | sDA | 1. CString | DiplomaticAction |  |
| TopScope | sDC | 1. CString | DiplomaticCatalyst |  |
| TopScope | sDCC | 1. CString | DiplomaticCatalystCategory |  |
| TopScope | sDCT | 1. CString | DiplomaticCatalystType |  |
| TopScope | sDD | 1. CString | DiplomaticDemand |  |
| TopScope | sDP | 1. CString | DiplomaticPlay |  |
| TopScope | sDPT | 1. CString | DiplomaticPlayType |  |
| TopScope | sDR | 1. CString | DiplomaticRelations |  |
| TopScope | sDecision | 1. CString | Decision |  |
| TopScope | sDiplomaticAction | 1. CString | DiplomaticAction |  |
| TopScope | sDiplomaticCatalyst | 1. CString | DiplomaticCatalyst |  |
| TopScope | sDiplomaticCatalystCategory | 1. CString | DiplomaticCatalystCategory |  |
| TopScope | sDiplomaticCatalystType | 1. CString | DiplomaticCatalystType |  |
| TopScope | sDiplomaticDemand | 1. CString | DiplomaticDemand |  |
| TopScope | sDiplomaticPact | 1. CString | DiplomaticPact |  |
| TopScope | sDiplomaticPlay | 1. CString | DiplomaticPlay |  |
| TopScope | sDiplomaticPlayType | 1. CString | DiplomaticPlayType |  |
| TopScope | sDiplomaticRelations | 1. CString | DiplomaticRelations |  |
| TopScope | sF | 1. CString | Front |  |
| TopScope | sFront | 1. CString | Front |  |
| TopScope | sG | 1. CString | Goods |  |
| TopScope | sGoods | 1. CString | Goods |  |
| TopScope | sHC | 1. CString | HarvestCondition |  |
| TopScope | sHCA | 1. CString | HarvestConditionArea |  |
| TopScope | sHCT | 1. CString | HarvestConditionType |  |
| TopScope | sHQ | 1. CString | Hq |  |
| TopScope | sHarvestCondition | 1. CString | HarvestCondition |  |
| TopScope | sHarvestConditionArea | 1. CString | HarvestConditionArea |  |
| TopScope | sHarvestConditionType | 1. CString | HarvestConditionType |  |
| TopScope | sIGT | 1. CString | InterestGroupTrait |  |
| TopScope | sIdeology | 1. CString | Ideology |  |
| TopScope | sInstitution | 1. CString | Institution |  |
| TopScope | sInstitutionType | 1. CString | InstitutionType |  |
| TopScope | sInterestGroupTrait | 1. CString | InterestGroupTrait |  |
| TopScope | sJE | 1. CString | JournalEntry |  |
| TopScope | sJournalEntry | 1. CString | JournalEntry |  |
| TopScope | sL | 1. CString | Law |  |
| TopScope | sLaw | 1. CString | Law |  |
| TopScope | sLawType | 1. CString | LawType |  |
| TopScope | sMilitaryFormation | 1. CString | MilitaryFormation |  |
| TopScope | sP | 1. CString | Party |  |
| TopScope | sPB | 1. CString | PowerBloc |  |
| TopScope | sPBI | 1. CString | PowerBlocIdentity |  |
| TopScope | sPBP | 1. CString | PowerBlocPrinciple |  |
| TopScope | sPL | 1. CString | PoliticalLobby |  |
| TopScope | sPLA | 1. CString | PoliticalLobbyAppeasementFactor |  |
| TopScope | sPLT | 1. CString | PoliticalLobbyType |  |
| TopScope | sPM | 1. CString | PoliticalMovement |  |
| TopScope | sPMC | 1. CString | PoliticalMovementCategory |  |
| TopScope | sPMT | 1. CString | PoliticalMovementType |  |
| TopScope | sPT | 1. CString | PopType |  |
| TopScope | sPact | 1. CString | DiplomaticPact |  |
| TopScope | sParty | 1. CString | Party |  |
| TopScope | sPoliticalLobby | 1. CString | PoliticalLobby |  |
| TopScope | sPoliticalLobbyAppeasement | 1. CString | PoliticalLobbyAppeasementFactor |  |
| TopScope | sPoliticalLobbyType | 1. CString | PoliticalLobbyType |  |
| TopScope | sPoliticalMovement | 1. CString | PoliticalMovement |  |
| TopScope | sPoliticalMovementCategory | 1. CString | PoliticalMovementCategory |  |
| TopScope | sPoliticalMovementType | 1. CString | PoliticalMovementType |  |
| TopScope | sPop | 1. CString | Pop |  |
| TopScope | sPopType | 1. CString | PopType |  |
| TopScope | sPowerBloc | 1. CString | PowerBloc |  |
| TopScope | sPowerBlocIdentity | 1. CString | PowerBlocIdentity |  |
| TopScope | sPowerBlocPrinciple | 1. CString | PowerBlocPrinciple |  |
| TopScope | sPowerBlocPrincipleGroup | 1. CString | PowerBlocPrincipleGroup |  |
| TopScope | sProvince | 1. CString | Province |  |
| TopScope | sReligion | 1. CString | Religion |  |
| TopScope | sS | 1. CString | State |  |
| TopScope | sSR | 1. CString | StrategicRegion |  |
| TopScope | sSW | 1. CString | Sway |  |
| TopScope | sState | 1. CString | State |  |
| TopScope | sStateRegion | 1. CString | StateRegion |  |
| TopScope | sStrategicRegion | 1. CString | StrategicRegion |  |
| TopScope | sSway | 1. CString | Sway |  |
| TopScope | sT | 1. CString | Technology |  |
| TopScope | sTechnology | 1. CString | Technology |  |
| TopScope | sTreaty | 1. CString | Treaty |  |
| TopScope | sTreatyArticle | 1. CString | Article |  |
| TopScope | sW | 1. CString | War |  |
| TopScope | sWar | 1. CString | War |  |
| TopScope | sWarGoal | 1. CString | WarGoal |  |
| TopScope | sWarGoalType | 1. CString | WarGoalType |  |
| TransferFormationPopup | AccessSelf |  | TransferFormationPopup | Category: const |
| TransferFormationPopup | CanMoveCommander | 1. StagedCommanderTransfer | bool |  |
| TransferFormationPopup | CanReset |  | bool |  |
| TransferFormationPopup | Confirm |  | Command |  |
| TransferFormationPopup | DeselectLeftFormation |  | void |  |
| TransferFormationPopup | DeselectRightFormation |  | void |  |
| TransferFormationPopup | GetConfirmDesc |  | CString | Category: nonconst |
| TransferFormationPopup | GetConfirmationSound |  | Unknown | Category: nonconst |
| TransferFormationPopup | GetContextualUnitTypeIcon |  | CString | Category: nonconst |
| TransferFormationPopup | GetCulturalTexture | 1. StagedUnitsWithType | Unknown | Category: nonconst |
| TransferFormationPopup | GetHintDesc |  | CString | Category: nonconst |
| TransferFormationPopup | GetInvalidCommanderTransferDesc | 1. StagedCommanderTransfer | CString | Category: nonconst |
| TransferFormationPopup | GetLeftFormation |  | MilitaryFormation | Category: nonconst |
| TransferFormationPopup | GetLeftStagedFormation |  | StagedFormation | Category: nonconst |
| TransferFormationPopup | GetOrganizationImpactDesc |  | CString | Category: nonconst |
| TransferFormationPopup | GetResetDesc |  | CString | Category: nonconst |
| TransferFormationPopup | GetRightFormation |  | MilitaryFormation | Category: nonconst |
| TransferFormationPopup | GetRightStagedFormation |  | StagedFormation | Category: nonconst |
| TransferFormationPopup | GetSelectedCommandersDesc |  | CString | Category: nonconst |
| TransferFormationPopup | GetSelectedUnitsDesc |  | CString | Category: nonconst |
| TransferFormationPopup | GetTravelTimeDesc |  | CString | Category: nonconst |
| TransferFormationPopup | GetWarningsDesc |  | CString | Category: nonconst |
| TransferFormationPopup | HasAnyUnitSelectedLeft |  | bool |  |
| TransferFormationPopup | HasAnyUnitSelectedRight |  | bool |  |
| TransferFormationPopup | HasArmyContext |  | bool |  |
| TransferFormationPopup | HasFleetContext |  | bool |  |
| TransferFormationPopup | HasLeftFormation |  | bool |  |
| TransferFormationPopup | HasRightFormation |  | bool |  |
| TransferFormationPopup | IsFormationSelected | 1. Unknown | bool |  |
| TransferFormationPopup | MoveCommander | 1. StagedCommanderTransfer | void |  |
| TransferFormationPopup | MoveConscripts | 1. StagedUnitsWithType | void |  |
| TransferFormationPopup | MovePercentageLeft | 1. Unknown | void |  |
| TransferFormationPopup | MovePercentageRight | 1. Unknown | void |  |
| TransferFormationPopup | MoveRegulars | 1. StagedUnitsWithType | void |  |
| TransferFormationPopup | MoveSelectedFromLeftToRight |  | void |  |
| TransferFormationPopup | MoveSelectedFromRightToLeft |  | void |  |
| TransferFormationPopup | Reset |  | void |  |
| TransferFormationPopup | SelectLeftFormation |  | void |  |
| TransferFormationPopup | SelectRightFormation |  | void |  |
| TransferFormationPopup | Self |  | TransferFormationPopup |  |
| TransferFormationPopup | SetSelectedLeftFormation | 1. Unknown | void |  |
| TransferFormationPopup | SetSelectedRightFormation | 1. Unknown | void |  |
| Treaty | AcceptTreatyProposal |  | Command |  |
| Treaty | AccessSelf |  | Treaty | Category: const |
| Treaty | AreObligationsEffectuated |  | bool |  |
| Treaty | Binds | 1. Country | bool |  |
| Treaty | DeclineTreatyProposal |  | Command |  |
| Treaty | DoesCallInObligation | 1. Country | bool |  |
| Treaty | DoesOweObligation | 1. Country | bool |  |
| Treaty | GetAcceptance | 1. Country | int32 | Category: nonconst |
| Treaty | GetAcceptanceBreakdown | 1. Country | CString | Category: nonconst |
| Treaty | GetAllArticles |  | Unknown | Category: nonconst |
| Treaty | GetBindingDays |  | int32 | Category: nonconst |
| Treaty | GetBindingDaysLeft |  | int32 | Category: nonconst |
| Treaty | GetBindingPeriodEndGameDate |  | Date | Category: nonconst |
| Treaty | GetBindingPeriodFormatted |  | CString | Category: nonconst |
| Treaty | GetBindingPeriodRemainingFormatted |  | CString | Category: nonconst |
| Treaty | GetBreakPenaltiesDesc | 1. Country | CString | Category: nonconst |
| Treaty | GetCanWithdrawDesc | 1. Country | CString | Category: nonconst |
| Treaty | GetCost | 1. Country | CFixedPoint | Category: nonconst |
| Treaty | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| Treaty | GetDemands |  | Unknown | Category: nonconst |
| Treaty | GetDirectedEffectsDesc | 1. Country | CString | Category: nonconst |
| Treaty | GetEffectsDesc |  | CString | Category: nonconst |
| Treaty | GetEnforcedOnCountry |  | Country | Category: nonconst |
| Treaty | GetEnforcerCountry |  | Country | Category: nonconst |
| Treaty | GetFirstCountry |  | Country | Category: nonconst |
| Treaty | GetImmediateEffectsDesc | 1. Unknown | CString | Category: nonconst |
| Treaty | GetLeftCountry |  | Country | Category: nonconst |
| Treaty | GetMutualAgreements |  | Unknown | Category: nonconst |
| Treaty | GetMutualEffectsDesc |  | CString | Category: nonconst |
| Treaty | GetMutualModifierDesc |  | CString | Category: nonconst |
| Treaty | GetName |  | CString | Category: nonconst |
| Treaty | GetNameNoFormatting |  | CString | Category: nonconst |
| Treaty | GetNonFulfilledArticlesFromSource | 1. Country | Unknown | Category: nonconst |
| Treaty | GetNonFulfillmentDescFor | 1. Country | CString | Category: nonconst |
| Treaty | GetOffers |  | Unknown | Category: nonconst |
| Treaty | GetOtherCountry | 1. Country | Country | Category: nonconst |
| Treaty | GetRelationsEffectDesc |  | CString | Category: nonconst |
| Treaty | GetRightCountry |  | Country | Category: nonconst |
| Treaty | GetSecondCountry |  | Country | Category: nonconst |
| Treaty | GetShippingLaneOf | 1. Unknown | ShippingLane | Category: nonconst |
| Treaty | GetSourceModifierDesc |  | CString | Category: nonconst |
| Treaty | GetStartDate |  | CString | Category: nonconst |
| Treaty | GetStartGameDate |  | Date | Category: nonconst |
| Treaty | GetTargetModifierDesc |  | CString | Category: nonconst |
| Treaty | GetTooltipTag |  | CString | Category: nonconst |
| Treaty | GetTreatyDeclineObligationDesc |  | CString | Category: nonconst |
| Treaty | GetWithdrawPenaltiesDesc | 1. Country | CString | Category: nonconst |
| Treaty | IsDraft |  | bool |  |
| Treaty | IsEnforced |  | bool |  |
| Treaty | IsEnforcedOn | 1. Country | bool |  |
| Treaty | IsFrozenFor | 1. Country | bool |  |
| Treaty | IsFrozenForBothCountries |  | bool |  |
| Treaty | IsPinnedInOutliner |  | bool |  |
| Treaty | IsValid |  | bool |  |
| Treaty | MakeScope |  | Scope |  |
| Treaty | Self |  | Treaty |  |
| Treaty | TogglePinInOutliner |  | void |  |
| Treaty | WithdrawFromTreaty |  | Command |  |
| TreatyDraft | AccessSelf |  | TreatyDraft | Category: const |
| TreatyDraft | AddArticle | 1. ArticleType 2. Country 3. Country | void |  |
| TreatyDraft | AddArticleDraft | 1. ArticleDraft | void |  |
| TreatyDraft | CanAskForObligation | 1. Country | bool |  |
| TreatyDraft | CanCallInObligation | 1. Country | bool |  |
| TreatyDraft | CanIncludeArticleDraft | 1. ArticleDraft | bool |  |
| TreatyDraft | CanIncludeArticleType | 1. ArticleType 2. Country 3. Country | bool |  |
| TreatyDraft | CanOweObligation | 1. Country | bool |  |
| TreatyDraft | GetAcceptance | 1. Country | int32 | Category: nonconst |
| TreatyDraft | GetAcceptanceStatus | 1. Country | CString | Category: nonconst |
| TreatyDraft | GetAmendedTreaty |  | Treaty | Category: nonconst |
| TreatyDraft | GetArticleTypeAcceptance | 1. ArticleType 2. Country | int32 | Category: nonconst |
| TreatyDraft | GetArticleTypeAcceptanceBreakdown | 1. ArticleType 2. Country | CString | Category: nonconst |
| TreatyDraft | GetArticleTypeAcceptanceBreakdownWithBuilding | 1. Unknown 2. Unknown 3. Unknown | CString | Category: nonconst |
| TreatyDraft | GetArticleTypeAcceptanceBreakdownWithCompany | 1. Unknown 2. Unknown 3. Unknown | CString | Category: nonconst |
| TreatyDraft | GetArticleTypeAcceptanceBreakdownWithCompanyAndBuilding | 1. ArticleType 2. Country 3. Company 4. BuildingType | CString | Category: nonconst |
| TreatyDraft | GetArticleTypeAcceptanceBreakdownWithCountry | 1. ArticleType 2. Country 3. Country | CString | Category: nonconst |
| TreatyDraft | GetArticleTypeAcceptanceBreakdownWithGood | 1. ArticleType 2. Country 3. Goods | CString | Category: nonconst |
| TreatyDraft | GetArticleTypeAcceptanceBreakdownWithLaw | 1. ArticleType 2. Country 3. LawType | CString | Category: nonconst |
| TreatyDraft | GetArticleTypeAcceptanceBreakdownWithRegion | 1. ArticleType 2. Country 3. StrategicRegion | CString | Category: nonconst |
| TreatyDraft | GetArticleTypeAcceptanceBreakdownWithState | 1. ArticleType 2. Country 3. State | CString | Category: nonconst |
| TreatyDraft | GetArticleTypeAcceptanceWithBuilding | 1. Unknown 2. Unknown 3. Unknown | int32 | Category: nonconst |
| TreatyDraft | GetArticleTypeAcceptanceWithCompany | 1. Unknown 2. Unknown 3. Unknown | int32 | Category: nonconst |
| TreatyDraft | GetArticleTypeAcceptanceWithCompanyAndBuilding | 1. ArticleType 2. Country 3. Company 4. BuildingType | int32 | Category: nonconst |
| TreatyDraft | GetArticleTypeAcceptanceWithCountry | 1. ArticleType 2. Country 3. Country | int32 | Category: nonconst |
| TreatyDraft | GetArticleTypeAcceptanceWithGood | 1. ArticleType 2. Country 3. Goods | int32 | Category: nonconst |
| TreatyDraft | GetArticleTypeAcceptanceWithLaw | 1. ArticleType 2. Country 3. LawType | int32 | Category: nonconst |
| TreatyDraft | GetArticleTypeAcceptanceWithRegion | 1. ArticleType 2. Country 3. StrategicRegion | int32 | Category: nonconst |
| TreatyDraft | GetArticleTypeAcceptanceWithState | 1. ArticleType 2. Country 3. State | int32 | Category: nonconst |
| TreatyDraft | GetArticleTypeInfluenceCostDesc | 1. ArticleType 2. Country | CString | Category: nonconst |
| TreatyDraft | GetAskForObligationDesc | 1. Country | CString | Category: nonconst |
| TreatyDraft | GetBindingDays |  | int32 | Category: nonconst |
| TreatyDraft | GetBindingPeriodDesc |  | CString | Category: nonconst |
| TreatyDraft | GetBindingPeriodFormatted |  | CString | Category: nonconst |
| TreatyDraft | GetBreakPenaltiesDesc |  | CString | Category: nonconst |
| TreatyDraft | GetCallInObligationDesc | 1. Country | CString | Category: nonconst |
| TreatyDraft | GetCanIncludeArticleDraftDesc | 1. ArticleDraft | CString | Category: nonconst |
| TreatyDraft | GetCanIncludeArticleTypeDesc | 1. ArticleType 2. Country 3. Country | CString | Category: nonconst |
| TreatyDraft | GetCost | 1. Country | CFixedPoint | Category: nonconst |
| TreatyDraft | GetCustomName |  | CString | Category: nonconst |
| TreatyDraft | GetFirstCountry |  | Country | Category: nonconst |
| TreatyDraft | GetImmediateEffectsDesc |  | CString | Category: nonconst |
| TreatyDraft | GetLeftCountry |  | Country | Category: nonconst |
| TreatyDraft | GetName |  | CString | Category: nonconst |
| TreatyDraft | GetNegativeAcceptanceBreakdown | 1. Country | CString | Category: nonconst |
| TreatyDraft | GetNumAvailableInputOptions | 1. ArticleType 2. Country | int32 | Category: nonconst |
| TreatyDraft | GetOtherCountry | 1. Unknown | Country | Category: nonconst |
| TreatyDraft | GetOweObligationDesc | 1. Country | CString | Category: nonconst |
| TreatyDraft | GetPositiveAcceptanceBreakdown | 1. Country | CString | Category: nonconst |
| TreatyDraft | GetPotentialDemands |  | Unknown | Category: nonconst |
| TreatyDraft | GetPotentialMutualAgreements |  | Unknown | Category: nonconst |
| TreatyDraft | GetPotentialOffers |  | Unknown | Category: nonconst |
| TreatyDraft | GetRelationsEffectDesc |  | CString | Category: nonconst |
| TreatyDraft | GetRightCountry |  | Country | Category: nonconst |
| TreatyDraft | GetSecondCountry |  | Country | Category: nonconst |
| TreatyDraft | GetSelectedDemands |  | Unknown | Category: nonconst |
| TreatyDraft | GetSelectedDirectedArticles | 1. Unknown | Unknown | Category: nonconst |
| TreatyDraft | GetSelectedMutualAgreements |  | Unknown | Category: nonconst |
| TreatyDraft | GetSelectedOffers |  | Unknown | Category: nonconst |
| TreatyDraft | GetUnavailableDemands |  | Unknown | Category: nonconst |
| TreatyDraft | GetUnavailableMutualAgreements |  | Unknown | Category: nonconst |
| TreatyDraft | GetUnavailableOffers |  | Unknown | Category: nonconst |
| TreatyDraft | GetWithdrawPenaltiesDesc |  | CString | Category: nonconst |
| TreatyDraft | HasSelectedArticle | 1. ArticleType 2. Country | bool |  |
| TreatyDraft | IsRenegotiation |  | bool |  |
| TreatyDraft | IsValidDataContext |  | bool |  |
| TreatyDraft | OnEditName |  | void |  |
| TreatyDraft | RandomizeName |  | void |  |
| TreatyDraft | RemoveArticle | 1. ArticleDraft | void |  |
| TreatyDraft | ResetAll |  | void |  |
| TreatyDraft | ResetLeftSide |  | void |  |
| TreatyDraft | ResetRightSide |  | void |  |
| TreatyDraft | Self |  | TreatyDraft |  |
| TreatyDraft | SendProposal |  | Command |  |
| TreatyDraft | SetBindingDays | 1. Unknown | void |  |
| TreatyDraft | ToggleAskForObligation | 1. Country | void |  |
| TreatyDraft | ToggleCallInObligation | 1. Country | void |  |
| TreatyDraft | ToggleOweObligation | 1. Country | void |  |
| TreatyDraft | WillAIAccept | 1. Country | bool |  |
| TreatyDraft | WillAIAcceptNoObligation | 1. Unknown | bool |  |
| TreatyDraft | WillAIAcceptWithCallInObligation | 1. Unknown | bool |  |
| TreatyDraft | WillAIAcceptWithOweObligation | 1. Unknown | bool |  |
| TreatyDraft | WillAIMaybeAccept | 1. Country | bool |  |
| TreatyDraft | WillAIMaybeAcceptNoObligation | 1. Unknown | bool |  |
| TreatyDraft | WillAIMaybeAcceptWithCallInObligation | 1. Unknown | bool |  |
| TreatyDraft | WillAIMaybeAcceptWithOweObligation | 1. Unknown | bool |  |
| TreatyDraft | WillAskForObligation | 1. Country | bool |  |
| TreatyDraft | WillCallInObligation | 1. Country | bool |  |
| TreatyDraft | WillOweObligation | 1. Country | bool |  |
| TreatyDraftPanel | AccessSelf |  | TreatyDraftPanel | Category: const |
| TreatyDraftPanel | GetDraft |  | TreatyDraft | Category: nonconst |
| TreatyDraftPanel | Self |  | TreatyDraftPanel |  |
| TreatyPanel | AccessSelf |  | TreatyPanel | Category: const |
| TreatyPanel | GetTreaty |  | Treaty | Category: nonconst |
| TreatyPanel | Self |  | TreatyPanel |  |
| Truce | AccessFirstCountry |  | Country | Category: const |
| Truce | AccessSecondCountry |  | Country | Category: const |
| Truce | AccessSelf |  | Truce | Category: const |
| Truce | GetFirstCountry |  | Country | Category: nonconst |
| Truce | GetFirstTruceDate |  | CString | Category: nonconst |
| Truce | GetSecondCountry |  | Country | Category: nonconst |
| Truce | GetSecondTruceDate |  | CString | Category: nonconst |
| Truce | GetTruceExpirationDesc |  | CString | Category: nonconst |
| Truce | Self |  | Truce |  |
| Tutorial | AccessSelf |  | Tutorial | Category: const |
| Tutorial | CanReplayVoiceover |  | bool |  |
| Tutorial | GetReplayVoiceoverTooltip |  | CString | Category: nonconst |
| Tutorial | GetStepHeaderInfo |  | CString | Category: nonconst |
| Tutorial | GetStepInstructions |  | CString | Category: nonconst |
| Tutorial | GetStepName |  | CString | Category: nonconst |
| Tutorial | GetStepText |  | CString | Category: nonconst |
| Tutorial | GetTransitionText | 1. CString | CString | Category: nonconst |
| Tutorial | GetTransitionTooltip | 1. CString | CString | Category: nonconst |
| Tutorial | HasStepInstructions |  | bool |  |
| Tutorial | HasTransition | 1. CString | bool |  |
| Tutorial | IsTransitionEnabled | 1. CString | bool |  |
| Tutorial | OnClickTransition | 1. CString | void |  |
| Tutorial | ReplayVoiceover |  | void |  |
| Tutorial | Self |  | Tutorial |  |
| Tutorial | ShouldBeVisible |  | bool |  |
| Tweakable | AccessSelf |  | Tweakable | Category: const |
| Tweakable | GetBool |  | bool | Category: nonconst |
| Tweakable | GetColor |  | CVector4f | Category: nonconst |
| Tweakable | GetDescription |  | CString | Category: nonconst |
| Tweakable | GetEnumValueIndex |  | CVector2i | Category: nonconst |
| Tweakable | GetEnumValues |  | Unknown | Category: nonconst |
| Tweakable | GetGuiName |  | CString | Category: nonconst |
| Tweakable | GetTweakableId |  | CString | Category: nonconst |
| Tweakable | GetValue |  | CString | Category: nonconst |
| Tweakable | OnValueEdited |  | void |  |
| Tweakable | Self |  | Tweakable |  |
| Tweakable | SetEnumValueIndex |  | void |  |
| TweakableCategory | AccessSelf |  | TweakableCategory | Category: const |
| TweakableCategory | GetMargin |  | int32 | Category: nonconst |
| TweakableCategory | GetName |  | CString | Category: nonconst |
| TweakableCategory | IsExpanded |  | bool |  |
| TweakableCategory | Self |  | TweakableCategory |  |
| TweakableCategory | ToggleExpanded |  | void |  |
| TweakableCategory | ToggleTreeExpanded |  | void |  |
| TweakableUiEntry | AccessSelf |  | TweakableUiEntry | Category: const |
| TweakableUiEntry | GetFriendlyName |  | CString | Category: nonconst |
| TweakableUiEntry | GetMargin |  | int32 | Category: nonconst |
| TweakableUiEntry | Self |  | TweakableUiEntry |  |
| TweakablesSnapshot | AccessSelf |  | TweakablesSnapshot | Category: const |
| TweakablesSnapshot | Name |  | CString |  |
| TweakablesSnapshot | Self |  | TweakablesSnapshot |  |
| Tweaker | AccessSelf |  | Tweaker | Category: const |
| Tweaker | CanResetTweakable | 1. Tweakable | bool |  |
| Tweaker | ClearSearchString |  | void |  |
| Tweaker | GetSearchString |  | CString | Category: nonconst |
| Tweaker | GetSelectedCategory |  | CString | Category: nonconst |
| Tweaker | GetTweakableOriginalValue | 1. Tweakable | CString | Category: nonconst |
| Tweaker | GetTweakableValueColor | 1. Tweakable | CVector4f | Category: nonconst |
| Tweaker | OnOptionsPressed |  | void |  |
| Tweaker | OriginalSnapshotValid |  | bool |  |
| Tweaker | RebuildTree |  | void |  |
| Tweaker | RemoveSnapshot | 1. CString | void |  |
| Tweaker | RemoveSnapshotEnabled | 1. CString | bool |  |
| Tweaker | RenameSnapshot | 1. CString | void |  |
| Tweaker | ResetTweakable | 1. Tweakable | void |  |
| Tweaker | RootCategories |  | Unknown |  |
| Tweaker | SelectedSnapshot |  | CString |  |
| Tweaker | Self |  | Tweaker |  |
| Tweaker | SetSearchString |  | void |  |
| Tweaker | SnapshotVisible | 1. CString | bool |  |
| Tweaker | TakeNewSnapshot |  | void |  |
| Tweaker | ToggleSelectedCategory | 1. Unknown | void |  |
| Tweaker | ToggleSelectedSnapshot | 1. CString | void |  |
| Tweaker | UpdateSnapshot | 1. CString | void |  |
| Tweaker | UpdateSnapshotEnabled | 1. CString | bool |  |
| Type | AccessSelf |  | Type | Category: const |
| Type | Delete |  | void |  |
| Type | GetAssetName |  | CString | Category: nonconst |
| Type | GetEntityIndex |  | CVector2i | Category: nonconst |
| Type | GetInstanceCount |  | int32 | Category: nonconst |
| Type | GetKey |  | CString | Category: nonconst |
| Type | GetLayer |  | CString | Category: nonconst |
| Type | GetLayerIndex |  | CVector2i | Category: nonconst |
| Type | GetMeshIndex |  | CVector2i | Category: nonconst |
| Type | GetTypeIndex |  | CVector2i | Category: nonconst |
| Type | IsHidden |  | bool |  |
| Type | IsLocked |  | bool |  |
| Type | IsSelected |  | bool |  |
| Type | Rename |  | Unknown |  |
| Type | Self |  | Type |  |
| Type | SetClampToWaterLevel | 1. Unknown | void |  |
| Type | SetEntityFromIndex |  | void |  |
| Type | SetLayerFromIndex |  | void |  |
| Type | SetMeshFromIndex |  | void |  |
| Type | SetRenderUnderwater | 1. Unknown | void |  |
| Type | SetTypeFromIndex |  | void |  |
| Type | ShouldClampToWaterLevel |  | bool |  |
| Type | ShouldRenderUnderwater |  | bool |  |
| UndoHistoryViewerClient | AccessSelf |  | UndoHistoryViewerClient | Category: const |
| UndoHistoryViewerClient | Self |  | UndoHistoryViewerClient |  |
| UndoHistoryViewerClient | Toggle |  | void |  |
| UndoStack | AccessSelf |  | UndoStack | Category: const |
| UndoStack | Clear |  | void |  |
| UndoStack | IsClearable |  | bool |  |
| UndoStack | IsRedoable |  | bool |  |
| UndoStack | IsUndoable |  | bool |  |
| UndoStack | Redo |  | void |  |
| UndoStack | Self |  | UndoStack |  |
| UndoStack | Undo |  | void |  |
| UserDataNode | AccessSelf |  | UserDataNode | Category: const |
| UserDataNode | Configure |  | void |  |
| UserDataNode | Id |  | CString |  |
| UserDataNode | Label |  | CString |  |
| UserDataNode | Self |  | UserDataNode |  |
| UserDataNode | TypeName |  | Unknown |  |
| VariableEntry | AccessSelf |  | VariableEntry | Category: const |
| VariableEntry | Delete |  | void |  |
| VariableEntry | GetName |  | CString | Category: nonconst |
| VariableEntry | Self |  | VariableEntry |  |
| VariableEntry | SetName |  | void |  |
| VariableInspectorEntry | AccessSelf |  | VariableInspectorEntry | Category: const |
| VariableInspectorEntry | Delete |  | void |  |
| VariableInspectorEntry | Self |  | VariableInspectorEntry |  |
| VariableInspectorPlugin | AccessSelf |  | VariableInspectorPlugin | Category: const |
| VariableInspectorPlugin | AccessVariables |  | Unknown | Category: const |
| VariableInspectorPlugin | AddVariable |  | void |  |
| VariableInspectorPlugin | GetNumVariables |  | int32 | Category: nonconst |
| VariableInspectorPlugin | Self |  | VariableInspectorPlugin |  |
| VariableInspectorVariable | AccessSelf |  | VariableInspectorVariable | Category: const |
| VariableInspectorVariable | GetName |  | CString | Category: nonconst |
| VariableInspectorVariable | GetRemainingTicks |  | int32 | Category: nonconst |
| VariableInspectorVariable | Self |  | VariableInspectorVariable |  |
| VariableInspectorVariable | SetName |  | void |  |
| VariableInspectorVariable | SetRemainingTicks |  | void |  |
| VariableList | AccessEntries |  | Unknown | Category: const |
| VariableList | AccessSelf |  | VariableList | Category: const |
| VariableList | Delete |  | void |  |
| VariableList | GetName |  | CString | Category: nonconst |
| VariableList | GetSize |  | int32 | Category: nonconst |
| VariableList | Self |  | VariableList |  |
| VariableListEntry | AccessSelf |  | VariableListEntry | Category: const |
| VariableListEntry | Delete |  | void |  |
| VariableListEntry | GetTicksRemaining |  | int32 | Category: nonconst |
| VariableListEntry | Self |  | VariableListEntry |  |
| VariableListEntry | SetTicksRemaining |  | void |  |
| VariableListInspectorPlugin | AccessSelf |  | VariableListInspectorPlugin | Category: const |
| VariableListInspectorPlugin | Self |  | VariableListInspectorPlugin |  |
| VariableListStore | AccessSelf |  | VariableListStore | Category: const |
| VariableListStore | AccessVariableLists |  | Unknown | Category: const |
| VariableListStore | AddNewEntry |  | void |  |
| VariableListStore | GetNewVariableListName |  | CString | Category: nonconst |
| VariableListStore | GetNumVariableLists |  | int32 | Category: nonconst |
| VariableListStore | GetVariableTicksRemaining |  | int32 | Category: nonconst |
| VariableListStore | Self |  | VariableListStore |  |
| VariableListStore | SetNewVariableListName |  | void |  |
| VariableListStore | SetVariableTicksRemaining |  | void |  |
| VariableStore | AccessSelf |  | VariableStore | Category: const |
| VariableStore | AccessVariables |  | Unknown | Category: const |
| VariableStore | AddNewEntry |  | void |  |
| VariableStore | GetNewVariableName |  | CString | Category: nonconst |
| VariableStore | GetNumVariables |  | int32 | Category: nonconst |
| VariableStore | Self |  | VariableStore |  |
| VariableStore | SetNewVariableName |  | void |  |
| VariableSystem | AccessSelf |  | VariableSystem | Category: const |
| VariableSystem | Clear | 1. CString | void |  |
| VariableSystem | ClearIf | 1. Unknown 2. Unknown | void |  |
| VariableSystem | ClearMultiple | 1. Unknown 2. Unknown | void |  |
| VariableSystem | Exists | 1. CString | bool |  |
| VariableSystem | Get | 1. Unknown | CString |  |
| VariableSystem | HasValue | 1. CString 2. CString | bool |  |
| VariableSystem | Self |  | VariableSystem |  |
| VariableSystem | Set | 1. CString 2. Unknown | void |  |
| VariableSystem | SetIf | 1. CString 2. CString 3. bool | void |  |
| VariableSystem | SetOrToggle | 1. Unknown 2. Unknown | void |  |
| VariableSystem | Toggle | 1. CString | bool |  |
| VfsMountPathBrowser | AccessSelf |  | VfsMountPathBrowser | Category: const |
| VfsMountPathBrowser | GetFilter |  | CString | Category: nonconst |
| VfsMountPathBrowser | GetNodeTree |  | Unknown | Category: nonconst |
| VfsMountPathBrowser | GetNumSelectedNodes |  | int32 | Category: nonconst |
| VfsMountPathBrowser | HasDirectFilterMatch | 1. VfsMountPathBrowserEntryNode | bool |  |
| VfsMountPathBrowser | IsNodeExpanded | 1. VfsMountPathBrowserEntryNode | bool |  |
| VfsMountPathBrowser | IsNodeSelected | 1. VfsMountPathBrowserEntryNode | bool |  |
| VfsMountPathBrowser | IsRefreshingDirectories |  | bool |  |
| VfsMountPathBrowser | OnCancel |  | void |  |
| VfsMountPathBrowser | OnFilterEdit |  | void |  |
| VfsMountPathBrowser | OnSelect |  | void |  |
| VfsMountPathBrowser | RefreshAllDirectories |  | void |  |
| VfsMountPathBrowser | Self |  | VfsMountPathBrowser |  |
| VfsMountPathBrowser | ToggleNodeExpanded | 1. VfsMountPathBrowserEntryNode | void |  |
| VfsMountPathBrowser | ToggleNodeSelected | 1. VfsMountPathBrowserEntryNode | void |  |
| VfsMountPathBrowserEntryNode | AccessSelf |  | VfsMountPathBrowserEntryNode | Category: const |
| VfsMountPathBrowserEntryNode | GetBranchDepth | 1. int32 2. int32 | CVector2f | Category: nonconst |
| VfsMountPathBrowserEntryNode | GetFullPath |  | Unknown | Category: nonconst |
| VfsMountPathBrowserEntryNode | GetName |  | Unknown | Category: nonconst |
| VfsMountPathBrowserEntryNode | HasChildren |  | bool |  |
| VfsMountPathBrowserEntryNode | Self |  | VfsMountPathBrowserEntryNode |  |
| ViewerEntity | AccessSelf |  | ViewerEntity | Category: const |
| ViewerEntity | CurrentFrame |  | int32 |  |
| ViewerEntity | CurrentTime |  | double |  |
| ViewerEntity | EntityLods |  | Unknown |  |
| ViewerEntity | HasStates |  | bool |  |
| ViewerEntity | HasUnsavedChanges |  | bool |  |
| ViewerEntity | IsLooping |  | bool |  |
| ViewerEntity | IsPlaying |  | bool |  |
| ViewerEntity | Name |  | Unknown |  |
| ViewerEntity | NumJoints |  | int32 |  |
| ViewerEntity | PauseAnimation |  | void |  |
| ViewerEntity | RollForward |  | void |  |
| ViewerEntity | Rollback |  | void |  |
| ViewerEntity | Scale |  | float |  |
| ViewerEntity | Self |  | ViewerEntity |  |
| ViewerEntity | SetCurrentFrameText | 1. PdxGuiWidget | void |  |
| ViewerEntity | SetCurrentTimeText | 1. PdxGuiWidget | void |  |
| ViewerEntity | State |  | ViewerEntityState |  |
| ViewerEntity | StepBackwards |  | void |  |
| ViewerEntity | StepForward |  | void |  |
| ViewerEntity | ToggleLooping |  | void |  |
| ViewerEntity | TogglePausePlay |  | void |  |
| ViewerEntityLodInfo | AccessSelf |  | ViewerEntityLodInfo | Category: const |
| ViewerEntityLodInfo | Lod |  | int32 |  |
| ViewerEntityLodInfo | NumTriangles |  | int32 |  |
| ViewerEntityLodInfo | NumVertices |  | int32 |  |
| ViewerEntityLodInfo | Self |  | ViewerEntityLodInfo |  |
| ViewerEntityState | AccessSelf |  | ViewerEntityState | Category: const |
| ViewerEntityState | AnimationLength |  | float |  |
| ViewerEntityState | HasAnimation |  | bool |  |
| ViewerEntityState | KeyframeLayers |  | Unknown |  |
| ViewerEntityState | Name |  | Unknown |  |
| ViewerEntityState | NumFrames |  | int32 |  |
| ViewerEntityState | Self |  | ViewerEntityState |  |
| War | AccessAttackers |  | Unknown | Category: const |
| War | AccessDefenders |  | Unknown | Category: const |
| War | AccessDiplomaticPlay |  | DiplomaticPlay | Category: const |
| War | AccessFirstWarGoalsForPlayer |  | Unknown | Category: const |
| War | AccessFronts |  | Unknown | Category: const |
| War | AccessSecondWarGoalsForPlayer |  | Unknown | Category: const |
| War | AccessSelf |  | War | Category: const |
| War | AllowsNegotiatedPeace |  | bool |  |
| War | Capitulate | 1. Country | Command |  |
| War | GetAcceptActivePeaceDealDesc |  | CString | Category: nonconst |
| War | GetAcceptProposedPeaceDealDesc | 1. Country | CString | Category: nonconst |
| War | GetAcceptWhitePeaceDealDesc |  | CString | Category: nonconst |
| War | GetActiveBattles |  | Unknown | Category: nonconst |
| War | GetActivePeaceDealAcceptanceScore | 1. Country | CString | Category: nonconst |
| War | GetActivePeaceDealAcceptanceTooltip | 1. Country | CString | Category: nonconst |
| War | GetAllBattles |  | Unknown | Category: nonconst |
| War | GetAttackerLeader |  | Country | Category: nonconst |
| War | GetAttackerListString |  | CString | Category: nonconst |
| War | GetAttackers |  | Unknown | Category: nonconst |
| War | GetAttackersWarGoals |  | Unknown | Category: nonconst |
| War | GetCapitulationDesire | 1. Country | int32 | Category: nonconst |
| War | GetCapitulationDesireDesc | 1. Country | CString | Category: nonconst |
| War | GetCasualties | 1. Country | CFixedPoint | Category: nonconst |
| War | GetCountryProposingPeace |  | Country | Category: nonconst |
| War | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| War | GetDaysUntilPeaceDealFails |  | int32 | Category: nonconst |
| War | GetDefenderLeader |  | Country | Category: nonconst |
| War | GetDefenderListString |  | CString | Category: nonconst |
| War | GetDefenders |  | Unknown | Category: nonconst |
| War | GetDefendersWarGoals |  | Unknown | Category: nonconst |
| War | GetDiplomaticPlay |  | DiplomaticPlay | Category: nonconst |
| War | GetEndedBattles |  | Unknown | Category: nonconst |
| War | GetEnemyContestedWarGoalsFraction | 1. Country | CFixedPoint | Category: nonconst |
| War | GetInvasions |  | Unknown | Category: nonconst |
| War | GetLeaderOfOppositeSide | 1. Unknown | Country | Category: nonconst |
| War | GetName |  | CString | Category: nonconst |
| War | GetNameNoFormatting |  | CString | Category: nonconst |
| War | GetPeaceDealValidationDesc |  | CString | Category: nonconst |
| War | GetPressedWarGoalsString |  | CString | Category: nonconst |
| War | GetProposedPeaceDealAcceptanceScore | 1. Country 2. Country | CString | Category: nonconst |
| War | GetProposedPeaceDealAcceptanceTooltip | 1. Country 2. Country | CString | Category: nonconst |
| War | GetSizeWeightedLostBattlesFraction | 1. Country | CFixedPoint | Category: nonconst |
| War | GetStartWarDescriptionForPlayer |  | CString | Category: nonconst |
| War | GetStartWarTitleForPlayer |  | CString | Category: nonconst |
| War | GetTooltipTag |  | CString | Category: nonconst |
| War | GetTotalDeadWithWarExhaustionTooltip | 1. Country | CString | Category: nonconst |
| War | GetWarPtr |  | Unknown | Category: nonconst |
| War | GetWarSupport | 1. Country | CFixedPoint | Category: nonconst |
| War | GetWhitePeaceDealAcceptanceScore | 1. Unknown | CString | Category: nonconst |
| War | GetWhitePeaceDealAcceptanceTooltip | 1. Unknown | CString | Category: nonconst |
| War | HasActivePeaceDeal |  | bool |  |
| War | HasActiveWhitePeaceDeal |  | bool |  |
| War | HasProposedWhitePeaceDeal | 1. Unknown | bool |  |
| War | IsAttacker | 1. Unknown | bool |  |
| War | IsDefender | 1. Unknown | bool |  |
| War | IsParticipant | 1. Country | bool |  |
| War | IsPeaceDealValid |  | bool |  |
| War | IsPeaceNegotiator | 1. Unknown | bool |  |
| War | IsValid |  | bool |  |
| War | IsWarLeader | 1. Country | bool |  |
| War | MakeScope |  | Scope |  |
| War | MustRatifyPeaceDeal | 1. Unknown | bool |  |
| War | ProposePeaceDeal | 1. Country | Command |  |
| War | Self |  | War |  |
| War | SetWhitePeace | 1. Country | Command |  |
| War | ToggleAcceptPeace | 1. Unknown | Command |  |
| War | WouldAcceptActivePeaceDeal | 1. Unknown | bool |  |
| War | WouldAcceptProposedPeaceDeal | 1. Unknown 2. Unknown | bool |  |
| War | WouldAcceptWhitePeaceDeal | 1. Unknown | bool |  |
| War | WouldActivePeaceDealBeAccepted |  | bool |  |
| War | WouldProposedPeaceDealBeAccepted | 1. Country | bool |  |
| War | WouldWhitePeaceDealBeAccepted |  | bool |  |
| WarGoal | AccessSelf |  | WarGoal | Category: const |
| WarGoal | CalcMakePrimaryDemandInfamyAmount |  | CFixedPoint |  |
| WarGoal | CalcMakePrimaryDemandManeuversCost |  | int32 |  |
| WarGoal | GetAddWarGoalDiplomaticIncidentDesc |  | CString | Category: nonconst |
| WarGoal | GetArticleDraft |  | ArticleDraft | Category: nonconst |
| WarGoal | GetArticleType |  | ArticleType | Category: nonconst |
| WarGoal | GetCountryCreation |  | CountryCreation | Category: nonconst |
| WarGoal | GetCountryFormation |  | CountryFormation | Category: nonconst |
| WarGoal | GetCreator |  | Country | Category: nonconst |
| WarGoal | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| WarGoal | GetDesc |  | CString | Category: nonconst |
| WarGoal | GetDiplomaticPlay |  | DiplomaticPlay | Category: nonconst |
| WarGoal | GetHolder |  | Country | Category: nonconst |
| WarGoal | GetIcon |  | Unknown | Category: nonconst |
| WarGoal | GetInfamyAmount |  | CFixedPoint | Category: nonconst |
| WarGoal | GetInfamyDesc |  | CString | Category: nonconst |
| WarGoal | GetIsContestedDesc |  | CString | Category: nonconst |
| WarGoal | GetMakePrimaryDemandDiplomaticIncidentDesc |  | CString | Category: nonconst |
| WarGoal | GetMakePrimaryDemandManeuversCostDesc |  | CString | Category: nonconst |
| WarGoal | GetManeuversCostToAdd |  | int32 | Category: nonconst |
| WarGoal | GetManeuversCostToAddDesc |  | CString | Category: nonconst |
| WarGoal | GetName |  | CString | Category: nonconst |
| WarGoal | GetNameNoFormatting |  | CString | Category: nonconst |
| WarGoal | GetNameNoIcon |  | CString | Category: nonconst |
| WarGoal | GetRegimeChangeLawsEnactedDesc |  | CString | Category: nonconst |
| WarGoal | GetStartDiploPlayDesc |  | CString | Category: nonconst |
| WarGoal | GetStatusString |  | CString | Category: nonconst |
| WarGoal | GetSubjectTypeName |  | CString | Category: nonconst |
| WarGoal | GetSwayDesc |  | CString | Category: nonconst |
| WarGoal | GetTarget |  | Country | Category: nonconst |
| WarGoal | GetTargetState |  | State | Category: nonconst |
| WarGoal | GetTexture |  | Unknown | Category: nonconst |
| WarGoal | GetTooltipTag |  | CString | Category: nonconst |
| WarGoal | GetType |  | WarGoalType | Category: nonconst |
| WarGoal | GetWar |  | War | Category: nonconst |
| WarGoal | GetWarGoalStakeholder |  | Country | Category: nonconst |
| WarGoal | HasCountryCreation |  | bool |  |
| WarGoal | HasCountryFormation |  | bool |  |
| WarGoal | HoldsArticle |  | bool |  |
| WarGoal | IsContested |  | bool |  |
| WarGoal | IsExecuted |  | bool |  |
| WarGoal | IsPartOfPlay |  | bool |  |
| WarGoal | IsPartOfWar |  | bool |  |
| WarGoal | IsPotentialWarGoal |  | bool |  |
| WarGoal | IsPressedInCurrentPeaceDeal |  | bool |  |
| WarGoal | IsPressedInPotentialPeaceDeal | 1. Unknown | bool |  |
| WarGoal | IsPressedInShownPeaceDeal | 1. Country | bool |  |
| WarGoal | IsPrimaryDemand |  | bool |  |
| WarGoal | IsValid |  | bool |  |
| WarGoal | IsValidDataContext |  | bool |  |
| WarGoal | MakeScope |  | Scope |  |
| WarGoal | MakeWarGoalPrimaryDemand | 1. Country | Command |  |
| WarGoal | Self |  | WarGoal |  |
| WarGoal | SetArticleInputsFromDraft | 1. Unknown | void |  |
| WarGoal | ShowHighlight |  | void |  |
| WarGoal | ToggleIsPressedInPotentialPeaceDeal | 1. Country | Command |  |
| WarGoalDraft | AccessSelf |  | WarGoalDraft | Category: const |
| WarGoalDraft | GetAddWarGoalDiplomaticIncidentDesc |  | CString | Category: nonconst |
| WarGoalDraft | GetArticleDraft |  | ArticleDraft | Category: nonconst |
| WarGoalDraft | GetArticleType |  | ArticleType | Category: nonconst |
| WarGoalDraft | GetCountryCreation |  | CountryCreation | Category: nonconst |
| WarGoalDraft | GetCountryFormation |  | CountryFormation | Category: nonconst |
| WarGoalDraft | GetCreator |  | Country | Category: nonconst |
| WarGoalDraft | GetDesc |  | CString | Category: nonconst |
| WarGoalDraft | GetDiplomaticPlay |  | DiplomaticPlay | Category: nonconst |
| WarGoalDraft | GetHolder |  | Country | Category: nonconst |
| WarGoalDraft | GetIcon |  | Unknown | Category: nonconst |
| WarGoalDraft | GetInfamyAmount |  | CFixedPoint | Category: nonconst |
| WarGoalDraft | GetInfamyDesc |  | CString | Category: nonconst |
| WarGoalDraft | GetManeuversCostToAdd |  | int32 | Category: nonconst |
| WarGoalDraft | GetManeuversCostToAddDesc |  | CString | Category: nonconst |
| WarGoalDraft | GetName |  | CString | Category: nonconst |
| WarGoalDraft | GetNameNoFormatting |  | CString | Category: nonconst |
| WarGoalDraft | GetNameNoIcon |  | CString | Category: nonconst |
| WarGoalDraft | GetRegimeChangeLawsEnactedDesc |  | CString | Category: nonconst |
| WarGoalDraft | GetSubjectTypeName |  | CString | Category: nonconst |
| WarGoalDraft | GetTarget |  | Country | Category: nonconst |
| WarGoalDraft | GetTargetRegion |  | StrategicRegion | Category: nonconst |
| WarGoalDraft | GetTargetState |  | State | Category: nonconst |
| WarGoalDraft | GetTexture |  | Unknown | Category: nonconst |
| WarGoalDraft | GetTooltipTag |  | CString | Category: nonconst |
| WarGoalDraft | GetType |  | WarGoalType | Category: nonconst |
| WarGoalDraft | GetWarGoalStakeholder |  | Country | Category: nonconst |
| WarGoalDraft | HasCountryCreation |  | bool |  |
| WarGoalDraft | HasCountryFormation |  | bool |  |
| WarGoalDraft | HasIncompleteSelectionData |  | bool |  |
| WarGoalDraft | HoldsArticle |  | bool |  |
| WarGoalDraft | IsValid |  | bool |  |
| WarGoalDraft | IsValidDataContext |  | bool |  |
| WarGoalDraft | Self |  | WarGoalDraft |  |
| WarGoalDraft | SetArticleInputsFromDraft | 1. ArticleDraft | void |  |
| WarGoalDraft | ShowHighlight |  | void |  |
| WarGoalMarker | AccessSelf |  | WarGoalMarker | Category: const |
| WarGoalMarker | AccessWarGoal |  | WarGoal | Category: const |
| WarGoalMarker | GetWarGoal |  | WarGoal | Category: nonconst |
| WarGoalMarker | Self |  | WarGoalMarker |  |
| WarGoalPanelPair | AccessSelf |  | WarGoalPanelPair | Category: const |
| WarGoalPanelPair | GetWar |  | War | Category: nonconst |
| WarGoalPanelPair | GetWarGoal |  | WarGoal | Category: nonconst |
| WarGoalPanelPair | Self |  | WarGoalPanelPair |  |
| WarGoalType | AccessSelf |  | WarGoalType | Category: const |
| WarGoalType | GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| WarGoalType | GetDesc |  | CString | Category: nonconst |
| WarGoalType | GetIcon |  | Unknown | Category: nonconst |
| WarGoalType | GetKind |  | Unknown | Category: nonconst |
| WarGoalType | GetName |  | CString | Category: nonconst |
| WarGoalType | GetNameNoFormatting |  | CString | Category: nonconst |
| WarGoalType | GetNameNoIcon |  | CString | Category: nonconst |
| WarGoalType | GetTexture |  | Unknown | Category: nonconst |
| WarGoalType | GetTooltipTag |  | CString | Category: nonconst |
| WarGoalType | MakeScope |  | Scope |  |
| WarGoalType | Self |  | WarGoalType |  |
| WarGoalType | TargetsCountryCreation |  | bool |  |
| WarManager | AccessSelf |  | WarManager | Category: const |
| WarManager | Self |  | WarManager |  |
| WarManager | ToggleWarPanel | 1. War | void |  |
| WarPanel | AccessAttackers |  | Unknown | Category: const |
| WarPanel | AccessAttackersWarGoals |  | Unknown | Category: const |
| WarPanel | AccessDefenders |  | Unknown | Category: const |
| WarPanel | AccessDefendersWarGoals |  | Unknown | Category: const |
| WarPanel | AccessFronts |  | Unknown | Category: const |
| WarPanel | AccessSelf |  | WarPanel | Category: const |
| WarPanel | AccessWar |  | War | Category: const |
| WarPanel | GetAttackersAvailableBattalionsRaw |  | int32 | Category: nonconst |
| WarPanel | GetAttackersDeadRaw |  | int64 | Category: nonconst |
| WarPanel | GetAttackersFlotillasRaw |  | int32 | Category: nonconst |
| WarPanel | GetAttackersMobilizationRatioRaw |  | CFixedPoint | Category: nonconst |
| WarPanel | GetAttackersMobilizedBattalionsRaw |  | int32 | Category: nonconst |
| WarPanel | GetAttackersPotentialBattalionsRaw |  | int32 | Category: nonconst |
| WarPanel | GetAttackersWarMobilizationCostRaw |  | CFixedPoint | Category: nonconst |
| WarPanel | GetAttackersWoundedRaw |  | int64 | Category: nonconst |
| WarPanel | GetDefendersAvailableBattalionsRaw |  | int32 | Category: nonconst |
| WarPanel | GetDefendersDeadRaw |  | int64 | Category: nonconst |
| WarPanel | GetDefendersFlotillasRaw |  | int32 | Category: nonconst |
| WarPanel | GetDefendersMobilizationRatioRaw |  | CFixedPoint | Category: nonconst |
| WarPanel | GetDefendersMobilizedBattalionsRaw |  | int32 | Category: nonconst |
| WarPanel | GetDefendersPotentialBattalionsRaw |  | int32 | Category: nonconst |
| WarPanel | GetDefendersWarMobilizationCostRaw |  | CFixedPoint | Category: nonconst |
| WarPanel | GetDefendersWoundedRaw |  | int64 | Category: nonconst |
| WarPanel | GetLeftAvailableBattalionsRaw |  | int32 | Category: nonconst |
| WarPanel | GetLeftBattalionsBreakdown |  | CString | Category: nonconst |
| WarPanel | GetLeftCostOfWarDesc |  | CString | Category: nonconst |
| WarPanel | GetLeftCostOfWarRaw |  | CFixedPoint | Category: nonconst |
| WarPanel | GetLeftDeadBreakdown |  | CString | Category: nonconst |
| WarPanel | GetLeftDeadRaw |  | int64 | Category: nonconst |
| WarPanel | GetLeftFlotillasBreakdown |  | CString | Category: nonconst |
| WarPanel | GetLeftFlotillasRaw |  | int32 | Category: nonconst |
| WarPanel | GetLeftLeader |  | Country | Category: nonconst |
| WarPanel | GetLeftMobilizationRatioRaw |  | CFixedPoint | Category: nonconst |
| WarPanel | GetLeftMobilizedBattalionsRaw |  | int32 | Category: nonconst |
| WarPanel | GetLeftPotentialBattalionsRaw |  | int32 | Category: nonconst |
| WarPanel | GetLeftWarParticipantsExcludingLeader |  | Unknown | Category: nonconst |
| WarPanel | GetLeftWoundedBreakdown |  | CString | Category: nonconst |
| WarPanel | GetLeftWoundedRaw |  | int64 | Category: nonconst |
| WarPanel | GetRightAvailableBattalionsRaw |  | int32 | Category: nonconst |
| WarPanel | GetRightBattalionsBreakdown |  | CString | Category: nonconst |
| WarPanel | GetRightCostOfWarDesc |  | CString | Category: nonconst |
| WarPanel | GetRightCostOfWarRaw |  | CFixedPoint | Category: nonconst |
| WarPanel | GetRightDeadBreakdown |  | CString | Category: nonconst |
| WarPanel | GetRightDeadRaw |  | int64 | Category: nonconst |
| WarPanel | GetRightFlotillasBreakdown |  | CString | Category: nonconst |
| WarPanel | GetRightFlotillasRaw |  | int32 | Category: nonconst |
| WarPanel | GetRightLeader |  | Country | Category: nonconst |
| WarPanel | GetRightMobilizationRatioRaw |  | CFixedPoint | Category: nonconst |
| WarPanel | GetRightMobilizedBattalionsRaw |  | int32 | Category: nonconst |
| WarPanel | GetRightPotentialBattalionsRaw |  | int32 | Category: nonconst |
| WarPanel | GetRightWarParticipantsExcludingLeader |  | Unknown | Category: nonconst |
| WarPanel | GetRightWoundedBreakdown |  | CString | Category: nonconst |
| WarPanel | GetRightWoundedRaw |  | int64 | Category: nonconst |
| WarPanel | GetWar |  | War | Category: nonconst |
| WarPanel | IsShowingPeaceDeal |  | bool |  |
| WarPanel | Self |  | WarPanel |  |
| WarPanel | SortFronts | 1. Unknown | void |  |
| WarPanel | ToggleShowPeaceDeal |  | void |  |
| WarParticipant | AccessSelf |  | WarParticipant | Category: const |
| WarParticipant | GetCanCapitulateDesc |  | CString | Category: nonconst |
| WarParticipant | GetCasualties |  | int64 | Category: nonconst |
| WarParticipant | GetCountry |  | Country | Category: nonconst |
| WarParticipant | GetExhaustionDesc |  | CString | Category: nonconst |
| WarParticipant | GetNumDead |  | int64 | Category: nonconst |
| WarParticipant | GetNumDeadFromAttrition |  | int64 | Category: nonconst |
| WarParticipant | GetNumDeadFromBattle |  | int64 | Category: nonconst |
| WarParticipant | GetNumWounded |  | int64 | Category: nonconst |
| WarParticipant | GetNumWoundedFromAttrition |  | int64 | Category: nonconst |
| WarParticipant | GetNumWoundedFromBattle |  | int64 | Category: nonconst |
| WarParticipant | GetPosition | 1. Unknown 2. Unknown 3. Unknown | CVector2f | Category: nonconst |
| WarParticipant | GetWar |  | War | Category: nonconst |
| WarParticipant | GetWarExhaustionFromAcceptanceOfDeadDesc |  | CString | Category: nonconst |
| WarParticipant | GetWarSupportDesc |  | CString | Category: nonconst |
| WarParticipant | GetWarSupportDescDelayed |  | CString | Category: nonconst |
| WarParticipant | IsPeaceNegotiator |  | bool |  |
| WarParticipant | IsWarLeader |  | bool |  |
| WarParticipant | MustRatifyPeaceDeal |  | bool |  |
| WarParticipant | Self |  | WarParticipant |  |
| WarParticipant | WouldAcceptActivePeaceDeal |  | bool |  |
| WarParticipant | WouldAcceptProposedPeaceDeal | 1. Country | bool |  |
| WarParticipant | WouldAcceptWhitePeaceDeal |  | bool |  |
| WorldMarketPanel | AccessSelf |  | WorldMarketPanel | Category: const |
| WorldMarketPanel | Filter | 1. CString | void |  |
| WorldMarketPanel | GetFilters |  | Unknown | Category: nonconst |
| WorldMarketPanel | GetGoods | 1. Unknown | Unknown | Category: nonconst |
| WorldMarketPanel | GetMarkets |  | Unknown | Category: nonconst |
| WorldMarketPanel | GetMarketsSortedOnExports |  | Unknown | Category: nonconst |
| WorldMarketPanel | GetMarketsSortedOnImports |  | Unknown | Category: nonconst |
| WorldMarketPanel | GetMaxImbalance |  | CFixedPoint | Category: nonconst |
| WorldMarketPanel | GetMaxImbalanceScaledByBasePrice |  | CFixedPoint | Category: nonconst |
| WorldMarketPanel | IsSelected | 1. CString | bool |  |
| WorldMarketPanel | Self |  | WorldMarketPanel |  |
| WorldMarketPanel | SortGoods | 1. CString | void |  |
| WorldMarketPanel | SortMarkets | 1. Unknown | void |  |
| bool | AccessSelf |  | bool | Category: const |
| bool | Self |  | bool |  |
| double | AccessSelf |  | double | Category: const |
| double | Self |  | double |  |
| float | AccessSelf |  | float | Category: const |
| float | Self |  | float |  |
