import React from "react";

export default function withPermission(Container, status) {
    return function WrappedWithPermission() {
        const user = JSON.parse(localStorage.getItem('user'));

        return user && user.status !== 'admin' && status === 'admin' ? null : (
            <Container />
        )
    }
}