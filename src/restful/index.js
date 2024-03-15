import express from '@/restful/express';
import $ from '@/core/app';
import registerParserRoutes from './parser';

export default function serve() {
    let port;
    let host;

    const isNode = eval(`typeof process !== "undefined"`);
    if (isNode) {
        port = eval('process.env.MAKA_PARSER_API_PORT') || 3000;
        host = eval('process.env.MAKA_PARSER_API_HOST') || '::';
    }
    const $app = express({ substore: $, port, host });
    // register routes
    registerParserRoutes($app);
    $app.start();
}
