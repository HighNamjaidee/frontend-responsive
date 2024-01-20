#!/usr/bin/env node
import * as browsersync from "browser-sync";

browsersync.create();

browsersync.init({
  server: ".",
  watch: true,
  notify: false,
});
