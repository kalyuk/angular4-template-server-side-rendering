import * as fs from "fs";
import {ResourceLoader} from "@angular/compiler";
import fetch from "node-fetch";

export class FileLoader implements ResourceLoader {
  public get(url: string): Promise<string> {
    if (url.match(/^http|https:\/\//)) {
      return fetch(url).then((res: any) => res.text());
    }

    return new Promise((resolve, reject) => {
      fs.readFile(url, (err: NodeJS.ErrnoException, buffer: Buffer) => {
        if (err) {
          return reject(err);
        }

        resolve(buffer.toString());
      });
    });
  }
}
