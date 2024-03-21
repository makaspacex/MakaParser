/**
 *  ███╗   ███╗ █████╗ ██╗  ██╗ █████╗       ██████╗  █████╗ ██████╗ ███████╗███████╗██████╗
 *  ████╗ ████║██╔══██╗██║ ██╔╝██╔══██╗      ██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔════╝██╔══██╗
 *  ██╔████╔██║███████║█████╔╝ ███████║█████╗██████╔╝███████║██████╔╝███████╗█████╗  ██████╔╝
 *  ██║╚██╔╝██║██╔══██║██╔═██╗ ██╔══██║╚════╝██╔═══╝ ██╔══██║██╔══██╗╚════██║██╔══╝  ██╔══██╗
 *  ██║ ╚═╝ ██║██║  ██║██║  ██╗██║  ██║      ██║     ██║  ██║██║  ██║███████║███████╗██║  ██║
 *  ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝      ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝
 * Advanced Subscription Manager for QX, Loon, Surge and Clash.
 * @author: makaspacex
 * @github: https://github.com/makaspacex/MakaParser
 * @thank https://github.com/sub-store-org/Sub-Store
 * @thank https://github.com/Script-Hub-Org/Script-Hub
 * @note Banner font:ANSI Shadow, https://www.toolscat.com/img/text-ascii
 *
 */
import { version } from '../../package.json';
console.log(
    `
┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
    MakaParser -- v${version}
┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
`,
);

import serve from '@/restful';
serve();
