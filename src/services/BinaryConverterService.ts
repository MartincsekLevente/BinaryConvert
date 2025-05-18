export class BinaryConverterService {

    static convert(text: string) {
        let binary = "";

        for (let i = 0; i < text.length; i++) {
            binary += text[i].charCodeAt(0).toString(2) + " ";
        }

        return binary;
    }
}

