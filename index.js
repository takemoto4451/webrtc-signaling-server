<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2575.7">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">import { WebSocketServer } from "ws";</p>
<p class="p2"><br></p>
<p class="p1">const wss = new WebSocketServer({ port: 10000 });</p>
<p class="p2"><br></p>
<p class="p1">wss.on("connection", ws =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">  </span>ws.on("message", msg =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">    </span>// 全クライアントに中継（2人用ならこれで十分）</p>
<p class="p1"><span class="Apple-converted-space">    </span>wss.clients.forEach(client =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">      </span>if (client !== ws &amp;&amp; client.readyState === 1) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>client.send(msg);</p>
<p class="p1"><span class="Apple-converted-space">      </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p1"><span class="Apple-converted-space">  </span>});</p>
<p class="p1">});</p>
</body>
</html>
