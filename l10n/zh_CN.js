OC.L10N.register(
    "files_accesscontrol",
    {
    "No rule given" : "没有定义规则",
    "File access control" : "文件访问控制",
    "Control access to files based on conditions" : "根据条件控制对文件的访问",
    "Restrict access to files based on factors such as filetype, user group memberships, time and more." : "根据文件类型，用户组成员资格，时间等因素限制对文件的访问。",
    "Each rule group consists of one or more rules. A request matches a group if all rules evaluate to true. If a request matches at least one of the defined groups, the request is blocked and the file content can not be read or written." : "每个规则组由一个或多个规则组成。 如果所有规则都匹配，则该请求匹配整个组。 如果请求与定义的组中至少一个匹配，则该请求被阻止，并且将无法读取或写入文件内容。",
    "Nextcloud's File Access Control app enables administrators to protect data from unauthorized access or modifications.\n\n## How it works\nThe administrator can create and manage a set of rule groups. Each of the rule groups consists of one or more rules. If all rules of a group hold true, the group matches the request and access is being denied or the upload is blocked. The rules criteria range from IP address, mimetype and request time to group membership, tags, user agent and more.\n\t\t\nAn example would be to deny access to MS Excel/XLSX files owned by the \"Human Resources\" group accessed from an IP not on the internal company network or to block uploads of files bigger than 512 mb by students in the \"1st year\" group.\n\t\nLearn more about File Access Control on [https://nextcloud.com/workflow](https://nextcloud.com/workflow)" : "请求管理员使用 Nextcloud 的文件访问控制应用能够保护数据，防止未授权的访问或修改。\n##如何去做\n管理员可以创建和管理一套规则组。每个规则组由一个或多个规则组成。如果一个规则组的所有规则都为真，规则组与请求匹配并且访问被拒绝或上传被阻止。规则标准范围从 IP 地址，mime 类型和请求时间到组成员，标签，用户代理等等。\n\t\t\n例如，拒绝从公司内部网络以外的 IP 地址访问“人力资源”组的 MS Excel/XLSX 文件，或阻止“一年级”组的学生上传大于 512 mb 的文件。\n\t\n在 [https://nextcloud.com/workflow](https://nextcloud.com/workflow) 上学习更多关于文件访问控制的内容。"
},
"nplurals=1; plural=0;");
