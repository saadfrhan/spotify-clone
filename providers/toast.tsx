"use client";

import { Toaster } from 'react-hot-toast';

import React from 'react'

export default function ToasterProvider() {
	return (
		<Toaster
			toastOptions={{
				style: {
					background: '#333',
					color: '#fff'
				}
			}}
		/>
	)
}
