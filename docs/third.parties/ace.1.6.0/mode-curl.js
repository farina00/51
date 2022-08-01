ace.define("ace/mode/curl_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,i){"use strict";var o=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,n=function(){var e=this.createKeywordMapper({"variable.language":"this",keyword:"curl","constant.language":"post get delete","keyword.operator":"abs sign "},"text",!0," ");this.$rules={start:[{token:"keyword",regex:/[=|\\]|\-d|\-X/},{token:e,regex:"\\b\\w+\\b"},{caseInsensitive:!0}],qstring:[{token:"constant.language.escape",regex:"''"},{token:"string",regex:"'",next:"start"},{defaultToken:"string"}],string:[{token:"constant.language.escape",regex:"``"},{token:"string",regex:"`",next:"start"},{defaultToken:"string"}]}};o.inherits(n,r),t.CurlHighlightRules=n})),ace.define("ace/mode/folding/coffee",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],(function(e,t,i){"use strict";var o=e("../../lib/oop"),r=e("./fold_mode").FoldMode,n=e("../../range").Range,a=t.FoldMode=function(){};o.inherits(a,r),function(){this.getFoldWidgetRange=function(e,t,i){var o=this.indentationBlock(e,i);if(o)return o;var r=/\S/,a=e.getLine(i),l=a.search(r);if(-1!=l&&"#"==a[l]){for(var g=a.length,s=e.getLength(),d=i,c=i;++i<s;){var u=(a=e.getLine(i)).search(r);if(-1!=u){if("#"!=a[u])break;c=i}}if(c>d){var f=e.getLine(c).length;return new n(d,g,c,f)}}},this.getFoldWidget=function(e,t,i){var o=e.getLine(i),r=o.search(/\S/),n=e.getLine(i+1),a=e.getLine(i-1),l=a.search(/\S/),g=n.search(/\S/);if(-1==r)return e.foldWidgets[i-1]=-1!=l&&l<g?"start":"","";if(-1==l){if(r==g&&"#"==o[r]&&"#"==n[r])return e.foldWidgets[i-1]="",e.foldWidgets[i+1]="","start"}else if(l==r&&"#"==o[r]&&"#"==a[r]&&-1==e.getLine(i-2).search(/\S/))return e.foldWidgets[i-1]="start",e.foldWidgets[i+1]="","";return e.foldWidgets[i-1]=-1!=l&&l<r?"start":"",r<g?"start":""}}.call(a.prototype)})),ace.define("ace/mode/curl",["require","exports","module","ace/mode/curl_highlight_rules","ace/mode/folding/coffee","ace/range","ace/mode/text","ace/lib/oop"],(function(e,t,i){"use strict";var o=e("./curl_highlight_rules").CurlHighlightRules,r=e("./folding/coffee").FoldMode,n=(e("../range").Range,e("./text").Mode);function a(){this.HighlightRules=o,this.foldingRules=new r}e("../lib/oop").inherits(a,n),function(){this.lineCommentStart='"',this.getNextLineIndent=function(e,t,i){return this.$getIndent(t)},this.$id="ace/mode/curl"}.call(a.prototype),t.Mode=a})),ace.require(["ace/mode/curl"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));