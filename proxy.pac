"use strict";

var proxyServers=[
	"DIRECT; ",

	"PROXY 127.0.0.1:40755; ",
	"PROXY 127.0.0.1:4444; ",

	"SOCKS5 47.93.116.53:40756;",
	"PROXY 47.93.116.53:40759;",
	"SOCKS5 127.0.0.1:9050;",
];

var proxyCombination=[
	proxyServers[0],
	proxyServers[5]+proxyServers[3]+proxyServers[0]+proxyServers[1]+proxyServers[2]+proxyServers[4],
	proxyServers[5]+proxyServers[3]+proxyServers[1]+proxyServers[2]+proxyServers[4]+proxyServers[0],
	proxyServers[2]+proxyServers[4],	// 故意劣化连接
];

var autoProxyDomains={
	"*.cn":0,
	"*.120ask.com":0,
	"*.1688.com":0,
	"*.178linux.com":0,
	"*.365dmp.com":0,
	"*.4399.com":0,
	"*.4paradigm.com":0,
	"*.5054399.com":0,
	"*.51.la":0,
	"*.51cto.com":0,
	"*.53kf.com":0,
	"*.56.com":0,
	"*.58.com":0,
	"*.58che.com":0,
	"*.88cdn.com":0,
	"*.8le8le.com":0,
	"*.8btc.com":0,
	"*.acgvideo.com":0,
	"*.adutp.com":0,
	"*.agrantsem.com":0,
	"*.amap.com":0,
	"*.anquan.org":0,
	"*.aqniu.com":0,
	"*.autonavi.com":0,
	"*.banghaiwai.com":0,
	"*.bcadx.com":0,
	"*.biddingx.com":0,
	"*.bluebiu.com":0,
	"*.chinaz.com":0,
	"*.clouddn.com":0,
	"*.cloudfront.net":0,
	"*.cnbeta.com":3,
	"*.cnblogs.com":0, 
	"*.cnmo.com":0,
	"*.crsky.com":0,
	"*.csbew.com":0,
	"*.csdn.net":0,
	"*.eet-china.com":0,
	"*.emarbox.com":0,
	"*.flagcounter.com":0,
	"*.frdic.com":0,
	"*.geekpart.net":0,
	"*.gentages.net":0,
	"*.growingio.com":0,
	"*.gtags.net":0,
	"*.gtimg.com":0,
	"*.guokr.com":3,
	"*.haodf.com":0,
	"*.hupu.com":0,
	"*.imgcdc.com":0,
	"*.ip138.com":0,
	"*.ip163.com":0,
	"*.ipinyou.com":0,
	"*.ipip.net":0,
	"*.irs01.com":0,
	"*.it168.com":0,
	"*.iteye.com":0,
	"*.ithome.com":0,
	"*.jb51.net":0,
	"*.jcloudcache.com":0,
	"*.jianguoyun.com":0,
	"*.jsdelivr.net":0,
	"*.jxedt.com":0,
	"*.kanimg.com":0,
	"*.lapin365.com":0,
	"*.maoqiuapp.com":0,
	"*.mediav.com":0,
	"*.mi.com":0,
	"*.miaozhen.com":0,
	"*.mijisou.com":0,
	"*.miui.com":0,
	"*.mtty.com":0,
	"*.myqcloud.com":0,
	"*.nxez.com":0,
	"*.oschina.net":0,
	"*.phpinfo.me":0,
	"*.qcloudimg.com":0,
	"*.qihucdn.com":0,
	"*.qnssl.com":0,
	"*.quwj.com":0,
	"*.qy.net":0,
	"*.renren.com":0,
	"*.rtbasia.com":0,
	"*.scdng.com":0,
	"*.sina.net":0,
	"*.sjgnskf.com":0,
	"*.so.com":0,
	"*.sogou.com":0,
	"*.sohu.com":3,
	"*.solidot.org":0,
	"*.sspai.com":0,
	"*.stg8.com":0,
	"*.suishouxie.com":0,
	"*.superlib.com":0,
	"*.taihe.com":0,
	"*.tianyaui.com":0,
	"*.tingyun.com":0,
	"*.tongdun.net":0,
	"*.txrjy.com":0,
	"*.union-wifi.com":0,
	"*.uxengine.net":0,
	"*.webterren.com":0,
	"*.weibo.com":0, 
	"*.wenmeien.com":0,
	"*.williamlong.info":0,
	"*.wpdaxue.com":0,
	"*.xinhuanet.com":0,
	"*.xunlei.com":0,
	"*.xywy.com":0,
	"*.yigao.com":0,
	"*.ynet.com":0,
	"*.yunshipei.com":0,
	"*.zhanzhang.net":0,

	"*.51gjie.com":0,

	// Netease
	"*.126.com":0,
	"*.126.net":0,
	"*.127.net":0,
	"*.163.com":0,
	"*.163jiasu.com":0,
	"*.163yun.com":0,
	"*.netease.com":0,
	// 中国大学MOOC
	"*.icourse163.org":0,
	// 有道
	"*.ydstatic.com":0,
	"*.yodao.com":0,
	"*.youdao.com":0,
	
	// China Mobile
	"*.139.com":0,

	// 会计知识网
	"*.23cpc.com":0,

	// JD
	"*.300hu.com":0,
	"*.360buyimg.com":0,
	"*.doubleclick.net":0,
	"*.edgekey.net":0,
	"*.jcloudedge.com":0,
	"*.jd.com":0, 
	"*.jdcdn.com":0,
	"*.jomodns.com":0,
	"*.mediav.com":0,
	"*.qianxun.com":0,
	"*.wscdns.com":0,

	// Alibaba
	"*.aliapp.org":0,
	"*.alibaba.com":0,
	"*.alicdn.com":0,
	"*.alimama.com":0,
	"*.alipay.com":0,
	"*.alipayobjects.com":0,
	"*.aliyun.com":0,
	"*.aliyuncs.com":0,
	// 蚂蚁财富
	"*.antfortune.com":0,
	// 淘宝
	"*.mmstat.com":0,
	"*.tanx.com":0,
	"*.taobao.com":0,
	"*.taobaocdn.com":0,
	"*.tmall.com":0,

	// Baidu
	"*.baidu.com":0,
	"*.baidustatic.com":0,
	"*.bcebos.com":0,
	"*.bdimg.com":0,
	"*.bdstatic.com":0,
	"*.tiebaimg.com":0,
	"www.baidu.com":3,
	"m.baidu.com":3,
	"tieba.baidu.com":3,
	// hao123
	"*.hao123.com":0,
	// 作业帮
	"*.zuoyebang.cc":0,
	"*.zybang.com":0,
	
	// BiliBili
	"*.bilibili.com":3,
	"*.bilivideo.com":0,
	"*.hdslb.com":0,

	// bootstrapmb.com
	"*.bootstrapmb.com":0,

	// Bootstrap中文网
	"*.getbootstrap.net":0,

	// BOOX
	"*.boox.com":0,
	"*.send2boox.com":0,

        // 超星
        "*.chaoxing.com":0,
        "*.aichaoxing.com":0,
        "*.wswebpic.com":0,

	// China Construction Bank
	"*.ccb.com":0,

	// 中华新闻网
	"*.china.com":0,

	// CNKI
	"*.cnki.net":0,

	// Coolapk
	"*.coolapk.com":0,

	// 豆瓣
	"*.douban.com":0, 
	"*.doubanio.com":0,

	// 东方财富
	"*.dfcfw.com":0,
	"*.eastmoney.com":0,

	// Eudic
	"*.eudic.net":0,

	// Gitee
	"*.gitee.com":0,

	// 华为
	"*.huaweicloud.com":0,
	"*.hc-cdn.com":0,

	// 沪江网校
	"*.hjapi.com":0,
	"*.hjenglish.com":0,
	"*.hujiang.com":0,

	// 慕课网
	"*.imooc.com":0,

	// 简书
	"*.jianshu.com":0, 
	"*.jianshu.io":0,

	// 金山词霸
	"*.iciba.com":0,
	"*.ksosoft.com":0,
	"*.ksord.com":0,

	// 凤凰网
	"*.ifeng.com":3,

	// 爱奇异
	"*.iqiyi.com":3,
	"*.iqiyipic.com":0,

	// 可可英语
	"*.anquan.org":0,
	"*.kekenet.com":0,
	"*.tanx.com":0,
	"*.cnzz.com":0,
	
	// Lenovo
	"*.lenovo.com":0,

	// Linux公社
	"*.linuxidc.com":0,

	// Mozilla
	// 在中国大陆，Mozilla的百度广告屏蔽插件会不可浏览、不可下载
	"*.mozilla.org":0,
	"*.mozilla.net":0,

	// 小木虫
	"*.muchong.com":0,
	"*.xmcimg.com":0,

	// 水木社区
	"*.newsmth.net":3,

	// 办公知识网
	"*.officexr.com":0,

	// OnePlus
	"*.oneplus.com":0,
	"*.oneplusbbs.com":0,

	// OPPO
	"*.oppo.com":0,

	// 360
	"*.qhimg.com":3,
	"*.qhimgs0.com":0,
	"*.qhimgs3.com":0,
	"*.qhmsg.com":0,
	"*.qhres.com":0,

	// Tencent
	"*.qq.com":0, 
	"*.qcloud.com":0,
	"*.qzone.com":0,
	"*.tencent.com":0,

	// 菜鸟教程
	"*.runoob.com":0,

	// V2EX
	"*.v2ex.com":3,

	// 新华网
	"*.xinhuanet.com":3,

	// 优酷
	"*.cibntv.net.com":0,
	"*.effirst.com":0,
	"*.ykimg.com":0,
	"*.youku.com":3,

	// 智慧树
	"*.zhihuishu.com":0,

	// 知乎
	"*.zhihu.com":3,
	"*.zhimg.com":0,

	// Amazon
	"amazonaws.com":0,

	// BTC Clicks
	"*.btcclicks.com":0,
	"*.solvemedia.com":0,

	// Cloudflare
	"*.bizible.com":0,
	"*.cloudflare.com":0,
	"*.doubleclick.net":0,
	"*.onetrust.com":0,
	"*.zdassets.com":0,
	"*.zendesk.com":0,
	"*.zopim.com":0,

	// Microsoft
	"*.akamaized.net":0,
	"*.microsoft.com":0,
	"*.office.net":0,
	"*.office365.com":0,
	"*.sharepointonline.com":0,
	"cn.bing.com":0,
	// GitHub
	"github.com":0,

	// GoDaddy
	"*.godaddy.com":0,
	"*.liveperson.net":0,
	"*.split.io":0,
	"*.wsimg.com":0,

	// Google
	"*.googleadservices.com":0,
	"*.google-analytics.com":0,
	"dl.google.com":0,

	// VMware
	"*.cookielaw.org":0,
	"*.tiqcdn.com":0,
	"*.vmware.com":0,

	// Vultr
	"*.vultr.com":0,



	// Alphabet
	"*.abc.xyz":2,
	"*.android.com":2,
	"*.chromium.org":2,
	"*.ggpht.com":2,
	"*.google.ca":2,
	"*.google.com":2,
	"*.google.com.ph":2,
	"*.googleapis.com":2,
	"*.googleusercontent.com":2,
	"*.googlevideo.com":2,
	"*.gstatic.com":2,
	"*.recaptcha.net":2,
	"*.withgoogle.com":2,
	"*.youtube.com":2,

	// Agar.io
	"*.miniclip.com":2,
	"*.ytimg.com":2,
	"cm.miniclippt.com":2,

	// APKCombo
	"*.apkcombo.com":2,

	// APKMirror
	"*.apkmirror.com":2,

	// APKPure
	"*.apkpure.com":2,

	// APK-DL
	"*.apk-dl.com":2,

	// Internet Archive
	"*.archive.org":2,

	// BBC
	"*.bbc.com":3,
	"*.bbc.co.uk":2,
	"*.bbci.co.uk":2,

	// BTC Clicks
	"*.coinad.com":2,
	"*.diamonds.com":2,

	// Blogger
	"*.blogblog.com":2,
	"*.blogger.com":2,
	"*.blogspot.com":2,

	// Coursera
	"*.coursera.org":2,
	"d3njjcbhbojbot.cloudfront.net":2,

	// Dot.tk
	"*.dot.tk":2,

	// Dropbox
	"*.dropbox.com":2,
	"*.dropboxstatic.com":2,

	// DuckDuckGo
	"*.duckduckgo.com":2,

	// DW News
	"*.dw.com":3,
	"*.dwnews.com":2,
	"*.dwnews.net":2,

	// Facebook
	"*.facebook.com":3,
	"*.facebook.net":2,

	// Ever Note
	"*.evernote.com":2,

	// FT
	"*.ft.com":3,
	"*.ftchinese.com":3,

	// GitHub
	"*.github.io":2,
	"*.githubusercontent.com":2,
	"gist.github.com":2,

	// Grammarly
	"*.grammarly.com":2,
	"*.grammarly.io":2,

	// HAProxy
	"*.haproxy.org":2,

	// Inoreader
	"*.inoreader.com":2,
	"*.reabble.com":2,
	"*.feedx.net":2,
	"*.rsshub.app":2,

	"*.mchange.com":2,

	// Mega
	"*.mega.io":2,
	"*.mega.nz":2,
	"*.mega.co.nz":2,

	// Onedrive
	"*.onedrive.com":2,
	"*.onedrive.live.com":2,
	"*.livefilestore.com":2,
	
	// ProxySite.com
	"*.proxysite.com":2,

	// New York Times
	"*.nyt.com":3,
	"*.nytcn.me":3,
	"*.nytimes.com":3,

	// Quora
	"*.quora.com":2,

	// Reddit
	"*.redd.it":3,
	"*.reddit.com":3,
	"*.redditmedia.com":3,
	"*.redditstatic.com":3,

	// SearX
	"*.searx.info":2,
	"*.searx.me":2,
	
	// Snapchat
	"*.snapchat.com":2,

	// StartPage.com
	"*.startpage.com":2,

	// Twitter
	"*.pscp.tv":2,
	"*.twitter.com":2,
	"*.twimg.com":2,

	// VOA
	"*.voachinese.com":2,
	"*.voanews.com":2,

	// VPN Gate
	"*.vpngate.net":2,

	// Wikimedia Foundation
	"*.mediawiki.org":2,
	"*.wikibooks.org":2,
	"*.wikipedia.org":2,
	"*.wikimedia.org":2,
	"*.wikimediafoundation.org":2,

	// The Wall Street Journal
	"*.cmail20.com":3,
	"*.demdex.net":3,
	"*.moatads.com":3,
	"*.newscgp.com":3,
	"*.wsj.com":3,
	"*.wsj.net":3,

	// WordPress
	"*.gravatar.com":2,
	"*.wordpress.com":2,
	"*.wp.com":2,

	// XDA Developers
	"*.xda-developers.com":3,

	// 新加坡联合早报
	"*.zaobao.com":2,
	"*.zaobao.com.sg":2,

	"*.gitlab.com":2,
	"*.geti2p.net":2,
	"*.medium.com":2,
	"*.pincong.rocks":3,
	"*.reuters.com":3,
	"*.rfi.fr":3,
	"*.torproject.org":2,
	"*.w3schools.com":2,
};

function FindAutoProxyID(host, hosts) {
	"use strict";
	var proxyCombIndex=hosts[host];
	if (proxyCombination[proxyCombIndex]) {
		return proxyCombIndex;
	}
	var hostParts = host.split('.'), testHost = [];
	while (hostParts.length) {
		testHost.unshift(hostParts.pop());
		proxyCombIndex=hosts["*."+testHost.join('.')];
		if (proxyCombination[proxyCombIndex]) {
			return proxyCombIndex;
		}
	}
	return 1;	// Default proxy
}

function FindProxyForURL(url, host){
	"use strict";
	if (isPlainHostName(host))
		return 'DIRECT';
	return proxyCombination[FindAutoProxyID(host,autoProxyDomains)];
};
