var threadInfoStruct=0,selfThreadId=0,parentThreadId=0,Module={};function threadPrintErr(){var e=Array.prototype.slice.call(arguments).join(" ");console.error(e)}function threadAlert(){var e=Array.prototype.slice.call(arguments).join(" ");postMessage({cmd:"alert",text:e,threadId:selfThreadId})}var err=threadPrintErr;if(this.alert=threadAlert,Module["instantiateWasm"]=function(e,r){var a=new WebAssembly.Instance(Module["wasmModule"],e);return Module["wasmModule"]=null,r(a),a.exports},this.onmessage=function(e){try{if("load"===e.data.cmd){if(Module["DYNAMIC_BASE"]=e.data.DYNAMIC_BASE,Module["DYNAMICTOP_PTR"]=e.data.DYNAMICTOP_PTR,Module["wasmModule"]=e.data.wasmModule,Module["wasmMemory"]=e.data.wasmMemory,Module["buffer"]=Module["wasmMemory"].buffer,Module["ENVIRONMENT_IS_PTHREAD"]=!0,"string"===typeof e.data.urlOrBlob)importScripts(e.data.urlOrBlob);else{var r=URL.createObjectURL(e.data.urlOrBlob);importScripts(r),URL.revokeObjectURL(r)}postMessage({cmd:"loaded"})}else if("objectTransfer"===e.data.cmd)Module["PThread"].receiveObjectTransfer(e.data);else if("run"===e.data.cmd){Module["__performance_now_clock_drift"]=performance.now()-e.data.time,threadInfoStruct=e.data.threadInfoStruct,Module["__register_pthread_ptr"](threadInfoStruct,0,0),selfThreadId=e.data.selfThreadId,parentThreadId=e.data.parentThreadId;var a=e.data.stackBase+e.data.stackSize,t=e.data.stackBase;Module["establishStackSpace"](t,a),Module["PThread"].receiveObjectTransfer(e.data),Module["PThread"].setThreadStatus(Module["_pthread_self"](),1);try{var o=Module["dynCall_ii"](e.data.start_routine,e.data.arg);Module["getNoExitRuntime"]()||Module["PThread"].threadExit(o)}catch(d){if("Canceled!"===d)Module["PThread"].threadCancel();else if("unwind"!=d&&(Atomics.store(Module["HEAPU32"],threadInfoStruct+4>>2,d instanceof Module["ExitStatus"]?d.status:-2),Atomics.store(Module["HEAPU32"],threadInfoStruct+0>>2,1),Module["_emscripten_futex_wake"](threadInfoStruct+0,2147483647),!(d instanceof Module["ExitStatus"])))throw d}}else"cancel"===e.data.cmd?threadInfoStruct&&Module["PThread"].threadCancel():"setimmediate"===e.data.target||("processThreadQueue"===e.data.cmd?threadInfoStruct&&Module["_emscripten_current_thread_process_queued_calls"]():(err("worker.js received unknown command "+e.data.cmd),err(e.data)))}catch(d){throw err("worker.js onmessage() captured an uncaught exception: "+d),d.stack&&err(d.stack),d}},"object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node){self={location:{href:__filename}};var onmessage=this.onmessage,nodeWorkerThreads=require("worker_threads");Worker=nodeWorkerThreads.Worker;var parentPort=nodeWorkerThreads.parentPort;parentPort.on("message",(function(e){onmessage({data:e})}));var nodeFS=require("fs"),nodeRead=function(e){return nodeFS.readFileSync(e,"utf8")};function globalEval(e){global.require=require,global.Module=Module,eval.call(null,e)}importScripts=function(e){globalEval(nodeRead(e))},postMessage=function(e){parentPort.postMessage(e)},"undefined"===typeof performance&&(performance={now:function(){return Date.now()}})}