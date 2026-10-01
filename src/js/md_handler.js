import { marked } from "/lib/marked/marked.esm.js";

class MdHandler{
    static md2Html(md) {
        try {
            const html = marked.parse(md);
            return html;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default MdHandler;
