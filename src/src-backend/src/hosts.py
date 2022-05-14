from pydantic import BaseModel


class Host(BaseModel):
    address: str
    hostname: str
    comment: str | None


def read_hosts_file() -> list[Host]:
    with open("C:\Windows\System32\Drivers\etc\hosts", "r") as f:
        result: list[Host] = []
        for line in f.readlines():
            if line.startswith("#"):
                continue
            line_split = line.split()
            if len(line_split) < 2:
                continue
            host = Host(
                address=line_split[0],
                hostname=line_split[1],
            )
            if len(line_split) >= 3:
                host.comment = ' '.join(line_split[3:])

            result.append(host)
        return result
