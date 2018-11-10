Load [react logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png) which has `cross-origin` enabled:

```
<RemoteImage
    width={80}
    height={80}
    alt={'image'}
    src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png'}
/>
```

Load [a breautiful image](https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_1280.jpg) that has *not* `cross origin` enabled, this will end up in an error:

```
<RemoteImage
    width={80}
    height={80}
    alt={'image'}
    src={'https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_1280.jpg'}
/>
```
