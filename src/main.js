import * as p from "@clack/prompts";
import chalk from "chalk";
import { runCompletion } from './runCompletion.js'
import {config} from 'dotenv'

config()

export async function clackChat() {
  console.clear();

  p.intro(chalk.bgCyan(chalk.black("聊天已经开始了")));

  const createInput = async (placeholder = "") => {
    const inputText = await p.text({
      message: "提示：请输入...",
      placeholder,
      initialValue: "",
      validate(value) {
        if (value.length === 0) return `Value is required!`;
      },
    });

    const s = p.spinner();
    s.start('思考中...');

    if (p.isCancel(inputText)) {
      p.cancel('Operation cancelled');
      s.stop('');
      return process.exit(0);
    }

    const resText = await runCompletion(inputText)
    s.stop('');
    console.log()
    console.log(resText)
    console.log()
    createInput()
  };

  createInput("对什么感兴趣呢？")
}
