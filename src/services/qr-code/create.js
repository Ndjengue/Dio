import prompt from "prompt";
import PromptSchemaQRCode from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "./handle.js";

async function createQRCode(){
 prompt.get(promptQRCode, handle);
 prompt.start();
}

export default createQRCode;