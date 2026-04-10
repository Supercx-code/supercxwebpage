import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const params = new URLSearchParams();
        formData.forEach((value, key) => {
            params.append(key, value as string);
        });
        params.set('Lead Source', 'Website');

        const response = await fetch('https://crm.zoho.in/crm/WebToLeadForm', {
            method: 'POST',
            body: params.toString(),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        const html = await response.text();
        const success = html.includes('Thank you') || html.includes('successfully');

        return NextResponse.json({ success }, { status: success ? 200 : 400 });
    } catch {
        return NextResponse.json({ success: false, error: 'Failed to submit' }, { status: 500 });
    }
}
