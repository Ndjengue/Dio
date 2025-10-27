import chalk from "chalk";

const PromptSchemaMain = [
    {
        name: "select",
        description: chalk.yellow("Escolha a ferramenta (1 - QRCODE ou (2- PASWORD"),
        pattern: /^[1-2]+$/,
        message: chalk.red("Escolha apenas entre 1 e 2"),
        required: true,
    },
];


export default PromptSchemaMain;