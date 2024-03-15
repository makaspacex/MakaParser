import express from '@/vendor/express';
import $ from '@/core/app';
import registerParserRoutes from './parser';

export default function serve() {
    let port;
    let host;
    if ($.env.isNode) {
        port = eval('process.env.SUB_STORE_BACKEND_API_PORT') || 3000;
        host = eval('process.env.SUB_STORE_BACKEND_API_HOST') || '::';
    }
    const $app = express({ substore: $, port, host });
    // register routes
    registerParserRoutes($app);
    $app.start();

}
