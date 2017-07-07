(function() {var implementors = {};
implementors["azure_sdk_for_rust"] = ["impl&lt;T, E&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-proto/0.1/tokio_proto/streaming/body/struct.Body.html\" title=\"struct tokio_proto::streaming::body::Body\">Body</a>&lt;T, E&gt;","impl&lt;T, D&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/framed_write/struct.FramedWrite.html\" title=\"struct tokio_io::framed_write::FramedWrite\">FramedWrite</a>&lt;T, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>,&nbsp;</span>","impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/length_delimited/struct.FramedWrite.html\" title=\"struct tokio_io::length_delimited::FramedWrite\">FramedWrite</a>&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/bytes/0.4/bytes/buf/into_buf/trait.IntoBuf.html\" title=\"trait bytes::buf::into_buf::IntoBuf\">IntoBuf</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>,&nbsp;</span>","impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/length_delimited/struct.FramedRead.html\" title=\"struct tokio_io::length_delimited::FramedRead\">FramedRead</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a>,&nbsp;</span>","impl&lt;T, D&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/framed_read/struct.FramedRead.html\" title=\"struct tokio_io::framed_read::FramedRead\">FramedRead</a>&lt;T, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/framed_read/trait.Decoder.html\" title=\"trait tokio_io::framed_read::Decoder\">Decoder</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a>,&nbsp;</span>","impl&lt;T, U&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/framed/struct.Framed.html\" title=\"struct tokio_io::framed::Framed\">Framed</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/framed_read/trait.Decoder.html\" title=\"trait tokio_io::framed_read::Decoder\">Decoder</a>,&nbsp;</span>","impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/length_delimited/struct.Framed.html\" title=\"struct tokio_io::length_delimited::Framed\">Framed</a>&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/bytes/0.4/bytes/buf/into_buf/trait.IntoBuf.html\" title=\"trait bytes::buf::into_buf::IntoBuf\">IntoBuf</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a>,&nbsp;</span>","impl&lt;A&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/lines/struct.Lines.html\" title=\"struct tokio_io::lines::Lines\">Lines</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>,&nbsp;</span>","impl <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/net/tcp/struct.Incoming.html\" title=\"struct tokio_core::net::tcp::Incoming\">Incoming</a>","impl <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/reactor/interval/struct.Interval.html\" title=\"struct tokio_core::reactor::interval::Interval\">Interval</a>","impl&lt;T, C&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/io/frame/struct.Framed.html\" title=\"struct tokio_core::io::frame::Framed\">Framed</a>&lt;T, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/io/frame/trait.Codec.html\" title=\"trait tokio_core::io::frame::Codec\">Codec</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/io/trait.Io.html\" title=\"trait tokio_core::io::Io\">Io</a>,&nbsp;</span>","impl&lt;C&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/net/udp/frame/struct.UdpFramed.html\" title=\"struct tokio_core::net::udp::frame::UdpFramed\">UdpFramed</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/net/udp/frame/trait.UdpCodec.html\" title=\"trait tokio_core::net::udp::frame::UdpCodec\">UdpCodec</a>,&nbsp;</span>","impl <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"https://docs.rs/hyper/0.11.1/hyper/http/body/struct.Body.html\" title=\"struct hyper::http::body::Body\">Body</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
