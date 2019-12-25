![](https://github.com/guenchi/setup-scheme/workflows/Master/badge.svg)

# setup-scheme
Github Action CI / CD setup for Scheme

### Usage

See [action.yml](https://github.com/guenchi/setup-scheme/blob/master/action.yml)

Exemple: [ci.yml](https://github.com/guenchi/setup-scheme/blob/master/.github/workflows/ci.yml)

```
on: push

jobs:
  jobsName:
    runs-on: macos-latest
    steps:
    - uses: actions/checkout@master
    - uses: guenchi/setup-scheme@master
      with:
        implementation: chez
    - run: chez yourTestFiles.ss
```

for Grebil Scheme:
```
    - run: |
            export PATH=/usr/local/opt/gambit-scheme/current/bin:/usr/local/opt/gerbil-scheme/libexec/bin:$PATH
            export GERBIL_HOME=/usr/local/opt/gerbil-scheme/libexec
            gxi yourTestFiles.ss
```

# Implementation tag: 
```
Chez Scheme          chez
Gambit Scheme        gambit
MIT Scheme           mit
```



# Todo:
```
cyclone
bigloo
rackect
larceny
ypsilon
guile
chicken
```