OC.L10N.register(
    "files_accesscontrol",
    {
    "No rule given" : "ルールが未定義です。",
    "File access control" : "ファイルアクセス制限",
    "Control access to files based on conditions" : "条件に基づいてファイルへのアクセスを制御する",
    "Restrict access to files based on factors such as filetype, user group memberships, time and more." : "ファイルタイプ、ユーザーグループの加入、時刻などの要素に基づいて、ファイルへのアクセスを制限します。",
    "Each rule group consists of one or more rules. A request matches a group if all rules evaluate to true. If a request matches at least one of the defined groups, the request is blocked and the file content can not be read or written." : "ルールグループはそれぞれ、1つ以上のルールで構成されます。リクエストに対して一つずつルールをチェックしてすべて正であれば、そのルールグループが適用されます。次に定義されたルールグループの1つでも適用されれば、リクエストがブロックされたり、ファイルの読み込みや書き込みが制限されます。",
    "Nextcloud's File Access Control app enables administrators to protect data from unauthorized access or modifications.\n\n## How it works\nThe administrator can create and manage a set of rule groups. Each of the rule groups consists of one or more rules. If all rules of a group hold true, the group matches the request and access is being denied or the upload is blocked. The rules criteria range from IP address, mimetype and request time to group membership, tags, user agent and more.\n\t\t\nAn example would be to deny access to MS Excel/XLSX files owned by the \"Human Resources\" group accessed from an IP not on the internal company network or to block uploads of files bigger than 512 mb by students in the \"1st year\" group.\n\t\nLearn more about File Access Control on [https://nextcloud.com/workflow](https://nextcloud.com/workflow)" : "\tNextcloudのFile Access Controlアプリにより、管理者は不正なアクセスや変更からデータを保護することができます。\n\n## 使い方\n管理者はルールグループを作成および管理できます。 各ルールグループは1つ以上のルールで構成されています。 グループのすべてのルールが当てはまる場合、そのグループはアクセスが拒否されるか、アップロードがブロックされます。  ルールの基準は、IPアドレス、MIMEタイプ、リクエスト時間からグループメンバーシップ、タグ、ユーザーエージェントなどにまで及びます。\n\t\t\n例としては、社内ネットワークにないIPからアクセスされた \"人事\"グループが所有するMS Excel / XLSXファイルへのアクセスを拒否することや、 \"1年生\"グループの学生による512MBを超えるファイルのアップロードをブロックすることがあります。 \n\t\nファイルアクセス制御の詳細については、[https://nextcloud.com/workflow](https://nextcloud.com/workflow)をご覧ください。"
},
"nplurals=1; plural=0;");
