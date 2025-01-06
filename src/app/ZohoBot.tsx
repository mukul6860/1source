"use client";
import Script from "next/script";

const ZohoBot = () => (
  <>
    <Script
      async
      src="https://salesiq.zohopublic.com/widget?wc=siq074c714ec822542d03f1a703444fd28dcf18afa999d230ad42ce86d058bd37ea"
      defer
    ></Script>
    <Script>
      {`window.$zoho=window.$zoho || { };$zoho.salesiq=$zoho.salesiq||{ready:function(){ }}`}
    </Script>
  </>
);

export default ZohoBot;
