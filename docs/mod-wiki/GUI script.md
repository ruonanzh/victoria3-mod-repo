# GUI script

**GUI script** is the style of scripting used in the game's [GUI](./Interface modding.md) and [localization](./Localization.md). This is different from the script used in most other game files, though there are some corresponding objects, such as countries and variables. Similar to game script's [scopes](./Scope.md), GUI script uses data types; some of these correspond to game scopes while others are used only with GUI script.

GUI script is divded in two types: *Functions* and *Promotes*.

## Common features
All GUI script is written in "CamelCase"[[1]](#cite_note-1), where each word in the function or promote is capitalized and no spaces are used. Each piece of GUI script is always enclosed in square brackets. Within the square brackets, the functions and promotes can be chained together with "dot chaining", for example `[State.GetJobseekersDesc]`. When moving from one data type to another, this is similar to dot chaining with [scopes](./Scope.md).

Some functions and promotes take arguments which are enclosed in parentheses immediately following the function or promote, for example `[GetPopType('peasants').GetName]`. If the argument is a game script object, it is typically enclosed in single quotes; if it is another data type, function, or promote, it is not. If the function or promote takes multiple arguments, they must be passed in order with each separated by a comma.

Some functions and promotes are "global", meaning they can be used without reference to a data type. All other data type functions and promotes require the correct data type to be in "scope".

## Lists of data types
These tables list all data types used in GUI scripting which have at least one function or promote.

List of data types for functions

| Type | Description |
| AIAttitude |  |
| AIStrategy |  |
| AcceptanceStatus |  |
| AcceptanceStatusSegment |  |
| AccountInventory |  |
| Achievement |  |
| AchievementPopup |  |
| AchievementWindow |  |
| AddFriendWindow |  |
| AddWarGoalPanel |  |
| AgitatorSlot |  |
| Alert |  |
| AlertGroup |  |
| AlertOptionItem |  |
| AlertSettingsItem |  |
| Amendment |  |
| AmendmentType |  |
| AnchorItem |  |
| Application |  |
| Article |  |
| ArticleDraft |  |
| ArticleType |  |
| Attribute |  |
| AvailabilityEntry |  |
| Battle |  |
| BattleBuildingEntry |  |
| BattleCondition |  |
| BattleMarker |  |
| BattleMilitaryFormation |  |
| BattlePanel |  |
| BattleParticipant |  |
| BattleParticipantsPanel |  |
| BattleSide |  |
| BattleUnitType |  |
| BlurThreshold |  |
| BrushBool |  |
| BrushFloat |  |
| BrushSettings |  |
| BrushSettingsDropdown |  |
| BrushSettingsGlobal |  |
| BudgetPanel |  |
| Building |  |
| BuildingBrowserBuildingTypeItem |  |
| BuildingBrowserPanel |  |
| BuildingDetailsPanel |  |
| BuildingGroup |  |
| BuildingMarker |  |
| BuildingOwnership |  |
| BuildingPotentialMarker |  |
| BuildingProductionMethodsEntry |  |
| BuildingType |  |
| CFixedPoint |  |
| CPdxEnumValue |  |
| CPdxFloatRect |  |
| CPdxInputBindingSetting |  |
| CPdxIntRect |  |
| CString |  |
| CUTF8String |  |
| CVector2f |  |
| CVector2i |  |
| CVector3f |  |
| CVector3i |  |
| CVector4f |  |
| CVector4i |  |
| CanalType |  |
| ChangeLawPanel |  |
| ChangeProductionMethodMenuItem |  |
| ChangeProductionMethodsMenuItems |  |
| Character |  |
| CharacterInteraction |  |
| CharacterTrait |  |
| Chat |  |
| ChatMessage |  |
| ChatNotificationMessage |  |
| ChatTab |  |
| ChatWindow |  |
| ChildGenerator |  |
| ChildItem |  |
| Cities |  |
| CityMarker |  |
| CivilWar |  |
| CloudSaveData |  |
| CoatOfArms |  |
| CoatOfArmsPreviewWindow |  |
| CohesionLevel |  |
| ColonyMarker |  |
| ColorPicker |  |
| CombatUnit |  |
| CombatUnitGroup |  |
| CombatUnitType |  |
| Command |  |
| CommanderOrderType |  |
| CommanderPanel |  |
| CommanderRank |  |
| CompaniesPanel |  |
| Company |  |
| CompanyChangeNamePopup |  |
| CompanyCharter |  |
| CompanyCharterType |  |
| CompanyPanel |  |
| CompanyType |  |
| ConfirmationWindow |  |
| ConsoleMenuItem |  |
| ConsoleWindow |  |
| ConstructionPanel |  |
| ConstructionQueueElement |  |
| Container |  |
| ContextMenuItem |  |
| ContextualDiplomaticActionType |  |
| ContextualDiplomaticPact |  |
| CountriesPanel |  |
| Country |  |
| CountryCreation |  |
| CountryDefinition |  |
| CountryEntry |  |
| CountryFormation |  |
| CountryFormationPanel |  |
| CountryMarker |  |
| CountryPanel |  |
| CountryTrendPair |  |
| CreateAccount |  |
| CreateSocialProfileWindow |  |
| CreditsWindow |  |
| CulturalCommunity |  |
| Culture |  |
| CultureCasualtyStatistics |  |
| CultureInfoPanel |  |
| CurveEditor |  |
| CurvePoint |  |
| DataColorPicker |  |
| DataDynamicTrend |  |
| DataTrend |  |
| DatatypesExplorer |  |
| Date |  |
| Decision |  |
| Decree |  |
| DecreeMarker |  |
| DecreeType |  |
| DefineProxyNodeWindow |  |
| DetailData |  |
| DiplomaticAction |  |
| DiplomaticActionType |  |
| DiplomaticActionWindow |  |
| DiplomaticCatalyst |  |
| DiplomaticCatalystCategory |  |
| DiplomaticCatalystType |  |
| DiplomaticDemand |  |
| DiplomaticOverviewPanel |  |
| DiplomaticPact |  |
| DiplomaticPlay |  |
| DiplomaticPlayConfirmation |  |
| DiplomaticPlayPanel |  |
| DiplomaticPlayType |  |
| DiplomaticRelations |  |
| DiscriminationTrait |  |
| DiscriminationTraitGroup |  |
| Dlc |  |
| DockableLayout |  |
| DockableLayoutManager |  |
| DockableWindow |  |
| DrawCmdsList |  |
| DrawCmdsViewer |  |
| EditorSettingCategory |  |
| EditorSettingsPage |  |
| EditorSettingsWindow |  |
| Election |  |
| ElectionPanel |  |
| EmitterNodeWindow |  |
| EmployeeTransfer |  |
| Encyclopedia |  |
| EncyclopediaEntry |  |
| EncyclopediaEntryView |  |
| EncyclopediaPage |  |
| EndPrepConfirm |  |
| EntityEditor |  |
| EntityEditorAudioEventHandler |  |
| EntityEditorEventLayer |  |
| EntityEditorKeyframe |  |
| EntityEditorTimelineState |  |
| EntityViewerProperties |  |
| EnumSettingEntry |  |
| Era |  |
| ErrorDeer |  |
| Ethnicity |  |
| EthnicityItem |  |
| Event |  |
| EventIcon |  |
| EventLayerForEntityEditor |  |
| EventMarker |  |
| EventMarkerListItem |  |
| EventOption |  |
| EventTargetSetupContext |  |
| EventWindow |  |
| ExilePool |  |
| ExportTool |  |
| EyeDropper |  |
| EyeDropperPackedSample |  |
| FeedMessageItem |  |
| FilterablePropertyList |  |
| FoodSecurity |  |
| FoodSecurityFilter |  |
| FormationMarker |  |
| FormationPanel |  |
| Friend |  |
| FriendListWindow |  |
| FriendRequest |  |
| FriendSearchResult |  |
| Friends |  |
| Front |  |
| FrontEndCreditsView |  |
| FrontEndLoadConfirmationWindow |  |
| FrontEndLoadView |  |
| FrontEndMainView |  |
| FrontEndMultiplayerView |  |
| FrontMarker |  |
| FrontMovementMarker |  |
| FrontPanel |  |
| FrontSide |  |
| GUIAchievement |  |
| GameConceptType |  |
| GameMpSetup |  |
| GameOverScreen |  |
| GameRule |  |
| GameRuleSetting |  |
| GameSetup |  |
| GeneCategory |  |
| GeneItem |  |
| GeneTemplate |  |
| GeneralInformationWindow |  |
| GenerationItem |  |
| GeographicRegion |  |
| GfxSkin |  |
| Goods |  |
| GoodsExpenseItem |  |
| GoodsList |  |
| GoodsLocalPricesPanel |  |
| GoodsPanel |  |
| GoodsPanelChildValue |  |
| GoodsPanelValue |  |
| GoodsProductionInfo |  |
| GoodsStatePanel |  |
| GoodsUsagePanel |  |
| GoodsWorldMarketPanel |  |
| GovernmentType |  |
| Graph |  |
| GraphInterfaceNodeWindow |  |
| GraphPanel |  |
| Group |  |
| GuiAnimationCurveEditor |  |
| GuiAnimationCurveEditorControlPoint |  |
| GuiAnimationCurveEditorLine |  |
| GuiAnimationCurveEditorViewport |  |
| GuiAnimationEditor |  |
| GuiAnimationEditorAnimSetEntry |  |
| GuiAnimationEditorAnimationEntry |  |
| GuiAnimationEditorAvailableTrack |  |
| GuiAnimationEditorKeyframe |  |
| GuiAnimationEditorMetadataCtx |  |
| GuiAnimationEditorPlayer |  |
| GuiAnimationEditorPlayerSpeedMultiplierEntry |  |
| GuiAnimationEditorRuler |  |
| GuiAnimationEditorRulerResolutionEntry |  |
| GuiAnimationEditorUniversalTrack |  |
| GuiAnimationEditorViewportBase |  |
| GuiAnimationEditorViewportUserInput |  |
| GuiAnimationTimelineViewport |  |
| GuiContext |  |
| GuiCurrentDrag |  |
| GuiDataProfiler |  |
| GuiDataProfilerEntryNode |  |
| GuiEditorTooltip |  |
| GuiGameRule |  |
| GuiGameRulePreset |  |
| HQMarker |  |
| HQMovementMarker |  |
| HarvestCondition |  |
| HarvestConditionArea |  |
| HarvestConditionList |  |
| HarvestConditionRegionMarker |  |
| HarvestConditionType |  |
| Heightmap |  |
| HeightmapPainter |  |
| HeightmapPainterMode |  |
| HeightmapResolution |  |
| HighlightManager |  |
| HistoryViewer |  |
| HomelandMarker |  |
| Hq |  |
| Ideology |  |
| ImportTool |  |
| Importable |  |
| ImportableGroup |  |
| ImportantAlert |  |
| InfoboxNodeWindow |  |
| InformationPanel |  |
| InformationPanelBar |  |
| IngameHud |  |
| InputActionBinding |  |
| InspectorPanel |  |
| Institution |  |
| InstitutionInvestmentLevel |  |
| InstitutionType |  |
| Interest |  |
| InterestGroup |  |
| InterestGroupAndTraitPair |  |
| InterestGroupMarker |  |
| InterestGroupPanel |  |
| InterestGroupTrait |  |
| InterestingCountryItem |  |
| InterestingCountrySetting |  |
| Invasion |  |
| InvasionMarker |  |
| InvasionPanel |  |
| InvasionPlannerPopup |  |
| JominiGUISetting |  |
| JominiGameRules |  |
| JominiNotification |  |
| JominiNotificationOverlay |  |
| JominiPasswordPopup |  |
| JominiServer |  |
| JominiServerBrowserGui |  |
| JominiSettingsWindow |  |
| JournalEntry |  |
| JournalEntryGroup |  |
| JournalEntryPanel |  |
| JournalEntryType |  |
| JournalPanel |  |
| KeyframeEditor |  |
| KeyframeEventEditor |  |
| KeyframeWidget |  |
| Label |  |
| LabelingHelper |  |
| Law |  |
| LawGroup |  |
| LawType |  |
| Layer |  |
| LayerTreeItem |  |
| LegalDocsViewer |  |
| LegitimacyLevel |  |
| LensOption |  |
| LensTab |  |
| LensToolbar |  |
| LibertyDesireLevel |  |
| LoadIngameWindow |  |
| LoadingScreenManager |  |
| LobbyPlayer |  |
| LobbyView |  |
| Location |  |
| LocationFinder |  |
| LogEntry |  |
| LogViewer |  |
| LogViewerCategory |  |
| LogViewerEntry |  |
| LogViewerType |  |
| LoginView |  |
| LoyaltyType |  |
| MPConfig |  |
| MapContentEditorMode |  |
| MapContentEditorOptions |  |
| MapContentEditorViewport |  |
| MapContentEntryDesc |  |
| MapContentLayerDesc |  |
| MapContentPanel |  |
| MapContentPropertyGroup |  |
| MapContentPropertyGroupsGui |  |
| MapContentSelector |  |
| MapContentSelectorGui |  |
| MapEditor |  |
| MapEditorGui |  |
| MapEditorLayerBorder |  |
| MapEditorLayerBorderDockable |  |
| MapInteraction |  |
| MapInteractionManager |  |
| MapListActivateConscriptionCenterOption |  |
| MapListActivateConscriptionCenterPanel |  |
| MapListBuildingOption |  |
| MapListBuildingPanel |  |
| MapListColonyOption |  |
| MapListCountriesPanel |  |
| MapListCountryOption |  |
| MapListDecreeOption |  |
| MapListDecreePanel |  |
| MapListDeployMilitaryFormationToFrontOption |  |
| MapListDeployMilitaryFormationToFrontPanel |  |
| MapListDiploActionOption |  |
| MapListHarvestConditionAreasPanel |  |
| MapListHarvestConditionOption |  |
| MapListInterestGroupOption |  |
| MapListInterestGroupsPanel |  |
| MapListMarketOption |  |
| MapListMarketsPanel |  |
| MapListMilitaryFormationOption |  |
| MapListMilitaryFormationPanel |  |
| MapListOption |  |
| MapListPanel |  |
| MapListPanelManager |  |
| MapListPowerBlocInvitationPanel |  |
| MapListPowerBlocOption |  |
| MapListPowerBlocsPanel |  |
| MapListStateOption |  |
| MapListStatePanel |  |
| MapListStrategicRegionOption |  |
| MapListStrategicRegionsPanel |  |
| MapMode |  |
| MapModeList |  |
| MapNotification |  |
| MapObjectMask |  |
| MapObjectPainter |  |
| MapObjectPainterMode |  |
| MapObjectPainterOptions |  |
| MapObjectTool |  |
| Market |  |
| MarketGoods |  |
| MarketPanel |  |
| MarketsMarker |  |
| MarketsMarkerListItem |  |
| MaskEntry |  |
| MaskManagerEntry |  |
| MaskPainterDynamicTerrain |  |
| MaskPainterManager |  |
| MaskPainterMapContentPanel |  |
| MaskPainterMode |  |
| MaskPainterTool |  |
| MaskPainterViewport |  |
| Material |  |
| MaterialBrowser |  |
| MaterialEntry |  |
| MaterialMix |  |
| MaterialMixBrush |  |
| MaterialMixEntry |  |
| MaterialPaintingMode |  |
| Materials |  |
| MaterialsSample |  |
| MeshImporter |  |
| MeshImporterBrowser |  |
| MeshImporterBrowserEntry |  |
| MeshImporterMaterialEntry |  |
| MeshImporterMaterials |  |
| MessageFeedHandler |  |
| MessageSettingsWindow |  |
| MetadataWindow |  |
| MilitaryFormation |  |
| MilitaryFormationBorrowSetting |  |
| MilitaryFormationChangeNamePopup |  |
| MilitaryFormationColor |  |
| MilitaryFormationFlag |  |
| MilitaryFormationUnitEntry |  |
| MilitaryPanelBuildingEntry |  |
| MixBrushMode |  |
| MobilizationOption |  |
| MobilizationOptionGroup |  |
| Modifier |  |
| ModifierBreakdown |  |
| ModifierEntry |  |
| ModifierNodeData |  |
| ModifierNodeDebuggerView |  |
| ModifierNodeDetailsView |  |
| ModifierNodeGraphItem |  |
| ModifierNodeGraphLine |  |
| ModifierNodeListView |  |
| ModifiersPanel |  |
| MoveTool |  |
| MultiplayerSetupWindow |  |
| MultiplayerSynchronizationInfo |  |
| MusicPlayer |  |
| MusicPlayerCategory |  |
| MusicTrack |  |
| NationalAwakeningMarker |  |
| NationalizeBuildingGroup |  |
| NationalizeBuildingTypeGroup |  |
| NationalizeBuildingWindow |  |
| Node |  |
| NodeEditorSearch |  |
| NodeError |  |
| NodeLine |  |
| NodePin |  |
| NodeWindow |  |
| NonRegisteredDockable |  |
| NotificationDummyContext |  |
| NotificationOptionItem |  |
| NotificationSettingsItem |  |
| Nudger |  |
| NudgerLayerEntryMapObjectDesc |  |
| NudgerMapContentGui |  |
| NudgerMapObjectPropertyListDockable |  |
| NudgerMode |  |
| ObjectBrowser |  |
| ObjectBrowserView |  |
| ObjectInspector |  |
| ObjectInspectorDockable |  |
| ObjectInspectorPlugin |  |
| ObjectPreset |  |
| ObjectProvider |  |
| Objective |  |
| ObjectiveType |  |
| ObstinanceMarker |  |
| OccupationPiechartData |  |
| OosData |  |
| OosWindow |  |
| OpinionMarker |  |
| OutgoingFriendRequest |  |
| Outliner |  |
| OutlinerEntry |  |
| OutputEntry |  |
| PanelMilitary |  |
| ParametricSelect |  |
| ParticleUserData |  |
| Party |  |
| PartyPanel |  |
| PastBattleMarker |  |
| PauseMenu |  |
| PdxAccount |  |
| PdxCoreSetting |  |
| PdxEnumSetting |  |
| PdxGuiFoldOut |  |
| PdxGuiGfxVideoControl |  |
| PdxGuiTableRow |  |
| PdxGuiTreeTable |  |
| PdxGuiWidget |  |
| PdxSetting |  |
| PdxSettingsWindow |  |
| PdxSettingsWindowCategory |  |
| PdxValueSetting |  |
| PieTimer |  |
| PieTimerSlice |  |
| Playable |  |
| Player |  |
| PlayerJoinRequest |  |
| PlayerMessageItem |  |
| PlotLine |  |
| PoliticalLobby |  |
| PoliticalLobbyAppeasementFactor |  |
| PoliticalLobbyMarker |  |
| PoliticalLobbyPanel |  |
| PoliticalLobbyType |  |
| PoliticalMovement |  |
| PoliticalMovementCategory |  |
| PoliticalMovementPanel |  |
| PoliticalMovementPopSupportFactor |  |
| PoliticalMovementType |  |
| PoliticsPanel |  |
| Pop |  |
| PopBrowserPanel |  |
| PopConsumptionGoods |  |
| PopDetailsPanel |  |
| PopList |  |
| PopListItem |  |
| PopNeed |  |
| PopType |  |
| PopWithIG |  |
| PopsOverviewPanel |  |
| PopulationGrouping |  |
| PopupManager |  |
| Portrait3dView |  |
| PortraitDataContext |  |
| PortraitEditorAnimationItem |  |
| PortraitEditorWindow |  |
| PortraitTooltip |  |
| PotentialLeaderIdeology |  |
| PowerBloc |  |
| PowerBlocCoaPiece |  |
| PowerBlocCoaPieceSelector |  |
| PowerBlocCustomizationPopup |  |
| PowerBlocFormation |  |
| PowerBlocFormationPanel |  |
| PowerBlocFormationPrincipleSlot |  |
| PowerBlocIdentity |  |
| PowerBlocMapTexture |  |
| PowerBlocMapTextureSelector |  |
| PowerBlocPanel |  |
| PowerBlocPrinciple |  |
| PowerBlocPrincipleData |  |
| PowerBlocPrincipleGroup |  |
| PowerBlocPrincipleSelectionWindow |  |
| PowerBlocPrincipleSlot |  |
| PowerBlocStatue |  |
| PowerBlocStatueAccessoryType |  |
| PowerBlocStatueAccessoryTypeSelector |  |
| PowerBlocStatueHeroType |  |
| PowerBlocStatuePedestalType |  |
| PrestigeGoodChangeNamePopup |  |
| PreviewMaskTexture |  |
| ProductionMarker |  |
| ProductionMethod |  |
| ProductionMethodConfirmationPopup |  |
| ProductionMethodGroup |  |
| ProgressInterface |  |
| PropertyListCategory |  |
| Proposal |  |
| Province |  |
| RandomizableValueFloat |  |
| RandomizableValueInt |  |
| ReformGovernment |  |
| ReleaseCountryWindow |  |
| Religion |  |
| ReligionInfoPanel |  |
| RemoveFriendConfirmWindow |  |
| RepackWindow |  |
| ResignConfirmationWindow |  |
| RevolutionaryMovementMarker |  |
| RightClickMenuManager |  |
| RulerSelectionPopup |  |
| Savable |  |
| SavableGroup |  |
| SaveDialog |  |
| SaveGame |  |
| SaveGameAnalysisView |  |
| SaveGameAnalyzer |  |
| SaveGameBlockData |  |
| SaveGameConfigView |  |
| SaveGameItem |  |
| SaveGameListView |  |
| SaveGameWindow |  |
| Scope |  |
| ScopeDebugData |  |
| ScopeDebugInspectorPlugin |  |
| ScopeObjectEditor |  |
| ScopeObjectProvider |  |
| ScopeObjectType |  |
| ScopedEditorSettingsCategory |  |
| ScriptProfilerEntry |  |
| ScriptProfilerFileLine |  |
| ScriptProfilerGui |  |
| ScriptRunnerInspector |  |
| ScriptRunnerResult |  |
| ScriptedButton |  |
| ScriptedGui |  |
| ScriptedProgressBar |  |
| SeaNodeMarker |  |
| SeaNodeMovementMarker |  |
| SeaRegionInfraMarker |  |
| SeaRegionPanel |  |
| SeaRegionWar |  |
| SearchListNodeWindow |  |
| SelectFromInputNodeWindow |  |
| SelectParticleUserDataDialog |  |
| SelectTool |  |
| ServerInformation |  |
| SettingCategory |  |
| SettingsPage |  |
| ShippingLane |  |
| SkinEditor |  |
| SmartBrushHeightRange |  |
| SmartBrushPattern |  |
| SmartBrushPresetManager |  |
| SmartMaterialPaintingMode |  |
| Social |  |
| SocialClass |  |
| SocialHierarchy |  |
| SocialNotificationWindow |  |
| SocialUI |  |
| SocialWidget |  |
| SocietyPanel |  |
| SplineAdjustmentTool |  |
| SplineAdjustmentToolMode |  |
| SplineRiverInteractionMode |  |
| SplineRiverTool |  |
| SplineStripTool |  |
| SplineStripToolMode |  |
| SplineToolsMapContentPanel |  |
| SplineTypeCreateSelectionDropdown |  |
| SplineTypeItem |  |
| SplineTypeSwitchSelectionDropdown |  |
| SplineVisibilityDropdown |  |
| StagedCommanderTransfer |  |
| StagedFormation |  |
| StagedUnitsWithType |  |
| StarvationType |  |
| State |  |
| StateGoods |  |
| StateInfraMarker |  |
| StateMarker |  |
| StateNameChangePopup |  |
| StatePopulationPanel |  |
| StateRegion |  |
| StateTrait |  |
| StatesPanel |  |
| StatusWidget |  |
| StrategicRegion |  |
| StrategicRegionMarker |  |
| SubjectType |  |
| SupplyNetworkEntry |  |
| Sway |  |
| SwayCountryPanel |  |
| SwayOffer |  |
| SwayOfferType |  |
| TaxBurdenItem |  |
| TechTreeItem |  |
| TechTreeLine |  |
| TechTreePanel |  |
| Technology |  |
| TechnologyUnlock |  |
| TerrainToolButton |  |
| TextureEntry |  |
| TextureImporter |  |
| TextureList |  |
| TextureListDirectory |  |
| TextureListTexture |  |
| TextureNodeWindow |  |
| TextureViewer |  |
| Theater |  |
| Theme |  |
| ThemeBulkSelectionGroup |  |
| ThemeCategory |  |
| ThemeWindow |  |
| TickTaskData |  |
| TickTaskDebuggerView |  |
| TickTaskDetailsView |  |
| TickTaskGraphItem |  |
| TickTaskGraphLine |  |
| TickTaskListView |  |
| TimeKeeper |  |
| TimedModifier |  |
| TimelineKeyframe |  |
| ToastMessageHandler |  |
| ToolDialog |  |
| ToolDialogButton |  |
| ToolMessageDialog |  |
| ToolProgressDialog |  |
| ToolProperty |  |
| ToolProperty2SearchList |  |
| ToolPropertyAction |  |
| ToolPropertyBool |  |
| ToolPropertyCColor |  |
| ToolPropertyCString |  |
| ToolPropertyColor |  |
| ToolPropertyCurve |  |
| ToolPropertyFloat |  |
| ToolPropertyInt |  |
| ToolPropertyInt16 |  |
| ToolPropertyInt8 |  |
| ToolPropertyList |  |
| ToolPropertySearchList |  |
| ToolPropertyString |  |
| ToolPropertyUint |  |
| ToolPropertyUint16 |  |
| ToolPropertyUint8 |  |
| ToolPropertyUndoableSearchList |  |
| ToolPropertyVec1fPercent |  |
| ToolPropertyVec2f |  |
| ToolPropertyVec2fPercent |  |
| ToolPropertyVec2i |  |
| ToolPropertyVec3f |  |
| ToolPropertyVec3i |  |
| ToolPropertyVec4i |  |
| ToolsPropertyDraggableValueFloat |  |
| ToolsPropertyDraggableValueInt |  |
| ToolsPropertyDraggableValueVector2f |  |
| ToolsPropertyDraggableValueVector2i |  |
| ToolsPropertyDraggableValueVector3f |  |
| ToolsPropertyDraggableValueVector3i |  |
| ToolsPropertyDraggableValueVector4i |  |
| ToolsPropertyPath |  |
| ToolsPropertyRangedValueFloat |  |
| ToolsPropertyRangedValueInt |  |
| ToolsPropertyTextureStringValue |  |
| ToolsPropertyTextureValue |  |
| ToolsPropertyValueList |  |
| ToolsPropertyValueListEntry |  |
| ToolsPropertyVfsMountPath |  |
| ToolsSearch |  |
| ToolsSearchResult |  |
| ToolsUndoableValueBundleBool |  |
| ToolsUndoableValueBundleCColor |  |
| ToolsUndoableValueBundleCString |  |
| ToolsUndoableValueBundleColor |  |
| ToolsUndoableValueBundleFloat |  |
| ToolsUndoableValueBundleInt |  |
| ToolsUndoableValueBundleString |  |
| ToolsUndoableValueBundleUint |  |
| ToolsUndoableValueBundleUint16 |  |
| ToolsUndoableValueBundleVec2f |  |
| ToolsUndoableValueBundleVec2i |  |
| ToolsUndoableValueBundleVec3f |  |
| ToolsUndoableValueBundleVec3i |  |
| ToolsUndoableValueBundleVec4i |  |
| TooltipInfo |  |
| TopFrontend |  |
| TopScope |  |
| TransferFormationPopup |  |
| Treaty |  |
| TreatyDraft |  |
| TreatyDraftPanel |  |
| TreatyPanel |  |
| Truce |  |
| Tutorial |  |
| Tweakable |  |
| TweakableCategory |  |
| TweakableUiEntry |  |
| TweakablesSnapshot |  |
| Tweaker |  |
| Type |  |
| UndoHistoryViewerClient |  |
| UndoStack |  |
| UserDataNode |  |
| VariableEntry |  |
| VariableInspectorEntry |  |
| VariableInspectorPlugin |  |
| VariableInspectorVariable |  |
| VariableList |  |
| VariableListEntry |  |
| VariableListInspectorPlugin |  |
| VariableListStore |  |
| VariableStore |  |
| VariableSystem |  |
| VfsMountPathBrowser |  |
| VfsMountPathBrowserEntryNode |  |
| ViewerEntity |  |
| ViewerEntityLodInfo |  |
| ViewerEntityState |  |
| War |  |
| WarGoal |  |
| WarGoalDraft |  |
| WarGoalMarker |  |
| WarGoalPanelPair |  |
| WarGoalType |  |
| WarManager |  |
| WarPanel |  |
| WarParticipant |  |
| WorldMarketPanel |  |
| bool |  |
| double |  |
| float |  |
| int16 |  |
| int32 |  |
| int64 |  |
| int8 |  |
| uint16 |  |
| uint32 |  |
| uint64 |  |
| uint8 |  |
| void |  |

List of data types for promotes

| Type | Description |
| AIAttitude |  |
| AcceptanceStatus |  |
| AcceptanceStatusSegment |  |
| AddWarGoalPanel |  |
| AgitatorSlot |  |
| AlertSettingsItem |  |
| Amendment |  |
| AmendmentType |  |
| Article |  |
| ArticleDraft |  |
| Battle |  |
| BattleBuildingEntry |  |
| BattleMarker |  |
| BattlePanel |  |
| BattleParticipant |  |
| BattleParticipantsPanel |  |
| BattleSide |  |
| BattleUnitType |  |
| BrushSettings |  |
| BrushSettingsDropdown |  |
| BudgetPanel |  |
| Building |  |
| BuildingBrowserBuildingTypeItem |  |
| BuildingBrowserPanel |  |
| BuildingDetailsPanel |  |
| BuildingGroup |  |
| BuildingMarker |  |
| BuildingOwnership |  |
| BuildingPotentialMarker |  |
| BuildingProductionMethodsEntry |  |
| BuildingType |  |
| CanalType |  |
| ChangeLawPanel |  |
| ChangeProductionMethodMenuItem |  |
| Character |  |
| Chat |  |
| ChatNotificationMessage |  |
| ChatTab |  |
| CityMarker |  |
| CivilWar |  |
| ColonyMarker |  |
| CombatUnit |  |
| CombatUnitType |  |
| CommanderOrderType |  |
| CommanderPanel |  |
| Company |  |
| CompanyChangeNamePopup |  |
| CompanyCharter |  |
| CompanyPanel |  |
| CompanyType |  |
| ConstructionPanel |  |
| ConstructionQueueElement |  |
| ContextualDiplomaticActionType |  |
| ContextualDiplomaticPact |  |
| Country |  |
| CountryCreation |  |
| CountryDefinition |  |
| CountryFormation |  |
| CountryFormationPanel |  |
| CountryMarker |  |
| CountryPanel |  |
| CountryTrendPair |  |
| CulturalCommunity |  |
| Culture |  |
| CultureCasualtyStatistics |  |
| CultureInfoPanel |  |
| Decision |  |
| Decree |  |
| DecreeMarker |  |
| DecreeType |  |
| DiplomaticAction |  |
| DiplomaticActionType |  |
| DiplomaticActionWindow |  |
| DiplomaticCatalyst |  |
| DiplomaticCatalystCategory |  |
| DiplomaticCatalystType |  |
| DiplomaticDemand |  |
| DiplomaticOverviewPanel |  |
| DiplomaticPact |  |
| DiplomaticPlay |  |
| DiplomaticPlayConfirmation |  |
| DiplomaticPlayPanel |  |
| DiplomaticPlayType |  |
| DiplomaticRelations |  |
| DiscriminationTrait |  |
| DockableLayoutManager |  |
| EditorSettingsWindow |  |
| Election |  |
| ElectionPanel |  |
| EmployeeTransfer |  |
| Encyclopedia |  |
| EncyclopediaEntryView |  |
| EntityEditor |  |
| Event |  |
| EventIcon |  |
| EventMarker |  |
| EventTargetSetupContext |  |
| EventWindow |  |
| EyeDropper |  |
| EyeDropperPackedSample |  |
| FeedMessageItem |  |
| FoodSecurityFilter |  |
| FormationMarker |  |
| FormationPanel |  |
| Front |  |
| FrontEndLoadView |  |
| FrontEndMainView |  |
| FrontMarker |  |
| FrontMovementMarker |  |
| FrontPanel |  |
| FrontSide |  |
| GUIAchievement |  |
| GameMpSetup |  |
| GameRuleSetting |  |
| GameSetup |  |
| GeographicRegion |  |
| Goods |  |
| GoodsExpenseItem |  |
| GoodsList |  |
| GoodsLocalPricesPanel |  |
| GoodsPanel |  |
| GoodsPanelValue |  |
| GoodsProductionInfo |  |
| GoodsStatePanel |  |
| GoodsUsagePanel |  |
| GoodsWorldMarketPanel |  |
| GraphPanel |  |
| GuiGameRule |  |
| GuiGameRulePreset |  |
| HQMarker |  |
| HQMovementMarker |  |
| HarvestCondition |  |
| HarvestConditionArea |  |
| HarvestConditionType |  |
| HomelandMarker |  |
| Hq |  |
| Ideology |  |
| ImportantAlert |  |
| Institution |  |
| InstitutionType |  |
| Interest |  |
| InterestGroup |  |
| InterestGroupAndTraitPair |  |
| InterestGroupMarker |  |
| InterestGroupPanel |  |
| InterestGroupTrait |  |
| InterestingCountryItem |  |
| Invasion |  |
| InvasionMarker |  |
| InvasionPanel |  |
| InvasionPlannerPopup |  |
| JominiGameRules |  |
| JominiNotification |  |
| JominiSettingsWindow |  |
| JournalEntry |  |
| JournalEntryPanel |  |
| JournalEntryType |  |
| Law |  |
| LawGroup |  |
| LawType |  |
| LayerTreeItem |  |
| LensOption |  |
| LensToolbar |  |
| LoadIngameWindow |  |
| LoadingScreenManager |  |
| LobbyPlayer |  |
| LobbyView |  |
| LogViewer |  |
| MapContentEditorViewport |  |
| MapEditor |  |
| MapEditorGui |  |
| MapListActivateConscriptionCenterOption |  |
| MapListBuildingOption |  |
| MapListBuildingPanel |  |
| MapListColonyOption |  |
| MapListCountryOption |  |
| MapListDecreeOption |  |
| MapListDecreePanel |  |
| MapListDeployMilitaryFormationToFrontOption |  |
| MapListDiploActionOption |  |
| MapListHarvestConditionOption |  |
| MapListInterestGroupOption |  |
| MapListMarketOption |  |
| MapListOption |  |
| MapListPowerBlocInvitationPanel |  |
| MapListPowerBlocOption |  |
| MapListPowerBlocsPanel |  |
| MapListStateOption |  |
| MapListStrategicRegionOption |  |
| MapModeList |  |
| MapObjectPainterOptions |  |
| MapObjectTool |  |
| Market |  |
| MarketGoods |  |
| MarketPanel |  |
| MarketsMarker |  |
| MarketsMarkerListItem |  |
| MaskPainterViewport |  |
| MaterialBrowser |  |
| MaterialEntry |  |
| MaterialMixBrush |  |
| MaterialMixEntry |  |
| MaterialPaintingMode |  |
| MeshImporter |  |
| MilitaryFormation |  |
| MilitaryFormationChangeNamePopup |  |
| MilitaryFormationUnitEntry |  |
| MilitaryPanelBuildingEntry |  |
| MobilizationOption |  |
| Modifier |  |
| ModifierBreakdown |  |
| ModifierNodeDetailsView |  |
| ModifierNodeGraphItem |  |
| ModifiersPanel |  |
| MultiplayerSetupWindow |  |
| NationalAwakeningMarker |  |
| NationalizeBuildingGroup |  |
| NationalizeBuildingTypeGroup |  |
| NotificationSettingsItem |  |
| Objective |  |
| ObstinanceMarker |  |
| OccupationPiechartData |  |
| OosData |  |
| OpinionMarker |  |
| Outliner |  |
| OutlinerEntry |  |
| PanelMilitary |  |
| Party |  |
| PartyPanel |  |
| PastBattleMarker |  |
| PdxAccount |  |
| PdxGuiWidget |  |
| PdxSetting |  |
| Playable |  |
| Player |  |
| PlayerMessageItem |  |
| PoliticalLobby |  |
| PoliticalLobbyAppeasementFactor |  |
| PoliticalLobbyMarker |  |
| PoliticalLobbyPanel |  |
| PoliticalLobbyType |  |
| PoliticalMovement |  |
| PoliticalMovementCategory |  |
| PoliticalMovementPanel |  |
| PoliticalMovementType |  |
| PoliticsPanel |  |
| Pop |  |
| PopBrowserPanel |  |
| PopConsumptionGoods |  |
| PopDetailsPanel |  |
| PopList |  |
| PopListItem |  |
| PopNeed |  |
| PopType |  |
| PopWithIG |  |
| PopsOverviewPanel |  |
| PopulationGrouping |  |
| PopupManager |  |
| PortraitEditorWindow |  |
| PotentialLeaderIdeology |  |
| PowerBloc |  |
| PowerBlocCoaPiece |  |
| PowerBlocCoaPieceSelector |  |
| PowerBlocCustomizationPopup |  |
| PowerBlocFormation |  |
| PowerBlocFormationPanel |  |
| PowerBlocFormationPrincipleSlot |  |
| PowerBlocIdentity |  |
| PowerBlocMapTextureSelector |  |
| PowerBlocPanel |  |
| PowerBlocPrinciple |  |
| PowerBlocPrincipleData |  |
| PowerBlocPrincipleGroup |  |
| PowerBlocPrincipleSelectionWindow |  |
| PowerBlocPrincipleSlot |  |
| PowerBlocStatueAccessoryTypeSelector |  |
| PrestigeGoodChangeNamePopup |  |
| ProductionMarker |  |
| Proposal |  |
| Province |  |
| ReformGovernment |  |
| ReleaseCountryWindow |  |
| Religion |  |
| ReligionInfoPanel |  |
| RevolutionaryMovementMarker |  |
| SaveGameAnalysisView |  |
| SaveGameItem |  |
| SaveGameWindow |  |
| Scope |  |
| ScopeDebugInspectorPlugin |  |
| ScopedEditorSettingsCategory |  |
| ScriptProfilerGui |  |
| ScriptRunnerInspector |  |
| SeaNodeMovementMarker |  |
| SeaRegionInfraMarker |  |
| SeaRegionPanel |  |
| SeaRegionWar |  |
| ShippingLane |  |
| SmartBrushHeightRange |  |
| SmartBrushPattern |  |
| SocialClass |  |
| SocietyPanel |  |
| StagedCommanderTransfer |  |
| StagedFormation |  |
| StagedUnitsWithType |  |
| State |  |
| StateGoods |  |
| StateInfraMarker |  |
| StateMarker |  |
| StateNameChangePopup |  |
| StatePopulationPanel |  |
| StateRegion |  |
| StateTrait |  |
| StatesPanel |  |
| StrategicRegion |  |
| StrategicRegionMarker |  |
| SubjectType |  |
| SupplyNetworkEntry |  |
| Sway |  |
| SwayCountryPanel |  |
| SwayOffer |  |
| TechTreeItem |  |
| TechTreeLine |  |
| Technology |  |
| Theater |  |
| Theme |  |
| ThemeBulkSelectionGroup |  |
| ThemeCategory |  |
| ThemeWindow |  |
| TickTaskDetailsView |  |
| TickTaskGraphItem |  |
| TimeKeeper |  |
| ToastMessageHandler |  |
| TopScope |  |
| TransferFormationPopup |  |
| Treaty |  |
| TreatyDraft |  |
| TreatyDraftPanel |  |
| TreatyPanel |  |
| Truce |  |
| VariableEntry |  |
| VariableInspectorEntry |  |
| VariableInspectorPlugin |  |
| VariableInspectorVariable |  |
| VariableListEntry |  |
| VariableListInspectorPlugin |  |
| VariableListStore |  |
| VariableStore |  |
| VfsMountPathBrowser |  |
| ViewerEntity |  |
| War |  |
| WarGoal |  |
| WarGoalDraft |  |
| WarGoalMarker |  |
| WarGoalPanelPair |  |
| WarGoalType |  |
| WarPanel |  |
| WarParticipant |  |

### Data type descriptions
|  | Please help improve this article or section by [**expanding it**](https://vic3.paradoxwikis.com/index.php?title=GUI_script&action=edit) with: more descriptions. |

Data Types

| Type | Description | Notes |
| CFixedValue | 64 bit signed fixed point number with 5 decimal places | Max 92233720368547.75807, Min -92233720368547.75808 |

## Const vs nonconst
GUI script functions and promotes are categorized into two types: *const* and *nonconst*. These are generally identical in function, but one or the other may be required for certain uses.

Generally, functions and promotes starting with "Access" are used with and return a const type, while those starting with "Get" are used with and return a nonconst type.

A few functions and promotes break this convention:

- `GetTechnology('some_tech')` returns a const
- `Country.GetFleetsBreakdown` requires a const Country type

## GUI functions
GUI functions typically retrieve certain information from the input type or transform it in some way.

List of global functions

| Function | Arguments | Output | Description |
| Abs\_CFixedPoint | 1. CFixedPoint | CFixedPoint |  |
| Abs\_float | 1. float | float |  |
| Abs\_int32 | 1. int32 | int32 |  |
| Abs\_int64 | 1. int64 | int64 |  |
| AccessConstructionSpeeds |  | Unknown | Category: const |
| AccessMapEditorLayerBorders |  | Unknown | Map Editor - Access all Layer borders Category: const |
| AccessMetaPlayer |  | Player | Category: const |
| AccessPlayer |  | Player | Category: const |
| AccessScopeReference | 1. Scope | Unknown | Category: const |
| AddLocalizationIf | 1. bool 2. CString | CString |  |
| AddTextIf | 1. bool 2. CString | CString |  |
| Add\_CFixedPoint | 1. CFixedPoint 2. CFixedPoint | CFixedPoint |  |
| Add\_CVector2f | 1. CVector2f 2. CVector2f | CVector2f |  |
| Add\_float | 1. float 2. float | float |  |
| Add\_int32 | 1. int32 2. int32 | int32 |  |
| Add\_int64 | 1. int64 2. int64 | int64 |  |
| Add\_uint32 | 1. uint32 2. uint32 | uint32 |  |
| Add\_uint64 | 1. uint64 2. uint64 | uint64 |  |
| And | 1. bool 2. bool | bool |  |
| And3 | 1. bool 2. bool 3. bool | bool |  |
| And4 | 1. bool 2. bool 3. bool 4. bool | bool |  |
| And5 | 1. bool 2. bool 3. bool 4. bool 5. bool | bool |  |
| And6 | 1. bool 2. bool 3. bool 4. bool 5. bool 6. bool | bool |  |
| And7 | 1. bool 2. bool 3. bool 4. bool 5. bool 6. bool 7. bool | bool |  |
| And8 | 1. bool 2. bool 3. bool 4. bool 5. bool 6. bool 7. bool 8. bool | bool |  |
| AndEvalAll | 1. Unknown 2. Unknown | bool |  |
| AreAchievementsAvailable |  | bool |  |
| BetweenInclusiveOfMax\_CFixedPoint | 1. CFixedPoint 2. CFixedPoint 3. CFixedPoint | bool |  |
| BetweenInclusiveOfMax\_float | 1. float 2. float 3. float | bool |  |
| BetweenInclusiveOfMax\_int32 | 1. int32 2. int32 3. int32 | bool |  |
| BetweenInclusiveOfMax\_int64 | 1. int64 2. int64 3. int64 | bool |  |
| BetweenInclusiveOfMax\_uint32 | 1. uint32 2. uint32 3. uint32 | bool |  |
| BetweenInclusiveOfMax\_uint64 | 1. uint64 2. uint64 3. uint64 | bool |  |
| BetweenInclusiveOfMin\_CFixedPoint | 1. CFixedPoint 2. CFixedPoint 3. CFixedPoint | bool |  |
| BetweenInclusiveOfMin\_float | 1. float 2. float 3. float | bool |  |
| BetweenInclusiveOfMin\_int32 | 1. int32 2. int32 3. int32 | bool |  |
| BetweenInclusiveOfMin\_int64 | 1. int64 2. int64 3. int64 | bool |  |
| BetweenInclusiveOfMin\_uint32 | 1. uint32 2. uint32 3. uint32 | bool |  |
| BetweenInclusiveOfMin\_uint64 | 1. uint64 2. uint64 3. uint64 | bool |  |
| BetweenInclusive\_CFixedPoint | 1. CFixedPoint 2. CFixedPoint 3. CFixedPoint | bool |  |
| BetweenInclusive\_float | 1. float 2. float 3. float | bool |  |
| BetweenInclusive\_int32 | 1. int32 2. int32 3. int32 | bool |  |
| BetweenInclusive\_int64 | 1. int64 2. int64 3. int64 | bool |  |
| BetweenInclusive\_uint32 | 1. uint32 2. uint32 3. uint32 | bool |  |
| BetweenInclusive\_uint64 | 1. uint64 2. uint64 3. uint64 | bool |  |
| Between\_CFixedPoint | 1. CFixedPoint 2. CFixedPoint 3. CFixedPoint | bool |  |
| Between\_float | 1. float 2. float 3. float | bool |  |
| Between\_int32 | 1. int32 2. int32 3. int32 | bool |  |
| Between\_int64 | 1. int64 2. int64 3. int64 | bool |  |
| Between\_uint32 | 1. uint32 2. uint32 3. uint32 | bool |  |
| Between\_uint64 | 1. uint64 2. uint64 3. uint64 | bool |  |
| BindFoldOutContext |  | void | Add a new PdxGuiFoldOut data context to a widget. |
| BoolTo1And2 | 1. bool | int32 |  |
| BoolTo2And1 | 1. bool | int32 |  |
| CalcDynTrendLatestDate | 1. DataDynamicTrend | CString |  |
| CalcDynTrendOldestDate | 1. DataDynamicTrend | CString |  |
| CanEditSettingsAfterHost |  | bool | Multiplayer - If you can edit settings after hosting (depends on MP platform) |
| CanGetAchievements |  | bool |  |
| CanOpenLobby |  | bool |  |
| CanOpenRightClickContextMenu |  | bool |  |
| ChangeAllConstructionSpeed | 1. ProductionMethod | Command |  |
| ChangeAllConstructionSpeedTooltip | 1. ProductionMethod | CString |  |
| ClearDynamicTerrainOverrideForAllProvinces |  | void |  |
| ClearHostError |  | void | Multiplayer - Clear host error |
| CloseAllTooltips |  | void |  |
| ColorToVector3f | 1. CVector4f | CVector3f |  |
| ColorToVector3i | 1. CVector4f | CVector3i |  |
| ColorToVector4i | 1. CVector4f | CVector4i |  |
| ConcatIfNeitherEmpty | 1. CString 2. CString | CString |  |
| Concatenate | 1. CString 2. CString | CString |  |
| Concept | 1. GameConcept 2. CString | CString |  |
| CopyBuildVersionInfoToClipboard |  | void |  |
| CopyRNGSeedToClipboard |  | void |  |
| CopyServerID |  | void | Multiplayer - Copy Server ID of current session to clipboard |
| CurrentAndMaxToProgressbarValueInt32 | 1. int32 2. int32 | float | Get the progress (0.0-100.0) of CurrentArg to MaxArg. Value is clamped between 0 and 100. |
| DataModelFirst | 1. Unknown 2. int32 | Unknown |  |
| DataModelHasItems | 1. Unknown | bool |  |
| DataModelLast | 1. Unknown 2. int32 | Unknown |  |
| DataModelRepeatedItem | 1. int32 | Unknown | The data function used for mocking empty list items, requires int32 (number of items) as a parameter. Example: datamodel = [RepeatedItem( '(int32)4' )] |
| DataModelSkipFirst | 1. Unknown 2. int32 | Unknown |  |
| DataModelSkipLast | 1. Unknown 2. int32 | Unknown |  |
| DataModelSubSpan | 1. Unknown 2. int32 3. int32 | Unknown |  |
| DebugGetMapMode |  | CString |  |
| DemobilizeSelectedArmies |  | Command |  |
| Divide\_CFixedPoint | 1. CFixedPoint 2. CFixedPoint | CFixedPoint |  |
| Divide\_CVector2f | 1. CVector2f 2. CVector2f | CVector2f |  |
| Divide\_float | 1. float 2. float | float |  |
| Divide\_int32 | 1. int32 2. int32 | int32 |  |
| Divide\_int64 | 1. int64 2. int64 | int64 |  |
| Divide\_uint32 | 1. uint32 2. uint32 | uint32 |  |
| Divide\_uint64 | 1. uint64 2. uint64 | uint64 |  |
| DoubleToFloat | 1. double | float |  |
| EqualTo\_CFixedPoint | 1. CFixedPoint 2. CFixedPoint | bool |  |
| EqualTo\_CVector2f | 1. CVector2f 2. CVector2f | bool |  |
| EqualTo\_float | 1. float 2. float | bool |  |
| EqualTo\_int32 | 1. int32 2. int32 | bool |  |
| EqualTo\_int64 | 1. int64 2. int64 | bool |  |
| EqualTo\_string | 1. CString 2. CString | bool |  |
| EqualTo\_uint32 | 1. uint32 2. uint32 | bool |  |
| EqualTo\_uint64 | 1. uint64 2. uint64 | bool |  |
| Execute | 1. Command | void |  |
| ExecuteConsoleCommand | 1. CString | void | Execute a single console command with a given command. |
| ExecuteConsoleCommands | 1. CString | void | Execute a sequence of console commands split by ';'. And stops the sequence execution if a console command fails. |
| ExecuteConsoleCommandsForced | 1. CString | void | Execute a sequence of console commands split by ';'. Keeps the sequence execution even if a console command fails. |
| FixedPointToFloat | 1. CFixedPoint | float |  |
| FixedPointToInt | 1. CFixedPoint | int32 |  |
| FixedPointToProgressbarValue | 1. CFixedPoint | float | Convert to a progress percentage value (by multiplying with 100, unclamped). |
| FocusCameraOnCityOutOfState |  | void |  |
| GameHasMultiplePlayers |  | bool |  |
| GameIsMultiplayer |  | bool |  |
| GetAIStrategy | 1. Unknown | AIStrategy | Category: nonconst |
| GetAcceptanceStatus | 1. AcceptanceStatus | AcceptanceStatus | Category: nonconst |
| GetAchievementsAvailableString |  | CString | Category: nonconst |
| GetActivismLabelsDesc |  | CString | Category: nonconst |
| GetAllPowerBlocs |  | Unknown | Category: nonconst |
| GetAmendmentType | 1. Unknown | AmendmentType | Category: nonconst |
| GetApprovalRatingFromValue | 1. Unknown | CString | Category: nonconst |
| GetArrowIcon\_CFixedPoint | 1. CFixedPoint | CString | Category: nonconst |
| GetArrowIcon\_int32 | 1. int32 | CString | Category: nonconst |
| GetArrowIcon\_int64 | 1. int64 | CString | Category: nonconst |
| GetArticleType | 1. TreatyArticle | ArticleType | Category: nonconst |
| GetAutosaveName |  | CString | Category: nonconst |
| GetBasicAdmiralOrdersBreakdown |  | CString | Category: nonconst |
| GetBasicGeneralOrdersBreakdown |  | CString | Category: nonconst |
| GetBattalionGroupsList |  | CString | Category: nonconst |
| GetBattleCondition | 1. BattleCondition | BattleCondition | Category: nonconst |
| GetBuildVersionDescriptionWithClickToCopy |  | CString | Category: nonconst |
| GetBuildingGroup | 1. Unknown | BuildingGroup | Category: nonconst |
| GetBuildingType | 1. BuildingType | BuildingType | Category: nonconst |
| GetCanGoToFrontend |  | bool | Multiplayer GUI - Can we go back to the frontend? |
| GetCanGoToFrontendDesc |  | CString | Multiplayer GUI - Message if we can't go back to the frontend |
| GetCharacterTrait | 1. CharacterTrait | CharacterTrait | Category: nonconst |
| GetCohesionLevel | 1. Unknown | CohesionLevel | Category: nonconst |
| GetCohesionLevels |  | Unknown | Category: nonconst |
| GetCombatUnitGroup | 1. CombatUnitGroup | CombatUnitGroup | Category: nonconst |
| GetCombatUnitType | 1. CombatUnit | CombatUnitType | Category: nonconst |
| GetCommanderOrderType | 1. CommanderOrder | CommanderOrderType | Category: nonconst |
| GetCompanyCharterType | 1. CompanyCharterType | CompanyCharterType | Category: nonconst |
| GetCompanyCharterTypes |  | Unknown | Category: nonconst |
| GetConfirmationDesc | 1. Unknown | CString | Category: nonconst |
| GetConstructionSectorType |  | BuildingType | Category: nonconst |
| GetCountryDiplomaticAction | 1. DiplomaticAction 2. Country 3. Country | DiplomaticAction | Category: nonconst |
| GetCountryStrategicObjectiveInStateDesc | 1. Country 2. State | CString | Category: nonconst |
| GetCulture | 1. Culture | Culture | Category: nonconst |
| GetCurrentFps |  | float | Category: nonconst |
| GetCurrentLoadingScreen |  | Unknown | Category: nonconst |
| GetDataModelSize | 1. Unknown | int32 | Category: nonconst |
| GetDecreeType | 1. Decree | DecreeType | Category: nonconst |
| GetDefaultServerName |  | CUTF8String | Category: nonconst |
| GetDefine | 1. CString 2. CString | Unknown | Category: nonconst |
| GetDefineAtIndex | 1. CString 2. CString 3. Unknown | Unknown | Category: nonconst |
| GetDesc | 1. Command | CString | Category: nonconst |
| GetDescriptiveText | 1. MapInteraction | CString | Category: nonconst |
| GetDiplomaticActionType | 1. DiplomaticAction | DiplomaticActionType | Category: nonconst |
| GetDiplomaticPlayType | 1. DiplomaticPlay | DiplomaticPlayType | Category: nonconst |
| GetDiscordUrl |  | Unknown | Category: nonconst |
| GetDlcCollection |  | Unknown | Category: nonconst |
| GetDynTrendMax | 1. DataDynamicTrend | CFixedPoint | Category: nonconst |
| GetDynTrendMin | 1. DataDynamicTrend | CFixedPoint | Category: nonconst |
| GetDynTrendPlotPoints | 1. DataDynamicTrend 2. CFixedPoint 3. CFixedPoint | Unknown | Category: nonconst |
| GetEconomicDependenceOnLabel | 1. CFixedPoint | CString | Category: nonconst |
| GetEnabledDlcNames |  | Unknown | Category: nonconst |
| GetEnumIndex | 1. Unknown | CVector2i | Settings - Get the dropdown index of an enum setting. Category: nonconst |
| GetEthnicities |  | Unknown | Portrait System - Get all Ethnicities |
| GetEventOptionTextAlignment |  | Unknown | Category: nonconst |
| GetFlotillaGroupsList |  | CString | Category: nonconst |
| GetGameVersionDisplay |  | CString | Category: nonconst |
| GetGameVersionInfo |  | CString | Category: nonconst |
| GetGameVersionInfoShort |  | CString | Category: nonconst |
| GetGeographicRegion | 1. GeographicRegion | GeographicRegion | Category: nonconst |
| GetGlobalList | 1. CString | Unknown | Category: nonconst |
| GetGlobalMaxLandDefense |  | CFixedPoint | Category: nonconst |
| GetGlobalMaxLandOffense |  | CFixedPoint | Category: nonconst |
| GetGlobalMaxNavalDefense |  | CFixedPoint | Category: nonconst |
| GetGlobalMaxNavalOffense |  | CFixedPoint | Category: nonconst |
| GetGlobalRandomSeed |  | uint32 | Category: nonconst |
| GetGlobalRandomSeedString |  | CString | Category: nonconst |
| GetGlobalVariable | 1. CString | Scope | Category: nonconst |
| GetGoods | 1. Goods | Goods | Category: nonconst |
| GetGuiEntityShaderRenderpass |  | Unknown | Category: nonconst |
| GetGuiPositionFromPercentCoordinates | 1. Unknown 2. Unknown 3. Unknown | Unknown | Category: nonconst |
| GetHarvestConditionType | 1. HarvestConditionType | HarvestConditionType | Category: nonconst |
| GetHarvestConditionTypesList |  | CString | Category: nonconst |
| GetHostError |  | CUTF8String | Multiplayer - Get host error |
| GetIdeology | 1. Ideology | Ideology | Category: nonconst |
| GetInstitutionType | 1. Institution | InstitutionType | Category: nonconst |
| GetInteger | 1. Unknown | int32 | Category: nonconst |
| GetInterestGroupVariant | 1. InterestGroup 2. Country | InterestGroup | Category: nonconst |
| GetInterestingCountrySettings |  | Unknown | Category: nonconst |
| GetInvParentScale | 1. Unknown | float | Category: nonconst |
| GetIsChecked | 1. Unknown | bool | Settings - If the bool setting is checked Category: nonconst |
| GetJournalEntryGroup | 1. Unknown | JournalEntryGroup | Category: nonconst |
| GetLabel | 1. TerrainLabel | Label | Category: nonconst |
| GetLargeFlagFrameSize |  | CVector2i | Category: nonconst |
| GetLargePowerBlocCoaFrameSize |  | CVector2i | Category: nonconst |
| GetLatestDate | 1. DataTrend | CString | Category: nonconst |
| GetLawGroup | 1. LawGroup | LawGroup | Category: nonconst |
| GetLawType | 1. LawType | LawType | Category: nonconst |
| GetLegitimacyLevel | 1. LegitimacyLevel | LegitimacyLevel | Category: nonconst |
| GetLegitimacyLevels |  | Unknown | Category: nonconst |
| GetLensToolbar |  | LensToolbar | Category: nonconst |
| GetLibertyDesireLevel | 1. Unknown | LibertyDesireLevel | Category: nonconst |
| GetLibertyDesireLevels |  | Unknown | Category: nonconst |
| GetLoadingScreenManager |  | LoadingScreenManager | Category: nonconst |
| GetLocalizedDefine | 1. Unknown 2. Unknown | CString | Category: nonconst |
| GetLocalizedDefineAtIndex | 1. Unknown 2. Unknown 3. Unknown | CString | Category: nonconst |
| GetLoyaltyTypes |  | Unknown | Category: nonconst |
| GetMPChecksum |  | CString | Category: nonconst |
| GetManpowerColorVec | 1. Unknown | CVector4f | Category: nonconst |
| GetMapMode | 1. Unknown | MapMode | Category: nonconst |
| GetMapModeIcon | 1. Unknown | Unknown | Category: nonconst |
| GetMapModeIndices |  | Unknown | Category: nonconst |
| GetMapModeName | 1. Unknown | CString | Category: nonconst |
| GetMax | 1. DataTrend | CFixedPoint | Category: nonconst |
| GetMediumFlagFrameSize |  | CVector2i | Category: nonconst |
| GetMediumPowerBlocCoaFrameSize |  | CVector2i | Category: nonconst |
| GetMetaPlayer |  | Player | Category: nonconst |
| GetMin | 1. DataTrend | CFixedPoint | Category: nonconst |
| GetMobilizationOption | 1. Unknown | MobilizationOption | Category: nonconst |
| GetMobilizationOptionGroup | 1. Unknown | MobilizationOptionGroup | Category: nonconst |
| GetMobilizationOptionGroups |  | Unknown | Category: nonconst |
| GetMoraleColorString | 1. CFixedPoint | CString | Category: nonconst |
| GetMoraleColorVec | 1. CFixedPoint | CVector4f | Category: nonconst |
| GetNumCommandersInSelectedFormations |  | int32 | Category: nonconst |
| GetNumCommandersInSelectedFormationsWithOrderActive | 1. CommanderOrderType | int32 | Category: nonconst |
| GetNumCommandersInSelectedFormationsWithOrderBlocked | 1. CommanderOrderType | int32 | Category: nonconst |
| GetNumCommandersInSelectedFormationsWithOrderNext | 1. CommanderOrderType | int32 | Category: nonconst |
| GetNumCommandersInSelectedFormationsWithOrderPossible | 1. CommanderOrderType | int32 | Category: nonconst |
| GetNumSelectedArmies |  | int32 | Category: nonconst |
| GetNumSelectedArmiesWithDemobilizationActive |  | int32 | Category: nonconst |
| GetNumSelectedArmiesWithDemobilizationBlocked |  | int32 | Category: nonconst |
| GetNumSelectedArmiesWithDemobilizationPossible |  | int32 | Category: nonconst |
| GetNumSelectedArmiesWithMobilizationActive |  | int32 | Category: nonconst |
| GetNumSelectedArmiesWithMobilizationBlocked |  | int32 | Category: nonconst |
| GetNumSelectedArmiesWithMobilizationPossible |  | int32 | Category: nonconst |
| GetNumSelectedArmiesWithRaiseConscriptsActive |  | int32 | Category: nonconst |
| GetNumSelectedArmiesWithRaiseConscriptsBlocked |  | int32 | Category: nonconst |
| GetNumSelectedArmiesWithRaiseConscriptsPossible |  | int32 | Category: nonconst |
| GetNumSelectedFleets |  | int32 | Category: nonconst |
| GetNumSelectedFormations |  | int32 | Category: nonconst |
| GetNumberAbove\_int32 | 1. int32 2. int32 | int32 | Category: nonconst |
| GetNumberOfShadersCompiled |  | int32 | Category: nonconst |
| GetOldestDate | 1. DataTrend | CString | Category: nonconst |
| GetOpenLobbyTooltip |  | CString | Category: nonconst |
| GetOrganizationColorVec | 1. CFixedPoint | CVector4f | Category: nonconst |
| GetPlayer |  | Country | Category: nonconst |
| GetPlayerResourcesUrl |  | Unknown | Category: nonconst |
| GetPlayersCount |  | int32 | Multiplayer - No of players of current session |
| GetPopNeed | 1. PopNeed | PopNeed | Category: nonconst |
| GetPopType | 1. PopType | PopType | Category: nonconst |
| GetPortraitRenderSize | 1. PdxGuiWidget | CVector2f | Category: nonconst |
| GetPortraitTextureFromDna | 1. Unknown 2. CVector2f | Unknown | Category: nonconst |
| GetPowerBlocIdentity | 1. PowerBlocIdentity | PowerBlocIdentity | Category: nonconst |
| GetPowerBlocPrincipleGroup | 1. PrincipleGroup | PowerBlocPrincipleGroup | Category: nonconst |
| GetPrevTrendValue | 1. DataTrend | CFixedPoint | Category: nonconst |
| GetPrevTrendValueFor | 1. Unknown 2. Unknown | CFixedPoint | Category: nonconst |
| GetRandomLogInfo |  | CString | Category: nonconst |
| GetRankModifier | 1. CountryRank | Modifier | Category: nonconst |
| GetRawTextTooltipTag | 1. CString | CString | Category: nonconst |
| GetRawTrendPlotRectWithFixedY | 1. Unknown 2. Unknown 3. Unknown | CPdxFloatRect | Category: nonconst |
| GetReligion | 1. Religion | Religion | Category: nonconst |
| GetResolutionWithAspectRatio |  | CVector2f | Category: nonconst |
| GetRomanNumeral | 1. int32 | CString | Category: nonconst |
| GetSelectedFormationsList |  | CString | Category: nonconst |
| GetSelectedMapMode |  | CVector2i | Category: nonconst |
| GetSelectedMapModeName |  | CString | Category: nonconst |
| GetSmallFlagFrameSize |  | CVector2i | Category: nonconst |
| GetSmallPowerBlocCoaFrameSize |  | CVector2i | Category: nonconst |
| GetSmartBrushInterpolationNames |  | Unknown | Map Editor - Smart Material Painter - Interpolation Names |
| GetSmartBrushPatternNames |  | Unknown | Map Editor - Smart Material Painter - Pattern Names |
| GetStarvationTypes |  | Unknown | Category: nonconst |
| GetStateRegion | 1. StateRegion | StateRegion | Category: nonconst |
| GetStaticModifier | 1. Modifier | Modifier | Category: nonconst |
| GetStrategicRegion | 1. StrategicRegion | StrategicRegion | Category: nonconst |
| GetStringSettingText | 1. Unknown | CString | Settings - Get the string setting text Category: nonconst |
| GetString\_CPdxFloatRect | 1. CPdxFloatRect | CString | Category: nonconst |
| GetString\_CPdxIntRect | 1. CPdxIntRect | CString | Category: nonconst |
| GetString\_CVector2f | 1. CVector2f | CString | Category: nonconst |
| GetString\_CVector2i | 1. CVector2i | CString | Category: nonconst |
| GetString\_CVector3f | 1. CVector3f | CString | Category: nonconst |
| GetString\_CVector3i | 1. CVector3i | CString | Category: nonconst |
| GetString\_CVector4f | 1. CVector4f | CString | Category: nonconst |
| GetString\_CVector4i | 1. CVector4i | CString | Category: nonconst |
| GetSubjectType | 1. SubjectType | SubjectType | Category: nonconst |
| GetSubjectTypes |  | Unknown | Category: nonconst |
| GetSubjectTypesList |  | CString | Category: nonconst |
| GetSupplyNetworkColorstring | 1. CFixedPoint | CString | Category: nonconst |
| GetSupportLabelsDesc |  | CString | Category: nonconst |
| GetTechnology | 1. Technology | Technology | Category: nonconst |
| GetTrendIcon | 1. DataTrend | CString | Category: nonconst |
| GetTrendIconFor | 1. Unknown 2. Unknown | CString | Category: nonconst |
| GetTrendPlotPoints | 1. Unknown | Unknown | Category: nonconst |
| GetTrendPlotPointsAbsolute | 1. Unknown | Unknown | Category: nonconst |
| GetTrendPlotPointsNormalized | 1. DataTrend 2. CFixedPoint 3. CFixedPoint | Unknown | Category: nonconst |
| GetTrendValue | 1. DataTrend | CFixedPoint | Category: nonconst |
| GetTrendValueFor | 1. Unknown 2. Unknown | CFixedPoint | Category: nonconst |
| GetUnitStrengthHeader | 1. int64 2. int64 3. CString | CString | Category: nonconst |
| GetUnitStrengthHeaderNoIcon | 1. Unknown 2. Unknown | CString | Category: nonconst |
| GetVarTimeRemaining | 1. Unknown 2. Unknown | int32 | Category: nonconst |
| GetVeryLargePowerBlocCoaFrameSize |  | CVector2i | Category: nonconst |
| GetVerySmallPowerBlocCoaFrameSize |  | CVector2i | Category: nonconst |
| GetWarGoalType | 1. Unknown | WarGoalType | Category: nonconst |
| GetWikiUrl |  | Unknown | Category: nonconst |
| GetYoutubeChannelUrl |  | Unknown | Category: nonconst |
| GfxGetSkins |  | Unknown |  |
| GfxSetActiveSkin | 1. CString | void |  |
| GfxSkinIsActive | 1. CString | bool |  |
| GoToFrontend |  | void | Multiplayer GUI - Go back to the frontend |
| GreaterThanOrEqualTo\_CFixedPoint | 1. CFixedPoint 2. CFixedPoint | bool |  |
| GreaterThanOrEqualTo\_float | 1. float 2. float | bool |  |
| GreaterThanOrEqualTo\_int32 | 1. int32 2. int32 | bool |  |
| GreaterThanOrEqualTo\_int64 | 1. int64 2. int64 | bool |  |
| GreaterThanOrEqualTo\_uint32 | 1. uint32 2. uint32 | bool |  |
| GreaterThanOrEqualTo\_uint64 | 1. uint64 2. uint64 | bool |  |
| GreaterThan\_CFixedPoint | 1. CFixedPoint 2. CFixedPoint | bool |  |
| GreaterThan\_float | 1. float 2. float | bool |  |
| GreaterThan\_int32 | 1. int32 2. int32 | bool |  |
| GreaterThan\_int64 | 1. int64 2. int64 | bool |  |
| GreaterThan\_uint32 | 1. uint32 2. uint32 | bool |  |
| GreaterThan\_uint64 | 1. uint64 2. uint64 | bool |  |
| HasAnyAvailableNewThemes |  | bool |  |
| HasAnySelections | 1. Unknown | bool |  |
| HasAnyThemeIssues |  | bool |  |
| HasCitiesOutOfState |  | bool |  |
| HasDlcFeature | 1. DlcFeature | bool |  |
| HasGameLoadedToMainMenu |  | bool |  |
| HasGameStartedForTheFirstTime |  | bool |  |
| HasGameState |  | bool |  |
| HasHostError |  | bool |  |
| HasValidSelectedFormationsToCancelStrategicObjective | 1. Unknown | bool |  |
| HasValidSelectedFormationsToSetStrategicObjective | 1. Unknown | bool |  |
| InDebugMode |  | bool |  |
| InReleaseMode |  | bool |  |
| IntToFixedPoint | 1. int32 | CFixedPoint |  |
| IntToFloat | 1. int32 | float |  |
| IntToFrameIndex | 1. int32 | int32 | Adds 1 to Arg1. |
| IntToUnsigned | 1. int32 | uint32 |  |
| IsCameraRestrictionsEnabled |  | bool | Map Editor - If camera restrictions are on |
| IsCurrentProductionMethod | 1. ProductionMethod | bool |  |
| IsDataModelEmpty | 1. Unknown | bool |  |
| IsDrawCityDebugGrid |  | bool |  |
| IsDrawCityDebugSpheres |  | bool |  |
| IsDynTrendEmpty | 1. DataDynamicTrend | bool |  |
| IsDynamicTerrainAutoUpdate |  | bool |  |
| IsDynamicsEnabled |  | bool |  |
| IsEmpty | 1. DataTrend | bool |  |
| IsEven\_int32 | 1. int32 | bool |  |
| IsEven\_int64 | 1. int64 | bool |  |
| IsEven\_uint32 | 1. uint32 | bool |  |
| IsEven\_uint64 | 1. uint64 | bool |  |
| IsGameChecksumOk |  | bool |  |
| IsGameOverScreenShown |  | bool |  |
| IsGamePaused |  | bool |  |
| IsHost |  | bool |  |
| IsInGame |  | bool |  |
| IsIronmanEnabled |  | bool |  |
| IsLoadedFromSave |  | bool |  |
| IsMapModeIndexSelected | 1. Unknown | bool |  |
| IsMapModeLocked |  | bool |  |
| IsMapModeSelected | 1. MapMode | bool |  |
| IsObserver |  | bool |  |
| IsOdd\_int32 | 1. int32 | bool |  |
| IsOdd\_int64 | 1. int64 | bool |  |
| IsOdd\_uint32 | 1. uint32 | bool |  |
| IsOdd\_uint64 | 1. uint64 | bool |  |
| IsPauseMenuShown |  | bool |  |
| IsPotential | 1. Command | bool |  |
| IsPreparationLobby |  | bool |  |
| IsRedundant | 1. Command | bool |  |
| IsSaving |  | bool |  |
| IsTerrainManipulatorProvincesPreview |  | bool |  |
| IsTutorialLessonActive | 1. Unknown | bool |  |
| IsValid | 1. Command | bool |  |
| IsZoomLevelFar |  | bool |  |
| IsZoomLevelMax |  | bool |  |
| IsZoomLevelMid |  | bool |  |
| IsZoomLevelNear |  | bool |  |
| JoinText | 1. CString 2. CString 3. CString | CString |  |
| JominiAccessPlayerJoinRequests |  | Unknown |  |
| JominiAreAchievementsAvailable |  | bool |  |
| JominiGetAchievementsNotAvailableString |  | CString | Jomini Achievements - Get text why achievements are not available |
| JominiGetMultiplayerAccessibleString |  | CString |  |
| JominiHasPlayerJoinRequests |  | bool |  |
| JominiIsHostOrLocal |  | bool |  |
| JominiIsMultiplayerAccessible |  | bool |  |
| JominiMultiplayerIsCrossplayEnabled |  | bool |  |
| JominiMultiplayerIsCrossplayFilterAvailable |  | bool |  |
| JominiPlayer |  | Playable |  |
| LessThanOrEqualTo\_CFixedPoint | 1. CFixedPoint 2. CFixedPoint | bool |  |
| LessThanOrEqualTo\_float | 1. float 2. float | bool |  |
| LessThanOrEqualTo\_int32 | 1. int32 2. int32 | bool |  |
| LessThanOrEqualTo\_int64 | 1. int64 2. int64 | bool |  |
| LessThanOrEqualTo\_uint32 | 1. uint32 2. uint32 | bool |  |
| LessThanOrEqualTo\_uint64 | 1. uint64 2. uint64 | bool |  |
| LessThan\_CFixedPoint | 1. CFixedPoint 2. CFixedPoint | bool |  |
| LessThan\_float | 1. float 2. float | bool |  |
| LessThan\_int32 | 1. int32 2. int32 | bool |  |
| LessThan\_int64 | 1. int64 2. int64 | bool |  |
| LessThan\_uint32 | 1. uint32 2. uint32 | bool |  |
| LessThan\_uint64 | 1. uint64 2. uint64 | bool |  |
| Localize | 1. CString | CString |  |
| LocalizeInputAction | 1. Unknown | CString |  |
| MakeScopeBool | 1. bool | Scope |  |
| MakeScopeFlag | 1. Unknown | Scope |  |
| MakeScopeValue | 1. CFixedPoint | Scope |  |
| Max\_CFixedPoint | 1. CFixedPoint 2. CFixedPoint | CFixedPoint |  |
| Max\_float | 1. float 2. float | float |  |
| Max\_int32 | 1. int32 2. int32 | int32 |  |
| Max\_int64 | 1. int64 2. int64 | int64 |  |
| Max\_uint32 | 1. uint32 2. uint32 | uint32 |  |
| Max\_uint64 | 1. uint64 2. uint64 | uint64 |  |
| MergeSelectedFormations |  | Command |  |
| Min\_CFixedPoint | 1. CFixedPoint 2. CFixedPoint | CFixedPoint |  |
| Min\_float | 1. float 2. float | float |  |
| Min\_int32 | 1. int32 2. int32 | int32 |  |
| Min\_int64 | 1. int64 2. int64 | int64 |  |
| Min\_uint32 | 1. uint32 2. uint32 | uint32 |  |
| Min\_uint64 | 1. uint64 2. uint64 | uint64 |  |
| MobilizeSelectedArmies |  | Command |  |
| Modulo\_int32 | 1. int32 2. int32 | int32 |  |
| Modulo\_int64 | 1. int64 2. int64 | int64 |  |
| Modulo\_uint32 | 1. uint32 2. uint32 | uint32 |  |
| Modulo\_uint64 | 1. uint64 2. uint64 | uint64 |  |
| Multiply\_CFixedPoint | 1. CFixedPoint 2. CFixedPoint | CFixedPoint |  |
| Multiply\_CVector2f | 1. CVector2f 2. CVector2f | CVector2f |  |
| Multiply\_float | 1. float 2. float | float |  |
| Multiply\_int32 | 1. int32 2. int32 | int32 |  |
| Multiply\_int64 | 1. int64 2. int64 | int64 |  |
| Multiply\_uint32 | 1. uint32 2. uint32 | uint32 |  |
| Multiply\_uint64 | 1. uint64 2. uint64 | uint64 |  |
| NOP |  | void | No Operation (dummy callback function) |
| Nbsp |  | CString |  |
| Negate\_CFixedPoint | 1. CFixedPoint | CFixedPoint |  |
| Negate\_float | 1. float | float |  |
| Negate\_int32 | 1. int32 | int32 |  |
| Negate\_int64 | 1. int64 | int64 |  |
| Not | 1. bool | bool |  |
| NotEqualTo\_CFixedPoint | 1. CFixedPoint 2. CFixedPoint | bool |  |
| NotEqualTo\_CVector2f | 1. CVector2f 2. CVector2f | bool |  |
| NotEqualTo\_float | 1. float 2. float | bool |  |
| NotEqualTo\_int32 | 1. int32 2. int32 | bool |  |
| NotEqualTo\_int64 | 1. int64 2. int64 | bool |  |
| NotEqualTo\_uint32 | 1. uint32 2. uint32 | bool |  |
| NotEqualTo\_uint64 | 1. uint64 2. uint64 | bool |  |
| ObjectsEqual | 1. Unknown 2. Unknown | bool |  |
| ObserveCountryCommand | 1. Unknown | Command |  |
| OnCreateAccount |  | void | Start the account creation flow |
| OnToggleLoginWindow |  | void |  |
| OpenAchievements |  | void |  |
| OpenDiscordUrl |  | void |  |
| OpenGameRules |  | void |  |
| OpenPlayerResourcesUrl |  | void |  |
| OpenWikiUrl |  | void |  |
| OpenYoutubeChannelUrl |  | void |  |
| Or | 1. bool 2. bool | bool |  |
| Or3 | 1. bool 2. bool 3. bool | bool |  |
| Or4 | 1. bool 2. bool 3. bool 4. bool | bool |  |
| Or5 | 1. bool 2. bool 3. bool 4. bool 5. bool | bool |  |
| Or6 | 1. bool 2. bool 3. bool 4. bool 5. bool 6. bool | bool |  |
| Or7 | 1. bool 2. bool 3. bool 4. bool 5. bool 6. bool 7. bool | bool |  |
| Or8 | 1. bool 2. bool 3. bool 4. bool 5. bool 6. bool 7. bool 8. bool | bool |  |
| OrEvalAll | 1. Unknown 2. Unknown | bool |  |
| PauseAllConstruction |  | Command |  |
| PauseAllConstructionTooltip |  | CString |  |
| PdxClearEditBoxText | 1. Unknown | void |  |
| PdxGetProfilerNames |  | Unknown |  |
| PdxGetWidgetScreenSize | 1. PdxGuiWidget | CVector2f |  |
| PdxGuiDestroyWidget | 1. PdxGuiWidget | void | Destroy widget |
| PdxGuiEditboxGetText | 1. Unknown | CUTF8String |  |
| PdxGuiInterruptAllAnimations | 1. CString | void |  |
| PdxGuiInterruptThenTriggerAllAnimations | 1. CString 2. CString | void |  |
| PdxGuiTriggerAllAnimations | 1. CString | void |  |
| PdxProfilerFilterNext |  | void |  |
| PdxProfilerFilterPrev |  | void |  |
| PdxProfilerFilterTimers |  | void |  |
| PdxProfilerGetCurrentFrame |  | int32 |  |
| PdxProfilerGetFrameTimeMs |  | float |  |
| PdxProfilerGetNsPerTick |  | float |  |
| PdxProfilerGuiGraphLinesEnabled |  | bool |  |
| PdxProfilerGuiToggleGraphLines |  | void |  |
| PdxProfilerGuiToggleStats |  | void |  |
| PdxProfilerGuiTrackCurrentFrame |  | void |  |
| PdxProfilerGuiWriteFrameCSV |  | void |  |
| PdxProfilerIsRecording |  | bool |  |
| PdxProfilerSelectThread |  | void |  |
| PdxProfilerSetFrame |  | void |  |
| PdxProfilerToggleRecording |  | void |  |
| PlayerIsHost |  | bool | Multiplayer GUI - Is the current player the host? |
| PopCursorOverride |  | void |  |
| PushCursorOverride | 1. Unknown | void |  |
| RaiseConscriptsInSelectedArmies |  | Command |  |
| ReleaseMode |  | bool |  |
| RemoveTempMapMode |  | void |  |
| ResetCursorOverrides |  | void |  |
| ResumeAllConstruction |  | Command |  |
| ResumeAllConstructionTooltip |  | CString |  |
| ReturnToMenu |  | void |  |
| ScaleToFitElementInside | 1. int32 2. int32 | float |  |
| ScaleToFitElementOutside | 1. int32 2. int32 | float |  |
| ScrollPanelToNamedWidget | 1. CString 2. CString | void |  |
| ScrollPanelToTop | 1. Unknown | void |  |
| SelectEnumWithString | 1. CString 2. Unknown | void | Settings - Select enum by string input |
| SelectLocalization | 1. bool 2. CString 3. CString | CString |  |
| SelectSound | 1. bool 2. Sound 3. Sound | Unknown |  |
| Select\_CFixedPoint | 1. bool 2. CFixedPoint 3. CFixedPoint | CFixedPoint |  |
| Select\_CString | 1. bool 2. CString 3. CString | CString |  |
| Select\_CVector2f | 1. bool 2. CVector2f 3. CVector2f | CVector2f |  |
| Select\_CVector2i | 1. bool 2. CVector2i 3. CVector2i | CVector2i |  |
| Select\_CVector3f | 1. bool 2. CVector3f 3. CVector3f | CVector3f |  |
| Select\_CVector3i | 1. bool 2. CVector3i 3. CVector3i | CVector3i |  |
| Select\_CVector4f | 1. bool 2. CVector4f 3. CVector4f | CVector4f |  |
| Select\_CVector4i | 1. bool 2. CVector4i 3. CVector4i | CVector4i |  |
| Select\_float | 1. bool 2. float 3. float | float |  |
| Select\_int16 | 1. bool 2. int16 3. int16 | int16 |  |
| Select\_int32 | 1. bool 2. int32 3. int32 | int32 |  |
| Select\_int64 | 1. bool 2. int64 3. int64 | int64 |  |
| Select\_int8 | 1. bool 2. int8 3. int8 | int8 |  |
| Select\_uint16 | 1. bool 2. uint16 3. uint16 | uint16 |  |
| Select\_uint32 | 1. bool 2. uint32 3. uint32 | uint32 |  |
| Select\_uint64 | 1. bool 2. uint64 3. uint64 | uint64 |  |
| Select\_uint8 | 1. bool 2. uint8 3. uint8 | uint8 |  |
| SetCameraRestrictionsEnabled | 1. bool | void | Map Editor - Set camera restrictions toggle |
| SetCanOpenRightClickContextMenu | 1. bool | void |  |
| SetCharacterOrderForSelectedFormations | 1. CommanderOrderType | Command |  |
| SetDrawCityDebugGrid | 1. bool | void |  |
| SetDrawCityDebugSpheres | 1. bool | void |  |
| SetDynamicTerrainAutoUpdate | 1. bool | void |  |
| SetDynamicsEnabled | 1. bool | void |  |
| SetInteraction | 1. Unknown | void |  |
| SetIronmanEnabledStatus | 1. bool | void |  |
| SetLockedMapMode |  | void |  |
| SetRandomPlayableObserverCharacter |  | void |  |
| SetStrategicObjective | 1. Unknown 2. Unknown | Command |  |
| SetStrategicObjectiveForSelectedFormations | 1. Unknown | Command |  |
| SetTempMapModeByKey | 1. MapMode | void |  |
| SetTerrainManipulatorProvincesPreview | 1. bool | void |  |
| ShouldAskConfirmation | 1. Command | bool |  |
| ShouldShowAnimationInfo |  | bool |  |
| ShouldShowSegmentedControlForSetting | 1. Unknown | bool | Settings - Should show segmented control or not? |
| StatusCanLogin |  | bool |  |
| StatusGetLoginStatus |  | CUTF8String |  |
| StatusGetUserEmailMasked |  | CUTF8String |  |
| StatusGetUserName |  | CUTF8String |  |
| StatusIsAccountConnected |  | bool |  |
| StatusIsLoggedIn |  | bool |  |
| StatusIsLoggingIn |  | bool |  |
| StatusIsOffline |  | bool |  |
| StatusIsSupportConnectedAccount |  | bool |  |
| StatusIsUserNameEmpty |  | bool |  |
| StringIsEmpty | 1. CString | bool |  |
| Subtract\_CFixedPoint | 1. CFixedPoint 2. CFixedPoint | CFixedPoint |  |
| Subtract\_CVector2f | 1. CVector2f 2. CVector2f | CVector2f |  |
| Subtract\_float | 1. float 2. float | float |  |
| Subtract\_int32 | 1. int32 2. int32 | int32 |  |
| Subtract\_int64 | 1. int64 2. int64 | int64 |  |
| Subtract\_uint32 | 1. uint32 2. uint32 | uint32 |  |
| Subtract\_uint64 | 1. uint64 2. uint64 | uint64 |  |
| TextureListFormatSize | 1. uint64 | CString |  |
| TextureListFormatkB | 1. uint64 | CString |  |
| ToString\_int16 | 1. int16 | CString |  |
| ToString\_int32 | 1. int32 | CString |  |
| ToString\_int64 | 1. int64 | CString |  |
| ToString\_int8 | 1. int8 | CString |  |
| ToString\_uint16 | 1. uint16 | CString |  |
| ToString\_uint32 | 1. uint32 | CString |  |
| ToString\_uint64 | 1. uint64 | CString |  |
| ToString\_uint8 | 1. uint8 | CString |  |
| ToggleEncyclopedia |  | void |  |
| ToggleInteraction | 1. Unknown | void |  |
| ToggleMainMenu |  | void |  |
| ToggleMessageSettings |  | void |  |
| ToggleMessageSettingsForSingleItem | 1. CString | void |  |
| ToggleMusicPlayer |  | void |  |
| ToggleObserveCountry | 1. Country | void |  |
| ToggleThemeSettings |  | void |  |
| TransparentIfFalse | 1. bool | float |  |
| TransparentIfTrue | 1. bool | float |  |
| TransparentIfZero | 1. CFixedPoint | float |  |
| TransparentIfZero\_int32 | 1. int32 | float |  |
| TransparentIfZero\_int64 | 1. int64 | float |  |
| Unfocus | 1. Unknown | void | Unfocus widget |
| UnlockMapMode |  | void |  |
| UpdateDynamicTerrainInAllProvinces |  | void |  |
| UsesTimerLocking |  | bool |  |
| Vector3fToColor | 1. CVector3f | CVector4f |  |
| Vector3iToColor | 1. CVector3i | CVector4f |  |
| Vector4iToColor | 1. CVector4i | CVector4f |  |

List of Country functions

| Function | Arguments | Output | Description |
| AccessActiveDiplomaticPactTypes |  | Unknown | Category: const |
| AccessActiveDiplomaticPacts | 1. ContextualDiplomaticActionType | Unknown | Category: const |
| AccessActiveDiplomaticPlays |  | Unknown | Category: const |
| AccessActiveEconomyLaws |  | Unknown | Category: const |
| AccessActiveHumanRightsLaws |  | Unknown | Category: const |
| AccessActiveInterestGroups |  | Unknown | Category: const |
| AccessActiveJournalEntries |  | Unknown | Category: const |
| AccessActiveLawFromGroup | 1. LawGroup | Law | Category: const |
| AccessActiveNonPlayerObjectiveJournalEntries |  | Unknown | Category: const |
| AccessActiveOtherLaws |  | Unknown | Category: const |
| AccessActiveParties |  | Unknown | Category: const |
| AccessActivePinnedNonPlayerObjectiveJournalEntries |  | Unknown | Category: const |
| AccessActivePinnedPlayerObjectiveJournalEntries |  | Unknown | Category: const |
| AccessActivePlayerObjectiveJournalEntries |  | Unknown | Category: const |
| AccessActivePowerStructureLaws |  | Unknown | Category: const |
| AccessAdmirals |  | Unknown | Category: const |
| AccessAdmiralsOffer |  | Unknown | Category: const |
| AccessAllInterestGroups |  | Unknown | Category: const |
| AccessCapital |  | State | Category: const |
| AccessCivilWars |  | Unknown | Category: const |
| AccessConstructionQueue |  | Unknown | Category: const |
| AccessCurrentlyResearchedTechnology |  | Technology | Category: const |
| AccessDefinition |  | CountryDefinition | Category: const |
| AccessFirstMarket |  | Market | Category: const |
| AccessFormableCountries |  | Unknown | Category: const |
| AccessGenerals |  | Unknown | Category: const |
| AccessGeneralsOffer |  | Unknown | Category: const |
| AccessGovernment |  | GovernmentType | Category: const |
| AccessGovernmentConstructionQueue |  | Unknown | Category: const |
| AccessHeaviestJournalEntry |  | JournalEntry | Category: const |
| AccessHeir |  | Character | Category: const |
| AccessInactiveJournalEntries |  | Unknown | Category: const |
| AccessInstitutions |  | Unknown | Category: const |
| AccessInterestGroupsInGovernment |  | Unknown | Category: const |
| AccessInterestGroupsInOpposition |  | Unknown | Category: const |
| AccessInterests |  | Unknown | Category: const |
| AccessLandHQs |  | Unknown | Category: const |
| AccessLastElectionParties |  | Unknown | Category: const |
| AccessLawBeingEnacted |  | Law | Category: const |
| AccessLawsWithGovernmentOrMovementSupport |  | Unknown | Category: const |
| AccessLawsWithoutGovernmentOrMovementSupport |  | Unknown | Category: const |
| AccessMarginalInterestGroups |  | Unknown | Category: const |
| AccessModifier |  | Modifier | Category: const |
| AccessNavalHQs |  | Unknown | Category: const |
| AccessNonRevolutionaryPoliticalMovements |  | Unknown | Category: const |
| AccessNumResearchableTechnologies |  | int32 | Category: const |
| AccessOverlord |  | Country | Category: const |
| AccessPagedGovernmentConstructionQueue | 1. int32 2. Unknown | Unknown | Category: const |
| AccessPagedPrivateConstructionQueue | 1. int32 2. Unknown | Unknown | Category: const |
| AccessPoliticalMovements |  | Unknown | Category: const |
| AccessPopCultures |  | Unknown | Category: const |
| AccessPopCulturesSortedByPolStr |  | Unknown | Category: const |
| AccessPopCulturesSortedByPopulation |  | Unknown | Category: const |
| AccessPopReligionsSortedByPolStr |  | Unknown | Category: const |
| AccessPopReligionsSortedByPopulation |  | Unknown | Category: const |
| AccessPopTypes |  | Unknown | Category: const |
| AccessPopTypesSortedOnPolStr |  | Unknown | Category: const |
| AccessPopTypesSortedOnPopulation |  | Unknown | Category: const |
| AccessPowerBloc |  | PowerBloc | Category: const |
| AccessPrivateConstructionQueue |  | Unknown | Category: const |
| AccessReleasableCountries |  | Unknown | Category: const |
| AccessResearchableTechnologiesMilitary |  | Unknown | Category: const |
| AccessResearchableTechnologiesOther |  | Unknown | Category: const |
| AccessResearchableTechnologiesProduction |  | Unknown | Category: const |
| AccessResearchableTechnologiesSociety |  | Unknown | Category: const |
| AccessRuler |  | Character | Category: const |
| AccessSecessions |  | Unknown | Category: const |
| AccessSelf |  | Country | Category: const |
| AccessShippingLanes |  | Unknown | Category: const |
| AccessShippingOriginStates | 1. Province | Unknown | Category: const |
| AccessShownCurrentlyConstructingGovernmentQueue |  | Unknown | Category: const |
| AccessShownCurrentlyConstructingPrivateQueue |  | Unknown | Category: const |
| AccessShownCurrentlyConstructingQueue |  | Unknown | Category: const |
| AccessStateReligion |  | Religion | Category: const |
| AccessStates |  | Unknown | Category: const |
| AccessStrategies |  | Unknown | Category: const |
| AccessTopOverlord |  | Country | Category: const |
| AccessTruces |  | Unknown | Category: const |
| AccessVioSovInterestedCountries | 1. Country | Unknown | Category: const |
| AccessVioSovWars | 1. Country | Unknown | Category: const |
| AccessVisibleJournalEntries |  | Unknown | Category: const |
| AccessWars |  | Unknown | Category: const |
| CalcBaseConstructionSpeed |  | CFixedPoint |  |
| CalcConscriptableBattalions |  | int32 |  |
| CalcCulturalTurmoil | 1. Culture | CFixedPoint |  |
| CalcLibertyDesireLevel |  | LibertyDesireLevel |  |
| CalcMaxNumDeclaredInterests |  | int32 |  |
| CalcNumStatesInTurmoil |  | int32 |  |
| CalcRelativeUsedGovernmentConstruction |  | CFixedPoint |  |
| CalcRelativeUsedPrivateConstruction |  | CFixedPoint |  |
| CalcTurmoil |  | CFixedPoint |  |
| CalcUnusedConstruction |  | CFixedPoint |  |
| CalcUsedConstruction |  | CFixedPoint |  |
| CalcUsedGovernmentConstruction |  | CFixedPoint |  |
| CalcUsedPrivateConstruction |  | CFixedPoint |  |
| CanBuildingTypeBeMonopolized | 1. BuildingType | bool |  |
| CanSignTreatyWith | 1. Country | bool |  |
| CanTradeGoods | 1. Unknown | bool |  |
| CreateCompany | 1. CompanyType | Command |  |
| DeclareBankruptcy |  | Command |  |
| DeclareInterest | 1. StrategicRegion | Command |  |
| DemobilizeAllArmies |  | Command |  |
| EstimatedConstructionQueueDuration |  | int32 |  |
| EstimatedGovernmentConstructionQueueDuration |  | int32 |  |
| EstimatedPrivateConstructionQueueDuration |  | int32 |  |
| Exists |  | bool |  |
| GetAIStrategiesDesc |  | CString | Category: nonconst |
| GetActiveConstructionProjectsDesc |  | CString | Category: nonconst |
| GetActiveLawFrom | 1. Unknown | Law | Category: nonconst |
| GetActiveLawFromGroup | 1. CString | Law | Category: nonconst |
| GetActivePeaceDealDesc |  | CString | Category: nonconst |
| GetAdditionalExpensesTrend |  | DataTrend | Category: nonconst |
| GetAdditionalIncomeTrend |  | DataTrend | Category: nonconst |
| GetAdditionalSOLFactorsDescAll |  | CString | Category: nonconst |
| GetAdditionalSOLFactorsDescMiddle |  | CString | Category: nonconst |
| GetAdditionalSOLFactorsDescPoor |  | CString | Category: nonconst |
| GetAdditionalSOLFactorsDescRich |  | CString | Category: nonconst |
| GetAdditionalSOLFactorsDescWithCulture | 1. Culture | CString | Category: nonconst |
| GetAdditionalSOLFactorsDescWithCultureMiddle | 1. Culture | CString | Category: nonconst |
| GetAdditionalSOLFactorsDescWithCulturePoor | 1. Culture | CString | Category: nonconst |
| GetAdditionalSOLFactorsDescWithCultureRich | 1. Culture | CString | Category: nonconst |
| GetAdjective |  | CString | Category: nonconst |
| GetAdjectiveNoFlag |  | CString | Category: nonconst |
| GetAdjectiveNoFormatting |  | CString | Category: nonconst |
| GetAllAcceptanceStatusSegments |  | Unknown | Category: nonconst |
| GetAllGeneralDiploActions |  | Unknown | Category: nonconst |
| GetAllOverlordDiploActions |  | Unknown | Category: nonconst |
| GetAllPowerBlocLeaderDiploActions |  | Unknown | Category: nonconst |
| GetAllPowerBlocMemberDiploActions |  | Unknown | Category: nonconst |
| GetAllSubjectDiploActions |  | Unknown | Category: nonconst |
| GetAllianceLikeTreatiesBrokenDesc | 1. Country | CString | Category: nonconst |
| GetAllianceLikeTreatiesBrokenFromPlayDesc | 1. DiplomaticPlay | CString | Category: nonconst |
| GetAllianceLikeTreatiesBrokenOnWarDesc | 1. Country | CString | Category: nonconst |
| GetAllianceLikeTreatiesList | 1. Unknown | CString | Category: nonconst |
| GetAltAdjective | 1. CString | CString | Category: nonconst |
| GetAltAdjectiveNoFlag | 1. CString | CString | Category: nonconst |
| GetAltAdjectiveNoFormatting | 1. CString | CString | Category: nonconst |
| GetAltName | 1. CString | CString | Category: nonconst |
| GetAltNameNoFlag | 1. CString | CString | Category: nonconst |
| GetAltNameNoFormatting | 1. CString | CString | Category: nonconst |
| GetArableLand |  | int32 | Category: nonconst |
| GetArableLandDesc |  | CString | Category: nonconst |
| GetArmiesBreakdown |  | CString | Category: nonconst |
| GetArmyPowerProjection |  | CFixedPoint | Category: nonconst |
| GetArmyPowerProjectionDesc |  | CString | Category: nonconst |
| GetArmyReadinessStatusDesc |  | CString | Category: nonconst |
| GetAttainableCompanies |  | Unknown | Category: nonconst |
| GetAttitudeColor | 1. Unknown | CVector4f | Category: nonconst |
| GetAttitudeTowards | 1. Country | AIAttitude | Category: nonconst |
| GetAvailableCompanies |  | Unknown | Category: nonconst |
| GetAvailableGeneralDiploActions |  | Unknown | Category: nonconst |
| GetAvailableOverlordDiploActions |  | Unknown | Category: nonconst |
| GetAvailablePowerBlocLeaderDiploActions |  | Unknown | Category: nonconst |
| GetAvailablePowerBlocMemberDiploActions |  | Unknown | Category: nonconst |
| GetAvailableSubjectDiploActions |  | Unknown | Category: nonconst |
| GetAverageExpectedStandardOfLivingWithCultureMiddle | 1. Unknown | CFixedPoint | Category: nonconst |
| GetAverageExpectedStandardOfLivingWithCulturePoor | 1. Unknown | CFixedPoint | Category: nonconst |
| GetAverageExpectedStandardOfLivingWithCultureRich | 1. Unknown | CFixedPoint | Category: nonconst |
| GetAverageSoLByPoliticalStrength |  | CFixedPoint | Category: nonconst |
| GetAverageSoLByPopulation |  | CFixedPoint | Category: nonconst |
| GetAverageSoLByPopulationTrend |  | DataTrend | Category: nonconst |
| GetAverageSoLByPopulationWithCulture | 1. Unknown | CFixedPoint | Category: nonconst |
| GetAverageSoLLowerTrend |  | DataTrend | Category: nonconst |
| GetAverageSoLMiddleTrend |  | DataTrend | Category: nonconst |
| GetAverageSoLUpperTrend |  | DataTrend | Category: nonconst |
| GetAverageStandardOfLivingMiddle |  | CFixedPoint | Category: nonconst |
| GetAverageStandardOfLivingPoor |  | CFixedPoint | Category: nonconst |
| GetAverageStandardOfLivingRich |  | CFixedPoint | Category: nonconst |
| GetAverageStandardOfLivingWithCultureMiddle | 1. Unknown | CFixedPoint | Category: nonconst |
| GetAverageStandardOfLivingWithCulturePoor | 1. Unknown | CFixedPoint | Category: nonconst |
| GetAverageStandardOfLivingWithCultureRich | 1. Unknown | CFixedPoint | Category: nonconst |
| GetAverageStateTaxCollectionMult |  | CFixedPoint | Category: nonconst |
| GetAverageStateTaxCollectionMultBreakdown |  | CString | Category: nonconst |
| GetAverageTaxWaste |  | CFixedPoint | Category: nonconst |
| GetAverageTaxWasteBreakdown |  | CString | Category: nonconst |
| GetBalanceTrend |  | DataDynamicTrend | Category: nonconst |
| GetBaseConstructionSpeedDesc |  | CString | Category: nonconst |
| GetBaseWeeklyTechnologySpread |  | CFixedPoint | Category: nonconst |
| GetBaseWeeklyTechnologySpreadForTech | 1. Unknown | CFixedPoint | Category: nonconst |
| GetBattalions |  | int32 | Category: nonconst |
| GetBattalionsDesc |  | CString | Category: nonconst |
| GetBattalionsMobilizing |  | int32 | Category: nonconst |
| GetBattalionsRanking |  | CString | Category: nonconst |
| GetBolsterDesc |  | CString | Category: nonconst |
| GetBolsteringCostDesc |  | CString | Category: nonconst |
| GetCanBuildingTypeBeMonopolizedDesc | 1. BuildingType | CString | Category: nonconst |
| GetCanSignTreatyWithDesc | 1. Country | CString | Category: nonconst |
| GetCapital |  | State | Category: nonconst |
| GetColonialGrowthDetails |  | CString | Category: nonconst |
| GetCompanies |  | Unknown | Category: nonconst |
| GetCompanyConstructionEfficiencyBonusFormatted |  | CString | Category: nonconst |
| GetCompanyThroughputBonusFormatted |  | CString | Category: nonconst |
| GetConscriptedBattalions |  | int32 | Category: nonconst |
| GetConscriptionRatio |  | CFixedPoint | Category: nonconst |
| GetConstructionGoodsExpenseTrend |  | DataTrend | Category: nonconst |
| GetConstructionGoodsExpenses |  | CFixedPoint | Category: nonconst |
| GetConstructionGoodsExpensesByGoodsDesc | 1. Unknown | CString | Category: nonconst |
| GetConstructionGoodsExpensesDesc |  | CString | Category: nonconst |
| GetConstructionQueueDesc |  | CString | Category: nonconst |
| GetConstructionsInCountry | 1. Country | Unknown | Category: nonconst |
| GetConsumptionTaxIncome |  | CFixedPoint | Category: nonconst |
| GetConsumptionTaxTrend |  | DataTrend | Category: nonconst |
| GetConsumptionTaxesDesc |  | CString | Category: nonconst |
| GetConvoyEffectDesc |  | CString | Category: nonconst |
| GetCountriesWithTreaties |  | Unknown | Category: nonconst |
| GetCountryScorePosition |  | int32 | Category: nonconst |
| GetCountryScorePositionDesc |  | CString | Category: nonconst |
| GetCreditRatio |  | CFixedPoint | Category: nonconst |
| GetCreditTooltip |  | CString | Category: nonconst |
| GetCulturePolStrAsPercentage | 1. Culture | CFixedPoint | Category: nonconst |
| GetCulturePopulation | 1. Culture | int64 | Category: nonconst |
| GetCurrentLeverage | 1. Unknown | CFixedPoint | Category: nonconst |
| GetCurrentLeverageShare | 1. PowerBloc | CFixedPoint | Category: nonconst |
| GetCurrentPowerStruggleMonth |  | int32 | Category: nonconst |
| GetCurrentlyResearchedTechnology |  | Technology | Category: nonconst |
| GetCurrentlySpreadingTechsDesc |  | CString | Category: nonconst |
| GetCustom | 1. CustomLocalization | CString | Category: nonconst |
| GetDailyRelationsProgress | 1. Country | CFixedPoint | Category: nonconst |
| GetDaysUntilElection |  | int32 | Category: nonconst |
| GetDaysUntilRankLoss |  | int32 | Category: nonconst |
| GetDecisions |  | Unknown | Category: nonconst |
| GetDeclareBankruptcyDesc |  | CString | Category: nonconst |
| GetDecreasingInterestsDesc |  | CString | Category: nonconst |
| GetDeficitConvoyRatio |  | CFixedPoint | Category: nonconst |
| GetDeficitConvoyRatioForProgressBar |  | CFixedPoint | Category: nonconst |
| GetDeficitPowerRatio | 1. Unknown | CFixedPoint | Category: nonconst |
| GetDeficitPowerRatioForProgressBar | 1. CString | CFixedPoint | Category: nonconst |
| GetDefinition |  | CountryDefinition | Category: nonconst |
| GetDependents |  | int64 | Category: nonconst |
| GetDiplomaticAction | 1. Unknown 2. Unknown | DiplomaticAction | Category: nonconst |
| GetDiplomaticActionWithStates | 1. Unknown 2. Unknown 3. Unknown 4. Unknown | DiplomaticAction | Category: nonconst |
| GetDiplomaticPactsExpenseTrend |  | DataTrend | Category: nonconst |
| GetDiplomaticPactsIncomeTrend |  | DataTrend | Category: nonconst |
| GetDiplomaticStatusColor | 1. Country | CVector4f | Category: nonconst |
| GetDividendsTaxTrend |  | DataTrend | Category: nonconst |
| GetDomesticallyOwnedGDP |  | CFixedPoint | Category: nonconst |
| GetDomesticallyOwnedGDPFraction |  | CFixedPoint | Category: nonconst |
| GetDraftTreaties |  | Unknown | Category: nonconst |
| GetDraftTreatiesWith | 1. Unknown | Unknown | Category: nonconst |
| GetEconomicDependenceOn | 1. Country | CString | Category: nonconst |
| GetEconomicDependenceOnDesc | 1. Unknown | CString | Category: nonconst |
| GetEconomicDependenceOnRaw | 1. Unknown | CFixedPoint | Category: nonconst |
| GetElection |  | Election | Category: nonconst |
| GetElectionPollTooltip |  | CString | Category: nonconst |
| GetElectoralConfidence |  | CFixedPoint | Category: nonconst |
| GetElectoralConfidenceEffectDesc |  | CString | Category: nonconst |
| GetEmployedWorkingAdults |  | int64 | Category: nonconst |
| GetEmptyAgitatorSlots |  | int32 | Category: nonconst |
| GetEnemyOccupation |  | CFixedPoint | Category: nonconst |
| GetEnforcedTreaties |  | Unknown | Category: nonconst |
| GetEnforcedTreatiesWith | 1. Country | Unknown | Category: nonconst |
| GetEnforcedTreatiesWithDesc | 1. Unknown | CString | Category: nonconst |
| GetEventsByCategory | 1. CString | Unknown | Category: nonconst |
| GetExcessConvoyRatio |  | CFixedPoint | Category: nonconst |
| GetExcessConvoyRatioForProgressBar |  | CFixedPoint | Category: nonconst |
| GetExcessPowerRatio | 1. Unknown | CFixedPoint | Category: nonconst |
| GetExcessPowerRatioForProgressBar | 1. CString | CFixedPoint | Category: nonconst |
| GetExpectedSOLFactorsDescAll |  | CString | Category: nonconst |
| GetExpectedSOLFactorsDescMiddle |  | CString | Category: nonconst |
| GetExpectedSOLFactorsDescPoor |  | CString | Category: nonconst |
| GetExpectedSOLFactorsDescRich |  | CString | Category: nonconst |
| GetExpectedSOLFactorsDescWithCulture | 1. Unknown | CString | Category: nonconst |
| GetExpectedSoLByPopulation |  | CFixedPoint | Category: nonconst |
| GetExpectedStandardOfLivingMiddle |  | CFixedPoint | Category: nonconst |
| GetExpectedStandardOfLivingPoor |  | CFixedPoint | Category: nonconst |
| GetExpectedStandardOfLivingRich |  | CFixedPoint | Category: nonconst |
| GetExpensesBreakdown |  | CString | Category: nonconst |
| GetExportSubventionsDescHigh | 1. Goods | CString | Category: nonconst |
| GetExportSubventionsDescLow | 1. Goods | CString | Category: nonconst |
| GetExportSubventionsDescMax | 1. Goods | CString | Category: nonconst |
| GetExportTariffsDescHigh | 1. Goods | CString | Category: nonconst |
| GetExportTariffsDescLow | 1. Goods | CString | Category: nonconst |
| GetExportTariffsDescMax | 1. Goods | CString | Category: nonconst |
| GetExportTariffsDescNone | 1. Goods | CString | Category: nonconst |
| GetExportedAmount | 1. Unknown | CFixedPoint | Category: nonconst |
| GetExports |  | Unknown | Category: nonconst |
| GetFirstPrimaryCulture |  | Culture | Category: nonconst |
| GetFlag |  | CoatOfArms | Category: nonconst |
| GetFlagTextIcon |  | CString | Category: nonconst |
| GetFlavorText |  | CString | Category: nonconst |
| GetFleetsBreakdown |  | CString | Category: nonconst |
| GetFlotillasRanking |  | CString | Category: nonconst |
| GetForeignOwnedGDP |  | CFixedPoint | Category: nonconst |
| GetForeignOwnedGDPDesc |  | CString | Category: nonconst |
| GetForeignOwnedGDPFraction |  | CFixedPoint | Category: nonconst |
| GetFormattedStandardOfLivingAll |  | CString | Category: nonconst |
| GetFormattedStandardOfLivingAllWithCulture | 1. Culture | CString | Category: nonconst |
| GetFormattedStandardOfLivingLabelAll |  | CString | Category: nonconst |
| GetFormattedStandardOfLivingLabelAllWithCulture | 1. Culture | CString | Category: nonconst |
| GetFormattedStandardOfLivingLabelMiddle |  | CString | Category: nonconst |
| GetFormattedStandardOfLivingLabelMiddleWithCulture | 1. Culture | CString | Category: nonconst |
| GetFormattedStandardOfLivingLabelPoor |  | CString | Category: nonconst |
| GetFormattedStandardOfLivingLabelPoorWithCulture | 1. Culture | CString | Category: nonconst |
| GetFormattedStandardOfLivingLabelRich |  | CString | Category: nonconst |
| GetFormattedStandardOfLivingLabelRichWithCulture | 1. Culture | CString | Category: nonconst |
| GetFormattedStandardOfLivingMiddle |  | CString | Category: nonconst |
| GetFormattedStandardOfLivingMiddleWithCulture | 1. Culture | CString | Category: nonconst |
| GetFormattedStandardOfLivingPoor |  | CString | Category: nonconst |
| GetFormattedStandardOfLivingPoorWithCulture | 1. Culture | CString | Category: nonconst |
| GetFormattedStandardOfLivingRich |  | CString | Category: nonconst |
| GetFormattedStandardOfLivingRichWithCulture | 1. Culture | CString | Category: nonconst |
| GetFreeArableLand |  | int32 | Category: nonconst |
| GetGDP |  | CFixedPoint | Category: nonconst |
| GetGDPOwnedInForeignCountries |  | CFixedPoint | Category: nonconst |
| GetGDPOwnedInForeignCountriesDesc |  | CString | Category: nonconst |
| GetGDPPerCapita |  | CFixedPoint | Category: nonconst |
| GetGDPPerCapitaRanking |  | CString | Category: nonconst |
| GetGDPRanking |  | CString | Category: nonconst |
| GetGDPTrend |  | DataTrend | Category: nonconst |
| GetGDPWithOwnershipsInForeignCountries |  | CFixedPoint | Category: nonconst |
| GetGameOverDateString |  | CString | Category: nonconst |
| GetGdpRatioOwnedBy | 1. Unknown | CString | Category: nonconst |
| GetGdpRatioOwnedByDesc | 1. Unknown | CString | Category: nonconst |
| GetGdpRatioOwnedByRaw | 1. Unknown | CFixedPoint | Category: nonconst |
| GetGoldProgressDesc |  | CString | Category: nonconst |
| GetGoldReserveLimit |  | CFixedPoint | Category: nonconst |
| GetGoldReserveLimitDesc |  | CString | Category: nonconst |
| GetGoldReserveRatio |  | CFixedPoint | Category: nonconst |
| GetGoldReserves |  | CFixedPoint | Category: nonconst |
| GetGoldReservesTrend |  | DataDynamicTrend | Category: nonconst |
| GetGoodsLeaderboardDesc |  | CString | Category: nonconst |
| GetGovernment |  | GovernmentType | Category: nonconst |
| GetGovernmentConstructionGoodsExpenses |  | CFixedPoint | Category: nonconst |
| GetGovernmentConstructionGoodsExpensesByGoodsDesc |  | CString | Category: nonconst |
| GetGovernmentGoodsExpenseTrend |  | DataTrend | Category: nonconst |
| GetGovernmentGoodsExpenses |  | CFixedPoint | Category: nonconst |
| GetGovernmentGoodsExpensesByGoodsDesc |  | CString | Category: nonconst |
| GetGovernmentGoodsExpensesDesc |  | CString | Category: nonconst |
| GetGovernmentIGsDesc |  | CString | Category: nonconst |
| GetGovernmentInterestGroupsDesc |  | CString | Category: nonconst |
| GetGovernmentInterestGroupsPopulationDesc |  | CString | Category: nonconst |
| GetGovernmentLegitimacy |  | int32 | Category: nonconst |
| GetGovernmentLegitimacyDesc |  | CString | Category: nonconst |
| GetGovernmentLegitimacyLevel |  | LegitimacyLevel | Category: nonconst |
| GetGovernmentSelfDebt |  | CFixedPoint | Category: nonconst |
| GetGovernmentSelfDebtFraction |  | CFixedPoint | Category: nonconst |
| GetGovernmentShareDividendsTrend |  | DataTrend | Category: nonconst |
| GetGovernmentShareLossesTrend |  | DataTrend | Category: nonconst |
| GetGovernmentSlavesExpenseTrend |  | DataTrend | Category: nonconst |
| GetGovernmentSlavesExpenses |  | CFixedPoint | Category: nonconst |
| GetGovernmentSlavesExpensesDesc |  | CString | Category: nonconst |
| GetGovernmentWageLevelDescHigh |  | CString | Category: nonconst |
| GetGovernmentWageLevelDescLow |  | CString | Category: nonconst |
| GetGovernmentWageLevelDescMedium |  | CString | Category: nonconst |
| GetGovernmentWageLevelDescVeryHigh |  | CString | Category: nonconst |
| GetGovernmentWageLevelDescVeryLow |  | CString | Category: nonconst |
| GetGovernmentWagesExpenseTrend |  | DataTrend | Category: nonconst |
| GetGovernmentWagesExpenses |  | CFixedPoint | Category: nonconst |
| GetGovernmentWagesExpensesDesc |  | CString | Category: nonconst |
| GetGroupsForActiveJournalEntries |  | Unknown | Category: nonconst |
| GetGroupsForInActiveJournalEntries |  | Unknown | Category: nonconst |
| GetGrowingCivilWars |  | Unknown | Category: nonconst |
| GetHeir |  | Character | Category: nonconst |
| GetHighestPossibleRank |  | CString | Category: nonconst |
| GetID |  | int32 | Category: nonconst |
| GetIDString |  | CString | Category: nonconst |
| GetIGApprovalFromLoyalistsBreakdown |  | CString | Category: nonconst |
| GetIGApprovalFromRadicalsBreakdown |  | CString | Category: nonconst |
| GetImportSubventionsDescHigh | 1. Goods | CString | Category: nonconst |
| GetImportSubventionsDescLow | 1. Goods | CString | Category: nonconst |
| GetImportSubventionsDescMax | 1. Goods | CString | Category: nonconst |
| GetImportTariffsDescHigh | 1. Goods | CString | Category: nonconst |
| GetImportTariffsDescLow | 1. Goods | CString | Category: nonconst |
| GetImportTariffsDescMax | 1. Goods | CString | Category: nonconst |
| GetImportTariffsDescNone | 1. Goods | CString | Category: nonconst |
| GetImportedAmount | 1. Unknown | CFixedPoint | Category: nonconst |
| GetImports |  | Unknown | Category: nonconst |
| GetInDefaultEffectsDesc |  | CString | Category: nonconst |
| GetInForceTreaties |  | Unknown | Category: nonconst |
| GetInactiveConstructionProjectsDesc |  | CString | Category: nonconst |
| GetInactivePopulation |  | int64 | Category: nonconst |
| GetInactivePopulationDesc |  | CString | Category: nonconst |
| GetIncomeBreakdown |  | CString | Category: nonconst |
| GetIncomeTaxIncome |  | CFixedPoint | Category: nonconst |
| GetIncorporatedLiteracyRanking |  | CString | Category: nonconst |
| GetIncorporatedLiteracyRate |  | CFixedPoint | Category: nonconst |
| GetIncorporatedLiteracyTrend |  | DataTrend | Category: nonconst |
| GetIncorporatedPopulation |  | int64 | Category: nonconst |
| GetIncorporatedStatesLawCostDesc |  | CString | Category: nonconst |
| GetIndependentInterestGroupsInGovernment |  | Unknown | Category: nonconst |
| GetIndependentInterestGroupsInOpposition |  | Unknown | Category: nonconst |
| GetInfamy |  | CFixedPoint | Category: nonconst |
| GetInfamyColor |  | CVector4f | Category: nonconst |
| GetInfamyDesc |  | CString | Category: nonconst |
| GetInfamyIconTexture |  | Unknown | Category: nonconst |
| GetInfamyLabel |  | CString | Category: nonconst |
| GetInstitutionInvestment |  | CFixedPoint | Category: nonconst |
| GetInstitutionInvestmentBureaucracyCost |  | CFixedPoint | Category: nonconst |
| GetInstitutionInvestmentBureaucracyCostDesc |  | CString | Category: nonconst |
| GetInstitutionInvestmentBureaucracyFactor |  | CFixedPoint | Category: nonconst |
| GetInstitutionInvestmentBureaucracyFactorDesc |  | CString | Category: nonconst |
| GetInstitutionInvestmentDesc |  | CString | Category: nonconst |
| GetInstitutionsSummary |  | CString | Category: nonconst |
| GetInsurrectionaryIGsDesc |  | CString | Category: nonconst |
| GetInterestExpenseTrend |  | DataTrend | Category: nonconst |
| GetInterestGroupOfType | 1. Unknown | InterestGroup | Category: nonconst |
| GetInterestPayment |  | CFixedPoint | Category: nonconst |
| GetInterestRateTooltip |  | CString | Category: nonconst |
| GetInvestmentFundTrend |  | DataTrend | Category: nonconst |
| GetInvestmentGdpFractionInCountry | 1. Country | CFixedPoint | Category: nonconst |
| GetInvestmentIncome |  | CFixedPoint | Category: nonconst |
| GetInvestmentIncomeTrend |  | DataTrend | Category: nonconst |
| GetInvestmentLevelsInCountry | 1. Country | int32 | Category: nonconst |
| GetInvestmentPool |  | CFixedPoint | Category: nonconst |
| GetInvestmentPoolChange |  | CFixedPoint | Category: nonconst |
| GetInvestmentPoolChangeFromConstructionDesc |  | CString | Category: nonconst |
| GetInvestmentPoolChangeFromInvestmentBreakdown |  | CString | Category: nonconst |
| GetInvestmentPoolChangeFromInvestmentDesc |  | CString | Category: nonconst |
| GetInvestmentPoolPredictedNextBuildingDesc |  | CString | Category: nonconst |
| GetJournalEntry | 1. Unknown | JournalEntry | Category: nonconst |
| GetKillRateNavy |  | CFixedPoint | Category: nonconst |
| GetLabel | 1. Country | CString | Category: nonconst |
| GetLackOfAutonomousInvestmentReasonDesc |  | CString | Category: nonconst |
| GetLastCatalystExpiryDate | 1. Country 2. DiplomaticCatalyst | CString | Category: nonconst |
| GetLastElectionResultsTooltip |  | CString | Category: nonconst |
| GetLawBeingEnacted |  | Law | Category: nonconst |
| GetLawBeingEnactedFromGroup | 1. Unknown | Law | Category: nonconst |
| GetLawEnactmentProgress |  | CFixedPoint | Category: nonconst |
| GetLawEnactmentProgressDesc |  | CString | Category: nonconst |
| GetLeaderReligionPercentage |  | CFixedPoint | Category: nonconst |
| GetLeverageAdvantage | 1. PowerBloc | CFixedPoint | Category: nonconst |
| GetLeverageAdvantageTarget | 1. PowerBloc | CFixedPoint | Category: nonconst |
| GetLeverageBreakdown |  | CString | Category: nonconst |
| GetLeverageComparisonDesc | 1. PowerBloc | CString | Category: nonconst |
| GetLeverageGain | 1. PowerBloc | CFixedPoint | Category: nonconst |
| GetLeverageGainBreakdown | 1. PowerBloc | CString | Category: nonconst |
| GetLeverageResistance |  | CFixedPoint | Category: nonconst |
| GetLeverageTarget | 1. PowerBloc | CFixedPoint | Category: nonconst |
| GetLeverageTooltip |  | CString | Category: nonconst |
| GetLibertyDesireLevelLabel |  | CString | Category: nonconst |
| GetLibertyDesireRaw |  | CFixedPoint | Category: nonconst |
| GetLimitedMassMigrationCountryAttraction |  | CFixedPoint | Category: nonconst |
| GetLobbyJournalEntries |  | Unknown | Category: nonconst |
| GetLowerStrataPopulationTrend |  | DataTrend | Category: nonconst |
| GetLoyalistsChangeSummary |  | CString | Category: nonconst |
| GetLoyalistsDecreaseBreakdown |  | CString | Category: nonconst |
| GetLoyalistsIncreaseBreakdown |  | CString | Category: nonconst |
| GetLoyalistsOrRadicalsGainedFromLegitimacy |  | int64 | Category: nonconst |
| GetLoyalistsOrRadicalsGainedFromLegitimacyModifierDescription | 1. Unknown | CString | Category: nonconst |
| GetLoyalistsSummaryDesc |  | CString | Category: nonconst |
| GetLoyalistsTrend |  | DataTrend | Category: nonconst |
| GetLoyaltiesGain |  | CFixedPoint | Category: nonconst |
| GetMapColor |  | CVector4f | Category: nonconst |
| GetMarginalAndInactivePopulationInCountryAsPercentage |  | float | Category: nonconst |
| GetMarginalCloutInCountryAsPercentage |  | float | Category: nonconst |
| GetMarginalInterestGroupsDesc |  | CString | Category: nonconst |
| GetMarginalInterestGroupsPopulationDesc |  | CString | Category: nonconst |
| GetMarket |  | Market | Category: nonconst |
| GetMarketOwnerName |  | CString | Category: nonconst |
| GetMassMigrationAttractionBreakdown |  | CString | Category: nonconst |
| GetMassMigrationAttractionDesc |  | CString | Category: nonconst |
| GetMaxCloutOrPopulationPercentage |  | float | Category: nonconst |
| GetMaxCredit |  | CFixedPoint | Category: nonconst |
| GetMaxFreeCharters |  | int32 | Category: nonconst |
| GetMaxLawEnactmentSetbacks |  | int32 | Category: nonconst |
| GetMaxNumCompanies |  | int32 | Category: nonconst |
| GetMaxNumCompaniesDesc |  | CString | Category: nonconst |
| GetMaxNumDeclaredInterestsBreakdown |  | CString | Category: nonconst |
| GetMaxPowerStruggleMonth |  | int32 | Category: nonconst |
| GetMaxWeeklyTechnologyProgressForTech | 1. Unknown | CFixedPoint | Category: nonconst |
| GetMaxWeeklyTechnologySpread |  | CFixedPoint | Category: nonconst |
| GetMaxWeeklyTechnologySpreadForTech | 1. Unknown | CFixedPoint | Category: nonconst |
| GetMiddleStrataPopulationTrend |  | DataTrend | Category: nonconst |
| GetMilitaryFormationsArmy |  | Unknown | Category: nonconst |
| GetMilitaryFormationsFleet |  | Unknown | Category: nonconst |
| GetMilitaryGoodsExpenseTrend |  | DataTrend | Category: nonconst |
| GetMilitaryGoodsExpenses |  | CFixedPoint | Category: nonconst |
| GetMilitaryGoodsExpensesByGoodsDesc |  | CString | Category: nonconst |
| GetMilitaryGoodsExpensesDesc |  | CString | Category: nonconst |
| GetMilitaryInterfaceColor |  | CVector4f | Category: nonconst |
| GetMilitarySlavesExpenseTrend |  | DataTrend | Category: nonconst |
| GetMilitarySlavesExpenses |  | CFixedPoint | Category: nonconst |
| GetMilitarySlavesExpensesDesc |  | CString | Category: nonconst |
| GetMilitaryWageLevelDescHigh |  | CString | Category: nonconst |
| GetMilitaryWageLevelDescLow |  | CString | Category: nonconst |
| GetMilitaryWageLevelDescMedium |  | CString | Category: nonconst |
| GetMilitaryWageLevelDescVeryHigh |  | CString | Category: nonconst |
| GetMilitaryWageLevelDescVeryLow |  | CString | Category: nonconst |
| GetMilitaryWagesExpenseTrend |  | DataTrend | Category: nonconst |
| GetMilitaryWagesExpenses |  | CFixedPoint | Category: nonconst |
| GetMilitaryWagesExpensesDesc |  | CString | Category: nonconst |
| GetMinWeeklyTechnologyProgressForTech | 1. Technology | CFixedPoint | Category: nonconst |
| GetMinWeeklyTechnologySpread |  | CFixedPoint | Category: nonconst |
| GetMinWeeklyTechnologySpreadForTech | 1. Unknown | CFixedPoint | Category: nonconst |
| GetMintingTrend |  | DataTrend | Category: nonconst |
| GetMobilizationRatio |  | CFixedPoint | Category: nonconst |
| GetModifier |  | Modifier | Category: nonconst |
| GetMoveCapitalEffectsDesc |  | CString | Category: nonconst |
| GetMoveMarketCapitalEffectsDesc |  | CString | Category: nonconst |
| GetName |  | CString | Category: nonconst |
| GetNameNoFlag |  | CString | Category: nonconst |
| GetNameNoFormatting |  | CString | Category: nonconst |
| GetNavyPowerProjection |  | CFixedPoint | Category: nonconst |
| GetNavyPowerProjectionDesc |  | CString | Category: nonconst |
| GetNegotiatingInterestGroup |  | InterestGroup | Category: nonconst |
| GetNextElectionDate |  | CString | Category: nonconst |
| GetNextRank |  | CString | Category: nonconst |
| GetNextRankDesc |  | CString | Category: nonconst |
| GetNextRankNumber |  | int32 | Category: nonconst |
| GetNextStartOfCampaignDate |  | CString | Category: nonconst |
| GetNonPotentialDiploPlays |  | Unknown | Category: nonconst |
| GetNonSubjectDiplomaticPactsWith | 1. Country | Unknown | Category: nonconst |
| GetNumActiveConstructionQueueElements |  | int32 | Category: nonconst |
| GetNumActiveGovernmentConstructionQueueElements |  | int32 | Category: nonconst |
| GetNumActivePrivateConstructionQueueElements |  | int32 | Category: nonconst |
| GetNumActiveShownConstructionQueueElements |  | int32 | Category: nonconst |
| GetNumActiveShownGovernmentConstructionQueueElements |  | int32 | Category: nonconst |
| GetNumActiveShownPrivateConstructionQueueElements |  | int32 | Category: nonconst |
| GetNumAvailableCompanies |  | int32 | Category: nonconst |
| GetNumAvailableConvoys |  | int32 | Category: nonconst |
| GetNumAvailableNegotiations |  | int32 | Category: nonconst |
| GetNumBattalions |  | int32 | Category: nonconst |
| GetNumBuildingsInConstructionQueueInState | 1. State | int32 | Category: nonconst |
| GetNumBuildingsUnderConstructionInState | 1. State | int32 | Category: nonconst |
| GetNumCombatUnits |  | int32 | Category: nonconst |
| GetNumCompanies |  | int32 | Category: nonconst |
| GetNumConvoys |  | int32 | Category: nonconst |
| GetNumConvoysDamagedDesc |  | CString | Category: nonconst |
| GetNumConvoysDesc |  | CString | Category: nonconst |
| GetNumDamagedConvoys |  | int32 | Category: nonconst |
| GetNumDeclaredInterests |  | int32 | Category: nonconst |
| GetNumFlotillas |  | int32 | Category: nonconst |
| GetNumGovernmentConstructionsInQueue |  | int32 | Category: nonconst |
| GetNumInactiveAndNonShownGovernmentConstructionQueueElements |  | int32 | Category: nonconst |
| GetNumInactiveAndNonShownPrivateConstructionQueueElements |  | int32 | Category: nonconst |
| GetNumInactiveConstructionQueueElements |  | int32 | Category: nonconst |
| GetNumInactiveGovernmentConstructionQueueElements |  | int32 | Category: nonconst |
| GetNumInactivePrivateConstructionQueueElements |  | int32 | Category: nonconst |
| GetNumIncorporatedLiteratePops |  | int64 | Category: nonconst |
| GetNumIncorporatedStates |  | int32 | Category: nonconst |
| GetNumIncorporatedStatesDesc |  | CString | Category: nonconst |
| GetNumInsufficientTaxCapacityStates |  | int32 | Category: nonconst |
| GetNumInterestGroupMembers |  | int64 | Category: nonconst |
| GetNumIsolatedStates |  | int32 | Category: nonconst |
| GetNumLowMarketAccessStates |  | int32 | Category: nonconst |
| GetNumLoyalists |  | int64 | Category: nonconst |
| GetNumNeutrals |  | int64 | Category: nonconst |
| GetNumPoliticallyInactiveLoyalists |  | int64 | Category: nonconst |
| GetNumPoliticallyInactiveNeutrals |  | int64 | Category: nonconst |
| GetNumPoliticallyInactiveRadicals |  | int64 | Category: nonconst |
| GetNumPrivateConstructionsInQueue |  | int32 | Category: nonconst |
| GetNumRadicals |  | int64 | Category: nonconst |
| GetNumStatesThatCanBeIncorporated |  | int32 | Category: nonconst |
| GetNumStatesWithConstruction |  | int32 | Category: nonconst |
| GetNumStatesWithoutConstruction |  | int32 | Category: nonconst |
| GetNumTotalLiteratePops |  | int64 | Category: nonconst |
| GetNumTurmoilStates |  | int32 | Category: nonconst |
| GetNumUnincorporatedStates |  | int32 | Category: nonconst |
| GetNumUnincorporatedStatesDesc |  | CString | Category: nonconst |
| GetNumUsableConvoys |  | int32 | Category: nonconst |
| GetNumberOfActiveConscriptionCenters |  | int32 | Category: nonconst |
| GetNumberOfInactiveConscriptionCenters |  | int32 | Category: nonconst |
| GetObjective |  | Objective | Category: nonconst |
| GetObligationFromExpirationDate | 1. Country | CString | Category: nonconst |
| GetObligationFromExpirationDesc | 1. Country | CString | Category: nonconst |
| GetObligationToExpirationDate | 1. Country | CString | Category: nonconst |
| GetObligationToExpirationDesc | 1. Country | CString | Category: nonconst |
| GetObligationsOwedFrom |  | Unknown | Category: nonconst |
| GetObligationsOwedTo |  | Unknown | Category: nonconst |
| GetOppositionInterestGroupsDesc |  | CString | Category: nonconst |
| GetOppositionInterestGroupsPopulationDesc |  | CString | Category: nonconst |
| GetOtherPowerBlocWithHighestLeverage | 1. Unknown | PowerBloc | Category: nonconst |
| GetOverlord |  | Country | Category: nonconst |
| GetOwningCompany |  | Company | Category: nonconst |
| GetPartiesInGovernment |  | Unknown | Category: nonconst |
| GetPartiesInOpposition |  | Unknown | Category: nonconst |
| GetPeopleAbroad |  | int64 | Category: nonconst |
| GetPlayedByDesc |  | CString | Category: nonconst |
| GetPlayer |  | Player | Category: nonconst |
| GetPoliticalLobbies |  | Unknown | Category: nonconst |
| GetPoliticallyInvolvedPercentage |  | CFixedPoint | Category: nonconst |
| GetPoliticallyInvolvedPopulation |  | int64 | Category: nonconst |
| GetPoliticallyInvolvedPopulationDesc |  | CString | Category: nonconst |
| GetPollTaxIncome |  | CFixedPoint | Category: nonconst |
| GetPollTaxTrend |  | DataTrend | Category: nonconst |
| GetPopConsumptionDependenceOn | 1. Unknown | CString | Category: nonconst |
| GetPopConsumptionDependenceOnDesc | 1. Unknown | CString | Category: nonconst |
| GetPopConsumptionDependenceOnRaw | 1. Unknown | CFixedPoint | Category: nonconst |
| GetPopGrowthDesc |  | CString | Category: nonconst |
| GetPopReligions |  | Unknown | Category: nonconst |
| GetPopulationRanking |  | CString | Category: nonconst |
| GetPopulationTrend |  | DataTrend | Category: nonconst |
| GetPotentialCompanies |  | Unknown | Category: nonconst |
| GetPotentialDiploPlays |  | Unknown | Category: nonconst |
| GetPotentialGeneralDiploActions |  | Unknown | Category: nonconst |
| GetPotentialInvestors |  | Unknown | Category: nonconst |
| GetPotentialLabor |  | int64 | Category: nonconst |
| GetPotentialOverlordDiploActions |  | Unknown | Category: nonconst |
| GetPotentialPowerBlocLeaderDiploActions |  | Unknown | Category: nonconst |
| GetPotentialPowerBlocMemberDiploActions |  | Unknown | Category: nonconst |
| GetPotentialSubjectDiploActions |  | Unknown | Category: nonconst |
| GetPowerBloc |  | PowerBloc | Category: nonconst |
| GetPowerBlocExpenseDesc |  | CString | Category: nonconst |
| GetPowerBlocExpenseRaw |  | CFixedPoint | Category: nonconst |
| GetPowerBlocExpenseTrend |  | DataTrend | Category: nonconst |
| GetPowerBlocIncomeDesc |  | CString | Category: nonconst |
| GetPowerBlocIncomeRaw |  | CFixedPoint | Category: nonconst |
| GetPowerBlocIncomeTrend |  | DataTrend | Category: nonconst |
| GetPowerBlocNonMemberCountryTooltip |  | CString | Category: nonconst |
| GetPowerBlocWithHighestLeverage |  | PowerBloc | Category: nonconst |
| GetPowerBlocsTotalLeverageShare |  | CFixedPoint | Category: nonconst |
| GetPowerBlocsWithLeverage |  | Unknown | Category: nonconst |
| GetPowerDelta | 1. CString | CFixedPoint | Category: nonconst |
| GetPowerDeltaIcon | 1. CString | CString | Category: nonconst |
| GetPowerExpensesString | 1. CString | CString | Category: nonconst |
| GetPowerIncome | 1. CString | CFixedPoint | Category: nonconst |
| GetPowerIncomeString | 1. CString | CString | Category: nonconst |
| GetPowerTooltip | 1. CString | CString | Category: nonconst |
| GetPredictedBalanceFromBankruptcy |  | CFixedPoint | Category: nonconst |
| GetPrestige |  | int32 | Category: nonconst |
| GetPrestigeDesc |  | CString | Category: nonconst |
| GetPrestigeForCurrentRank |  | int32 | Category: nonconst |
| GetPrestigeForNextRank |  | int32 | Category: nonconst |
| GetPrestigeGoodsLeaderboardDesc |  | CString | Category: nonconst |
| GetPrestigeToMaintainRank |  | int32 | Category: nonconst |
| GetPrestigeTrend |  | DataTrend | Category: nonconst |
| GetPreviousAttitudeTowards | 1. Unknown | AIAttitude | Category: nonconst |
| GetPreviousAutonomousInvestmentsDesc |  | CString | Category: nonconst |
| GetPreviousRank |  | CString | Category: nonconst |
| GetPriceReportDesc |  | CString | Category: nonconst |
| GetPrimaryCulturesDesc |  | CString | Category: nonconst |
| GetPrincipal |  | CFixedPoint | Category: nonconst |
| GetPrivateConstructionGoodsExpenses |  | CFixedPoint | Category: nonconst |
| GetPrivateConstructionGoodsExpensesByGoodsDesc |  | CString | Category: nonconst |
| GetPrivateConstructionQueueDesc |  | CString | Category: nonconst |
| GetRadicalizationFromBankruptcy |  | int64 | Category: nonconst |
| GetRadicalsChangeSummary |  | CString | Category: nonconst |
| GetRadicalsDecreaseBreakdown |  | CString | Category: nonconst |
| GetRadicalsIncreaseBreakdown |  | CString | Category: nonconst |
| GetRadicalsLoyalistsChangeStartDate |  | CString | Category: nonconst |
| GetRadicalsSummaryDesc |  | CString | Category: nonconst |
| GetRadicalsTrend |  | DataTrend | Category: nonconst |
| GetRank |  | CString | Category: nonconst |
| GetRankDesc |  | CString | Category: nonconst |
| GetRankIconIndex |  | int32 | Category: nonconst |
| GetRankModifier |  | Modifier | Category: nonconst |
| GetRankNumber |  | int32 | Category: nonconst |
| GetRankProgress |  | float | Category: nonconst |
| GetRankTooltip |  | CString | Category: nonconst |
| GetRecentPartiesDesc |  | CString | Category: nonconst |
| GetRegularBattalions |  | int32 | Category: nonconst |
| GetReinforcementRateArmy |  | CFixedPoint | Category: nonconst |
| GetReinforcementRateNavy |  | CFixedPoint | Category: nonconst |
| GetRelationsColor | 1. Unknown | CVector4f | Category: nonconst |
| GetRelationsIconTexture | 1. Country | Unknown | Category: nonconst |
| GetRelationsProgress | 1. Unknown | CFixedPoint | Category: nonconst |
| GetRelationsProgressDesc | 1. Unknown | CString | Category: nonconst |
| GetRelationsTooltip | 1. Country | CString | Category: nonconst |
| GetRelationsWith | 1. Country | int32 | Category: nonconst |
| GetRelationsWithDesc | 1. Country | CString | Category: nonconst |
| GetRelativePrestige | 1. Country | CFixedPoint | Category: nonconst |
| GetRemainingCredit |  | CFixedPoint | Category: nonconst |
| GetRemainingDaysForFreeGovernmentReformRaw |  | int32 | Category: nonconst |
| GetRequiredConvoys |  | int32 | Category: nonconst |
| GetRequiredConvoysBreakdown |  | CString | Category: nonconst |
| GetResearchQueueBottom |  | Unknown | Category: nonconst |
| GetResearchQueueTop |  | Unknown | Category: nonconst |
| GetRuler |  | Character | Category: nonconst |
| GetRulingIGsDesc |  | CString | Category: nonconst |
| GetSOLDescForAllStratas |  | CString | Category: nonconst |
| GetSalariedWorkingAdults |  | int64 | Category: nonconst |
| GetSeaNodesMightBeConvoyRaidedInDesc |  | CString | Category: nonconst |
| GetSelectedLaw |  | Law | Category: nonconst |
| GetSocialHierarchy |  | SocialHierarchy | Category: nonconst |
| GetSpecialSocialHierarchy |  | SocialHierarchy | Category: nonconst |
| GetStandardOfLivingRanking |  | CString | Category: nonconst |
| GetStateOwnedBuildingsBureaucracyCostForLevels | 1. int32 | CFixedPoint | Category: nonconst |
| GetStateReligion |  | Religion | Category: nonconst |
| GetStatesInTurmoilBreakdown |  | CString | Category: nonconst |
| GetStatus | 1. Country | CString | Category: nonconst |
| GetStrategicObjectives |  | Unknown | Category: nonconst |
| GetStrategicRegions |  | Unknown | Category: nonconst |
| GetSubjectOrPowerBlocHierarchyLabel | 1. Country | CString | Category: nonconst |
| GetSubjectPact |  | DiplomaticPact | Category: nonconst |
| GetSubjectType |  | SubjectType | Category: nonconst |
| GetSubjectTypeName |  | CString | Category: nonconst |
| GetSubjects |  | Unknown | Category: nonconst |
| GetSubjectsOfType | 1. SubjectType | Unknown | Category: nonconst |
| GetSubsidiesExpenseTrend |  | DataTrend | Category: nonconst |
| GetSubsidiesExpenses |  | CFixedPoint | Category: nonconst |
| GetSubsidiesExpensesDesc |  | CString | Category: nonconst |
| GetSubsistingWorkingAdults |  | int64 | Category: nonconst |
| GetSubventionsExpenseTrend |  | DataTrend | Category: nonconst |
| GetSubventionsExpenses |  | CFixedPoint | Category: nonconst |
| GetSubventionsExpensesDesc |  | CString | Category: nonconst |
| GetSupplyNetworkNumSeaNodes |  | int32 | Category: nonconst |
| GetSupplyNetworkNumSeaNodesDesc |  | CString | Category: nonconst |
| GetSupplyNetworkStrength |  | CFixedPoint | Category: nonconst |
| GetSuppressionCostDesc |  | CString | Category: nonconst |
| GetSuppressionDesc |  | CString | Category: nonconst |
| GetTagName |  | CString | Category: nonconst |
| GetTargetLeverage | 1. Unknown | CFixedPoint | Category: nonconst |
| GetTargetLeverageShare | 1. PowerBloc | CFixedPoint | Category: nonconst |
| GetTargetRank |  | CString | Category: nonconst |
| GetTariffTrend |  | DataTrend | Category: nonconst |
| GetTaxIncomeFor | 1. Unknown | CFixedPoint | Category: nonconst |
| GetTaxIncomeTrend |  | DataTrend | Category: nonconst |
| GetTaxLevelDescHigh |  | CString | Category: nonconst |
| GetTaxLevelDescLow |  | CString | Category: nonconst |
| GetTaxLevelDescMedium |  | CString | Category: nonconst |
| GetTaxLevelDescVeryHigh |  | CString | Category: nonconst |
| GetTaxLevelDescVeryLow |  | CString | Category: nonconst |
| GetTensionIconTexture | 1. Country | Unknown | Category: nonconst |
| GetTensionTooltip | 1. Country | CString | Category: nonconst |
| GetTensionWith | 1. Country | int32 | Category: nonconst |
| GetTensionWithDesc | 1. Country | CString | Category: nonconst |
| GetTimeUntilTargetReachedArmy |  | CString | Category: nonconst |
| GetTimeUntilTargetReachedNavy |  | CString | Category: nonconst |
| GetTimedModifierDurationRemaining | 1. Modifier | CString | Category: nonconst |
| GetTimedModifiers |  | Unknown | Category: nonconst |
| GetTooltipTag |  | CString | Category: nonconst |
| GetTopOverlord |  | Country | Category: nonconst |
| GetTotalAgitatorSlots |  | int32 | Category: nonconst |
| GetTotalExpensesTrend |  | DataTrend | Category: nonconst |
| GetTotalExportedAmount |  | CFixedPoint | Category: nonconst |
| GetTotalForeignConstructions |  | int32 | Category: nonconst |
| GetTotalGovernmentClout |  | CFixedPoint | Category: nonconst |
| GetTotalImportedAmount |  | CFixedPoint | Category: nonconst |
| GetTotalIncomeTrend |  | DataTrend | Category: nonconst |
| GetTotalLeverageFactors |  | CFixedPoint | Category: nonconst |
| GetTotalLeverageFactorsBreakdown |  | CString | Category: nonconst |
| GetTotalLeverageFactorsWithResistance |  | CFixedPoint | Category: nonconst |
| GetTotalLeverageFactorsWithResistanceBreakdown |  | CString | Category: nonconst |
| GetTotalLiteracyRanking |  | CString | Category: nonconst |
| GetTotalLiteracyRate |  | CFixedPoint | Category: nonconst |
| GetTotalMarginalClout |  | CFixedPoint | Category: nonconst |
| GetTotalNumLoyalistsChange |  | int64 | Category: nonconst |
| GetTotalNumLoyalistsDecrease |  | int64 | Category: nonconst |
| GetTotalNumLoyalistsIncrease |  | int64 | Category: nonconst |
| GetTotalNumRadicalsChange |  | int64 | Category: nonconst |
| GetTotalNumRadicalsDecrease |  | int64 | Category: nonconst |
| GetTotalNumRadicalsIncrease |  | int64 | Category: nonconst |
| GetTotalOppositionClout |  | CFixedPoint | Category: nonconst |
| GetTotalPopulation |  | int64 | Category: nonconst |
| GetTotalUrbanization |  | int32 | Category: nonconst |
| GetTreatiesBrokenFromNeutralityDesc | 1. DiplomaticPlay | CString | Category: nonconst |
| GetTreatiesExpenseTrend |  | DataTrend | Category: nonconst |
| GetTreatiesIncomeTrend |  | DataTrend | Category: nonconst |
| GetTreatiesWith | 1. Country | Unknown | Category: nonconst |
| GetTreatiesWithDesc | 1. Country | CString | Category: nonconst |
| GetTruceDate | 1. Country | CString | Category: nonconst |
| GetUnclaimedLeverage |  | CFixedPoint | Category: nonconst |
| GetUnclaimedLeverageFormatted |  | CString | Category: nonconst |
| GetUnclaimedLeverageShare |  | CFixedPoint | Category: nonconst |
| GetUnclaimedLeverageShareTarget |  | CFixedPoint | Category: nonconst |
| GetUnclaimedLeverageTarget |  | CFixedPoint | Category: nonconst |
| GetUnemployedWorkingAdults |  | int64 | Category: nonconst |
| GetUnenforcedTreaties |  | Unknown | Category: nonconst |
| GetUnenforcedTreatiesWith | 1. Country | Unknown | Category: nonconst |
| GetUnenforcedTreatiesWithDesc | 1. Unknown | CString | Category: nonconst |
| GetUnrealizedTaxes |  | CFixedPoint | Category: nonconst |
| GetUpperStrataPopulationTrend |  | DataTrend | Category: nonconst |
| GetUsedAgitatorSlots |  | int32 | Category: nonconst |
| GetUsedFreeCharters |  | int32 | Category: nonconst |
| GetWarships |  | int32 | Category: nonconst |
| GetWeeklyBalance |  | CFixedPoint | Category: nonconst |
| GetWeeklyCostArmy |  | CFixedPoint | Category: nonconst |
| GetWeeklyCostNavy |  | CFixedPoint | Category: nonconst |
| GetWeeklyExpenses |  | CFixedPoint | Category: nonconst |
| GetWeeklyFixedExpenses |  | CFixedPoint | Category: nonconst |
| GetWeeklyGDP |  | CFixedPoint | Category: nonconst |
| GetWeeklyIncome |  | CFixedPoint | Category: nonconst |
| GetWeeklyInnovation |  | CFixedPoint | Category: nonconst |
| GetWeeklyInnovationDesc |  | CString | Category: nonconst |
| GetWeeklyInterestRate |  | CFixedPoint | Category: nonconst |
| GetWeeklyLeverageGain | 1. PowerBloc | CFixedPoint | Category: nonconst |
| GetWeeklyLibertyDesireChange |  | CFixedPoint | Category: nonconst |
| GetWeeklyLibertyDesireChangeDesc |  | CString | Category: nonconst |
| GetWeeklyLibertyDesireChangeFromSupportIndependence |  | CFixedPoint | Category: nonconst |
| GetWeeklyLibertyDesireChangeFromSupportIndependenceDesc |  | CString | Category: nonconst |
| GetWeeklyMaxInnovation |  | CFixedPoint | Category: nonconst |
| GetWeeklyMaxInnovationDesc |  | CString | Category: nonconst |
| GetWeeklyRawInnovation |  | CFixedPoint | Category: nonconst |
| GetWeeklyResearchSpeed |  | CFixedPoint | Category: nonconst |
| GetWeeklyResearchSpeedDesc |  | CString | Category: nonconst |
| GetWeeklyTechnologyProgressDescForTech | 1. Technology | CString | Category: nonconst |
| GetWeeklyTechnologySpreadBreakdown |  | CString | Category: nonconst |
| GetWeeklyTechnologySpreadDesc |  | CString | Category: nonconst |
| GetWeeklyTechnologySpreadForTechDesc | 1. Technology | CString | Category: nonconst |
| GetWeeklyTemporaryExpenses |  | CFixedPoint | Category: nonconst |
| GetWeeklyTemporaryIncome |  | CFixedPoint | Category: nonconst |
| GetWelfarePaymentsExpenses |  | CFixedPoint | Category: nonconst |
| GetWelfarePaymentsTrend |  | DataTrend | Category: nonconst |
| GetWorkingAdults |  | int64 | Category: nonconst |
| GetYearlyInterestRate |  | CFixedPoint | Category: nonconst |
| GetYouOrCountryName |  | CString | Category: nonconst |
| GetZeroBalancePlotPoints |  | Unknown | Category: nonconst |
| GetZeroMoneyPlotPoints |  | Unknown | Category: nonconst |
| HasActiveDiplomacy |  | bool |  |
| HasAnyAllianceLikeTreatiesWith | 1. Unknown | bool |  |
| HasAnySlavery |  | bool |  |
| HasAnyTaxes |  | bool |  |
| HasConstructionQueued |  | bool |  |
| HasCurrentlyResearchedTechnology |  | bool |  |
| HasDamagedConvoys |  | bool |  |
| HasDeclaredInterest | 1. Unknown | bool |  |
| HasDecreasingInterests |  | bool |  |
| HasDiplomaticPactWith | 1. Unknown 2. Unknown | bool |  |
| HasElectionTrendData |  | bool |  |
| HasElections |  | bool |  |
| HasExportSubventionsHigh | 1. Goods | bool |  |
| HasExportSubventionsLow | 1. Goods | bool |  |
| HasExportSubventionsMax | 1. Goods | bool |  |
| HasExportTariffsHigh | 1. Goods | bool |  |
| HasExportTariffsLow | 1. Goods | bool |  |
| HasExportTariffsMax | 1. Goods | bool |  |
| HasExportTariffsNone | 1. Goods | bool |  |
| HasForeignInvestmentRights | 1. Country | bool |  |
| HasGovernmentWages |  | bool |  |
| HasHeir |  | bool |  |
| HasHigherUnclaimedLeverage |  | bool |  |
| HasHigherUnclaimedLeverageTarget |  | bool |  |
| HasIGApprovalFromLoyalists |  | bool |  |
| HasIGApprovalFromRadicals |  | bool |  |
| HasImportSubventionsHigh | 1. Goods | bool |  |
| HasImportSubventionsLow | 1. Goods | bool |  |
| HasImportSubventionsMax | 1. Goods | bool |  |
| HasImportTariffsHigh | 1. Goods | bool |  |
| HasImportTariffsLow | 1. Goods | bool |  |
| HasImportTariffsMax | 1. Goods | bool |  |
| HasImportTariffsNone | 1. Goods | bool |  |
| HasInterestIn | 1. StrategicRegion | bool |  |
| HasMilitaryWages |  | bool |  |
| HasNewProductionMethodInGroup | 1. ProductionMethodGroup | bool |  |
| HasNewProductionMethodInSameGroup | 1. BuildingType 2. ProductionMethod | bool |  |
| HasObjective |  | bool |  |
| HasOverlappingInterestsWith | 1. Unknown | bool |  |
| HasOwningCompany |  | bool |  |
| HasProgressingLawEnactment |  | bool |  |
| HasRuler |  | bool |  |
| HasSelectedLaw |  | bool |  |
| HasSpecialSocialHierarchy |  | bool |  |
| InDefault |  | bool |  |
| IsAI |  | bool |  |
| IsAIOrOtherPlayer |  | bool |  |
| IsAlliedInDiploPlayWith | 1. Country | bool |  |
| IsAnySubjectOf | 1. Unknown | bool |  |
| IsAtWar |  | bool |  |
| IsAtWarWith | 1. Country | bool |  |
| IsBeingHighlighted |  | bool |  |
| IsBeingTutorialHighlighted |  | bool |  |
| IsColonizable |  | bool |  |
| IsCommittedInDiplomaticPlay |  | bool |  |
| IsConscripting |  | bool |  |
| IsConstructionPaused |  | bool |  |
| IsDead |  | bool |  |
| IsDiplomaticallyRelevantCountry | 1. Unknown | bool |  |
| IsEconomyHealthy |  | bool |  |
| IsEconomyHealthyDesc |  | CString |  |
| IsEnactingLaw |  | bool |  |
| IsHighestRank |  | bool |  |
| IsIgnoringCountryFormation | 1. CountryFormation | bool |  |
| IsIgnoringDecision | 1. Decision | bool |  |
| IsInElectionCampaignPeriod |  | bool |  |
| IsInPowerBloc |  | bool |  |
| IsInsurrectionary |  | bool |  |
| IsInvolvedInActiveConflict |  | bool |  |
| IsLocalPlayer |  | bool |  |
| IsLowestRank |  | bool |  |
| IsMobilized |  | bool |  |
| IsNegotiating |  | bool |  |
| IsNeighborsWith | 1. Unknown | bool |  |
| IsNewProductionMethod | 1. ProductionMethod | bool |  |
| IsObjectiveIdle |  | bool |  |
| IsOtherPlayer |  | bool |  |
| IsPinnedInOutliner |  | bool |  |
| IsPlayer |  | bool |  |
| IsPowerBlocLeader |  | bool |  |
| IsPowerStruggling |  | bool |  |
| IsRank | 1. Unknown | bool |  |
| IsRevolutionary |  | bool |  |
| IsSecessionist |  | bool |  |
| IsSubject |  | bool |  |
| IsSubjectOf | 1. Country | bool |  |
| IsTaxingAnyGood |  | bool |  |
| IsValid |  | bool |  |
| LeavePowerBloc |  | Command |  |
| MakeScope |  | Scope |  |
| MobilizeAllArmies |  | Command |  |
| OwesObligationTo | 1. Unknown | bool |  |
| PauseConstruction |  | Command |  |
| PauseConstructionTooltip |  | CString |  |
| PredictBalanceWithoutTemporaryIncomeAndExpenses |  | CFixedPoint |  |
| PredictConsumptionTaxes |  | CFixedPoint |  |
| PredictDiplomaticPactsExpenses |  | CFixedPoint |  |
| PredictDiplomaticPactsExpensesDesc |  | CString |  |
| PredictDiplomaticPactsIncome |  | CFixedPoint |  |
| PredictDiplomaticPactsIncomeDesc |  | CString |  |
| PredictDividendsTaxes |  | CFixedPoint |  |
| PredictDividendsTaxesDesc |  | CString |  |
| PredictEconomyHealthDesc |  | CString |  |
| PredictGovernmentShareDividends |  | CFixedPoint |  |
| PredictGovernmentShareDividendsDesc |  | CString |  |
| PredictGovernmentShareLosses |  | CFixedPoint |  |
| PredictGovernmentShareLossesDesc |  | CString |  |
| PredictGovernmentWagesExpenses |  | CFixedPoint |  |
| PredictMaxWeeklyTechnologyProgressForTech | 1. Unknown | CFixedPoint |  |
| PredictMilitaryWagesExpenses |  | CFixedPoint |  |
| PredictMinWeeklyTechnologyProgressForTech | 1. Unknown | CFixedPoint |  |
| PredictMinting |  | CFixedPoint |  |
| PredictMintingDesc |  | CString |  |
| PredictTariffs |  | CFixedPoint |  |
| PredictTariffsDesc |  | CString |  |
| PredictTotalMilitaryExpenses |  | CFixedPoint |  |
| PredictTreatyExpenses |  | CFixedPoint |  |
| PredictTreatyExpensesDesc |  | CString |  |
| PredictTreatyIncome |  | CFixedPoint |  |
| PredictTreatyIncomeDesc |  | CString |  |
| PredictWeeklyBalance |  | CFixedPoint |  |
| PredictWeeklyBalanceWithEconomyHealthHint |  | CString |  |
| PredictWeeklyFixedIncome |  | CFixedPoint |  |
| PredictWeeklyIncome |  | CFixedPoint |  |
| RemoveCompany | 1. CompanyType | Command |  |
| ResumeConstruction |  | Command |  |
| ResumeConstructionTooltip |  | CString |  |
| Self |  | Country |  |
| SetExportSubventionsHigh | 1. Goods | Command |  |
| SetExportSubventionsLow | 1. Goods | Command |  |
| SetExportSubventionsMax | 1. Goods | Command |  |
| SetExportTariffsHigh | 1. Goods | Command |  |
| SetExportTariffsLow | 1. Goods | Command |  |
| SetExportTariffsMax | 1. Goods | Command |  |
| SetExportTariffsNone | 1. Goods | Command |  |
| SetGovernmentWageLevelHigh |  | Command |  |
| SetGovernmentWageLevelLow |  | Command |  |
| SetGovernmentWageLevelMedium |  | Command |  |
| SetGovernmentWageLevelVeryHigh |  | Command |  |
| SetGovernmentWageLevelVeryLow |  | Command |  |
| SetImportSubventionsHigh | 1. Goods | Command |  |
| SetImportSubventionsLow | 1. Goods | Command |  |
| SetImportSubventionsMax | 1. Goods | Command |  |
| SetImportTariffsHigh | 1. Goods | Command |  |
| SetImportTariffsLow | 1. Goods | Command |  |
| SetImportTariffsMax | 1. Goods | Command |  |
| SetImportTariffsNone | 1. Goods | Command |  |
| SetMilitaryWageLevelHigh |  | Command |  |
| SetMilitaryWageLevelLow |  | Command |  |
| SetMilitaryWageLevelMedium |  | Command |  |
| SetMilitaryWageLevelVeryHigh |  | Command |  |
| SetMilitaryWageLevelVeryLow |  | Command |  |
| SetTaxLevelHigh |  | Command |  |
| SetTaxLevelLow |  | Command |  |
| SetTaxLevelMedium |  | Command |  |
| SetTaxLevelVeryHigh |  | Command |  |
| SetTaxLevelVeryLow |  | Command |  |
| ShowInvestmentPoolPredictedNextBuilding |  | bool |  |
| SortCompanies | 1. Unknown | void |  |
| SortCultures | 1. CString | void |  |
| SortReligions | 1. CString | void |  |
| SortStates | 1. Unknown | void |  |
| SortSubjects | 1. CString | void |  |
| StartNegotiationWith | 1. InterestGroup | Command |  |
| ToggleIgnoreCountryFormation | 1. CountryFormation | Command |  |
| ToggleIgnoreDecision | 1. Decision | Command |  |
| TogglePinInOutliner |  | void |  |
| TryGetOverlordTooltipEntry |  | CString |  |
| TryGetSubjectsTooltipEntry |  | CString |  |

List of Scope functions

| Function | Arguments | Output | Description |
| AccessSelf |  | Scope | Category: const |
| GetFlagName |  | CString | Category: nonconst |
| GetList | 1. Unknown | Unknown | Category: nonconst |
| GetScriptValueDesc | 1. ScriptValue | CString | Category: nonconst |
| GetValue |  | CFixedPoint | Category: nonconst |
| GetValueWithDefault | 1. Unknown | CFixedPoint | Category: nonconst |
| IsSet |  | bool |  |
| ScriptValue | 1. ScriptValue | CFixedPoint |  |
| Self |  | Scope |  |
| VarRemaining | 1. Unknown | int32 |  |

List of TopScope functions

| Function | Arguments | Output | Description |
| AccessSelf |  | TopScope | Category: const |
| End |  | TopScope |  |
| GetFlagName | 1. Unknown | CString | Category: nonconst |
| GetLocalVariable | 1. Unknown | Scope | Category: nonconst |
| GetRootScope |  | Scope | Category: nonconst |
| GetScriptValueDesc | 1. ScriptValue | CString | Category: nonconst |
| GetValue | 1. CString | CFixedPoint | Category: nonconst |
| ScriptValue | 1. ScriptValue | CFixedPoint |  |
| Self |  | TopScope |  |
| gsIG | 1. CString | InterestGroup |  |
| gsInterestGroup | 1. CString | InterestGroup |  |
| sB | 1. CString | Building |  |
| sBG | 1. CString | BuildingGroup |  |
| sBT | 1. CString | BuildingType |  |
| sBuilding | 1. CString | Building |  |
| sBuildingGroup | 1. CString | BuildingGroup |  |
| sBuildingType | 1. CString | BuildingType |  |
| sC | 1. CString | Country |  |
| sCF | 1. CString | CountryFormation |  |
| sCM | 1. CString | Company |  |
| sCMT | 1. CString | CompanyType |  |
| sCOT | 1. CString | CommanderOrderType |  |
| sCU | 1. CString | CombatUnit |  |
| sCW | 1. CString | CivilWar |  |
| sCha | 1. CString | Character |  |
| sCharacter | 1. CString | Character |  |
| sCivilWar | 1. CString | CivilWar |  |
| sCommanderOrderType | 1. CString | CommanderOrderType |  |
| sCompany | 1. CString | Company |  |
| sCompanyType | 1. CString | CompanyType |  |
| sCountry | 1. CString | Country |  |
| sCountryFormation | 1. CString | CountryFormation |  |
| sCulture | 1. CString | Culture |  |
| sD | 1. CString | Decision |  |
| sDA | 1. CString | DiplomaticAction |  |
| sDC | 1. CString | DiplomaticCatalyst |  |
| sDCC | 1. CString | DiplomaticCatalystCategory |  |
| sDCT | 1. CString | DiplomaticCatalystType |  |
| sDD | 1. CString | DiplomaticDemand |  |
| sDP | 1. CString | DiplomaticPlay |  |
| sDPT | 1. CString | DiplomaticPlayType |  |
| sDR | 1. CString | DiplomaticRelations |  |
| sDecision | 1. CString | Decision |  |
| sDiplomaticAction | 1. CString | DiplomaticAction |  |
| sDiplomaticCatalyst | 1. CString | DiplomaticCatalyst |  |
| sDiplomaticCatalystCategory | 1. CString | DiplomaticCatalystCategory |  |
| sDiplomaticCatalystType | 1. CString | DiplomaticCatalystType |  |
| sDiplomaticDemand | 1. CString | DiplomaticDemand |  |
| sDiplomaticPact | 1. CString | DiplomaticPact |  |
| sDiplomaticPlay | 1. CString | DiplomaticPlay |  |
| sDiplomaticPlayType | 1. CString | DiplomaticPlayType |  |
| sDiplomaticRelations | 1. CString | DiplomaticRelations |  |
| sF | 1. CString | Front |  |
| sFront | 1. CString | Front |  |
| sG | 1. CString | Goods |  |
| sGoods | 1. CString | Goods |  |
| sHC | 1. CString | HarvestCondition |  |
| sHCA | 1. CString | HarvestConditionArea |  |
| sHCT | 1. CString | HarvestConditionType |  |
| sHQ | 1. CString | Hq |  |
| sHarvestCondition | 1. CString | HarvestCondition |  |
| sHarvestConditionArea | 1. CString | HarvestConditionArea |  |
| sHarvestConditionType | 1. CString | HarvestConditionType |  |
| sIGT | 1. CString | InterestGroupTrait |  |
| sIdeology | 1. CString | Ideology |  |
| sInstitution | 1. CString | Institution |  |
| sInstitutionType | 1. CString | InstitutionType |  |
| sInterestGroupTrait | 1. CString | InterestGroupTrait |  |
| sJE | 1. CString | JournalEntry |  |
| sJournalEntry | 1. CString | JournalEntry |  |
| sL | 1. CString | Law |  |
| sLaw | 1. CString | Law |  |
| sLawType | 1. CString | LawType |  |
| sMilitaryFormation | 1. CString | MilitaryFormation |  |
| sP | 1. CString | Party |  |
| sPB | 1. CString | PowerBloc |  |
| sPBI | 1. CString | PowerBlocIdentity |  |
| sPBP | 1. CString | PowerBlocPrinciple |  |
| sPL | 1. CString | PoliticalLobby |  |
| sPLA | 1. CString | PoliticalLobbyAppeasementFactor |  |
| sPLT | 1. CString | PoliticalLobbyType |  |
| sPM | 1. CString | PoliticalMovement |  |
| sPMC | 1. CString | PoliticalMovementCategory |  |
| sPMT | 1. CString | PoliticalMovementType |  |
| sPT | 1. CString | PopType |  |
| sPact | 1. CString | DiplomaticPact |  |
| sParty | 1. CString | Party |  |
| sPoliticalLobby | 1. CString | PoliticalLobby |  |
| sPoliticalLobbyAppeasement | 1. CString | PoliticalLobbyAppeasementFactor |  |
| sPoliticalLobbyType | 1. CString | PoliticalLobbyType |  |
| sPoliticalMovement | 1. CString | PoliticalMovement |  |
| sPoliticalMovementCategory | 1. CString | PoliticalMovementCategory |  |
| sPoliticalMovementType | 1. CString | PoliticalMovementType |  |
| sPop | 1. CString | Pop |  |
| sPopType | 1. CString | PopType |  |
| sPowerBloc | 1. CString | PowerBloc |  |
| sPowerBlocIdentity | 1. CString | PowerBlocIdentity |  |
| sPowerBlocPrinciple | 1. CString | PowerBlocPrinciple |  |
| sPowerBlocPrincipleGroup | 1. CString | PowerBlocPrincipleGroup |  |
| sProvince | 1. CString | Province |  |
| sReligion | 1. CString | Religion |  |
| sS | 1. CString | State |  |
| sSR | 1. CString | StrategicRegion |  |
| sSW | 1. CString | Sway |  |
| sState | 1. CString | State |  |
| sStateRegion | 1. CString | StateRegion |  |
| sStrategicRegion | 1. CString | StrategicRegion |  |
| sSway | 1. CString | Sway |  |
| sT | 1. CString | Technology |  |
| sTechnology | 1. CString | Technology |  |
| sTreaty | 1. CString | Treaty |  |
| sTreatyArticle | 1. CString | Article |  |
| sW | 1. CString | War |  |
| sWar | 1. CString | War |  |
| sWarGoal | 1. CString | WarGoal |  |
| sWarGoalType | 1. CString | WarGoalType |  |

### List of all data type functions
*Main article: [List of GUI script functions](./List of GUI script functions.md)*

The list is on a separate page as it is too large to directly be included on this page.

## GUI promotes
GUI promotes typically move the "scope" from one type to another.

List of global promotes

| Promote | Arguments | Output | Description |
| ACCEPTANCE\_STATUS |  | AcceptanceStatus |  |
| AIATTITUDE |  | AIAttitude |  |
| AISTRATEGY |  | AIStrategy |  |
| ALERT |  | Alert |  |
| ALERT\_GROUP |  | AlertGroup |  |
| ALLY\_COUNTRY |  | Country |  |
| AMENDMENT |  | Amendment |  |
| AMENDMENT\_TYPE |  | AmendmentType |  |
| AccessGameRules |  | JominiGameRules | Category: const |
| AccessHighlightManager |  | HighlightManager | Category: const |
| AccessLogViewer |  | LogViewer | Category: const |
| AccessMetaPlayer |  | Player | Category: const |
| AccessPlayer |  | Country | Category: const |
| AccessPlayerJournalEntry | 1. Unknown | JournalEntry | Category: const |
| AccessScopeReference | 1. Scope | Scope | Category: const |
| Application |  | Application |  |
| BATTLE |  | Battle |  |
| BATTLE\_CONDITION |  | BattleCondition |  |
| BUILDING |  | Building |  |
| BUILDING\_GROUP |  | BuildingGroup |  |
| BUILDING\_OWNERSHIP |  | BuildingOwnership |  |
| BUILDING\_TYPE |  | BuildingType |  |
| CANAL\_TYPE |  | CanalType |  |
| CHARACTER |  | Character |  |
| CHARACTER\_INTERACTION |  | CharacterInteraction |  |
| CHARACTER\_TRAIT |  | CharacterTrait |  |
| CIVIL\_WAR |  | CivilWar |  |
| COHESION\_LEVEL |  | CohesionLevel |  |
| COMBAT\_UNIT |  | CombatUnit |  |
| COMBAT\_UNIT\_GROUP |  | CombatUnitGroup |  |
| COMBAT\_UNIT\_TYPE |  | CombatUnitType |  |
| COMMANDER\_ORDER\_TYPE |  | CommanderOrderType |  |
| COMMANDER\_RANK |  | CommanderRank |  |
| COMPANY |  | Company |  |
| COMPANY\_CHARTER |  | CompanyCharter |  |
| COMPANY\_CHARTER\_TYPE |  | CompanyCharterType |  |
| COMPANY\_TYPE |  | CompanyType |  |
| CONSTRUCTION\_QUEUE\_ELEMENT |  | ConstructionQueueElement |  |
| CONTEXTUAL\_DIPLOMATIC\_ACTION\_TYPE |  | ContextualDiplomaticActionType |  |
| CONTEXTUAL\_DIPLOMATIC\_PACT |  | ContextualDiplomaticPact |  |
| COUNTRY |  | Country |  |
| COUNTRY\_CREATION |  | CountryCreation |  |
| COUNTRY\_DEFINITION |  | CountryDefinition |  |
| COUNTRY\_FORMATION |  | CountryFormation |  |
| COUNTRY\_THIRD\_PARTY |  | Country |  |
| CULTURAL\_COMMUNITY |  | CulturalCommunity |  |
| CULTURE |  | Culture |  |
| DATE |  | Date |  |
| DATE\_MAX |  | Date |  |
| DATE\_MIN |  | Date |  |
| DECISION\_TYPE |  | Decision |  |
| DECREE |  | Decree |  |
| DECREE\_TYPE |  | DecreeType |  |
| DIPLOMATIC\_ACTION |  | DiplomaticAction |  |
| DIPLOMATIC\_ACTION\_TYPE |  | DiplomaticActionType |  |
| DIPLOMATIC\_CATALYST |  | DiplomaticCatalyst |  |
| DIPLOMATIC\_CATALYST\_CATEGORY |  | DiplomaticCatalystCategory |  |
| DIPLOMATIC\_CATALYST\_TYPE |  | DiplomaticCatalystType |  |
| DIPLOMATIC\_DEMAND |  | DiplomaticDemand |  |
| DIPLOMATIC\_PACT |  | DiplomaticPact |  |
| DIPLOMATIC\_PLAY |  | DiplomaticPlay |  |
| DIPLOMATIC\_PLAY\_TYPE |  | DiplomaticPlayType |  |
| DIPLOMATIC\_RELATIONS |  | DiplomaticRelations |  |
| DISCRIMINATION\_TRAIT |  | DiscriminationTrait |  |
| DISCRIMINATION\_TRAIT\_GROUP |  | DiscriminationTraitGroup |  |
| DLC\_METADATA |  | Dlc |  |
| ELECTION |  | Election |  |
| EMPLOYEE\_TRANSFER |  | EmployeeTransfer |  |
| ENEMY\_COUNTRY |  | Country |  |
| ERA |  | Era |  |
| EVENT |  | Event |  |
| EmptyScope |  | TopScope |  |
| FIRSTMARKET |  | Market |  |
| FIRST\_COUNTRY |  | Country |  |
| FRONT |  | Front |  |
| GAME\_CONCEPT\_TYPE |  | GameConceptType |  |
| GAME\_RULE |  | GameRule |  |
| GAME\_RULE\_SETTING |  | GameRuleSetting |  |
| GC | 1. Unknown | GameConceptType |  |
| GEOGRAPHIC\_REGION |  | GeographicRegion |  |
| GOODS |  | Goods |  |
| GOODSPRODUCTIONINFO |  | GoodsProductionInfo |  |
| GOVERNMENT\_TYPE |  | GovernmentType |  |
| GetAIStrategy | 1. Unknown | AIStrategy | Category: nonconst |
| GetAcceptanceStatus | 1. AcceptanceStatus | AcceptanceStatus | Category: nonconst |
| GetAmendmentType | 1. Unknown | AmendmentType | Category: nonconst |
| GetArticleType | 1. TreatyArticle | ArticleType | Category: nonconst |
| GetBattleCondition | 1. BattleCondition | BattleCondition | Category: nonconst |
| GetBuildingGroup | 1. BuildingGroup | BuildingGroup | Category: nonconst |
| GetBuildingType | 1. BuildingType | BuildingType | Category: nonconst |
| GetCharacterTrait | 1. CharacterTrait | CharacterTrait | Category: nonconst |
| GetCohesionLevel | 1. CohesionLevel | CohesionLevel | Category: nonconst |
| GetCombatUnitGroup | 1. CombatUnitGroup | CombatUnitGroup | Category: nonconst |
| GetCombatUnitType | 1. CombatUnit | CombatUnitType | Category: nonconst |
| GetCommanderOrderType | 1. CommanderOrder | CommanderOrderType | Category: nonconst |
| GetCompanyCharterType | 1. CompanyCharterType | CompanyCharterType | Category: nonconst |
| GetConstructionSectorType |  | BuildingType | Category: nonconst |
| GetCountryDiplomaticAction | 1. DiplomaticAction 2. Country 3. Country | DiplomaticAction | Category: nonconst |
| GetCulture | 1. Culture | Culture | Category: nonconst |
| GetCurrentGameDate |  | Date | Category: nonconst |
| GetDecreeType | 1. Decree | DecreeType | Category: nonconst |
| GetDiplomaticActionType | 1. DiplomaticAction | DiplomaticActionType | Category: nonconst |
| GetDiplomaticPlayType | 1. DiplomaticPlay | DiplomaticPlayType | Category: nonconst |
| GetExilePool |  | ExilePool | Category: nonconst |
| GetGameEndDate |  | Date | Category: nonconst |
| GetGameRules |  | JominiGameRules | Category: nonconst |
| GetGameStartDate |  | Date | Category: nonconst |
| GetGeographicRegion | 1. GeographicRegion | GeographicRegion | Category: nonconst |
| GetGlobalVariable | 1. CString | Scope | Category: nonconst |
| GetGoods | 1. Goods | Goods | Category: nonconst |
| GetHarvestConditionType | 1. HarvestConditionType | HarvestConditionType | Category: nonconst |
| GetIdeology | 1. Ideology | Ideology | Category: nonconst |
| GetInstitutionType | 1. Institution | InstitutionType | Category: nonconst |
| GetInterestGroupVariant | 1. InterestGroup 2. Country | InterestGroup | Category: nonconst |
| GetJournalEntryGroup | 1. Unknown | JournalEntryGroup | Category: nonconst |
| GetLabel | 1. TerrainLabel | Label | Category: nonconst |
| GetLawGroup | 1. LawGroup | LawGroup | Category: nonconst |
| GetLawType | 1. LawType | LawType | Category: nonconst |
| GetLegitimacyLevel | 1. LegitimacyLevel | LegitimacyLevel | Category: nonconst |
| GetLensToolbar |  | LensToolbar | Category: nonconst |
| GetLibertyDesireLevel | 1. Unknown | LibertyDesireLevel | Category: nonconst |
| GetLoadingScreenManager |  | LoadingScreenManager | Category: nonconst |
| GetMapMode | 1. Unknown | MapMode | Category: nonconst |
| GetMetaPlayer |  | Player | Category: nonconst |
| GetMobilizationOption | 1. Unknown | MobilizationOption | Category: nonconst |
| GetMobilizationOptionGroup | 1. Unknown | MobilizationOptionGroup | Category: nonconst |
| GetPlayer |  | Country | Category: nonconst |
| GetPlayerJournalEntry | 1. Unknown | JournalEntry | Category: nonconst |
| GetPopNeed | 1. PopNeed | PopNeed | Category: nonconst |
| GetPopType | 1. PopType | PopType | Category: nonconst |
| GetPowerBlocIdentity | 1. PowerBlocIdentity | PowerBlocIdentity | Category: nonconst |
| GetPowerBlocPrincipleGroup | 1. PrincipleGroup | PowerBlocPrincipleGroup | Category: nonconst |
| GetRankModifier | 1. CountryRank | Modifier | Category: nonconst |
| GetReligion | 1. Religion | Religion | Category: nonconst |
| GetScriptedGui | 1. ScriptedGui | ScriptedGui | Category: nonconst |
| GetSelectedFormation |  | MilitaryFormation | Category: nonconst |
| GetServerInfo |  | ServerInformation | Category: nonconst |
| GetStateRegion | 1. StateRegion | StateRegion | Category: nonconst |
| GetStaticModifier | 1. Modifier | Modifier | Category: nonconst |
| GetStrategicObjectiveFormationInState | 1. Country 2. State | MilitaryFormation | Category: nonconst |
| GetStrategicRegion | 1. StrategicRegion | StrategicRegion | Category: nonconst |
| GetSubjectType | 1. SubjectType | SubjectType | Category: nonconst |
| GetTechnology | 1. Technology | Technology | Category: nonconst |
| GetTutorialJournalEntry |  | JournalEntry | Category: nonconst |
| GetVariableSystem |  | VariableSystem | Category: nonconst |
| GetWarGoalType | 1. Unknown | WarGoalType | Category: nonconst |
| GuiScope |  | TopScope |  |
| HARVEST\_CONDITION |  | HarvestCondition |  |
| HARVEST\_CONDITION\_AREA |  | HarvestConditionArea |  |
| HARVEST\_CONDITION\_TYPE |  | HarvestConditionType |  |
| HQ |  | Hq |  |
| IDEOLOGY |  | Ideology |  |
| INITIATOR\_COUNTRY |  | Country |  |
| INITIATOR\_STATE |  | State |  |
| INSTITUTION |  | Institution |  |
| INSTITUTION\_TYPE |  | InstitutionType |  |
| INTEREST |  | Interest |  |
| INTEREST\_GROUP |  | InterestGroup |  |
| INTEREST\_GROUP\_TRAIT |  | InterestGroupTrait |  |
| INVASION |  | Invasion |  |
| InformationPanelBar |  | InformationPanelBar |  |
| JOURNAL\_ENTRY |  | JournalEntry |  |
| JOURNAL\_ENTRY\_GROUP |  | JournalEntryGroup |  |
| JOURNAL\_ENTRY\_TYPE |  | JournalEntryType |  |
| JominiPlayer |  | Playable |  |
| LAW |  | Law |  |
| LAW\_GROUP |  | LawGroup |  |
| LAW\_OTHER |  | Law |  |
| LAW\_TYPE |  | LawType |  |
| LEGITIMACY\_LEVEL |  | LegitimacyLevel |  |
| LIBERTY\_DESIRE\_LEVEL |  | LibertyDesireLevel |  |
| LabelingHelper |  | LabelingHelper |  |
| MAP\_MODE |  | MapMode |  |
| MARKET |  | Market |  |
| MARKET\_GOODS |  | MarketGoods |  |
| MILITARY\_FORMATION |  | MilitaryFormation |  |
| MILITARY\_FORMATION\_FLAG |  | MilitaryFormationFlag |  |
| MOBILIZATION\_OPTION |  | MobilizationOption |  |
| MOBILIZATION\_OPTION\_GROUP |  | MobilizationOptionGroup |  |
| MODIFIER |  | Modifier |  |
| MODIFIER\_BREAKDOWN |  | ModifierBreakdown |  |
| MapInteractions |  | MapInteractionManager |  |
| MapListPanelManager |  | MapListPanelManager |  |
| MultiplayerSynchronizationInfo |  | MultiplayerSynchronizationInfo |  |
| OBJECTIVE |  | Objective |  |
| OBJECTIVE\_TYPE |  | ObjectiveType |  |
| OBJECT\_SCOPE |  | Scope |  |
| OTHER\_COUNTRY |  | Country |  |
| Outliner |  | Outliner |  |
| PARTY |  | Party |  |
| PLAYER |  | Player |  |
| POLITICAL\_LOBBY |  | PoliticalLobby |  |
| POLITICAL\_LOBBY\_APPEASEMENT\_FACTOR |  | PoliticalLobbyAppeasementFactor |  |
| POLITICAL\_LOBBY\_TYPE |  | PoliticalLobbyType |  |
| POLITICAL\_MOVEMENT |  | PoliticalMovement |  |
| POLITICAL\_MOVEMENT\_CATEGORY |  | PoliticalMovementCategory |  |
| POLITICAL\_MOVEMENT\_POP\_SUPPORT\_FACTOR |  | PoliticalMovementPopSupportFactor |  |
| POLITICAL\_MOVEMENT\_TYPE |  | PoliticalMovementType |  |
| POP |  | Pop |  |
| POP\_GOODS\_CONSUMPTION |  | PopConsumptionGoods |  |
| POP\_NEED |  | PopNeed |  |
| POP\_TYPE |  | PopType |  |
| POP\_WITH\_IG |  | PopWithIG |  |
| POWER\_BLOC |  | PowerBloc |  |
| POWER\_BLOC\_IDENTITY |  | PowerBlocIdentity |  |
| POWER\_BLOC\_MAP\_TEXTURE |  | PowerBlocMapTexture |  |
| POWER\_BLOC\_OTHER |  | PowerBloc |  |
| POWER\_BLOC\_PRINCIPLE |  | PowerBlocPrinciple |  |
| POWER\_BLOC\_PRINCIPLE\_DATA |  | PowerBlocPrincipleData |  |
| POWER\_BLOC\_PRINCIPLE\_GROUP |  | PowerBlocPrincipleGroup |  |
| POWER\_BLOC\_PRINCIPLE\_OTHER |  | PowerBlocPrinciple |  |
| POWER\_BLOC\_STATUE |  | PowerBlocStatue |  |
| POWER\_BLOC\_STATUE\_ACCESSORY\_TYPE |  | PowerBlocStatueAccessoryType |  |
| POWER\_BLOC\_STATUE\_HERO\_TYPE |  | PowerBlocStatueHeroType |  |
| POWER\_BLOC\_STATUE\_PEDESTAL\_TYPE |  | PowerBlocStatuePedestalType |  |
| PREV |  | Scope |  |
| PRODUCTION\_METHOD |  | ProductionMethod |  |
| PRODUCTION\_METHOD\_GROUP |  | ProductionMethodGroup |  |
| PROPOSAL |  | Proposal |  |
| PROVINCE |  | Province |  |
| PROVINCE\_OTHER |  | Province |  |
| PdxAccount |  | PdxAccount |  |
| PopupManager |  | PopupManager |  |
| PowerBlocPanel |  | PowerBlocPanel |  |
| RELIGION |  | Religion |  |
| ROOT |  | Scope |  |
| RightClickMenuManager |  | RightClickMenuManager |  |
| Root |  | Scope |  |
| SCOPE |  | TopScope |  |
| SCRIPTED\_BUTTON |  | ScriptedButton |  |
| SCRIPTED\_PROGRESS\_BAR |  | ScriptedProgressBar |  |
| SECONDMARKET |  | Market |  |
| SECOND\_COUNTRY |  | Country |  |
| SHIPPING\_LANE |  | ShippingLane |  |
| SOCIAL\_CLASS |  | SocialClass |  |
| SOCIAL\_HIERARCHY |  | SocialHierarchy |  |
| SOURCE\_COUNTRY |  | Country |  |
| STATE |  | State |  |
| STATE\_GOODS |  | StateGoods |  |
| STATE\_OTHER |  | State |  |
| STATE\_REGION |  | StateRegion |  |
| STATE\_TRAIT |  | StateTrait |  |
| STRATEGIC\_REGION |  | StrategicRegion |  |
| SUBJECT\_SCOPE |  | Scope |  |
| SUBJECT\_TYPE |  | SubjectType |  |
| SWAY |  | Sway |  |
| SWAY\_OFFER |  | SwayOffer |  |
| SWAY\_OFFER\_TYPE |  | SwayOfferType |  |
| SwayCountryPanel |  | SwayCountryPanel |  |
| TARGET\_ACCEPTANCE\_STATUS |  | AcceptanceStatus |  |
| TARGET\_AIATTITUDE |  | AIAttitude |  |
| TARGET\_AISTRATEGY |  | AIStrategy |  |
| TARGET\_ALERT |  | Alert |  |
| TARGET\_ALERT\_GROUP |  | AlertGroup |  |
| TARGET\_AMENDMENT |  | Amendment |  |
| TARGET\_AMENDMENT\_TYPE |  | AmendmentType |  |
| TARGET\_BATTLE |  | Battle |  |
| TARGET\_BATTLE\_CONDITION |  | BattleCondition |  |
| TARGET\_BUILDING |  | Building |  |
| TARGET\_BUILDING\_GROUP |  | BuildingGroup |  |
| TARGET\_BUILDING\_OWNERSHIP |  | BuildingOwnership |  |
| TARGET\_BUILDING\_TYPE |  | BuildingType |  |
| TARGET\_CANAL\_TYPE |  | CanalType |  |
| TARGET\_CHARACTER |  | Character |  |
| TARGET\_CHARACTER\_INTERACTION |  | CharacterInteraction |  |
| TARGET\_CHARACTER\_TRAIT |  | CharacterTrait |  |
| TARGET\_CIVIL\_WAR |  | CivilWar |  |
| TARGET\_COHESION\_LEVEL |  | CohesionLevel |  |
| TARGET\_COMBAT\_UNIT |  | CombatUnit |  |
| TARGET\_COMBAT\_UNIT\_GROUP |  | CombatUnitGroup |  |
| TARGET\_COMBAT\_UNIT\_TYPE |  | CombatUnitType |  |
| TARGET\_COMMANDER\_ORDER\_TYPE |  | CommanderOrderType |  |
| TARGET\_COMMANDER\_RANK |  | CommanderRank |  |
| TARGET\_COMPANY |  | Company |  |
| TARGET\_COMPANY\_CHARTER |  | CompanyCharter |  |
| TARGET\_COMPANY\_CHARTER\_TYPE |  | CompanyCharterType |  |
| TARGET\_COMPANY\_TYPE |  | CompanyType |  |
| TARGET\_CONSTRUCTION\_QUEUE\_ELEMENT |  | ConstructionQueueElement |  |
| TARGET\_CONTEXTUAL\_DIPLOMATIC\_ACTION\_TYPE |  | ContextualDiplomaticActionType |  |
| TARGET\_CONTEXTUAL\_DIPLOMATIC\_PACT |  | ContextualDiplomaticPact |  |
| TARGET\_COUNTRY |  | Country |  |
| TARGET\_COUNTRY\_CREATION |  | CountryCreation |  |
| TARGET\_COUNTRY\_DEFINITION |  | CountryDefinition |  |
| TARGET\_COUNTRY\_FORMATION |  | CountryFormation |  |
| TARGET\_CULTURAL\_COMMUNITY |  | CulturalCommunity |  |
| TARGET\_CULTURE |  | Culture |  |
| TARGET\_DECISION\_TYPE |  | Decision |  |
| TARGET\_DECREE |  | Decree |  |
| TARGET\_DECREE\_TYPE |  | DecreeType |  |
| TARGET\_DIPLOMATIC\_ACTION |  | DiplomaticAction |  |
| TARGET\_DIPLOMATIC\_ACTION\_TYPE |  | DiplomaticActionType |  |
| TARGET\_DIPLOMATIC\_CATALYST |  | DiplomaticCatalyst |  |
| TARGET\_DIPLOMATIC\_CATALYST\_CATEGORY |  | DiplomaticCatalystCategory |  |
| TARGET\_DIPLOMATIC\_CATALYST\_TYPE |  | DiplomaticCatalystType |  |
| TARGET\_DIPLOMATIC\_DEMAND |  | DiplomaticDemand |  |
| TARGET\_DIPLOMATIC\_PACT |  | DiplomaticPact |  |
| TARGET\_DIPLOMATIC\_PLAY |  | DiplomaticPlay |  |
| TARGET\_DIPLOMATIC\_PLAY\_TYPE |  | DiplomaticPlayType |  |
| TARGET\_DIPLOMATIC\_RELATIONS |  | DiplomaticRelations |  |
| TARGET\_DISCRIMINATION\_TRAIT |  | DiscriminationTrait |  |
| TARGET\_DISCRIMINATION\_TRAIT\_GROUP |  | DiscriminationTraitGroup |  |
| TARGET\_DLC\_METADATA |  | Dlc |  |
| TARGET\_ELECTION |  | Election |  |
| TARGET\_EMPLOYEE\_TRANSFER |  | EmployeeTransfer |  |
| TARGET\_ERA |  | Era |  |
| TARGET\_EVENT |  | Event |  |
| TARGET\_FRONT |  | Front |  |
| TARGET\_GAME\_CONCEPT\_TYPE |  | GameConceptType |  |
| TARGET\_GEOGRAPHIC\_REGION |  | GeographicRegion |  |
| TARGET\_GOODS |  | Goods |  |
| TARGET\_GOVERNMENT\_TYPE |  | GovernmentType |  |
| TARGET\_HARVEST\_CONDITION |  | HarvestCondition |  |
| TARGET\_HARVEST\_CONDITION\_AREA |  | HarvestConditionArea |  |
| TARGET\_HARVEST\_CONDITION\_TYPE |  | HarvestConditionType |  |
| TARGET\_HQ |  | Hq |  |
| TARGET\_IDEOLOGY |  | Ideology |  |
| TARGET\_INSTITUTION |  | Institution |  |
| TARGET\_INSTITUTION\_TYPE |  | InstitutionType |  |
| TARGET\_INTEREST |  | Interest |  |
| TARGET\_INTEREST\_GROUP |  | InterestGroup |  |
| TARGET\_INTEREST\_GROUP\_TRAIT |  | InterestGroupTrait |  |
| TARGET\_INVASION |  | Invasion |  |
| TARGET\_JOURNAL\_ENTRY |  | JournalEntry |  |
| TARGET\_JOURNAL\_ENTRY\_GROUP |  | JournalEntryGroup |  |
| TARGET\_JOURNAL\_ENTRY\_TYPE |  | JournalEntryType |  |
| TARGET\_LAW |  | Law |  |
| TARGET\_LAW\_GROUP |  | LawGroup |  |
| TARGET\_LAW\_TYPE |  | LawType |  |
| TARGET\_LEGITIMACY\_LEVEL |  | LegitimacyLevel |  |
| TARGET\_LIBERTY\_DESIRE\_LEVEL |  | LibertyDesireLevel |  |
| TARGET\_MAP\_MODE |  | MapMode |  |
| TARGET\_MARKET |  | Market |  |
| TARGET\_MARKET\_GOODS |  | MarketGoods |  |
| TARGET\_MILITARY\_FORMATION |  | MilitaryFormation |  |
| TARGET\_MILITARY\_FORMATION\_FLAG |  | MilitaryFormationFlag |  |
| TARGET\_MOBILIZATION\_OPTION |  | MobilizationOption |  |
| TARGET\_MOBILIZATION\_OPTION\_GROUP |  | MobilizationOptionGroup |  |
| TARGET\_MODIFIER |  | Modifier |  |
| TARGET\_MODIFIER\_BREAKDOWN |  | ModifierBreakdown |  |
| TARGET\_OBJECTIVE |  | Objective |  |
| TARGET\_OBJECTIVE\_TYPE |  | ObjectiveType |  |
| TARGET\_PARTY |  | Party |  |
| TARGET\_PLAYER |  | Player |  |
| TARGET\_POLITICAL\_LOBBY |  | PoliticalLobby |  |
| TARGET\_POLITICAL\_LOBBY\_APPEASEMENT\_FACTOR |  | PoliticalLobbyAppeasementFactor |  |
| TARGET\_POLITICAL\_LOBBY\_TYPE |  | PoliticalLobbyType |  |
| TARGET\_POLITICAL\_MOVEMENT |  | PoliticalMovement |  |
| TARGET\_POLITICAL\_MOVEMENT\_CATEGORY |  | PoliticalMovementCategory |  |
| TARGET\_POLITICAL\_MOVEMENT\_POP\_SUPPORT\_FACTOR |  | PoliticalMovementPopSupportFactor |  |
| TARGET\_POLITICAL\_MOVEMENT\_TYPE |  | PoliticalMovementType |  |
| TARGET\_POP |  | Pop |  |
| TARGET\_POP\_GOODS\_CONSUMPTION |  | PopConsumptionGoods |  |
| TARGET\_POP\_NEED |  | PopNeed |  |
| TARGET\_POP\_TYPE |  | PopType |  |
| TARGET\_POP\_WITH\_IG |  | PopWithIG |  |
| TARGET\_POWER\_BLOC |  | PowerBloc |  |
| TARGET\_POWER\_BLOC\_IDENTITY |  | PowerBlocIdentity |  |
| TARGET\_POWER\_BLOC\_MAP\_TEXTURE |  | PowerBlocMapTexture |  |
| TARGET\_POWER\_BLOC\_PRINCIPLE |  | PowerBlocPrinciple |  |
| TARGET\_POWER\_BLOC\_PRINCIPLE\_DATA |  | PowerBlocPrincipleData |  |
| TARGET\_POWER\_BLOC\_PRINCIPLE\_GROUP |  | PowerBlocPrincipleGroup |  |
| TARGET\_POWER\_BLOC\_STATUE |  | PowerBlocStatue |  |
| TARGET\_POWER\_BLOC\_STATUE\_ACCESSORY\_TYPE |  | PowerBlocStatueAccessoryType |  |
| TARGET\_POWER\_BLOC\_STATUE\_HERO\_TYPE |  | PowerBlocStatueHeroType |  |
| TARGET\_POWER\_BLOC\_STATUE\_PEDESTAL\_TYPE |  | PowerBlocStatuePedestalType |  |
| TARGET\_PRODUCTION\_METHOD |  | ProductionMethod |  |
| TARGET\_PRODUCTION\_METHOD\_GROUP |  | ProductionMethodGroup |  |
| TARGET\_PROPOSAL |  | Proposal |  |
| TARGET\_PROVINCE |  | Province |  |
| TARGET\_RELIGION |  | Religion |  |
| TARGET\_SCRIPTED\_BUTTON |  | ScriptedButton |  |
| TARGET\_SCRIPTED\_PROGRESS\_BAR |  | ScriptedProgressBar |  |
| TARGET\_SHIPPING\_LANE |  | ShippingLane |  |
| TARGET\_SOCIAL\_CLASS |  | SocialClass |  |
| TARGET\_SOCIAL\_HIERARCHY |  | SocialHierarchy |  |
| TARGET\_STATE |  | State |  |
| TARGET\_STATE\_GOODS |  | StateGoods |  |
| TARGET\_STATE\_REGION |  | StateRegion |  |
| TARGET\_STATE\_TRAIT |  | StateTrait |  |
| TARGET\_STRATEGIC\_REGION |  | StrategicRegion |  |
| TARGET\_SUBJECT\_TYPE |  | SubjectType |  |
| TARGET\_SWAY |  | Sway |  |
| TARGET\_SWAY\_OFFER |  | SwayOffer |  |
| TARGET\_SWAY\_OFFER\_TYPE |  | SwayOfferType |  |
| TARGET\_TECHNOLOGY |  | Technology |  |
| TARGET\_THEATER |  | Theater |  |
| TARGET\_THEME |  | Theme |  |
| TARGET\_TIMED\_MODIFIER |  | TimedModifier |  |
| TARGET\_TREATY |  | Treaty |  |
| TARGET\_TREATY\_ARTICLE |  | Article |  |
| TARGET\_TREATY\_ARTICLE\_TYPE |  | ArticleType |  |
| TARGET\_TYPE\_LABEL |  | Label |  |
| TARGET\_WAR |  | War |  |
| TARGET\_WAR\_GOAL |  | WarGoal |  |
| TARGET\_WAR\_GOAL\_DRAFT |  | WarGoalDraft |  |
| TARGET\_WAR\_GOAL\_TYPE |  | WarGoalType |  |
| TECHNOLOGY |  | Technology |  |
| THEATER |  | Theater |  |
| THEME |  | Theme |  |
| THIS |  | Scope |  |
| TIMED\_MODIFIER |  | TimedModifier |  |
| TREATY |  | Treaty |  |
| TREATY\_ARTICLE |  | Article |  |
| TREATY\_ARTICLE\_TYPE |  | ArticleType |  |
| TYPE\_LABEL |  | Label |  |
| TimeKeeper |  | TimeKeeper |  |
| WAR |  | War |  |
| WAR\_GOAL |  | WarGoal |  |
| WAR\_GOAL\_DRAFT |  | WarGoalDraft |  |
| WAR\_GOAL\_TYPE |  | WarGoalType |  |
| WarManager |  | WarManager |  |

List of Country promotes

| Promote | Arguments | Output | Description |
| AccessActiveLawFromGroup | 1. LawGroup | Law | Category: const |
| AccessCapital |  | State | Category: const |
| AccessCurrentlyResearchedTechnology |  | Technology | Category: const |
| AccessDefinition |  | CountryDefinition | Category: const |
| AccessFirstMarket |  | Market | Category: const |
| AccessGovernment |  | GovernmentType | Category: const |
| AccessHeaviestJournalEntry |  | JournalEntry | Category: const |
| AccessHeir |  | Character | Category: const |
| AccessLawBeingEnacted |  | Law | Category: const |
| AccessModifier |  | Modifier | Category: const |
| AccessOverlord |  | Country | Category: const |
| AccessPowerBloc |  | PowerBloc | Category: const |
| AccessRuler |  | Character | Category: const |
| AccessStateReligion |  | Religion | Category: const |
| AccessTopOverlord |  | Country | Category: const |
| CalcLibertyDesireLevel |  | LibertyDesireLevel |  |
| GetActiveLawFrom | 1. Unknown | Law | Category: nonconst |
| GetActiveLawFromGroup | 1. LawGroup | Law | Category: nonconst |
| GetAttitudeTowards | 1. Country | AIAttitude | Category: nonconst |
| GetCapital |  | State | Category: nonconst |
| GetCurrentlyResearchedTechnology |  | Technology | Category: nonconst |
| GetDefinition |  | CountryDefinition | Category: nonconst |
| GetDiplomaticAction | 1. Unknown 2. Unknown | DiplomaticAction | Category: nonconst |
| GetDiplomaticActionWithStates | 1. Unknown 2. Unknown 3. Unknown 4. Unknown | DiplomaticAction | Category: nonconst |
| GetElection |  | Election | Category: nonconst |
| GetFirstPrimaryCulture |  | Culture | Category: nonconst |
| GetFlag |  | CoatOfArms | Category: nonconst |
| GetFoodSecurity |  | FoodSecurity | Category: nonconst |
| GetGovernment |  | GovernmentType | Category: nonconst |
| GetGovernmentLegitimacyLevel |  | LegitimacyLevel | Category: nonconst |
| GetHeir |  | Character | Category: nonconst |
| GetInterestGroupOfType | 1. InterestGroup | InterestGroup | Category: nonconst |
| GetJournalEntry | 1. Unknown | JournalEntry | Category: nonconst |
| GetLawBeingEnacted |  | Law | Category: nonconst |
| GetLawBeingEnactedFromGroup | 1. Unknown | Law | Category: nonconst |
| GetMarket |  | Market | Category: nonconst |
| GetModifier |  | Modifier | Category: nonconst |
| GetMonopolyCountryOnBuildingType | 1. BuildingType | Country | Category: nonconst |
| GetNegotiatingInterestGroup |  | InterestGroup | Category: nonconst |
| GetObjective |  | Objective | Category: nonconst |
| GetOtherPowerBlocWithHighestLeverage | 1. Unknown | PowerBloc | Category: nonconst |
| GetOverlord |  | Country | Category: nonconst |
| GetOwningCompany |  | Company | Category: nonconst |
| GetPlayer |  | Player | Category: nonconst |
| GetPowerBloc |  | PowerBloc | Category: nonconst |
| GetPowerBlocWithHighestLeverage |  | PowerBloc | Category: nonconst |
| GetPreviousAttitudeTowards | 1. Country | AIAttitude | Category: nonconst |
| GetRankModifier |  | Modifier | Category: nonconst |
| GetRuler |  | Character | Category: nonconst |
| GetSampleLowerStrataPop |  | Pop | Category: nonconst |
| GetSampleLowerStrataPopForCulture | 1. Unknown | Pop | Category: nonconst |
| GetSampleMiddleStrataPop |  | Pop | Category: nonconst |
| GetSampleMiddleStrataPopForCulture | 1. Unknown | Pop | Category: nonconst |
| GetSampleUpperStrataPop |  | Pop | Category: nonconst |
| GetSampleUpperStrataPopForCulture | 1. Unknown | Pop | Category: nonconst |
| GetSelectedLaw |  | Law | Category: nonconst |
| GetSocialHierarchy |  | SocialHierarchy | Category: nonconst |
| GetSpecialSocialHierarchy |  | SocialHierarchy | Category: nonconst |
| GetStateReligion |  | Religion | Category: nonconst |
| GetSubjectPact |  | DiplomaticPact | Category: nonconst |
| GetSubjectType |  | SubjectType | Category: nonconst |
| GetTopOverlord |  | Country | Category: nonconst |
| MakeScope |  | Scope |  |

List of Scope promotes

| Promote | Arguments | Output | Description |
| AccessAmendment |  | Amendment | Category: const |
| AccessAmendmentType |  | AmendmentType | Category: const |
| AccessBattle |  | Battle | Category: const |
| AccessBuilding |  | Building | Category: const |
| AccessBuildingGroup |  | BuildingGroup | Category: const |
| AccessBuildingType |  | BuildingType | Category: const |
| AccessCanalType |  | CanalType | Category: const |
| AccessCharacter |  | Character | Category: const |
| AccessCivilWar |  | CivilWar | Category: const |
| AccessCombatUnit |  | CombatUnit | Category: const |
| AccessCombatUnitType |  | CombatUnitType | Category: const |
| AccessCommanderOrderType |  | CommanderOrderType | Category: const |
| AccessCompany |  | Company | Category: const |
| AccessCompanyType |  | CompanyType | Category: const |
| AccessCountry |  | Country | Category: const |
| AccessCountryCreation |  | CountryCreation | Category: const |
| AccessCountryDefinition |  | CountryDefinition | Category: const |
| AccessCountryFormation |  | CountryFormation | Category: const |
| AccessCulturalCommunity |  | CulturalCommunity | Category: const |
| AccessCulture |  | Culture | Category: const |
| AccessDecisionType |  | Decision | Category: const |
| AccessDecree |  | Decree | Category: const |
| AccessDiplomaticAction |  | DiplomaticAction | Category: const |
| AccessDiplomaticCatalyst |  | DiplomaticCatalyst | Category: const |
| AccessDiplomaticCatalystCategory |  | DiplomaticCatalystCategory | Category: const |
| AccessDiplomaticCatalystType |  | DiplomaticCatalystType | Category: const |
| AccessDiplomaticDemand |  | DiplomaticDemand | Category: const |
| AccessDiplomaticPact |  | DiplomaticPact | Category: const |
| AccessDiplomaticPlay |  | DiplomaticPlay | Category: const |
| AccessDiplomaticPlayType |  | DiplomaticPlayType | Category: const |
| AccessDiplomaticRelations |  | DiplomaticRelations | Category: const |
| AccessFront |  | Front | Category: const |
| AccessGeographicRegion |  | GeographicRegion | Category: const |
| AccessGoods |  | Goods | Category: const |
| AccessHQ |  | Hq | Category: const |
| AccessHarvestCondition |  | HarvestCondition | Category: const |
| AccessHarvestConditionArea |  | HarvestConditionArea | Category: const |
| AccessHarvestConditionType |  | HarvestConditionType | Category: const |
| AccessIdeology |  | Ideology | Category: const |
| AccessInstitution |  | Institution | Category: const |
| AccessInstitutionType |  | InstitutionType | Category: const |
| AccessInterest |  | Interest | Category: const |
| AccessInterestGroup |  | InterestGroup | Category: const |
| AccessInterestGroupTrait |  | InterestGroupTrait | Category: const |
| AccessInvasion |  | Invasion | Category: const |
| AccessJournalEntry |  | JournalEntry | Category: const |
| AccessLaw |  | Law | Category: const |
| AccessLawType |  | LawType | Category: const |
| AccessMarket |  | Market | Category: const |
| AccessMarketGoods |  | MarketGoods | Category: const |
| AccessMilitaryFormation |  | MilitaryFormation | Category: const |
| AccessMobilizationOption |  | MobilizationOption | Category: const |
| AccessObjective |  | Objective | Category: const |
| AccessParty |  | Party | Category: const |
| AccessPoliticalLobby |  | PoliticalLobby | Category: const |
| AccessPoliticalLobbyAppeasementFactor |  | PoliticalLobbyAppeasementFactor | Category: const |
| AccessPoliticalLobbyType |  | PoliticalLobbyType | Category: const |
| AccessPoliticalMovement |  | PoliticalMovement | Category: const |
| AccessPoliticalMovementCategory |  | PoliticalMovementCategory | Category: const |
| AccessPoliticalMovementType |  | PoliticalMovementType | Category: const |
| AccessPop |  | Pop | Category: const |
| AccessPopType |  | PopType | Category: const |
| AccessPowerBloc |  | PowerBloc | Category: const |
| AccessPowerBlocIdentity |  | PowerBlocIdentity | Category: const |
| AccessPowerBlocPrinciple |  | PowerBlocPrinciple | Category: const |
| AccessPowerBlocPrincipleGroup |  | PowerBlocPrincipleGroup | Category: const |
| AccessProvince |  | Province | Category: const |
| AccessReligion |  | Religion | Category: const |
| AccessShippingLane |  | ShippingLane | Category: const |
| AccessState |  | State | Category: const |
| AccessStateGoods |  | StateGoods | Category: const |
| AccessStateRegion |  | StateRegion | Category: const |
| AccessStateTrait |  | StateTrait | Category: const |
| AccessStrategicRegion |  | StrategicRegion | Category: const |
| AccessSway |  | Sway | Category: const |
| AccessTechnology |  | Technology | Category: const |
| AccessTheater |  | Theater | Category: const |
| AccessTreaty |  | Treaty | Category: const |
| AccessTreatyArticle |  | Article | Category: const |
| AccessWar |  | War | Category: const |
| AccessWarGoal |  | WarGoal | Category: const |
| AccessWarGoalType |  | WarGoalType | Category: const |
| GetAmendment |  | Amendment | Category: nonconst |
| GetAmendmentType |  | AmendmentType | Category: nonconst |
| GetBattle |  | Battle | Category: nonconst |
| GetBuilding |  | Building | Category: nonconst |
| GetBuildingGroup |  | BuildingGroup | Category: nonconst |
| GetBuildingType |  | BuildingType | Category: nonconst |
| GetCanalType |  | CanalType | Category: nonconst |
| GetCharacter |  | Character | Category: nonconst |
| GetCivilWar |  | CivilWar | Category: nonconst |
| GetCombatUnit |  | CombatUnit | Category: nonconst |
| GetCombatUnitType |  | CombatUnitType | Category: nonconst |
| GetCommanderOrderType |  | CommanderOrderType | Category: nonconst |
| GetCompany |  | Company | Category: nonconst |
| GetCompanyType |  | CompanyType | Category: nonconst |
| GetCountry |  | Country | Category: nonconst |
| GetCountryCreation |  | CountryCreation | Category: nonconst |
| GetCountryDefinition |  | CountryDefinition | Category: nonconst |
| GetCountryFormation |  | CountryFormation | Category: nonconst |
| GetCulturalCommunity |  | CulturalCommunity | Category: nonconst |
| GetCulture |  | Culture | Category: nonconst |
| GetDecisionType |  | Decision | Category: nonconst |
| GetDecree |  | Decree | Category: nonconst |
| GetDiplomaticAction |  | DiplomaticAction | Category: nonconst |
| GetDiplomaticCatalyst |  | DiplomaticCatalyst | Category: nonconst |
| GetDiplomaticCatalystCategory |  | DiplomaticCatalystCategory | Category: nonconst |
| GetDiplomaticCatalystType |  | DiplomaticCatalystType | Category: nonconst |
| GetDiplomaticDemand |  | DiplomaticDemand | Category: nonconst |
| GetDiplomaticPact |  | DiplomaticPact | Category: nonconst |
| GetDiplomaticPlay |  | DiplomaticPlay | Category: nonconst |
| GetDiplomaticPlayType |  | DiplomaticPlayType | Category: nonconst |
| GetDiplomaticRelations |  | DiplomaticRelations | Category: nonconst |
| GetFront |  | Front | Category: nonconst |
| GetGeographicRegion |  | GeographicRegion | Category: nonconst |
| GetGoods |  | Goods | Category: nonconst |
| GetHQ |  | Hq | Category: nonconst |
| GetHarvestCondition |  | HarvestCondition | Category: nonconst |
| GetHarvestConditionArea |  | HarvestConditionArea | Category: nonconst |
| GetHarvestConditionType |  | HarvestConditionType | Category: nonconst |
| GetIdeology |  | Ideology | Category: nonconst |
| GetInstitution |  | Institution | Category: nonconst |
| GetInstitutionType |  | InstitutionType | Category: nonconst |
| GetInterest |  | Interest | Category: nonconst |
| GetInterestGroup |  | InterestGroup | Category: nonconst |
| GetInterestGroupTrait |  | InterestGroupTrait | Category: nonconst |
| GetInvasion |  | Invasion | Category: nonconst |
| GetJournalEntry |  | JournalEntry | Category: nonconst |
| GetLaw |  | Law | Category: nonconst |
| GetLawType |  | LawType | Category: nonconst |
| GetMarket |  | Market | Category: nonconst |
| GetMarketGoods |  | MarketGoods | Category: nonconst |
| GetMilitaryFormation |  | MilitaryFormation | Category: nonconst |
| GetMobilizationOption |  | MobilizationOption | Category: nonconst |
| GetObjective |  | Objective | Category: nonconst |
| GetParty |  | Party | Category: nonconst |
| GetPoliticalLobby |  | PoliticalLobby | Category: nonconst |
| GetPoliticalLobbyAppeasementFactor |  | PoliticalLobbyAppeasementFactor | Category: nonconst |
| GetPoliticalLobbyType |  | PoliticalLobbyType | Category: nonconst |
| GetPoliticalMovement |  | PoliticalMovement | Category: nonconst |
| GetPoliticalMovementCategory |  | PoliticalMovementCategory | Category: nonconst |
| GetPoliticalMovementType |  | PoliticalMovementType | Category: nonconst |
| GetPop |  | Pop | Category: nonconst |
| GetPopType |  | PopType | Category: nonconst |
| GetPowerBloc |  | PowerBloc | Category: nonconst |
| GetPowerBlocIdentity |  | PowerBlocIdentity | Category: nonconst |
| GetPowerBlocPrinciple |  | PowerBlocPrinciple | Category: nonconst |
| GetPowerBlocPrincipleGroup |  | PowerBlocPrincipleGroup | Category: nonconst |
| GetProvince |  | Province | Category: nonconst |
| GetReligion |  | Religion | Category: nonconst |
| GetShippingLane |  | ShippingLane | Category: nonconst |
| GetState |  | State | Category: nonconst |
| GetStateGoods |  | StateGoods | Category: nonconst |
| GetStateRegion |  | StateRegion | Category: nonconst |
| GetStateTrait |  | StateTrait | Category: nonconst |
| GetStrategicRegion |  | StrategicRegion | Category: nonconst |
| GetSway |  | Sway | Category: nonconst |
| GetTechnology |  | Technology | Category: nonconst |
| GetTheater |  | Theater | Category: nonconst |
| GetTreaty |  | Treaty | Category: nonconst |
| GetTreatyArticle |  | Article | Category: nonconst |
| GetVariable | 1. Unknown | Scope | Category: nonconst |
| GetWar |  | War | Category: nonconst |
| GetWarGoal |  | WarGoal | Category: nonconst |
| GetWarGoalType |  | WarGoalType | Category: nonconst |
| Var | 1. CString | Scope |  |

List of TopScope promotes

| Promote | Arguments | Output | Description |
| AddList | 1. Unknown 2. Unknown | TopScope |  |
| AddScope | 1. Unknown 2. Unknown | TopScope |  |
| GetLocalVariable | 1. Unknown | Scope | Category: nonconst |
| GetRootScope |  | Scope | Category: nonconst |
| SetRoot | 1. Scope | TopScope |  |
| gsIG | 1. CString | InterestGroup |  |
| gsInterestGroup | 1. CString | InterestGroup |  |
| sB | 1. CString | Building |  |
| sBG | 1. CString | BuildingGroup |  |
| sBT | 1. CString | BuildingType |  |
| sBuilding | 1. CString | Building |  |
| sBuildingGroup | 1. CString | BuildingGroup |  |
| sBuildingType | 1. CString | BuildingType |  |
| sC | 1. CString | Country |  |
| sCF | 1. CString | CountryFormation |  |
| sCM | 1. CString | Company |  |
| sCMT | 1. CString | CompanyType |  |
| sCOT | 1. CString | CommanderOrderType |  |
| sCU | 1. CString | Culture |  |
| sCW | 1. CString | CivilWar |  |
| sCha | 1. CString | Character |  |
| sCharacter | 1. CString | Character |  |
| sCivilWar | 1. CString | CivilWar |  |
| sCommanderOrderType | 1. CString | CommanderOrderType |  |
| sCompany | 1. CString | Company |  |
| sCompanyType | 1. CString | CompanyType |  |
| sCountry | 1. CString | Country |  |
| sCountryFormation | 1. CString | CountryFormation |  |
| sCulture | 1. CString | Culture |  |
| sD | 1. CString | Decision |  |
| sDA | 1. CString | DiplomaticAction |  |
| sDC | 1. CString | DiplomaticCatalyst |  |
| sDCC | 1. CString | DiplomaticCatalystCategory |  |
| sDCT | 1. CString | DiplomaticCatalystType |  |
| sDD | 1. CString | DiplomaticDemand |  |
| sDP | 1. CString | DiplomaticPlay |  |
| sDPT | 1. CString | DiplomaticPlayType |  |
| sDR | 1. CString | DiplomaticRelations |  |
| sDecision | 1. CString | Decision |  |
| sDiplomaticAction | 1. CString | DiplomaticAction |  |
| sDiplomaticCatalyst | 1. CString | DiplomaticCatalyst |  |
| sDiplomaticCatalystCategory | 1. CString | DiplomaticCatalystCategory |  |
| sDiplomaticCatalystType | 1. CString | DiplomaticCatalystType |  |
| sDiplomaticDemand | 1. CString | DiplomaticDemand |  |
| sDiplomaticPact | 1. CString | DiplomaticPact |  |
| sDiplomaticPlay | 1. CString | DiplomaticPlay |  |
| sDiplomaticPlayType | 1. CString | DiplomaticPlayType |  |
| sDiplomaticRelations | 1. CString | DiplomaticRelations |  |
| sF | 1. CString | Front |  |
| sFront | 1. CString | Front |  |
| sG | 1. CString | Goods |  |
| sGoods | 1. CString | Goods |  |
| sHC | 1. CString | HarvestCondition |  |
| sHCA | 1. CString | HarvestConditionArea |  |
| sHCT | 1. CString | HarvestConditionType |  |
| sHQ | 1. CString | Hq |  |
| sHarvestCondition | 1. CString | HarvestCondition |  |
| sHarvestConditionArea | 1. CString | HarvestConditionArea |  |
| sHarvestConditionType | 1. CString | HarvestConditionType |  |
| sIGT | 1. CString | InterestGroupTrait |  |
| sIdeology | 1. CString | Ideology |  |
| sInstitution | 1. CString | Institution |  |
| sInstitutionType | 1. CString | InstitutionType |  |
| sInterestGroupTrait | 1. CString | InterestGroupTrait |  |
| sJE | 1. CString | JournalEntry |  |
| sJournalEntry | 1. CString | JournalEntry |  |
| sL | 1. CString | Law |  |
| sLaw | 1. CString | Law |  |
| sLawType | 1. CString | LawType |  |
| sMilitaryFormation | 1. CString | MilitaryFormation |  |
| sP | 1. CString | Party |  |
| sPB | 1. CString | PowerBloc |  |
| sPBI | 1. CString | PowerBlocIdentity |  |
| sPBP | 1. CString | PowerBlocPrinciple |  |
| sPL | 1. CString | PoliticalLobby |  |
| sPLA | 1. CString | PoliticalLobbyAppeasementFactor |  |
| sPLT | 1. CString | PoliticalLobbyType |  |
| sPM | 1. CString | PoliticalMovement |  |
| sPMC | 1. CString | PoliticalMovementCategory |  |
| sPMT | 1. CString | PoliticalMovementType |  |
| sPT | 1. CString | PopType |  |
| sPact | 1. CString | DiplomaticPact |  |
| sParty | 1. CString | Party |  |
| sPoliticalLobby | 1. CString | PoliticalLobby |  |
| sPoliticalLobbyAppeasement | 1. CString | PoliticalLobbyAppeasementFactor |  |
| sPoliticalLobbyType | 1. CString | PoliticalLobbyType |  |
| sPoliticalMovement | 1. CString | PoliticalMovement |  |
| sPoliticalMovementCategory | 1. CString | PoliticalMovementCategory |  |
| sPoliticalMovementType | 1. CString | PoliticalMovementType |  |
| sPop | 1. CString | Pop |  |
| sPopType | 1. CString | PopType |  |
| sPowerBloc | 1. CString | PowerBloc |  |
| sPowerBlocIdentity | 1. CString | PowerBlocIdentity |  |
| sPowerBlocPrinciple | 1. CString | PowerBlocPrinciple |  |
| sPowerBlocPrincipleGroup | 1. CString | PowerBlocPrincipleGroup |  |
| sProvince | 1. CString | Province |  |
| sReligion | 1. CString | Religion |  |
| sS | 1. CString | State |  |
| sSR | 1. CString | StrategicRegion |  |
| sSW | 1. CString | Sway |  |
| sState | 1. CString | State |  |
| sStateRegion | 1. CString | StateRegion |  |
| sStrategicRegion | 1. CString | StrategicRegion |  |
| sSway | 1. CString | Sway |  |
| sT | 1. CString | Technology |  |
| sTechnology | 1. CString | Technology |  |
| sTreaty | 1. CString | Treaty |  |
| sTreatyArticle | 1. CString | Article |  |
| sW | 1. CString | War |  |
| sWar | 1. CString | War |  |
| sWarGoal | 1. CString | WarGoal |  |
| sWarGoalType | 1. CString | WarGoalType |  |

### List of all GUI promotes
List of all promotes

| Type | Promote | Arguments | Output | Description |
| AIAttitude | GetFirstCountry |  | Country | Category: nonconst |
| AIAttitude | GetSecondCountry |  | Country | Category: nonconst |
| AcceptanceStatus | GetHigherStatus |  | AcceptanceStatus | Category: nonconst |
| AcceptanceStatus | GetLowerStatus |  | AcceptanceStatus | Category: nonconst |
| AcceptanceStatusSegment | GetStatus |  | AcceptanceStatus | Category: nonconst |
| AddWarGoalPanel | AccessCountry |  | Country | Category: const |
| AddWarGoalPanel | AccessDiplomaticPlay |  | DiplomaticPlay | Category: const |
| AddWarGoalPanel | GetCountry |  | Country | Category: nonconst |
| AddWarGoalPanel | GetDiplomaticPlay |  | DiplomaticPlay | Category: nonconst |
| AgitatorSlot | GetAgitator |  | Character | Category: nonconst |
| AlertSettingsItem | GetCurrentOption |  | AlertOptionItem | Category: nonconst |
| Amendment | GetAttachedLaw |  | Law | Category: nonconst |
| Amendment | GetParentLawType |  | LawType | Category: nonconst |
| Amendment | GetSponsor |  | InterestGroup | Category: nonconst |
| Amendment | GetType |  | AmendmentType | Category: nonconst |
| Amendment | MakeScope |  | Scope |  |
| AmendmentType | GetModifier |  | Modifier | Category: nonconst |
| AmendmentType | GetParentLawType |  | LawType | Category: nonconst |
| AmendmentType | GetSponsorModifier |  | Modifier | Category: nonconst |
| AmendmentType | MakeScope |  | Scope |  |
| Article | GetArticleType |  | ArticleType | Category: nonconst |
| Article | GetBuildingType |  | BuildingType | Category: nonconst |
| Article | GetCompany |  | Company | Category: nonconst |
| Article | GetCountry |  | Country | Category: nonconst |
| Article | GetFirstOrSourceCountry |  | Country | Category: nonconst |
| Article | GetGoods |  | Goods | Category: nonconst |
| Article | GetLaw |  | LawType | Category: nonconst |
| Article | GetMaintenancePayer |  | Country | Category: nonconst |
| Article | GetSecondOrTargetCountry |  | Country | Category: nonconst |
| Article | GetShippingLane |  | ShippingLane | Category: nonconst |
| Article | GetSourceCountry |  | Country | Category: nonconst |
| Article | GetState |  | State | Category: nonconst |
| Article | GetStrategicRegion |  | StrategicRegion | Category: nonconst |
| Article | GetTargetCountry |  | Country | Category: nonconst |
| Article | GetTreaty |  | Treaty | Category: nonconst |
| Article | MakeScope |  | Scope |  |
| ArticleDraft | GetArticleType |  | ArticleType | Category: nonconst |
| ArticleDraft | GetBuildingType |  | BuildingType | Category: nonconst |
| ArticleDraft | GetCompany |  | Company | Category: nonconst |
| ArticleDraft | GetCountry |  | Country | Category: nonconst |
| ArticleDraft | GetFirstOrSource |  | Country | Category: nonconst |
| ArticleDraft | GetGoods |  | Goods | Category: nonconst |
| ArticleDraft | GetLawType |  | LawType | Category: nonconst |
| ArticleDraft | GetMaintenancePayer |  | Country | Category: nonconst |
| ArticleDraft | GetSecondOrTarget |  | Country | Category: nonconst |
| ArticleDraft | GetState |  | State | Category: nonconst |
| ArticleDraft | GetStrategicRegion |  | StrategicRegion | Category: nonconst |
| Battle | AccessAttackerBattleParticipant |  | BattleParticipant | Category: const |
| Battle | AccessAttackerModifier |  | Modifier | Category: const |
| Battle | AccessDefenderBattleParticipant |  | BattleParticipant | Category: const |
| Battle | AccessDefenderModifier |  | Modifier | Category: const |
| Battle | AccessFront |  | Front | Category: const |
| Battle | GetAttacker |  | Country | Category: nonconst |
| Battle | GetAttackerCondition |  | BattleCondition | Category: nonconst |
| Battle | GetAttackerModifier |  | Modifier | Category: nonconst |
| Battle | GetAttackerSide |  | BattleSide | Category: nonconst |
| Battle | GetBattleUnitFormation | 1. MilitaryFormation | BattleMilitaryFormation | Category: nonconst |
| Battle | GetCapturingCountry |  | Country | Category: nonconst |
| Battle | GetDefender |  | Country | Category: nonconst |
| Battle | GetDefenderCondition |  | BattleCondition | Category: nonconst |
| Battle | GetDefenderModifier |  | Modifier | Category: nonconst |
| Battle | GetDefenderSide |  | BattleSide | Category: nonconst |
| Battle | GetFront |  | Front | Category: nonconst |
| Battle | GetInvasion |  | Invasion | Category: nonconst |
| Battle | GetLoosingProvincesCountry |  | Country | Category: nonconst |
| Battle | GetLoser |  | Country | Category: nonconst |
| Battle | GetProvince |  | Province | Category: nonconst |
| Battle | GetState |  | State | Category: nonconst |
| Battle | GetWinner |  | Country | Category: nonconst |
| Battle | MakeScope |  | Scope |  |
| BattleBuildingEntry | GetBuilding |  | Building | Category: nonconst |
| BattleMarker | GetBattle |  | Battle | Category: nonconst |
| BattlePanel | GetBattle |  | Battle | Category: nonconst |
| BattleParticipant | AccessCountry |  | Country | Category: const |
| BattleParticipant | GetCountry |  | Country | Category: nonconst |
| BattleParticipantsPanel | GetBattle |  | Battle | Category: nonconst |
| BattleSide | GetCommander |  | Character | Category: nonconst |
| BattleSide | GetCountry |  | Country | Category: nonconst |
| BattleSide | GetFormation |  | MilitaryFormation | Category: nonconst |
| BattleUnitType | GetCombatUnitType |  | CombatUnitType | Category: nonconst |
| BrushSettings | Amount |  | BrushFloat |  |
| BrushSettings | Hardness |  | BrushFloat |  |
| BrushSettings | PixelSnap |  | BrushBool |  |
| BrushSettings | Radius |  | BrushFloat |  |
| BrushSettingsDropdown | Settings |  | BrushSettings |  |
| BudgetPanel | GetMapModeList |  | MapModeList | Category: nonconst |
| Building | AccessModifier |  | Modifier | Category: const |
| Building | AccessOwnerPopsList |  | PopList | Category: const |
| Building | AccessPopsList |  | PopList | Category: const |
| Building | AccessProductionMethod | 1. ProductionMethodGroup | ProductionMethod | Category: const |
| Building | AccessState |  | State | Category: const |
| Building | AccessStateRegion |  | StateRegion | Category: const |
| Building | GetBuildingType |  | BuildingType | Category: nonconst |
| Building | GetCompany |  | Company | Category: nonconst |
| Building | GetDefaultOutputGoods |  | Goods | Category: nonconst |
| Building | GetHQ |  | Hq | Category: nonconst |
| Building | GetModifier |  | Modifier | Category: nonconst |
| Building | GetOwner |  | Country | Category: nonconst |
| Building | GetProducedModifiers |  | Modifier | Category: nonconst |
| Building | GetProductionMethodGroup | 1. Unknown | ProductionMethodGroup | Category: nonconst |
| Building | GetState |  | State | Category: nonconst |
| Building | GetStateRegion |  | StateRegion | Category: nonconst |
| Building | GetWorstGoodsShortage |  | Goods | Category: nonconst |
| Building | MakeScope |  | Scope |  |
| BuildingBrowserBuildingTypeItem | GetBuildingType |  | BuildingType | Category: nonconst |
| BuildingBrowserPanel | GetCountry |  | Country | Category: nonconst |
| BuildingBrowserPanel | GetMapModeList |  | MapModeList | Category: nonconst |
| BuildingDetailsPanel | AccessBuilding |  | Building | Category: const |
| BuildingDetailsPanel | AccessState |  | State | Category: const |
| BuildingDetailsPanel | GetBuilding |  | Building | Category: nonconst |
| BuildingDetailsPanel | GetState |  | State | Category: nonconst |
| BuildingGroup | MakeScope |  | Scope |  |
| BuildingMarker | AccessBuilding |  | Building | Category: const |
| BuildingMarker | GetBuilding |  | Building | Category: nonconst |
| BuildingOwnership | GetOwnedBuilding |  | Building | Category: nonconst |
| BuildingOwnership | GetOwnerBuilding |  | Building | Category: nonconst |
| BuildingOwnership | GetOwnerCountry |  | Country | Category: nonconst |
| BuildingPotentialMarker | AccessState |  | State | Category: const |
| BuildingPotentialMarker | GetBuildingType |  | BuildingType | Category: nonconst |
| BuildingPotentialMarker | GetState |  | State | Category: nonconst |
| BuildingProductionMethodsEntry | GetAllSameProductionMethod | 1. Unknown | ProductionMethod | Category: nonconst |
| BuildingProductionMethodsEntry | GetBuildingType |  | BuildingType | Category: nonconst |
| BuildingType | GetBuildingGroup |  | BuildingGroup | Category: nonconst |
| BuildingType | GetBuildingModifier |  | Modifier | Category: nonconst |
| BuildingType | GetCountryModifier |  | Modifier | Category: nonconst |
| BuildingType | GetMonopolyCompanyIn | 1. Unknown | Company | Category: nonconst |
| BuildingType | GetMonopolyCountryIn | 1. Country | Country | Category: nonconst |
| BuildingType | GetStateModifier |  | Modifier | Category: nonconst |
| BuildingType | MakeScope |  | Scope |  |
| CanalType | GetBuildingType |  | BuildingType | Category: nonconst |
| CanalType | GetStateRegion |  | StateRegion | Category: nonconst |
| CanalType | MakeScope |  | Scope |  |
| ChangeLawPanel | GetLawGroup |  | LawGroup | Category: nonconst |
| ChangeLawPanel | GetSelectedLaw |  | Law | Category: nonconst |
| ChangeProductionMethodMenuItem | AccessMethod |  | ProductionMethod | Category: const |
| ChangeProductionMethodMenuItem | GetProductionMethodGroup |  | ProductionMethodGroup | Category: nonconst |
| Character | AccessBattle |  | Battle | Category: const |
| Character | AccessCountry |  | Country | Category: const |
| Character | AccessCulture |  | Culture | Category: const |
| Character | AccessInterestGroup |  | InterestGroup | Category: const |
| Character | AccessReligion |  | Religion | Category: const |
| Character | GetAcceptanceStatus |  | AcceptanceStatus | Category: nonconst |
| Character | GetAcceptanceStatusIn | 1. Country | AcceptanceStatus | Category: nonconst |
| Character | GetAssignedState |  | State | Category: nonconst |
| Character | GetBattle |  | Battle | Category: nonconst |
| Character | GetCommanderRank |  | CommanderRank | Category: nonconst |
| Character | GetCountry |  | Country | Category: nonconst |
| Character | GetCulture |  | Culture | Category: nonconst |
| Character | GetFront |  | Front | Category: nonconst |
| Character | GetHomeCountry |  | Country | Category: nonconst |
| Character | GetHomeCountryDefinition |  | CountryDefinition | Category: nonconst |
| Character | GetIdeology |  | Ideology | Category: nonconst |
| Character | GetInteraction | 1. CharacterInteraction | CharacterInteraction | Category: nonconst |
| Character | GetInterestGroup |  | InterestGroup | Category: nonconst |
| Character | GetInvasion |  | Invasion | Category: nonconst |
| Character | GetMilitaryFormation |  | MilitaryFormation | Category: nonconst |
| Character | GetNextCommanderRank |  | CommanderRank | Category: nonconst |
| Character | GetNextOrderType |  | CommanderOrderType | Category: nonconst |
| Character | GetOrderType |  | CommanderOrderType | Category: nonconst |
| Character | GetPoliticalMovement |  | PoliticalMovement | Category: nonconst |
| Character | GetReligion |  | Religion | Category: nonconst |
| Character | MakeScope |  | Scope |  |
| Character | PredictMovementToJoin | 1. Country | PoliticalMovement |  |
| Character | PredictMovementTypeToStart | 1. Country | PoliticalMovementType |  |
| Chat | GetReceiver |  | Friend | Category: nonconst |
| ChatNotificationMessage | ChatMessage |  | ChatMessage |  |
| ChatTab | GetChat |  | Chat | Category: nonconst |
| CityMarker | GetCountry |  | Country | Category: nonconst |
| CityMarker | GetState |  | State | Category: nonconst |
| CivilWar | AccessOriginCountry |  | Country | Category: const |
| CivilWar | AccessPoliticalMovement |  | PoliticalMovement | Category: const |
| CivilWar | AccessUprisingCountry |  | Country | Category: const |
| CivilWar | GetLeadingInsurrectionaryIG |  | InterestGroup | Category: nonconst |
| CivilWar | GetOriginCountry |  | Country | Category: nonconst |
| CivilWar | GetPoliticalMovement |  | PoliticalMovement | Category: nonconst |
| CivilWar | GetUprisingCountry |  | Country | Category: nonconst |
| CivilWar | MakeScope |  | Scope |  |
| ColonyMarker | AccessState |  | State | Category: const |
| ColonyMarker | GetState |  | State | Category: nonconst |
| CombatUnit | GetBattle |  | Battle | Category: nonconst |
| CombatUnit | GetBuilding |  | Building | Category: nonconst |
| CombatUnit | GetCountry |  | Country | Category: nonconst |
| CombatUnit | GetCulture |  | Culture | Category: nonconst |
| CombatUnit | GetFront |  | Front | Category: nonconst |
| CombatUnit | GetMilitaryFormation |  | MilitaryFormation | Category: nonconst |
| CombatUnit | GetUnitType |  | CombatUnitType | Category: nonconst |
| CombatUnit | MakeScope |  | Scope |  |
| CombatUnitType | GetBattleModifier |  | Modifier | Category: nonconst |
| CombatUnitType | GetFormationModifier |  | Modifier | Category: nonconst |
| CombatUnitType | GetGroup |  | CombatUnitGroup | Category: nonconst |
| CombatUnitType | GetUpkeepModifier |  | Modifier | Category: nonconst |
| CombatUnitType | MakeScope |  | Scope |  |
| CommanderOrderType | GetModifier |  | Modifier | Category: nonconst |
| CommanderOrderType | MakeScope |  | Scope |  |
| CommanderPanel | AccessCharacter |  | Character | Category: const |
| CommanderPanel | GetCharacter |  | Character | Category: nonconst |
| Company | AccessCompanyType |  | CompanyType | Category: const |
| Company | AccessExecutive |  | Character | Category: const |
| Company | GetBuilding |  | Building | Category: nonconst |
| Company | GetCompanyType |  | CompanyType | Category: nonconst |
| Company | GetCountry |  | Country | Category: nonconst |
| Company | GetEstablishmentDate |  | Date | Category: nonconst |
| Company | GetExecutive |  | Character | Category: nonconst |
| Company | GetState |  | State | Category: nonconst |
| Company | MakeScope |  | Scope |  |
| CompanyChangeNamePopup | GetCompany |  | Company | Category: nonconst |
| CompanyCharter | GetBuildingType |  | BuildingType | Category: nonconst |
| CompanyCharter | GetStateRegion |  | StateRegion | Category: nonconst |
| CompanyCharter | GetType |  | CompanyCharterType | Category: nonconst |
| CompanyPanel | GetCompany |  | Company | Category: nonconst |
| CompanyType | GetPotentialState |  | State | Category: nonconst |
| CompanyType | GetProsperityModifier |  | Modifier | Category: nonconst |
| CompanyType | MakeScope |  | Scope |  |
| ConstructionPanel | GetCountry |  | Country | Category: nonconst |
| ConstructionQueueElement | AccessBuilding |  | Building | Category: const |
| ConstructionQueueElement | AccessState |  | State | Category: const |
| ConstructionQueueElement | GetBuilding |  | Building | Category: nonconst |
| ConstructionQueueElement | GetInvestorBuilding |  | Building | Category: nonconst |
| ConstructionQueueElement | GetInvestorBuildingType |  | BuildingType | Category: nonconst |
| ConstructionQueueElement | GetInvestorCountry |  | Country | Category: nonconst |
| ConstructionQueueElement | GetInvestorState |  | State | Category: nonconst |
| ConstructionQueueElement | GetState |  | State | Category: nonconst |
| ContextualDiplomaticActionType | AccessCountry |  | Country | Category: const |
| ContextualDiplomaticActionType | GetCountry |  | Country | Category: nonconst |
| ContextualDiplomaticActionType | GetDiplomaticActionType |  | DiplomaticActionType | Category: nonconst |
| ContextualDiplomaticPact | AccessDiplomaticPact |  | DiplomaticPact | Category: const |
| ContextualDiplomaticPact | GetContextCountry |  | Country | Category: nonconst |
| ContextualDiplomaticPact | GetDiplomaticActionType |  | DiplomaticActionType | Category: nonconst |
| ContextualDiplomaticPact | GetDiplomaticPact |  | DiplomaticPact | Category: nonconst |
| ContextualDiplomaticPact | GetOtherCountry |  | Country | Category: nonconst |
| Country | AccessActiveLawFromGroup | 1. LawGroup | Law | Category: const |
| Country | AccessCapital |  | State | Category: const |
| Country | AccessCurrentlyResearchedTechnology |  | Technology | Category: const |
| Country | AccessDefinition |  | CountryDefinition | Category: const |
| Country | AccessFirstMarket |  | Market | Category: const |
| Country | AccessGovernment |  | GovernmentType | Category: const |
| Country | AccessHeaviestJournalEntry |  | JournalEntry | Category: const |
| Country | AccessHeir |  | Character | Category: const |
| Country | AccessLawBeingEnacted |  | Law | Category: const |
| Country | AccessModifier |  | Modifier | Category: const |
| Country | AccessOverlord |  | Country | Category: const |
| Country | AccessPowerBloc |  | PowerBloc | Category: const |
| Country | AccessRuler |  | Character | Category: const |
| Country | AccessStateReligion |  | Religion | Category: const |
| Country | AccessTopOverlord |  | Country | Category: const |
| Country | CalcLibertyDesireLevel |  | LibertyDesireLevel |  |
| Country | GetActiveLawFrom | 1. Unknown | Law | Category: nonconst |
| Country | GetActiveLawFromGroup | 1. LawGroup | Law | Category: nonconst |
| Country | GetAttitudeTowards | 1. Country | AIAttitude | Category: nonconst |
| Country | GetCapital |  | State | Category: nonconst |
| Country | GetCurrentlyResearchedTechnology |  | Technology | Category: nonconst |
| Country | GetDefinition |  | CountryDefinition | Category: nonconst |
| Country | GetDiplomaticAction | 1. Unknown 2. Unknown | DiplomaticAction | Category: nonconst |
| Country | GetDiplomaticActionWithStates | 1. Unknown 2. Unknown 3. Unknown 4. Unknown | DiplomaticAction | Category: nonconst |
| Country | GetElection |  | Election | Category: nonconst |
| Country | GetFirstPrimaryCulture |  | Culture | Category: nonconst |
| Country | GetFlag |  | CoatOfArms | Category: nonconst |
| Country | GetFoodSecurity |  | FoodSecurity | Category: nonconst |
| Country | GetGovernment |  | GovernmentType | Category: nonconst |
| Country | GetGovernmentLegitimacyLevel |  | LegitimacyLevel | Category: nonconst |
| Country | GetHeir |  | Character | Category: nonconst |
| Country | GetInterestGroupOfType | 1. InterestGroup | InterestGroup | Category: nonconst |
| Country | GetJournalEntry | 1. Unknown | JournalEntry | Category: nonconst |
| Country | GetLawBeingEnacted |  | Law | Category: nonconst |
| Country | GetLawBeingEnactedFromGroup | 1. Unknown | Law | Category: nonconst |
| Country | GetMarket |  | Market | Category: nonconst |
| Country | GetModifier |  | Modifier | Category: nonconst |
| Country | GetMonopolyCountryOnBuildingType | 1. BuildingType | Country | Category: nonconst |
| Country | GetNegotiatingInterestGroup |  | InterestGroup | Category: nonconst |
| Country | GetObjective |  | Objective | Category: nonconst |
| Country | GetOtherPowerBlocWithHighestLeverage | 1. Unknown | PowerBloc | Category: nonconst |
| Country | GetOverlord |  | Country | Category: nonconst |
| Country | GetOwningCompany |  | Company | Category: nonconst |
| Country | GetPlayer |  | Player | Category: nonconst |
| Country | GetPowerBloc |  | PowerBloc | Category: nonconst |
| Country | GetPowerBlocWithHighestLeverage |  | PowerBloc | Category: nonconst |
| Country | GetPreviousAttitudeTowards | 1. Country | AIAttitude | Category: nonconst |
| Country | GetRankModifier |  | Modifier | Category: nonconst |
| Country | GetRuler |  | Character | Category: nonconst |
| Country | GetSampleLowerStrataPop |  | Pop | Category: nonconst |
| Country | GetSampleLowerStrataPopForCulture | 1. Unknown | Pop | Category: nonconst |
| Country | GetSampleMiddleStrataPop |  | Pop | Category: nonconst |
| Country | GetSampleMiddleStrataPopForCulture | 1. Unknown | Pop | Category: nonconst |
| Country | GetSampleUpperStrataPop |  | Pop | Category: nonconst |
| Country | GetSampleUpperStrataPopForCulture | 1. Unknown | Pop | Category: nonconst |
| Country | GetSelectedLaw |  | Law | Category: nonconst |
| Country | GetSocialHierarchy |  | SocialHierarchy | Category: nonconst |
| Country | GetSpecialSocialHierarchy |  | SocialHierarchy | Category: nonconst |
| Country | GetStateReligion |  | Religion | Category: nonconst |
| Country | GetSubjectPact |  | DiplomaticPact | Category: nonconst |
| Country | GetSubjectType |  | SubjectType | Category: nonconst |
| Country | GetTopOverlord |  | Country | Category: nonconst |
| Country | MakeScope |  | Scope |  |
| CountryCreation | GetCapital |  | StateRegion | Category: nonconst |
| CountryCreation | GetDefinition |  | CountryDefinition | Category: nonconst |
| CountryCreation | MakeScope |  | Scope |  |
| CountryDefinition | GetBaseFlag |  | CoatOfArms | Category: nonconst |
| CountryDefinition | GetFlag | 1. CString | CoatOfArms | Category: nonconst |
| CountryDefinition | GetPrimaryCulture |  | Culture | Category: nonconst |
| CountryDefinition | MakeScope |  | Scope |  |
| CountryFormation | GetDefinition |  | CountryDefinition | Category: nonconst |
| CountryFormation | GetSupportedCandidateCountry | 1. Country | Country | Category: nonconst |
| CountryFormation | MakeScope |  | Scope |  |
| CountryFormationPanel | AccessCountryFormation |  | CountryFormation | Category: const |
| CountryFormationPanel | GetCountryFormation |  | CountryFormation | Category: nonconst |
| CountryMarker | GetCountry |  | Country | Category: nonconst |
| CountryPanel | GetCountry |  | Country | Category: nonconst |
| CountryPanel | GetMapModeList |  | MapModeList | Category: nonconst |
| CountryTrendPair | GetCountry |  | Country | Category: nonconst |
| CulturalCommunity | GetCulture |  | Culture | Category: nonconst |
| CulturalCommunity | GetState |  | State | Category: nonconst |
| CulturalCommunity | MakeScope |  | Scope |  |
| Culture | AccessReligion |  | Religion | Category: const |
| Culture | GetHeritageTrait |  | DiscriminationTrait | Category: nonconst |
| Culture | GetLanguageTrait |  | DiscriminationTrait | Category: nonconst |
| Culture | GetReligion |  | Religion | Category: nonconst |
| Culture | GetSampleGlobalLowerStrataPop |  | Pop | Category: nonconst |
| Culture | GetSampleGlobalMiddleStrataPop |  | Pop | Category: nonconst |
| Culture | GetSampleGlobalUpperStrataPop |  | Pop | Category: nonconst |
| Culture | MakeScope |  | Scope |  |
| CultureCasualtyStatistics | GetCulture |  | Culture | Category: nonconst |
| CultureInfoPanel | AccessCulture |  | Culture | Category: const |
| CultureInfoPanel | AccessPopsList |  | PopList | Category: const |
| CultureInfoPanel | GetCulture |  | Culture | Category: nonconst |
| Decision | MakeScope |  | Scope |  |
| Decree | GetCountry |  | Country | Category: nonconst |
| Decree | GetModifier |  | Modifier | Category: nonconst |
| Decree | GetState |  | State | Category: nonconst |
| Decree | GetType |  | DecreeType | Category: nonconst |
| Decree | MakeScope |  | Scope |  |
| DecreeMarker | AccessDecree |  | Decree | Category: const |
| DecreeMarker | GetDecree |  | Decree | Category: nonconst |
| DecreeType | GetModifier |  | Modifier | Category: nonconst |
| DiplomaticAction | AccessFirstCountry |  | Country | Category: const |
| DiplomaticAction | AccessFirstState |  | State | Category: const |
| DiplomaticAction | AccessSecondCountry |  | Country | Category: const |
| DiplomaticAction | AccessSecondState |  | State | Category: const |
| DiplomaticAction | GetFirstCountry |  | Country | Category: nonconst |
| DiplomaticAction | GetFirstState |  | State | Category: nonconst |
| DiplomaticAction | GetSecondCountry |  | Country | Category: nonconst |
| DiplomaticAction | GetSecondState |  | State | Category: nonconst |
| DiplomaticAction | GetType |  | DiplomaticActionType | Category: nonconst |
| DiplomaticAction | MakeScope |  | Scope |  |
| DiplomaticActionType | GetFirstModifier |  | Modifier | Category: nonconst |
| DiplomaticActionType | GetModifyPactActionType |  | DiplomaticActionType | Category: nonconst |
| DiplomaticActionType | GetSecondModifier |  | Modifier | Category: nonconst |
| DiplomaticActionWindow | AccessDiplomaticAction |  | DiplomaticAction | Category: const |
| DiplomaticActionWindow | AccessFirstState |  | State | Category: const |
| DiplomaticActionWindow | AccessSecondState |  | State | Category: const |
| DiplomaticActionWindow | AccessStateSelectionTarget |  | Country | Category: const |
| DiplomaticActionWindow | GetDiplomaticAction |  | DiplomaticAction | Category: nonconst |
| DiplomaticActionWindow | GetFirstState |  | State | Category: nonconst |
| DiplomaticActionWindow | GetSecondState |  | State | Category: nonconst |
| DiplomaticActionWindow | GetStateSelectionTarget |  | Country | Category: nonconst |
| DiplomaticCatalyst | AccessDiplomaticCatalystType |  | DiplomaticCatalystType | Category: const |
| DiplomaticCatalyst | GetCountry |  | Country | Category: nonconst |
| DiplomaticCatalyst | GetDiplomaticCatalystType |  | DiplomaticCatalystType | Category: nonconst |
| DiplomaticCatalyst | GetOccuranceDate |  | Date | Category: nonconst |
| DiplomaticCatalyst | GetTargetCountry |  | Country | Category: nonconst |
| DiplomaticCatalyst | MakeScope |  | Scope |  |
| DiplomaticCatalystCategory | MakeScope |  | Scope |  |
| DiplomaticCatalystType | GetCategory |  | DiplomaticCatalystCategory | Category: nonconst |
| DiplomaticCatalystType | MakeScope |  | Scope |  |
| DiplomaticDemand | GetDemandedWarGoal |  | WarGoalDraft | Category: nonconst |
| DiplomaticDemand | GetDiplomaticPlayType |  | DiplomaticPlayType | Category: nonconst |
| DiplomaticDemand | GetSender |  | Country | Category: nonconst |
| DiplomaticDemand | GetTarget |  | Country | Category: nonconst |
| DiplomaticDemand | MakeScope |  | Scope |  |
| DiplomaticOverviewPanel | GetMapModeList |  | MapModeList | Category: nonconst |
| DiplomaticPact | GetDiplomaticAction |  | DiplomaticAction | Category: nonconst |
| DiplomaticPact | GetDiplomaticActionType |  | DiplomaticActionType | Category: nonconst |
| DiplomaticPact | GetFirstCountry |  | Country | Category: nonconst |
| DiplomaticPact | GetSecondCountry |  | Country | Category: nonconst |
| DiplomaticPact | MakeScope |  | Scope |  |
| DiplomaticPlay | AccessInitiator |  | Country | Category: const |
| DiplomaticPlay | AccessTarget |  | Country | Category: const |
| DiplomaticPlay | AccessWar |  | War | Category: const |
| DiplomaticPlay | GetAcceptedSway | 1. Country | Sway | Category: nonconst |
| DiplomaticPlay | GetDiplomaticPlayType |  | DiplomaticPlayType | Category: nonconst |
| DiplomaticPlay | GetIncomingSway | 1. Country 2. Country | Sway | Category: nonconst |
| DiplomaticPlay | GetIncomingSwayByTargetAndSwayer | 1. Unknown 2. Unknown | Sway | Category: nonconst |
| DiplomaticPlay | GetInitiator |  | Country | Category: nonconst |
| DiplomaticPlay | GetInterestMarker | 1. Country | Interest | Category: nonconst |
| DiplomaticPlay | GetOutgoingSway | 1. Unknown 2. Unknown | Sway | Category: nonconst |
| DiplomaticPlay | GetStrategicRegion |  | StrategicRegion | Category: nonconst |
| DiplomaticPlay | GetTarget |  | Country | Category: nonconst |
| DiplomaticPlay | GetWar |  | War | Category: nonconst |
| DiplomaticPlay | MakeScope |  | Scope |  |
| DiplomaticPlayConfirmation | GetCountryDefinition |  | CountryDefinition | Category: nonconst |
| DiplomaticPlayConfirmation | GetInitiatorCountry |  | Country | Category: nonconst |
| DiplomaticPlayConfirmation | GetTargetCountry |  | Country | Category: nonconst |
| DiplomaticPlayConfirmation | GetTargetState |  | State | Category: nonconst |
| DiplomaticPlayConfirmation | GetType |  | DiplomaticPlayType | Category: nonconst |
| DiplomaticPlayPanel | AccessDiplomaticPlay |  | DiplomaticPlay | Category: const |
| DiplomaticPlayPanel | GetDiplomaticPlay |  | DiplomaticPlay | Category: nonconst |
| DiplomaticPlayType | GetWarGoalType |  | WarGoalType | Category: nonconst |
| DiplomaticPlayType | MakeScope |  | Scope |  |
| DiplomaticRelations | GetCountryWhichNotOwesObligation |  | Country | Category: nonconst |
| DiplomaticRelations | GetCountryWhichOwesObligation |  | Country | Category: nonconst |
| DiplomaticRelations | GetFirstCountry |  | Country | Category: nonconst |
| DiplomaticRelations | GetSecondCountry |  | Country | Category: nonconst |
| DiplomaticRelations | MakeScope |  | Scope |  |
| DiscriminationTrait | GetTraitGroup |  | DiscriminationTraitGroup | Category: nonconst |
| DockableLayoutManager | AccessActiveLayout |  | DockableLayout | Category: const |
| DockableLayoutManager | AccessLayoutSearchList |  | ToolPropertySearchList | Category: const |
| DockableLayoutManager | AccessSelectedLayout |  | DockableLayout | Category: const |
| EditorSettingsWindow | AccessActivePage |  | EditorSettingsPage | Category: const |
| Election | GetCountry |  | Country | Category: nonconst |
| ElectionPanel | GetElection |  | Election | Category: nonconst |
| EmployeeTransfer | GetNewEmployment |  | BuildingType | Category: nonconst |
| EmployeeTransfer | GetNewPopType |  | PopType | Category: nonconst |
| EmployeeTransfer | GetOldEmployment |  | BuildingType | Category: nonconst |
| EmployeeTransfer | GetOldPopType |  | PopType | Category: nonconst |
| Encyclopedia | AccessCurrentPage |  | EncyclopediaPage | Category: const |
| Encyclopedia | GetAllPage |  | EncyclopediaPage | Category: nonconst |
| Encyclopedia | GetCurrentPage |  | EncyclopediaPage | Category: nonconst |
| EncyclopediaEntryView | Get |  | EncyclopediaEntry |  |
| EntityEditor | Entity |  | ViewerEntity |  |
| Event | AccessState |  | State | Category: const |
| Event | GetIcon | 1. CString | EventIcon | Category: nonconst |
| Event | GetState |  | State | Category: nonconst |
| Event | GetTopScope |  | TopScope | Category: nonconst |
| EventIcon | GetCharacter |  | Character | Category: nonconst |
| EventIcon | GetCountry |  | Country | Category: nonconst |
| EventMarker | AccessAnyEvent |  | Event | Category: const |
| EventMarker | GetAnyEvent |  | Event | Category: nonconst |
| EventTargetSetupContext | AccessVariableLists |  | VariableListStore | Category: const |
| EventTargetSetupContext | AccessVariables |  | VariableStore | Category: const |
| EventWindow | AccessEvent |  | Event | Category: const |
| EventWindow | GetEvent |  | Event | Category: nonconst |
| EyeDropper | GetHoverSample |  | MaterialsSample | Category: nonconst |
| EyeDropperPackedSample | GetSample |  | MaterialEntry | Category: nonconst |
| FeedMessageItem | GetPlayerMessageItem |  | PlayerMessageItem | Category: nonconst |
| FeedMessageItem | GetTimeoutTimer |  | PieTimer | Category: nonconst |
| FoodSecurityFilter | GetFoodSecurity |  | FoodSecurity | Category: nonconst |
| FoodSecurityFilter | GetFoodSecurityCountryOrMarket |  | FoodSecurity | Category: nonconst |
| FoodSecurityFilter | GetMarket |  | Market | Category: nonconst |
| FoodSecurityFilter | GetSelectedCountry |  | Country | Category: nonconst |
| FoodSecurityFilter | GetSelectedState |  | State | Category: nonconst |
| FormationMarker | GetFirstMilitaryFormation |  | MilitaryFormation | Category: nonconst |
| FormationPanel | GetFormation |  | MilitaryFormation | Category: nonconst |
| Front | AccessDiplomaticPlay |  | DiplomaticPlay | Category: const |
| Front | GetInitiatorSide |  | FrontSide | Category: nonconst |
| Front | GetLeftSide |  | FrontSide | Category: nonconst |
| Front | GetPlayerEnemySide |  | FrontSide | Category: nonconst |
| Front | GetPlayerSide |  | FrontSide | Category: nonconst |
| Front | GetRightSide |  | FrontSide | Category: nonconst |
| Front | GetTargetSide |  | FrontSide | Category: nonconst |
| Front | MakeScope |  | Scope |  |
| FrontEndLoadView | GetContinueSave |  | SaveGameItem | Category: nonconst |
| FrontEndLoadView | GetSelectedSavegame |  | SaveGameItem | Category: nonconst |
| FrontEndMainView | AccessLoadView |  | FrontEndLoadView | Category: const |
| FrontMarker | GetFront |  | Front | Category: nonconst |
| FrontMovementMarker | AccessFront |  | Front | Category: const |
| FrontMovementMarker | GetFront |  | Front | Category: nonconst |
| FrontPanel | AccessFront |  | Front | Category: const |
| FrontPanel | GetFront |  | Front | Category: nonconst |
| FrontSide | GetCountry |  | Country | Category: nonconst |
| FrontSide | GetFront |  | Front | Category: nonconst |
| GUIAchievement | GetAchievement |  | Achievement | Category: nonconst |
| GameMpSetup | GetSelectedSaveGame |  | SaveGameItem | Category: nonconst |
| GameRuleSetting | GetGameRule |  | GameRule | Category: nonconst |
| GameSetup | GetSelectedObjective |  | ObjectiveType | Category: nonconst |
| GameSetup | GetSelectedTag |  | CountryDefinition | Category: nonconst |
| GeographicRegion | MakeScope |  | Scope |  |
| Goods | AccessMarket |  | Market | Category: const |
| Goods | AccessState |  | State | Category: const |
| Goods | GetBaseGoods |  | Goods | Category: nonconst |
| Goods | GetMarket |  | Market | Category: nonconst |
| Goods | GetMarketWithLargestExportShare |  | Market | Category: nonconst |
| Goods | GetMarketWithLargestImportShare |  | Market | Category: nonconst |
| Goods | GetState |  | State | Category: nonconst |
| Goods | MakeScope |  | Scope |  |
| Goods | WithMarketContext | 1. Market | Goods |  |
| Goods | WithStateContext | 1. State | Goods |  |
| GoodsExpenseItem | GetGoods |  | Goods | Category: nonconst |
| GoodsList | GetState |  | State | Category: nonconst |
| GoodsLocalPricesPanel | AccessGoods |  | Goods | Category: const |
| GoodsLocalPricesPanel | GetGoods |  | Goods | Category: nonconst |
| GoodsPanel | GetGoods |  | Goods | Category: nonconst |
| GoodsPanel | GetMapModeList |  | MapModeList | Category: nonconst |
| GoodsPanel | GetMarketGoods |  | MarketGoods | Category: nonconst |
| GoodsPanelValue | GetBuilding |  | Building | Category: nonconst |
| GoodsPanelValue | GetBuildingType |  | BuildingType | Category: nonconst |
| GoodsPanelValue | GetMarket |  | Market | Category: nonconst |
| GoodsPanelValue | GetState |  | State | Category: nonconst |
| GoodsProductionInfo | AccessGoods |  | Goods | Category: const |
| GoodsStatePanel | GetGoods |  | Goods | Category: nonconst |
| GoodsStatePanel | GetMapModeList |  | MapModeList | Category: nonconst |
| GoodsUsagePanel | AccessGoods |  | Goods | Category: const |
| GoodsUsagePanel | GetGoods |  | Goods | Category: nonconst |
| GoodsWorldMarketPanel | GetBaseGoods |  | Goods | Category: nonconst |
| GoodsWorldMarketPanel | GetGoods |  | Goods | Category: nonconst |
| GoodsWorldMarketPanel | GetMapModeList |  | MapModeList | Category: nonconst |
| GraphPanel | AccessAnimationEditorSearch |  | NodeEditorSearch | Category: const |
| GraphPanel | AccessMetadataWindow |  | MetadataWindow | Category: const |
| GraphPanel | GetMetadataWindow |  | MetadataWindow | Category: nonconst |
| GuiGameRule | GetRule |  | GameRule | Category: nonconst |
| GuiGameRule | GetSetting |  | GameRuleSetting | Category: nonconst |
| GuiGameRulePreset | GetSettingForRule | 1. Unknown | GameRuleSetting | Category: nonconst |
| HQMarker | GetHQ |  | Hq | Category: nonconst |
| HQMovementMarker | GetHQ |  | Hq | Category: nonconst |
| HarvestCondition | GetArea |  | HarvestConditionArea | Category: nonconst |
| HarvestCondition | GetState |  | State | Category: nonconst |
| HarvestCondition | GetType |  | HarvestConditionType | Category: nonconst |
| HarvestCondition | MakeScope |  | Scope |  |
| HarvestConditionArea | GetEpicenter |  | HarvestCondition | Category: nonconst |
| HarvestConditionArea | GetEpicenterRegion |  | StateRegion | Category: nonconst |
| HarvestConditionArea | GetType |  | HarvestConditionType | Category: nonconst |
| HarvestConditionArea | MakeScope |  | Scope |  |
| HarvestConditionType | MakeScope |  | Scope |  |
| HomelandMarker | GetCulture |  | Culture | Category: nonconst |
| HomelandMarker | GetState |  | State | Category: nonconst |
| Hq | GetCountry |  | Country | Category: nonconst |
| Hq | GetStrategicRegion |  | StrategicRegion | Category: nonconst |
| Hq | MakeScope |  | Scope |  |
| Ideology | MakeScope |  | Scope |  |
| ImportantAlert | GetAlert |  | Alert | Category: nonconst |
| Institution | AccessModifier |  | Modifier | Category: const |
| Institution | GetCountry |  | Country | Category: nonconst |
| Institution | GetModifier |  | Modifier | Category: nonconst |
| Institution | MakeScope |  | Scope |  |
| InstitutionType | GetModifier |  | Modifier | Category: nonconst |
| InstitutionType | MakeScope |  | Scope |  |
| Interest | GetOwner |  | Country | Category: nonconst |
| Interest | GetStrategicRegion |  | StrategicRegion | Category: nonconst |
| Interest | MakeScope |  | Scope |  |
| InterestGroup | AccessCountry |  | Country | Category: const |
| InterestGroup | AccessLeader |  | Character | Category: const |
| InterestGroup | AccessModifier |  | Modifier | Category: const |
| InterestGroup | GetCountry |  | Country | Category: nonconst |
| InterestGroup | GetLeader |  | Character | Category: nonconst |
| InterestGroup | GetLeaderIdeology |  | Ideology | Category: nonconst |
| InterestGroup | GetModifier |  | Modifier | Category: nonconst |
| InterestGroup | GetParty |  | Party | Category: nonconst |
| InterestGroup | GetPartyAffiliationHighest |  | Party | Category: nonconst |
| InterestGroup | GetPopWithIG | 1. Pop | PopWithIG | Category: nonconst |
| InterestGroup | MakeScope |  | Scope |  |
| InterestGroupAndTraitPair | AccessInterestGroup |  | InterestGroup | Category: const |
| InterestGroupAndTraitPair | GetInterestGroup |  | InterestGroup | Category: nonconst |
| InterestGroupAndTraitPair | GetTrait |  | InterestGroupTrait | Category: nonconst |
| InterestGroupMarker | AccessInterestGroup |  | InterestGroup | Category: const |
| InterestGroupMarker | GetInterestGroup |  | InterestGroup | Category: nonconst |
| InterestGroupPanel | AccessInterestGroup |  | InterestGroup | Category: const |
| InterestGroupPanel | AccessPopsList |  | PopList | Category: const |
| InterestGroupPanel | GetInterestGroup |  | InterestGroup | Category: nonconst |
| InterestGroupTrait | MakeScope |  | Scope |  |
| InterestingCountryItem | GetCountry |  | Country | Category: nonconst |
| InterestingCountryItem | GetSetting |  | InterestingCountrySetting | Category: nonconst |
| Invasion | GetArmy |  | MilitaryFormation | Category: nonconst |
| Invasion | GetDefenderHQ |  | Hq | Category: nonconst |
| Invasion | GetEnemyState |  | State | Category: nonconst |
| Invasion | GetFleet |  | MilitaryFormation | Category: nonconst |
| Invasion | GetFront |  | Front | Category: nonconst |
| Invasion | GetInvadedCountry |  | Country | Category: nonconst |
| Invasion | GetInvaderCountry |  | Country | Category: nonconst |
| Invasion | GetSeaNode |  | Province | Category: nonconst |
| Invasion | GetSourceState |  | State | Category: nonconst |
| Invasion | GetTargetState |  | State | Category: nonconst |
| Invasion | MakeScope |  | Scope |  |
| InvasionMarker | GetInvasion |  | Invasion | Category: nonconst |
| InvasionPanel | GetInvasion |  | Invasion | Category: nonconst |
| InvasionPlannerPopup | GetSlowestArmy |  | MilitaryFormation | Category: nonconst |
| InvasionPlannerPopup | GetSlowestFleet |  | MilitaryFormation | Category: nonconst |
| InvasionPlannerPopup | GetSourceState |  | State | Category: nonconst |
| InvasionPlannerPopup | GetTargetState |  | State | Category: nonconst |
| JominiGameRules | AccessNamedGameRule | 1. CString | GuiGameRule | Category: const |
| JominiGameRules | GetSelectedPreset |  | GuiGameRulePreset | Category: nonconst |
| JominiNotification | GetDate |  | Date | Category: nonconst |
| JominiNotification | SetupDataContexts | 1. PdxGuiWidget | NotificationDummyContext |  |
| JominiSettingsWindow | AccessActivePage |  | SettingsPage | Category: const |
| JournalEntry | AccessModifier |  | Modifier | Category: const |
| JournalEntry | GetBuildingTarget |  | Building | Category: nonconst |
| JournalEntry | GetCountry |  | Country | Category: nonconst |
| JournalEntry | GetModifier |  | Modifier | Category: nonconst |
| JournalEntry | GetTarget |  | Scope | Category: nonconst |
| JournalEntry | GetTopScope |  | TopScope | Category: nonconst |
| JournalEntry | GetType |  | JournalEntryType | Category: nonconst |
| JournalEntry | MakeScope |  | Scope |  |
| JournalEntryPanel | AccessJournalEntry |  | JournalEntry | Category: const |
| JournalEntryPanel | GetJournalEntry |  | JournalEntry | Category: nonconst |
| JournalEntryType | GetGroup |  | JournalEntryGroup | Category: nonconst |
| Law | GetActiveGroupLaw |  | Law | Category: nonconst |
| Law | GetCheckpointEndDate |  | Date | Category: nonconst |
| Law | GetCountry |  | Country | Category: nonconst |
| Law | GetEnactmentLastCheckpointDate |  | Date | Category: nonconst |
| Law | GetGroup |  | LawGroup | Category: nonconst |
| Law | GetInstitution |  | Institution | Category: nonconst |
| Law | GetInstitutionModifier |  | Modifier | Category: nonconst |
| Law | GetInstitutionType |  | InstitutionType | Category: nonconst |
| Law | GetLawType |  | LawType | Category: nonconst |
| Law | MakeScope |  | Scope |  |
| LawGroup | GetCurrentlyActive |  | Law | Category: nonconst |
| LawGroup | GetCurrentlyEnacting |  | Law | Category: nonconst |
| LawGroup | GetFirstInstitutionType |  | InstitutionType | Category: nonconst |
| LawType | GetGroup |  | LawGroup | Category: nonconst |
| LawType | GetParentLawType |  | LawType | Category: nonconst |
| LawType | MakeScope |  | Scope |  |
| LayerTreeItem | GetEntry |  | Type | Category: nonconst |
| LensOption | GetDecreeType |  | DecreeType | Category: nonconst |
| LensOption | GetDiplomaticAction |  | DiplomaticAction | Category: nonconst |
| LensToolbar | GetCurrentTab |  | LensTab | Category: nonconst |
| LoadIngameWindow | GetSelectedSavegame |  | SaveGameItem | Category: nonconst |
| LoadingScreenManager | GetConceptTip |  | GameConceptType | Category: nonconst |
| LobbyPlayer | GetLobbyView |  | LobbyView | Category: nonconst |
| LobbyPlayer | GetPlayable |  | Playable | Category: nonconst |
| LobbyView | AccessLocalPlayer |  | LobbyPlayer | Category: const |
| LobbyView | AccessSelectedPlayable |  | Playable | Category: const |
| LobbyView | GetSelectedPlayable |  | Playable | Category: nonconst |
| LobbyView | GetServerInfo |  | ServerInformation | Category: nonconst |
| LogViewer | GetLastLogEntry |  | LogViewerEntry | Category: nonconst |
| LogViewer | GetSelectedLogEntry |  | LogViewerEntry | Category: nonconst |
| MapContentEditorViewport | GetTooltip |  | GuiEditorTooltip | Category: nonconst |
| MapEditor | AccessUndoHistoryViewerClient |  | UndoHistoryViewerClient | Category: const |
| MapEditor | GetUndoHistoryViewerClient |  | UndoHistoryViewerClient | Category: nonconst |
| MapEditorGui | AccessLogViewer |  | LogViewer | Category: const |
| MapListActivateConscriptionCenterOption | GetHQ |  | Hq | Category: nonconst |
| MapListActivateConscriptionCenterOption | GetMilitaryFormation |  | MilitaryFormation | Category: nonconst |
| MapListActivateConscriptionCenterOption | GetState |  | State | Category: nonconst |
| MapListBuildingOption | AccessBuilding |  | Building | Category: const |
| MapListBuildingOption | AccessMilitaryFormation |  | MilitaryFormation | Category: const |
| MapListBuildingOption | AccessState |  | State | Category: const |
| MapListBuildingOption | GetBuilding |  | Building | Category: nonconst |
| MapListBuildingOption | GetCombatUnitType |  | CombatUnitType | Category: nonconst |
| MapListBuildingOption | GetMilitaryFormation |  | MilitaryFormation | Category: nonconst |
| MapListBuildingOption | GetState |  | State | Category: nonconst |
| MapListBuildingPanel | GetBuildingType |  | BuildingType | Category: nonconst |
| MapListColonyOption | GetStateRegion |  | StateRegion | Category: nonconst |
| MapListCountryOption | GetCountry |  | Country | Category: nonconst |
| MapListDecreeOption | GetState |  | State | Category: nonconst |
| MapListDecreePanel | GetDecreeType |  | DecreeType | Category: nonconst |
| MapListDeployMilitaryFormationToFrontOption | GetFront |  | Front | Category: nonconst |
| MapListDiploActionOption | GetCountry |  | Country | Category: nonconst |
| MapListDiploActionOption | GetDiplomaticAction |  | DiplomaticAction | Category: nonconst |
| MapListHarvestConditionOption | GetArea |  | HarvestConditionArea | Category: nonconst |
| MapListInterestGroupOption | AccessInterestGroup |  | InterestGroup | Category: const |
| MapListInterestGroupOption | GetInterestGroup |  | InterestGroup | Category: nonconst |
| MapListMarketOption | AccessMarket |  | Market | Category: const |
| MapListMarketOption | GetMarket |  | Market | Category: nonconst |
| MapListOption | AccessBuildingData |  | MapListBuildingOption | Category: const |
| MapListOption | AccessInterestGroupData |  | MapListInterestGroupOption | Category: const |
| MapListOption | AccessMarketData |  | MapListMarketOption | Category: const |
| MapListOption | AccessPowerBlocData |  | MapListPowerBlocOption | Category: const |
| MapListOption | AccessStateData |  | MapListStateOption | Category: const |
| MapListOption | AccessStrategicRegionData |  | MapListStrategicRegionOption | Category: const |
| MapListOption | GetActivateConscriptionCenterData |  | MapListActivateConscriptionCenterOption | Category: nonconst |
| MapListOption | GetBuildingData |  | MapListBuildingOption | Category: nonconst |
| MapListOption | GetColonyData |  | MapListColonyOption | Category: nonconst |
| MapListOption | GetCountryData |  | MapListCountryOption | Category: nonconst |
| MapListOption | GetDecreeData |  | MapListDecreeOption | Category: nonconst |
| MapListOption | GetDiploActionData |  | MapListDiploActionOption | Category: nonconst |
| MapListOption | GetFrontData |  | MapListDeployMilitaryFormationToFrontOption | Category: nonconst |
| MapListOption | GetHarvestConditionAreaData |  | MapListHarvestConditionOption | Category: nonconst |
| MapListOption | GetInterestGroupData |  | MapListInterestGroupOption | Category: nonconst |
| MapListOption | GetMarketData |  | MapListMarketOption | Category: nonconst |
| MapListOption | GetMilitaryFormationData |  | MapListMilitaryFormationOption | Category: nonconst |
| MapListOption | GetPowerBlocData |  | MapListPowerBlocOption | Category: nonconst |
| MapListOption | GetStateData |  | MapListStateOption | Category: nonconst |
| MapListOption | GetStrategicRegionData |  | MapListStrategicRegionOption | Category: nonconst |
| MapListPowerBlocInvitationPanel | GetDiplomaticAction | 1. Unknown | DiplomaticAction | Category: nonconst |
| MapListPowerBlocInvitationPanel | GetPowerBloc |  | PowerBloc | Category: nonconst |
| MapListPowerBlocOption | AccessPowerBloc |  | PowerBloc | Category: const |
| MapListPowerBlocOption | GetPowerBloc |  | PowerBloc | Category: nonconst |
| MapListPowerBlocsPanel | GetDiplomaticAction | 1. Unknown | DiplomaticAction | Category: nonconst |
| MapListStateOption | AccessState |  | State | Category: const |
| MapListStateOption | GetState |  | State | Category: nonconst |
| MapListStrategicRegionOption | AccessStrategicRegion |  | StrategicRegion | Category: const |
| MapListStrategicRegionOption | GetStrategicRegion |  | StrategicRegion | Category: nonconst |
| MapModeList | GetSelectedMapMode |  | MapMode | Category: nonconst |
| MapObjectPainterOptions | AccessBlurThresholdCtx |  | BlurThreshold | Category: const |
| MapObjectTool | GetTooltip |  | GuiEditorTooltip | Category: nonconst |
| MapObjectTool | MoveTool |  | MoveTool |  |
| MapObjectTool | SelectTool |  | SelectTool |  |
| Market | AccessMarketCapital |  | State | Category: const |
| Market | GetFoodSecurity |  | FoodSecurity | Category: nonconst |
| Market | GetFoodSecurityFilter |  | FoodSecurityFilter | Category: nonconst |
| Market | GetMarketCapital |  | State | Category: nonconst |
| Market | GetModifier |  | Modifier | Category: nonconst |
| Market | GetOwner |  | Country | Category: nonconst |
| Market | MakeScope |  | Scope |  |
| MarketGoods | GetGoods |  | Goods | Category: nonconst |
| MarketGoods | GetMarket |  | Market | Category: nonconst |
| MarketGoods | MakeScope |  | Scope |  |
| MarketPanel | GetFilteredGoodsList | 1. FoodSecurityFilter | GoodsList | Category: nonconst |
| MarketPanel | GetHarvestConditionList | 1. FoodSecurityFilter | HarvestConditionList | Category: nonconst |
| MarketPanel | GetMapModeList |  | MapModeList | Category: nonconst |
| MarketPanel | GetMarket |  | Market | Category: nonconst |
| MarketsMarker | GetAnyMarket |  | Market | Category: nonconst |
| MarketsMarkerListItem | GetMarket |  | Market | Category: nonconst |
| MaskPainterViewport | GetTooltip |  | GuiEditorTooltip | Category: nonconst |
| MaterialBrowser | GetCurrentMaterial |  | Material | Category: nonconst |
| MaterialEntry | GetMaterial |  | Material | Category: nonconst |
| MaterialMixBrush | GetHoverSample |  | MaterialsSample | Category: nonconst |
| MaterialMixEntry | AccessMaterial |  | Material | Category: const |
| MaterialMixEntry | GetMaterial |  | Material | Category: nonconst |
| MaterialPaintingMode | AccessBlurThresholdCtx |  | BlurThreshold | Category: const |
| MeshImporter | AccessMaterialImportSettings |  | MeshImporterMaterials | Category: const |
| MeshImporter | AccessUndoer |  | UndoStack | Category: const |
| MilitaryFormation | AccessCountry |  | Country | Category: const |
| MilitaryFormation | FindLeastExperiencedConscriptUnit | 1. Unknown | CombatUnit |  |
| MilitaryFormation | FindLeastExperiencedRegularUnit | 1. CombatUnitType | CombatUnit |  |
| MilitaryFormation | GetCountry |  | Country | Category: nonconst |
| MilitaryFormation | GetCurrentFront |  | Front | Category: nonconst |
| MilitaryFormation | GetCurrentHQ |  | Hq | Category: nonconst |
| MilitaryFormation | GetCurrentSeaNode |  | Province | Category: nonconst |
| MilitaryFormation | GetHomeHQ |  | Hq | Category: nonconst |
| MilitaryFormation | GetInvasion |  | Invasion | Category: nonconst |
| MilitaryFormation | GetMobilizationModifier |  | Modifier | Category: nonconst |
| MilitaryFormation | GetModifier |  | Modifier | Category: nonconst |
| MilitaryFormation | GetPrimaryCultureForGroup | 1. CombatUnitGroup | Culture | Category: nonconst |
| MilitaryFormation | GetPrimaryCultureForType | 1. CombatUnitType | Culture | Category: nonconst |
| MilitaryFormation | GetSelectedUnitTypeForGroup | 1. CombatUnitGroup | CombatUnitType | Category: nonconst |
| MilitaryFormation | GetShippingLane |  | ShippingLane | Category: nonconst |
| MilitaryFormation | GetStateAtPosition |  | State | Category: nonconst |
| MilitaryFormation | GetStrategicObjective |  | State | Category: nonconst |
| MilitaryFormation | GetTargetFront |  | Front | Category: nonconst |
| MilitaryFormation | GetTargetHQ |  | Hq | Category: nonconst |
| MilitaryFormation | GetTargetSeaNode |  | Province | Category: nonconst |
| MilitaryFormation | MakeScope |  | Scope |  |
| MilitaryFormationChangeNamePopup | GetFormation |  | MilitaryFormation | Category: nonconst |
| MilitaryFormationUnitEntry | GetUnitType |  | CombatUnitType | Category: nonconst |
| MilitaryPanelBuildingEntry | GetBuilding |  | Building | Category: nonconst |
| MobilizationOption | GetUnitModifier |  | Modifier | Category: nonconst |
| MobilizationOption | GetUpkeepModifier |  | Modifier | Category: nonconst |
| MobilizationOption | GetUpkeepUnscaledModifier |  | Modifier | Category: nonconst |
| MobilizationOption | MakeScope |  | Scope |  |
| Modifier | GetBreakdownFor | 1. Unknown | ModifierBreakdown | Category: nonconst |
| ModifierBreakdown | GetModifier |  | Modifier | Category: nonconst |
| ModifierNodeDetailsView | GetModifierNodeData |  | ModifierNodeData | Category: nonconst |
| ModifierNodeGraphItem | GetModifierNodeData |  | ModifierNodeData | Category: nonconst |
| ModifiersPanel | GetModifier |  | Modifier | Category: nonconst |
| MultiplayerSetupWindow | AccessMPConfig |  | MPConfig | Category: const |
| MultiplayerSetupWindow | GetMPConfig |  | MPConfig | Category: nonconst |
| NationalAwakeningMarker | GetCulture |  | Culture | Category: nonconst |
| NationalizeBuildingGroup | GetInvestor |  | Country | Category: nonconst |
| NationalizeBuildingTypeGroup | GetBuildingType |  | BuildingType | Category: nonconst |
| NotificationSettingsItem | GetCurrentOption |  | NotificationOptionItem | Category: nonconst |
| Objective | GetObjectiveType |  | ObjectiveType | Category: nonconst |
| Objective | MakeScope |  | Scope |  |
| ObstinanceMarker | GetState |  | State | Category: nonconst |
| OccupationPiechartData | GetCountry |  | Country | Category: nonconst |
| OosData | GetPlayable |  | Playable | Category: nonconst |
| OpinionMarker | GetCountry |  | Country | Category: nonconst |
| Outliner | AccessCategory | 1. CString | OutlinerEntry | Category: const |
| OutlinerEntry | AccessScope |  | Scope | Category: const |
| OutlinerEntry | AccessSituation |  | Event | Category: const |
| PanelMilitary | AccessCountry |  | Country | Category: const |
| PanelMilitary | GetCountry |  | Country | Category: nonconst |
| PanelMilitary | GetMapModeList |  | MapModeList | Category: nonconst |
| Party | GetCountry |  | Country | Category: nonconst |
| Party | GetLeader |  | InterestGroup | Category: nonconst |
| Party | GetLeaderCharacter |  | Character | Category: nonconst |
| Party | MakeScope |  | Scope |  |
| PartyPanel | AccessParty |  | Party | Category: const |
| PartyPanel | GetParty |  | Party | Category: nonconst |
| PastBattleMarker | GetBattle |  | Battle | Category: nonconst |
| PdxAccount | GetInventory |  | AccountInventory | Category: nonconst |
| PdxGuiWidget | AccessChild | 1. CString | PdxGuiWidget | Category: const |
| PdxGuiWidget | AccessParent |  | PdxGuiWidget | Category: const |
| PdxGuiWidget | FindChild | 1. CString | PdxGuiWidget |  |
| PdxGuiWidget | GfxVideoControl |  | PdxGuiGfxVideoControl |  |
| PdxSetting | GetSettingPromoted |  | PdxCoreSetting | Category: nonconst |
| Playable | AccessCountry |  | Country | Category: const |
| Playable | GetCountry |  | Country | Category: nonconst |
| Player | AccessPlayedOrObservedCountry |  | Country | Category: const |
| Player | GetPlayedOrObservedCountry |  | Country | Category: nonconst |
| PlayerMessageItem | GetCountry |  | Country | Category: nonconst |
| PlayerMessageItem | GetDiploPlay |  | DiplomaticPlay | Category: nonconst |
| PlayerMessageItem | GetDiplomaticAction |  | DiplomaticAction | Category: nonconst |
| PlayerMessageItem | GetInstitution |  | Institution | Category: nonconst |
| PlayerMessageItem | GetLaw |  | Law | Category: nonconst |
| PlayerMessageItem | GetPrevLaw |  | Law | Category: nonconst |
| PlayerMessageItem | GetScopeActorCountry |  | Country | Category: nonconst |
| PlayerMessageItem | GetScopeDiploPlay |  | DiplomaticPlay | Category: nonconst |
| PlayerMessageItem | GetScopeTargetCountry |  | Country | Category: nonconst |
| PlayerMessageItem | GetScopeTechnology |  | Technology | Category: nonconst |
| PlayerMessageItem | GetTopScope |  | TopScope | Category: nonconst |
| PoliticalLobby | GetCountry |  | Country | Category: nonconst |
| PoliticalLobby | GetEstablishmentDate |  | Date | Category: nonconst |
| PoliticalLobby | GetTargetCountry |  | Country | Category: nonconst |
| PoliticalLobby | GetType |  | PoliticalLobbyType | Category: nonconst |
| PoliticalLobby | MakeScope |  | Scope |  |
| PoliticalLobbyAppeasementFactor | MakeScope |  | Scope |  |
| PoliticalLobbyMarker | GetPlacementCountry |  | Country | Category: nonconst |
| PoliticalLobbyMarker | GetPoliticalLobby |  | PoliticalLobby | Category: nonconst |
| PoliticalLobbyPanel | GetPoliticalLobby |  | PoliticalLobby | Category: nonconst |
| PoliticalLobbyType | MakeScope |  | Scope |  |
| PoliticalMovement | GetCivilWar |  | CivilWar | Category: nonconst |
| PoliticalMovement | GetCoreIdeology |  | Ideology | Category: nonconst |
| PoliticalMovement | GetCountry |  | Country | Category: nonconst |
| PoliticalMovement | GetSupportingPops |  | PopList | Category: nonconst |
| PoliticalMovement | GetType |  | PoliticalMovementType | Category: nonconst |
| PoliticalMovement | GetUprisingDefinition |  | CountryDefinition | Category: nonconst |
| PoliticalMovement | MakeScope |  | Scope |  |
| PoliticalMovementCategory | MakeScope |  | Scope |  |
| PoliticalMovementPanel | GetPoliticalMovement |  | PoliticalMovement | Category: nonconst |
| PoliticalMovementType | GetCategory |  | PoliticalMovementCategory | Category: nonconst |
| PoliticalMovementType | GetCoreIdeology |  | Ideology | Category: nonconst |
| PoliticalMovementType | MakeScope |  | Scope |  |
| PoliticsPanel | AccessReformGovernment |  | ReformGovernment | Category: const |
| PoliticsPanel | GetReformGovernment |  | ReformGovernment | Category: nonconst |
| Pop | AccessBuilding |  | Building | Category: const |
| Pop | AccessCulture |  | Culture | Category: const |
| Pop | AccessLargestInterestGroup |  | InterestGroup | Category: const |
| Pop | AccessPopType |  | PopType | Category: const |
| Pop | AccessReligion |  | Religion | Category: const |
| Pop | AccessState |  | State | Category: const |
| Pop | GetAcceptanceStatus |  | AcceptanceStatus | Category: nonconst |
| Pop | GetAssimilatingCulture |  | Culture | Category: nonconst |
| Pop | GetBuilding |  | Building | Category: nonconst |
| Pop | GetConvertingReligion |  | Religion | Category: nonconst |
| Pop | GetCountry |  | Country | Category: nonconst |
| Pop | GetCulture |  | Culture | Category: nonconst |
| Pop | GetLargestInterestGroup |  | InterestGroup | Category: nonconst |
| Pop | GetLargestPoliticalMovement |  | PoliticalMovement | Category: nonconst |
| Pop | GetPopType |  | PopType | Category: nonconst |
| Pop | GetReligion |  | Religion | Category: nonconst |
| Pop | GetSocialClass |  | SocialClass | Category: nonconst |
| Pop | GetState |  | State | Category: nonconst |
| Pop | MakeScope |  | Scope |  |
| PopBrowserPanel | GetCountry |  | Country | Category: nonconst |
| PopConsumptionGoods | GetGoods |  | Goods | Category: nonconst |
| PopConsumptionGoods | GetPop |  | Pop | Category: nonconst |
| PopDetailsPanel | AccessPop |  | Pop | Category: const |
| PopList | GetBuildingContext |  | Building | Category: nonconst |
| PopList | GetInterestGroupContext |  | InterestGroup | Category: nonconst |
| PopList | GetItem0 |  | PopListItem | Category: nonconst |
| PopList | GetItem1 |  | PopListItem | Category: nonconst |
| PopList | GetItem2 |  | PopListItem | Category: nonconst |
| PopList | GetItem3 |  | PopListItem | Category: nonconst |
| PopList | GetPoliticalMovementContext |  | PoliticalMovement | Category: nonconst |
| PopListItem | AccessPopType |  | PopType | Category: const |
| PopListItem | GetFirstPop |  | Pop | Category: nonconst |
| PopListItem | GetPopType |  | PopType | Category: nonconst |
| PopNeed | GetDefaultGoods |  | Goods | Category: nonconst |
| PopNeed | GetPop |  | Pop | Category: nonconst |
| PopType | MakeScope |  | Scope |  |
| PopWithIG | GetInterestGroup |  | InterestGroup | Category: nonconst |
| PopWithIG | GetPop |  | Pop | Category: nonconst |
| PopsOverviewPanel | AccessPopsList |  | PopList | Category: const |
| PopsOverviewPanel | GetMapModeList |  | MapModeList | Category: nonconst |
| PopulationGrouping | AccessInterestGroup |  | InterestGroup | Category: const |
| PopulationGrouping | GetInterestGroup |  | InterestGroup | Category: nonconst |
| PopupManager | GetRecruitFormation |  | MilitaryFormation | Category: nonconst |
| PopupManager | GetRecruitHQ |  | Hq | Category: nonconst |
| PortraitEditorWindow | GetChildGenerator |  | ChildGenerator | Category: nonconst |
| PortraitEditorWindow | GetPortraitDataContext |  | PortraitDataContext | Category: nonconst |
| PortraitEditorWindow | GetSelectedEthnicityItem |  | EthnicityItem | Category: nonconst |
| PortraitEditorWindow | GetSelectedGeneItem |  | GeneItem | Category: nonconst |
| PotentialLeaderIdeology | GetIdeology |  | Ideology | Category: nonconst |
| PowerBloc | GetCohesionLevel |  | CohesionLevel | Category: nonconst |
| PowerBloc | GetFlag |  | CoatOfArms | Category: nonconst |
| PowerBloc | GetFoundingDate |  | Date | Category: nonconst |
| PowerBloc | GetIdentity |  | PowerBlocIdentity | Category: nonconst |
| PowerBloc | GetLeader |  | Country | Category: nonconst |
| PowerBloc | GetLeaderModifier |  | Modifier | Category: nonconst |
| PowerBloc | GetMember | 1. Unknown | Country | Category: nonconst |
| PowerBloc | GetMemberWithUniqueHeadOfState | 1. int32 | Country | Category: nonconst |
| PowerBloc | GetModifier |  | Modifier | Category: nonconst |
| PowerBloc | GetNextMandateDate |  | Date | Category: nonconst |
| PowerBloc | GetNonLeaderModifier |  | Modifier | Category: nonconst |
| PowerBloc | GetParticipantWithHighestInfamy |  | Country | Category: nonconst |
| PowerBloc | GetParticipantWithHighestLeaderLawProgressivenessDifference |  | Country | Category: nonconst |
| PowerBloc | GetParticipantWithHighestLibertyDesire |  | Country | Category: nonconst |
| PowerBloc | GetParticipantWithLowestEconomicDependence |  | Country | Category: nonconst |
| PowerBloc | GetParticipantWithLowestEconomicDependenceOnLeader |  | Country | Category: nonconst |
| PowerBloc | GetParticipantWithLowestLeaderRelations |  | Country | Category: nonconst |
| PowerBloc | GetParticipantWithLowestLeaderReligionPercentage |  | Country | Category: nonconst |
| PowerBloc | GetPowerBlocStatue |  | PowerBlocStatue | Category: nonconst |
| PowerBloc | GetPowerStruggleContender |  | Country | Category: nonconst |
| PowerBloc | GetPrincipleData | 1. PowerBlocPrinciple | PowerBlocPrincipleData | Category: nonconst |
| PowerBloc | GetRequestToJoin | 1. Country | DiplomaticAction | Category: nonconst |
| PowerBloc | MakeScope |  | Scope |  |
| PowerBlocCoaPiece | GetCoa |  | CoatOfArms | Category: nonconst |
| PowerBlocCoaPieceSelector | GetSelectedItem |  | PowerBlocCoaPiece | Category: nonconst |
| PowerBlocCustomizationPopup | GetCustomCoaPreview |  | CoatOfArms | Category: nonconst |
| PowerBlocCustomizationPopup | GetPowerBloc |  | PowerBloc | Category: nonconst |
| PowerBlocCustomizationPopup | GetPowerBlocMapTextureSelector |  | PowerBlocMapTextureSelector | Category: nonconst |
| PowerBlocCustomizationPopup | GetStatue |  | PowerBlocStatue | Category: nonconst |
| PowerBlocCustomizationPopup | GetStatueHeroType |  | PowerBlocStatueHeroType | Category: nonconst |
| PowerBlocCustomizationPopup | GetStatuePedestalType |  | PowerBlocStatuePedestalType | Category: nonconst |
| PowerBlocFormation | GetConfirmedCustomCoaPreview |  | CoatOfArms | Category: nonconst |
| PowerBlocFormation | GetPrincipleSlot | 1. Unknown | PowerBlocFormationPrincipleSlot | Category: nonconst |
| PowerBlocFormation | GetSelectedIdentity |  | PowerBlocIdentity | Category: nonconst |
| PowerBlocFormation | GetStatue |  | PowerBlocStatue | Category: nonconst |
| PowerBlocFormationPanel | GetPowerBlocFormation |  | PowerBlocFormation | Category: nonconst |
| PowerBlocFormationPrincipleSlot | GetSelectedPrinciple |  | PowerBlocPrinciple | Category: nonconst |
| PowerBlocIdentity | MakeScope |  | Scope |  |
| PowerBlocMapTextureSelector | GetSelectedItem |  | PowerBlocMapTexture | Category: nonconst |
| PowerBlocPanel | GetMapModeList |  | MapModeList | Category: nonconst |
| PowerBlocPanel | GetPrincipleSlot | 1. int32 | PowerBlocPrincipleSlot | Category: nonconst |
| PowerBlocPanel | GetSelectedPowerBloc |  | PowerBloc | Category: nonconst |
| PowerBlocPrinciple | GetGroup |  | PowerBlocPrincipleGroup | Category: nonconst |
| PowerBlocPrinciple | MakeScope |  | Scope |  |
| PowerBlocPrincipleData | GetCooldownDate |  | Date | Category: nonconst |
| PowerBlocPrincipleData | GetSelectionDate |  | Date | Category: nonconst |
| PowerBlocPrincipleGroup | MakeScope |  | Scope |  |
| PowerBlocPrincipleSelectionWindow | GetPowerBloc |  | PowerBloc | Category: nonconst |
| PowerBlocPrincipleSelectionWindow | GetPowerBlocFormation |  | PowerBlocFormation | Category: nonconst |
| PowerBlocPrincipleSelectionWindow | GetReplacedPrinciple |  | PowerBlocPrinciple | Category: nonconst |
| PowerBlocPrincipleSelectionWindow | GetSelectedPrinciple |  | PowerBlocPrinciple | Category: nonconst |
| PowerBlocPrincipleSlot | GetPrinciple |  | PowerBlocPrinciple | Category: nonconst |
| PowerBlocStatueAccessoryTypeSelector | GetStatueAccessoryType |  | PowerBlocStatueAccessoryType | Category: nonconst |
| PrestigeGoodChangeNamePopup | GetPrestigeGood |  | Goods | Category: nonconst |
| ProductionMarker | AccessState |  | State | Category: const |
| Proposal | AccessTimeoutTimer |  | PieTimer | Category: const |
| Proposal | GetActor |  | Country | Category: nonconst |
| Proposal | GetDiplomaticAction |  | DiplomaticAction | Category: nonconst |
| Proposal | GetDiplomaticDemand |  | DiplomaticDemand | Category: nonconst |
| Proposal | GetDiplomaticPlay |  | DiplomaticPlay | Category: nonconst |
| Proposal | GetRecipient |  | Country | Category: nonconst |
| Proposal | GetTarget |  | Country | Category: nonconst |
| Proposal | GetTreaty |  | Treaty | Category: nonconst |
| Province | AccessStateRegion |  | StateRegion | Category: const |
| Province | GetController |  | Country | Category: nonconst |
| Province | GetState |  | State | Category: nonconst |
| Province | GetStateRegion |  | StateRegion | Category: nonconst |
| Province | MakeScope |  | Scope |  |
| ReformGovernment | GetCountry |  | Country | Category: nonconst |
| ReformGovernment | GetLegitimacyLevel |  | LegitimacyLevel | Category: nonconst |
| ReformGovernment | GetPredictedLegitimacyLevel |  | LegitimacyLevel | Category: nonconst |
| ReformGovernment | GetPredictedNewRuler | 1. bool | Character | Category: nonconst |
| ReleaseCountryWindow | AccessCountryCreation |  | CountryCreation | Category: const |
| ReleaseCountryWindow | GetCountryCreation |  | CountryCreation | Category: nonconst |
| Religion | MakeScope |  | Scope |  |
| ReligionInfoPanel | AccessPopsList |  | PopList | Category: const |
| ReligionInfoPanel | AccessReligion |  | Religion | Category: const |
| ReligionInfoPanel | GetReligion |  | Religion | Category: nonconst |
| RevolutionaryMovementMarker | GetPoliticalMovement |  | PoliticalMovement | Category: nonconst |
| SaveGameAnalysisView | GetSaveGame |  | SaveGame | Category: nonconst |
| SaveGameItem | GetCountryFlag |  | CoatOfArms | Category: nonconst |
| SaveGameItem | GetDate |  | Date | Category: nonconst |
| SaveGameWindow | AccessCloudData |  | CloudSaveData | Category: const |
| Scope | AccessAmendment |  | Amendment | Category: const |
| Scope | AccessAmendmentType |  | AmendmentType | Category: const |
| Scope | AccessBattle |  | Battle | Category: const |
| Scope | AccessBuilding |  | Building | Category: const |
| Scope | AccessBuildingGroup |  | BuildingGroup | Category: const |
| Scope | AccessBuildingType |  | BuildingType | Category: const |
| Scope | AccessCanalType |  | CanalType | Category: const |
| Scope | AccessCharacter |  | Character | Category: const |
| Scope | AccessCivilWar |  | CivilWar | Category: const |
| Scope | AccessCombatUnit |  | CombatUnit | Category: const |
| Scope | AccessCombatUnitType |  | CombatUnitType | Category: const |
| Scope | AccessCommanderOrderType |  | CommanderOrderType | Category: const |
| Scope | AccessCompany |  | Company | Category: const |
| Scope | AccessCompanyType |  | CompanyType | Category: const |
| Scope | AccessCountry |  | Country | Category: const |
| Scope | AccessCountryCreation |  | CountryCreation | Category: const |
| Scope | AccessCountryDefinition |  | CountryDefinition | Category: const |
| Scope | AccessCountryFormation |  | CountryFormation | Category: const |
| Scope | AccessCulturalCommunity |  | CulturalCommunity | Category: const |
| Scope | AccessCulture |  | Culture | Category: const |
| Scope | AccessDecisionType |  | Decision | Category: const |
| Scope | AccessDecree |  | Decree | Category: const |
| Scope | AccessDiplomaticAction |  | DiplomaticAction | Category: const |
| Scope | AccessDiplomaticCatalyst |  | DiplomaticCatalyst | Category: const |
| Scope | AccessDiplomaticCatalystCategory |  | DiplomaticCatalystCategory | Category: const |
| Scope | AccessDiplomaticCatalystType |  | DiplomaticCatalystType | Category: const |
| Scope | AccessDiplomaticDemand |  | DiplomaticDemand | Category: const |
| Scope | AccessDiplomaticPact |  | DiplomaticPact | Category: const |
| Scope | AccessDiplomaticPlay |  | DiplomaticPlay | Category: const |
| Scope | AccessDiplomaticPlayType |  | DiplomaticPlayType | Category: const |
| Scope | AccessDiplomaticRelations |  | DiplomaticRelations | Category: const |
| Scope | AccessFront |  | Front | Category: const |
| Scope | AccessGeographicRegion |  | GeographicRegion | Category: const |
| Scope | AccessGoods |  | Goods | Category: const |
| Scope | AccessHQ |  | Hq | Category: const |
| Scope | AccessHarvestCondition |  | HarvestCondition | Category: const |
| Scope | AccessHarvestConditionArea |  | HarvestConditionArea | Category: const |
| Scope | AccessHarvestConditionType |  | HarvestConditionType | Category: const |
| Scope | AccessIdeology |  | Ideology | Category: const |
| Scope | AccessInstitution |  | Institution | Category: const |
| Scope | AccessInstitutionType |  | InstitutionType | Category: const |
| Scope | AccessInterest |  | Interest | Category: const |
| Scope | AccessInterestGroup |  | InterestGroup | Category: const |
| Scope | AccessInterestGroupTrait |  | InterestGroupTrait | Category: const |
| Scope | AccessInvasion |  | Invasion | Category: const |
| Scope | AccessJournalEntry |  | JournalEntry | Category: const |
| Scope | AccessLaw |  | Law | Category: const |
| Scope | AccessLawType |  | LawType | Category: const |
| Scope | AccessMarket |  | Market | Category: const |
| Scope | AccessMarketGoods |  | MarketGoods | Category: const |
| Scope | AccessMilitaryFormation |  | MilitaryFormation | Category: const |
| Scope | AccessMobilizationOption |  | MobilizationOption | Category: const |
| Scope | AccessObjective |  | Objective | Category: const |
| Scope | AccessParty |  | Party | Category: const |
| Scope | AccessPoliticalLobby |  | PoliticalLobby | Category: const |
| Scope | AccessPoliticalLobbyAppeasementFactor |  | PoliticalLobbyAppeasementFactor | Category: const |
| Scope | AccessPoliticalLobbyType |  | PoliticalLobbyType | Category: const |
| Scope | AccessPoliticalMovement |  | PoliticalMovement | Category: const |
| Scope | AccessPoliticalMovementCategory |  | PoliticalMovementCategory | Category: const |
| Scope | AccessPoliticalMovementType |  | PoliticalMovementType | Category: const |
| Scope | AccessPop |  | Pop | Category: const |
| Scope | AccessPopType |  | PopType | Category: const |
| Scope | AccessPowerBloc |  | PowerBloc | Category: const |
| Scope | AccessPowerBlocIdentity |  | PowerBlocIdentity | Category: const |
| Scope | AccessPowerBlocPrinciple |  | PowerBlocPrinciple | Category: const |
| Scope | AccessPowerBlocPrincipleGroup |  | PowerBlocPrincipleGroup | Category: const |
| Scope | AccessProvince |  | Province | Category: const |
| Scope | AccessReligion |  | Religion | Category: const |
| Scope | AccessShippingLane |  | ShippingLane | Category: const |
| Scope | AccessState |  | State | Category: const |
| Scope | AccessStateGoods |  | StateGoods | Category: const |
| Scope | AccessStateRegion |  | StateRegion | Category: const |
| Scope | AccessStateTrait |  | StateTrait | Category: const |
| Scope | AccessStrategicRegion |  | StrategicRegion | Category: const |
| Scope | AccessSway |  | Sway | Category: const |
| Scope | AccessTechnology |  | Technology | Category: const |
| Scope | AccessTheater |  | Theater | Category: const |
| Scope | AccessTreaty |  | Treaty | Category: const |
| Scope | AccessTreatyArticle |  | Article | Category: const |
| Scope | AccessWar |  | War | Category: const |
| Scope | AccessWarGoal |  | WarGoal | Category: const |
| Scope | AccessWarGoalType |  | WarGoalType | Category: const |
| Scope | GetAmendment |  | Amendment | Category: nonconst |
| Scope | GetAmendmentType |  | AmendmentType | Category: nonconst |
| Scope | GetBattle |  | Battle | Category: nonconst |
| Scope | GetBuilding |  | Building | Category: nonconst |
| Scope | GetBuildingGroup |  | BuildingGroup | Category: nonconst |
| Scope | GetBuildingType |  | BuildingType | Category: nonconst |
| Scope | GetCanalType |  | CanalType | Category: nonconst |
| Scope | GetCharacter |  | Character | Category: nonconst |
| Scope | GetCivilWar |  | CivilWar | Category: nonconst |
| Scope | GetCombatUnit |  | CombatUnit | Category: nonconst |
| Scope | GetCombatUnitType |  | CombatUnitType | Category: nonconst |
| Scope | GetCommanderOrderType |  | CommanderOrderType | Category: nonconst |
| Scope | GetCompany |  | Company | Category: nonconst |
| Scope | GetCompanyType |  | CompanyType | Category: nonconst |
| Scope | GetCountry |  | Country | Category: nonconst |
| Scope | GetCountryCreation |  | CountryCreation | Category: nonconst |
| Scope | GetCountryDefinition |  | CountryDefinition | Category: nonconst |
| Scope | GetCountryFormation |  | CountryFormation | Category: nonconst |
| Scope | GetCulturalCommunity |  | CulturalCommunity | Category: nonconst |
| Scope | GetCulture |  | Culture | Category: nonconst |
| Scope | GetDecisionType |  | Decision | Category: nonconst |
| Scope | GetDecree |  | Decree | Category: nonconst |
| Scope | GetDiplomaticAction |  | DiplomaticAction | Category: nonconst |
| Scope | GetDiplomaticCatalyst |  | DiplomaticCatalyst | Category: nonconst |
| Scope | GetDiplomaticCatalystCategory |  | DiplomaticCatalystCategory | Category: nonconst |
| Scope | GetDiplomaticCatalystType |  | DiplomaticCatalystType | Category: nonconst |
| Scope | GetDiplomaticDemand |  | DiplomaticDemand | Category: nonconst |
| Scope | GetDiplomaticPact |  | DiplomaticPact | Category: nonconst |
| Scope | GetDiplomaticPlay |  | DiplomaticPlay | Category: nonconst |
| Scope | GetDiplomaticPlayType |  | DiplomaticPlayType | Category: nonconst |
| Scope | GetDiplomaticRelations |  | DiplomaticRelations | Category: nonconst |
| Scope | GetFront |  | Front | Category: nonconst |
| Scope | GetGeographicRegion |  | GeographicRegion | Category: nonconst |
| Scope | GetGoods |  | Goods | Category: nonconst |
| Scope | GetHQ |  | Hq | Category: nonconst |
| Scope | GetHarvestCondition |  | HarvestCondition | Category: nonconst |
| Scope | GetHarvestConditionArea |  | HarvestConditionArea | Category: nonconst |
| Scope | GetHarvestConditionType |  | HarvestConditionType | Category: nonconst |
| Scope | GetIdeology |  | Ideology | Category: nonconst |
| Scope | GetInstitution |  | Institution | Category: nonconst |
| Scope | GetInstitutionType |  | InstitutionType | Category: nonconst |
| Scope | GetInterest |  | Interest | Category: nonconst |
| Scope | GetInterestGroup |  | InterestGroup | Category: nonconst |
| Scope | GetInterestGroupTrait |  | InterestGroupTrait | Category: nonconst |
| Scope | GetInvasion |  | Invasion | Category: nonconst |
| Scope | GetJournalEntry |  | JournalEntry | Category: nonconst |
| Scope | GetLaw |  | Law | Category: nonconst |
| Scope | GetLawType |  | LawType | Category: nonconst |
| Scope | GetMarket |  | Market | Category: nonconst |
| Scope | GetMarketGoods |  | MarketGoods | Category: nonconst |
| Scope | GetMilitaryFormation |  | MilitaryFormation | Category: nonconst |
| Scope | GetMobilizationOption |  | MobilizationOption | Category: nonconst |
| Scope | GetObjective |  | Objective | Category: nonconst |
| Scope | GetParty |  | Party | Category: nonconst |
| Scope | GetPoliticalLobby |  | PoliticalLobby | Category: nonconst |
| Scope | GetPoliticalLobbyAppeasementFactor |  | PoliticalLobbyAppeasementFactor | Category: nonconst |
| Scope | GetPoliticalLobbyType |  | PoliticalLobbyType | Category: nonconst |
| Scope | GetPoliticalMovement |  | PoliticalMovement | Category: nonconst |
| Scope | GetPoliticalMovementCategory |  | PoliticalMovementCategory | Category: nonconst |
| Scope | GetPoliticalMovementType |  | PoliticalMovementType | Category: nonconst |
| Scope | GetPop |  | Pop | Category: nonconst |
| Scope | GetPopType |  | PopType | Category: nonconst |
| Scope | GetPowerBloc |  | PowerBloc | Category: nonconst |
| Scope | GetPowerBlocIdentity |  | PowerBlocIdentity | Category: nonconst |
| Scope | GetPowerBlocPrinciple |  | PowerBlocPrinciple | Category: nonconst |
| Scope | GetPowerBlocPrincipleGroup |  | PowerBlocPrincipleGroup | Category: nonconst |
| Scope | GetProvince |  | Province | Category: nonconst |
| Scope | GetReligion |  | Religion | Category: nonconst |
| Scope | GetShippingLane |  | ShippingLane | Category: nonconst |
| Scope | GetState |  | State | Category: nonconst |
| Scope | GetStateGoods |  | StateGoods | Category: nonconst |
| Scope | GetStateRegion |  | StateRegion | Category: nonconst |
| Scope | GetStateTrait |  | StateTrait | Category: nonconst |
| Scope | GetStrategicRegion |  | StrategicRegion | Category: nonconst |
| Scope | GetSway |  | Sway | Category: nonconst |
| Scope | GetTechnology |  | Technology | Category: nonconst |
| Scope | GetTheater |  | Theater | Category: nonconst |
| Scope | GetTreaty |  | Treaty | Category: nonconst |
| Scope | GetTreatyArticle |  | Article | Category: nonconst |
| Scope | GetVariable | 1. Unknown | Scope | Category: nonconst |
| Scope | GetWar |  | War | Category: nonconst |
| Scope | GetWarGoal |  | WarGoal | Category: nonconst |
| Scope | GetWarGoalType |  | WarGoalType | Category: nonconst |
| Scope | Var | 1. CString | Scope |  |
| ScopeDebugInspectorPlugin | GetScopeData |  | ScopeDebugData | Category: nonconst |
| ScopedEditorSettingsCategory | AccessCategory |  | EditorSettingCategory | Category: const |
| ScopedEditorSettingsCategory | GetCategory |  | EditorSettingCategory | Category: nonconst |
| ScriptProfilerGui | GetCurrentEntry |  | ScriptProfilerEntry | Category: nonconst |
| ScriptProfilerGui | GetFileSearchList |  | ToolPropertySearchList | Category: nonconst |
| ScriptProfilerGui | GetModeSearchList |  | ToolPropertySearchList | Category: nonconst |
| ScriptRunnerInspector | AccessEffectResult |  | ScriptRunnerResult | Category: const |
| ScriptRunnerInspector | AccessEventTargets |  | EventTargetSetupContext | Category: const |
| ScriptRunnerInspector | AccessTriggerResult |  | ScriptRunnerResult | Category: const |
| SeaNodeMovementMarker | GetSeaNode |  | Province | Category: nonconst |
| SeaRegionInfraMarker | GetStateRegion |  | StateRegion | Category: nonconst |
| SeaRegionPanel | AccessProvince |  | Province | Category: const |
| SeaRegionPanel | GetProvince |  | Province | Category: nonconst |
| SeaRegionWar | GetWar |  | War | Category: nonconst |
| ShippingLane | GetBeginState |  | State | Category: nonconst |
| ShippingLane | GetCountry |  | Country | Category: nonconst |
| ShippingLane | GetEndState |  | State | Category: nonconst |
| ShippingLane | GetMilitaryFormation |  | MilitaryFormation | Category: nonconst |
| ShippingLane | GetProvince |  | Province | Category: nonconst |
| ShippingLane | GetTreaty |  | Treaty | Category: nonconst |
| ShippingLane | MakeScope |  | Scope |  |
| SmartBrushHeightRange | AccessPattern |  | SmartBrushPattern | Category: const |
| SmartBrushPattern | AccessMaterialMix |  | MaterialMix | Category: const |
| SocialClass | GetMaxAllowedStatusIn | 1. Country | AcceptanceStatus | Category: nonconst |
| SocialClass | GetMinAllowedStatusIn | 1. Country | AcceptanceStatus | Category: nonconst |
| SocialClass | GetSocialHierarchy |  | SocialHierarchy | Category: nonconst |
| SocietyPanel | GetMapModeList |  | MapModeList | Category: nonconst |
| SocietyPanel | GetPopList |  | PopList | Category: nonconst |
| SocietyPanel | GetSelectedAcceptanceStatus |  | AcceptanceStatus | Category: nonconst |
| SocietyPanel | GetSelectedAcceptanceStatusSegment |  | AcceptanceStatusSegment | Category: nonconst |
| StagedCommanderTransfer | GetCommander |  | Character | Category: nonconst |
| StagedFormation | GetMilitaryFormation |  | MilitaryFormation | Category: nonconst |
| StagedUnitsWithType | GetStateFilter |  | State | Category: nonconst |
| StagedUnitsWithType | GetUnitType |  | CombatUnitType | Category: nonconst |
| State | AccessBuilding | 1. BuildingType | Building | Category: const |
| State | AccessMarket |  | Market | Category: const |
| State | AccessModifier |  | Modifier | Category: const |
| State | AccessOwner |  | Country | Category: const |
| State | AccessPopsList |  | PopList | Category: const |
| State | AccessStateRegion |  | StateRegion | Category: const |
| State | AccessSubsistenceBuilding |  | Building | Category: const |
| State | GetBuilding | 1. BuildingType | Building | Category: nonconst |
| State | GetColonyCompany |  | Company | Category: nonconst |
| State | GetController |  | Country | Category: nonconst |
| State | GetCountry |  | Country | Category: nonconst |
| State | GetEnemyWithHighestOccupation |  | Country | Category: nonconst |
| State | GetFoodSecurity |  | FoodSecurity | Category: nonconst |
| State | GetMarket |  | Market | Category: nonconst |
| State | GetMassMigrationCulture |  | Culture | Category: nonconst |
| State | GetMassMigrationOriginCountry |  | Country | Category: nonconst |
| State | GetModifier |  | Modifier | Category: nonconst |
| State | GetNextColonyProvince |  | Province | Category: nonconst |
| State | GetOccupant |  | Country | Category: nonconst |
| State | GetOwner |  | Country | Category: nonconst |
| State | GetStateRegion |  | StateRegion | Category: nonconst |
| State | GetSubsistenceBuilding |  | Building | Category: nonconst |
| State | GetTheater | 1. Country | Theater | Category: nonconst |
| State | MakeScope |  | Scope |  |
| StateGoods | GetGoods |  | Goods | Category: nonconst |
| StateGoods | GetState |  | State | Category: nonconst |
| StateGoods | MakeScope |  | Scope |  |
| StateInfraMarker | GetState |  | State | Category: nonconst |
| StateMarker | GetGoods |  | Goods | Category: nonconst |
| StateMarker | GetState |  | State | Category: nonconst |
| StateNameChangePopup | GetState |  | State | Category: nonconst |
| StatePopulationPanel | AccessState |  | State | Category: const |
| StatePopulationPanel | GetState |  | State | Category: nonconst |
| StateRegion | AccessLargestStateOwner |  | Country | Category: const |
| StateRegion | AccessStrategicRegion |  | StrategicRegion | Category: const |
| StateRegion | GetLargestStateInRegion |  | State | Category: nonconst |
| StateRegion | GetLargestStateOwner |  | Country | Category: nonconst |
| StateRegion | GetStrategicRegion |  | StrategicRegion | Category: nonconst |
| StateRegion | MakeScope |  | Scope |  |
| StateTrait | MakeScope |  | Scope |  |
| StatesPanel | AccessBuilding | 1. BuildingType | Building | Category: const |
| StatesPanel | AccessState |  | State | Category: const |
| StatesPanel | AccessSubsistenceBuilding |  | Building | Category: const |
| StatesPanel | GetState |  | State | Category: nonconst |
| StrategicRegion | AccessFirstDiplomaticPlay |  | DiplomaticPlay | Category: const |
| StrategicRegion | GetFirstDiplomaticPlay |  | DiplomaticPlay | Category: nonconst |
| StrategicRegion | GetInterest | 1. Unknown | Interest | Category: nonconst |
| StrategicRegion | MakeScope |  | Scope |  |
| StrategicRegionMarker | AccessStrategicRegion |  | StrategicRegion | Category: const |
| StrategicRegionMarker | GetStrategicRegion |  | StrategicRegion | Category: nonconst |
| SubjectType | GetDiplomaticActionType |  | DiplomaticActionType | Category: nonconst |
| SubjectType | GetHigherAutonomySubjectType | 1. Country | SubjectType | Category: nonconst |
| SubjectType | GetLowerAutonomySubjectType | 1. Country | SubjectType | Category: nonconst |
| SupplyNetworkEntry | GetCountry |  | Country | Category: nonconst |
| Sway | GetSwayOffer |  | SwayOffer | Category: nonconst |
| Sway | MakeScope |  | Scope |  |
| SwayCountryPanel | AccessCountry |  | Country | Category: const |
| SwayCountryPanel | AccessDiplomaticPlay |  | DiplomaticPlay | Category: const |
| SwayCountryPanel | AccessOtherCountry |  | Country | Category: const |
| SwayCountryPanel | GetCountry |  | Country | Category: nonconst |
| SwayCountryPanel | GetDiplomaticPlay |  | DiplomaticPlay | Category: nonconst |
| SwayCountryPanel | GetOtherCountry |  | Country | Category: nonconst |
| SwayOffer | GetCountryForFlag | 1. Country | Country | Category: nonconst |
| SwayOffer | GetDiplomaticActionType |  | DiplomaticActionType | Category: nonconst |
| SwayOffer | GetOfferedWarGoal |  | WarGoalDraft | Category: nonconst |
| SwayOffer | GetState |  | State | Category: nonconst |
| SwayOffer | GetSwayOfferType |  | SwayOfferType | Category: nonconst |
| SwayOffer | GetThirdPartyCountry |  | Country | Category: nonconst |
| TechTreeItem | GetTechnology |  | Technology | Category: nonconst |
| TechTreeLine | GetSourceTech |  | Technology | Category: nonconst |
| TechTreeLine | GetTargetTech |  | Technology | Category: nonconst |
| Technology | GetEra |  | Era | Category: nonconst |
| Technology | MakeScope |  | Scope |  |
| Theater | GetOwner |  | Country | Category: nonconst |
| Theater | MakeScope |  | Scope |  |
| Theme | GetCategory |  | ThemeCategory | Category: nonconst |
| Theme | GetRequiredDlc |  | Dlc | Category: nonconst |
| ThemeBulkSelectionGroup | GetRequiredDlc |  | Dlc | Category: nonconst |
| ThemeCategory | GetSelectedSingleChoiceTheme |  | Theme | Category: nonconst |
| ThemeWindow | GetDayNightEnableManualTime |  | PdxSetting | Category: nonconst |
| ThemeWindow | GetDayNightEnableSyncLocalTime |  | PdxSetting | Category: nonconst |
| ThemeWindow | GetDayNightEnabled |  | PdxSetting | Category: nonconst |
| ThemeWindow | GetDayNightManualTimeHour |  | PdxSetting | Category: nonconst |
| ThemeWindow | GetDayNightSpeed |  | PdxSetting | Category: nonconst |
| ThemeWindow | GetDayNightSunHours |  | PdxSetting | Category: nonconst |
| ThemeWindow | GetDayNightTimeOfSunrise |  | PdxSetting | Category: nonconst |
| ThemeWindow | GetSelectedBulkSelectionGroup |  | ThemeBulkSelectionGroup | Category: nonconst |
| TickTaskDetailsView | GetTickTask |  | TickTaskData | Category: nonconst |
| TickTaskGraphItem | GetTickTask |  | TickTaskData | Category: nonconst |
| TimeKeeper | GetCurrentDate |  | Date | Category: nonconst |
| ToastMessageHandler | GetMessageItem |  | PlayerMessageItem | Category: nonconst |
| TopScope | AddList | 1. Unknown 2. Unknown | TopScope |  |
| TopScope | AddScope | 1. Unknown 2. Unknown | TopScope |  |
| TopScope | GetLocalVariable | 1. Unknown | Scope | Category: nonconst |
| TopScope | GetRootScope |  | Scope | Category: nonconst |
| TopScope | SetRoot | 1. Scope | TopScope |  |
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
| TopScope | sCU | 1. CString | Culture |  |
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
| TransferFormationPopup | GetLeftFormation |  | MilitaryFormation | Category: nonconst |
| TransferFormationPopup | GetLeftStagedFormation |  | StagedFormation | Category: nonconst |
| TransferFormationPopup | GetRightFormation |  | MilitaryFormation | Category: nonconst |
| TransferFormationPopup | GetRightStagedFormation |  | StagedFormation | Category: nonconst |
| Treaty | GetBindingPeriodEndGameDate |  | Date | Category: nonconst |
| Treaty | GetEnforcedOnCountry |  | Country | Category: nonconst |
| Treaty | GetEnforcerCountry |  | Country | Category: nonconst |
| Treaty | GetFirstCountry |  | Country | Category: nonconst |
| Treaty | GetLeftCountry |  | Country | Category: nonconst |
| Treaty | GetOtherCountry | 1. Country | Country | Category: nonconst |
| Treaty | GetRightCountry |  | Country | Category: nonconst |
| Treaty | GetSecondCountry |  | Country | Category: nonconst |
| Treaty | GetShippingLaneOf | 1. Unknown | ShippingLane | Category: nonconst |
| Treaty | GetStartGameDate |  | Date | Category: nonconst |
| Treaty | MakeScope |  | Scope |  |
| TreatyDraft | GetAmendedTreaty |  | Treaty | Category: nonconst |
| TreatyDraft | GetFirstCountry |  | Country | Category: nonconst |
| TreatyDraft | GetLeftCountry |  | Country | Category: nonconst |
| TreatyDraft | GetOtherCountry | 1. Country | Country | Category: nonconst |
| TreatyDraft | GetRightCountry |  | Country | Category: nonconst |
| TreatyDraft | GetSecondCountry |  | Country | Category: nonconst |
| TreatyDraftPanel | GetDraft |  | TreatyDraft | Category: nonconst |
| TreatyPanel | GetTreaty |  | Treaty | Category: nonconst |
| Truce | AccessFirstCountry |  | Country | Category: const |
| Truce | AccessSecondCountry |  | Country | Category: const |
| Truce | GetFirstCountry |  | Country | Category: nonconst |
| Truce | GetSecondCountry |  | Country | Category: nonconst |
| VariableEntry | AccessScopeEditor |  | ScopeObjectEditor | Category: const |
| VariableInspectorEntry | AccessVariable |  | VariableInspectorVariable | Category: const |
| VariableInspectorPlugin | AccessSetupVariable |  | VariableInspectorVariable | Category: const |
| VariableInspectorVariable | AccessScopeEditor |  | ScopeObjectEditor | Category: const |
| VariableListEntry | AccessScopeEditor |  | ScopeObjectEditor | Category: const |
| VariableListInspectorPlugin | AccessListStore |  | VariableListStore | Category: const |
| VariableListStore | AccessNewEntryEditor |  | ScopeObjectEditor | Category: const |
| VariableStore | AccessNewEntryEditor |  | ScopeObjectEditor | Category: const |
| VfsMountPathBrowser | GetFirstSelectedNode |  | VfsMountPathBrowserEntryNode | Category: nonconst |
| ViewerEntity | State |  | ViewerEntityState |  |
| War | AccessAttackerLeaderParticipant |  | WarParticipant | Category: const |
| War | AccessDefenderLeaderParticipant |  | WarParticipant | Category: const |
| War | AccessDiplomaticPlay |  | DiplomaticPlay | Category: const |
| War | AccessLeftSideLeaderParticipant |  | WarParticipant | Category: const |
| War | AccessParticipant | 1. Country | WarParticipant | Category: const |
| War | AccessRightSideLeaderParticipant |  | WarParticipant | Category: const |
| War | GetAttackerLeader |  | Country | Category: nonconst |
| War | GetCountryProposingPeace |  | Country | Category: nonconst |
| War | GetDefenderLeader |  | Country | Category: nonconst |
| War | GetDiplomaticPlay |  | DiplomaticPlay | Category: nonconst |
| War | GetLeaderOfOppositeSide | 1. Country | Country | Category: nonconst |
| War | MakeScope |  | Scope |  |
| WarGoal | GetArticleDraft |  | ArticleDraft | Category: nonconst |
| WarGoal | GetArticleType |  | ArticleType | Category: nonconst |
| WarGoal | GetCountryCreation |  | CountryCreation | Category: nonconst |
| WarGoal | GetCountryFormation |  | CountryFormation | Category: nonconst |
| WarGoal | GetCreator |  | Country | Category: nonconst |
| WarGoal | GetDiplomaticPlay |  | DiplomaticPlay | Category: nonconst |
| WarGoal | GetHolder |  | Country | Category: nonconst |
| WarGoal | GetTarget |  | Country | Category: nonconst |
| WarGoal | GetTargetState |  | State | Category: nonconst |
| WarGoal | GetType |  | WarGoalType | Category: nonconst |
| WarGoal | GetWar |  | War | Category: nonconst |
| WarGoal | GetWarGoalStakeholder |  | Country | Category: nonconst |
| WarGoal | MakeScope |  | Scope |  |
| WarGoalDraft | GetArticleDraft |  | ArticleDraft | Category: nonconst |
| WarGoalDraft | GetArticleType |  | ArticleType | Category: nonconst |
| WarGoalDraft | GetCountryCreation |  | CountryCreation | Category: nonconst |
| WarGoalDraft | GetCountryFormation |  | CountryFormation | Category: nonconst |
| WarGoalDraft | GetCreator |  | Country | Category: nonconst |
| WarGoalDraft | GetDiplomaticPlay |  | DiplomaticPlay | Category: nonconst |
| WarGoalDraft | GetHolder |  | Country | Category: nonconst |
| WarGoalDraft | GetTarget |  | Country | Category: nonconst |
| WarGoalDraft | GetTargetRegion |  | StrategicRegion | Category: nonconst |
| WarGoalDraft | GetTargetState |  | State | Category: nonconst |
| WarGoalDraft | GetType |  | WarGoalType | Category: nonconst |
| WarGoalDraft | GetWarGoalStakeholder |  | Country | Category: nonconst |
| WarGoalMarker | AccessWarGoal |  | WarGoal | Category: const |
| WarGoalMarker | GetWarGoal |  | WarGoal | Category: nonconst |
| WarGoalPanelPair | AccessPanel |  | WarPanel | Category: const |
| WarGoalPanelPair | AccessWarGoal |  | WarGoal | Category: const |
| WarGoalPanelPair | GetWar |  | War | Category: nonconst |
| WarGoalPanelPair | GetWarGoal |  | WarGoal | Category: nonconst |
| WarGoalType | MakeScope |  | Scope |  |
| WarPanel | AccessWar |  | War | Category: const |
| WarPanel | GetLeftLeader |  | Country | Category: nonconst |
| WarPanel | GetRightLeader |  | Country | Category: nonconst |
| WarPanel | GetWar |  | War | Category: nonconst |
| WarParticipant | AccessCountry |  | Country | Category: const |
| WarParticipant | GetCountry |  | Country | Category: nonconst |
| WarParticipant | GetWar |  | War | Category: nonconst |

## References
1. [↑](#cite_ref-1) More precisely, "UpperCamelCase" or "PascalCase"

---

- To update the tables, see Module:GUI script/Functions and Module:GUI script/Promotes

**[Modding](./Modding.md)**

| Documentation | [Defines](./Defines.md) • [Effects](./Effect.md) • [Event targets](./Event target.md) • [Scopes](./Scope.md) • [Triggers](./Trigger.md)  [Macros](./Macro.md) • [Modifier types](./Modifier types.md) • [On actions](https://vic3.paradoxwikis.com/On_actions) • [Script value](./Script value.md) • [Variables](./Variable.md) |

| Scripted content | [Decisions](./Decision modding.md) • [Events](./Event modding.md) • [History](./History modding.md) • [Journal](./Journal modding.md) • [Modifiers](./Modifier modding.md) • Objectives • [Scripted gui](./Scripted gui.md) |

| Scripted types | [Buildings](./Building modding.md) • [Characters](./Character modding.md) • Concepts • [Countries](./Country modding.md) • [Culture](./Culture modding.md) • [Decrees](./Decree modding.md) • [Diplomacy](./Diplomacy modding.md) • [Goods](./Goods modding.md) • [Institutions](./Institution modding.md) • [Interest groups](./Interest group modding.md) • [Laws](./Law modding.md) • Parties • [Pops](./Pop modding.md) • [Power blocs](./Power bloc modding.md) • [Religion](./Religion modding.md) • Subject types • [Technology](./Technology modding.md) • [Treaties](./Treaty modding.md) • [War goals](./War goal modding.md) |

| Map | [Map](./Map modding.md) • [Geographic regions](./Geographic region modding.md) • [States](./State modding.md) |

| Interface | [Interface](./Interface modding.md) • GUI script • [Localization](./Localization.md) • [Customizable localization](./Localization.md#Customizable_Localization) • [Script localization](./Script localization.md) |

| Graphics | [3D Models](./Model modding.md) • [Event images](https://vic3.paradoxwikis.com/Event_images) • [Graphical Assets](./Graphical asset modding.md) • Fonts • [Flags](./Flag modding.md) |

| Audio | Music • [Sound](./Sound modding.md) |

| Other | [AI](./AI modding.md) • [Console commands](./Console commands.md) • [Checksum](https://vic3.paradoxwikis.com/Checksum) • [Mods](./Mod.md) • [Mod compatibility](./Mod compatibility.md) • [Mod structure](./Mod structure.md) • [Scripted tests](./Scripted test.md) • [Troubleshooting](./Troubleshooting.md) |

| Guides | [Mod translation](./Mod translation.md) • [New country modding](./New country modding.md) • [Save-game editing](./Save-game editing.md) • [State modding guide](./State modding guide.md) |
