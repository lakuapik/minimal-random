let node = document.createElement('div');

node.innerHTML = `
    <a style="
            position:fixed;
            right:10px;
            bottom:20px;
            padding:10px;
            border-radius:50px;
            background:#cacaca;
            color:#2e2e2e;
            z-index:9999;
            text-decoration:none;
            text-align:center;
            max-width:60px;
            max-height:80px;
            line-height:1em;
        "
        onMouseOver="this.style.boxShadow='0 0 2px 0 #2c2c2c'"
        onMouseOut="this.style.boxShadow='none'"
        href="https://theminimalists.com/random">
        ✨ Random Essay
    </a>
`;

document.body.append(node);