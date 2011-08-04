if (typeof window !== 'undefined')
		{
				modules = {
						fs : {
								readFile : function(name, callback) { $.get(name, function(data) { callback(null, data); }); }
						},
						sys : {
								print : function() { return console.log.apply(console, arguments); },
								debug : function() { return console.log.apply(console, arguments); }
						}
				};
				
				require = function(name)
				{
					return modules[name];
				};
				
				process = { argv : [] };
		}var sys=require('sys');var fs=require('fs');if (typeof functions === 'undefined') {    functions = {};}if (typeof macros === 'undefined') {    macros = {};}function Symbol(value)
				 {
						 this.value = value;
				 };macros['and']=(function(args) {
	var var_61=args[0];
args=args[1];
	var var_62=args[0];
args=args[1];
	return fn_6c697374([(new Symbol('if')),[var_61,[fn_6c697374([(new Symbol('if')),[var_62,[(new Symbol('t')),null]]]),null]]]);;
})
;
macros['progn']=(function(args) {
	var var_626f6479=args;
	return fn_6c697374([(new Symbol('funcall')),[[(new Symbol('lambda')),[null,var_626f6479]],null]]);;
})
;
functions['caar']=(function(args) {
	var var_78=args[0];
args=args[1];
	return var_78[0][0];;
})
;
fn_63616172=functions['caar'];
;
functions['cadr']=(function(args) {
	var var_78=args[0];
args=args[1];
	return var_78[1][0];;
})
;
fn_63616472=functions['cadr'];
;
functions['cddr']=(function(args) {
	var var_78=args[0];
args=args[1];
	return var_78[1][1];;
})
;
fn_63646472=functions['cddr'];
;
functions['caddr']=(function(args) {
	var var_78=args[0];
args=args[1];
	return var_78[1][1][0];;
})
;
fn_6361646472=functions['caddr'];
;
functions['cadddr']=(function(args) {
	var var_78=args[0];
args=args[1];
	return fn_63646472([var_78,null])[1][0];;
})
;
fn_636164646472=functions['cadddr'];
;
functions['cdddr']=(function(args) {
	var var_78=args[0];
args=args[1];
	return var_78[1][1][1];;
})
;
fn_6364646472=functions['cdddr'];
;
macros['let-1']=(function(args) {
	var var_70617273=args[0];
args=args[1];
	var var_626f6479=args[0];
args=args[1];
	return [(new Symbol('funcall')),[[(new Symbol('lambda')),[[var_70617273[0],null],var_626f6479]],[fn_63616472([var_70617273,null]),null]]];;
})
;
macros['let*']=(function(args) {
	var var_70617273=args[0];
args=args[1];
	var var_626f6479=args;
	return ((fn_756e646566696e65642d3e6e756c6c([var_70617273,null]) != null)?(fn_6c697374([(new Symbol('let-1')),[var_70617273[0],[((fn_756e646566696e65642d3e6e756c6c([var_70617273[1],null]) != null)?(fn_6c697374([[(new Symbol('let*')),[var_70617273[1],var_626f6479]],null])):(var_626f6479)),null]]])):(var_626f6479));;
})
;
functions['cond%']=(function(args) {
	var var_72657374=args[0];
args=args[1];
	return (function(args) {
	var var_6e657874=args[0];
args=args[1];
	return (function(args) {
	var var_616e647468656e=args[0];
args=args[1];
	return (function(args) {
	var var_657870616e73696f6e=args[0];
args=args[1];
	return var_657870616e73696f6e;;
})
([((fn_756e646566696e65642d3e6e756c6c([var_6e657874,null]) != null)?([(new Symbol('if')),[var_6e657874[0],[[(new Symbol('progn')),var_6e657874[1]],[var_616e647468656e,null]]]]):(null)),null]);;
})
([((fn_756e646566696e65642d3e6e756c6c([var_72657374[1],null]) != null)?(fn_636f6e6425([var_72657374[1],null])):(null)),null]);;
})
([var_72657374[0],null]);;
})
;
fn_636f6e6425=functions['cond%'];
;
macros['cond']=(function(args) {
	var var_72657374=args;
	return fn_636f6e6425([var_72657374,null]);;
})
;
macros['qq']=(function(args) {
	var var_78=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_6e6f74([var_78,null]),null]) != null)?((function(args) {
	return null;;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_61746f6d([var_78,null]),null]) != null)?((function(args) {
	return fn_6c697374([(new Symbol('quote')),[var_78,null]]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([(new Symbol('uq')),[var_78[0],null]]),null]) != null)?((function(args) {
	return fn_63616472([var_78,null]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([((fn_756e646566696e65642d3e6e756c6c([((fn_756e646566696e65642d3e6e756c6c([fn_6c69737470([var_78[0],null]),null]) != null)?(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([(new Symbol('uq')),[var_78[0][0],null]]),null]) != null)?(true):(null))):(null)),null]) != null)?(((fn_756e646566696e65642d3e6e756c6c([((fn_756e646566696e65642d3e6e756c6c([fn_6c69737470([fn_63616472([var_78[0],null]),null]),null]) != null)?(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([(new Symbol('sl')),[fn_63616472([var_78[0],null])[0],null]]),null]) != null)?(true):(null))):(null)),null]) != null)?(true):(null))):(null)),null]) != null)?((function(args) {
	return fn_6c697374([(new Symbol('append')),[fn_63616472([fn_63616472([var_78[0],null]),null]),[fn_6c697374([(new Symbol('qq')),[var_78[1],null]]),null]]]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([true,null]) != null)?((function(args) {
	return fn_6c697374([(new Symbol('cons')),[fn_6c697374([(new Symbol('qq')),[var_78[0],null]]),[fn_6c697374([(new Symbol('qq')),[var_78[1],null]]),null]]]);;
})
(null)):(null))))))))));;
})
;
functions['requires*']=(function(args) {
	var var_7468657365=args[0];
args=args[1];
	var var_63616c6c6261636b=args[0];
args=args[1];
	var var_66696c6573=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([var_7468657365,null]) != null)?(fn_72657175697265([var_7468657365[0],[(function(args) {
	var var_64617461=args[0];
args=args[1];
	return fn_72657175697265732a([var_7468657365[1],[var_63616c6c6261636b,[[var_7468657365[0],[var_64617461,var_66696c6573]],null]]]);;
})
,null]])):(((fn_756e646566696e65642d3e6e756c6c([var_63616c6c6261636b,null]) != null)?(var_63616c6c6261636b([var_66696c6573,null])):(null))));;
})
;
fn_72657175697265732a=functions['requires*'];
;
functions['requires']=(function(args) {
	var var_7468657365=args[0];
args=args[1];
	var var_63616c6c6261636b=args[0];
args=args[1];
	return fn_72657175697265732a([var_7468657365,[var_63616c6c6261636b,[null,null]]]);;
})
;
fn_7265717569726573=functions['requires'];
;
functions['println']=(function(args) {
	var var_78=args[0];
args=args[1];
fn_7072696e74([var_78,null]);
	return fn_7072696e74(['\n',null]);;
})
;
fn_7072696e746c6e=functions['println'];
;
functions['list']=(function(args) {
	var var_72657374=args;
	return var_72657374;;
})
;
fn_6c697374=functions['list'];
;
functions['not']=(function(args) {
	var var_78=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([var_78,null]) != null)?(null):(true));;
})
;
fn_6e6f74=functions['not'];
;
functions['listp']=(function(args) {
	var var_78=args[0];
args=args[1];
	return fn_6e6f74([fn_61746f6d([var_78,null]),null]);;
})
;
fn_6c69737470=functions['listp'];
;
macros['or']=(function(args) {
	var var_61=args[0];
args=args[1];
	var var_62=args[0];
args=args[1];
	return [(new Symbol('if')),[var_61,[(new Symbol('t')),[[(new Symbol('if')),[var_62,[(new Symbol('t')),null]]],null]]]];;
})
;
functions['in']=(function(args) {
	var var_656c=args[0];
args=args[1];
	var var_6873=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([var_6873,null]) != null)?(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_656c,[var_6873[0],null]]),null]) != null)?(true):(fn_696e([var_656c,[var_6873[1],null]])))):(null));;
})
;
fn_696e=functions['in'];
;
functions['assoc']=(function(args) {
	var var_656c=args[0];
args=args[1];
	var var_6c697374=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([var_6c697374,null]) != null)?(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_656c,[var_6c697374[0],null]]),null]) != null)?(fn_63616472([var_6c697374,null])):(fn_6173736f63([var_656c,[fn_63646472([var_6c697374,null]),null]])))):(null));;
})
;
fn_6173736f63=functions['assoc'];
;
functions['mapcar']=(function(args) {
	var var_66756e=args[0];
args=args[1];
	var var_6c697374=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([var_6c697374,null]) != null)?([var_66756e([var_6c697374[0],null]),fn_6d6170636172([var_66756e,[var_6c697374[1],null]])]):(null));;
})
;
fn_6d6170636172=functions['mapcar'];
;
functions['mapicar']=(function(args) {
	var var_66756e=args[0];
args=args[1];
	var var_6c697374=args[0];
args=args[1];
	var var_696e646578=args;
	return (function(args) {
	var var_69=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([var_6c697374,null]) != null)?([var_66756e([var_69,[var_6c697374[0],null]]),fn_6d617069636172([var_66756e,[var_6c697374[1],[(var_69+1),null]]])]):(null));;
})
([((fn_756e646566696e65642d3e6e756c6c([var_696e646578,null]) != null)?(var_696e646578[0]):(0)),null]);;
})
;
fn_6d617069636172=functions['mapicar'];
;
functions['last']=(function(args) {
	var var_76616c756573=args[0];
args=args[1];
	return (function(args) {
	var var_726574=args[0];
args=args[1];
	return var_726574;;
})
([((fn_756e646566696e65642d3e6e756c6c([var_76616c756573[1],null]) != null)?(fn_6c617374([var_76616c756573[1],null])):(var_76616c756573[0])),null]);;
})
;
fn_6c617374=functions['last'];
;
functions['heads']=(function(args) {
	var var_76616c756573=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([var_76616c756573[1],null]) != null)?([var_76616c756573[0],fn_6865616473([var_76616c756573[1],null])]):(null));;
})
;
fn_6865616473=functions['heads'];
;
functions['r']=(function(args) {
	var var_63=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_6e756c6c([var_63,null]),null]) != null)?((function(args) {
	return var_63;;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_61746f6d([var_63,null]),null]) != null)?((function(args) {
	return var_63;;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([true,null]) != null)?((function(args) {
	return [fn_72([var_63[1],null]),fn_72([var_63[0],null])];;
})
(null)):(null))))));;
})
;
fn_72=functions['r'];
;
functions['append']=(function(args) {
	var var_6865616473=args[0];
args=args[1];
	var var_7461696c=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([var_6865616473,null]) != null)?([var_6865616473[0],fn_617070656e64([var_6865616473[1],[var_7461696c,null]])]):(var_7461696c));;
})
;
fn_617070656e64=functions['append'];
;
functions['reverse']=(function(args) {
	var var_76616c756573=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([var_76616c756573,null]) != null)?(fn_617070656e64([fn_72657665727365([var_76616c756573[1],null]),[fn_6c697374([var_76616c756573[0],null]),null]])):(null));;
})
;
fn_72657665727365=functions['reverse'];
;
functions['append-each']=(function(args) {
	var var_6865616473=args[0];
args=args[1];
	var var_7461696c73=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([var_7461696c73,null]) != null)?(fn_617070656e642d65616368([fn_617070656e64([var_6865616473,[var_7461696c73[0],null]]),[fn_6c697374([var_7461696c73[1],null]),null]])):(var_6865616473));;
})
;
fn_617070656e642d65616368=functions['append-each'];
;
functions['elt']=(function(args) {
	var var_736571=args[0];
args=args[1];
	var var_69=args[0];
args=args[1];
	return fn_737562736571([var_736571,[var_69,[(var_69+1),null]]])[0];;
})
;
fn_656c74=functions['elt'];
;
functions['pretty-print-list']=(function(args) {
	var var_666f726d=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([var_666f726d,null]) != null)?(fn_636f6e636174([fn_737472696e672d74([fn_7072657474792d7072696e742d746f2d737472696e67([var_666f726d[0],null]),null]),[((fn_756e646566696e65642d3e6e756c6c([var_666f726d[1],null]) != null)?(fn_636f6e636174([' ',[fn_737472696e672d74([fn_7072657474792d7072696e742d6c697374([var_666f726d[1],null]),null]),null]])):(null)),null]])):('nil'));;
})
;
fn_7072657474792d7072696e742d6c697374=functions['pretty-print-list'];
;
functions['pretty-print-to-string']=(function(args) {
	var var_666f726d=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_6e756c6c([var_666f726d,null]),null]) != null)?((function(args) {
	return 'nil';;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_737472696e672d742d70([var_666f726d,null]),null]) != null)?((function(args) {
	return fn_636f6e636174(['\"',[var_666f726d,['\"',null]]]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_61746f6d([var_666f726d,null]),null]) != null)?((function(args) {
	return fn_737472696e672d74([var_666f726d,null]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([true,null]) != null)?((function(args) {
	return fn_636f6e636174(['(',[fn_7072657474792d7072696e742d6c697374([var_666f726d,null]),[')',null]]]);;
})
(null)):(null))))))));;
})
;
fn_7072657474792d7072696e742d746f2d737472696e67=functions['pretty-print-to-string'];
;
functions['repr']=(function(args) {
	var var_666f726d=args[0];
args=args[1];
	return fn_7072657474792d7072696e742d746f2d737472696e67([var_666f726d,null]);;
})
;
fn_72657072=functions['repr'];
;
functions['print-list']=(function(args) {
	var var_76616c756573=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([var_76616c756573,null]) != null)?((function(args) {
fn_7072696e74([var_76616c756573[0],null]);
	return fn_7072696e742d6c697374([var_76616c756573[1],null]);;
})
(null)):(null));;
})
;
fn_7072696e742d6c697374=functions['print-list'];
;
functions['write-line']=(function(args) {
	var var_78=args[0];
args=args[1];
	return fn_7072696e74([var_78,null]);;
})
;
fn_77726974652d6c696e65=functions['write-line'];
;
macros['test-equal']=(function(args) {
	var var_74657374=args[0];
args=args[1];
	var var_726573756c74=args[0];
args=args[1];
	return [(new Symbol('let*')),[[[(new Symbol('test-result')),[var_74657374,null]],null],[[(new Symbol('if')),[[(new Symbol('equal')),[(new Symbol('test-result')),[var_726573756c74,null]]],[[(new Symbol('println')),[[(new Symbol('concat')),['passed: ',[[(new Symbol('repr')),[[(new Symbol('quote')),[var_74657374,null]],null]],['->',[[(new Symbol('repr')),[(new Symbol('test-result')),null]],['==',[[(new Symbol('repr')),[var_726573756c74,null]],null]]]]]]],null]],[[(new Symbol('println')),[[(new Symbol('concat')),['FAILED: ',[[(new Symbol('repr')),[[(new Symbol('quote')),[var_74657374,null]],null]],['->',[[(new Symbol('repr')),[(new Symbol('test-result')),null]],['!=',[[(new Symbol('repr')),[var_726573756c74,null]],null]]]]]]],null]],null]]]],null]]];;
})
;
macros['test-not-equal']=(function(args) {
	var var_74657374=args[0];
args=args[1];
	var var_726573756c74=args[0];
args=args[1];
	return [(new Symbol('let*')),[[[(new Symbol('test-result')),[var_74657374,null]],null],[[(new Symbol('if')),[[(new Symbol('not')),[[(new Symbol('equal')),[(new Symbol('test-result')),[var_726573756c74,null]]],null]],[[(new Symbol('println')),[[(new Symbol('concat')),['passed: ',[[(new Symbol('repr')),[[(new Symbol('quote')),[var_74657374,null]],null]],['->',[[(new Symbol('repr')),[(new Symbol('test-result')),null]],['!=',[[(new Symbol('repr')),[var_726573756c74,null]],null]]]]]]],null]],[[(new Symbol('println')),[[(new Symbol('concat')),['FAILED: ',[[(new Symbol('repr')),[[(new Symbol('quote')),[var_74657374,null]],null]],['->',[[(new Symbol('repr')),[(new Symbol('test-result')),null]],['==',[[(new Symbol('repr')),[var_726573756c74,null]],null]]]]]]],null]],null]]]],null]]];;
})
;
macros['test-assert']=(function(args) {
	var var_74657374=args[0];
args=args[1];
	return [(new Symbol('test-equal')),[var_74657374,[(new Symbol('t')),null]]];;
})
;
functions['equal']=(function(args) {
	var var_61=args[0];
args=args[1];
	var var_62=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([((fn_756e646566696e65642d3e6e756c6c([fn_6e6f74([var_61,null]),null]) != null)?(((fn_756e646566696e65642d3e6e756c6c([fn_6e6f74([var_62,null]),null]) != null)?(true):(null))):(null)),null]) != null)?(true):(((fn_756e646566696e65642d3e6e756c6c([((fn_756e646566696e65642d3e6e756c6c([var_61,null]) != null)?(((fn_756e646566696e65642d3e6e756c6c([fn_6e6f74([var_62,null]),null]) != null)?(true):(null))):(null)),null]) != null)?(null):(((fn_756e646566696e65642d3e6e756c6c([((fn_756e646566696e65642d3e6e756c6c([var_62,null]) != null)?(((fn_756e646566696e65642d3e6e756c6c([fn_6e6f74([var_61,null]),null]) != null)?(true):(null))):(null)),null]) != null)?(null):(((fn_756e646566696e65642d3e6e756c6c([((fn_756e646566696e65642d3e6e756c6c([fn_61746f6d([var_61,null]),null]) != null)?(((fn_756e646566696e65642d3e6e756c6c([fn_6e6f74([fn_61746f6d([var_62,null]),null]),null]) != null)?(true):(null))):(null)),null]) != null)?(null):(((fn_756e646566696e65642d3e6e756c6c([((fn_756e646566696e65642d3e6e756c6c([fn_6e6f74([fn_61746f6d([var_61,null]),null]),null]) != null)?(((fn_756e646566696e65642d3e6e756c6c([fn_61746f6d([var_62,null]),null]) != null)?(true):(null))):(null)),null]) != null)?(null):(((fn_756e646566696e65642d3e6e756c6c([fn_61746f6d([var_61,null]),null]) != null)?(fn_65716c([var_61,[var_62,null]])):(((fn_756e646566696e65642d3e6e756c6c([fn_657175616c([var_61[0],[var_62[0],null]]),null]) != null)?(((fn_756e646566696e65642d3e6e756c6c([fn_657175616c([var_61[1],[var_62[1],null]]),null]) != null)?(true):(null))):(null))))))))))))));;
})
;
fn_657175616c=functions['equal'];
;
functions['remove-if-not']=(function(args) {
	var var_66=args[0];
args=args[1];
	var var_6c697374=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([var_6c697374,null]) != null)?((function(args) {
	var var_72657374=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([var_66([var_6c697374[0],null]),null]) != null)?([var_6c697374[0],var_72657374]):(var_72657374));;
})
([fn_72656d6f76652d69662d6e6f74([var_66,[var_6c697374[1],null]]),null])):(null));;
})
;
fn_72656d6f76652d69662d6e6f74=functions['remove-if-not'];
;
functions['remove-if']=(function(args) {
	var var_66=args[0];
args=args[1];
	var var_6c697374=args[0];
args=args[1];
	return fn_72656d6f76652d69662d6e6f74([(function(args) {
	var var_78=args[0];
args=args[1];
	return fn_6e6f74([var_66([var_78,null]),null]);;
})
,[var_6c697374,null]]);;
})
;
fn_72656d6f76652d6966=functions['remove-if'];
;
functions['weave']=(function(args) {
	var var_78=args[0];
args=args[1];
	var var_79=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([var_78,null]) != null)?([var_78[0],[var_79[0],fn_7765617665([var_78[1],[var_79[1],null]])]]):(null));;
})
;
fn_7765617665=functions['weave'];
;
functions['concat*']=(function(args) {
	var var_78=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([var_78,null]) != null)?(fn_636f6e636174([var_78[0],[((fn_756e646566696e65642d3e6e756c6c([var_78[1],null]) != null)?(fn_636f6e6361742a([var_78[1],null])):('')),null]])):(null));;
})
;
fn_636f6e6361742a=functions['concat*'];
;
functions['join']=(function(args) {
	var var_6873=args[0];
args=args[1];
	var var_736570=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([var_6873,null]) != null)?(fn_636f6e636174([var_6873[0],[((fn_756e646566696e65642d3e6e756c6c([var_6873[1],null]) != null)?(fn_636f6e636174([var_736570,[fn_6a6f696e([var_6873[1],[var_736570,null]]),null]])):('')),null]])):(''));;
})
;
fn_6a6f696e=functions['join'];
;
functions['reduce']=(function(args) {
	var var_66756e=args[0];
args=args[1];
	var var_616363756d756c61746f72=args[0];
args=args[1];
	var var_6873=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([var_6873,null]) != null)?(fn_726564756365([var_66756e,[var_66756e([var_616363756d756c61746f72,[var_6873[0],null]]),[var_6873[1],null]]])):(var_616363756d756c61746f72));;
})
;
fn_726564756365=functions['reduce'];
;
functions['last?']=(function(args) {
	var var_7873=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([var_7873,null]) != null)?(((fn_756e646566696e65642d3e6e756c6c([fn_6e756c6c([var_7873[1],null]),null]) != null)?(true):(null))):(null));;
})
;
fn_6c6173743f=functions['last?'];
;
functions['except-last']=(function(args) {
	var var_7873=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_6c6173743f([var_7873,null]),null]) != null)?(null):([var_7873[0],fn_6578636570742d6c617374([var_7873[1],null])]));;
})
;
fn_6578636570742d6c617374=functions['except-last'];
;
functions['string-escape']=(function(args) {
	var var_666f726d=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([var_666f726d,null]) != null)?((function(args) {
	var var_666f726d=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_666f726d,['',null]]),null]) != null)?(''):((function(args) {
	var var_63=args[0];
args=args[1];
	return (function(args) {
	var var_72657374=args[0];
args=args[1];
	return fn_636f6e636174([((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_63,['\'',null]]),null]) != null)?((function(args) {
	return '\\\'';;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_63,['\"',null]]),null]) != null)?((function(args) {
	return '\\\"';;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_63,['\\',null]]),null]) != null)?((function(args) {
	return '\\\\';;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_63,['\n',null]]),null]) != null)?((function(args) {
	return '\\n';;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_63,['\r',null]]),null]) != null)?((function(args) {
	return '\\r';;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_63,['\t',null]]),null]) != null)?((function(args) {
	return '\\t';;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([true,null]) != null)?((function(args) {
	return var_63;;
})
(null)):(null)))))))))))))),[fn_737472696e672d657363617065([var_72657374,null]),null]]);;
})
([fn_737562736571([var_666f726d,[1,null]]),null]);;
})
([fn_737562736571([var_666f726d,[0,[1,null]]]),null])));;
})
([fn_737472696e672d74([var_666f726d,null]),null])):(''));;
})
;
fn_737472696e672d657363617065=functions['string-escape'];
;
macros['let']=(function(args) {
	var var_76617273=args[0];
args=args[1];
	var var_626f6479=args;
	return [(new Symbol('let*')),[var_76617273,fn_617070656e64([var_626f6479,[null,null]])]];;
})
;
macros['case']=(function(args) {
	var var_76616c7565=args[0];
args=args[1];
	var var_72657374=args;
	return ((fn_756e646566696e65642d3e6e756c6c([var_72657374,null]) != null)?((function(args) {
	var var_6669727374=args[0];
args=args[1];
	return [(new Symbol('cond')),[[[(new Symbol('equal')),[var_76616c7565,[[(new Symbol('quote')),[var_6669727374[0],null]],null]]],fn_617070656e64([var_6669727374[1],[null,null]])],[[(new Symbol('t')),[[(new Symbol('case')),[var_76616c7565,fn_617070656e64([var_72657374[1],[null,null]])]],null]],null]]];;
})
([var_72657374[0],null])):(null));;
})
;
functions['is-break']=(function(args) {
	var var_63=args[0];
args=args[1];
	return fn_696e([var_63,[[' ',['\t',['\n',['\r',['(',[')',null]]]]]],null]]);;
})
;
fn_69732d627265616b=functions['is-break'];
;
functions['hook-char']=(function(args) {
	var var_63=args[0];
args=args[1];
	var var_666e=args[0];
args=args[1];
	return var_2a63686172686f6f6b732a[fn_737472696e672d74([var_63,null])]=var_666e;;
})
;
fn_686f6f6b2d63686172=functions['hook-char'];
;
functions['char-hook-l']=(function(args) {
	var var_63=args[0];
args=args[1];
	var var_72657374=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([var_2a63686172686f6f6b732a[fn_737472696e672d74([var_63,null])],null]) != null)?((function(args) {
	var var_7265737470616972=args[0];
args=args[1];
	return (function(args) {
	var var_6e636f6465=args[0];
args=args[1];
	return (function(args) {
	var var_666f726d=args[0];
args=args[1];
	return fn_6c697374([var_6e636f6465,[var_2a63686172686f6f6b732a[fn_737472696e672d74([var_63,null])]([var_666f726d,null]),null]]);;
})
([fn_63616472([var_7265737470616972,null]),null]);;
})
([var_7265737470616972[0],null]);;
})
([fn_702d666f726d([var_72657374,null]),null])):(fn_6c697374([fn_636f6e636174([var_63,[var_72657374,null]]),[null,null]])));;
})
;
fn_636861722d686f6f6b2d6c=functions['char-hook-l'];
;
functions['p-line']=(function(args) {
	var var_72657374=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_72657374,['',null]]),null]) != null)?(fn_6c697374(['',[null,null]])):((function(args) {
	var var_63=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_696e([var_63,[['\n',['\r',null]],null]]),null]) != null)?((function(args) {
	return fn_702d77686974657370616365([fn_737562736571([var_72657374,[1,null]]),null]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([true,null]) != null)?((function(args) {
	return fn_702d6c696e65([fn_737562736571([var_72657374,[1,null]]),null]);;
})
(null)):(null))));;
})
([fn_737562736571([var_72657374,[0,[1,null]]]),null])));;
})
;
fn_702d6c696e65=functions['p-line'];
;
functions['p-whitespace']=(function(args) {
	var var_72657374=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_72657374,['',null]]),null]) != null)?(fn_6c697374(['',[null,null]])):((function(args) {
	var var_63=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_696e([var_63,[[' ',['\t',['\n',['\r',null]]]],null]]),null]) != null)?((function(args) {
	return fn_702d77686974657370616365([fn_737562736571([var_72657374,[1,null]]),null]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_63,[';',null]]),null]) != null)?((function(args) {
	return fn_702d6c696e65([fn_737562736571([var_72657374,[1,null]]),null]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([true,null]) != null)?((function(args) {
	return fn_6c697374([var_72657374,[null,null]]);;
})
(null)):(null))))));;
})
([fn_737562736571([var_72657374,[0,[1,null]]]),null])));;
})
;
fn_702d77686974657370616365=functions['p-whitespace'];
;
functions['p-string-rest']=(function(args) {
	var var_72657374=args[0];
args=args[1];
	return (function(args) {
	var var_63=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_63,['\\',null]]),null]) != null)?((function(args) {
	return (function(args) {
	var var_726573746c=args[0];
args=args[1];
	return (function(args) {
	var var_6332=args[0];
args=args[1];
	return fn_6c697374([var_726573746c[0],[fn_636f6e636174([((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_6332,['n',null]]),null]) != null)?((function(args) {
	return '\n';;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_6332,['r',null]]),null]) != null)?((function(args) {
	return '\r';;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_6332,['t',null]]),null]) != null)?((function(args) {
	return '\t';;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([true,null]) != null)?((function(args) {
	return var_6332;;
})
(null)):(null)))))))),[fn_63616472([var_726573746c,null]),null]]),null]]);;
})
([fn_737562736571([var_72657374,[1,[2,null]]]),null]);;
})
([fn_702d737472696e672d72657374([fn_737562736571([var_72657374,[2,null]]),null]),null]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_63,['\"',null]]),null]) != null)?((function(args) {
	return fn_6c697374([fn_737562736571([var_72657374,[1,null]]),['',null]]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([true,null]) != null)?((function(args) {
	return (function(args) {
	var var_726573746c=args[0];
args=args[1];
	return fn_6c697374([var_726573746c[0],[fn_636f6e636174([var_63,[fn_63616472([var_726573746c,null]),null]]),null]]);;
})
([fn_702d737472696e672d72657374([fn_737562736571([var_72657374,[1,null]]),null]),null]);;
})
(null)):(null))))));;
})
([fn_737562736571([var_72657374,[0,[1,null]]]),null]);;
})
;
fn_702d737472696e672d72657374=functions['p-string-rest'];
;
functions['p-string']=(function(args) {
	var var_72657374=args[0];
args=args[1];
	return (function(args) {
	var var_726573756c74=args[0];
args=args[1];
	return fn_6c697374([var_726573756c74[0],[fn_737472696e672d74([fn_63616472([var_726573756c74,null]),null]),null]]);;
})
([((fn_756e646566696e65642d3e6e756c6c([fn_65716c([fn_737562736571([var_72657374,[0,[1,null]]]),['\"',null]]),null]) != null)?(fn_702d737472696e672d72657374([fn_737562736571([var_72657374,[1,null]]),null])):(fn_702d737472696e672d72657374([var_72657374,null]))),null]);;
})
;
fn_702d737472696e67=functions['p-string'];
;
functions['p-atom-symbol']=(function(args) {
	var var_72657374=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_72657374,['',null]]),null]) != null)?(fn_6c697374(['',[null,null]])):((function(args) {
	var var_63=args[0];
args=args[1];
	return (function(args) {
	var var_7265737432=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_69732d627265616b([var_63,null]),null]) != null)?(fn_6c697374([var_72657374,[null,null]])):((function(args) {
	var var_726573746c=args[0];
args=args[1];
	return fn_6c697374([var_726573746c[0],[fn_636f6e636174([var_63,[fn_63616472([var_726573746c,null]),null]]),null]]);;
})
([fn_702d61746f6d2d73796d626f6c([var_7265737432,null]),null])));;
})
([fn_737562736571([var_72657374,[1,null]]),null]);;
})
([fn_737562736571([var_72657374,[0,[1,null]]]),null])));;
})
;
fn_702d61746f6d2d73796d626f6c=functions['p-atom-symbol'];
;
functions['p-atom']=(function(args) {
	var var_72657374=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_72657374,['',null]]),null]) != null)?(fn_6c697374(['',[null,null]])):((function(args) {
	var var_63=args[0];
args=args[1];
	return (function(args) {
	var var_7472616e73666f726d6564=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_63616472([var_7472616e73666f726d6564,null]),null]) != null)?(var_7472616e73666f726d6564):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_63,['\"',null]]),null]) != null)?(fn_702d737472696e67([var_72657374,null])):((function(args) {
	var var_726573756c74=args[0];
args=args[1];
	return fn_6c697374([var_726573756c74[0],[((fn_756e646566696e65642d3e6e756c6c([fn_696e([var_63,[['0',['1',['2',['3',['4',['5',['6',['7',['8',['9',null]]]]]]]]]],null]]),null]) != null)?(fn_6e756d6265722d74([fn_63616472([var_726573756c74,null]),null])):(fn_73796d626f6c2d74([fn_63616472([var_726573756c74,null]),null]))),null]]);;
})
([fn_702d61746f6d2d73796d626f6c([var_72657374,null]),null])))));;
})
([fn_636861722d686f6f6b2d6c([var_63,[fn_737562736571([var_72657374,[1,null]]),null]]),null]);;
})
([fn_737562736571([var_72657374,[0,[1,null]]]),null])));;
})
;
fn_702d61746f6d=functions['p-atom'];
;
functions['p-list']=(function(args) {
	var var_72657374=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_72657374,['',null]]),null]) != null)?(fn_6c697374(['',[null,null]])):((function(args) {
	var var_72657374=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_72657374,['',null]]),null]) != null)?(fn_6c697374(['',[null,null]])):((function(args) {
	var var_63=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_63,[')',null]]),null]) != null)?(fn_6c697374([var_72657374,[null,null]])):((function(args) {
	var var_726573746c=args[0];
args=args[1];
	return (function(args) {
	var var_726573746d=args[0];
args=args[1];
	return fn_6c697374([var_726573746d[0],[[fn_63616472([var_726573746c,null]),fn_63616472([var_726573746d,null])],null]]);;
})
([fn_702d6c697374([var_726573746c[0],null]),null]);;
})
([fn_702d666f726d([var_72657374,null]),null])));;
})
([fn_737562736571([var_72657374,[0,[1,null]]]),null])));;
})
([fn_702d77686974657370616365([var_72657374,null])[0],null])));;
})
;
fn_702d6c697374=functions['p-list'];
;
functions['p-form']=(function(args) {
	var var_72657374=args[0];
args=args[1];
	return (function(args) {
	var var_72657374=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_72657374,['',null]]),null]) != null)?(fn_6c697374(['',[null,null]])):((function(args) {
	var var_63=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_63,['(',null]]),null]) != null)?((function(args) {
	var var_726573746c=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_726573746c[0],['',null]]),null]) != null)?(var_726573746c):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([fn_737562736571([var_726573746c[0],[0,[1,null]]]),[')',null]]),null]) != null)?(fn_6c697374([fn_737562736571([var_726573746c[0],[1,null]]),[fn_63616472([var_726573746c,null]),null]])):(var_726573746c))));;
})
([fn_702d6c697374([fn_737562736571([var_72657374,[1,null]]),null]),null])):(fn_702d61746f6d([var_72657374,null])));;
})
([fn_737562736571([var_72657374,[0,[1,null]]]),null])));;
})
([fn_702d77686974657370616365([var_72657374,null])[0],null]);;
})
;
fn_702d666f726d=functions['p-form'];
;
functions['parse']=(function(args) {
	var var_636f6465=args[0];
args=args[1];
	return fn_63616472([fn_702d6c697374([var_636f6465,null]),null]);;
})
;
fn_7061727365=functions['parse'];
;
functions['make-reader']=(function(args) {
	var var_636f6465=args[0];
args=args[1];
	return (function(args) {
	var var_72657374=args[0];
args=args[1];
	return (function(args) {
	var var_726573756c74=args[0];
args=args[1];
	return (function(args) {
	var var_61726773=args;
var_726573756c74=fn_702d666f726d([var_72657374,null]);
var_72657374=var_726573756c74[0];
	return fn_63616472([var_726573756c74,null]);;
})
;;
})
([null,null]);;
})
([var_636f6465,null]);;
})
;
fn_6d616b652d726561646572=functions['make-reader'];
;
functions['make-forms-reader']=(function(args) {
	var var_666f726d73=args[0];
args=args[1];
	return (function(args) {
	var var_72657374=args[0];
args=args[1];
	return (function(args) {
	var var_726573756c74=args[0];
args=args[1];
	return (function(args) {
	var var_61726773=args;
var_726573756c74=((fn_756e646566696e65642d3e6e756c6c([var_72657374,null]) != null)?(var_72657374[0]):(null));
var_72657374=((fn_756e646566696e65642d3e6e756c6c([var_72657374,null]) != null)?(var_72657374[1]):(null));
	return var_726573756c74;;
})
;;
})
([null,null]);;
})
([var_666f726d73,null]);;
})
;
fn_6d616b652d666f726d732d726561646572=functions['make-forms-reader'];
;
functions['env']=(function(args) {
	return 1;;
})
;
fn_656e76=functions['env'];
;
functions['nextenv']=(function(args) {
	var var_656e76=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_6e756c6c([var_656e76,null]),null]) != null)?(1):((var_656e76+1)));;
})
;
fn_6e657874656e76=functions['nextenv'];
;
functions['prevenv']=(function(args) {
	var var_656e76=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_656e76,[1,null]]),null]) != null)?(null):((var_656e76-1)));;
})
;
fn_70726576656e76=functions['prevenv'];
;
functions['denv']=(function(args) {
	var var_656e76=args[0];
args=args[1];
	return fn_636f6e636174(['env',[var_656e76,null]]);;
})
;
fn_64656e76=functions['denv'];
;
macros['defvop']=(function(args) {
	var var_6e616d65=args[0];
args=args[1];
	var var_61726773=args[0];
args=args[1];
	var var_626f6479=args;
	return [(new Symbol('defun')),[fn_73796d626f6c2d74([fn_636f6e636174(['vop:',[fn_737472696e672d74([var_6e616d65,null]),null]]),null]),[var_61726773,fn_617070656e64([var_626f6479,[null,null]])]]];;
})
;
functions['vopsquote-unquote']=(function(args) {
	var var_666f726d73=args[0];
args=args[1];
	return fn_6d6170636172([(function(args) {
	var var_78=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([((fn_756e646566696e65642d3e6e756c6c([fn_6c69737470([var_78,null]),null]) != null)?(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_78[0],[(new Symbol('vopsquote-uq')),null]]),null]) != null)?(true):(null))):(null)),null]) != null)?((function(args) {
	return fn_636f6d70696c65([fn_63616472([var_78,null]),[null,null]]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_6c69737470([var_78,null]),null]) != null)?((function(args) {
	return fn_766f707371756f74652d756e71756f7465([var_78,null]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([true,null]) != null)?((function(args) {
	return var_78;;
})
(null)):(null))))));;
})
,[var_666f726d73,null]]);;
})
;
fn_766f707371756f74652d756e71756f7465=functions['vopsquote-unquote'];
;
macros['vopsquote']=(function(args) {
	var var_666f726d73=args[0];
args=args[1];
	return [(new Symbol('vops')),[[(new Symbol('concat')),fn_617070656e64([fn_766f707371756f74652d756e71756f7465([var_666f726d73,null]),[null,null]])],null]];;
})
;
functions['vop:init']=(function(args) {
	return fn_636f6e636174(['if (typeof window !== \'undefined\')\n\t\t{\n\t\t\t\tmodules = {\n\t\t\t\t\t\tfs : {\n\t\t\t\t\t\t\t\treadFile : function(name, callback) { $.get(name, function(data) { callback(null, data); }); }\n\t\t\t\t\t\t},\n\t\t\t\t\t\tsys : {\n\t\t\t\t\t\t\t\tprint : function() { return console.log.apply(console, arguments); },\n\t\t\t\t\t\t\t\tdebug : function() { return console.log.apply(console, arguments); }\n\t\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\t\n\t\t\t\trequire = function(name)\n\t\t\t\t{\n\t\t\t\t\treturn modules[name];\n\t\t\t\t};\n\t\t\t\t\n\t\t\t\tprocess = { argv : [] };\n\t\t}',['var sys=require(\'sys\');',['var fs=require(\'fs\');',['if (typeof functions === \'undefined\') {',['    functions = {};',['}',['if (typeof macros === \'undefined\') {',['    macros = {};',['}',['function Symbol(value)\n\t\t\t\t {\n\t\t\t\t\t\t this.value = value;\n\t\t\t\t };',null]]]]]]]]]]);;
})
;
fn_766f703a696e6974=functions['vop:init'];
;
functions['vop:t']=(function(args) {
	return 'true';;
})
;
fn_766f703a74=functions['vop:t'];
;
functions['vop:nil']=(function(args) {
	return 'null';;
})
;
fn_766f703a6e696c=functions['vop:nil'];
;
functions['undefined->null']=(function(args) {
	var var_78=args[0];
args=args[1];
	return ((var_78!=null && typeof var_78 !== 'undefined')?var_78:null);;
})
;
fn_756e646566696e65642d3e6e756c6c=functions['undefined->null'];
;
functions['vop:if']=(function(args) {
	var var_6966=args[0];
args=args[1];
	var var_7468656e=args[0];
args=args[1];
	var var_656c7365=args[0];
args=args[1];
	var var_656e76=args[0];
args=args[1];
	return fn_636f6e636174(['((',[fn_636f6d70696c65([[(new Symbol('undefined->null')),[var_6966,null]],[var_656e76,null]]),[' != null)?(',[fn_636f6d70696c65([var_7468656e,[var_656e76,null]]),['):(',[fn_636f6d70696c65([var_656c7365,[var_656e76,null]]),['))',null]]]]]]]);;
})
;
fn_766f703a6966=functions['vop:if'];
;
macros['typeof']=(function(args) {
	var var_617267=args[0];
args=args[1];
	return [(new Symbol('vopsquote')),[['(typeof ',[[(new Symbol('vopsquote-uq')),[var_617267,null]],[')',null]]],null]];;
})
;
macros['top-var']=(function(args) {
	var var_766172=args[0];
args=args[1];
	var var_656e76=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([var_656e76,null]) != null)?([(new Symbol('compile')),[[(new Symbol('qq')),[[(new Symbol('if')),[[(new Symbol('===')),[[(new Symbol('typeof')),[[(new Symbol('vops')),[[(new Symbol('vop:lookup')),[var_766172,[var_656e76,null]]],null]],null]],['undefined',null]]],[[(new Symbol('top-var')),[var_766172,[fn_70726576656e76([var_656e76,null]),null]]],[[(new Symbol('vopsquote')),[['undefined',null],null]],null]]]],null]],[var_656e76,null]]]):(null));;
})
;
functions['vop:assign']=(function(args) {
	var var_766172=args[0];
args=args[1];
	var var_76616c=args[0];
args=args[1];
	var var_656e76=args[0];
args=args[1];
	return fn_636f6e636174([fn_636f6d70696c65([var_766172,[var_656e76,null]]),['=',[fn_636f6d70696c65([var_76616c,[var_656e76,null]]),null]]]);;
})
;
fn_766f703a61737369676e=functions['vop:assign'];
;
functions['quoted-symbol-p']=(function(args) {
	var var_6b=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_6c69737470([var_6b,null]),null]) != null)?(((fn_756e646566696e65642d3e6e756c6c([((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_6b[0],[(new Symbol('quote')),null]]),null]) != null)?(((fn_756e646566696e65642d3e6e756c6c([fn_73796d626f6c2d742d70([fn_63616472([var_6b,null]),null]),null]) != null)?(true):(null))):(null)),null]) != null)?(true):(null))):(null));;
})
;
fn_71756f7465642d73796d626f6c2d70=functions['quoted-symbol-p'];
;
functions['string->hexencode']=(function(args) {
	var var_737472=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([((fn_61727261792e6c656e677468([var_737472,null])>0)?true:null),null]) != null)?((function(args) {
	var var_686578=args[0];
args=args[1];
	return (function(args) {
	var var_76616c=args[0];
args=args[1];
	return fn_636f6e636174([fn_61726566([var_686578,[fn_6d6174682e666c6f6f72([(var_76616c/16),null]),null]]),[fn_61726566([var_686578,[(var_76616c%16),null]]),[fn_737472696e672d3e686578656e636f6465([fn_737562736571([var_737472,[1,null]]),null]),null]]]);;
})
([fn_636861722d636f6465([fn_61726566([var_737472,[0,null]]),null]),null]);;
})
(['0123456789abcdef',null])):(''));;
})
;
fn_737472696e672d3e686578656e636f6465=functions['string->hexencode'];
;
functions['make-fn-name']=(function(args) {
	var var_666f726d=args[0];
args=args[1];
	return fn_636f6e636174(['fn_',[fn_737472696e672d3e686578656e636f6465([fn_737472696e672d74([fn_63616472([var_666f726d,null]),null]),null]),null]]);;
})
;
fn_6d616b652d666e2d6e616d65=functions['make-fn-name'];
;
functions['make-var-name']=(function(args) {
	var var_666f726d=args[0];
args=args[1];
	return fn_636f6e636174(['var_',[fn_737472696e672d3e686578656e636f6465([fn_737472696e672d74([var_666f726d,null]),null]),null]]);;
})
;
fn_6d616b652d7661722d6e616d65=functions['make-var-name'];
;
functions['vop:lookup']=(function(args) {
	var var_666f726d=args[0];
args=args[1];
	var var_656e76=args[0];
args=args[1];
	return fn_6d616b652d7661722d6e616d65([var_666f726d,null]);;
})
;
fn_766f703a6c6f6f6b7570=functions['vop:lookup'];
;
functions['vop:load-from']=(function(args) {
	var var_7768657265=args[0];
args=args[1];
	var var_6e616d65=args[0];
args=args[1];
	var var_656e76=args[0];
args=args[1];
	return (function(args) {
	var var_72656e616d652d73796d626f6c=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_7768657265,[(new Symbol('functions-dict')),null]]),null]) != null)?((function(args) {
	return fn_636f6e636174(['functions[',[var_72656e616d652d73796d626f6c([var_6e616d65,null]),[']',null]]]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_7768657265,[(new Symbol('functions')),null]]),null]) != null)?(((fn_756e646566696e65642d3e6e756c6c([fn_71756f7465642d73796d626f6c2d70([var_6e616d65,null]),null]) != null)?(true):(null))):(null)),null]) != null)?((function(args) {
	return fn_6d616b652d666e2d6e616d65([var_6e616d65,null]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_7768657265,[(new Symbol('env')),null]]),null]) != null)?((function(args) {
	return fn_766f703a6c6f6f6b7570([var_6e616d65,[var_656e76,null]]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([var_7768657265,null]) != null)?((function(args) {
	return fn_636f6e636174([fn_737472696e672d74([var_7768657265,null]),['[',[var_72656e616d652d73796d626f6c([var_6e616d65,null]),[']',null]]]]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([true,null]) != null)?((function(args) {
	return fn_636f6e636174([fn_737472696e672d74([fn_63616472([var_6e616d65,null]),null]),null]);;
})
(null)):(null))))))))));;
})
([(function(args) {
	var var_6e616d65=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_71756f7465642d73796d626f6c2d70([var_6e616d65,null]),null]) != null)?(fn_636f6e636174(['\'',[fn_737472696e672d74([fn_63616472([var_6e616d65,null]),null]),['\'',null]]])):(fn_636f6e636174([fn_636f6d70696c65([[(new Symbol('string-t')),[var_6e616d65,null]],[null,null]]),null])));;
})
,null]);;
})
;
fn_766f703a6c6f61642d66726f6d=functions['vop:load-from'];
;
functions['vop:defun']=(function(args) {
	var var_666f726d=args[0];
args=args[1];
	var var_656e76=args[0];
args=args[1];
	return fn_3a636f6d70696c652d70726f676e([fn_6d616b652d666f726d732d726561646572([[[(new Symbol('setq')),[[(new Symbol('location')),[[(new Symbol('quote')),[(new Symbol('functions-dict')),null]],[[(new Symbol('quote')),[fn_63616472([var_666f726d,null]),null]],null]]],[[(new Symbol('lambda')),[fn_6361646472([var_666f726d,null]),fn_617070656e64([fn_6364646472([var_666f726d,null]),[null,null]])]],null]]],[[(new Symbol('setq')),[[(new Symbol('local')),[[(new Symbol('quote')),[fn_73796d626f6c2d74([fn_6d616b652d666e2d6e616d65([var_666f726d,null]),null]),null]],null]],[[(new Symbol('location')),[[(new Symbol('quote')),[(new Symbol('functions-dict')),null]],[[(new Symbol('quote')),[fn_63616472([var_666f726d,null]),null]],null]]],null]]],null]],null]),[var_656e76,[(function(args) {
	var var_78=args[0];
args=args[1];
	return var_78;;
})
,null]]]);;
})
;
fn_766f703a646566756e=functions['vop:defun'];
;
functions['vop:symbol']=(function(args) {
	var var_666f726d=args[0];
args=args[1];
	var var_656e76=args[0];
args=args[1];
	return fn_636f6e636174(['(new Symbol(\'',[fn_737472696e672d657363617065([fn_737472696e672d74([var_666f726d,null]),null]),['\'))',null]]]);;
})
;
fn_766f703a73796d626f6c=functions['vop:symbol'];
;
functions['vop:number']=(function(args) {
	var var_666f726d=args[0];
args=args[1];
	return var_666f726d;;
})
;
fn_766f703a6e756d626572=functions['vop:number'];
;
functions['vop:string']=(function(args) {
	var var_666f726d=args[0];
args=args[1];
	return fn_636f6e636174(['\'',[fn_737472696e672d657363617065([var_666f726d,null]),['\'',null]]]);;
})
;
fn_766f703a737472696e67=functions['vop:string'];
;
functions['vop:quote']=(function(args) {
	var var_666f726d=args[0];
args=args[1];
	var var_656e76=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_6e6f74([var_666f726d,null]),null]) != null)?((function(args) {
	return fn_766f703a6e696c(null);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_61746f6d([var_666f726d,null]),null]) != null)?((function(args) {
	return ((fn_756e646566696e65642d3e6e756c6c([fn_6e756d6265722d742d70([var_666f726d,null]),null]) != null)?((function(args) {
	return fn_766f703a6e756d626572([var_666f726d,null]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_737472696e672d742d70([var_666f726d,null]),null]) != null)?((function(args) {
	return fn_766f703a737472696e67([var_666f726d,null]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([true,null]) != null)?((function(args) {
	return fn_766f703a73796d626f6c([var_666f726d,[var_656e76,null]]);;
})
(null)):(null))))));;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([true,null]) != null)?((function(args) {
	return fn_636f6e636174(['[',[fn_766f703a71756f7465([var_666f726d[0],[var_656e76,null]]),[',',[fn_766f703a71756f7465([var_666f726d[1],[var_656e76,null]]),[']',null]]]]]);;
})
(null)):(null))))));;
})
;
fn_766f703a71756f7465=functions['vop:quote'];
;
functions['compiledforms->commalist']=(function(args) {
	var var_7873=args[0];
args=args[1];
	var var_656e76=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_6e756c6c([var_7873,null]),null]) != null)?(fn_766f703a6e696c(null)):(fn_636f6e636174(['[',[fn_636f6d70696c65([var_7873[0],[var_656e76,null]]),[',',[fn_636f6d70696c6564666f726d732d3e636f6d6d616c697374([var_7873[1],[var_656e76,null]]),[']',null]]]]])));;
})
;
fn_636f6d70696c6564666f726d732d3e636f6d6d616c697374=functions['compiledforms->commalist'];
;
functions['vop:list']=(function(args) {
	var var_7873=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_6e756c6c([var_7873,null]),null]) != null)?(fn_766f703a6e696c(null)):(fn_636f6e636174(['[',[var_7873[0],[',',[fn_766f703a6c697374([var_7873[1],null]),[']',null]]]]])));;
})
;
fn_766f703a6c697374=functions['vop:list'];
;
functions['vop:block']=(function(args) {
	var var_7873=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_6e756c6c([var_7873,null]),null]) != null)?(''):(fn_636f6e636174([var_7873[0],[';\n',[fn_766f703a626c6f636b([var_7873[1],null]),null]]])));;
})
;
fn_766f703a626c6f636b=functions['vop:block'];
;
functions['vop:call']=(function(args) {
	var var_666e=args[0];
args=args[1];
	var var_61726773=args[0];
args=args[1];
	var var_656e76=args[0];
args=args[1];
	return fn_636f6e636174([fn_636f6d70696c65([var_666e,[var_656e76,null]]),['(',[fn_636f6d70696c6564666f726d732d3e636f6d6d616c697374([var_61726773,[var_656e76,null]]),[')',null]]]]);;
})
;
fn_766f703a63616c6c=functions['vop:call'];
;
functions['vop:apply']=(function(args) {
	var var_666e=args[0];
args=args[1];
	var var_61726773=args[0];
args=args[1];
	var var_656e76=args[0];
args=args[1];
	return fn_636f6e636174([fn_636f6d70696c65([var_666e,[var_656e76,null]]),['(',[fn_636f6d70696c65([var_61726773,[var_656e76,null]]),[')',null]]]]);;
})
;
fn_766f703a6170706c79=functions['vop:apply'];
;
functions['compile-group-parameters']=(function(args) {
	var var_6e616d6573=args[0];
args=args[1];
	var var_656e76=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([var_6e616d6573,null]) != null)?(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_6e616d6573[0],[(new Symbol('&rest')),null]]),null]) != null)?((function(args) {
	return fn_636f6e636174(['\t',['var ',[fn_636f6d70696c65([fn_63616472([var_6e616d6573,null]),[var_656e76,null]]),['=args;\n',null]]]]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([true,null]) != null)?((function(args) {
	return fn_636f6e636174(['\t',['var ',[fn_636f6d70696c65([var_6e616d6573[0],[var_656e76,null]]),['=args[0];\n',['args=args[1];\n',[fn_636f6d70696c652d67726f75702d706172616d6574657273([var_6e616d6573[1],[var_656e76,null]]),null]]]]]]);;
})
(null)):(null))))):(null));;
})
;
fn_636f6d70696c652d67726f75702d706172616d6574657273=functions['compile-group-parameters'];
;
functions['vop:return']=(function(args) {
	var var_666f726d=args[0];
args=args[1];
	var var_656e76=args[0];
args=args[1];
	return fn_636f6e636174(['return ',[fn_636f6d70696c65([var_666f726d,[var_656e76,null]]),[';',null]]]);;
})
;
fn_766f703a72657475726e=functions['vop:return'];
;
functions['vop:closure']=(function(args) {
	var var_666f726d=args[0];
args=args[1];
	var var_656e76=args[0];
args=args[1];
	return (function(args) {
	var var_6c656e76=args[0];
args=args[1];
	return fn_636f6e636174(['(function(args) {\n',[fn_636f6d70696c652d67726f75702d706172616d6574657273([fn_63616472([var_666f726d,null]),[var_6c656e76,null]]),[((fn_756e646566696e65642d3e6e756c6c([fn_63646472([var_666f726d,null]),null]) != null)?(fn_3a636f6d70696c652d70726f676e([fn_6d616b652d666f726d732d726561646572([fn_63646472([var_666f726d,null]),null]),[var_6c656e76,[(function(args) {
	var var_78=args[0];
args=args[1];
	return fn_636f6e636174(['\treturn ',[var_78,[';',null]]]);;
})
,null]]])):('\treturn null;\n')),['})\n',null]]]]);;
})
([fn_6e657874656e76([var_656e76,null]),null]);;
})
;
fn_766f703a636c6f73757265=functions['vop:closure'];
;
macros['defboolbinop']=(function(args) {
	var var_6e616d65=args[0];
args=args[1];
	return [(new Symbol('defmacro')),[var_6e616d65,[[(new Symbol('a')),[(new Symbol('b')),null]],[[(new Symbol('qq')),[[(new Symbol('vopsquote')),[['((',[[(new Symbol('vopsquote-uq')),[[(new Symbol('uq')),[(new Symbol('a')),null]],null]],[fn_737472696e672d74([var_6e616d65,null]),[[(new Symbol('vopsquote-uq')),[[(new Symbol('uq')),[(new Symbol('b')),null]],null]],[')?true:null)',null]]]]],null]],null]],null]]]];;
})
;
macros['defbinop']=(function(args) {
	var var_6e616d65=args[0];
args=args[1];
	return [(new Symbol('defmacro')),[var_6e616d65,[[(new Symbol('a')),[(new Symbol('b')),null]],[[(new Symbol('qq')),[[(new Symbol('vopsquote')),[['(',[[(new Symbol('vopsquote-uq')),[[(new Symbol('uq')),[(new Symbol('a')),null]],null]],[fn_737472696e672d74([var_6e616d65,null]),[[(new Symbol('vopsquote-uq')),[[(new Symbol('uq')),[(new Symbol('b')),null]],null]],[')',null]]]]],null]],null]],null]]]];;
})
;
macros['>']=(function(args) {
	var var_61=args[0];
args=args[1];
	var var_62=args[0];
args=args[1];
	return [(new Symbol('vopsquote')),[['((',[[(new Symbol('vopsquote-uq')),[var_61,null]],['>',[[(new Symbol('vopsquote-uq')),[var_62,null]],[')?true:null)',null]]]]],null]];;
})
;
macros['<']=(function(args) {
	var var_61=args[0];
args=args[1];
	var var_62=args[0];
args=args[1];
	return [(new Symbol('vopsquote')),[['((',[[(new Symbol('vopsquote-uq')),[var_61,null]],['<',[[(new Symbol('vopsquote-uq')),[var_62,null]],[')?true:null)',null]]]]],null]];;
})
;
macros['==']=(function(args) {
	var var_61=args[0];
args=args[1];
	var var_62=args[0];
args=args[1];
	return [(new Symbol('vopsquote')),[['((',[[(new Symbol('vopsquote-uq')),[var_61,null]],['==',[[(new Symbol('vopsquote-uq')),[var_62,null]],[')?true:null)',null]]]]],null]];;
})
;
macros['===']=(function(args) {
	var var_61=args[0];
args=args[1];
	var var_62=args[0];
args=args[1];
	return [(new Symbol('vopsquote')),[['((',[[(new Symbol('vopsquote-uq')),[var_61,null]],['===',[[(new Symbol('vopsquote-uq')),[var_62,null]],[')?true:null)',null]]]]],null]];;
})
;
macros['>=']=(function(args) {
	var var_61=args[0];
args=args[1];
	var var_62=args[0];
args=args[1];
	return [(new Symbol('vopsquote')),[['((',[[(new Symbol('vopsquote-uq')),[var_61,null]],['>=',[[(new Symbol('vopsquote-uq')),[var_62,null]],[')?true:null)',null]]]]],null]];;
})
;
macros['<=']=(function(args) {
	var var_61=args[0];
args=args[1];
	var var_62=args[0];
args=args[1];
	return [(new Symbol('vopsquote')),[['((',[[(new Symbol('vopsquote-uq')),[var_61,null]],['<=',[[(new Symbol('vopsquote-uq')),[var_62,null]],[')?true:null)',null]]]]],null]];;
})
;
macros['+']=(function(args) {
	var var_61=args[0];
args=args[1];
	var var_62=args[0];
args=args[1];
	return [(new Symbol('vopsquote')),[['(',[[(new Symbol('vopsquote-uq')),[var_61,null]],['+',[[(new Symbol('vopsquote-uq')),[var_62,null]],[')',null]]]]],null]];;
})
;
macros['-']=(function(args) {
	var var_61=args[0];
args=args[1];
	var var_62=args[0];
args=args[1];
	return [(new Symbol('vopsquote')),[['(',[[(new Symbol('vopsquote-uq')),[var_61,null]],['-',[[(new Symbol('vopsquote-uq')),[var_62,null]],[')',null]]]]],null]];;
})
;
macros['*']=(function(args) {
	var var_61=args[0];
args=args[1];
	var var_62=args[0];
args=args[1];
	return [(new Symbol('vopsquote')),[['(',[[(new Symbol('vopsquote-uq')),[var_61,null]],['*',[[(new Symbol('vopsquote-uq')),[var_62,null]],[')',null]]]]],null]];;
})
;
macros['/']=(function(args) {
	var var_61=args[0];
args=args[1];
	var var_62=args[0];
args=args[1];
	return [(new Symbol('vopsquote')),[['(',[[(new Symbol('vopsquote-uq')),[var_61,null]],['/',[[(new Symbol('vopsquote-uq')),[var_62,null]],[')',null]]]]],null]];;
})
;
macros['%']=(function(args) {
	var var_61=args[0];
args=args[1];
	var var_62=args[0];
args=args[1];
	return [(new Symbol('vopsquote')),[['(',[[(new Symbol('vopsquote-uq')),[var_61,null]],['%',[[(new Symbol('vopsquote-uq')),[var_62,null]],[')',null]]]]],null]];;
})
;
functions['cons']=(function(args) {
	var var_61=args[0];
args=args[1];
	var var_62=args[0];
args=args[1];
	return [var_61,var_62];;
})
;
fn_636f6e73=functions['cons'];
;
macros['cons']=(function(args) {
	var var_61=args[0];
args=args[1];
	var var_62=args[0];
args=args[1];
	return [(new Symbol('vopsquote')),[['[',[[(new Symbol('vopsquote-uq')),[var_61,null]],[',',[[(new Symbol('vopsquote-uq')),[var_62,null]],[']',null]]]]],null]];;
})
;
functions['car']=(function(args) {
	var var_78=args[0];
args=args[1];
	return var_78[0];;
})
;
fn_636172=functions['car'];
;
macros['car']=(function(args) {
	var var_78=args[0];
args=args[1];
	return [(new Symbol('vopsquote')),[[[(new Symbol('vopsquote-uq')),[var_78,null]],['[0]',null]],null]];;
})
;
functions['cdr']=(function(args) {
	var var_78=args[0];
args=args[1];
	return var_78[1];;
})
;
fn_636472=functions['cdr'];
;
macros['cdr']=(function(args) {
	var var_78=args[0];
args=args[1];
	return [(new Symbol('vopsquote')),[[[(new Symbol('vopsquote-uq')),[var_78,null]],['[1]',null]],null]];;
})
;
functions['null']=(function(args) {
	var var_78=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_78,[null,null]]),null]) != null)?(true):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([(typeof var_78),['undefined',null]]),null]) != null)?(true):(null))));;
})
;
fn_6e756c6c=functions['null'];
;
functions['fatal']=(function(args) {
	return 'throw \'fatal error\';';;
})
;
fn_666174616c=functions['fatal'];
;
functions['meval']=(function(args) {
	var var_636f6465=args[0];
args=args[1];
try {;
return eval(var_636f6465);
} catch(e) { sys.debug(var_636f6465); throw e; };
	return null;;
})
;
fn_6d6576616c=functions['meval'];
;
functions['printerror']=(function(args) {
	var var_617267=args[0];
args=args[1];
sys.debug(var_617267);
	return var_617267;;
})
;
fn_7072696e746572726f72=functions['printerror'];
;
functions['symbol-t-p']=(function(args) {
	var var_617267=args[0];
args=args[1];
	return (var_617267 instanceof Symbol ? true:null);;
})
;
fn_73796d626f6c2d742d70=functions['symbol-t-p'];
;
functions['string-t-p']=(function(args) {
	var var_617267=args[0];
args=args[1];
	return (typeof var_617267 === 'string' ? true:null);;
})
;
fn_737472696e672d742d70=functions['string-t-p'];
;
functions['number-t-p']=(function(args) {
	var var_617267=args[0];
args=args[1];
	return (typeof var_617267 === 'number' ? true:null);;
})
;
fn_6e756d6265722d742d70=functions['number-t-p'];
;
functions['symbol-t']=(function(args) {
	var var_617267=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_73796d626f6c2d742d70([var_617267,null]),null]) != null)?(new Symbol(var_617267.value)):(new Symbol(''+var_617267)));;
})
;
fn_73796d626f6c2d74=functions['symbol-t'];
;
functions['boolean-t-p']=(function(args) {
	var var_617267=args[0];
args=args[1];
	return (typeof var_617267 === 'boolean' ? true:null);;
})
;
fn_626f6f6c65616e2d742d70=functions['boolean-t-p'];
;
functions['string-t']=(function(args) {
	var var_617267=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_73796d626f6c2d742d70([var_617267,null]),null]) != null)?((function(args) {
	return var_617267.value;;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_626f6f6c65616e2d742d70([var_617267,null]),null]) != null)?((function(args) {
	return (var_617267?'t':'nil');;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([true,null]) != null)?((function(args) {
	return ''+var_617267;;
})
(null)):(null))))));;
})
;
fn_737472696e672d74=functions['string-t'];
;
functions['number-t']=(function(args) {
	var var_617267=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_73796d626f6c2d742d70([var_617267,null]),null]) != null)?(parseFloat(var_617267.value)):(parseFloat(''+var_617267)));;
})
;
fn_6e756d6265722d74=functions['number-t'];
;
functions['eql']=(function(args) {
	var var_78=args[0];
args=args[1];
	var var_79=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([((fn_756e646566696e65642d3e6e756c6c([fn_73796d626f6c2d742d70([var_78,null]),null]) != null)?(((fn_756e646566696e65642d3e6e756c6c([fn_73796d626f6c2d742d70([var_79,null]),null]) != null)?(true):(null))):(null)),null]) != null)?((function(args) {
	return (var_78.value == var_79.value ? true:null);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([true,null]) != null)?((function(args) {
	return (var_78 == var_79?true:null);;
})
(null)):(null))));;
})
;
fn_65716c=functions['eql'];
;
functions['atom']=(function(args) {
	var var_617267=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_6e756c6c([var_617267,null]),null]) != null)?((function(args) {
	return true;;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_73796d626f6c2d742d70([var_617267,null]),null]) != null)?((function(args) {
	return true;;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([true,null]) != null)?((function(args) {
	return fn_696e([(typeof var_617267),[['boolean',['number',['string',null]]],null]]);;
})
(null)):(null))))));;
})
;
fn_61746f6d=functions['atom'];
;
functions['concat']=(function(args) {
var s = '';
	while(args != null)
	{
	if (args[0] != null)
	s += args[0];
	args = args[1];
	};
	return s;;
})
;
fn_636f6e636174=functions['concat'];
;
functions['read-line']=(function(args) {
	var var_63616c6c6261636b=args[0];
args=args[1];
process.stdin.resume();
     process.stdin.once('data',
     function(data) {
       var_63616c6c6261636b([data+'', null]);
     });;
	return null;;
})
;
fn_726561642d6c696e65=functions['read-line'];
;
functions['require']=(function(args) {
var file = args[0];
	   var callback = args[1][0];

		 fs.readFile(file, function(err, data) {
			 callback([data+'', null]);
		 });;
	return null;;
})
;
fn_72657175697265=functions['require'];
;
functions['subseq']=(function(args) {
if (args[1][1] != null)
			 return args[0].substring(args[1][0], args[1][1][0]);
		 else
			 return args[0].substring(args[1][0]);;
	return null;;
})
;
fn_737562736571=functions['subseq'];
;
functions['print']=(function(args) {
var values = [];
		 var printvalues = [];
		 var v = null;
		 while(args != null)
		 {
			 v = args[0];
			 if (v instanceof Symbol)
         printvalues.push(v.value);
       else
         printvalues.push(v);
       args = args[1];
     }
     sys.print(printvalues.join(''));
     return v;;
	return null;;
})
;
fn_7072696e74=functions['print'];
;
functions['array.length']=(function(args) {
	var var_6172726179=args[0];
args=args[1];
	return var_6172726179.length;;
})
;
fn_61727261792e6c656e677468=functions['array.length'];
;
functions['array->list']=(function(args) {
	var var_6172726179=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([((fn_61727261792e6c656e677468([var_6172726179,null])>0)?true:null),null]) != null)?([var_6172726179[0],((fn_756e646566696e65642d3e6e756c6c([((fn_61727261792e6c656e677468([var_6172726179,null])>1)?true:null),null]) != null)?(fn_61727261792d3e6c697374([var_6172726179.slice(1),null])):(null))]):(null));;
})
;
fn_61727261792d3e6c697374=functions['array->list'];
;
functions['aref']=(function(args) {
	var var_6172726179=args[0];
args=args[1];
	var var_69=args[0];
args=args[1];
	return var_6172726179[var_69];;
})
;
fn_61726566=functions['aref'];
;
functions['char-code']=(function(args) {
	var var_73=args[0];
args=args[1];
	return var_73.charCodeAt(0);;
})
;
fn_636861722d636f6465=functions['char-code'];
;
functions['math.floor']=(function(args) {
	var var_6e756d=args[0];
args=args[1];
	return Math.floor(var_6e756d);;
})
;
fn_6d6174682e666c6f6f72=functions['math.floor'];
;
macros['make-hash']=(function(args) {
	return [(new Symbol('vopsquote')),[['{}',null],null]];;
})
;
macros['get-hash']=(function(args) {
	var var_68617368=args[0];
args=args[1];
	var var_6b6579=args[0];
args=args[1];
	return [(new Symbol('vopsquote')),[[[(new Symbol('vopsquote-uq')),[var_68617368,null]],['[',[[(new Symbol('vopsquote-uq')),[[(new Symbol('string-t')),[var_6b6579,null]],null]],[']',null]]]],null]];;
})
;
macros['set-hash']=(function(args) {
	var var_68617368=args[0];
args=args[1];
	var var_6b6579=args[0];
args=args[1];
	var var_76616c7565=args[0];
args=args[1];
	return [(new Symbol('setq')),[[(new Symbol('vopsquote')),[[[(new Symbol('vopsquote-uq')),[var_68617368,null]],['[',[[(new Symbol('vopsquote-uq')),[[(new Symbol('string-t')),[var_6b6579,null]],null]],[']',null]]]],null]],[var_76616c7565,null]]];;
})
;
macros['length']=(function(args) {
	var var_737472=args[0];
args=args[1];
	return [(new Symbol('vopsquote')),[[[(new Symbol('vopsquote-uq')),[var_737472,null]],['.length',null]],null]];;
})
;
macros['string.length']=(function(args) {
	var var_737472=args[0];
args=args[1];
	return [(new Symbol('vopsquote')),[[[(new Symbol('vopsquote-uq')),[var_737472,null]],['.length',null]],null]];;
})
;
macros['catch-errors']=(function(args) {
	var var_666e=args[0];
args=args[1];
	var var_626f6479=args;
	return [(new Symbol('progn')),[[(new Symbol('vopsquote')),[['try {',[[(new Symbol('vopsquote-uq')),fn_617070656e64([var_626f6479,[null,null]])],['} catch(e) { ',[[(new Symbol('vopsquote-uq')),[[(new Symbol('funcall')),[var_666e,[[(new Symbol('vopsquote')),[['e',null],null]],null]]],null]],['}',null]]]]],null]],[(new Symbol('nil')),null]]];;
})
;
macros['labels']=(function(args) {
	var var_66756e6374696f6e73=args[0];
args=args[1];
	var var_626f6479=args;
	return [(new Symbol('apply')),[[(new Symbol('lambda')),[null,[[(new Symbol('vopsquote')),[fn_617070656e64([fn_6d6170636172([(function(args) {
	var var_666e=args[0];
args=args[1];
	return [(new Symbol('vopsquote-uq')),[[(new Symbol('vopsquote')),[['var ',[[(new Symbol('vopsquote-uq')),[[(new Symbol('setq')),[[(new Symbol('function')),[[(new Symbol('quote')),[var_666e[0],null]],null]],[[(new Symbol('lambda')),[fn_63616472([var_666e,null]),fn_617070656e64([fn_63646472([var_666e,null]),[null,null]])]],null]]],null]],[';',null]]],null]],null]];;
})
,[var_66756e6374696f6e73,null]]),[null,null]]),null]],fn_617070656e64([var_626f6479,[null,null]])]]],[(new Symbol('nil')),null]]];;
})
;
macros['defvar']=(function(args) {
	var var_6e616d65=args[0];
args=args[1];
	var var_76616c7565=args[0];
args=args[1];
	return [(new Symbol('if')),[[(new Symbol('eql')),[[(new Symbol('typeof')),[var_6e616d65,null]],['undefined',null]]],[[(new Symbol('setq')),[var_6e616d65,[var_76616c7565,null]]],null]]];;
})
;
((fn_756e646566696e65642d3e6e756c6c([fn_65716c([(typeof var_2a63686172686f6f6b732a),['undefined',null]]),null]) != null)?(var_2a63686172686f6f6b732a={}):(null));
macros['defcharhook']=(function(args) {
	var var_63=args[0];
args=args[1];
	var var_6d6163=args[0];
args=args[1];
	return [(new Symbol('hook-char')),[var_63,[[(new Symbol('lambda')),[[(new Symbol('form')),null],[[(new Symbol('list')),[[(new Symbol('quote')),[var_6d6163,null]],[(new Symbol('form')),null]]],null]]],null]]];;
})
;
fn_686f6f6b2d63686172(['\'',[(function(args) {
	var var_666f726d=args[0];
args=args[1];
	return fn_6c697374([(new Symbol('quote')),[var_666f726d,null]]);;
})
,null]]);
fn_686f6f6b2d63686172(['`',[(function(args) {
	var var_666f726d=args[0];
args=args[1];
	return fn_6c697374([(new Symbol('qq')),[var_666f726d,null]]);;
})
,null]]);
fn_686f6f6b2d63686172(['~',[(function(args) {
	var var_666f726d=args[0];
args=args[1];
	return fn_6c697374([(new Symbol('vopsquote')),[var_666f726d,null]]);;
})
,null]]);
fn_686f6f6b2d63686172(['^',[(function(args) {
	var var_666f726d=args[0];
args=args[1];
	return fn_6c697374([(new Symbol('vopsquote-uq')),[var_666f726d,null]]);;
})
,null]]);
fn_686f6f6b2d63686172([',',[(function(args) {
	var var_666f726d=args[0];
args=args[1];
	return fn_6c697374([(new Symbol('uq')),[var_666f726d,null]]);;
})
,null]]);
fn_686f6f6b2d63686172(['@',[(function(args) {
	var var_666f726d=args[0];
args=args[1];
	return fn_6c697374([(new Symbol('sl')),[var_666f726d,null]]);;
})
,null]]);
((fn_756e646566696e65642d3e6e756c6c([fn_65716c([(typeof var_2a66656174757265732a),['undefined',null]]),null]) != null)?(var_2a66656174757265732a={}):(null));
macros['when-feature']=(function(args) {
	var var_666f726d=args[0];
args=args[1];
	return [(new Symbol('if')),[[(new Symbol('get-hash')),[(new Symbol('*features*')),[[(new Symbol('quote')),[var_666f726d[0],null]],null]]],[[(new Symbol('progn')),fn_617070656e64([var_666f726d[1],[null,null]])],null]]];;
})
;
functions['provides-feature']=(function(args) {
	var var_66656174757265=args[0];
args=args[1];
	return var_2a66656174757265732a[fn_737472696e672d74([var_66656174757265,null])]=true;;
})
;
fn_70726f76696465732d66656174757265=functions['provides-feature'];
;
fn_686f6f6b2d63686172(['!',[(function(args) {
	var var_666f726d=args[0];
args=args[1];
	return fn_6c697374([(new Symbol('when-feature')),[var_666f726d,null]]);;
})
,null]]);
functions['compile']=(function(args) {
	var var_666f726d=args[0];
args=args[1];
	var var_656e76=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_6e756c6c([var_666f726d,null]),null]) != null)?((function(args) {
	return fn_766f703a6e696c(null);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_61746f6d([var_666f726d,null]),null]) != null)?((function(args) {
	return ((fn_756e646566696e65642d3e6e756c6c([fn_6e756d6265722d742d70([var_666f726d,null]),null]) != null)?((function(args) {
	return fn_766f703a6e756d626572([var_666f726d,null]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_737472696e672d742d70([var_666f726d,null]),null]) != null)?((function(args) {
	return fn_766f703a737472696e67([var_666f726d,null]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_666f726d,[(new Symbol('t')),null]]),null]) != null)?((function(args) {
	return fn_766f703a74(null);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_666f726d,[(new Symbol('nil')),null]]),null]) != null)?((function(args) {
	return fn_766f703a6e696c(null);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_73796d626f6c2d74([var_666f726d,null]),null]) != null)?((function(args) {
	return fn_766f703a6c6f61642d66726f6d([(new Symbol('env')),[var_666f726d,[var_656e76,null]]]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([true,null]) != null)?((function(args) {
	return fn_666174616c(['unknown atom',null]);;
})
(null)):(null))))))))))));;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([macros[fn_737472696e672d74([var_666f726d[0],null])],null]) != null)?((function(args) {
	return fn_636f6d70696c65([fn_6576616c([[(new Symbol('funcall')),[[(new Symbol('macro')),[[(new Symbol('quote')),[var_666f726d[0],null]],null]],fn_617070656e64([fn_6d6170636172([(function(args) {
	var var_78=args[0];
args=args[1];
	return [(new Symbol('quote')),[var_78,null]];;
})
,[var_666f726d[1],null]]),[null,null]])]],[fn_656e76(null),null]]),[var_656e76,null]]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([(new Symbol('macroexpand')),[var_666f726d[0],null]]),null]) != null)?((function(args) {
	return fn_6576616c([[(new Symbol('funcall')),[[(new Symbol('macro')),[[(new Symbol('quote')),[fn_63616472([var_666f726d,null])[0],null]],null]],fn_617070656e64([fn_6d6170636172([(function(args) {
	var var_78=args[0];
args=args[1];
	return [(new Symbol('quote')),[var_78,null]];;
})
,[fn_63616472([var_666f726d,null])[1],null]]),[null,null]])]],[fn_656e76(null),null]]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([(new Symbol('defun')),[var_666f726d[0],null]]),null]) != null)?((function(args) {
	return fn_636f6d70696c652d66756e([var_666f726d,[var_656e76,null]]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([(new Symbol('defmacro')),[var_666f726d[0],null]]),null]) != null)?((function(args) {
	return fn_636f6d70696c652d6d6163726f([var_666f726d,[var_656e76,null]]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([(new Symbol('vops')),[var_666f726d[0],null]]),null]) != null)?((function(args) {
	return fn_6d6576616c([fn_3a636f6d70696c652d70726f676e([fn_6d616b652d666f726d732d726561646572([var_666f726d[1],null]),[fn_656e76(null),[(function(args) {
	var var_78=args[0];
args=args[1];
	return var_78;;
})
,null]]]),null]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([(new Symbol('if')),[var_666f726d[0],null]]),null]) != null)?((function(args) {
	return fn_766f703a6966([fn_63616472([var_666f726d,null]),[fn_63646472([var_666f726d,null])[0],[((fn_756e646566696e65642d3e6e756c6c([fn_63646472([var_666f726d,null])[1],null]) != null)?(fn_63646472([var_666f726d,null])[1][0]):(null)),[var_656e76,null]]]]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([(new Symbol('quote')),[var_666f726d[0],null]]),null]) != null)?((function(args) {
	return fn_766f703a71756f7465([fn_63616472([var_666f726d,null]),[var_656e76,null]]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([(new Symbol('setq')),[var_666f726d[0],null]]),null]) != null)?((function(args) {
	return fn_766f703a61737369676e([fn_63616472([var_666f726d,null]),[fn_6361646472([var_666f726d,null]),[var_656e76,null]]]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([(new Symbol('lambda')),[var_666f726d[0],null]]),null]) != null)?((function(args) {
	return fn_766f703a636c6f73757265([var_666f726d,[var_656e76,null]]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([(new Symbol('local')),[var_666f726d[0],null]]),null]) != null)?((function(args) {
	return fn_766f703a6c6f61642d66726f6d([null,[fn_63616472([var_666f726d,null]),[var_656e76,null]]]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([(new Symbol('location')),[var_666f726d[0],null]]),null]) != null)?((function(args) {
	return fn_766f703a6c6f61642d66726f6d([fn_6576616c([fn_63616472([var_666f726d,null]),[null,null]]),[fn_6361646472([var_666f726d,null]),[var_656e76,null]]]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([(new Symbol('macro')),[var_666f726d[0],null]]),null]) != null)?((function(args) {
	return fn_766f703a6c6f61642d66726f6d([(new Symbol('macros')),[fn_63616472([var_666f726d,null]),[var_656e76,null]]]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([(new Symbol('function')),[var_666f726d[0],null]]),null]) != null)?((function(args) {
	return fn_766f703a6c6f61642d66726f6d([(new Symbol('functions')),[fn_63616472([var_666f726d,null]),[var_656e76,null]]]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([(new Symbol('funcall')),[var_666f726d[0],null]]),null]) != null)?((function(args) {
	return fn_766f703a63616c6c([fn_63616472([var_666f726d,null]),[fn_63646472([var_666f726d,null]),[var_656e76,null]]]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([(new Symbol('apply')),[var_666f726d[0],null]]),null]) != null)?((function(args) {
	return fn_766f703a6170706c79([fn_63616472([var_666f726d,null]),[fn_6361646472([var_666f726d,null]),[var_656e76,null]]]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([true,null]) != null)?((function(args) {
	return fn_766f703a63616c6c([[(new Symbol('function')),[[(new Symbol('quote')),[var_666f726d[0],null]],null]],[var_666f726d[1],[var_656e76,null]]]);;
})
(null)):(null))))))))))))))))))))))))))))))))))));;
})
;
fn_636f6d70696c65=functions['compile'];
;
functions['eval']=(function(args) {
	var var_666f726d=args[0];
args=args[1];
	var var_656e76=args[0];
args=args[1];
	return fn_6d6576616c([fn_636f6d70696c65([var_666f726d,[var_656e76,null]]),null]);;
})
;
fn_6576616c=functions['eval'];
;
functions['compile-fun']=(function(args) {
	var var_666f726d=args[0];
args=args[1];
	var var_656e76=args[0];
args=args[1];
	return fn_766f703a646566756e([var_666f726d,[var_656e76,null]]);;
})
;
fn_636f6d70696c652d66756e=functions['compile-fun'];
;
functions['compile-macro']=(function(args) {
	var var_666f726d=args[0];
args=args[1];
	var var_656e76=args[0];
args=args[1];
	return fn_636f6d70696c65([[(new Symbol('setq')),[[(new Symbol('macro')),[[(new Symbol('quote')),[fn_63616472([var_666f726d,null]),null]],null]],[[(new Symbol('lambda')),[fn_6361646472([var_666f726d,null]),fn_617070656e64([fn_6364646472([var_666f726d,null]),[null,null]])]],null]]],[var_656e76,null]]);;
})
;
fn_636f6d70696c652d6d6163726f=functions['compile-macro'];
;
functions[':compile-progn*']=(function(args) {
	var var_726561646572=args[0];
args=args[1];
	var var_656e76=args[0];
args=args[1];
	var var_6c6173746672616d65=args[0];
args=args[1];
	var var_646f2d6576616c=args;
	return (function(args) {
	var var_666f726d=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_6e756c6c([var_666f726d,null]),null]) != null)?(null):((function(args) {
	var var_68656164=args[0];
args=args[1];
	return (function(args) {
	var var_726573756c74=args[0];
args=args[1];
	return (function(args) {
	var var_7461696c=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_6e756c6c([var_7461696c,null]),null]) != null)?([var_6c6173746672616d65([var_68656164,[var_726573756c74,null]]),null]):([var_68656164,var_7461696c]));;
})
([fn_3a636f6d70696c652d70726f676e2a([var_726561646572,[var_656e76,[var_6c6173746672616d65,[((fn_756e646566696e65642d3e6e756c6c([var_646f2d6576616c,null]) != null)?(((fn_756e646566696e65642d3e6e756c6c([var_646f2d6576616c[0],null]) != null)?(true):(null))):(null)),null]]]]),null]);;
})
([((fn_756e646566696e65642d3e6e756c6c([((fn_756e646566696e65642d3e6e756c6c([var_646f2d6576616c,null]) != null)?(((fn_756e646566696e65642d3e6e756c6c([var_646f2d6576616c[0],null]) != null)?(true):(null))):(null)),null]) != null)?(fn_6d6576616c([var_68656164,null])):(null)),null]);;
})
([fn_636f6d70696c65([var_666f726d,[var_656e76,null]]),null])));;
})
([var_726561646572(null),null]);;
})
;
fn_3a636f6d70696c652d70726f676e2a=functions[':compile-progn*'];
;
functions[':compile-progn']=(function(args) {
	var var_726561646572=args[0];
args=args[1];
	var var_656e76=args[0];
args=args[1];
	var var_6c6173746672616d65=args[0];
args=args[1];
	var var_646f2d6576616c=args;
	return fn_766f703a626c6f636b([fn_3a636f6d70696c652d70726f676e2a([var_726561646572,[var_656e76,[var_6c6173746672616d65,[((fn_756e646566696e65642d3e6e756c6c([var_646f2d6576616c,null]) != null)?(((fn_756e646566696e65642d3e6e756c6c([var_646f2d6576616c[0],null]) != null)?(true):(null))):(null)),null]]]]),null]);;
})
;
fn_3a636f6d70696c652d70726f676e=functions[':compile-progn'];
;
functions[':compile-top']=(function(args) {
	var var_726561646572=args[0];
args=args[1];
	var var_656e76=args[0];
args=args[1];
	return fn_636f6e636174([fn_766f703a696e6974(null),[fn_3a636f6d70696c652d70726f676e([var_726561646572,[var_656e76,[(function(args) {
	var var_78=args[0];
args=args[1];
	return var_78;;
})
,[true,null]]]]),null]]);;
})
;
fn_3a636f6d70696c652d746f70=functions[':compile-top'];
;
functions[':parse-and-eval']=(function(args) {
	var var_64617461=args[0];
args=args[1];
	return (function(args) {
	var var_726574=args[0];
args=args[1];
fn_3a636f6d70696c652d70726f676e([fn_6d616b652d726561646572([var_64617461,null]),[fn_656e76(null),[(function(args) {
	var var_78=args[0];
args=args[1];
	var var_726573756c74=args[0];
args=args[1];
var_726574=var_726573756c74;
	return var_78;;
})
,[true,null]]]]);
	return var_726574;;
})
([null,null]);;
})
;
fn_3a70617273652d616e642d6576616c=functions[':parse-and-eval'];
;
functions[':parse-and-compile']=(function(args) {
	var var_64617461=args[0];
args=args[1];
	return fn_3a636f6d70696c652d746f70([fn_6d616b652d726561646572([var_64617461,null]),[fn_656e76(null),null]]);;
})
;
fn_3a70617273652d616e642d636f6d70696c65=functions[':parse-and-compile'];
;
functions['repl']=(function(args) {
fn_7072696e74(['? ',null]);
	return fn_726561642d6c696e65([(function(args) {
	var var_64617461=args[0];
args=args[1];
fn_7072696e74([fn_72657072([fn_6d6576616c([fn_3a636f6d70696c652d70726f676e([fn_6d616b652d726561646572([var_64617461,null]),[fn_656e76(null),[(function(args) {
	var var_78=args[0];
args=args[1];
	return var_78;;
})
,null]]]),null]),null]),null]);
	return fn_7265706c(null);;
})
,null]);;
})
;
fn_7265706c=functions['repl'];
;
((fn_756e646566696e65642d3e6e756c6c([fn_65716c([(typeof var_2a72756e6e696e672a),['undefined',null]]),null]) != null)?(var_2a72756e6e696e672a=null):(null));
functions['load']=(function(args) {
	var var_66696c65=args[0];
args=args[1];
	return fn_72657175697265([var_66696c65,[(function(args) {
	var var_64617461=args[0];
args=args[1];
	return fn_3a70617273652d616e642d6576616c([var_64617461,null]);;
})
,null]]);;
})
;
fn_6c6f6164=functions['load'];
;
functions['main']=(function(args) {
	var var_61726773=args[0];
args=args[1];
var_2a72756e6e696e672a=true;
	return ((fn_756e646566696e65642d3e6e756c6c([var_61726773,null]) != null)?(((fn_756e646566696e65642d3e6e756c6c([fn_65716c(['--eval',[var_61726773[0],null]]),null]) != null)?((function(args) {
	return fn_72657175697265([fn_63616472([var_61726773,null]),[(function(args) {
	var var_64617461=args[0];
args=args[1];
	return fn_3a70617273652d616e642d6576616c([var_64617461,null]);;
})
,null]]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c(['--compile',[var_61726773[0],null]]),null]) != null)?((function(args) {
	return fn_72657175697265([fn_63616472([var_61726773,null]),[(function(args) {
	var var_64617461=args[0];
args=args[1];
fn_7072696e74([fn_3a70617273652d616e642d636f6d70696c65([var_64617461,null]),null]);
fn_70726f76696465732d66656174757265([(new Symbol('compiling')),null]);
	return var_2a72756e6e696e672a=true;;
})
,null]]);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([true,null]) != null)?((function(args) {
	return fn_6d61696e([var_61726773[1],null]);;
})
(null)):(null))))))):(fn_7265706c(null)));;
})
;
fn_6d61696e=functions['main'];
;
functions['start']=(function(args) {
	return ((fn_756e646566696e65642d3e6e756c6c([fn_6e756c6c([var_2a72756e6e696e672a,null]),null]) != null)?(fn_6d61696e([fn_61727261792d3e6c697374([process.argv,null]),null])):(null));;
})
;
fn_7374617274=functions['start'];
;
((fn_756e646566696e65642d3e6e756c6c([fn_65716c([(typeof window),['undefined',null]]),null]) != null)?(fn_70726f76696465732d66656174757265([(new Symbol('node')),null])):(fn_70726f76696465732d66656174757265([(new Symbol('browser')),null])));
((fn_756e646566696e65642d3e6e756c6c([var_2a66656174757265732a[fn_737472696e672d74([(new Symbol('node')),null])],null]) != null)?((function(args) {
	return fn_7374617274(null);;
})
(null)):(null));
