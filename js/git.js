配置SSH

ssh-keygen -t rsa -C [邮箱]

创建仓库
git init

克隆仓库
git clone [SSH]


索引仓库
git add .


本地仓库
git commit -a -m [注释]


上传远程仓库
git push

配置用户和邮箱
git config --local[global] user.name [名称]
git config --local[global] user.email [邮箱]

下载远程仓库
git pull [SSH]




1>配置SSH

ssh-keygen -t rsa -C [邮箱]

2>克隆仓库
git clone [SSH]

3>
echo "# webApp" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:1410feb1/webApp.git
git push -u origin master