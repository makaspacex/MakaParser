<p align="center" color="#6a737d">
Advanced Subscription Manager for QX, Loon, Surge, Stash and Shadowrocket.
</p>

[![Build](https://github.com/sub-store-org/Sub-Store/actions/workflows/main.yml/badge.svg)](https://github.com/sub-store-org/Sub-Store/actions/workflows/main.yml) ![GitHub](https://img.shields.io/github/license/sub-store-org/Sub-Store) ![GitHub issues](https://img.shields.io/github/issues/sub-store-org/Sub-Store) ![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed-raw/Peng-Ym/Sub-Store) ![Lines of code](https://img.shields.io/tokei/lines/github/sub-store-org/Sub-Store) ![Size](https://img.shields.io/github/languages/code-size/sub-store-org/Sub-Store) 

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/PengYM)
   
Core functionalities:

1. Conversion among various formats.
2. Support for parsing QX rewrites into Surge Shadowrocket Loon Stash

3. Support parsing Surge modules into Loon Stash

4. Support parsing Loon plugins into Surge Shadowrocket Stash

5. Supports QX & Surge & Loon & Shadowrocket & Clash rule set parsing, applicable app: Surge Shadowrocket Stash Loon

6. Support converting QX scripts into Surge scripts (compatible)

7. Parameter argument can be modified

8. Supports one-click import of Shadowrocket / Loon / Stash

9. Advanced features OR modify any text

10. If some modules require adding parameters before they can be used but you only want to use the remote link and do not want to pull the local module, you can directly use plain text -> advanced operations and parameter modification functions to modify any content or argument parameters of the remote link without copying. to local module

> The following descriptions of features may not be updated in real-time. Please refer to the actual available features for accurate information.
   
## 1. Subscription Conversion

### Supported Input Formats

- [x] URI(SS, SSR, VMess, VLESS, Trojan, Hysteria, Hysteria 2, TUIC v5)
- [x] Clash Proxies YAML
- [x] Clash Proxy JSON(single line)
- [x] QX (SS, SSR, VMess, Trojan, HTTP, SOCKS5, VLESS)
- [x] Loon (SS, SSR, VMess, Trojan, HTTP, SOCKS5, WireGuard, VLESS, Hysteria 2)
- [x] Surge (SS, VMess, Trojan, HTTP, SOCKS5, SOCKS5-TLS, TUIC, Snell, Hysteria 2, SSH(Password authentication only), SSR(external, only for macOS), External Proxy Program(only for macOS), WireGuard(Surge to Surge))
- [x] Surfboard (SS, VMess, Trojan, HTTP, SOCKS5, SOCKS5-TLS, WireGuard(Surfboard to Surfboard))
- [x] Shadowrocket (SS, SSR, VMess, Trojan, HTTP, SOCKS5, Snell, VLESS, WireGuard, Hysteria, Hysteria 2, TUIC)
- [x] Clash.Meta (SS, SSR, VMess, Trojan, HTTP, SOCKS5, Snell, VLESS, WireGuard, Hysteria, Hysteria 2, TUIC)
- [x] Stash (SS, SSR, VMess, Trojan, HTTP, SOCKS5, Snell, VLESS, WireGuard, Hysteria, TUIC)
- [x] Clash (SS, SSR, VMess, Trojan, HTTP, SOCKS5, Snell, VLESS, WireGuard)

### Supported Target Platforms

- [x] Plain JSON
- [x] Stash
- [x] Clash.Meta(mihomo)
- [x] Clash
- [x] Surfboard
- [x] Surge
- [x] Loon
- [x] Shadowrocket
- [x] QX
- [x] sing-box
- [x] V2Ray
- [x] V2Ray URI


## 2. Subscription Formatting

### Filtering

- [x] **Regex filter**
- [x] **Discard regex filter**
- [x] **Region filter**
- [x] **Type filter**
- [x] **Useless proxies filter**
- [x] **Script filter**

### Proxy Operations

- [x] **Set property operator**: set some proxy properties such as `udp`,`tfo`, `skip-cert-verify` etc.
- [x] **Flag operator**: add flags or remove flags for proxies.
- [x] **Sort operator**: sort proxies by name.
- [x] **Regex sort operator**: sort proxies by keywords (fallback to normal sort).
- [x] **Regex rename operator**: replace by regex in proxy names.
- [x] **Regex delete operator**: delete by regex in proxy names.
- [x] **Script operator**: modify proxy by script.
- [x] **Resolve Domain Operator**: resolve the domain of nodes to an IP address.

### Development
Install node dependencies:

```
pnpm i
```

Run the backend server on http://localhost:3000


```
pnpm start
```

or

esbuild(experimental)

```
pnpm run --parallel "/^dev:.*/"
```
