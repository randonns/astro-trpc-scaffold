# Astro/tRPC Scaffold

Astro와 tRPC를 사용한 웹 애플리케이션의 기초 골격을 구성해서 예제로 활용한다.

구체적으로 다음 기술들을 사용한다.

- Astro
- tRPC
- Kysely
- Tailwind / Shadcn
- Node.js

## Development Environment

개발 환경 구축을 위해 [Docker Desktop](https://www.docker.com/products/docker-desktop)을 설치하고, 루트 디렉토리에서 다음 명령을 실행하면 필요한 컨테이너들이 구동된다.

```shell
$ docker compose up
```

컨테이너 내에서 동작하는 서버는 소스 코드가 변경되면 자동으로 재시작된다.
