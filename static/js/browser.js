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
				 };((fn_756e646566696e65642d3e6e756c6c([var_2a66656174757265732a[fn_737472696e672d74([(new Symbol('browser')),null])],null]) != null)?((function(args) {
functions['from-char-code']=(function(args) {
	var var_63=args[0];
args=args[1];
	return String.fromCharCode(var_63);;
})
;
fn_66726f6d2d636861722d636f6465=functions['from-char-code'];
;
functions['make-input']=(function(args) {
	return $('<div class="input"><span class="caret"></span></div>').prependTo('#content');;
})
;
fn_6d616b652d696e707574=functions['make-input'];
;
functions['make-output']=(function(args) {
	var var_74657874=args[0];
args=args[1];
	return $('<div class="output"/>').text(var_74657874).prependTo('#output-container');;
})
;
fn_6d616b652d6f7574707574=functions['make-output'];
;
functions['make-error']=(function(args) {
	var var_65=args[0];
args=args[1];
	return $('<div class="error"/>').text(fn_737472696e672d74([var_65,null])).prependTo('#output-container');;
})
;
fn_6d616b652d6572726f72=functions['make-error'];
;
functions['scroll-to-bottom']=(function(args) {
	return $('#content').attr('scrollTop',$('#content').attr('scrollHeight'));;
})
;
fn_7363726f6c6c2d746f2d626f74746f6d=functions['scroll-to-bottom'];
;
functions['space->nbsp']=(function(args) {
	var var_63=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_63,[' ',null]]),null]) != null)?('&nbsp;'):(var_63));;
})
;
fn_73706163652d3e6e627370=functions['space->nbsp'];
;
functions['remove-caret']=(function(args) {
	return $('.caret').remove();;
})
;
fn_72656d6f76652d6361726574=functions['remove-caret'];
;
functions['add-input-char']=(function(args) {
	var var_696e707574=args[0];
args=args[1];
	var var_63=args[0];
args=args[1];
	return $('<span class="char">' + fn_73706163652d3e6e627370([var_63,null]) + '</span>').insertBefore(var_696e707574.find('.caret'));;
})
;
fn_6164642d696e7075742d63686172=functions['add-input-char'];
;
functions['add-input-string']=(function(args) {
	var var_696e707574=args[0];
args=args[1];
	var var_737472=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([((var_737472.length>0)?true:null),null]) != null)?((function(args) {
fn_6164642d696e7075742d63686172([var_696e707574,[fn_737562736571([var_737472,[0,[1,null]]]),null]]);
	return fn_6164642d696e7075742d737472696e67([var_696e707574,[fn_737562736571([var_737472,[1,null]]),null]]);;
})
(null)):(null));;
})
;
fn_6164642d696e7075742d737472696e67=functions['add-input-string'];
;
((fn_756e646566696e65642d3e6e756c6c([fn_65716c([(typeof var_2a6c6f61642a),['undefined',null]]),null]) != null)?(var_2a6c6f61642a=fn_6c6f6164):(null));
functions['load']=(function(args) {
	var var_6e616d65=args[0];
args=args[1];
	return (function(args) {
	var var_75726c=args[0];
args=args[1];
$('#output-container').prepend('<a class="file" href="' + fn_737472696e672d657363617065([var_75726c,null]) + '">' + fn_737472696e672d657363617065([var_6e616d65,null])+ '</a>');
	return var_2a6c6f61642a([var_75726c,null]);;
})
([fn_636f6e636174(['/lisp/',[var_6e616d65,['.lisp',null]]]),null]);;
})
;
fn_6c6f6164=functions['load'];
;
functions['make-load-url']=(function(args) {
	var var_6e616d65=args[0];
args=args[1];
	return $('<a class="file" href="#">' + fn_737472696e672d657363617065([var_6e616d65,null])+ '</a>').click((function(args) {
	return fn_6c6f6164([var_6e616d65,null]);;
})
);;
})
;
fn_6d616b652d6c6f61642d75726c=functions['make-load-url'];
;
functions['make-handler']=(function(args) {
	return (function(args) {
	var var_696e707574=args[0];
args=args[1];
	return (function(args) {
	var var_74657874=args[0];
args=args[1];
	return (function(args) {
	var var_70726576=args[0];
args=args[1];
	return (function(args) {
	var var_6b65797072657373=args[0];
args=args[1];
	return (function(args) {
	var var_6b6579646f776e=args[0];
args=args[1];
var_696e707574=fn_6d616b652d696e707574(null);
	return (function(args) {
	var var_74797065=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_74797065,[(new Symbol('keypress')),null]]),null]) != null)?((function(args) {
	return var_6b65797072657373;;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_74797065,[(new Symbol('keydown')),null]]),null]) != null)?((function(args) {
	return var_6b6579646f776e;;
})
(null)):(null))));;
})
;;
})
([(function(args) {
	var var_65=args;
	return (function(args) {
	var var_7768696368=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_7768696368,[38,null]]),null]) != null)?((function(args) {
	return ((fn_756e646566696e65642d3e6e756c6c([var_70726576,null]) != null)?((function(args) {
var_696e707574.remove();
var_696e707574=fn_6d616b652d696e707574(null);
var_74657874=var_70726576[0];
	return fn_6164642d696e7075742d737472696e67([var_696e707574,[var_70726576[0],null]]);;
})
(null)):(null));;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_7768696368,[8,null]]),null]) != null)?((function(args) {
	return ((fn_756e646566696e65642d3e6e756c6c([((var_74657874.length>0)?true:null),null]) != null)?((function(args) {
var_74657874=fn_737562736571([var_74657874,[0,[(var_74657874.length-1),null]]]);
	return var_696e707574.find('.caret').prev().remove();;
})
(null)):(null));;
})
(null)):(null))));;
})
([var_65[fn_737472696e672d74([(new Symbol('which')),null])],null]);;
})
,null]);;
})
([(function(args) {
	var var_65=args;
	return (function(args) {
	var var_7768696368=args[0];
args=args[1];
	return ((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_7768696368,[13,null]]),null]) != null)?((function(args) {
var_70726576=[var_74657874,var_70726576];
fn_72656d6f76652d6361726574(null);
(function(args) {
try {fn_6d616b652d6f7574707574([fn_72657072([fn_3a70617273652d616e642d6576616c([var_74657874,null]),null]),null])} catch(e) { (function(args) {
	var var_65=args[0];
args=args[1];
	return fn_6d616b652d6572726f72([var_65,null]);;
})
([e,null])};
	return null;;
})
(null);
var_74657874='';
var_696e707574.remove();
var_696e707574=fn_6d616b652d696e707574(null);
	return fn_7363726f6c6c2d746f2d626f74746f6d(null);;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([fn_65716c([var_7768696368,[8,null]]),null]) != null)?((function(args) {
	return null;;
})
(null)):(((fn_756e646566696e65642d3e6e756c6c([true,null]) != null)?((function(args) {
var_74657874=fn_636f6e636174([var_74657874,[fn_66726f6d2d636861722d636f6465([var_7768696368,null]),null]]);
	return fn_6164642d696e7075742d63686172([var_696e707574,[fn_66726f6d2d636861722d636f6465([var_7768696368,null]),null]]);;
})
(null)):(null))))));;
})
([var_65[fn_737472696e672d74([(new Symbol('which')),null])],null]);;
})
,null]);;
})
([null,null]);;
})
(['',null]);;
})
([null,null]);;
})
;
fn_6d616b652d68616e646c6572=functions['make-handler'];
;
functions['repl']=(function(args) {
$('#files').append(fn_6d616b652d6c6f61642d75726c(['mandelbrot',null]));
	return (function(args) {
	var var_68616e646c6572=args[0];
args=args[1];
	return $(window).keypress(var_68616e646c6572([(new Symbol('keypress')),null])).keydown(var_68616e646c6572([(new Symbol('keydown')),null]));;
})
([fn_6d616b652d68616e646c6572(null),null]);;
})
;
fn_7265706c=functions['repl'];
;
functions['print']=(function(args) {
	var var_666f726d73=args;
	return ((fn_756e646566696e65642d3e6e756c6c([var_666f726d73,null]) != null)?((function(args) {
fn_6d616b652d6f7574707574([fn_737472696e672d74([var_666f726d73[0],null]),null]);
	return fn_7072696e74(var_666f726d73[1]);;
})
(null)):(null));;
})
;
fn_7072696e74=functions['print'];
;
	return $(function (args) {
	return fn_7265706c(null);;
});;
})
(null)):(null));
