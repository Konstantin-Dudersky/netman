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
    device_id: str | None
    error_cleared: bool | None
    error_description: str | None
    guid: str | None
    index: int | None
    install_date: str | None  # datetime
    installed: bool | None
    interface_index: int | None
    last_error_code: int | None
    mac_address: str | None
    manufacturer: str | None
    max_number_controlled: int | None
    max_speed: int | None
    name: str | None
    net_connection_id: str | None
    net_connection_status: int | None
    net_enabled: bool | None
    network_addresses: list[str] | None
    permanent_address: str | None
    physical_adapter: bool | None
    pnp_device_id: str | None
    power_management_capabilities: list[int] | None
    power_management_supported: bool | None
    product_name: str | None
    service_name: str | None
    speed: int | None
    status: str | None
    status_info: int | None
    system_creation_class_name: str | None
    system_name: str | None
    time_of_last_reset: str | None # datetime
