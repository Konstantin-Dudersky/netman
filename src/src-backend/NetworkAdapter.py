
from dataclasses import dataclass

from pydantic import BaseModel

# @dataclass
class NetworkAdapter(BaseModel):
    adapter_type: str | None
    adapter_type_id: int | None

    net_connection_id: str | None
