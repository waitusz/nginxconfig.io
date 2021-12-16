(self["webpackChunknginxconfig_io"]=self["webpackChunknginxconfig_io"]||[]).push([[2],{3002:(e,o,n)=>{"use strict";n.r(o),n.d(o,{default:()=>V});const t={back:"返回",next:"下一個",enable:"啟用",php:"PHP",ssl:"SSL",nginx:"NGINX",http:"HTTP",https:"HTTPS",letsEncrypt:"Let's Encrypt",python:"Python",wordPress:"WordPress",drupal:"Drupal",magento:"Magento",joomla:"Joomla",django:"Django",logging:"日誌記錄",reverseProxy:"反向代理",reverseProxyLower:"反向代理",restrict:"限制",path:"路徑"};var r=n(8891);const i={title:`${t.nginx} 配置`,description:`配置高效能、安全、穩定的${t.nginx}伺服器的最簡單方法。`,singleColumnMode:"垂直模式",splitColumnMode:"水平模式",perWebsiteConfig:"網站配置",addSite:"新增網站",globalConfig:"全域配置",setup:"使用配置",configFiles:"配置檔案"},s={downloadConfig:"下載配置",copyBase64:"複製Base64"},l={backToTop:"返回頂部",thisToolIs:"這個工具",openSourceOnGitHub:"開源在GitHub上",underThe:"是",mit:"MIT",license:"許可!",weWelcomeFeedbackAndContributions:"我們歡迎您提供迴響和意見。",originallyCreatedBy:"最初創建者",balintSzekeres:"Bálint Szekeres",maintainedBy:"維護者",digitalOcean:"DigitalOcean"},a={enableEncryptedSslConnection:`${t.enable}加密的${t.ssl}連接`,http2:`${t.http}/2`,enableHttp2Connections:`${t.enable} ${t.http}/2 連接`,http3:`${t.http}/3`,enableHttp3Connections:`${t.enable} ${t.http}/3 連接`,forceHttps:`強制 ${t.https}`,hsts:"HSTS",enableStrictTransportSecurity:`${t.enable}HSTS（強制用戶端、瀏覽器等使用HTTPS與伺服器建立連結），需要HTTPS連接`,enableIncludeSubDomains:`${t.enable}includeSubDomains指令，HSTS對所有子域生效`,enablePreload:`${t.enable}preload指令，強制用戶端只可以使用https連接`,certificationType:"證書類型",customCertificate:"本地證書",letsEncryptEmail:`${t.letsEncrypt} 郵箱`,http3IsANonStandardModule:"HTTP/3 並不是標準的 NGINX 模組, 請查看 ",http3NginxQuicReadme:"NGINX QUIC 說明",http3OrThe:" 或者 ",http3CloudflareQuicheProject:"Cloudflare quiche 項目",http3ForBuildingNginxWithHttp3:" 來構建支援 HTTP/3 的 NGINX !"},p={byDomain:"在此網站",enableForThisDomain:`為此網站${t.enable}`},c={phpIsDisabled:`${t.php}已停用。`,phpCannotBeEnabledWithReverseProxy:`${t.php}在啟用${t.reverseProxy}時無法啟用。`,phpCannotBeEnabledWithPython:`${t.php}在啟用${t.python}時無法啟用。`,enablePhp:`${t.enable} ${t.php}`,wordPressRules:`${t.wordPress} 規則`,enableWordPressRules:`${t.enable} ${t.wordPress}專屬規則`,drupalRules:`${t.drupal} 規則`,enableDrupalRules:`${t.enable} ${t.drupal}專屬規則`,magentoRules:`${t.magento} 規則`,enableMagentoRules:`${t.enable} ${t.magento}專屬規則`,joomlaRules:`${t.joomla} 規則`,enableJoomlaRules:`${t.enable} ${t.joomla}專屬規則`,phpServer:`${t.php} 服務`,phpBackupServer:`${t.php}備份伺服器`,tcp:"TCP",hhvmSocket:"HHVM socket",php5Socket:"5.x socket",php70Socket:"7.0 socket",php71Socket:"7.1 socket",php72Socket:"7.2 socket",php73Socket:"7.3 socket",php74Socket:"7.4 socket",php80Socket:"8.0 socket",phpSocket:"PHP socket",custom:"自定義",disabled:"停用"},d={presets:"預設",itLooksLikeYouCustomisedTheConfig:"看起來您已經為這個網站定制了配置。選擇新的預設可能會重置或更改一些您已經定制的設定。",frontend:"前端",nodeJs:"Node.js",singlePageApplication:"單頁面應用"},u={pythonIsDisabled:`${t.python}已停用。`,pythonCannotBeEnabledWithReverseProxy:`${t.python}在啟用${t.reverseProxy}時無法啟用。`,pythonCannotBeEnabledWithPhp:`${t.python}在啟用${t.php}時無法啟用。`,enablePython:`${t.enable} ${t.python}`,djangoRules:`${t.django} 規則`,enableDjangoRules:`${t.enable} ${t.django}專屬規則`},g={reverseProxyIsDisabled:`${t.reverseProxy}已停用。`,reverseProxyCannotBeEnabledWithPhp:`${t.reverseProxy}在啟用${t.php}時無法啟用。`,reverseProxyCannotBeEnabledWithPython:`${t.reverseProxy}在啟用${t.python}時無法啟用。`,enableReverseProxy:`${t.enable} ${t.reverseProxyLower}`},b={fallbackRouting:"回調路由",fallbackRoutingPhpPath:`回調路由${t.php}路徑`,legacyPhpRouting:`傳統${t.php}路由`,enableLegacyRouting:`${t.enable}傳統路由`,routing:"路由設定"},h={domain:"網站",documentRoot:"運行目錄",oneOrMoreOtherDomainsAreAlsoNamed:"發現了重復的域名",thisWillCauseIssuesWithConfigGeneration:"這將導致生成配置出現問題。",wwwSubdomain:"www 子域名",cdnSubdomain:"CDN 子域名",redirectSubdomains:"子域名重定向",server:"服務",listen:"監聽"},$={disableForThisDomain:"在此網站上停用",responseCode:"響應程式碼"},m="洋蔥",y={onion:m,onionLocation:`${m}位置`,provideAnOnionLocationToSetOnionLocationHeader:"提供一個洋蔥位置地址，為您的網站設定洋葱協定頭。",letsVisitorsKnownOnionServicesIsAvailable:"這可以讓訪問者知道你的網站的洋蔥服務版本可用於Tor瀏覽器。",learnMoreAboutOnionServices:"瞭解有關洋葱服務的更多資訊",onionLocationExpectedToEndWithOnion:"洋蔥位置地址通常以.onion結尾。"},C={https:a,logging:p,php:c,presets:d,python:u,reverseProxy:g,routing:b,server:h,restrict:$,onion:y},f="Mozilla",S="IPv4",x="IPv6",P={sslProfile:`${t.ssl}配置`,httpsMustBeEnabledOnOneSite:`必須在至少一個網站上啟用${t.https}才能配置全域${t.https}設定。`,portReuse:"連接埠複用",enableReuseOfPort:`${t.enable} 連接埠複用來為每個worker生成監聽套接字`,ocspDnsResolvers:"OCSP DNS解析器",cloudflareResolver:"Cloudflare解析器",googlePublicDns:"穀歌公共DNS",openDns:"OpenDNS",quad9:"Quad9",verisign:"Verisign",letsEncryptWebroot:`${t.letsEncrypt} Web根目錄`,letsEncryptCertRoot:`${t.letsEncrypt}證書目錄`,mozillaModern:`${f} Modern`,mozillaIntermediate:`${f} Intermediate`,mozillaOld:`${f} Old`,ipv4Only:`${S}`,ipv6Only:`${x}`,ipv4AndIpv6:`${S} & ${x}`},v={enableFileNotFoundErrorLogging:`${t.enable}“檔案未找到”錯誤日誌：`,logformat:"log_format",enableCloudflare:"將Cloudflare請求頭部添加到預設日誌格式",cfRay:"CF-Ray",cfConnectingIp:"CF-Connecting-IP",xForwardedFor:"X-Forwarded-For",xForwardedProto:"X-Forwarded-Proto",trueClientIp:"True-Client-IP",cfIpCountry:"CF-IPCountry",cfVisitor:"CF-Visitor",cdnLoop:"CDN-Loop"},k={nginxConfigDirectory:`${t.nginx}配置目錄`,mb:"MB"},T={gzipCompression:"Gzip 壓縮",enableGzipCompression:`${t.enable}Gzip壓縮`,brotliCompression:"Brotli 壓縮",enableBrotliCompression:`${t.enable}brotli壓縮`,brotliIsANonStandardModule:"Brotli 不是標準的 NGINX 模組, 前往 ",brotliGoogleNgxBrotliProject:"Google ngx_brotli 項目",brotliForBuildingNginxWithBrotli:" 構建支援 Brotli 的 NGINX!",expirationForAssets:"資源有效期",expirationForMedia:"媒體資源有效期",expirationForSvgs:"SVGs有效期",expirationForFonts:"字體有效期",performance:"效能"},D={pythonServer:`${t.python} 服務`,pythonMustBeEnabledOnOneSite:`必須在至少一個網站上啟用${t.python}才能配置全域${t.python}設定。`},N="傳統 X-Forwarded-* 標頭",I={reverseProxyMustBeEnabledOnOneSite:`必須在至少一個網站上啟用${t.reverseProxy}才能配置全域${t.reverseProxy}設定。`,seconds:"秒",passOn:`轉發 ${N} `,remove:`主動刪除 ${N}`},O={whenUsingWordPressUnsafeEvalIsOftenRequiredToAllowFunctionality:`當使用${t.wordPress}時, <code class="slim">script-src 'self' 'unsafe-inline' 'unsafe-eval';</code>經常需要在內容安全策略中，以允許管理面板的功能正確。`,security:"安全"},w={modularizedStructure:"模組化結構",enableModularizedConfigFiles:`${t.enable}模組化的設定檔案`,symlinkVhost:"符號連結 vhost",enableSymLinksFrom:`${t.enable}符號連結`,to:"到",shareConfiguration:"分享配置",resetConfiguration:"重置配置",resetGlobalConfig:"重置全域配置",resetAllDomains:"重置所有網站",resetAllDomainsConfig:"重置所有網站",removeAllDomains:"删除所有網站",resetDomainConfig:"重置網站配置",removeDomain:"删除網站",yesImSure:"好的",noCancel:"取消",tools:"工具",resetGlobalConfigBody:"您確定要重置全域配置部分中的所有配置選項嗎?",resetAllDomainsConfigBody:"您確定要重置所有網站的配置嗎?",removeAllDomainsBody:"您確定要删除所有網站的配置嗎?",areYouSureYouWantToResetAllConfigurationOptionsForThe:"您確定要重置",domain:"網站的所有配置選項嗎?",areYouSureYouWantToRemoveThe:"你確定要删除",domainConfiguration:"的網站配置嗎？"},F="Docker",R="Dockerfile",B={docker:F,dockerfile:R,dockerCompose:`${F} 編排服務`,applyDockerTweaks:`應用${F}調整`,applyDockerTweaksForNginx:`為使用${F}運行${t.nginx}進行配置調整。`,applyDockerTweaksExplainer:`將${t.nginx}用戶更新為<code class="slim">nginx</code>，將pid更新為<code class="slim">/var/run/nginx.pid</code>`,includeDockerfile:`生成${R}運行${t.nginx}與${F}`,includeDockerCompose:`生成docker-compose.yaml來運行${t.nginx} docker-compose`},E={https:P,logging:v,nginx:k,performance:T,python:D,reverseProxy:I,security:O,tools:w,docker:B},A="Certbot",H={commentOutSslDirectivesInConfiguration:`註解掉配置中的${t.ssl}相關指令:`,reloadYourNginxServer:`重新載入你的${t.nginx}伺服器:`,obtainSslCertificatesFromLetsEncrypt:`使用${A}從${t.letsEncrypt}取得${t.ssl}證書:`,uncommentSslDirectivesInConfiguration:`在配置中取消註解${t.ssl}相關指令:`,configureCertbotToReloadNginxOnCertificateRenewal:`配置${A}，當${t.nginx}成功更新證書時重新載入:`,certbotDoesNotNeedToBeSetupForYourConfiguration:`${A}不需要為您的${t.nginx}配置進行設定。 `,certbot:A},L={downloadTheGeneratedConfig:"<b>下載</b> 產生的配置：",andUploadItToYourServers:"然後<b>上傳</b>到你的伺服器的",directory:"目錄.",or:"或, ",copyBase64StringOfCompressedConfig:"複製壓縮配置的base64字串",pasteItInYourServersCommandLineAndExecute:"，將其粘貼到伺服器的命令列並執行。",navigateToYourNginxConfigurationDirectoryOnYourServer:`進入你的${t.nginx}伺服器上的<b>配置資料夾</b>:`,createABackupOfYourCurrentNginxConfiguration:`創建當前${t.nginx}配置的<b>備份</b>:`,extractTheNewCompressedConfigurationArchiveUsingTar:"使用tar<b>解壓</b>新的壓縮配置",download:"下載"},G={letsGoLive:"讓我們開始吧！",reloadNginxToLoadInYourNewConfiguration:`重新加載${t.nginx}以載入新的配置:`,goLive:"上線！"},M={generateDiffieHellmanKeysByRunningThisCommandOnYourServer:"在您的伺服器上運行此命令生成<b>Diffie-Hellman keys</b>:",createACommonAcmeChallengeDirectoryForLetsEncrypt:`創建一個通用的<b>ACME-challenge</b>目錄（用於 <b>${t.letsEncrypt}</b>):`,noAdditionalStepsAreNeededToSetUpSslForNginx:`無需任何操作，即可為您的${t.nginx}完成${t.ssl}配置`,sslInit:`${t.ssl} 初始化`},W={certbot:H,download:L,goLive:G,ssl:M},Y={lookingForAPlaceToDeploy:"👋 在尋找部署新配置的地方？",tryOutDigitalOceansDroplet:"試用用於Nginx的DigitalOcean的LEMP Droplet。"},j={wantToContributeChanges:"👋 想要申請新的功能，提出修改意見，或將該工具翻譯成新的語言？",getInvolvedOnGitHub:"在GitHub上參與進來"},z={droplet:Y,contribute:j},X={app:i,setup:s,footer:l,domainSections:C,globalSections:E,setupSections:W,callouts:z},V={common:t,languages:r.default,templates:X}}}]);