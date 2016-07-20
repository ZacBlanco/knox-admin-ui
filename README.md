# Knox Admin UI

### Pre-Requisites

- A compiled and working installation of Knox 0.9.0 or higher
- The KnoxSSO topology (`knoxsso.xml`) which is provided with the standard Knox installation
- The knoxauth webapp deployed under the KnoxSSO topology

A Webapp which provides a user interface for the Knox Admin API to upload/download/save/edit Knox configuration parameters



## Deploying the Application
Replace the value of `KNOX_HOME` with the location of your knox installation
```sh
export KNOX_HOME=~/Documents/Projects/gh-knox/install/knox-0.10.0-SNAPSHOT
git clone https://github.com/zacblanco/knox-admin-ui.git $KNOX_HOME/data/applications/knox-manager
```

Add the following to the `admin.xml` topology

```xml
<application>
  <name>knox-manager</name>
</application>
```

Finally if you haven't started the Knox and LDAP servers already

```sh
ant start-test-servers
```
