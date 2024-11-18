"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[11034],{416049:(e,t,i)=>{i.d(t,{Z:()=>s});let s=2},673463:(e,t,i)=>{i.d(t,{j:()=>a});let s={á:"a",à:"a",â:"a",ä:"a",ã:"a",å:"a",æ:"a",ç:"c",é:"e",è:"e",ê:"e",ë:"e",í:"i",ì:"i",î:"i",ï:"i",ñ:"n",ó:"o",ò:"o",ô:"o",ö:"o",õ:"o",ø:"o",œ:"o",ß:"s",ú:"u",ù:"u",û:"u",ü:"u"},r=e=>{if(!e)return"";let t="";for(let i=0;i<e.length;i+=1)t+=s[e.charAt(i)]||e.charAt(i);return t},o=(e,t)=>{let i=t.split(" "),s=e.split(" "),o=0;for(let e=0;e<s.length;e+=1)(r(s[e]).includes(i[o])||s[e].includes(i[o]))&&(o+=1);return o===i.length},a=(e,t,i="name")=>{let s=t.toLowerCase();return e.filter(e=>o(e[i].toLowerCase(),s))}},511034:(e,t,i)=>{i.d(t,{xH:()=>V,uC:()=>Q,sR:()=>K,DR:()=>G});var s=i(667294),r=i(545007),o=i(172045),a=i(883119),n=i(214877),l=i(372085),d=i(140017),c=i(406893),h=i(340523),_=i(5859),u=i(827625),g=i(757640),p=i(416049),b=i(149722),x=i(198705),m=i(199677),f=i(604625),y=i(494125),v=i(785893);function S({boardPickerSuggestedBoards:e,index:t,item:i,pinId:s,saveSessionId:r,surfaceOriginViewParameter:o,useLegoLayout:l}){let{logContextEvent:d}=(0,n.v)();return(0,y.Z)(()=>{"shortlist"===i.category&&d({aux_data:{board_picker_surface_origin:o,board_picker_suggested_boards:e,pin_id:s,save_session_id:r},event_type:13,view_type:21,view_parameter:3988})}),(0,v.jsx)(a.xu,{marginTop:t>0?2:1,paddingX:l?4:3,paddingY:1,children:(0,v.jsx)(a.xv,{size:l?"100":"200",children:i.title})})}var j=i(481177),A=i(267508);function B(e,t,i){var s;return(t="symbol"==typeof(s=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?s:String(s))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class w extends s.Component{constructor(...e){super(...e),B(this,"state",{hovered:!1}),B(this,"handleMouseEnter",()=>{this.setState({hovered:!0})}),B(this,"handleMouseLeave",()=>{this.setState({hovered:!1})}),B(this,"handleTouch",()=>{let{board:e,onClick:t}=this.props;t(e)}),B(this,"handleButtonClick",({event:e})=>{let{onButtonClick:t}=this.props;this.handleTouch(),t&&t(),e.stopPropagation()}),B(this,"tapAreaRef",(0,s.createRef)())}componentDidMount(){let{board:e,logContextEvent:t,pinId:i,saveSessionId:s,surfaceOriginViewParameter:r}=this.props;"boardless"===e.type&&t({aux_data:{board_picker_surface_origin:r,pin_id:i,save_session_id:s},event_type:13,view_parameter:3990,view_type:21})}focus(){let e=this.tapAreaRef.current;e&&e.focus()}render(){let{hovered:e}=this.state,{accessibilityLabelText:t,board:i,buttonText:s,displayAlreadySavedMsg:r,i18n:o,isSectionOpen:n,shouldOpenSections:l,showSaveToProfile:d,showFlyoutSaveButton:c,useLegoLayout:h}=this.props,_=!!i.section_count&&i.section_count>0,{images:u,image_cover_url:g}=i||{},p=!g?.includes("custom")&&u&&u["75x75"]&&u["75x75"][u["75x75"].length-1].url||g;return(0,v.jsx)(a.xu,{"data-test-id":_?"boardWithSection":"boardWithoutSection",children:(0,v.jsx)(a.iP,{ref:this.tapAreaRef,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onTap:this.handleTouch,children:(0,v.jsxs)(a.xu,{alignItems:"center",color:e?"secondary":"default","data-test-id":`board-row-${i.name||""}`,display:"flex",height:h?64:52,marginBottom:h?0:1,marginEnd:h?2:3,marginStart:h?2:3,marginTop:h?0:1,padding:h?2:0,rounding:3,children:[(0,v.jsxs)(a.xu,{"aria-hidden":"true",flex:"none",height:h?48:36,marginBottom:h?0:1,marginEnd:h?2:3,marginStart:h?0:2,marginTop:h?0:1,overflow:"hidden",width:h?48:36,children:[d&&"boardless"===i.type&&(0,v.jsx)(a.zd,{height:"100%",rounding:2,width:"100%",children:(0,v.jsx)(a.xu,{alignItems:"center",color:e?"default":"secondary",display:"flex",height:"100%",justifyContent:"center",width:"100%",children:(0,v.jsx)(a.xu,{children:(0,v.jsx)(a.JO,{accessibilityLabel:this.props.i18n.bt("Save to profile icon", "Save to profile icon", "BoardRow.TapArea.Icon", undefined, true),color:"default",icon:"history",size:24})})})}),p&&!l&&(0,v.jsx)(a.zd,{height:h?48:36,rounding:2,wash:!0,width:h?48:36,children:(0,v.jsx)(a.Ee,{alt:"",fit:"cover",naturalHeight:h?48:36,naturalWidth:h?48:36,src:p})}),p&&l?(0,v.jsx)(a.zd,{height:h?48:36,rounding:2,wash:!0,width:h?48:36,children:(0,v.jsx)(a.Ee,{alt:"",fit:"cover",naturalHeight:h?48:36,naturalWidth:h?48:36,src:p})}):(0,v.jsx)(a.zd,{height:h?48:36,rounding:2,width:h?48:36,children:(0,v.jsx)(a.xu,{color:l?"secondary":"transparent",height:"100%",width:"100%"})})]}),(0,v.jsxs)(a.xu,{flex:"grow",marginStart:h?0:1,overflow:"hidden",paddingY:1,children:[(0,v.jsx)(a.xv,{lineClamp:1,weight:l||!l?"bold":"normal",children:i.name}),r&&(0,v.jsx)(a.xu,{marginTop:1,children:(0,v.jsx)(a.xv,{align:"start",color:"default",size:"100",children:o.bt("Saved here already", "Saved here already", "BoardFlyout.AlreadySaved.Message", undefined, true)})})]}),i&&(!e||e&&_&&!n)?(0,v.jsx)(a.xu,{children:(0,v.jsx)(A.Z,{board:i,showCollaborativeIcon:!!i.is_collaborative,showPrivateIcon:i.privacy===j.Z.BoardPrivacy.SECRET,showProtectedIcon:i.privacy===j.Z.BoardPrivacy.PROTECTED,showSectionsIcon:_&&l,useLegoLayout:h})}):null,e&&(0===i.section_count||!l)&&c&&(0,v.jsx)(a.xu,{flex:"none",marginEnd:h?0:2,children:(0,v.jsx)(a.zx,{accessibilityLabel:t||this.props.i18n.bt("Save button", "save button", "boardRow.saveButton", undefined, true),color:"red",onClick:this.handleButtonClick,text:s||this.props.i18n.bt("Save", "Save", "save button", undefined, true)})})]})})})}}B(w,"defaultProps",{shouldOpenSections:!0,showFlyoutSaveButton:!0});let P=e=>{let{logContextEvent:t}=(0,n.v)(),i=(0,d.ZP)();return(0,v.jsx)(w,{...e,i18n:i,logContextEvent:t})};var C=i(785059),z=i(319510);function L(e,t,i){var s;return(t="symbol"==typeof(s=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?s:String(s))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class k extends s.Component{constructor(...e){super(...e),L(this,"state",{hovered:!1}),L(this,"handleMouseEnter",()=>{this.setState({hovered:!0})}),L(this,"handleMouseLeave",()=>{this.setState({hovered:!1})}),L(this,"handleTouch",()=>{let{board:e,onClick:t,section:i}=this.props;t(i,e)}),L(this,"handleButtonClick",({event:e})=>{let{onButtonClick:t}=this.props;this.handleTouch(),t&&t(),e.stopPropagation()}),L(this,"tapAreaRef",(0,s.createRef)())}focus(){let e=this.tapAreaRef.current;e&&e.focus()}render(){let{hovered:e}=this.state,{buttonText:t,section:i,showSectionSaveButton:s,useLegoLayout:r}=this.props;return(0,v.jsx)(a.iP,{ref:this.tapAreaRef,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onTap:this.handleTouch,children:(0,v.jsxs)(a.xu,{alignItems:"center",color:e?"secondary":"default",dangerouslySetInlineStyle:{__style:r?{}:{marginLeft:53,marginRight:11}},"data-test-id":`section-row-${i.title||""}`,display:"flex",height:r?64:52,marginEnd:r?2:0,marginStart:r?2:0,marginTop:r?0:1,padding:r?2:0,rounding:3,children:[r&&!!i.preview_pins?.length&&(0,v.jsx)(z.Z,{image_url:i.preview_pins[0].image_square_url??"",naturalHeight:i.preview_pins[0].image_square_size_pixels?.height??1,naturalWidth:i.preview_pins[0].image_square_size_pixels?.width??1}),(0,v.jsx)(a.xu,{flex:"grow",marginStart:r?0:4,paddingY:1,children:(0,v.jsx)(a.xv,{lineClamp:1,weight:r?"bold":"normal",children:i.title})}),e&&s&&(0,v.jsx)(a.xu,{flex:"none",marginEnd:r?0:2,children:(0,v.jsx)(a.zx,{accessibilityLabel:"save button",color:"red",onClick:this.handleButtonClick,text:t||this.props.i18n.bt("Save", "Save", "save button", undefined, true)})})]})})}}function T(e){let t=(0,d.ZP)();return(0,v.jsx)(k,{...e,i18n:t})}function I(e){let t=(0,d.ZP)(),{board:i,buttonText:s,onClick:r,onButtonClick:o,showSectionSaveButton:n,useLegoLayout:l}=e,c=(0,C.Z)(),h=(0,b.Z)(),_=(0,m.lJ)(h,c),u=(0,g.Z)({name:"BoardSectionsRepinResource",options:{board_id:i.id,orbac_subject_id:_},noCache:!0}),p=u&&u.data||[];return(0,v.jsxs)(a.xu,{children:[!u.isLoaded&&(0,v.jsx)(a.kC,{alignItems:"center",height:"100%",justifyContent:"center",minHeight:200,width:"100%",children:(0,v.jsx)(a.$j,{accessibilityLabel:t.bt("loading board picker", "loading board picker", "accessibility text for loading spinner", undefined, true),show:!0})}),u.isLoaded&&(0,v.jsxs)(a.xu,{children:[l&&(0,v.jsx)(a.xu,{marginStart:4,marginTop:2,paddingY:1,children:(0,v.jsx)(a.xv,{size:"100",children:t.bt("Section", "Section", "PinBetterSave.BoardFlyout.SectionPlaceholderText", undefined, true)})}),p.map(e=>(0,v.jsx)(T,{board:i,buttonText:s,onButtonClick:o,onClick:r,section:e,showSectionSaveButton:n,useLegoLayout:l},e.id))]})]})}function R({onClick:e,title:t,showIcon:i}){let r=(0,d.ZP)(),[o,n]=(0,s.useState)(!1);return(0,v.jsx)(a.iP,{dataTestId:"board-suggestion-row-button",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),onTap:()=>{e({title:t})},children:(0,v.jsxs)(a.xu,{alignItems:"center",color:o?"secondary":"default",display:"flex",height:i?64:52,marginBottom:1,marginEnd:3,marginStart:3,rounding:3,children:[(0,v.jsx)(a.xu,{flex:"none",height:i?48:36,marginBottom:1,marginEnd:3,marginStart:i?1:2,marginTop:1,overflow:"hidden",rounding:i?2:1,width:i?48:36,children:(0,v.jsx)(a.xu,{alignItems:i?"center":void 0,color:"secondary",display:i?"flex":void 0,height:"100%",justifyContent:i?"center":void 0,width:"100%",children:i&&(0,v.jsx)(a.JO,{accessibilityLabel:r.bt("Create board icon", "Create board icon", "BoardSuggestionRow.AccessibilityLabel.Text", undefined, true),color:"default",icon:"add",size:20})})}),(0,v.jsx)(a.xu,{flex:"grow",paddingY:1,children:(0,v.jsx)(a.xv,{lineClamp:1,weight:"bold",children:t})}),o&&(0,v.jsx)(a.xu,{marginEnd:2,children:(0,v.jsx)(a.zx,{accessibilityLabel:"create button",color:"red",text:r.bt("Create", "Create", "create button to create a new board", undefined, true)})})]})})}function E(e){let t=(0,d.ZP)(),{suggestionsResource:i,onClick:r,pinBuilderSuggestions:o,inWebRepinFlowExp:n}=e,l=o||i&&i.data||[],c=(0,v.jsxs)(s.Fragment,{children:[n&&(0,v.jsx)(a.xu,{marginStart:4,marginTop:2,paddingY:1,children:(0,v.jsx)(a.xv,{size:"100",children:t.bt("Suggestions", "Suggestions", "PinBetterSave.BoardFlyout.SectionPlaceholderText", undefined, true)})}),l.map((e,t)=>(0,v.jsx)(R,{onClick:r,showIcon:n,title:e.title},t))]});return(0,v.jsx)(s.Fragment,{children:l?c:(0,v.jsx)(a.kC,{alignItems:"center",height:"100%",justifyContent:"center",minHeight:200,width:"100%",children:(0,v.jsx)(a.$j,{accessibilityLabel:t.bt("loading board suggestions", "loading board suggestions", "accessibility text for loading spinner", undefined, true),show:!0})})})}function O({isBoardCreate:e,onCreateBoardClick:t,useLegoLayout:i}){let r=(0,d.ZP)(),[o,n]=(0,s.useState)(!1);return(0,v.jsx)(a.xu,{"data-test-id":"create-board",display:"flex",height:"100%",children:(0,v.jsx)(a.iP,{dataTestId:e?"create-board-button":"create-section-button",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),onTap:t,rounding:2,children:(0,v.jsxs)(a.xu,{alignItems:"center",color:o?"secondary":"default",display:"flex",height:"100%",padding:i?4:2,width:"100%",children:[(0,v.jsx)(a.xu,{color:i?"secondary":"transparent",dangerouslySetInlineStyle:{__style:i?{padding:"14px"}:{}},marginEnd:i?2:5,marginStart:i?0:4,rounding:i?2:0,children:(0,v.jsx)(a.JO,{accessibilityLabel:"",color:i?"default":"error",icon:i?"add":"add-circle",size:i?20:28})}),e?(0,v.jsx)(a.xv,{align:"center",lineClamp:1,weight:"bold",children:r.bt("Create board", "Create board", " - ", undefined, true)}):(0,v.jsx)(a.xv,{align:"center",lineClamp:1,weight:"bold",children:r.bt("Create section", "Create section", " - ", undefined, true)})]})})})}L(k,"defaultProps",{showSectionSaveButton:!0});var Z=i(673463),F=i(796534);function N(e,t,i){var s;return(t="symbol"==typeof(s=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?s:String(s))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let D=e=>e?498:439,H=e=>e?80:52,M="allBoards",J="shortlist",$=`
.BoardsSlideLeft {
  animation: boardFlyoutSlideLeft 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}

.BoardsSlideRight {
  animation: boardFlyoutSlideRight 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}

.BoardsSlideLeftRTL {
  animation: boardFlyoutSlideLeftRTL 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}

.BoardsSlideRightRTL {
  animation: boardFlyoutSlideRightRTL 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}

@keyframes boardFlyoutSlideLeft {
  from {
    margin-left: 0%;
  }

  to {
    margin-left: -100%;
  }
}

@keyframes boardFlyoutSlideRight {
  from {
    margin-left: -100%;
  }

  to {
    margin-left: 0%;
  }
}

@keyframes boardFlyoutSlideLeftRTL {
  from {
    margin-right: -100%;
  }

  to {
    margin-right: 0%;
  }
}

@keyframes boardFlyoutSlideRightRTL {
  from {
    margin-right: 0%;
  }

  to {
    margin-right: -100%;
  }
}
`;class U extends s.PureComponent{constructor(...e){super(...e),N(this,"state",{boardSuggestions:[],isSectionOpen:null,selectedBoardId:"",selectedBoardCategory:"",searchQuery:"",searchBoxFocused:!0,saveSessionId:(0,o.Z)()}),N(this,"handleScroll",()=>{let{_container:e}=this,{logContextEvent:t}=this.props;t({event_type:110,component:13282,view_type:21})}),N(this,"refHandler",e=>{this.removeEventListeners(),e&&e.addEventListener("scroll",this.handleScroll,{once:!0}),this._container=e}),N(this,"getItems",e=>{let{boardResource:t,changeBoardModal:i,showSaveToProfile:s}=this.props;if(!t?.data)return[];let{all_boards:r}=t.data,o=r.length>=3&&s,a=[{boardId:"",image_cover_url:"",is_collaborative:!1,isOpen:!1,name:this.props.i18n.bt("Profile", "Profile", "pinBetterSave.initialSelection.boardlessPinsOption", undefined, true),privacy:"public",section_count:0,type:"boardless",url:"/me/"}],n=this.getAllBoards().map((e,t)=>this.mapBoards(e,M,t)),l=this.getShortlist().map((e,t)=>this.mapBoards(e,J,t)),d=!o&&s&&!i&&r.length>=3?[...a,...l.slice(0,2)]:l,{searchQuery:c}=this.state;return c.length>=p.Z?[...(0,Z.j)(n,c)]:[...r.length<3&&s?[{type:"header",title:this.props.i18n.bt("Quick save and organise later", "Quick save and organize later", "BoardFlyout.inPinBetterSaveAndLessThanThreeBoards.boardlessPinsTitle", undefined, true)},...a]:[],...r.length>=3&&o?a:[],...r.length>=3&&d&&d.length?[{category:J,type:"header",title:e?this.props.i18n.bt("Top choices", "Top choices", "PinBetterSave.BoardFlyout.TopChoicesSectionTitle", undefined, true):this.props.i18n.bt("Top board suggestions", "Top board suggestions", "Header for top suggesions in board picker", undefined, true)},...d]:[],...r.length>0?[{type:"header",title:r.length<3&&s?this.props.i18n.bt("Save to board", "Save to board", "BoardFlyout.inPinBetterSaveAndLessThanThreeBoards.saveToBoardTitle", undefined, true):this.props.i18n.bt("All boards", "All boards", "Header for all boards in board picker", undefined, true)},...n]:[]]}),N(this,"mapBoards",(e,t,i)=>{let{selectedBoardId:s,selectedBoardCategory:r}=this.state,o=e.id===s&&t===r;return{...e,category:t,isOpen:o,gridIndex:i}}),N(this,"handleBack",()=>{let{setBoardWithSection:e}=this.props;this.setState({isSectionOpen:!1,selectedBoardId:"",selectedBoardCategory:""}),e&&e(null)}),N(this,"handleSectionClick",(e,t)=>{let{onItemChosen:i,logContextEvent:s,pinId:r,surfaceOriginViewParameter:o}=this.props,{saveSessionId:a,searchQuery:n}=this.state;s({event_type:101,component:13282,element:36,object_id_str:t.id,view_type:91,view_parameter:3133,aux_data:{board_id:t.id,board_picker_surface_origin:o,board_picker_suggested_boards:JSON.stringify(this.getTopChoiceBoardsAuxData()),board_title_suggestions:JSON.stringify(this.getBoardTitleSuggestionsAuxData()),board_index:t.gridIndex,is_profile_save:!1,pin_id:r,save_session_id:a,search_query:n,section_id:e.id}}),i({boardId:t.id,url:e.slug?`${t.url}${e.slug}/`:t.url,sectionId:e.id,title:e.title||"",type:e.type,imageCoverUrl:t.image_cover_url,ownerUsername:t.owner&&t.owner.username||""})}),N(this,"getPinBuilderSuggestions",async()=>{let{logContextEvent:e,pinId:t,surfaceOriginViewParameter:i}=this.props,{saveSessionId:s}=this.state;if(t){let r=await (0,l.Z)({url:`/v3/pins/${t}/board_title_suggestions/`,data:{pin_id:t}});if(r.resource_response.data){let o=r.resource_response.data.map(e=>({title:e.title,metadata:JSON.parse(e?.metadata??"{}")}))||[];this.setState({boardSuggestions:o}),e({aux_data:{board_picker_surface_origin:i,board_title_suggestions:JSON.stringify(this.getBoardTitleSuggestionsAuxData()),pin_id:t,save_session_id:s},component:13282,event_type:13,view_parameter:3992,view_type:21})}}}),N(this,"getAllBoards",()=>{let{boardResource:e,advertiser_id:t}=this.props;return(e?.data?.all_boards||[]).filter(e=>!t||"secret"!==e.privacy)}),N(this,"getShortlist",()=>{let{suggestedBoardsShortListResource:e,displayShortlistMostRecentBoard:t,boardResource:i}=this.props,s=i?.data?.boards_shortlist||[];return t?s:e?.data||[]}),N(this,"getBoards",e=>e===M?this.getAllBoards():e===J?this.getShortlist():[]),N(this,"getSuggestedBoardsIds",()=>{let{showSaveToProfile:e}=this.props,t=(e?this.getShortlist().slice(0,2):this.getShortlist()).map(e=>e.id);return e&&t.unshift("PROFILE_PINS"),t}),N(this,"getTopChoiceBoardsAuxData",()=>{let{showSaveToProfile:e}=this.props;return(e?this.getShortlist().slice(0,2):[...this.getShortlist()]).map(e=>({board_title_id:String(e.id),board_title_kind:JSON.parse(e.recommendation_reason??"{}").reason,board_title:String(e.name),board_title_score:JSON.parse(e.recommendation_reason??"{}").score}))}),N(this,"getBoardTitleSuggestionsAuxData",()=>{let{boardSuggestions:e}=this.state;return e.map(e=>({board_title_id:String(e.metadata.value),board_title_kind:String(e.metadata.kind),board_title:String(e.title),board_title_score:String(e.metadata.confidence)}))}),N(this,"handleBoardWithSectionsClick",e=>{let{logContextEvent:t,pinId:i,setBoardWithSection:s,surfaceOriginViewParameter:r}=this.props,{saveSessionId:o,searchQuery:a,selectedBoardId:n,selectedBoardCategory:l}=this.state,d=this.getBoards(e.category).find(({id:t})=>t===e.id),c=n===e.id&&l===e.category;t({event_type:13,component:13282,element:36,object_id_str:e.id,view_type:275,aux_data:{board_id:e.id,board_picker_surface_origin:r,board_picker_suggested_boards:JSON.stringify(this.getTopChoiceBoardsAuxData()),board_title_suggestions:JSON.stringify(this.getBoardTitleSuggestionsAuxData()),board_index:e.gridIndex,is_profile_save:!1,pin_id:i,save_session_id:o,search_query:a}}),d&&s&&s(d),this.setState({isSectionOpen:!0,selectedBoardId:c?"":e.id,selectedBoardCategory:c?"":e.category})}),N(this,"handleBoardClick",({board:e,toggleSections:t})=>{let{logContextEvent:i,onItemChosen:s,pinId:r,surfaceOriginViewParameter:o}=this.props,{saveSessionId:a,searchQuery:n}=this.state;this.setState({searchBoxFocused:!1}),t?(i({event_type:101,component:13282,element:36,object_id_str:e.id,view_type:91,view_parameter:e.category===J?3988:3989,aux_data:{board_id:e.id,board_component:e.category===J?3988:3989,board_picker_surface_origin:o,board_picker_suggested_boards:JSON.stringify(this.getTopChoiceBoardsAuxData()),board_title_suggestions:JSON.stringify(this.getBoardTitleSuggestionsAuxData()),board_index:e.gridIndex,is_profile_save:!1,pin_id:r,save_session_id:a,search_query:n}}),this.handleBoardWithSectionsClick({category:e.category,gridIndex:e.gridIndex,id:e.id})):(i("boardless"===e.type?{event_type:101,component:13282,element:36,object_id_str:e.id,view_type:91,view_parameter:3990,aux_data:{board_id:e.id,board_component:3990,board_picker_surface_origin:o,board_picker_suggested_boards:JSON.stringify(this.getTopChoiceBoardsAuxData()),board_title_suggestions:JSON.stringify(this.getBoardTitleSuggestionsAuxData()),board_index:e.gridIndex,is_profile_save:!0,pin_id:r,save_session_id:a,search_query:n}}:{event_type:101,component:13282,element:36,object_id_str:e.id,view_type:91,view_parameter:e.category===J?3988:3989,aux_data:{board_id:e.id,board_component:e.category===J?3988:3989,board_picker_surface_origin:o,board_picker_suggested_boards:JSON.stringify(this.getTopChoiceBoardsAuxData()),board_title_suggestions:JSON.stringify(this.getBoardTitleSuggestionsAuxData()),board_index:e.gridIndex,is_profile_save:"boardless"===e.type,pin_id:r,save_session_id:a,search_query:n}}),s({boardId:e.id,url:e.url,title:e.name||"",type:e.type,imageCoverUrl:e.image_cover_url,privacy:e.privacy}))}),N(this,"handleSearchQueryUpdate",e=>{this.setState(t=>({...t,searchQuery:e}))}),N(this,"handleCreateBoardClick",e=>{let{logContextEvent:t,onBoardCreate:i,pinId:s,surfaceOriginViewParameter:r}=this.props,{saveSessionId:o,searchQuery:a}=this.state;t({event_type:101,component:13282,element:249,view_type:91,view_parameter:e?87:3132,aux_data:{board_component:e?87:3132,board_picker_surface_origin:r,board_picker_suggested_boards:JSON.stringify(this.getTopChoiceBoardsAuxData()),board_title_suggestions:JSON.stringify(this.getBoardTitleSuggestionsAuxData()),pin_id:s,save_session_id:o,search_query:a}}),i({title:a})}),N(this,"handleBoardSuggestionClick",e=>{let{logContextEvent:t,onBoardCreate:i,pinId:s,surfaceOriginViewParameter:r}=this.props,{saveSessionId:o}=this.state;t({event_type:101,component:13282,element:23,view_type:91,view_parameter:3992,aux_data:{board_picker_surface_origin:r,board_title_suggestions:JSON.stringify(this.getBoardTitleSuggestionsAuxData()),pin_id:s,save_session_id:o}}),i(e)})}componentWillUnmount(){this.removeEventListeners()}componentDidMount(){let{logContextEvent:e,pinId:t,setBoardWithSection:i,surfaceOriginViewParameter:s}=this.props,{saveSessionId:r}=this.state;i&&i(null),e({event_type:13,component:13282,element:10960,aux_data:{board_picker_surface_origin:s,pin_id:t,save_session_id:r}})}componentDidUpdate(e){let{saveSessionId:t}=this.state;!e.suggestedBoardsShortListResource?.isLoaded&&this.props.suggestedBoardsShortListResource?.isLoaded&&this.getSuggestedBoardsIds().length>0&&this.props.logContextEvent({event_type:13,component:13282,element:1001,aux_data:{pin_id:this.props.pinId,board_picker_suggested_boards:JSON.stringify(this.getTopChoiceBoardsAuxData()),save_session_id:t}})}removeEventListeners(){let{_container:e}=this;e&&e.removeEventListener("scroll",this.handleScroll)}render(){let{accessibilityLabelText:e,boardResource:t,buttonText:i,changeBoardModal:r,customItem:o,headerText:n,hideAlreadySavedMsg:l,onButtonClick:d,paneHeight:h,paneWidth:_,pinAlreadySavedBoard:u,pinId:g,requestContext:p,sectionText:b,showSaveToProfile:x,showSearchField:m,showCreateBoardButton:y,showFlyoutSaveButton:j,showSections:A,showSectionSaveButton:B,suggestedBoardsShortListResource:w,surfaceOriginViewParameter:C,useStoryboardStyle:z,useLegoLayout:L,useProductGroupsStyle:k}=this.props,{boardSuggestions:T,isSectionOpen:R,saveSessionId:Z,searchBoxFocused:N,searchQuery:J}=this.state;if(!t)return null;let{isLoaded:U,error:W}=t,q=[];(U&&!W||w&&w.data&&!w.error)&&(q=this.getItems(!!L));let Y=q.filter(e=>e&&e.category===M).length;Y<=3&&0===T.length&&this.getPinBuilderSuggestions();let G=z?200:322,Q=z?214:334,K=h||290,V=JSON.stringify(this.getTopChoiceBoardsAuxData()),X=p.isRTL?"BoardsSlideRightRTL":"BoardsSlideLeft",ee="";null!==R&&(ee=p.isRTL?"BoardsSlideLeftRTL":"BoardsSlideRight");let et=e=>(0,v.jsxs)(s.Fragment,{children:[!L&&(0,v.jsx)(a.iz,{}),(0,v.jsx)(a.xu,{borderStyle:L&&Y>=3&&q.length>1?"shadow":"none",dangerouslySetInlineStyle:{__style:{borderBottomRightRadius:8,borderBottomLeftRadius:8}},height:H(L),overflow:"hidden",children:(0,v.jsx)(O,{isBoardCreate:e,onCreateBoardClick:()=>this.handleCreateBoardClick(e),useLegoLayout:L})})]});return(0,v.jsxs)(a.xu,{color:"default","data-test-id":"board-picker-flyout",height:z||r?"100%":D(L),overflow:"hidden",rounding:2,width:L&&!r?"100%":_,zIndex:f.lI,children:[(0,v.jsx)(c.Z,{unsafeCSS:$}),U?null:(0,v.jsx)(a.kC,{alignItems:"center",height:"100%",justifyContent:"center",minHeight:200,width:L&&!r?360:_,children:(0,v.jsx)(a.$j,{accessibilityLabel:this.props.i18n.bt("loading board picker", "loading board picker", "accessibility text for loading spinner", undefined, true),show:!0})}),(0,v.jsx)(a.kC,{direction:"row",children:U&&(0,v.jsx)("div",{className:R?X:ee,children:(0,v.jsx)(a.xu,{position:"relative",children:(0,v.jsxs)(a.xu,{direction:"row",display:"flex",width:L&&!r?720:(_??0)*2,zIndex:new a.Ry(0),children:[(0,v.jsxs)(a.kC,{alignItems:"stretch",direction:"column",justifyContent:"start",width:L&&!r?360:_,children:[L&&!r&&(0,v.jsx)(a.kC,{alignItems:"center",height:64,justifyContent:"center",children:(0,v.jsx)(a.xv,{align:"center",size:"300",weight:"bold",children:n||(x?this.props.i18n.bt("Save", "Save", "PinBetterSave.BoardFlyout.SavePlaceholder", undefined, true):this.props.i18n.bt("Save to board", "Save to board", "PinBetterSave.BoardFlyout.SaveToBoardPlaceholder", undefined, true))})}),(m??!r)&&(0,v.jsx)(a.xu,{"data-test-id":"search-boards-field-container",height:L?64:"auto",padding:L&&!k?0:3,paddingX:L?4:3,children:(0,v.jsx)(F.Z,{accessibilityLabel:this.props.i18n.bt("Search through your boards", "Search through your boards", "search bar placeholder text", undefined, true),focused:N,id:"pickerSearchField",onChange:({value:e})=>this.handleSearchQueryUpdate(e),placeholder:this.props.i18n.bt("Search", "Search", "search bar placeholder text", undefined, true),value:J})}),(0,v.jsxs)(a.xu,{ref:this.refHandler,maxHeight:L?K:G,minHeight:L?290:G,overflow:"scrollY",children:[w&&!w.isLoaded?(0,v.jsx)(a.xu,{"data-test-id":"suggestedBoardsContainer",children:(0,v.jsx)(a.kC,{alignItems:"center",height:"100%",justifyContent:"center",minHeight:128.5,width:"100%",children:(0,v.jsx)(a.$j,{accessibilityLabel:this.props.i18n.bt("loading board picker", "loading board picker", "accessibility text for loading spinner", undefined, true),show:!0})})}):null,o,q.map((t,s)=>"header"===t.type?(0,v.jsx)(S,{boardPickerSuggestedBoards:V,index:s,item:t,pinId:g,saveSessionId:Z,surfaceOriginViewParameter:C,useLegoLayout:L},`${t.title}`):(0,v.jsx)(a.xu,{children:(0,v.jsx)(P,{accessibilityLabelText:e,board:t,buttonText:i,displayAlreadySavedMsg:u&&u.id===t.id&&!l,onButtonClick:d,onClick:e=>{this.handleBoardClick({board:e,toggleSections:A&&!!e.section_count})},pinId:g,saveSessionId:Z,shouldOpenSections:A,showFlyoutSaveButton:j,showSaveToProfile:x,surfaceOriginViewParameter:C,useLegoLayout:L})},`${t.category}-${t.id}`)),Y<=3&&(0,v.jsx)(E,{inWebRepinFlowExp:L,onClick:this.handleBoardSuggestionClick,pinBuilderSuggestions:T})]}),y&&et(!0)]}),R&&(0,v.jsxs)(a.xu,{direction:"column",display:"flex",marginBottom:L?2:0,width:L&&!r?360:_,children:[(0,v.jsxs)(a.kC,{alignContent:"center",alignItems:"center",direction:"row",justifyContent:"center",children:[(0,v.jsx)(a.sg,{span:2,children:(0,v.jsx)(a.xu,{alignContent:"center",alignItems:"center",display:"flex",justifyContent:"start",marginStart:3,children:(0,v.jsx)(a.hU,{accessibilityLabel:"Back button",icon:"arrow-back",iconColor:"darkGray",onClick:this.handleBack,size:"sm"})})}),(0,v.jsx)(a.sg,{span:8,children:(0,v.jsx)(a.kC,{alignItems:"center",height:L?64:52,justifyContent:"center",children:(0,v.jsx)(a.xv,{weight:"bold",children:b||(L?this.props.i18n.bt("Save Pin to", "Save Pin to", "PinBetterSave.BoardFlyout.SectionHeader", undefined, true):this.props.i18n.bt("Choose section", "Choose section", "Header for section header", undefined, true))})})}),(0,v.jsx)(a.sg,{span:2,children:(0,v.jsx)(a.xu,{})})]}),!L&&(0,v.jsx)(a.iz,{}),(0,v.jsx)(a.xu,{maxHeight:L?K:Q,minHeight:L?354:Q,overflow:"scrollY",children:q?(0,v.jsx)(s.Fragment,{children:q&&q.map(e=>"header"===e.type?null:(0,v.jsx)(a.xu,{children:e.isOpen&&(0,v.jsxs)(s.Fragment,{children:[L&&(0,v.jsx)(a.xu,{marginStart:4,marginTop:2,paddingY:1,children:(0,v.jsx)(a.xv,{size:"100",children:this.props.i18n.bt("Board", "Board", "PinBetterSave.BoardFlyout.BoardPickerTitle", undefined, true)})}),(0,v.jsx)(P,{board:e,buttonText:i,displayAlreadySavedMsg:u&&u.id===e.id,isSectionOpen:!0,onButtonClick:d,onClick:e=>{this.handleBoardClick({board:e,toggleSections:!1})},saveSessionId:Z,shouldOpenSections:!1,showFlyoutSaveButton:j,useLegoLayout:L}),(0,v.jsx)(I,{board:e,buttonText:i,onButtonClick:d,onClick:this.handleSectionClick,showSectionSaveButton:B,useLegoLayout:L})]})},`${e.category}-${e.id}`))}):null}),y&&!r&&et(!1)]})]})})})})]})}}function W(e){let{logContextEvent:t}=(0,n.v)(),i=(0,d.ZP)(),{checkExperiment:s}=(0,h.F)();return(0,v.jsx)(U,{...e,checkExperiment:s,i18n:i,logContextEvent:t,requestContext:(0,_.B)()})}function q(e,t,i){let{advertiser:s}=e,r={};if(i&&i.user&&i.user.username&&i.id!==t.id&&(r.orbacActingAs=i,r.username=i.user.username),t&&s){let i=e.advertiser;if(t.isAuth&&i.is_impersonation)return{hasMUA:i.owner_user_id!==t.id,advertiser_id:i.id,username:i.owner_user_id,...r};if(t.isAuth&&i.owner_user_id!==t.id)return{hasMUA:!0,advertiser_id:i.id,username:i.owner_user_id,...r};if(t.isAuth&&i.owner_user_id===t.id)return{hasMUA:!1,advertiser_id:i.id,username:"me"}}return{advertiser_id:void 0,hasMUA:void 0,...r}}function Y(e){let{advertiser_id:t,hasMUA:i,boardFilter:s="all"}=e,{username:r}=e,o={field_set_key:"board_picker",filter:i?"protected":s,...r?{username:r}:Object.freeze({}),...t?{advertiser_id:t}:{}};return e.orbacActingAs&&e.orbacActingAs.user&&e.orbacActingAs.user.username&&(o={...o,username:e.orbacActingAs.user.username,orbac_subject_id:e.orbacActingAs.id,filter:s}),o}function G(e,t){return(i,s)=>i((0,u.jB)("BoardPickerBoardsResource",Y(q(s(),e,t))))}function Q(e){let t=(0,b.Z)(),i=(0,r.v9)(i=>q(i,t,e.orbacActingAs)),s={...e,...i},o=(0,g.Z)({name:"BoardPickerBoardsResource",options:Y(s)});return(0,v.jsx)(W,{...s,boardResource:o})}function K(e){let t=(0,x.Z)(),i=(0,b.Z)(),s=(0,m.lJ)(i,t);return(0,v.jsx)(Q,{...e,orbacActingAs:s?t:void 0})}function V(e){let t=(0,g.Z)({name:"BoardPickerBoardsShortlistResource",options:{pin_id:e.pinId,shortlist_length:2,num_shortlist_suggestions:2}}),{data:i}=(0,g.Z)({name:"ApiResource",options:{url:`/v3/pins/${e.pinId}/`,field_sets:["pin.pinned_to_board()"]},noCache:!0});return(0,v.jsx)(W,{...e,pinAlreadySavedBoard:i?.pinned_to_board,suggestedBoardsShortListResource:t})}N(U,"defaultProps",{paneWidth:320,showCreateBoardButton:!0,showFlyoutSaveButton:!0,showSections:!0,showSectionSaveButton:!0,useLegoLayout:!0})},267508:(e,t,i)=>{i.d(t,{Z:()=>l});var s=i(883119),r=i(860910),o=i(327540),a=i(785893);let n=({collaborator_count:e,useLegoLayout:t,type:i})=>t?(0,a.jsx)(s.xu,{marginEnd:e?2:0,children:(0,a.jsx)(o.Z,{type:i})}):(0,a.jsx)(o.Z,{type:i}),l=({board:e,showCollaborativeIcon:t,showPrivateIcon:i,showProtectedIcon:l,showSectionsIcon:d,useLegoLayout:c})=>{let h=e?.collaborating_users?.length||0;return t||i||l||d?(0,a.jsxs)(s.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{paddingLeft:8}},"data-test-id":"board-picker-row-icon-list-box",direction:"row",display:"flex",marginEnd:c?0:5,children:[i&&(0,a.jsx)(n,{collaborator_count:h,type:"secret",useLegoLayout:c}),l&&(0,a.jsx)(n,{collaborator_count:h,type:"protected",useLegoLayout:c}),t&&(c?(0,a.jsx)(r.Z,{board:e,isCompact:!0,ownerOnly:!1}):(0,a.jsx)(o.Z,{type:"group"})),d&&(0,a.jsx)(o.Z,{type:"sections"})]}):null}},319510:(e,t,i)=>{i.d(t,{Z:()=>o});var s=i(883119),r=i(785893);let o=({image_url:e,naturalHeight:t,naturalWidth:i})=>(0,r.jsx)(s.xu,{"aria-hidden":"true",height:48,marginBottom:1,marginEnd:2,marginTop:1,overflow:"hidden",width:48,children:(0,r.jsx)(s.zd,{height:48,rounding:2,wash:!0,width:48,children:(0,r.jsx)(s.Ee,{alt:"",naturalHeight:t,naturalWidth:i,src:e})})})},860910:(e,t,i)=>{i.d(t,{Z:()=>d});var s=i(883119),r=i(140017),o=i(339001),a=i(149722),n=i(785893);function l(e){let t=e?.imageMediumUrl??e?.image_medium_url??"";return{name:e?.fullName??e?.full_name??"",src:"https://s.pinimg.com/images/user/default_75.png"===t?void 0:t}}function d({board:e,forceViewer:t,isCompact:i,ownerOnly:d}){let c=(0,r.ZP)(),h=(0,a.Z)(),_=d?[l(e?.owner)]:(function(e,t,i){let{collaborated_by_me:s,collaborating_users:r,owner:o}=e??{},a=r??[],n=[o];if(s||i){let e=a.findIndex(e=>t.isAuth&&e.id===t.id);if(-1!==e){let t=a.splice(e,1)[0];n.push(t)}else n.push(t)}return[...n,...[...a].sort((e,t)=>(e.full_name??"")>(t.full_name??"")?1:(t.full_name??"")>(e.full_name??"")?-1:0)]})(e,h,t).map(l),u=_.slice(0,3).map(e=>e.name),g="";switch(_.length){case 3:g=(0,o.Wc)(`${c.bt("{{ first }}, {{ second }} and {{ last }}", "{{ first }}, {{ second }}, and {{ last }}", "CollaboratorsFacePile.AvatarGroup.accessibilityLabel.usernames.ThreeAvatars", undefined, true)}`,{first:`${u[0]??""}`,second:`${u[1]??""}`,last:`${u[2]??""}`});break;case 2:g=(0,o.Wc)(`${c.bt("{{ first }} and {{ second }}", "{{ first }} and {{ second }}", "CollaboratorsFacePile.AvatarGroup.accessibilityLabel.usernames.TwoAvatars", undefined, true)}`,{first:`${u[0]??""}`,second:`${u[1]??""}`});break;default:g=u.join(", ")}let p=_.length>3?(0,o.Wc)(`, ${c.nbt(["Collaborators: {{ userNames }} and {{ leftCount }} more.", "Collaborators: {{ userNames }} and {{ leftCount }} more."], _.length - 3, "CollaboratorsFacePile.AvatarGroup.accessibilityLabel.aboveThree", true)}`,{userNames:g,leftCount:`${_.length-3}`}):(0,o.Wc)(`, ${c.bt("Collaborators: {{ userNames }}.", "Collaborators: {{ userNames }}.", "CollaboratorsFacePile.AvatarGroup.accessibilityLabel.notAboveThree", undefined, true)}`,{userNames:g});return(0,n.jsx)(s.HE,{accessibilityLabel:p,collaborators:_,size:i?"xs":"sm"})}},796534:(e,t,i)=>{i.d(t,{Z:()=>a});var s=i(667294),r=i(883119),o=i(785893);function a(e){let{accessibilityLabel:t,focused:i,id:a,onBlur:n,onChange:l,onFocus:d,placeholder:c,value:h,size:_="lg"}=e,u=(0,s.useRef)(null);return(0,s.useEffect)(()=>{if(i){let e=u.current;window.requestAnimationFrame(()=>{let t=e&&e.querySelector("input");t instanceof HTMLInputElement&&t.focus()})}},[i]),(0,o.jsx)(r.xu,{ref:u,children:(0,o.jsx)(r.Um,{accessibilityLabel:t,id:a,onBlur:n,onChange:l,onFocus:d,placeholder:c,size:_,value:h})})}},327540:(e,t,i)=>{i.d(t,{Z:()=>a});var s=i(883119),r=i(140017),o=i(785893);let a=function({type:e}){let t=(0,r.ZP)(),i={group:{accessibilityLabel:t.bt("group board", "group board", "Board picker group board icon", undefined, true),icon:"people"},protected:{accessibilityLabel:t.bt("protected board", "protected board", "Board picker protected board icon", undefined, true),icon:"protect"},secret:{accessibilityLabel:t.bt("Secret board", "secret board", "Board picker secret board icon", undefined, true),icon:"lock"},sections:{accessibilityLabel:t.bt("board with sections", "board with sections", "Board picker board with sections icon", undefined, true),icon:"arrow-forward"},sectionsInline:{accessibilityLabel:t.bt("board with sections", "board with sections", "Board picker board with sections icon", undefined, true),icon:"arrow-down"}}[e];return(0,o.jsx)(s.xu,{marginStart:1,children:(0,o.jsx)(s.xu,{marginStart:2,children:"sections"===e||"sectionsInline"===e?(0,o.jsx)(s.JO,{accessibilityLabel:i.accessibilityLabel,color:"default",icon:i.icon,size:"12"}):(0,o.jsx)(s.JO,{accessibilityLabel:i.accessibilityLabel,color:"default",icon:i.icon,size:16})})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/11034.en_GB-37946450454e975a.mjs.map