var __assign =
    (this && this.__assign) ||
    function() {
        __assign =
            Object.assign ||
            function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s)
                        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
        return __assign.apply(this, arguments);
    };
if (Sentry && SentryConfig) {
    Sentry.init(
        __assign({
                debug: false,
                environemnt: 'production',
                release: 'default',
                integrations: [
                    new Sentry.Integrations.InboundFilters({
                        ignoreErrors: [
                            /the network is offline/,
                            /sentry/,
                            /extension/,
                            /Network Error/,
                            /in JSON at position/,
                            /JSON Parse error/,
                            /(SECURITY_ERR|SecurityError|Illegal invocation|The operation is)/,
                            /网络/,
                            /$ is not a function/,
                            /share_ipad/,
                            /(hw-top-banner|hw_bad-network-popup)/,
                            /Invalid or unexpected/,
                            /UnhandledRejection/,
                            /QuotaExceededError/,
                            /(\$UCBrowser|postMessage|YoukuAntiAds)/,
                            /Can't find variable:/,
                            /(WindVaneAvailableInteractedTime|moz-extension)/,
                            /MyAppGet/,
                            /Cannot read property '(tagName|className|style)' of null/,
                            /is not an object \(evaluating/,
                            /Loading chunk \d+ failed/,
                            /__tv_keydown/,
                            /Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node./,
                            /WebViewJavascriptBridge/,
                            /账号未登陆/,
                            /Timeout/,
                            /Aborted/,
                        ],
                    }),
                ],
            },
            SentryConfig, {
                dsn: 'https://7649df77cbaa46eea2679904ed3a974e@api.bilibili.com/x/traceback/19',
                sampleRate: 0.01,
            }
        )
    );
}