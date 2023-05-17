#!/usr/bin/env node

import { Command } from "commander";

import {clackChat} from './main.js'

const program = new Command();

program
  .command("start")
  .option("-r --role <role>", "输入角色", "")
  .action(async () => {
    clackChat()
  });

program.parse(process.argv);
