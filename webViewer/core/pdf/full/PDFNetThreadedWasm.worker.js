"use strict";var Module={};if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node){var nodeWorkerThreads=require("worker_threads"),parentPort=nodeWorkerThreads.parentPort;parentPort.on("message",(function(e){onmessage({data:e})}));var nodeFS=require("fs");Object.assign(global,{self:global,require,Module,location:{href:__filename},Worker:nodeWorkerThreads.Worker,importScripts:function(e){(0,eval)(nodeFS.readFileSync(e,"utf8"))},postMessage:function(e){parentPort.postMessage(e)},performance:global.performance||{now:function(){return Date.now()}}})}var initializedJS=!1;function threadPrintErr(){var e=Array.prototype.slice.call(arguments).join(" ");console.error(e)}function threadAlert(){var e=Array.prototype.slice.call(arguments).join(" ");postMessage({cmd:"alert",text:e,threadId:Module["_pthread_self"]()})}var err=threadPrintErr;function moduleLoaded(){}self.alert=threadAlert,Module["instantiateWasm"]=function(e,r){var a=new WebAssembly.Instance(Module["wasmModule"],e);return r(a),Module["wasmModule"]=null,a.exports},self.onmessage=function(e){try{if("load"===e.data.cmd){if(Module["wasmModule"]=e.data.wasmModule,Module["wasmMemory"]=e.data.wasmMemory,Module["buffer"]=Module["wasmMemory"].buffer,Module["ENVIRONMENT_IS_PTHREAD"]=!0,"string"===typeof e.data.urlOrBlob)importScripts(e.data.urlOrBlob);else{var r=URL.createObjectURL(e.data.urlOrBlob);importScripts(r),URL.revokeObjectURL(r)}moduleLoaded()}else if("objectTransfer"===e.data.cmd)Module["PThread"].receiveObjectTransfer(e.data);else if("run"===e.data.cmd){Module["__performance_now_clock_drift"]=performance.now()-e.data.time,Module["__emscripten_thread_init"](e.data.threadInfoStruct,0,0);var a=e.data.stackBase,t=e.data.stackBase+e.data.stackSize;Module["establishStackSpace"](t,a),Module["PThread"].receiveObjectTransfer(e.data),Module["PThread"].threadInit(),initializedJS||(Module["___embind_register_native_and_builtin_types"](),initializedJS=!0);try{var o=Module["invokeEntryPoint"](e.data.start_routine,e.data.arg);Module["keepRuntimeAlive"]()?Module["PThread"].setExitStatus(o):Module["PThread"].threadExit(o)}catch(d){if("Canceled!"===d)Module["PThread"].threadCancel();else if("unwind"!=d){if(!(d instanceof Module["ExitStatus"]))throw Module["PThread"].threadExit(-2),d;Module["keepRuntimeAlive"]()||Module["PThread"].threadExit(d.status)}}}else"cancel"===e.data.cmd?Module["_pthread_self"]()&&Module["PThread"].threadCancel():"setimmediate"===e.data.target||("processThreadQueue"===e.data.cmd?Module["_pthread_self"]()&&Module["_emscripten_current_thread_process_queued_calls"]():(err("worker.js received unknown command "+e.data.cmd),err(e.data)))}catch(d){throw err("worker.js onmessage() captured an uncaught exception: "+d),d&&d.stack&&err(d.stack),d}};