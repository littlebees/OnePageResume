function typeOf(value) {
    var type = typeof value;

    switch(type) {
        case 'object':
        return value === null ? 'null' : Object.prototype.toString.call(value).
            match(/^\[object (.*)\]$/)[1]

        case 'function':
        return 'Function';

        default:
        return type;
    }
}

export default function Node(props) {
    let nowType = typeOf(props.now)
    
    if (nowType === "string" || nowType === "String") {
        if (props.strCtx !== "") {
            const CustomTag = `${props.strCtx}`;
            return <CustomTag>{props.now}</CustomTag>
        } else {
            return props.now
        }
    } else if(props.now){
        if (props.now["url"]) {
            return <a href={props.now["url"]}><Node now={props.now["title"]} strCtx=""/></a>
        } else if (props.now["desc"]) {
            
            return [<Node now={props.now["topic"]}  strCtx="dt" />,
                    <dd>
                        {props.now["desc"].map(x => <Node now={x}  strCtx="h2" />)}
                    </dd>]
        } else if (props.now["list"]) {
            if (props.now["topic"]) {
                let cssclass = props.now["class"] ? props.now["class"] : ""
                return [<Node now={props.now["topic"]}  strCtx="dt" />,
                        <dd>
                            <ul className={cssclass}>
                                {props.now["list"].map(x => <li><Node now={x}  strCtx=""/></li>)}
                            </ul>
                        </dd>]
            } else {
                return [<Node now={props.now["title"]}  strCtx={props.strCtx}/>,
                        <ul>
                            {props.now["list"].map(x => <li><Node now={x}  strCtx=""/></li>)}
                        </ul>]
            }
        } else if (props.now["subtitle"]) {
            const CustomTag = `${props.strCtx}`;
            return <CustomTag><Node now={props.now["title"]}  strCtx=""/> <span><Node now={props.now["subtitle"]}  strCtx=""/></span></CustomTag>
        } else if (props.now["text"]) {
            return [<Node now={props.now["title"]}  strCtx="h2" />,
                    <p>{props.now["text"]}</p>]
        }
    } else {
        return null
    }
}