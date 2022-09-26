import './css/about.css';

function About(){

    return(
        <div className="About">
            <header className="aboutHeader">
                <h1>ToU.</h1>
                <h3>Today, Do Your Best! ToU</h3>
            </header>
            <aside className="aboutAside">
                <div className="aboutAside1"><h4>Today, Do Your Best! ToU</h4></div>
                <div className="aboutAside2"><h4>ToU의 최선은</h4></div>
                <div className="aboutAside3"><h4>당신의 오늘을 만드는 도구</h4></div>
            </aside>
            <section className="aboutSection">
                <div className="aboutSection1">
                    <p>안녕하세요! 당신의 최선을 함께 만들어가는 디지털 문방구, ToU입니다.</p>
                    <p>투유는 아날로그의 감성과 디지털의 편리함을 연결하여, 투유러를 위한 똑똑한 성장도구를 만드는 디지털 문구 & 라이프스타일 브랜드입니다.</p>
                </div>
                <div className="aboutSection2-1">
                    <p>ToU는 Today, Do Your Best!를 줄여서 만든 이름입니다.</p>
                    <p>우리는 오늘 하루도 최선을 다하고 수많은 오늘이 쌓여서 내일의 내가 더 나은 모습으로 꿈을 향해 걸어갈 때 행복하고 의미 있는 삶을 살고 있다고 느껴요.</p>
                    <p>ToU가 생각하는 '최선'이란 <span className="underLine">오늘의 나와 내가 되고싶은 내일의 나를 주체적으로 탐구하고 결정하고 실천함으로써 나만의 고유한 삶을 채워가는 것</span>을 의미해요.</p>
                    <p>ToU는 우리의 최선을 가장 나답고 멋지게 채우기 위해 필요한 세가지에 집중했어요.</p>
                </div>
                <div className="aboutSection2-2">
                    <p>1. <strong>계획으로</strong> 내가 원하는 나의 모습을 향해 나아갈 나만의 가이드라인을 그리는 것</p>
                    <p>2. <strong>실천으로</strong> 나에게 필요한 일들을 놓치지 않고 하나씩 비워진 박스를 채워나가는 것</p>
                    <p>3. <strong>스마트하게</strong> 나에게 유용하고 적절한 도구를 적재적소에 활용하는 것</p>
                </div>
                <div className="aboutSection2-3">
                    <p>ToU는 투유러가 이 세가지로 <strong>오늘의 최선으로 더 나은 내일을</strong> 살아갈 수 있도록, <strong>스마트하게 계획하고 실천할 수 있는 도구</strong>들을 만들고 있어요!</p>
                </div>
                <div className="aboutSection3-1">
                    <p>기존 문구류가 종이로 만든 노트와 필기구라면, ToU는 우리의 가장 가까이 있는 스마트폰, 스마트워치, 태블릿기기 등 기록을 할 수 있는 디지털 기기를 모두 문구라고 표현해요.</p>
                    <p><strong>ToU는 우리의 오늘을 기록하고 내일을 그려나갈 도구, 디지털 문구</strong>를 시작으로 오늘의 최선을 도와줄 다양한 도구를 만들고 있어요.</p>
                    <p>아날로그의 감성과 디지털의 편리함을 연결하여 <strong>투유러를 위한 스마트한 성장 도구</strong>를 만들고 제안해요.</p>
                </div>
                <div className="aboutSection3-2">
                    <p><strong>디지털 속지</strong> - 태블릿 기기로 내가 원하는 라이프 스타일을 기록할 수 있도록, 목표달성을 위한 다양한 디지털 템플릿을 만들어요.</p>
                    <p><strong>디지털 악세서리</strong> - 기록하는 순간도 나다움을 위한 최선으로. 디지털 기기에서도 아날로그처럼 내 취향에 맞는 필기감을 느낄 수 있는 악세서리를 만들어요.</p>
                    <p><strong>2U클럽</strong> - 계획하고 실천하는 사람들의 커뮤니티. 투유어의 의지와 열정을 실행과 습관으로 멋지게 바꿀 참여프로그램을 만들어요.</p>
                </div>                
            </section>
            <footer className="aboutFooter">
                <div className="aboutFooter1">
                    <p>ToU는 오늘을 계획하고 실천하는 사람이 많아질수록</p>
                    <p>세상 모든 사람들이 더 나은 내일을 행복하게 살아갈 것이라고 믿어요!</p>
                    <br/><br/>
                    <p>더 나은 당신을 발견하고, 더 멋진 내일을 살 수 있도록</p>
                    <p>디지털과 아날로그를 연결하여, 더 똑똑하고 편리하게 성장할 수 있도록</p>
                    <p>우리의 오늘에 최선을 더하고, 더 멋진 내일의 우리를 만들어갈 도구를 ToU의 방식으로 만들어요.</p>
                    </div>
                    <div className="aboutFooter2">
                    <p style={{fontSize:"20px", fontWeight: "bold"}}>디지털과 아날로그를 넘나드는 나의 세상에서,</p>
                    <p style={{fontSize:"20px", fontWeight: "bold"}}>더 나은 내일을 위해</p>
                    <p style={{fontSize:"20px", fontWeight: "bold"}}>Today, Do your best!</p>
                </div>
            </footer>
        </div>
    );
} export default About;