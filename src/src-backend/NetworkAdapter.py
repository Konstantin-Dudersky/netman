
from dataclasses import dataclass

from pydantic import BaseModel

# @dataclass
class NetworkAdapter(BaseModel):
    adapter_type: str | None
    adapter_type_id: int | None
    auto_sense: bool | None
    availability: int | None
    caption: str | None
    config_manager_error_code: int | None
    config_manager_user_config: bool | None
    creation_class_name: str | None
    description: str | None
    device_id: str
    error_cleared: bool
    error_description: str
    guid: str
    index: int
    install_date: str # datetime
    installed: bool
    interface_index: int
    last_error_code: int
    mac_address: str
    manufacturer: str
    max_number_controlled: int
    max_speed: int
    name: str
    net_connection_id: str | None
